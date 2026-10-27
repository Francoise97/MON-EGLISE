import React, { useState } from 'react';
import { ChurchMember } from '../types';
import { X, UserPlus, Check } from 'lucide-react';

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddMember: (member: ChurchMember) => void;
}

export const AddMemberModal: React.FC<AddMemberModalProps> = ({
  isOpen,
  onClose,
  onAddMember
}) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [dateNaissance, setDateNaissance] = useState('1995-05-12');
  const [dateBaptemeEau, setDateBaptemeEau] = useState('');
  const [baptiseSaintEsprit, setBaptiseSaintEsprit] = useState(true);
  const [pasteurBaptisant, setPasteurBaptisant] = useState('Collège Pastoral');
  const [departement, setDepartement] = useState<ChurchMember['departement']>('Chorale & Louange');
  const [statut, setStatut] = useState<ChurchMember['statut']>('Membre Actif');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom || !prenom) return;

    const newId = `mem-${Date.now()}`;
    const matricule = `TG-AD-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;

    const newMember: ChurchMember = {
      id: newId,
      matricule,
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim() || `fidele.${Math.floor(Math.random() * 1000)}@eglise-ad.org`,
      telephone: telephone.trim() || '+228 00 00 00 00',
      adresse: adresse.trim() || 'Lomé, Togo',
      dateNaissance,
      dateBaptemeEau: dateBaptemeEau || undefined,
      baptiseSaintEsprit,
      pasteurBaptisant: dateBaptemeEau ? pasteurBaptisant : undefined,
      departement,
      statut,
      tauxPresence: 95,
      cotisationsDimesDernierMois: 100,
      dateInscription: new Date().toISOString().split('T')[0]
    };

    onAddMember(newMember);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <UserPlus size={20} className="text-amber-400" />
            <div>
              <h3 className="text-lg font-serif font-bold text-white">
                Enregistrement d'un Nouveau Membre
              </h3>
              <p className="text-xs text-stone-300">
                Registre ecclésial officiel des Assemblées de Dieu
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Nom de famille / Paroisse *</label>
              <input
                type="text"
                required
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="ex: Paroisse / Nom de famille"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Prénom(s) du fidèle *</label>
              <input
                type="text"
                required
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="ex: Prénom(s) ou statut"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ex: contact@exemple.org"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Téléphone</label>
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="+33 6 12 34 56 78"
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">Adresse postale</label>
            <input
              type="text"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              placeholder="ex: 25 Avenue Gambetta, 75020 Paris"
              className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Département / Ministère</label>
              <select
                value={departement}
                onChange={(e) => setDepartement(e.target.value as any)}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              >
                <option value="Chorale & Louange">Chorale &amp; Louange</option>
                <option value="Diaconat & Social">Diaconat &amp; Social</option>
                <option value="Jeunesse (JAD)">Jeunesse (JAD)</option>
                <option value="Ministère des Hommes">Ministère des Hommes</option>
                <option value="Ministère des Femmes">Ministère des Femmes</option>
                <option value="École du Dimanche">École du Dimanche</option>
                <option value="Intercession & Prière">Intercession &amp; Prière</option>
                <option value="Accueil & Protocole">Accueil &amp; Protocole</option>
                <option value="Médias & Diffusion">Médias &amp; Diffusion</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Statut d'engagement</label>
              <select
                value={statut}
                onChange={(e) => setStatut(e.target.value as any)}
                className="w-full text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              >
                <option value="Membre Actif">Membre Actif</option>
                <option value="Nouveau Converti">Nouveau Converti</option>
                <option value="En Catéchèse">En Catéchèse / Préparation Baptême</option>
                <option value="Diacre Ordre">Diacre / Diaconesse</option>
                <option value="Ancien">Ancien d'Assemblée</option>
              </select>
            </div>
          </div>

          {/* Spiritual Records */}
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 space-y-3">
            <p className="text-xs font-semibold text-amber-950 uppercase tracking-wider">
              Parcours Spirituel &amp; Sacrements
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Date du Baptême par Immersion</label>
                <input
                  type="date"
                  value={dateBaptemeEau}
                  onChange={(e) => setDateBaptemeEau(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Pasteur Célébrant</label>
                <input
                  type="text"
                  value={pasteurBaptisant}
                  onChange={(e) => setPasteurBaptisant(e.target.value)}
                  placeholder="Pasteur officiant"
                  className="w-full text-xs px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-xs text-stone-800 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={baptiseSaintEsprit}
                onChange={(e) => setBaptiseSaintEsprit(e.target.checked)}
                className="w-4 h-4 rounded text-amber-800 border-stone-300 focus:ring-amber-500"
              />
              <span>Atteste de l'expérience du Baptême dans le Saint-Esprit (Signe initial du parler en langues)</span>
            </label>
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
              <span>Inscrire au Registre</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
