import React, { useState, useMemo } from 'react';
import { Product, NavPage } from '../types';

interface CatalogViewProps {
  products: Product[];
  onNavigate: (page: NavPage, productId?: string) => void;
  onAddToCart: (product: Product) => void;
  onInspectImage: (url: string, title?: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  onNavigate,
  onAddToCart,
  onInspectImage,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'price-low' | 'price-high'>('recent');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => p.active || statusFilter === 'rascunho')
      .filter((p) => {
        if (selectedCategories.length === 0) return true;
        return selectedCategories.some((cat) =>
          p.category.toLowerCase().includes(cat.toLowerCase())
        );
      })
      .filter((p) => {
        if (statusFilter === 'all') return true;
        if (statusFilter === 'disponivel') return p.status === 'disponivel';
        if (statusFilter === 'esgotado') return p.status === 'esgotado' || p.status === 'vendido';
        if (statusFilter === 'rascunho') return p.status === 'rascunho';
        return true;
      })
      .filter((p) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.sku.toLowerCase().includes(q)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [products, selectedCategories, statusFilter, sortBy, searchQuery]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Title Header */}
      <div className="border-b border-[#27272A] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ec6a06] uppercase tracking-widest mb-1">
            <span className="material-symbols-outlined text-sm">inventory_2</span>
            CATÁLOGO OFICIAL DE PRODUTOS
          </div>
          <h1 className="font-headline text-4xl md:text-6xl text-[#e1e3e4] tracking-tight uppercase">
            THE DROP.
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-[#cfc4c5]/70 font-mono">ORDENAR POR:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-[#191c1d] text-[#e1e3e4] text-xs font-headline border border-[#282a2b] rounded px-3 py-2 outline-none focus:border-[#ec6a06]"
          >
            <option value="recent">MAIS RECENTES</option>
            <option value="price-low">MENOR PREÇO</option>
            <option value="price-high">MAIOR PREÇO</option>
          </select>
        </div>
      </div>

      {/* Main Grid with Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="space-y-6 bg-[#191c1d] border border-[#282a2b] p-6 rounded-xl h-fit">
          <div>
            <h3 className="font-headline text-lg text-[#e1e3e4] border-b border-[#282a2b] pb-2 mb-3 tracking-wide">
              BUSCAR NO DROPS
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Nome, SKU, Marca..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#111415] text-[#e1e3e4] text-xs p-2.5 rounded border border-[#282a2b] outline-none focus:border-[#ec6a06]"
              />
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg text-[#e1e3e4] border-b border-[#282a2b] pb-2 mb-3 tracking-wide">
              CATEGORIA
            </h3>
            <div className="space-y-2 text-xs font-body text-[#cfc4c5]">
              {['Tênis', 'Vestuário', 'Acessórios'].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer hover:text-[#e1e3e4]"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="accent-[#ec6a06] rounded"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg text-[#e1e3e4] border-b border-[#282a2b] pb-2 mb-3 tracking-wide">
              STATUS
            </h3>
            <div className="space-y-2 text-xs font-body text-[#cfc4c5]">
              {[
                { id: 'all', label: 'Todos os itens' },
                { id: 'disponivel', label: 'Disponíveis' },
                { id: 'esgotado', label: 'Esgotados / Vendidos' },
              ].map((st) => (
                <label
                  key={st.id}
                  className="flex items-center gap-2 cursor-pointer hover:text-[#e1e3e4]"
                >
                  <input
                    type="radio"
                    name="statusFilter"
                    checked={statusFilter === st.id}
                    onChange={() => setStatusFilter(st.id)}
                    className="accent-[#ec6a06]"
                  />
                  <span>{st.label}</span>
                </label>
              ))}
            </div>
          </div>

          {(selectedCategories.length > 0 || statusFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategories([]);
                setStatusFilter('all');
                setSearchQuery('');
              }}
              className="w-full py-2 bg-[#282a2b] hover:bg-[#323536] text-[#ffb690] text-xs font-headline font-bold rounded uppercase transition-colors"
            >
              Resetar Filtros
            </button>
          )}
        </div>

        {/* Product Cards Listing */}
        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="p-12 text-center bg-[#191c1d] border border-[#282a2b] rounded-xl space-y-3">
              <span className="material-symbols-outlined text-5xl text-[#4c4546]">inventory</span>
              <p className="font-headline text-2xl text-[#e1e3e4]">Nenhum produto encontrado</p>
              <p className="text-xs text-[#cfc4c5]/70 font-body">
                Tente ajustar os filtros ao lado.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-[#191c1d] border border-[#282a2b] hover:border-[#ffb690]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-square bg-[#111415] p-6 flex items-center justify-center border-b border-[#282a2b]">
                    {/* Status Pill */}
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-headline uppercase font-bold px-2 py-0.5 rounded shadow ${
                        product.status === 'disponivel'
                          ? 'bg-emerald-500 text-black'
                          : product.status === 'esgotado'
                          ? 'bg-[#323536] text-[#cfc4c5]'
                          : 'bg-red-900 text-red-200'
                      }`}
                    >
                      {product.status === 'disponivel'
                        ? 'DISPONÍVEL'
                        : product.status === 'esgotado'
                        ? 'ESGOTADO'
                        : 'VENDIDO'}
                    </span>

                    {product.badge && (
                      <span className="absolute top-3 right-3 bg-[#ec6a06] text-[#000] text-[10px] font-headline font-bold uppercase px-2 py-0.5 rounded">
                        {product.badge}
                      </span>
                    )}

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    <button
                      onClick={() => onInspectImage(product.images[0], product.name)}
                      className="absolute bottom-3 right-3 bg-[#111415]/80 text-[#cfc4c5] hover:text-[#ffb690] p-1.5 rounded-full border border-[#282a2b] opacity-0 group-hover:opacity-100 transition-opacity z-10"
                      title="Ver Link Direto da Imagem"
                    >
                      <span className="material-symbols-outlined text-sm">zoom_in</span>
                    </button>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-[10px] font-mono text-[#cfc4c5]/60 uppercase">
                        {product.brand} • {product.category}
                      </div>
                      <h3
                        onClick={() => onNavigate('product-detail', product.id)}
                        className="font-headline text-xl text-[#e1e3e4] group-hover:text-[#ffb690] transition-colors cursor-pointer line-clamp-1 mt-0.5"
                      >
                        {product.name}
                      </h3>
                      {product.subtitle && (
                        <p className="text-xs text-[#cfc4c5]/70 font-mono">{product.subtitle}</p>
                      )}
                    </div>

                    <div className="pt-2 border-t border-[#282a2b]/60 flex items-center justify-between">
                      <div>
                        <span className="font-headline text-xl text-[#ffb690] font-bold">
                          R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onNavigate('product-detail', product.id)}
                          className="px-3 py-1.5 bg-[#282a2b] hover:bg-[#323536] text-[#e1e3e4] text-xs font-headline rounded font-bold uppercase transition-colors"
                        >
                          DETALHES
                        </button>
                        <button
                          disabled={product.status !== 'disponivel'}
                          onClick={() => onAddToCart(product)}
                          className={`p-2 rounded transition-colors ${
                            product.status === 'disponivel'
                              ? 'bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000]'
                              : 'bg-[#282a2b] text-[#4c4546] cursor-not-allowed'
                          }`}
                        >
                          <span className="material-symbols-outlined text-lg">
                            add_shopping_cart
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
