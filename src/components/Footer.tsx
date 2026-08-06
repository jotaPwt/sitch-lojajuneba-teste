import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0d0f10] text-[#cfc4c5] border-t border-[#27272A] pt-12 pb-8 mt-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4 md:col-span-1">
          <h3 className="font-headline text-2xl text-[#e1e3e4] tracking-tight">LOJA DO JUNEBA</h3>
          <p className="text-xs text-[#cfc4c5]/70 leading-relaxed font-body">
            Projetado para os verdadeiros apaixonados pela cultura do basquete. Drops selecionados a dedo por Nelson Junior.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#ffb690]">
            <span className="material-symbols-outlined text-base">sports_basketball</span>
            <span className="font-mono uppercase tracking-wider">Heritage Basketball Brasil</span>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg text-[#e1e3e4] mb-3 tracking-wide">NAVEGAÇÃO</h4>
          <ul className="space-y-2 text-sm text-[#cfc4c5]/80 font-body">
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Catalog / Drops</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Produtos em Destaque</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Coleção Exclusiva</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Sobre Nelson Junior</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg text-[#e1e3e4] mb-3 tracking-wide">SUPORTE & CONTATO</h4>
          <ul className="space-y-2 text-sm text-[#cfc4c5]/80 font-body">
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Termos de Serviço</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Política de Privacidade</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Atendimento via WhatsApp</a></li>
            <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690] transition-colors">Perguntas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg text-[#e1e3e4] mb-3 tracking-wide">COURT LOCATOR</h4>
          <p className="text-xs text-[#cfc4c5]/70 leading-relaxed font-body mb-3">
            Atendimento presencial com hora marcada na loja de São Paulo, SP.
          </p>
          <div className="p-3 bg-[#191c1d] border border-[#282a2b] rounded text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ec6a06]">pin_drop</span>
            <div>
              <span className="block font-semibold text-[#e1e3e4]">São Paulo, SP - Brasil</span>
              <span className="text-[#cfc4c5]/60">Atendimento Privado & Pickups</span>
            </div>
          </div>
        </div>
      </div>

      <div className="court-line-divider max-w-[1280px] mx-auto px-4 my-6"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#cfc4c5]/50 gap-4">
        <div>
          © {new Date().getFullYear()} Loja do Juneba. Todos os direitos reservados.
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690]">Instagram</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690]">YouTube</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#ffb690]">TikTok</a>
        </div>
      </div>
    </footer>
  );
};
