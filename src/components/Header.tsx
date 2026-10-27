import React from 'react';
import { User } from '../types';
import { ChurchLogo } from './ChurchLogo';
import { Lock, UserCheck, Shield, ChevronRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  currentUser,
  onOpenAuth
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Brand title */}
          <div 
            onClick={() => onNavigate('accueil')}
            className="flex items-center gap-3 cursor-pointer whitespace-nowrap shrink-0 group select-none"
          >
            <ChurchLogo size={42} showText={true} />
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-stone-600">
            <button
              onClick={() => onNavigate('accueil')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'accueil' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Accueil
            </button>
            <button
              onClick={() => onNavigate('histoire')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'histoire' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Histoire du Togo
            </button>
            <button
              onClick={() => onNavigate('dirigeants')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'dirigeants' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Dirigeants du Togo
            </button>
            <button
              onClick={() => onNavigate('doctrine')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'doctrine' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              16 Vérités
            </button>
            <button
              onClick={() => onNavigate('archives')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'archives' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Archives EEADT
            </button>
            <button
              onClick={() => onNavigate('cultes')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'cultes' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Cultes Adamavo 2
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 pb-1 ${
                currentTab === 'contact' ? 'text-amber-800 font-semibold border-b-2 border-amber-800' : ''
              }`}
            >
              Siège &amp; Contact
            </button>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('cultes')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Cultes à Adamavo 2</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto py-2.5 border-t border-stone-100 text-xs text-stone-600 no-scrollbar">
          <button
            onClick={() => onNavigate('accueil')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'accueil' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Accueil
          </button>
          <button
            onClick={() => onNavigate('histoire')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'histoire' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Histoire Togo
          </button>
          <button
            onClick={() => onNavigate('dirigeants')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'dirigeants' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Dirigeants du Togo
          </button>
          <button
            onClick={() => onNavigate('doctrine')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'doctrine' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            16 Vérités
          </button>
          <button
            onClick={() => onNavigate('archives')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'archives' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Archives
          </button>
          <button
            onClick={() => onNavigate('cultes')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'cultes' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Cultes Adamavo 2
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md ${currentTab === 'contact' ? 'bg-stone-900 text-white' : 'hover:bg-stone-100'}`}
          >
            Siège &amp; Contact
          </button>
        </div>
      </div>
    </header>
  );
};
