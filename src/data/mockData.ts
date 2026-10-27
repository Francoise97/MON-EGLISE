import { User, ChurchMember, ArchiveDocument, CultSchedule, PrayerRequest, BaptismRecord } from '../types';

export const DEMO_USERS: Record<string, User> = {
  admin: {
    id: "usr-admin-01",
    nom: "Ecclésiale",
    prenom: "Administration",
    email: "admin.adamavo2@assembleesdedieu-togo.org",
    role: "administrateur",
    telephone: "+228 90 25 14 36",
    matricule: "ADM-TG-001",
    departement: "Secrétariat & Administration Paroissiale",
    dateAdhesion: "2018-01-10",
    titre: "Secrétariat Général & Administration du Temple de la Résurrection"
  },
  pasteur: {
    id: "usr-past-02",
    nom: "AMOUZOU",
    prenom: "Pasteur",
    email: "pasteur.amouzou@assembleesdedieu-togo.org",
    role: "pasteur",
    telephone: "+228 98 77 41 20",
    matricule: "PAS-TG-ADM2",
    departement: "Conseil Pastoral & Prédication",
    dateAdhesion: "2018-02-15",
    dateBapteme: "1995-07-20",
    titre: "Pasteur Titulaire & Berger · Paroisse d'Adamavo 2"
  },
  diacre: {
    id: "usr-diac-03",
    nom: "Diaconal",
    prenom: "Collège",
    email: "diaconat.adamavo2@assembleesdedieu-togo.org",
    role: "diacre",
    telephone: "+228 91 33 55 77",
    matricule: "DIA-TG-ADM2",
    departement: "Diaconat & Entraide Sociale d'Adamavo 2",
    dateAdhesion: "2018-05-12",
    dateBapteme: "2008-04-12",
    titre: "Collège Diaconal · Temple de la Résurrection"
  },
  membre: {
    id: "usr-memb-04",
    nom: "d'Assemblée",
    prenom: "Fidèle",
    email: "fidele.adamavo2@assembleesdedieu-togo.org",
    role: "membre",
    telephone: "+228 92 44 66 88",
    matricule: "MEM-TG-ADM2",
    departement: "Vie d'Église & Louange",
    dateAdhesion: "2021-03-07",
    dateBapteme: "2021-09-25",
    titre: "Fidèle Engagé · Temple de la Résurrection (Adamavo 2)"
  }
};

export const INITIAL_MEMBERS: ChurchMember[] = [
  {
    id: "mem-01",
    matricule: "TG-ADM2-2021-001",
    nom: "Paroisse Adamavo 2",
    prenom: "Fidèle Adhérent",
    email: "fidele.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 90 12 34 56",
    adresse: "Adamavo 2, Grand Lomé, Golfe 6, Togo",
    dateNaissance: "1990-04-14",
    dateBaptemeEau: "2019-06-23",
    baptiseSaintEsprit: true,
    pasteurBaptisant: "Pasteur AMOUZOU",
    departement: "Accueil & Protocole",
    statut: "Membre Actif",
    tauxPresence: 98,
    cotisationsDimesDernierMois: 150,
    dateInscription: "2019-02-10"
  },
  {
    id: "mem-02",
    matricule: "TG-ADM2-2022-014",
    nom: "Paroisse Adamavo 2",
    prenom: "Responsable Hommes",
    email: "hommes.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 91 34 56 78",
    adresse: "Adamavo 2, route de Baguida, Togo",
    dateNaissance: "1985-11-03",
    dateBaptemeEau: "2018-09-12",
    baptiseSaintEsprit: true,
    pasteurBaptisant: "Pasteur AMOUZOU",
    departement: "Ministère des Hommes",
    statut: "Membre Actif",
    tauxPresence: 96,
    cotisationsDimesDernierMois: 200,
    dateInscription: "2018-05-15"
  },
  {
    id: "mem-03",
    matricule: "TG-ADM2-2021-028",
    nom: "Paroisse Adamavo 2",
    prenom: "Jeunesse JAD",
    email: "jad.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 92 45 67 89",
    adresse: "Adamavo 2, Grand Lomé, Togo",
    dateNaissance: "2000-08-22",
    dateBaptemeEau: "2021-09-25",
    baptiseSaintEsprit: true,
    pasteurBaptisant: "Pasteur AMOUZOU",
    departement: "Jeunesse (JAD)",
    statut: "Membre Actif",
    tauxPresence: 94,
    cotisationsDimesDernierMois: 120,
    dateInscription: "2021-03-07"
  },
  {
    id: "mem-04",
    matricule: "TG-ADM2-2022-035",
    nom: "Paroisse Adamavo 2",
    prenom: "Choriste & Louange",
    email: "louange.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 93 56 78 90",
    adresse: "Quartier Adamavo 2, Lomé, Togo",
    dateNaissance: "1994-12-05",
    dateBaptemeEau: "2020-04-17",
    baptiseSaintEsprit: true,
    pasteurBaptisant: "Pasteur AMOUZOU",
    departement: "Chorale & Louange",
    statut: "Membre Actif",
    tauxPresence: 92,
    cotisationsDimesDernierMois: 140,
    dateInscription: "2020-01-20"
  },
  {
    id: "mem-05",
    matricule: "TG-ADM2-2023-042",
    nom: "Paroisse Adamavo 2",
    prenom: "Candidat au Baptême",
    email: "catechese.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 94 67 89 01",
    adresse: "Adamavo 2, Zone Est Lomé, Togo",
    dateNaissance: "2003-07-19",
    dateBaptemeEau: undefined,
    baptiseSaintEsprit: false,
    pasteurBaptisant: undefined,
    departement: "Jeunesse (JAD)",
    statut: "En Catéchèse",
    tauxPresence: 88,
    cotisationsDimesDernierMois: 50,
    dateInscription: "2023-10-02"
  },
  {
    id: "mem-06",
    matricule: "TG-ADM2-2024-055",
    nom: "Paroisse Adamavo 2",
    prenom: "Nouveau Croyant",
    email: "visiteur.adamavo2@assembleesdedieu-togo.org",
    telephone: "+228 95 78 90 12",
    adresse: "Adamavo 2, Commune de Golfe 6, Togo",
    dateNaissance: "2002-03-30",
    dateBaptemeEau: undefined,
    baptiseSaintEsprit: false,
    pasteurBaptisant: undefined,
    departement: "École du Dimanche",
    statut: "Nouveau Converti",
    tauxPresence: 85,
    cotisationsDimesDernierMois: 40,
    dateInscription: "2024-06-14"
  }
];

export const INITIAL_ARCHIVES: ArchiveDocument[] = [
  {
    id: "arch-togo-1936",
    codeArchivage: "ARC-TG-1936-IMPL",
    titre: "Rapport Historique de l'Implantation des Assemblées de Dieu au Togo (1936)",
    categorie: "Documents Fondateurs 1914",
    annee: 1936,
    dateDocument: "1936-11-12",
    auteur: "Missionnaires Pionniers & Évangélistes Autochtones",
    resume: "Récit d'époque documentant les premières vagues d'évangélisation pentecôtiste au Togo, les baptêmes initiaux et la constitution des premières paroisses de l'EEADT.",
    contenuTexte: "L'Évangile de la grâce a trouvé une terre bénie et réceptive au Togo. Dès 1936, les réunions de prière et d'évangélisation ont conduit à des conversions profondes et à l'effusion du Saint-Esprit. Les premières congrégations ont été établies avec des serviteurs dévoués, posant les bases solides de l'Église Évangélique des Assemblées de Dieu du Togo (EEADT).",
    format: "IMAGE_ARCHIVE",
    tailleMo: 14.2,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  },
  {
    id: "arch-togo-1965",
    codeArchivage: "ARC-TG-1965-PASGO",
    titre: "Actes Synodaux de l'Élection du Rév. Pasgo Bila Daniel (1er Président National)",
    categorie: "Actes & Procès-Verbaux",
    annee: 1965,
    dateDocument: "1965-03-14",
    auteur: "Synode Général des Assemblées de Dieu du Togo",
    resume: "Document juridique et ecclésial marquant l'accession du premier président national togolais à la tête des Assemblées de Dieu du Togo, marquant le passage à l'autonomie indigène.",
    contenuTexte: "Réunis en assemblée générale représentative à Lomé, les délégués des pasteurs et des assemblées locales du Togo ont élu le Rév. Pasteur Pasgo Bila Daniel comme 1er Président National de l'Église. Ce mandat de 22 ans a posé les structures juridiques, la reconnaissance de l'État togolais et la formation des premiers pasteurs nationaux.",
    format: "PDF",
    tailleMo: 8.5,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  },
  {
    id: "arch-togo-1987",
    codeArchivage: "ARC-TG-1987-DJAK",
    titre: "Procès-Verbal de l'Accession du Rév. Djakouti Mitré à la Présidence Nationale (1987)",
    categorie: "Actes & Procès-Verbaux",
    annee: 1987,
    dateDocument: "1987-08-22",
    auteur: "Conseil National de l'EEADT",
    resume: "Début du mandat historique de 37 années du Rév. Djakouti Mitré, marqué par la fondation de l'ESTAO à Lomé et la multiplication de plus de 1 500 assemblées au Togo.",
    contenuTexte: "Le Conseil National des Assemblées de Dieu du Togo consacre le Rév. Djakouti Mitré comme Président National. Sous sa présidence s'ouvrira l'âge d'or de la formation théologique avec l'ESTAO de Lomé, la création d'écoles, de dispensaires et l'évangélisation méthodique de toutes les préfectures du Togo.",
    format: "PDF",
    tailleMo: 9.3,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  },
  {
    id: "arch-togo-2024-atk",
    codeArchivage: "ARC-TG-2024-ATKP",
    titre: "Actes Officiels du Conseil Général Extraordinaire d'Atakpamé (Juillet 2024)",
    categorie: "Actes & Procès-Verbaux",
    annee: 2024,
    dateDocument: "2024-07-28",
    auteur: "Conseil Électif National de l'EEADT",
    resume: "Procès-verbal solennel de l'élection du nouveau Bureau Exécutif National sous la présidence du Rév. Dr. Adadé Ayi Migbloessan, après 37 ans de présidence du Rév. Djakouti Mitré.",
    contenuTexte: "Réunis en Conseil Général Extraordinaire à Atakpamé, les pasteurs délégués et représentants des cinq régions ecclésiastiques du Togo ont élu dans la paix et la prière fervente le nouveau Bureau Exécutif National. Le Rév. Dr. Adadé Ayi Migbloessan a été porté à la Présidence Nationale de l'EEADT, avec l'hommage solennel rendu au Président d'Honneur Rév. Djakouti Mitré pour 37 années de fidélité et d'expansion de l'œuvre du Seigneur.",
    format: "PDF",
    tailleMo: 7.9,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  },
  {
    id: "arch-togo-2024-estao",
    codeArchivage: "ARC-TG-2024-ESTAO",
    titre: "Procès-Verbal de la Cérémonie d'Investiture à l'ESTAO Lomé (13 Octobre 2024)",
    categorie: "Actes & Procès-Verbaux",
    annee: 2024,
    dateDocument: "2024-10-13",
    auteur: "Comité d'Organisation & Collège des Pasteurs Ordonnés",
    resume: "Scellement ecclésial officiel de la passation de service et de l'investiture du Rév. Dr. Adadé Ayi et des membres du Bureau National en présence des autorités religieuses et civiles du Togo.",
    contenuTexte: "Le dimanche 13 octobre 2024, sur le campus de l'École Supérieure de Théologie de l'Afrique de l'Ouest (ESTAO) à Lomé, en présence d'une foule immense de fidèles et de délégations fraternelles, a eu lieu l'investiture solennelle du Rév. Dr. Adadé Ayi Migbloessan comme Président National de l'Église Évangélique des Assemblées de Dieu du Togo. L'onction d'huile et la prière de bénédiction ont été prononcées pour le mandat 2024-2030 axé sur l'unité, la sanctification et la Grande Commission.",
    format: "PDF",
    tailleMo: 11.4,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  },
  {
    id: "arch-adamavo2-2024",
    codeArchivage: "ARC-TG-ADM2-2024",
    titre: "Registre Officiel de la Paroisse d'Adamavo 2 – Temple de la Résurrection",
    categorie: "Registres Pastoraux & Baptêmes",
    annee: 2024,
    dateDocument: "2024-11-20",
    auteur: "Pasteur AMOUZOU & Secrétariat Paroissial",
    resume: "Acte paroissial récapitulatif des cultes, engagements de la Jeunesse (JAD), du Ministère des Hommes et des baptêmes d'eau célébrés au Temple de la Résurrection à Adamavo 2.",
    contenuTexte: "Sous la conduite du Pasteur AMOUZOU, le Temple de la Résurrection d'Adamavo 2 poursuit son témoignage au sein de la Commune de Golfe 6. L'assemblée se réunit fidèlement pour la JAD le lundi, le rassemblement des hommes le mardi, l'étude biblique le jeudi, la grande veillée le vendredi et le culte d'adoration et de Sainte-Cène le dimanche matin.",
    format: "PDF",
    tailleMo: 6.2,
    niveauAcces: ["administrateur", "pasteur", "diacre", "membre"],
    statut: "Authentifié"
  }
];

export const INITIAL_CULT_SCHEDULES: CultSchedule[] = [
  {
    id: "sch-1",
    jour: "Dimanche Matin",
    titre: "Grand Culte d'Adoration, Louange & Sainte-Cène",
    horaire: "08:00 – 11:30",
    lieu: "Temple de la Résurrection · Adamavo 2 (Golfe 6, Togo)",
    orateur: "Pasteur AMOUZOU (Pasteur Titulaire & Berger)",
    description: "Culte solennel au Temple de la Résurrection : adoration fervente, louange inspirée, prédication de la sainte doctrine, partage de la table du Seigneur et prière d'onction pour les familles.",
    estEnDirect: true
  },
  {
    id: "sch-2",
    jour: "Lundi Soir",
    titre: "Rassemblement de la Jeunesse (JAD - Jeunesse des Assemblées de Dieu)",
    horaire: "18:30 – 20:30",
    lieu: "Temple de la Résurrection · Adamavo 2",
    orateur: "Bureau JAD & Pasteur AMOUZOU",
    description: "Rassemblement puissant de toute la jeunesse chrétienne : louange vibrante, enseignement pratique sur la pureté, sanctification, témoignages édifiants et retransmission en direct sur le web.",
    estEnDirect: true
  },
  {
    id: "sch-3",
    jour: "Mardi Soir",
    titre: "Rassemblement des Hommes (Département des Hommes)",
    horaire: "19:30 – 21:00",
    lieu: "Temple de la Résurrection · Adamavo 2",
    orateur: "Direction des Hommes & Pasteur AMOUZOU",
    description: "Rencontre spirituelle et fraternelle des pères de famille et des hommes de l'église : intercession fervente, responsabilité spirituelle dans le foyer, édification fraternelle et solidarité.",
    estEnDirect: false
  },
  {
    id: "sch-4",
    jour: "Jeudi Soir",
    titre: "Enseignement Biblique & Étude Doctrinale",
    horaire: "19:00 – 20:45",
    lieu: "Temple de la Résurrection · Adamavo 2",
    orateur: "Pasteur AMOUZOU",
    description: "Étude systématique des Écritures, approfondissement des 16 Vérités Fondamentales et affermissement de la foi chrétienne.",
    estEnDirect: true
  },
  {
    id: "sch-5",
    jour: "Vendredi Soir",
    titre: "Veillée d'Adoration, Combat Spirituel & Intercession",
    horaire: "22:00 – 01:00",
    lieu: "Temple de la Résurrection · Adamavo 2",
    orateur: "Pasteur AMOUZOU & Collège des Intercesseurs",
    description: "Veillée d'intercession intense : combat spirituel, brisement des chaînes, prière pour la délivrance des malades, réveil spirituel et visitation du Saint-Esprit.",
    estEnDirect: false
  }
];

export const INITIAL_PRAYER_REQUESTS: PrayerRequest[] = [
  {
    id: "pray-01",
    nomAuteur: "Fidèle du Temple de la Résurrection (Adamavo 2)",
    requete: "Prière d'action de grâce pour la guérison miraculeuse accordée à notre enfant et pour la protection du foyer au quartier Adamavo 2.",
    dateSoumission: "2026-10-24",
    confidentialite: "Publique",
    statut: "Exaucée / Témoignage",
    reponsePastorale: "Pasteur AMOUZOU : Gloire au Christ ressuscité qui guérit et restaure ! L'église continue de bénir votre famille."
  },
  {
    id: "pray-02",
    nomAuteur: "Famille Chrétienne d'Adamavo 2",
    requete: "Demande de prière pour l'obtention d'un emploi stable pour un jeune diplômé et la paix dans notre communauté.",
    dateSoumission: "2026-10-26",
    confidentialite: "Publique",
    statut: "En intercession active",
    reponsePastorale: "Pasteur AMOUZOU : Porté avec foi lors du rassemblement des hommes et de la veillée du mardi soir. Le Seigneur pourvoira."
  },
  {
    id: "pray-03",
    nomAuteur: "Membre de l'Assemblée",
    requete: "Prière pour la délivrance spirituelle et la victoire sur les attaques de l'ennemi dans le travail.",
    dateSoumission: "2026-10-26",
    confidentialite: "Réservée aux Pasteurs & Intercesseurs",
    statut: "En attente",
    reponsePastorale: "Pasteur AMOUZOU : Rendez-vous pastoral fixé à la permanence pour prière d'autorité et onction."
  }
];

export const INITIAL_BAPTISM_RECORDS: BaptismRecord[] = [
  {
    id: "bap-2024-001",
    numeroActe: "BAP-TG-ADM2-2024-01",
    nomCandidat: "Paroisse Adamavo 2",
    prenomCandidat: "Fidèle Baptisé",
    dateNaissance: "1995-04-14",
    dateBapteme: "2024-05-19",
    lieuBapteme: "Bassin Baptismal · Temple de la Résurrection (Adamavo 2)",
    pasteurCelebrant: "Pasteur AMOUZOU",
    temoins: ["Collège Diaconal Adamavo 2", "Responsable JAD"]
  },
  {
    id: "bap-2024-002",
    numeroActe: "BAP-TG-ADM2-2024-02",
    nomCandidat: "Paroisse Adamavo 2",
    prenomCandidat: "Fidèle Baptisé",
    dateNaissance: "2001-08-22",
    dateBapteme: "2024-09-15",
    lieuBapteme: "Bassin Baptismal · Temple de la Résurrection (Adamavo 2)",
    pasteurCelebrant: "Pasteur AMOUZOU",
    temoins: ["Bureau Diaconal", "Responsable Ministère des Hommes"]
  }
];
