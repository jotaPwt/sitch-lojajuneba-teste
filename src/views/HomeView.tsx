import React, { useState } from 'react';
import { Product, NavPage } from '../types';

interface HomeViewProps {
  products: Product[];
  onNavigate: (page: NavPage, productId?: string) => void;
  onAddToCart: (product: Product) => void;
  onInspectImage: (url: string, title?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  products,
  onNavigate,
  onAddToCart,
  onInspectImage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');

  const categories = ['TODOS', 'Tênis', 'Vestuário', 'Acessórios'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'TODOS' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory && product.active;
  });

  return (
    <div className="space-y-12">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#1d2021] border-b border-[#27272A] pt-16 pb-20 px-4 md:px-8 rounded-b-3xl">
        <div className="max-w-[1280px] mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#111415] border border-[#ec6a06]/40 px-3 py-1 rounded-full text-xs font-mono text-[#ffb690] uppercase tracking-widest shadow-inner">
            <span className="material-symbols-outlined text-sm text-[#ec6a06]">
              local_fire_department
            </span>
            DROPS EXCLUSIVOS & CURADORIA DE BASQUETE
          </div>

          <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold text-[#e1e3e4] tracking-tight max-w-4xl mx-auto leading-none uppercase">
            PRODUTOS SELECIONADOS POR <span className="text-[#ffb690]">NELSON JUNIOR</span>
          </h1>

          <p className="text-sm md:text-base text-[#cfc4c5] max-w-2xl mx-auto font-body leading-relaxed">
            Sua loja definitiva de sneakers de elite, roupas vintage de quadra e acessórios colecionáveis com procedência garantida.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4">
            <div className="relative flex items-center bg-[#111415] border border-[#323536] focus-within:border-[#ec6a06] rounded-full p-2 shadow-2xl transition-all">
              <span className="material-symbols-outlined text-[#cfc4c5] ml-3 text-xl">search</span>
              <input
                type="text"
                placeholder="SEARCH DROPS, SNEAKERS, VINTAGE..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent text-[#e1e3e4] px-3 py-1.5 text-sm outline-none font-body placeholder-[#cfc4c5]/40"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-[#cfc4c5] hover:text-[#e1e3e4] mr-2"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Categories Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-headline uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#ec6a06] text-[#000000] font-bold shadow-lg scale-105'
                    : 'bg-[#111415] text-[#cfc4c5] border border-[#282a2b] hover:border-[#ffb690]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Decorative backgroundcourt lines */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-[#ffffff] rounded-full"></div>
          <div className="absolute w-[300px] h-[300px] border border-[#ffffff] rounded-full"></div>
        </div>
      </section>

      {/* Featured Showcase Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#27272A] pb-4 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ec6a06] uppercase tracking-widest mb-1">
              <span className="material-symbols-outlined text-sm">sports_basketball</span>
              CURADORIA OFICIAL
            </div>
            <h2 className="font-headline text-3xl md:text-4xl text-[#e1e3e4] tracking-tight uppercase">
              PRODUTOS EM DESTAQUE
            </h2>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="text-xs font-headline text-[#ffb690] hover:text-[#e1e3e4] flex items-center gap-1 uppercase tracking-wider font-bold transition-colors"
          >
            VER CATÁLOGO COMPLETO
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-[#191c1d] rounded-xl border border-[#282a2b] space-y-3">
              <span className="material-symbols-outlined text-5xl text-[#4c4546]">search_off</span>
              <p className="font-headline text-2xl text-[#e1e3e4]">NENHUM PRODUTO ENCONTRADO</p>
              <p className="text-xs text-[#cfc4c5]/70 font-body">
                Tente buscar com outro termo ou limpe os filtros selecionados.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('TODOS');
                }}
                className="mt-2 px-4 py-2 bg-[#ec6a06] text-[#000] text-xs font-headline font-bold rounded"
              >
                LIMPAR FILTROS
              </button>
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-[#191c1d] border border-[#282a2b] hover:border-[#ffb690]/60 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-square bg-[#111415] p-6 flex items-center justify-center overflow-hidden border-b border-[#282a2b]">
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#ec6a06] text-[#000000] text-[10px] font-headline font-bold uppercase px-2 py-0.5 rounded tracking-wider z-10 shadow">
                      {product.badge}
                    </span>
                  )}

                  {/* Status Badge if sold/out */}
                  {product.status === 'esgotado' && (
                    <span className="absolute top-3 right-3 bg-[#323536] text-[#cfc4c5] text-[10px] font-headline uppercase px-2 py-0.5 rounded z-10">
                      ESGOTADO
                    </span>
                  )}
                  {product.status === 'vendido' && (
                    <span className="absolute top-3 right-3 bg-red-900/80 text-red-200 text-[10px] font-headline uppercase px-2 py-0.5 rounded z-10">
                      VENDIDO
                    </span>
                  )}

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Image Lightbox Trigger */}
                  <button
                    onClick={() => onInspectImage(product.images[0], product.name)}
                    className="absolute bottom-3 right-3 bg-[#111415]/80 text-[#cfc4c5] hover:text-[#ffb690] p-1.5 rounded-full border border-[#282a2b] opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    title="Ver Imagem Direta / Link"
                  >
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] font-mono text-[#cfc4c5]/70 uppercase tracking-wider">
                      {product.brand} • {product.category}
                    </div>
                    <h3
                      onClick={() => onNavigate('product-detail', product.id)}
                      className="font-headline text-xl text-[#e1e3e4] group-hover:text-[#ffb690] transition-colors cursor-pointer line-clamp-1 mt-0.5"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#cfc4c5]/70 line-clamp-2 mt-1 font-body">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#282a2b]/60 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#cfc4c5]/60 block font-mono">PREÇO</span>
                      <span className="font-headline text-xl text-[#ffb690] font-bold">
                        R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('product-detail', product.id)}
                        className="px-3 py-1.5 bg-[#282a2b] hover:bg-[#323536] text-[#e1e3e4] text-xs font-headline rounded uppercase tracking-wider font-bold transition-colors"
                      >
                        VER DETALHES
                      </button>
                      <button
                        disabled={product.status !== 'disponivel'}
                        onClick={() => onAddToCart(product)}
                        className={`p-2 rounded transition-colors ${
                          product.status === 'disponivel'
                            ? 'bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000]'
                            : 'bg-[#282a2b] text-[#4c4546] cursor-not-allowed'
                        }`}
                        title="Adicionar ao Carrinho"
                      >
                        <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Banner / Value Props */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 pt-8">
        <div className="bg-[#1d2021] border border-[#282a2b] rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#111415] text-[#ec6a06] rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <h4 className="font-headline text-xl text-[#e1e3e4]">100% AUTÊNTICO</h4>
              <p className="text-xs text-[#cfc4c5]/70 mt-1 font-body leading-relaxed">
                Cada item passa por inspeção técnica minuciosa antes de ser anunciado.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#111415] text-[#ec6a06] rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <div>
              <h4 className="font-headline text-xl text-[#e1e3e4]">ENVIO SEGURO BRASIL</h4>
              <p className="text-xs text-[#cfc4c5]/70 mt-1 font-body leading-relaxed">
                Embalagens reforçadas duplas com rastreamento total até sua porta.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 bg-[#111415] text-[#ec6a06] rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">chat</span>
            </div>
            <div>
              <h4 className="font-headline text-xl text-[#e1e3e4]">ATENDIMENTO DIRETO</h4>
              <p className="text-xs text-[#cfc4c5]/70 mt-1 font-body leading-relaxed">
                Fale com Nelson Junior no WhatsApp para dúvidas, tamanhos e negociações.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
