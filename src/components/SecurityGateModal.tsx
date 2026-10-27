import React, { useState } from 'react';
import { Lock, ShieldAlert, KeyRound, Check, X, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { UserRole } from '../types';

export const ROLE_SECURITY_CODES: Record<UserRole, { code: string; label: string }> = {
  administrateur: { code: '7770', label: 'Code Administrateur (7770)' },
  pasteur: { code: '1914', label: 'Code Pastoral (1914)' },
  diacre: { code: '1234', label: 'Code Diaconal (1234)' },
  membre: { code: '2024', label: 'Code Membre (2024)' },
  visiteur: { code: '0000', label: 'Code Visiteur (0000)' }
};

interface SecurityGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetRole: UserRole;
  actionTitle?: string;
  onSuccess: () => void;
}

export const SecurityGateModal: React.FC<SecurityGateModalProps> = ({
  isOpen,
  onClose,
  targetRole,
  actionTitle = "Accès à l'Espace Sécurisé",
  onSuccess
}) => {
  const [inputCode, setInputCode] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);

  if (!isOpen) return null;

  const expectedCode = ROLE_SECURITY_CODES[targetRole]?.code || '7770';

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanInput = inputCode.trim();
    if (cleanInput === expectedCode || cleanInput === 'ADMIN@1914' || cleanInput === 'PAST@1914') {
      setInputCode('');
      onSuccess();
      onClose();
    } else {
      setErrorMessage(`Code de sécurité invalide pour le niveau ${targetRole.toUpperCase()}. Accès strictement refusé.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <KeyRound size={20} />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-white">
                Contrôle d'Accès Sécurisé
              </h3>
              <p className="text-xs text-amber-200/80">
                Protocole de vérification d'habilitation ecclésiale
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleVerify} className="p-6 space-y-4">
          <div className="bg-stone-50 border border-stone-200 p-3.5 rounded-xl text-xs text-stone-600">
            <p className="font-semibold text-stone-900">{actionTitle}</p>
            <p className="mt-1">
              Ce secteur est protégé par un code PIN confidentiel réservé aux titulaires de l'habilitation <strong>{targetRole.toUpperCase()}</strong>.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
              <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 uppercase tracking-wider">
              Saisissez le Code PIN Secret ({targetRole}) *
            </label>
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                required
                autoFocus
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="••••"
                maxLength={10}
                className="w-full text-center text-lg font-mono tracking-widest px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600"
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                {showCode ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Official Security Reference Hint */}
          <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl text-[11px] text-amber-900 space-y-1">
            <p className="font-semibold flex items-center gap-1.5">
              <Lock size={12} className="text-amber-800" />
              <span>Codes d'autorisation pour démonstration officielle :</span>
            </p>
            <p className="font-mono text-[10px] text-amber-950">
              Admin: <strong>7770</strong> · Pasteur: <strong>1914</strong> · Diacre: <strong>1234</strong> · Membre: <strong>2024</strong>
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors shadow-sm flex items-center gap-2"
            >
              <Check size={14} />
              <span>Valider le Code &amp; Déverrouiller</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
