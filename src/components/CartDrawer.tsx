import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*Olá, Juneba! Quero finalizar meu pedido na Loja do Juneba:*\n\n`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}*\n`;
      if (item.product.sku) message += `   SKU: ${item.product.sku}\n`;
      if (item.selectedSize || item.product.size) {
        message += `   Tamanho: ${item.selectedSize || item.product.size}\n`;
      }
      message += `   Qtd: ${item.quantity} x R$ ${item.product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\n`;
    });

    message += `*Total: R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}*\n\n`;
    message += `Por favor, me confirme a disponibilidade para pagamento e envio!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511999999999?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#000000]/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#191c1d] border-l border-[#282a2b] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#282a2b] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ffb690]">shopping_bag</span>
              <h2 className="font-headline text-2xl text-[#e1e3e4] tracking-tight">SEU CARRINHO</h2>
              <span className="text-xs bg-[#282a2b] text-[#cfc4c5] px-2 py-0.5 rounded font-mono">
                {cart.reduce((a, b) => a + b.quantity, 0)} ITENS
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:text-[#ffb690] text-[#cfc4c5] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Cart List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-[#cfc4c5]/60">
                <span className="material-symbols-outlined text-6xl mb-4 text-[#4c4546]">
                  shopping_cart_checkout
                </span>
                <p className="font-headline text-xl text-[#e1e3e4]">SEU CARRINHO ESTÁ VAZIO</p>
                <p className="text-xs mt-2 max-w-xs font-body">
                  Explore nosso catálogo e garanta seu próximo drop exclusivo.
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-[#111415] border border-[#282a2b] rounded-lg p-3 flex gap-3 items-center"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain bg-[#191c1d] rounded border border-[#282a2b] p-1 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-headline text-lg text-[#e1e3e4] truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[#cfc4c5]/70 font-mono">
                      {item.selectedSize || item.product.size || 'Tamanho Padrão'}
                    </p>
                    <p className="text-sm font-semibold text-[#ffb690] mt-1">
                      R$ {item.product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-6 h-6 rounded bg-[#282a2b] text-[#e1e3e4] hover:bg-[#ec6a06] hover:text-[#000] flex items-center justify-center text-xs font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-6 h-6 rounded bg-[#282a2b] text-[#e1e3e4] hover:bg-[#ec6a06] hover:text-[#000] flex items-center justify-center text-xs font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-[#cfc4c5]/50 hover:text-red-400 p-1 transition-colors"
                    title="Remover"
                  >
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#282a2b] bg-[#111415] space-y-4">
              <div className="space-y-1.5 text-xs text-[#cfc4c5]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-emerald-400 font-semibold">Grátis (Drops Selecionados)</span>
                </div>
                <div className="flex justify-between text-base font-headline text-[#e1e3e4] pt-2 border-t border-[#282a2b]">
                  <span>TOTAL</span>
                  <span className="text-[#ffb690] font-bold">
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-lg py-3 rounded tracking-wider flex items-center justify-center gap-2 font-bold transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined text-xl">chat</span>
                FINALIZAR NO WHATSAPP
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-xs text-[#cfc4c5]/60 hover:text-red-400 text-center transition-colors py-1"
              >
                Esvaziar carrinho
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
