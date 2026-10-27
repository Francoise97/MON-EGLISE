import React from 'react';
import { ChurchLogo } from './ChurchLogo';
import { TOGO_CHURCH_OVERVIEW, LOCAL_PARISH_ADAMAVO_2 } from '../data/historyAndLeadership';
import { MapPin, Phone, Mail, Shield, BookOpen, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuth }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Historical Origin Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ChurchLogo size={42} showText={true} variant="dark" />
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-sm">
              L'<strong>Église Évangélique des Assemblées de Dieu du Togo (EEADT)</strong> est une communauté pentecôtiste implantée depuis 1936, comptant plus de 1 500 paroisses à travers le pays. La <strong>Paroisse d'Adamavo 2 (Temple de la Résurrection)</strong> est guidée avec dévouement par le <strong>Pasteur AMOUZOU</strong>.
            </p>

            <div className="text-xs text-stone-400 space-y-1 font-mono pt-2 border-t border-stone-900">
              <p className="text-amber-300">Temple de la Résurrection · Adamavo 2 (Golfe 6, Lomé)</p>
              <p>Président National : Rév. Dr. Adadé Ayi Migbloessan</p>
              <p>Président d'Honneur : Rév. Djakouti Mitré (37 ans de présidence)</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Rubriques &amp; Informations
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('accueil')} className="hover:text-white transition-colors">
                  Accueil du Temple de la Résurrection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('histoire')} className="hover:text-white transition-colors">
                  Histoire du Togo (1936–Présent)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dirigeants')} className="hover:text-white transition-colors">
                  Lignée des Présidents &amp; Pasteur AMOUZOU
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('doctrine')} className="hover:text-white transition-colors">
                  Les 16 Vérités Fondamentales
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('archives')} className="hover:text-white transition-colors">
                  Archives Officielles EEADT
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('cultes')} className="hover:text-white transition-colors">
                  Cultes &amp; Rassemblements à Adamavo 2
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Local Parish Headquarters */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Paroisse d'Adamavo 2 &amp; Siège National
            </h4>
            
            <div className="space-y-2 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Adamavo 2, route de Baguida, Commune de Golfe 6, Grand Lomé, Togo</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <span>Pasteur AMOUZOU : +228 90 25 14 36 / +228 98 77 41 20</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-amber-400 shrink-0" />
                <span>contact.adamavo2@assembleesdedieu-togo.org</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('cultes')}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
              >
                <span>Cultes : Dimanche (08h00) · Lundi JAD · Mardi Hommes</span>
              </button>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-sans">
          <p>© 1936 – {new Date().getFullYear()} Église Évangélique des Assemblées de Dieu du Togo (EEADT). Paroisse d'Adamavo 2 (Temple de la Résurrection).</p>
          <div className="flex items-center gap-4">
            <span className="text-stone-400">Grand Lomé, Golfe 6</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-400">République Togolaise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
