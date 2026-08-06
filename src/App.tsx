import React, { useState, useEffect } from 'react';
import { Product, CartItem, NavPage } from './types';
import { INITIAL_PRODUCTS } from './data/initialProducts';

// Components & Views
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ImageModal } from './components/ImageModal';

import { HomeView } from './views/HomeView';
import { CatalogView } from './views/CatalogView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { AdminLoginModal } from './views/AdminLoginModal';
import { AdminDashboardView } from './views/AdminDashboardView';
import { AdminProductEditorView } from './views/AdminProductEditorView';

export function App() {
  // State initialization with localStorage fallback
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('juneba_products');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('juneba_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem('juneba_admin_logged') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inspectedImage, setInspectedImage] = useState<{ url: string; title?: string } | null>(
    null
  );

  // Sync products to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('juneba_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('juneba_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Navigation Helper
  const handleNavigate = (page: NavPage, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Operations
  const handleAddToCart = (product: Product, size?: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevCart, { product, quantity: 1, selectedSize: size || product.size }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Admin Actions
  const handleLoginSuccess = () => {
    setIsAdmin(true);
    localStorage.setItem('juneba_admin_logged', 'true');
    setIsAdminLoginOpen(false);
    handleNavigate('admin-dashboard');
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('juneba_admin_logged');
    handleNavigate('home');
  };

  const handleSaveProduct = (savedProduct: Product) => {
    setProducts((prev) => {
      const exists = prev.some((p) => p.id === savedProduct.id);
      if (exists) {
        return prev.map((p) => (p.id === savedProduct.id ? savedProduct : p));
      }
      return [savedProduct, ...prev];
    });
  };

  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Tem certeza que deseja excluir este produto do catálogo?')) {
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    }
  };

  const handleToggleProductActive = (productId: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, active: !p.active } : p))
    );
  };

  const currentSelectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  return (
    <div className="min-h-screen bg-[#111415] text-[#e1e3e4] font-body flex flex-col justify-between selection:bg-[#ec6a06] selection:text-[#000]">
      {/* Top Header Navbar */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        isAdmin={isAdmin}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
      />

      {/* Main Page Router */}
      <main className="flex-1 pb-12">
        {currentPage === 'home' && (
          <HomeView
            products={products}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onInspectImage={(url, title) => setInspectedImage({ url, title })}
          />
        )}

        {currentPage === 'catalog' && (
          <CatalogView
            products={products}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onInspectImage={(url, title) => setInspectedImage({ url, title })}
          />
        )}

        {currentPage === 'product-detail' && currentSelectedProduct && (
          <ProductDetailView
            product={currentSelectedProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            onInspectImage={(url, title) => setInspectedImage({ url, title })}
          />
        )}

        {currentPage === 'about' && <AboutView />}

        {currentPage === 'admin-dashboard' && (
          <AdminDashboardView
            products={products}
            onNavigate={handleNavigate}
            onEditProduct={(product) => {
              setProductToEdit(product);
              handleNavigate('admin-product-editor');
            }}
            onCreateNewProduct={() => {
              setProductToEdit(null);
              handleNavigate('admin-product-editor');
            }}
            onDeleteProduct={handleDeleteProduct}
            onToggleProductActive={handleToggleProductActive}
            onLogoutAdmin={handleLogoutAdmin}
            onInspectImage={(url, title) => setInspectedImage({ url, title })}
          />
        )}

        {currentPage === 'admin-product-editor' && (
          <AdminProductEditorView
            productToEdit={productToEdit}
            onSaveProduct={handleSaveProduct}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Lightbox Direct Image Link Modal */}
      {inspectedImage && (
        <ImageModal
          imageUrl={inspectedImage.url}
          title={inspectedImage.title}
          onClose={() => setInspectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;
