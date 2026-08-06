import React, { useState } from 'react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [email, setEmail] = useState('admin@lojadojuneba.com.br');
  const [password, setPassword] = useState('juneba2026');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLoginSuccess();
    } else {
      setError('Por favor preencha os campos corretamente.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-[#000000]/85 backdrop-blur-md">
      <div className="relative bg-[#191c1d] border border-[#282a2b] rounded-2xl max-w-md w-full p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#cfc4c5] hover:text-[#ffb690] transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-[#ec6a06] text-[#000000] rounded-xl flex items-center justify-center mx-auto shadow-lg font-headline text-2xl font-bold">
            J
          </div>
          <h2 className="font-headline text-2xl text-[#e1e3e4] tracking-tight uppercase">
            PAINEL ADMINISTRATIVO
          </h2>
          <p className="text-xs text-[#cfc4c5]/70 font-body">
            Acesso exclusivo para gerenciamento de estoque e drops.
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-900/30 border border-red-500/50 rounded text-red-200 text-xs font-body">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-mono text-[#cfc4c5]/70 block uppercase">
              E-mail Administrativo
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] font-body outline-none"
                placeholder="admin@lojadojuneba.com.br"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-mono text-[#cfc4c5]/70 block uppercase">Senha</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#111415] border border-[#282a2b] focus:border-[#ec6a06] rounded-lg p-3 text-sm text-[#e1e3e4] font-body outline-none pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-[#cfc4c5] hover:text-[#e1e3e4]"
              >
                <span className="material-symbols-outlined text-lg">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ec6a06] hover:bg-[#ffb690] text-[#000000] font-headline text-lg py-3 rounded-lg font-bold tracking-wider transition-colors shadow-lg uppercase"
          >
            ENTRAR NO PAINEL
          </button>
        </form>

        <div className="pt-4 border-t border-[#282a2b] text-center">
          <button
            onClick={() => {
              setEmail('admin@lojadojuneba.com.br');
              setPassword('juneba2026');
              onLoginSuccess();
            }}
            className="text-xs text-[#ffb690] hover:underline font-mono"
          >
            ⚡ Clique aqui para entrar como Admin de Teste
          </button>
        </div>
      </div>
    </div>
  );
};
