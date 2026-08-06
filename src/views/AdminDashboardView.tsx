import React, { useState } from 'react';
import { Product, NavPage } from '../types';
import { ADMIN_AVATAR_URL } from '../data/initialProducts';

interface AdminDashboardViewProps {
  products: Product[];
  onNavigate: (page: NavPage, productId?: string) => void;
  onEditProduct: (product: Product) => void;
  onCreateNewProduct: () => void;
  onDeleteProduct: (productId: string) => void;
  onToggleProductActive: (productId: string) => void;
  onLogoutAdmin: () => void;
  onInspectImage: (url: string, title?: string) => void;
}

export const AdminDashboardView: React.FC<AdminDashboardViewProps> = ({
  products,
  onNavigate,
  onEditProduct,
  onCreateNewProduct,
  onDeleteProduct,
  onToggleProductActive,
  onLogoutAdmin,
  onInspectImage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const totalProducts = products.length;
  const totalPublished = products.filter((p) => p.active && p.status === 'disponivel').length;
  const totalSold = products.filter((p) => p.status === 'vendido' || p.status === 'esgotado').length;
  const totalDraft = products.filter((p) => p.status === 'rascunho').length;

  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      filterCategory === 'all' || p.category.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Admin Top Header */}
      <div className="bg-[#191c1d] border border-[#282a2b] p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={ADMIN_AVATAR_URL}
            alt="Nelson Junior Admin"
            className="w-14 h-14 rounded-full border-2 border-[#ec6a06] object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-headline text-2xl text-[#e1e3e4]">NELSON JUNIOR</h1>
              <span className="bg-[#ec6a06] text-[#000] text-[10px] font-headline font-bold px-2 py-0.5 rounded uppercase">
                ADMIN
              </span>
            </div>
            <p className="text-xs text-[#cfc4c5]/70 font-mono">admin@lojadojuneba.com.br</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onCreateNewProduct}
            className="px-5 py-2.5 bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-sm rounded-lg font-bold tracking-wider flex items-center gap-2 transition-colors uppercase shadow"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            NOVO DROP / PRODUTO
          </button>

          <button
            onClick={onLogoutAdmin}
            className="p-2.5 bg-[#282a2b] hover:bg-red-900/40 text-[#cfc4c5] hover:text-red-300 border border-[#323536] rounded-lg transition-colors"
            title="Sair do Painel Admin"
          >
            <span className="material-symbols-outlined text-xl">logout</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#191c1d] border border-[#282a2b] p-5 rounded-xl space-y-1">
          <span className="text-[11px] font-mono text-[#cfc4c5]/60 uppercase">
            TOTAL DE PRODUTOS
          </span>
          <span className="font-headline text-3xl text-[#e1e3e4] font-bold block">
            {totalProducts}
          </span>
        </div>

        <div className="bg-[#191c1d] border border-[#282a2b] p-5 rounded-xl space-y-1">
          <span className="text-[11px] font-mono text-emerald-400 uppercase">
            PUBLICADOS (DISPONÍVEIS)
          </span>
          <span className="font-headline text-3xl text-emerald-400 font-bold block">
            {totalPublished}
          </span>
        </div>

        <div className="bg-[#191c1d] border border-[#282a2b] p-5 rounded-xl space-y-1">
          <span className="text-[11px] font-mono text-red-400 uppercase">
            VENDIDOS / ESGOTADOS
          </span>
          <span className="font-headline text-3xl text-red-400 font-bold block">
            {totalSold}
          </span>
        </div>

        <div className="bg-[#191c1d] border border-[#282a2b] p-5 rounded-xl space-y-1">
          <span className="text-[11px] font-mono text-amber-400 uppercase">EM RASCUNHO</span>
          <span className="font-headline text-3xl text-amber-400 font-bold block">
            {totalDraft}
          </span>
        </div>
      </div>

      {/* Products Management Table Card */}
      <div className="bg-[#191c1d] border border-[#282a2b] rounded-2xl p-6 space-y-6">
        {/* Table Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#282a2b]">
          <div>
            <h2 className="font-headline text-2xl text-[#e1e3e4] uppercase">
              PRODUTOS CADASTRADOS
            </h2>
            <p className="text-xs text-[#cfc4c5]/70 font-body">
              Gerencie estoque, valores, fotos e visibilidade de cada item do catálogo.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              placeholder="Buscar por nome, SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-[#111415] border border-[#282a2b] rounded p-2 text-xs text-[#e1e3e4] outline-none focus:border-[#ec6a06]"
            />

            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-[#111415] border border-[#282a2b] rounded p-2 text-xs text-[#e1e3e4] outline-none font-headline"
            >
              <option value="all">TODAS AS CATEGORIAS</option>
              <option value="tênis">TÊNIS</option>
              <option value="vestuário">VESTUÁRIO</option>
              <option value="acessórios">ACESSÓRIOS</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body border-collapse">
            <thead>
              <tr className="border-b border-[#282a2b] text-[#cfc4c5]/60 font-mono uppercase">
                <th className="py-3 px-3">MÍDIA</th>
                <th className="py-3 px-3">PRODUTO & SKU</th>
                <th className="py-3 px-3">CATEGORIA</th>
                <th className="py-3 px-3">PREÇO</th>
                <th className="py-3 px-3">ESTOQUE</th>
                <th className="py-3 px-3">STATUS</th>
                <th className="py-3 px-3 text-right">AÇÕES</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#282a2b]">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#111415]/50 transition-colors">
                  <td className="py-3 px-3">
                    <div className="relative w-12 h-12 bg-[#111415] border border-[#282a2b] rounded overflow-hidden p-1 group">
                      <img
                        src={product.images[0]}
                        alt=""
                        className="w-full h-full object-contain"
                      />
                      <button
                        onClick={() => onInspectImage(product.images[0], product.name)}
                        className="absolute inset-0 bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Ver link direto"
                      >
                        <span className="material-symbols-outlined text-sm">zoom_in</span>
                      </button>
                    </div>
                  </td>

                  <td className="py-3 px-3 max-w-[220px]">
                    <span className="font-headline text-sm text-[#e1e3e4] block truncate">
                      {product.name}
                    </span>
                    <span className="font-mono text-[10px] text-[#cfc4c5]/60 block">
                      SKU: {product.sku}
                    </span>
                  </td>

                  <td className="py-3 px-3 font-mono text-[#cfc4c5]">
                    {product.brand} • {product.category}
                  </td>

                  <td className="py-3 px-3 font-mono font-bold text-[#ffb690]">
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </td>

                  <td className="py-3 px-3 font-mono text-[#e1e3e4]">
                    {product.stock} un.
                  </td>

                  <td className="py-3 px-3">
                    <span
                      className={`text-[10px] font-headline font-bold px-2 py-0.5 rounded uppercase ${
                        product.status === 'disponivel'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : product.status === 'rascunho'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="py-3 px-3 text-right space-x-2">
                    <button
                      onClick={() => onEditProduct(product)}
                      className="p-1.5 bg-[#282a2b] hover:bg-[#323536] text-[#e1e3e4] rounded transition-colors"
                      title="Editar Produto"
                    >
                      <span className="material-symbols-outlined text-base">edit</span>
                    </button>

                    <button
                      onClick={() => onToggleProductActive(product.id)}
                      className={`p-1.5 rounded transition-colors ${
                        product.active
                          ? 'bg-emerald-900/40 text-emerald-300 hover:bg-emerald-900'
                          : 'bg-[#282a2b] text-[#cfc4c5]/50'
                      }`}
                      title={product.active ? 'Ocultar da loja' : 'Exibir na loja'}
                    >
                      <span className="material-symbols-outlined text-base">
                        {product.active ? 'visibility' : 'visibility_off'}
                      </span>
                    </button>

                    <button
                      onClick={() => onDeleteProduct(product.id)}
                      className="p-1.5 bg-[#282a2b] hover:bg-red-900/50 text-red-400 rounded transition-colors"
                      title="Excluir"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
