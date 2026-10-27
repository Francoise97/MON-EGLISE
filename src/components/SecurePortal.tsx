import React, { useState } from 'react';
import { User, ChurchMember, ArchiveDocument, UserRole } from '../types';
import { DEMO_USERS } from '../data/mockData';
import { 
  Users, 
  Archive, 
  Award, 
  HeartHandshake, 
  UserCheck, 
  Search, 
  Plus, 
  Download, 
  Trash2, 
  Eye, 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  Calendar,
  Lock,
  ChevronRight,
  TrendingUp,
  CreditCard,
  Church
} from 'lucide-react';
import { AddMemberModal } from './AddMemberModal';
import { AddArchiveModal } from './AddArchiveModal';
import { BaptismCertificateModal } from './BaptismCertificateModal';
import { SecurityGateModal } from './SecurityGateModal';

interface SecurePortalProps {
  currentUser: User;
  members: ChurchMember[];
  archives: ArchiveDocument[];
  onAddMember: (member: ChurchMember) => void;
  onDeleteMember: (id: string) => void;
  onAddArchive: (archive: ArchiveDocument) => void;
  onDeleteArchive: (id: string) => void;
  onSwitchUser: (user: User) => void;
}

export const SecurePortal: React.FC<SecurePortalProps> = ({
  currentUser,
  members,
  archives,
  onAddMember,
  onDeleteMember,
  onAddArchive,
  onDeleteArchive,
  onSwitchUser
}) => {
  const [activeTab, setActiveTab] = useState<'membres' | 'archives' | 'baptemes' | 'diaconat' | 'profil'>('membres');
  const [searchMember, setSearchMember] = useState('');
  const [filterDepartement, setFilterDepartement] = useState('Tous');
  const [filterStatut, setFilterStatut] = useState('Tous');

  // Modals
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isAddArchiveOpen, setIsAddArchiveOpen] = useState(false);
  const [selectedMemberForCertificate, setSelectedMemberForCertificate] = useState<ChurchMember | null>(null);

  // Security Gate State (PIN Protection)
  const [securityGateState, setSecurityGateState] = useState<{
    isOpen: boolean;
    targetRole: UserRole;
    actionTitle: string;
    onSuccess: () => void;
  }>({
    isOpen: false,
    targetRole: 'administrateur',
    actionTitle: '',
    onSuccess: () => {}
  });

  const requestRoleSwitch = (targetKey: string, role: UserRole) => {
    const targetUser = DEMO_USERS[targetKey];
    if (!targetUser) return;
    
    setSecurityGateState({
      isOpen: true,
      targetRole: role,
      actionTitle: `Saisissez le code PIN secret pour activer le rôle ${role.toUpperCase()}`,
      onSuccess: () => {
        onSwitchUser(targetUser);
      }
    });
  };

  const handleOpenAddMember = () => {
    setSecurityGateState({
      isOpen: true,
      targetRole: 'pasteur',
      actionTitle: "Autorisation Pastorale (Code 1914) : Inscription d'un Nouveau Membre",
      onSuccess: () => {
        setIsAddMemberOpen(true);
      }
    });
  };

  const handleOpenAddArchive = () => {
    setSecurityGateState({
      isOpen: true,
      targetRole: 'administrateur',
      actionTitle: "Autorisation Administrateur (Code 7770) : Indexation d'une Nouvelle Archive",
      onSuccess: () => {
        setIsAddArchiveOpen(true);
      }
    });
  };

  const handleRequestDeleteMember = (id: string) => {
    setSecurityGateState({
      isOpen: true,
      targetRole: 'administrateur',
      actionTitle: `Confirmation avec Code Admin (7770) : Retrait du Registre #${id}`,
      onSuccess: () => {
        onDeleteMember(id);
      }
    });
  };

  const handleRequestDeleteArchive = (id: string, title: string) => {
    setSecurityGateState({
      isOpen: true,
      targetRole: 'administrateur',
      actionTitle: `Confirmation avec Code Admin (7770) : Déclassement de l'Archive "${title}"`,
      onSuccess: () => {
        onDeleteArchive(id);
      }
    });
  };

  // Filtered members
  const filteredMembers = members.filter(m => {
    const matchesSearch = `${m.nom} ${m.prenom} ${m.matricule} ${m.email}`.toLowerCase().includes(searchMember.toLowerCase());
    const matchesDept = filterDepartement === 'Tous' || m.departement === filterDepartement;
    const matchesStatut = filterStatut === 'Tous' || m.statut === filterStatut;
    return matchesSearch && matchesDept && matchesStatut;
  });

  // Export CSV
  const handleExportCSV = () => {
    const headers = ['Matricule', 'Nom', 'Prenom', 'Email', 'Telephone', 'Departement', 'Statut', 'DateBapteme', 'TauxPresence'];
    const rows = filteredMembers.map(m => [
      m.matricule,
      `"${m.nom}"`,
      `"${m.prenom}"`,
      m.email,
      m.telephone,
      `"${m.departement}"`,
      `"${m.statut}"`,
      m.dateBaptemeEau || 'N/A',
      `${m.tauxPresence}%`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `registre_membres_assemblees_de_dieu_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isPastorOrAdmin = currentUser.role === 'administrateur' || currentUser.role === 'pasteur';
  const isDeaconOrAbove = isPastorOrAdmin || currentUser.role === 'diacre';

  return (
    <div className="py-10 bg-stone-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Session & Role Bar */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* User Profile Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-800 to-amber-950 text-white flex items-center justify-center text-xl font-serif font-bold shadow-md">
                {currentUser.role[0].toUpperCase()}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-serif font-bold text-stone-900">
                    {currentUser.role === 'pasteur' ? 'Direction Pastorale' : currentUser.role === 'diacre' ? 'Corps Diaconal' : currentUser.role === 'administrateur' ? 'Administration Ecclésiale' : 'Espace Membre d\'Assemblée'}
                  </h1>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold uppercase tracking-wider">
                    {currentUser.role}
                  </span>
                </div>
                <p className="text-xs text-stone-500 mt-1 font-sans">
                  {currentUser.titre || currentUser.departement} · Matricule: <span className="font-mono text-stone-700">{currentUser.matricule}</span>
                </p>
              </div>
            </div>

            {/* Quick Protected Role Switcher (Requires Secret PIN) */}
            <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-200">
              <div className="flex items-center gap-1.5 mb-1 px-1">
                <Lock size={12} className="text-amber-700" />
                <span className="block text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                  Changer de rôle (Code Secret Exigé) :
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => requestRoleSwitch('admin', 'administrateur')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg transition-colors font-medium ${
                    currentUser.role === 'administrateur' ? 'bg-stone-900 text-white font-semibold shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                  title="Code PIN Administrateur (7770) requis"
                >
                  <Lock size={10} className="opacity-70" />
                  <span>Administration</span>
                </button>
                <button
                  type="button"
                  onClick={() => requestRoleSwitch('pasteur', 'pasteur')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg transition-colors font-medium ${
                    currentUser.role === 'pasteur' ? 'bg-amber-800 text-white font-semibold shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                  title="Code PIN Pastoral (1914) requis"
                >
                  <Lock size={10} className="opacity-70" />
                  <span>Corps Pastoral</span>
                </button>
                <button
                  type="button"
                  onClick={() => requestRoleSwitch('diacre', 'diacre')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg transition-colors font-medium ${
                    currentUser.role === 'diacre' ? 'bg-emerald-800 text-white font-semibold shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                  title="Code PIN Diaconal (1234) requis"
                >
                  <Lock size={10} className="opacity-70" />
                  <span>Corps Diaconal</span>
                </button>
                <button
                  type="button"
                  onClick={() => requestRoleSwitch('membre', 'membre')}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-lg transition-colors font-medium ${
                    currentUser.role === 'membre' ? 'bg-purple-800 text-white font-semibold shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                  title="Code PIN Membre (2024) requis"
                >
                  <Lock size={10} className="opacity-70" />
                  <span>Espace Membre</span>
                </button>
              </div>
            </div>


          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-stone-100">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Membres Actifs</span>
              <span className="text-xl font-bold font-serif text-stone-900 tabular-nums">{members.length}</span>
              <span className="text-[10px] text-emerald-700 block font-medium mt-0.5">+4 ce trimestre</span>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Archives Officielles</span>
              <span className="text-xl font-bold font-serif text-stone-900 tabular-nums">{archives.length}</span>
              <span className="text-[10px] text-amber-800 block font-medium mt-0.5">Depuis 1914</span>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Assiduité Moyenne</span>
              <span className="text-xl font-bold font-serif text-stone-900 tabular-nums">92.4%</span>
              <span className="text-[10px] text-stone-500 block font-medium mt-0.5">Cultes dominicaux</span>
            </div>

            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70">
              <span className="text-[11px] text-stone-500 uppercase tracking-wider block">Baptisés Saint-Esprit</span>
              <span className="text-xl font-bold font-serif text-stone-900 tabular-nums">
                {members.filter(m => m.baptiseSaintEsprit).length}
              </span>
              <span className="text-[10px] text-stone-500 block font-medium mt-0.5">Fidèles attestés</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          <button
            onClick={() => setActiveTab('membres')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'membres' ? 'bg-amber-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <Users size={15} />
            <span>Gestion des Membres ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('archives')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'archives' ? 'bg-amber-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <Archive size={15} />
            <span>Gestion des Archives Historiques ({archives.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('baptemes')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'baptemes' ? 'bg-amber-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <Award size={15} />
            <span>Registres &amp; Certificats de Baptême</span>
          </button>

          <button
            onClick={() => setActiveTab('diaconat')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'diaconat' ? 'bg-amber-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <HeartHandshake size={15} />
            <span>Diaconat &amp; Entraide</span>
          </button>

          <button
            onClick={() => setActiveTab('profil')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'profil' ? 'bg-amber-800 text-white shadow-sm' : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            <UserCheck size={15} />
            <span>Mon Profil Ecclésial</span>
          </button>
        </div>

        {/* TAB 1: GESTION DES MEMBRES */}
        {activeTab === 'membres' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
            
            {/* Toolbar */}
            <div className="p-6 border-b border-stone-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-full sm:w-64">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    value={searchMember}
                    onChange={(e) => setSearchMember(e.target.value)}
                    placeholder="Nom, matricule, email..."
                    className="w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>

                <select
                  value={filterDepartement}
                  onChange={(e) => setFilterDepartement(e.target.value)}
                  className="text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
                >
                  <option value="Tous">Tous ministères</option>
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

                <select
                  value={filterStatut}
                  onChange={(e) => setFilterStatut(e.target.value)}
                  className="text-xs px-3 py-2 bg-stone-50 border border-stone-300 rounded-lg focus:outline-none"
                >
                  <option value="Tous">Tous statuts</option>
                  <option value="Membre Actif">Membre Actif</option>
                  <option value="Nouveau Converti">Nouveau Converti</option>
                  <option value="En Catéchèse">En Catéchèse</option>
                  <option value="Diacre Ordre">Diacre</option>
                  <option value="Ancien">Ancien</option>
                </select>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors border border-stone-300"
                >
                  <Download size={14} />
                  <span>Exporter CSV</span>
                </button>

                {isPastorOrAdmin && (
                  <button
                    onClick={handleOpenAddMember}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors shadow-sm"
                    title="Nécessite le code pastoral ou administrateur"
                  >
                    <Plus size={14} />
                    <span>Nouveau Membre</span>
                  </button>
                )}
              </div>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-600">
                <thead className="bg-stone-50 text-stone-700 uppercase font-semibold text-[11px] tracking-wider border-b border-stone-200">
                  <tr>
                    <th className="py-3.5 px-4">Matricule</th>
                    <th className="py-3.5 px-4">Fidèle / Contact</th>
                    <th className="py-3.5 px-4">Ministère</th>
                    <th className="py-3.5 px-4">Statut</th>
                    <th className="py-3.5 px-4">Baptême Eau</th>
                    <th className="py-3.5 px-4">Présence</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-amber-50/40 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-semibold text-amber-950">
                        {member.matricule}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-stone-900">{member.prenom} {member.nom}</div>
                        <div className="text-[11px] text-stone-500">{member.email} · {member.telephone}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-stone-700">
                        {member.departement}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-medium text-stone-800">
                          {member.statut}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {member.dateBaptemeEau ? (
                          <div className="text-stone-800">
                            <span>{member.dateBaptemeEau}</span>
                            <span className="block text-[10px] text-stone-400">par {member.pasteurBaptisant || 'Pasteur'}</span>
                          </div>
                        ) : (
                          <span className="text-stone-400 italic">En attente</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 tabular-nums font-semibold text-stone-800">
                        {member.tauxPresence}%
                      </td>
                      <td className="py-3.5 px-4 text-right space-x-2 whitespace-nowrap">
                        {member.dateBaptemeEau && (
                          <button
                            onClick={() => setSelectedMemberForCertificate(member)}
                            className="text-amber-800 hover:text-amber-950 font-semibold underline text-xs"
                            title="Générer le certificat officiel de baptême"
                          >
                            Certificat
                          </button>
                        )}
                        {isPastorOrAdmin && (
                          <button
                            onClick={() => handleRequestDeleteMember(member.id)}
                            className="p-1 text-stone-400 hover:text-red-700 rounded transition-colors inline-block"
                            title="Supprimer du registre (Code Admin 7770 requis)"
                          >
                            <Trash2 size={14} />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredMembers.length === 0 && (
                <div className="p-8 text-center text-stone-500 text-xs">
                  Aucun membre ne correspond aux critères de filtre.
                </div>
              )}
            </div>

            <div className="p-4 bg-stone-50 border-t border-stone-200 text-xs text-stone-500 flex justify-between items-center">
              <span>Affichage de {filteredMembers.length} membre(s) sur {members.length} enregistrés</span>
              <span>Registre sécurisé sous tutelle pastorale</span>
            </div>

          </div>
        )}

        {/* TAB 2: GESTION DES ARCHIVES HISTORIQUES */}
        {activeTab === 'archives' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  Répertoire et Indexation des Archives Ecclésiastiques
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Gestion centralisée des actes officiels depuis la fondation de 1914
                </p>
              </div>

              {isPastorOrAdmin && (
                <button
                  onClick={handleOpenAddArchive}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors shadow-sm"
                  title="Code PIN Admin (7770) requis"
                >
                  <Plus size={14} />
                  <span>Indexer une Nouvelle Archive</span>
                </button>
              )}
            </div>

            <div className="mt-6 space-y-4">
              {archives.map((doc) => (
                <div 
                  key={doc.id}
                  className="p-5 bg-stone-50 rounded-xl border border-stone-200 hover:border-amber-300 transition-all flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-1">
                      <span className="font-semibold text-amber-900">{doc.codeArchivage}</span>
                      <span>·</span>
                      <span>{doc.annee}</span>
                      <span>·</span>
                      <span className="uppercase">{doc.format}</span>
                    </div>

                    <h4 className="text-base font-serif font-bold text-stone-900 truncate">
                      {doc.titre}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                      {doc.resume}
                    </p>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500 mt-2">
                      <span>Signataire : {doc.auteur}</span>
                      <span>·</span>
                      <span>Accès : {doc.niveauAcces.join(', ')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-stone-500">{doc.tailleMo} Mo</span>
                    <button
                      onClick={() => alert(`Visualisation directe de l'archive ${doc.codeArchivage}.`)}
                      className="px-3 py-1.5 text-xs font-medium text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100"
                    >
                      Consulter
                    </button>
                    {isPastorOrAdmin && (
                      <button
                        onClick={() => handleRequestDeleteArchive(doc.id, doc.titre)}
                        className="p-1.5 text-stone-400 hover:text-red-700 rounded transition-colors"
                        title="Retirer de l'index (Code Admin 7770 requis)"
                      >
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: REGISTRES & BAPTÊMES */}
        {activeTab === 'baptemes' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Registre Officiel des Baptêmes par Immersion
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                Selon la 6e vérité fondamentale des Assemblées de Dieu, le baptême par immersion dans l'eau est commandé à chaque croyant ayant confessé sa foi. Vous pouvez générer et imprimer l'acte certifié pour chaque fidèle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.filter(m => m.dateBaptemeEau).map((baptizedMember) => (
                <div key={baptizedMember.id} className="p-5 bg-stone-50 rounded-xl border border-stone-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 font-mono mb-2">
                      <span>Acte #{baptizedMember.matricule}</span>
                      <span className="text-emerald-700 font-semibold">Baptisé</span>
                    </div>

                    <h4 className="text-lg font-serif font-bold text-stone-900">
                      {baptizedMember.prenom} {baptizedMember.nom}
                    </h4>
                    <p className="text-xs text-stone-600 mt-1">
                      Date du sacrement : <span className="font-semibold text-stone-800">{baptizedMember.dateBaptemeEau}</span>
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Célébré par : {baptizedMember.pasteurBaptisant || 'Pasteur Ordre'}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <button
                      onClick={() => setSelectedMemberForCertificate(baptizedMember)}
                      className="w-full py-2 px-3 text-xs font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Award size={14} />
                      <span>Générer le Certificat Officiel</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DIACONAT & ENTRAIDE */}
        {activeTab === 'diaconat' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                Diaconat, Service &amp; Solidarité Fraternelle
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Supervision de l'entraide sociale, secours d'urgence aux familles, accueil et intendance des cultes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-xl">
                <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">Fonds de Bienfaisance</span>
                <p className="text-2xl font-serif font-bold text-stone-900 mt-1 tabular-nums">4 850 €</p>
                <p className="text-xs text-stone-600 mt-1">Disponible pour assistance sociale directe</p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">Paniers Alimentaires</span>
                <p className="text-2xl font-serif font-bold text-stone-900 mt-1 tabular-nums">34 colis</p>
                <p className="text-xs text-stone-600 mt-1">Distribués ce mois aux veuves et étudiants</p>
              </div>

              <div className="p-5 bg-stone-50 border border-stone-200 rounded-xl">
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">Équipe de Service</span>
                <p className="text-2xl font-serif font-bold text-stone-900 mt-1 tabular-nums">18 Diacres</p>
                <p className="text-xs text-stone-600 mt-1">Mobilisés pour les cultes du dimanche</p>
              </div>
            </div>

            <div className="p-6 bg-stone-50 rounded-xl border border-stone-200">
              <h3 className="text-base font-serif font-bold text-stone-900 mb-3">
                Feuille de Route Diaconale pour le Dimanche Prochain
              </h3>
              <ul className="space-y-2 text-xs text-stone-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>08h30 : Préparation des éléments de la Sainte-Cène (pain sans levain et coupes)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>09h00 : Accueil personnalisé des familles et nouveaux arrivants au parvis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>10h15 : Relevé de l'assiduité et transmission discrète des offrandes et dîmes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600" />
                  <span>12h00 : Clôture du culte et visites de communion aux membres alités</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 5: MON PROFIL ECCLÉSIAL */}
        {activeTab === 'profil' && (
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-8 max-w-2xl mx-auto">
            <div className="text-center pb-6 border-b border-stone-200">
              <div className="w-20 h-20 rounded-full bg-amber-800 text-white flex items-center justify-center text-3xl font-serif font-bold mx-auto mb-3 shadow-md">
                {currentUser.role[0].toUpperCase()}
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900">
                {currentUser.titre || (currentUser.role === 'pasteur' ? 'Direction Pastorale' : currentUser.role === 'diacre' ? 'Corps Diaconal' : currentUser.role === 'administrateur' ? 'Administration Ecclésiale' : 'Membre d\'Assemblée')}
              </h2>
              <p className="text-xs text-stone-500 font-mono mt-1">
                Matricule : {currentUser.matricule} · Rôle Habilité : {currentUser.role.toUpperCase()}
              </p>
            </div>


            <div className="mt-6 space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Adresse Électronique :</span>
                <span className="font-semibold text-stone-800">{currentUser.email}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Téléphone de Contact :</span>
                <span className="font-semibold text-stone-800">{currentUser.telephone || 'Non renseigné'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Département d'Appartenance :</span>
                <span className="font-semibold text-stone-800">{currentUser.departement || 'Assemblée Générale'}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Date d'Enregistrement :</span>
                <span className="font-semibold text-stone-800">{currentUser.dateAdhesion}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-stone-500">Habilitation d'Accès :</span>
                <span className="font-semibold text-amber-900">Niveau Validé par le Conseil Pastoral</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 text-center">
              <p className="text-xs text-stone-500 italic font-serif">
                « Servons l'Éternel avec joie, venez avec allégresse en sa présence ! » — Psaume 100:2
              </p>
            </div>
          </div>
        )}

      </div>

      {/* Modals */}
      <AddMemberModal
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        onAddMember={onAddMember}
      />

      <AddArchiveModal
        isOpen={isAddArchiveOpen}
        onClose={() => setIsAddArchiveOpen(false)}
        onAddArchive={onAddArchive}
      />

      <BaptismCertificateModal
        member={selectedMemberForCertificate}
        onClose={() => setSelectedMemberForCertificate(null)}
      />

      {/* Security Gate PIN Verification Modal */}
      <SecurityGateModal
        isOpen={securityGateState.isOpen}
        onClose={() => setSecurityGateState(prev => ({ ...prev, isOpen: false }))}
        targetRole={securityGateState.targetRole}
        actionTitle={securityGateState.actionTitle}
        onSuccess={securityGateState.onSuccess}
      />

    </div>
  );
};
