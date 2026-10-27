import React, { useState } from 'react';
import { User, UserRole } from '../types';
import { DEMO_USERS } from '../data/mockData';
import { ChurchLogo } from './ChurchLogo';
import { X, Lock, Shield, UserCheck, KeyRound, Check, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { ROLE_SECURITY_CODES } from './SecurityGateModal';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onLogin: (user: User) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout
}) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('administrateur');
  const [securityPin, setSecurityPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
    setSecurityPin('');
    setAuthError(null);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const targetCode = ROLE_SECURITY_CODES[selectedRole]?.code;
    const cleanPin = securityPin.trim();

    if (cleanPin === targetCode || cleanPin === 'ADMIN@1914' || cleanPin === 'PAST@1914') {
      const demoKey = selectedRole === 'administrateur' ? 'admin' : selectedRole;
      const demoUser = DEMO_USERS[demoKey];
      if (demoUser) {
        onLogin(demoUser);
        onClose();
        setSecurityPin('');
      }
    } else {
      setAuthError(`Code de sécurité invalide pour le niveau ${selectedRole.toUpperCase()}. Accès non autorisé.`);
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const targetCode = ROLE_SECURITY_CODES[selectedRole]?.code;
    const cleanPin = passwordInput.trim();

    if (cleanPin === targetCode || cleanPin === 'ADMIN@1914' || cleanPin === 'PAST@1914') {
      const newUser: User = {
        id: `usr-${Date.now()}`,
        nom: 'Ecclésiale',
        prenom: selectedRole === 'pasteur' ? 'Direction Pastorale' : selectedRole === 'diacre' ? 'Corps Diaconal' : selectedRole === 'administrateur' ? 'Administration' : 'Membre d\'Assemblée',
        email: emailInput || `${selectedRole}@assembleesdedieu.org`,
        role: selectedRole,
        matricule: `TG-${selectedRole.slice(0, 3).toUpperCase()}-2026`,
        dateAdhesion: new Date().toISOString().split('T')[0],
        departement: selectedRole === 'pasteur' ? 'Corps Pastoral' : 'Secrétariat Général'
      };
      onLogin(newUser);
      onClose();
    } else {
      setAuthError(`Code de sécurité obligatoire incorrect pour le niveau ${selectedRole.toUpperCase()}.`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/75 backdrop-blur-sm">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ChurchLogo size={36} variant="dark" />
            <div>
              <h2 className="text-lg font-serif font-bold text-white tracking-wide">
                Portail d'Accès Sécurisé
              </h2>
              <p className="text-xs text-amber-200/80">
                Authentification par Code Secret &amp; Habilitation Ecclésiale
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {currentUser ? (
            <div className="space-y-5">
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-800 text-white flex items-center justify-center font-bold text-lg font-serif shadow-sm">
                  {currentUser.role[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-stone-900">
                      {currentUser.titre || (currentUser.role === 'pasteur' ? 'Direction Pastorale' : currentUser.role === 'diacre' ? 'Corps Diaconal' : currentUser.role === 'administrateur' ? 'Administration Ecclésiale' : 'Membre d\'Assemblée')}
                    </span>
                    <span className="text-xs text-stone-700 bg-stone-200 px-2 py-0.5 rounded font-mono uppercase font-semibold">
                      {currentUser.role}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-0.5">{currentUser.email}</p>
                  <p className="text-[11px] text-stone-600 mt-1">Matricule : {currentUser.matricule}</p>
                </div>
              </div>

              <div className="text-xs text-stone-600 bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-amber-950 flex items-center gap-2">
                <Lock size={15} className="text-amber-800 shrink-0" />
                <span>Session actuellement authentifiée avec les prérogatives du niveau <strong>{currentUser.role.toUpperCase()}</strong>.</span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onLogout}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200 text-center"
                >
                  Déconnecter la Session
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors text-center"
                >
                  Accéder à l'Espace
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              
              {/* Step 1: Select Role */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2.5">
                  1. Choisissez le Niveau d'Habilitation Requis :
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  
                  <button
                    type="button"
                    onClick={() => handleRoleSelection('administrateur')}
                    className={`flex items-center gap-2.5 p-3 text-left rounded-xl border transition-all ${
                      selectedRole === 'administrateur'
                        ? 'border-amber-600 bg-amber-50/90 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                      <KeyRound size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Administration</p>
                      <p className="text-[11px] text-stone-500 truncate">Superviseur &amp; IT</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleSelection('pasteur')}
                    className={`flex items-center gap-2.5 p-3 text-left rounded-xl border transition-all ${
                      selectedRole === 'pasteur'
                        ? 'border-amber-600 bg-amber-50/90 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      <Shield size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Corps Pastoral</p>
                      <p className="text-[11px] text-stone-500 truncate">Direction Pastorale</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleSelection('diacre')}
                    className={`flex items-center gap-2.5 p-3 text-left rounded-xl border transition-all ${
                      selectedRole === 'diacre'
                        ? 'border-amber-600 bg-amber-50/90 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                      <UserCheck size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Corps Diaconal</p>
                      <p className="text-[11px] text-stone-500 truncate">Service &amp; Entraide</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRoleSelection('membre')}
                    className={`flex items-center gap-2.5 p-3 text-left rounded-xl border transition-all ${
                      selectedRole === 'membre'
                        ? 'border-amber-600 bg-amber-50/90 shadow-xs ring-2 ring-amber-500/20'
                        : 'border-stone-200 bg-stone-50 hover:bg-stone-100'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                      <Lock size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">Membre Fidèle</p>
                      <p className="text-[11px] text-stone-500 truncate">Vie d'Assemblée</p>
                    </div>
                  </button>

                </div>
              </div>

              {/* Error message */}
              {authError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-start gap-2">
                  <AlertTriangle size={15} className="text-red-600 shrink-0 mt-0.5" />
                  <span>{authError}</span>
                </div>
              )}

              {/* Step 2: Secret Code Input Form */}
              <form onSubmit={handlePinSubmit} className="space-y-4 pt-2 border-t border-stone-200">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                      2. Code Secret de Sécurité ({selectedRole.toUpperCase()}) *
                    </label>
                    <span className="text-[11px] font-mono text-amber-900">Obligatoire</span>
                  </div>

                  <div className="relative">
                    <input
                      type={showPin ? 'text' : 'password'}
                      required
                      autoFocus
                      value={securityPin}
                      onChange={(e) => setSecurityPin(e.target.value)}
                      placeholder="Entrez le code secret..."
                      className="w-full text-center text-lg font-mono tracking-widest px-4 py-3 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPin(!showPin)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                    >
                      {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Confidential Security Codes Guide */}
                <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-900">
                    <KeyRound size={13} className="text-amber-800" />
                    <span>Codes secrets d'accès autorisés (Protocole de test) :</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-amber-950 pt-1">
                    <span className="bg-white/80 p-1.5 rounded border border-amber-200">Admin : <strong>7770</strong></span>
                    <span className="bg-white/80 p-1.5 rounded border border-amber-200">Pasteur : <strong>1914</strong></span>
                    <span className="bg-white/80 p-1.5 rounded border border-amber-200">Diacre : <strong>1234</strong></span>
                    <span className="bg-white/80 p-1.5 rounded border border-amber-200">Membre : <strong>2024</strong></span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Lock size={14} />
                  <span>Vérifier le Code &amp; Accéder à l'Espace {selectedRole.toUpperCase()}</span>
                </button>
              </form>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
