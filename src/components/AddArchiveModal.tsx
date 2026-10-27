import React, { useState } from 'react';
import { ArchiveDocument, UserRole } from '../types';
import { X, FilePlus, Check } from 'lucide-react';

interface AddArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArchive: (archive: ArchiveDocument) => void;
}

export const AddArchiveModal: React.FC<AddArchiveModalProps> = ({
  isOpen,
  onClose,
  onAddArchive
}) => {
  const [titre, setTitre] = useState('');
  const [categorie, setCategorie] = useState<ArchiveDocument['categorie']>('Actes & Procès-Verbaux');
  const [annee, setAnnee] = useState<number>(new Date().getFullYear());
  const [auteur, setAuteur] = useState('');
  const [resume, setResume] = useState('');
  const [contenuTexte, setContenuTexte] = useState('');
  const [format, setFormat] = useState<ArchiveDocument['format']>('PDF');
  const [tailleMo, setTailleMo] = useState<number>(2.4);
  const [niveauAcces, setNiveauAcces] = useState<UserRole[]>(['administrateur', 'pasteur']);
  const [statut, setStatut] = useState<ArchiveDocument['statut']>('Authentifié');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titre.trim() || !auteur.trim()) return;

    const codeArchivage = `ARC-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const newDoc: ArchiveDocument = {
      id: `arch-${Date.now()}`,
      codeArchivage,
      titre: titre.trim(),
      categorie,
      annee: Number(annee),
      dateDocument: new Date().toISOString().split('T')[0],
      auteur: auteur.trim(),
      resume: resume.trim() || 'Document officiel numérisé pour les archives des Assemblées de Dieu.',
      contenuTexte: contenuTexte.trim() || 'Texte archivé consigné dans les registres du Conseil.',
      format,
      tailleMo: Number(tailleMo),
      niveauAcces,
      statut
    };

    onAddArchive(newDoc);
    onClose();
  };

  const handleRoleToggle = (role: UserRole) => {
    if (niveauAcces.includes(role)) {
      if (niveauAcces.length > 1) {
        setNiveauAcces(niveauAcces.filter(r => r !== role));
      }
    } else {
      setNiveauAcces([...niveauAcces, role]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FilePlus size={20} className="text-amber-400" />
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Archivage d'un Nouveau Document Historique
              </h3>
              <p className="text-xs text-stone-300">
                Indexation numérique certifiée pour les Assemblées de Dieu
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
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Titre de l'archive *</label>
            <input
              type="text"
              required
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              placeholder="ex: Procès-Verbal de la Convention Régionale 2026"
              className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Catégorie</label>
              <select
                value={categorie}
                onChange={(e) => setCategorie(e.target.value as any)}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              >
                <option value="Actes & Procès-Verbaux">Actes &amp; Procès-Verbaux</option>
                <option value="Sermons & Enseignements">Sermons &amp; Enseignements</option>
                <option value="Registres Pastoraux & Baptêmes">Registres Pastoraux &amp; Baptêmes</option>
                <option value="Documents Fondateurs 1914">Documents Fondateurs 1914</option>
                <option value="Bulletins & Publications">Bulletins &amp; Publications</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Auteur / Signataire *</label>
              <input
                type="text"
                required
                value={auteur}
                onChange={(e) => setAuteur(e.target.value)}
                placeholder="ex: Conseil Pastoral & Diaconat"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Année</label>
              <input
                type="number"
                value={annee}
                onChange={(e) => setAnnee(Number(e.target.value))}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Format</label>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value as any)}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              >
                <option value="PDF">PDF Numérisé</option>
                <option value="DOCX">Document Word</option>
                <option value="IMAGE_ARCHIVE">Cliché d'Archive</option>
                <option value="MANUSCRIT">Manuscrit Historique</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Taille (Mo)</label>
              <input
                type="number"
                step="0.1"
                value={tailleMo}
                onChange={(e) => setTailleMo(Number(e.target.value))}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Résumé analytique</label>
            <textarea
              rows={2}
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              placeholder="Brève description du contenu pour l'indexation..."
              className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Transcription intégrale ou extrait textuel</label>
            <textarea
              rows={4}
              value={contenuTexte}
              onChange={(e) => setContenuTexte(e.target.value)}
              placeholder="Saisir ou coller le texte complet du procès-verbal, sermon ou décret..."
              className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30 resize-none font-serif"
            />
          </div>

          {/* Access levels */}
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1.5">
              Niveaux d'accès autorisés
            </label>
            <div className="flex flex-wrap gap-2">
              {(['administrateur', 'pasteur', 'diacre', 'membre'] as UserRole[]).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleToggle(role)}
                  className={`px-3 py-1 text-xs rounded-lg border capitalize transition-all ${
                    niveauAcces.includes(role)
                      ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                      : 'bg-stone-50 text-stone-500 border-stone-200'
                  }`}
                >
                  {role} {niveauAcces.includes(role) ? '✓' : ''}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3 border-t border-stone-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors shadow-sm flex items-center gap-2"
            >
              <Check size={14} />
              <span>Consigner dans les Archives</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
