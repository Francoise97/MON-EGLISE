export type UserRole = 'administrateur' | 'pasteur' | 'diacre' | 'membre' | 'visiteur';

export interface User {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  telephone?: string;
  matricule: string;
  departement?: string;
  dateAdhesion: string;
  dateBapteme?: string;
  titre?: string;
}

export interface HistoricalLeader {
  id: string;
  nom: string;
  titre: string;
  mandat: string;
  anneeDebut: number;
  anneeFin?: number;
  epoque: string;
  nationalite: string;
  realisationsCles: string[];
  biographie: string;
  citationMarquante: string;
  estActuel?: boolean;
}

export interface TimelineMilestone {
  annee: number;
  titre: string;
  lieu: string;
  description: string;
  impact: string;
  categorie: 'Fondation' | 'Doctrine' | 'Mission' | 'Mondialisation' | 'Présent';
}

export interface DoctrineArticle {
  numero: number;
  titre: string;
  resume: string;
  referencesBibliques: string[];
  texteComplet: string;
}

export interface ArchiveDocument {
  id: string;
  codeArchivage: string;
  titre: string;
  categorie: 'Actes & Procès-Verbaux' | 'Sermons & Enseignements' | 'Registres Pastoraux & Baptêmes' | 'Documents Fondateurs 1914' | 'Bulletins & Publications';
  annee: number;
  dateDocument: string;
  auteur: string;
  resume: string;
  contenuTexte: string;
  format: 'PDF' | 'DOCX' | 'IMAGE_ARCHIVE' | 'MANUSCRIT';
  tailleMo: number;
  niveauAcces: UserRole[];
  statut: 'Authentifié' | 'En cours d\'indexation' | 'Document Historique Rare';
}

export interface ChurchMember {
  id: string;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  adresse: string;
  dateNaissance: string;
  dateBaptemeEau?: string;
  baptiseSaintEsprit: boolean;
  pasteurBaptisant?: string;
  departement: 'Chorale & Louange' | 'Diaconat & Social' | 'Jeunesse (JAD)' | 'Ministère des Hommes' | 'Ministère des Femmes' | 'École du Dimanche' | 'Intercession & Prière' | 'Accueil & Protocole' | 'Médias & Diffusion';
  statut: 'Membre Actif' | 'Nouveau Converti' | 'En Catéchèse' | 'Ancien' | 'Diacre Ordre';
  tauxPresence: number;
  cotisationsDimesDernierMois: number;
  dateInscription: string;
}

export interface CultSchedule {
  id: string;
  jour: string;
  titre: string;
  horaire: string;
  lieu: string;
  orateur: string;
  description: string;
  estEnDirect: boolean;
}

export interface PrayerRequest {
  id: string;
  nomAuteur: string;
  requete: string;
  dateSoumission: string;
  confidentialite: 'Publique' | 'Réservée aux Pasteurs & Intercesseurs';
  statut: 'En attente' | 'En intercession active' | 'Exaucée / Témoignage';
  reponsePastorale?: string;
}

export interface BaptismRecord {
  id: string;
  numeroActe: string;
  nomCandidat: string;
  prenomCandidat: string;
  dateNaissance: string;
  dateBapteme: string;
  lieuBapteme: string;
  pasteurCelebrant: string;
  temoins: string[];
}


export interface TogoExecutiveMember {
  fonction: string;
  nom: string;
  titre: string;
  roleDescription: string;
}

