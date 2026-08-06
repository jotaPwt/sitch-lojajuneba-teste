import React, { useState } from 'react';
import { Product, NavPage } from '../types';

interface AdminProductEditorViewProps {
  productToEdit?: Product | null;
  onSaveProduct: (product: Product) => void;
  onNavigate: (page: NavPage) => void;
}

export const AdminProductEditorView: React.FC<AdminProductEditorViewProps> = ({
  productToEdit,
  onSaveProduct,
  onNavigate,
}) => {
  const isEditing = Boolean(productToEdit);

  const [name, setName] = useState(productToEdit?.name || '');
  const [subtitle, setSubtitle] = useState(productToEdit?.subtitle || '');
  const [sku, setSku] = useState(productToEdit?.sku || `LJ-DROP-${Math.floor(100 + Math.random() * 900)}`);
  const [category, setCategory] = useState(productToEdit?.category || 'Tênis');
  const [brand, setBrand] = useState(productToEdit?.brand || 'Loja do Juneba');
  const [price, setPrice] = useState(productToEdit?.price || 299);
  const [originalPrice, setOriginalPrice] = useState(productToEdit?.originalPrice || 0);
  const [stock, setStock] = useState(productToEdit?.stock || 1);
  const [status, setStatus] = useState<any>(productToEdit?.status || 'disponivel');
  const [badge, setBadge] = useState(productToEdit?.badge || 'Novo');
  const [size, setSize] = useState(productToEdit?.size || 'BR 41 / US 9.5');
  const [condition, setCondition] = useState(productToEdit?.condition || 'Novo com caixa');
  const [curatorNotes, setCuratorNotes] = useState(productToEdit?.curatorNotes || '');
  const [description, setDescription] = useState(productToEdit?.description || '');
  const [active, setActive] = useState(productToEdit ? productToEdit.active : true);

  // Images state
  const [imageUrls, setImageUrls] = useState<string[]>(
    productToEdit?.images && productToEdit.images.length > 0
      ? [...productToEdit.images]
      : ['https://lh3.googleusercontent.com/aida-public/AB6AXuDdTqi24vPR4CQGtBuKXmvzxi0b72JoElkVQMRyIlZESFDK14ZxME_La-b2iaw4REgGxLs_TcqKA-rJYS-zrZqlD_RIZkjIKg2zP07kzU9vX2CinchtOKwaPbJFAkvwKdpfQ1n4boOPBWUfscFLMUMnBwBK1E4kUXp2ZBMTRve-Dk86ENiJl1PCRWOAtkc0XGnyTtxncQ0TdtPHRzWHvD_nJDOT3FnbR9K07Ywj6ckjsKTHshP3aW8']
  );
  const [newImageUrlInput, setNewImageUrlInput] = useState('');

  const handleAddImageUrl = () => {
    if (newImageUrlInput.trim()) {
      setImageUrls((prev) => [...prev, newImageUrlInput.trim()]);
      setNewImageUrlInput('');
    }
  };

  const handleRemoveImageUrl = (index: number) => {
    setImageUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const savedProduct: Product = {
      id: productToEdit?.id || `product-${Date.now()}`,
      name: name.trim(),
      subtitle: subtitle.trim(),
      sku: sku.trim(),
      category: category.trim(),
      brand: brand.trim(),
      price: Number(price),
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      stock: Number(stock),
      status: status,
      badge: badge || undefined,
      size: size.trim(),
      condition: condition.trim(),
      curatorNotes: curatorNotes.trim(),
      description: description.trim(),
      images: imageUrls.length > 0 ? imageUrls : ['https://lh3.googleusercontent.com/aida-public/AB6AXuDdTqi24vPR4CQGtBuKXmvzxi0b72JoElkVQMRyIlZESFDK14ZxME_La-b2iaw4REgGxLs_TcqKA-rJYS-zrZqlD_RIZkjIKg2zP07kzU9vX2CinchtOKwaPbJFAkvwKdpfQ1n4boOPBWUfscFLMUMnBwBK1E4kUXp2ZBMTRve-Dk86ENiJl1PCRWOAtkc0XGnyTtxncQ0TdtPHRzWHvD_nJDOT3FnbR9K07Ywj6ckjsKTHshP3aW8'],
      active: active,
      createdAt: productToEdit?.createdAt || new Date().toISOString().split('T')[0],
    };

    onSaveProduct(savedProduct);
    onNavigate('admin-dashboard');
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 md:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#27272A] pb-6">
        <div>
          <button
            onClick={() => onNavigate('admin-dashboard')}
            className="text-xs font-mono text-[#ffb690] hover:underline flex items-center gap-1 mb-2"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            VOLTAR AO PAINEL
          </button>
          <h1 className="font-headline text-3xl md:text-5xl text-[#e1e3e4] uppercase tracking-tight">
            {isEditing ? 'EDITAR PRODUTO' : 'CADASTRAR NOVO DROP'}
          </h1>
        </div>

        <span className="px-3 py-1 bg-[#191c1d] border border-[#282a2b] text-[#cfc4c5] font-mono text-xs rounded">
          {sku}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Basic Information */}
        <div className="bg-[#191c1d] border border-[#282a2b] rounded-2xl p-6 md:p-8 space-y-6">
          <h2 className="font-headline text-xl text-[#e1e3e4] border-b border-[#282a2b] pb-2 uppercase tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ec6a06]">info</span>
            INFORMAÇÕES BÁSICAS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Nome do Produto *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none"
                placeholder="Ex: Jordan 4 Retro Black Cat"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Subtítulo / Linha
              </label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none"
                placeholder="Ex: Performance Sneaker Indoor"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">SKU *</label>
              <input
                type="text"
                required
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none font-mono"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Categoria *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none font-headline"
              >
                <option value="Tênis">TÊNIS</option>
                <option value="Vestuário">VESTUÁRIO</option>
                <option value="Acessórios">ACESSÓRIOS</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Marca / Coleção
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none"
                placeholder="Ex: Nike, Jordan, Loja do Juneba"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">Badge</label>
              <select
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none font-headline"
              >
                <option value="Novo">NOVO</option>
                <option value="Seminovo">SEMINOVO</option>
                <option value="Limitado">LIMITADO</option>
                <option value="Grail">GRAIL</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Price, Stock & Condition */}
        <div className="bg-[#191c1d] border border-[#282a2b] rounded-2xl p-6 md:p-8 space-y-6">
          <h2 className="font-headline text-xl text-[#e1e3e4] border-b border-[#282a2b] pb-2 uppercase tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ec6a06]">payments</span>
            VALORES, ESTOQUE E CONDIÇÃO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Preço (R$) *
              </label>
              <input
                type="number"
                step="0.01"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#ffb690] font-mono font-bold outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Preço Original / Riscado (R$)
              </label>
              <input
                type="number"
                step="0.01"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(Number(e.target.value))}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#cfc4c5] font-mono outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Estoque Disponível *
              </label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] font-mono outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Status *
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none font-headline uppercase"
              >
                <option value="disponivel">DISPONÍVEL</option>
                <option value="esgotado">ESGOTADO</option>
                <option value="vendido">VENDIDO</option>
                <option value="rascunho">EM RASCUNHO</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Tamanho / Numeração
              </label>
              <input
                type="text"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none"
                placeholder="Ex: US 10 / BR 42"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Estado de Conservação
              </label>
              <input
                type="text"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] outline-none"
                placeholder="Ex: 9.5/10 (VNDS)"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Media & Image Direct Links */}
        <div className="bg-[#191c1d] border border-[#282a2b] rounded-2xl p-6 md:p-8 space-y-6">
          <div>
            <h2 className="font-headline text-xl text-[#e1e3e4] border-b border-[#282a2b] pb-2 uppercase tracking-wide flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec6a06]">photo_library</span>
              MÍDIA & LINKS DIRETO DE IMAGENS DO HTML
            </h2>
            <p className="text-xs text-[#cfc4c5]/70 mt-1 font-body">
              Insira os links diretos (URLs) das imagens. É possível adicionar múltiplos links diretos para a galeria do produto.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={newImageUrlInput}
              onChange={(e) => setNewImageUrlInput(e.target.value)}
              placeholder="Cole a URL/Link Direto da Imagem (ex: https://...)"
              className="flex-1 bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-xs text-[#e1e3e4] font-mono outline-none"
            />
            <button
              type="button"
              onClick={handleAddImageUrl}
              className="px-5 py-3 bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-xs font-bold rounded-lg uppercase tracking-wider transition-colors"
            >
              + ADICIONAR LINK
            </button>
          </div>

          {/* Image Previews List */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {imageUrls.map((url, idx) => (
              <div
                key={idx}
                className="relative bg-[#111415] border border-[#282a2b] rounded-xl p-2 flex flex-col items-center group"
              >
                {idx === 0 && (
                  <span className="absolute top-2 left-2 bg-[#ec6a06] text-[#000] text-[9px] font-headline font-bold px-1.5 py-0.5 rounded">
                    CAPA
                  </span>
                )}
                <img
                  src={url}
                  alt={`Preview ${idx}`}
                  className="w-full h-28 object-contain rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImageUrl(idx)}
                  className="mt-2 text-xs text-red-400 hover:text-red-300 font-headline uppercase flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                  Remover
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Descriptions & Notes */}
        <div className="bg-[#191c1d] border border-[#282a2b] rounded-2xl p-6 md:p-8 space-y-6">
          <h2 className="font-headline text-xl text-[#e1e3e4] border-b border-[#282a2b] pb-2 uppercase tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ec6a06]">description</span>
            DETALHES E NOTAS DE CURATORIA
          </h2>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Notas do Curador (Nelson Junior)
              </label>
              <textarea
                rows={3}
                value={curatorNotes}
                onChange={(e) => setCuratorNotes(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-xs text-[#e1e3e4] font-body outline-none"
                placeholder="Ex: Cabedal sem rugas, caixa original impecável..."
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono text-[#cfc4c5]/70 uppercase block">
                Descrição Completa
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-xs text-[#e1e3e4] font-body outline-none"
                placeholder="Detalhes completos sobre o produto..."
              />
            </div>

            <label className="flex items-center gap-3 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
                className="w-5 h-5 accent-[#ec6a06] rounded"
              />
              <span className="font-headline text-sm text-[#e1e3e4] uppercase">
                EXIBIR PRODUTO NO CATÁLOGO PÚBLICO (ATIVO)
              </span>
            </label>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex items-center justify-end gap-4">
          <button
            type="button"
            onClick={() => onNavigate('admin-dashboard')}
            className="px-6 py-3 bg-[#282a2b] hover:bg-[#323536] text-[#e1e3e4] font-headline text-sm font-bold rounded-lg uppercase tracking-wider transition-colors"
          >
            CANCELAR
          </button>
          <button
            type="submit"
            className="px-8 py-3 bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-base font-bold rounded-lg uppercase tracking-wider transition-colors shadow-lg"
          >
            {isEditing ? 'SALVAR ALTERAÇÕES' : 'CADASTRAR PRODUTO'}
          </button>
        </div>
      </form>
    </div>
  );
};
