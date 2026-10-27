import React, { useState } from 'react';
import { THE_16_FUNDAMENTAL_TRUTHS } from '../data/historyAndLeadership';
import { DoctrineArticle } from '../types';
import { Search, BookOpen, ChevronDown, ChevronUp, Share2, Bookmark } from 'lucide-react';

export const DoctrineSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const filteredDoctrines = THE_16_FUNDAMENTAL_TRUTHS.filter(doc => 
    doc.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.resume.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.referencesBibliques.some(ref => ref.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleExpand = (num: number) => {
    setExpandedId(expandedId === num ? null : num);
  };

  return (
    <section id="doctrine" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2">
              <span>Confession de Foi &amp; Socle Théologique</span>
              <span aria-hidden="true">·</span>
              <span>Adopté en 1916</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              La Déclaration des 16 Vérités Fondamentales
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Ces vérités scripturaires constituent la base doctrinale inébranlable et commune à toutes les Assemblées de Dieu dans le monde entier.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80 shrink-0">
            <div className="relative">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher (ex: Salut, Guérison, Esprit)..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 shadow-2xs"
              />
            </div>
            {searchQuery && (
              <p className="text-[11px] text-stone-500 mt-1.5 text-right">
                {filteredDoctrines.length} article(s) trouvé(s)
              </p>
            )}
          </div>
        </div>

        {/* Doctrines Accordion List */}
        <div className="mt-12 space-y-3.5">
          {filteredDoctrines.map((doctrine) => {
            const isExpanded = expandedId === doctrine.numero;

            return (
              <div
                key={doctrine.numero}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isExpanded ? 'border-amber-400 shadow-xs' : 'border-stone-200 hover:border-stone-300'
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  onClick={() => toggleExpand(doctrine.numero)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-stone-50/60"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 font-mono text-sm font-semibold flex items-center justify-center shrink-0">
                      {String(doctrine.numero).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-serif font-bold text-stone-900 truncate">
                        {doctrine.titre}
                      </h3>
                      <p className="text-xs text-stone-500 truncate mt-0.5">
                        {doctrine.resume}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-stone-600">
                      <span>{doctrine.referencesBibliques.length} références</span>
                    </div>
                    <div className="p-1 rounded-md text-stone-400 hover:text-stone-700">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>
                </button>

                {/* Expanded Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-stone-100 bg-stone-50/30">
                    <div className="max-w-4xl space-y-4">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-2">
                          Texte Doctrinal Officiel
                        </h4>
                        <p className="text-sm text-stone-800 leading-relaxed font-sans">
                          {doctrine.texteComplet}
                        </p>
                      </div>

                      {/* Scriptural Proofs */}
                      <div className="pt-2">
                        <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
                          <BookOpen size={13} className="text-amber-800" />
                          <span>Fondements Scripturaires &amp; Passages Bibliques</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {doctrine.referencesBibliques.map((ref, idx) => (
                            <span 
                              key={idx}
                              className="text-xs font-mono bg-white border border-stone-200 text-amber-950 px-2.5 py-1 rounded-md shadow-2xs"
                            >
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredDoctrines.length === 0 && (
            <div className="p-10 bg-white rounded-xl border border-dashed border-stone-300 text-center">
              <p className="text-sm text-stone-600 font-medium">Aucun article doctrinal ne correspond à votre recherche.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-amber-800 underline font-semibold"
              >
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
