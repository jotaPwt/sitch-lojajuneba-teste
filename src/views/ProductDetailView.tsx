import React, { useState } from 'react';
import { Product, NavPage } from '../types';

interface ProductDetailViewProps {
  product: Product;
  onNavigate: (page: NavPage, productId?: string) => void;
  onAddToCart: (product: Product) => void;
  onInspectImage: (url: string, title?: string) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  onNavigate,
  onAddToCart,
  onInspectImage,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.size || 'US 10 / BR 42');

  const mainImage = product.images[selectedImageIndex] || product.images[0];

  const handleWhatsAppInterest = () => {
    const message = `*Olá, Nelson Junior! Tenho interesse neste item da Loja do Juneba:*\n\n` +
      `*Produto:* ${product.name}\n` +
      `*SKU:* ${product.sku}\n` +
      `*Preço:* R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n` +
      `*Tamanho:* ${selectedSize}\n` +
      `*Condição:* ${product.condition || 'N/A'}\n\n` +
      `Gostaria de saber detalhes sobre pagamento e entrega!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-mono text-[#cfc4c5]/70 uppercase">
        <button
          onClick={() => onNavigate('home')}
          className="hover:text-[#ffb690] transition-colors"
        >
          HOME
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate('catalog')}
          className="hover:text-[#ffb690] transition-colors"
        >
          {product.category.toUpperCase()}
        </button>
        <span>/</span>
        <span className="text-[#ffb690] font-semibold truncate">{product.name.toUpperCase()}</span>
      </nav>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image Stage */}
          <div className="relative aspect-square bg-[#191c1d] border border-[#282a2b] rounded-2xl p-8 flex items-center justify-center overflow-hidden shadow-2xl">
            {product.badge && (
              <span className="absolute top-4 left-4 bg-[#ec6a06] text-[#000000] font-headline text-xs font-bold uppercase px-3 py-1 rounded shadow-md z-10">
                {product.badge}
              </span>
            )}

            <button
              onClick={() => onInspectImage(mainImage, `${product.name} - Imagem ${selectedImageIndex + 1}`)}
              className="absolute top-4 right-4 bg-[#111415]/80 hover:bg-[#ec6a06] hover:text-[#000] text-[#e1e3e4] px-3 py-1.5 rounded border border-[#282a2b] text-xs font-headline flex items-center gap-1.5 transition-colors z-10"
              title="Ver Link Direto da Imagem no HTML"
            >
              <span className="material-symbols-outlined text-sm">zoom_in</span>
              LINK DIRETO DA IMAGEM
            </button>

            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnails Gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`aspect-square bg-[#191c1d] border rounded-lg p-2 flex items-center justify-center transition-all ${
                    selectedImageIndex === idx
                      ? 'border-[#ec6a06] ring-2 ring-[#ec6a06]/40 scale-105'
                      : 'border-[#282a2b] hover:border-[#cfc4c5]/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Specs & Actions (5 cols) */}
        <div className="lg:col-span-5 bg-[#191c1d] border border-[#282a2b] p-6 md:p-8 rounded-2xl space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ec6a06] uppercase tracking-widest mb-1">
              <span>{product.brand}</span>
              <span>•</span>
              <span>{product.category}</span>
            </div>
            <h1 className="font-headline text-3xl md:text-5xl text-[#e1e3e4] tracking-tight uppercase leading-none">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-sm font-mono text-[#cfc4c5]/70 mt-1">{product.subtitle}</p>
            )}
          </div>

          {/* Price Box */}
          <div className="p-4 bg-[#111415] border border-[#282a2b] rounded-xl flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#cfc4c5]/60 font-mono block">VALOR DO DROP</span>
              <div className="flex items-baseline gap-3">
                <span className="font-headline text-3xl md:text-4xl text-[#ffb690] font-bold">
                  R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#cfc4c5]/50 line-through font-mono">
                    R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                )}
              </div>
            </div>

            <span
              className={`text-xs font-headline font-bold px-2.5 py-1 rounded uppercase ${
                product.status === 'disponivel'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}
            >
              {product.status.toUpperCase()}
            </span>
          </div>

          {/* Specs Details Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-[#111415] p-3 rounded border border-[#282a2b]">
              <span className="text-[#cfc4c5]/60 font-mono block">SKU</span>
              <span className="font-mono text-[#e1e3e4] font-semibold">{product.sku}</span>
            </div>
            <div className="bg-[#111415] p-3 rounded border border-[#282a2b]">
              <span className="text-[#cfc4c5]/60 font-mono block">CONDIÇÃO</span>
              <span className="font-body text-[#e1e3e4] font-semibold">{product.condition || 'Excelente'}</span>
            </div>
            <div className="bg-[#111415] p-3 rounded border border-[#282a2b]">
              <span className="text-[#cfc4c5]/60 font-mono block">TAMANHO</span>
              <span className="font-mono text-[#e1e3e4] font-semibold">{product.size || 'Unico'}</span>
            </div>
            <div className="bg-[#111415] p-3 rounded border border-[#282a2b]">
              <span className="text-[#cfc4c5]/60 font-mono block">ESTOQUE</span>
              <span className="font-mono text-[#e1e3e4] font-semibold">{product.stock} UNIDADE(S)</span>
            </div>
          </div>

          {/* Curator Notes */}
          {product.curatorNotes && (
            <div className="p-4 bg-[#111415] border-l-2 border-[#ec6a06] rounded-r-lg space-y-1">
              <span className="text-[11px] font-mono text-[#ec6a06] uppercase tracking-wider flex items-center gap-1 font-bold">
                <span className="material-symbols-outlined text-sm">verified</span>
                NOTAS DO CURADOR (NELSON JUNIOR)
              </span>
              <p className="text-xs text-[#cfc4c5] font-body leading-relaxed italic">
                "{product.curatorNotes}"
              </p>
            </div>
          )}

          {/* Description */}
          <div className="space-y-2">
            <h4 className="font-headline text-sm text-[#e1e3e4] uppercase tracking-wider">
              DESCRIÇÃO DO ITEM
            </h4>
            <p className="text-xs text-[#cfc4c5] font-body leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleWhatsAppInterest}
              className="w-full bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-lg py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold tracking-wider transition-colors shadow-lg uppercase"
            >
              <span className="material-symbols-outlined text-xl">chat</span>
              TENHO INTERESSE (WHATSAPP)
            </button>

            <button
              disabled={product.status !== 'disponivel'}
              onClick={() => onAddToCart(product)}
              className="w-full bg-[#282a2b] hover:bg-[#323536] text-[#e1e3e4] font-headline text-sm py-3 rounded-lg flex items-center justify-center gap-2 font-bold tracking-wider transition-colors uppercase border border-[#323536]"
            >
              <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
