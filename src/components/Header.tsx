import React from 'react';
import { NavPage } from '../types';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage, productId?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  isAdmin: boolean;
  onOpenAdminLogin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  isAdmin,
  onOpenAdminLogin,
}) => {
  return (
    <nav className="w-full top-0 sticky z-50 bg-[#111415]/85 backdrop-blur-[20px] border-b border-[#27272A]">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-[1280px] mx-auto">
        <button
          onClick={() => onNavigate('home')}
          className="font-headline text-2xl md:text-3xl text-[#e1e3e4] uppercase tracking-tighter hover:text-[#ffb690] transition-colors duration-200 text-left"
        >
          Loja do Juneba
        </button>

        <div className="hidden md:flex items-center space-x-8 font-headline text-xl">
          <button
            onClick={() => onNavigate('home')}
            className={`tracking-tight pb-1 transition-colors duration-200 ${
              currentPage === 'home'
                ? 'text-[#ffb690] border-b-2 border-[#ffb690]'
                : 'text-[#cfc4c5] hover:text-[#ffb690]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('catalog')}
            className={`tracking-tight pb-1 transition-colors duration-200 ${
              currentPage === 'catalog'
                ? 'text-[#ffb690] border-b-2 border-[#ffb690]'
                : 'text-[#cfc4c5] hover:text-[#ffb690]'
            }`}
          >
            Catalog
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`tracking-tight pb-1 transition-colors duration-200 ${
              currentPage === 'about'
                ? 'text-[#ffb690] border-b-2 border-[#ffb690]'
                : 'text-[#cfc4c5] hover:text-[#ffb690]'
            }`}
          >
            About
          </button>
          {isAdmin && (
            <button
              onClick={() => onNavigate('admin-dashboard')}
              className={`tracking-tight pb-1 transition-colors duration-200 flex items-center gap-1.5 ${
                currentPage.startsWith('admin')
                  ? 'text-[#ec6a06] border-b-2 border-[#ec6a06]'
                  : 'text-[#ec6a06] hover:text-[#ffb690]'
              }`}
            >
              <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
              Admin
            </button>
          )}
        </div>

        <div className="flex items-center space-x-4 text-[#ffb690]">
          <button
            onClick={onOpenCart}
            className="relative p-2 hover:text-[#e1e3e4] transition-colors duration-200 active:scale-95"
            title="Ver Carrinho"
          >
            <span className="material-symbols-outlined text-2xl">shopping_cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ec6a06] text-[#000000] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              if (isAdmin) {
                onNavigate('admin-dashboard');
              } else {
                onOpenAdminLogin();
              }
            }}
            className="p-2 hover:text-[#e1e3e4] transition-colors duration-200 active:scale-95 flex items-center gap-1"
            title={isAdmin ? 'Painel Admin' : 'Login Admin'}
          >
            <span className="material-symbols-outlined text-2xl">
              {isAdmin ? 'admin_panel_settings' : 'account_circle'}
            </span>
            {isAdmin && (
              <span className="hidden sm:inline text-xs bg-[#ec6a06]/20 text-[#ec6a06] border border-[#ec6a06]/40 px-1.5 py-0.5 rounded uppercase font-semibold">
                Admin
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links Bar */}
      <div className="flex md:hidden justify-around border-t border-[#27272A]/50 py-2.5 px-2 bg-[#111415] text-sm font-headline uppercase">
        <button
          onClick={() => onNavigate('home')}
          className={`px-3 py-1 ${currentPage === 'home' ? 'text-[#ffb690] font-bold' : 'text-[#cfc4c5]'}`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('catalog')}
          className={`px-3 py-1 ${currentPage === 'catalog' ? 'text-[#ffb690] font-bold' : 'text-[#cfc4c5]'}`}
        >
          Catalog
        </button>
        <button
          onClick={() => onNavigate('about')}
          className={`px-3 py-1 ${currentPage === 'about' ? 'text-[#ffb690] font-bold' : 'text-[#cfc4c5]'}`}
        >
          About
        </button>
        {isAdmin && (
          <button
            onClick={() => onNavigate('admin-dashboard')}
            className={`px-3 py-1 ${currentPage.startsWith('admin') ? 'text-[#ec6a06] font-bold' : 'text-[#ec6a06]'}`}
          >
            Admin
          </button>
        )}
      </div>
    </nav>
  );
};
