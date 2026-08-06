import React from 'react';
import { JUNEBA_PORTRAIT_URL, ORIGIN_SNEAKERS_URL } from '../data/initialProducts';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 space-y-16">
      {/* Hero Banner Section */}
      <section className="relative bg-[#191c1d] border border-[#282a2b] rounded-3xl overflow-hidden min-h-[450px] flex items-center p-8 md:p-16">
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#ec6a06]/20 border border-[#ec6a06]/40 px-3 py-1 rounded-full text-xs font-mono text-[#ffb690] uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm text-[#ec6a06]">
              sports_basketball
            </span>
            FUNDADOR & CURADOR
          </div>

          <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl text-[#e1e3e4] tracking-tight leading-none uppercase">
            THE LEGACY OF <span className="text-[#ffb690]">JUNEBA.</span>
          </h1>

          <p className="text-sm md:text-base text-[#cfc4c5] font-body leading-relaxed">
            Nascida do amor autêntico pelo basquete e pela cultura dos sneakers, a Loja do Juneba é o ponto de encontro para quem valoriza história, raridade e estilo no streetwear.
          </p>

          <div className="flex items-center gap-4 text-xs font-mono text-[#cfc4c5]/70 pt-2 border-t border-[#282a2b]">
            <div>
              <span className="block font-headline text-2xl text-[#ffb690] font-bold">100%</span>
              <span>AUTÊNTICO</span>
            </div>
            <div className="h-8 w-px bg-[#282a2b]"></div>
            <div>
              <span className="block font-headline text-2xl text-[#ffb690] font-bold">+500</span>
              <span>DROPS ENTREGUES</span>
            </div>
            <div className="h-8 w-px bg-[#282a2b]"></div>
            <div>
              <span className="block font-headline text-2xl text-[#ffb690] font-bold">BR</span>
              <span>CURADORIA NACIONAL</span>
            </div>
          </div>
        </div>

        {/* Background Image Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 md:opacity-50 pointer-events-none">
          <img
            src={JUNEBA_PORTRAIT_URL}
            alt="Nelson Junior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191c1d] via-[#191c1d]/80 to-transparent"></div>
        </div>
      </section>

      {/* Narrative Section: The Origin */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-4/3 bg-[#191c1d] border border-[#282a2b] rounded-2xl overflow-hidden p-4">
          <img
            src={ORIGIN_SNEAKERS_URL}
            alt="Origin Vintage Sneaker Collection"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-[#111415]/90 border border-[#282a2b] p-4 rounded-xl backdrop-blur-md">
            <span className="text-[10px] font-mono text-[#ec6a06] block uppercase tracking-widest font-bold">
              EST. 2020 • SÃO PAULO
            </span>
            <span className="font-headline text-lg text-[#e1e3e4]">
              "SNEAKERS NÃO SÃO APENAS CALÇADOS. SÃO HISTÓRIA EM MOVIMENTO."
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#ec6a06] uppercase tracking-widest block">
              ORIGEM & PROPÓSITO
            </span>
            <h2 className="font-headline text-3xl md:text-5xl text-[#e1e3e4] tracking-tight uppercase">
              THE ORIGIN.
            </h2>
          </div>

          <p className="text-sm text-[#cfc4c5] font-body leading-relaxed">
            Nelson Junior começou sua trajetória reunindo edições raras e compartilhando o conhecimento sobre silhuetas lendárias de basquete dos anos 90 e 2000. O que começou como uma paixão pessoal transformou-se em uma curadoria respeitada em todo o Brasil.
          </p>

          <p className="text-sm text-[#cfc4c5] font-body leading-relaxed">
            Na Loja do Juneba, cada sneaker, vestuário e acessório passa pelas mãos de quem entende o valor sentimental e financeiro do mercado de colecionáveis. Não vendemos réplicas, apenas itens legítimos selecionados criteriosamente.
          </p>

          <div className="p-4 bg-[#191c1d] border-l-4 border-[#ec6a06] rounded-r-xl space-y-1">
            <span className="font-headline text-lg text-[#e1e3e4] block">
              NELSON JUNIOR
            </span>
            <span className="text-xs text-[#cfc4c5]/70 font-mono">Fundador & Curador Chefe</span>
          </div>
        </div>
      </section>

      {/* Fundamentals Bento Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono text-[#ec6a06] uppercase tracking-widest">
            VALORES & COMPROMISSO
          </span>
          <h2 className="font-headline text-3xl md:text-5xl text-[#e1e3e4] tracking-tight uppercase">
            THE FUNDAMENTALS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#191c1d] border border-[#282a2b] p-6 rounded-2xl space-y-4 hover:border-[#ec6a06]/50 transition-colors">
            <div className="p-3 bg-[#111415] text-[#ec6a06] w-fit rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline text-xl text-[#e1e3e4]">CRAFTSMANSHIP & AUTENTICIDADE</h3>
            <p className="text-xs text-[#cfc4c5]/70 font-body leading-relaxed">
              Toda peça passa por verificação rigorosa de costura, materiais, etiquetas e caixa original.
            </p>
          </div>

          <div className="bg-[#191c1d] border border-[#282a2b] p-6 rounded-2xl space-y-4 hover:border-[#ec6a06]/50 transition-colors">
            <div className="p-3 bg-[#111415] text-[#ec6a06] w-fit rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">sports_basketball</span>
            </div>
            <h3 className="font-headline text-xl text-[#e1e3e4]">HERITAGE BASKETBALL</h3>
            <p className="text-xs text-[#cfc4c5]/70 font-body leading-relaxed">
              Respeito absoluto à herança do esporte, conectando colecionadores e praticantes de basquete.
            </p>
          </div>

          <div className="bg-[#191c1d] border border-[#282a2b] p-6 rounded-2xl space-y-4 hover:border-[#ec6a06]/50 transition-colors">
            <div className="p-3 bg-[#111415] text-[#ec6a06] w-fit rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="font-headline text-xl text-[#e1e3e4]">COMUNIDADE EXCLUSIVA</h3>
            <p className="text-xs text-[#cfc4c5]/70 font-body leading-relaxed">
              Atendimento personalizado via WhatsApp com suporte direto para reservas e negociações.
            </p>
          </div>

          <div className="bg-[#191c1d] border border-[#282a2b] p-6 rounded-2xl space-y-4 hover:border-[#ec6a06]/50 transition-colors">
            <div className="p-3 bg-[#111415] text-[#ec6a06] w-fit rounded-xl border border-[#282a2b]">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <h3 className="font-headline text-xl text-[#e1e3e4]">QUALIDADE ASSEGURADA</h3>
            <p className="text-xs text-[#cfc4c5]/70 font-body leading-relaxed">
              Descrição minuciosa do estado de conservação com fotos de altíssima definição sem filtros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
