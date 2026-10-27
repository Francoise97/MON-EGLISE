import React, { useState } from 'react';
import { ArchiveDocument, User } from '../types';
import { FileText, Download, Lock, Eye, Search, Filter, ShieldCheck, X } from 'lucide-react';

interface ArchivesSectionProps {
  archives: ArchiveDocument[];
  currentUser: User | null;
  onOpenAuth: () => void;
  onNavigateToManagement: () => void;
}

export const ArchivesSection: React.FC<ArchivesSectionProps> = ({
  archives,
  currentUser,
  onOpenAuth,
  onNavigateToManagement
}) => {
  const [selectedDoc, setSelectedDoc] = useState<ArchiveDocument | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('Tous');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    'Tous',
    'Documents Fondateurs 1914',
    'Actes & Procès-Verbaux',
    'Sermons & Enseignements',
    'Registres Pastoraux & Baptêmes',
    'Bulletins & Publications'
  ];

  const filteredArchives = archives.filter(doc => {
    const matchesCategory = filterCategory === 'Tous' || doc.categorie === filterCategory;
    const matchesSearch = doc.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.auteur.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.codeArchivage.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const canAccessDocument = (_doc: ArchiveDocument): boolean => {
    return true; // 100% libre et accessible à tous les fidèles et chercheurs
  };

  return (
    <section id="archives" className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-10 border-b border-stone-200">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-amber-800 mb-2 font-mono">
              <span>Conservatoire Numérique &amp; Patrimoine Ecclésiastique</span>
              <span aria-hidden="true">·</span>
              <span>1914 – Présent · Accès Libre</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight text-balance">
              Archives Officielles des Assemblées de Dieu
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              Consultez les manuscrits, procès-verbaux de conventions, déclarations doctrinales et registres pastoraux certifiés qui retracent plus d'un siècle de réveil, de Hot Springs 1914 à l'implantation au Togo et l'investiture de 2024.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-amber-950 bg-amber-100/80 border border-amber-200 rounded-xl shadow-2xs">
              <ShieldCheck size={16} className="text-amber-800" />
              <span>Consultation Ouverte à Tous les Visiteurs</span>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-stone-200/60 rounded-xl max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  filterCategory === cat
                    ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par titre, auteur..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600"
            />
          </div>
        </div>

        {/* Archives Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArchives.map((doc) => {
            const hasAccess = canAccessDocument(doc);

            return (
              <div
                key={doc.id}
                className="bg-white rounded-xl border border-stone-200 hover:border-amber-300 transition-all p-6 flex flex-col justify-between shadow-2xs hover:shadow-xs group"
              >
                <div>
                  {/* Top Bar: Code and Year */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                    <span className="text-amber-900 font-semibold">{doc.codeArchivage}</span>
                    <span>{doc.annee}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-stone-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                    {doc.titre}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-stone-500 mt-2 font-medium">
                    <span>{doc.categorie}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.auteur}</span>
                  </div>

                  <p className="text-xs text-stone-600 mt-3 line-clamp-3 leading-relaxed">
                    {doc.resume}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
                    <span className="uppercase">{doc.format}</span>
                    <span>·</span>
                    <span>{doc.tailleMo} Mo</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {hasAccess ? (
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-950 bg-amber-100/70 hover:bg-amber-200 rounded-lg transition-colors"
                      >
                        <Eye size={13} />
                        <span>Lire le Manuscrit</span>
                      </button>
                    ) : (
                      <button
                        onClick={onOpenAuth}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-500 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
                        title="Document réservé aux pasteurs et administrateurs"
                      >
                        <Lock size={13} />
                        <span>Accès Restreint</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Archive Reading Modal */}
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
              
              {/* Modal Header */}
              <div className="bg-stone-900 text-white p-6 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest">
                    <span>{selectedDoc.codeArchivage}</span>
                    <span>·</span>
                    <span>Année {selectedDoc.annee}</span>
                    <span>·</span>
                    <span>Format {selectedDoc.format}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    {selectedDoc.titre}
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    Auteur(s) : {selectedDoc.auteur} · Enregistré sous {selectedDoc.statut}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                    Résumé Archivistique
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200 leading-relaxed font-sans">
                    {selectedDoc.resume}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
                    <FileText size={15} />
                    <span>Transcription &amp; Texte Intégral du Document</span>
                  </h4>
                  <div className="p-6 bg-stone-50/80 rounded-xl border border-stone-200 font-serif text-sm text-stone-800 leading-loose whitespace-pre-line max-h-96 overflow-y-auto shadow-inner">
                    {selectedDoc.contenuTexte}
                  </div>
                </div>

                {/* Archival metadata detail */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[11px]">Niveau d'Accès :</span>
                    <span className="font-medium text-stone-800 capitalize">
                      {selectedDoc.niveauAcces.join(', ')}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Poids Numérisé :</span>
                    <span className="font-medium text-stone-800 tabular-nums">
                      {selectedDoc.tailleMo} Mo (Haute Fidélité)
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[11px]">Date de Scellement :</span>
                    <span className="font-medium text-stone-800">
                      {selectedDoc.dateDocument}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  Conservatoire National &amp; Mondial des Assemblées de Dieu
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      alert(`Téléchargement de l'archive ${selectedDoc.codeArchivage} initié.`);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors"
                  >
                    <Download size={14} />
                    <span>Télécharger la Copie Conforme</span>
                  </button>
                  <button
                    onClick={() => setSelectedDoc(null)}
                    className="px-4 py-2 text-xs font-semibold text-stone-700 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
