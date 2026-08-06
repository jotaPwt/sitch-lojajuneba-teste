import React, { useState } from 'react';

interface ImageModalProps {
  imageUrl: string | null;
  title?: string;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, title, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!imageUrl) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(imageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#000000]/90 backdrop-blur-md">
      <div className="relative bg-[#191c1d] border border-[#282a2b] rounded-xl max-w-4xl w-full p-6 shadow-2xl flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#282a2b]">
          <div>
            <h3 className="font-headline text-xl text-[#e1e3e4] tracking-tight">
              {title || 'VISUALIZADOR DE IMAGEM'}
            </h3>
            <p className="text-xs text-[#cfc4c5]/70 font-mono">LINK DIRETO DA IMAGEM HTML</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#cfc4c5] hover:text-[#ffb690] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Main Image Box */}
        <div className="bg-[#111415] rounded-lg p-4 flex items-center justify-center border border-[#282a2b] max-h-[60vh] overflow-hidden">
          <img
            src={imageUrl}
            alt={title || 'Imagem em alta resolução'}
            className="max-h-[55vh] w-auto object-contain rounded"
          />
        </div>

        {/* Direct Link Toolbar */}
        <div className="bg-[#111415] p-3 rounded-lg border border-[#282a2b] flex flex-col md:flex-row items-center gap-3">
          <div className="flex-1 w-full min-w-0 flex items-center gap-2 bg-[#191c1d] px-3 py-2 rounded border border-[#282a2b]">
            <span className="material-symbols-outlined text-[#ec6a06] text-sm">link</span>
            <input
              type="text"
              readOnly
              value={imageUrl}
              className="w-full bg-transparent text-xs text-[#e1e3e4] font-mono outline-none truncate"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={handleCopyLink}
              className="flex-1 md:flex-initial px-4 py-2 bg-[#282a2b] hover:bg-[#ec6a06] hover:text-[#000000] text-[#e1e3e4] text-xs font-headline rounded flex items-center justify-center gap-1.5 transition-colors font-bold uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">
                {copied ? 'check' : 'content_copy'}
              </span>
              {copied ? 'COPIADO!' : 'COPIAR LINK'}
            </button>

            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-4 py-2 bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] text-xs font-headline rounded flex items-center justify-center gap-1.5 transition-colors font-bold uppercase tracking-wider"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              ABRIR EM NOVA ABA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
