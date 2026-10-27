import { HistoricalLeader, TimelineMilestone, DoctrineArticle, TogoExecutiveMember } from '../types';

export interface LocalParishData {
  nom: string;
  titreOfficiel: string;
  commune: string;
  quartier: string;
  ville: string;
  pays: string;
  pasteurTitulaire: string;
  titrePasteur: string;
  biographiePasteur: string;
  visionParoissiale: string;
  versetCle: string;
  departementsActifs: { nom: string; description: string; jourReunion: string }[];
  coordonnees: {
    adresseComplete: string;
    telephone: string;
    email: string;
    permanencePastorale: string;
  };
}

export const LOCAL_PARISH_ADAMAVO_2: LocalParishData = {
  nom: "Temple de la Résurrection",
  titreOfficiel: "Église Évangélique des Assemblées de Dieu du Togo – Paroisse d'Adamavo 2",
  commune: "Commune de Golfe 6",
  quartier: "Adamavo 2 (Grand Lomé)",
  ville: "Lomé",
  pays: "Togo",
  pasteurTitulaire: "Pasteur AMOUZOU",
  titrePasteur: "Pasteur Titulaire & Berger de la Paroisse d'Adamavo 2",
  biographiePasteur: "Serviteur consacré et passionné de l'Évangile intégral, le Pasteur AMOUZOU conduit la Paroisse d'Adamavo 2 (Temple de la Résurrection) avec dévouement, vision prophétique et amour pastoral. Son ministère est marqué par la proclamation inébranlable de la Parole de Dieu, l'enseignement doctrinal, la prière d'intercession, la délivrance des âmes et l'accompagnement des familles chrétiennes dans le quartier d'Adamavo 2 et ses environs.",
  visionParoissiale: "Être un flambeau de la puissance de la résurrection du Christ au cœur d'Adamavo 2, en gagnant les âmes pour le Royaume, en fortifiant chaque foyer par les Écritures et en manifestant la grâce et les dons du Saint-Esprit.",
  versetCle: "« Jésus lui dit : Je suis la résurrection et la vie. Celui qui croit en moi vivra, quand même il serait mort. » — Jean 11:25",
  departementsActifs: [
    {
      nom: "Jeunesse des Assemblées de Dieu (JAD)",
      description: "Formation biblique des jeunes, louange dynamique, évangélisation de quartier et retransmission en direct.",
      jourReunion: "Tous les Lundis de 18h30 à 20h30"
    },
    {
      nom: "Ministère des Hommes",
      description: "Rassemblement des pères, époux et hommes de l'église pour l'intercession, la sanctification et la responsabilité chrétienne.",
      jourReunion: "Tous les Mardis de 19h30 à 21h00"
    },
    {
      nom: "Ministère des Femmes",
      description: "Prière fervente des mères, entraide sociale, édification conjugale et visites d'amour fraternel.",
      jourReunion: "Tous les Mercredis après-midi"
    },
    {
      nom: "Chorale & Groupe de Louange",
      description: "Conduite de l'assemblée dans la présence glorieuse du Seigneur lors des cultes et grandes veillées.",
      jourReunion: "Samedis de répétition & Dimanches"
    },
    {
      nom: "École du Dimanche (ECODIM)",
      description: "Éveil à la foi, mémorisation des versets bibliques et instruction des enfants d'Adamavo 2.",
      jourReunion: "Tous les Dimanches dès 08h00"
    },
    {
      nom: "Collège des Intercesseurs",
      description: "Prière continue, combat spirituel et soutien pour les requêtes des fidèles du Temple de la Résurrection.",
      jourReunion: "Jeudis & Vendredis soir"
    }
  ],
  coordonnees: {
    adresseComplete: "Adamavo 2, non loin du grand axe routier de Baguida, Commune de Golfe 6, Grand Lomé, Togo",
    telephone: "+228 90 25 14 36 / +228 98 77 41 20",
    email: "contact.adamavo2@assembleesdedieu-togo.org",
    permanencePastorale: "Mardis & Jeudis de 09h00 à 13h00 (sur rendez-vous avec le Pasteur AMOUZOU)"
  }
};

export const TOGO_CHURCH_OVERVIEW = {
  nomOfficiel: "Église Évangélique des Assemblées de Dieu du Togo (EEADT)",
  anneeImplantation: "1936 – 1937",
  siegeNational: "Lomé, République Togolaise",
  presidenceActuelle: "Rév. Dr. Adadé Ayi Migbloessan (Élu en juillet 2024, investi le 13 octobre 2024)",
  presidenceHonoraire: "Rév. Djakouti Mitré (37 ans de présidence bâtisseuse : 1987 – 2024)",
  precedentsPresidents: "Rév. Pasteur Pasgo Bila Daniel (1er Président National autochtone : 1965 – 1987)",
  nombreTemples: "Plus de 1 500 paroisses locales réparties dans les 5 régions du Togo",
  institutsTheologiques: "École Supérieure de Théologie de l'Afrique de l'Ouest (ESTAO) à Lomé & FATAD",
  communauteFideles: "Plus de 350 000 membres et fidèles engagés pour l'Évangile intégral au Togo",
  devise: "« Ce n'est ni par la puissance ni par la force, mais c'est par mon esprit, dit l'Éternel des armées » (Zacharie 4:6)",
  paroisseEnVedette: "Paroisse d'Adamavo 2 – Temple de la Résurrection (Pasteur AMOUZOU)",
  regionsEcclesiastiques: [
    "Région Maritime & Grand Lomé (Golfe 1 à 7, incluant Adamavo 2)",
    "Région des Plateaux (Atakpamé, Kpalimé, Badou)",
    "Région Centrale (Sokodé, Tchamba, Sotouboua)",
    "Région de la Kara (Kara, Bafilo, Niamtougou)",
    "Région des Savanes (Dapaong, Mango, Cinkassé)"
  ]
};

export const TOGO_LEADERSHIP_CHRONOLOGY: HistoricalLeader[] = [
  {
    id: "pionniers-togo-1936",
    nom: "Les Missionnaires & Pasteurs Pionniers",
    titre: "Pères Fondateurs & Implantation au Togo",
    mandat: "1936 – 1965",
    anneeDebut: 1936,
    anneeFin: 1965,
    epoque: "Période de la semence de l'Évangile et des premières conversions",
    nationalite: "Togolaise & Missionnaires Ouest-Africains",
    realisationsCles: [
      "Premières vagues d'évangélisation pentecôtiste traversant le Nord du Togo depuis la Haute-Volta (Burkina Faso)",
      "Établissement des premières congrégations autochtones dans les Savanes et à Lomé",
      "Formation des premiers catéchistes et évangélistes togolais dans les années 1940-1950",
      "Préparation de l'indépendance de l'Église nationale avec transfert des responsabilités"
    ],
    biographie: "Dès 1936, des missionnaires et de fervents évangélistes pionniers ont apporté le message de la Pentecôte en terre togolaise. Malgré les défis coloniaux, climatiques et culturels, l'Évangile intégral a pris racine dans le cœur des populations, donnant naissance aux premières églises locales qui allaient former le socle de l'Église Évangélique des Assemblées de Dieu du Togo.",
    citationMarquante: "La semence incorruptible de la Parole de Dieu plantée au Togo a germé sous la pluie vivifiante du Saint-Esprit pour ne plus jamais s'éteindre."
  },
  {
    id: "pasgo-bila-daniel",
    nom: "Rév. Pasteur Pasgo Bila Daniel",
    titre: "1er Président National Autochtone des Assemblées de Dieu du Togo",
    mandat: "1965 – 1987 (22 ans de mandat)",
    anneeDebut: 1965,
    anneeFin: 1987,
    epoque: "Autonomie nationale, structuration juridique et premières écoles bibliques",
    nationalite: "Togolaise",
    realisationsCles: [
      "Premier président national togolais porté à la tête des Assemblées de Dieu du Togo en 1965",
      "Obtention de la reconnaissance officielle de l'Église par les autorités de la République Togolaise",
      "Structuration des premiers statuts et règlements intérieurs de l'EEADT",
      "Érection des premiers instituts bibliques pour former une élite pastorale togolaise",
      "Multiplication des assemblées locales du Sud au Nord du Togo sur 22 années de fidélité"
    ],
    biographie: "Pionnier respecté et figure tutélaire de l'Église, le Rév. Pasteur Pasgo Bila Daniel est le premier Togolais à assumer la présidence nationale de l'EEADT après l'ère missionnaire. Pendant 22 ans, avec foi, persévérance et sagesse proverbiale, il a posé les fondations administratives et spirituelles indispensables qui ont permis à l'Église de grandir harmonieusement et de s'enraciner durablement sur toute l'étendue du territoire togolais.",
    citationMarquante: "L'œuvre de Dieu au Togo appartient au Seigneur Jésus-Christ ; notre devoir est de demeurer des serviteurs fidèles et d'instruire la relève dans la vérité."
  },
  {
    id: "djakouti-mitre",
    nom: "Rév. Djakouti Mitré",
    titre: "Président National Bâtisseur & Actuel Président d'Honneur de l'EEADT",
    mandat: "1987 – 2024 (37 ans de présidence historique)",
    anneeDebut: 1987,
    anneeFin: 2024,
    epoque: "Ère de l'expansion fulgurante, de l'ESTAO et de l'enracinement institutionnel",
    nationalite: "Togolaise",
    realisationsCles: [
      "Direction de l'Église pendant 37 années d'une croissance sans précédent (de quelques centaines à plus de 1 500 églises)",
      "Bâtisseur et chancelier de l'École Supérieure de Théologie de l'Afrique de l'Ouest (ESTAO) à Lomé, formant les pasteurs de tout le continent",
      "Développement de la Faculté de Théologie des Assemblées de Dieu (FATAD)",
      "Création d'œuvres sociales majeures : écoles primaires, collèges, centres de santé, orphelinats",
      "Président de la Fédération des Églises et Missions Évangéliques du Togo (FEMET) et voix respectée de la paix civile",
      "Passation de flambeau fraternelle et exemplaire en juillet-octobre 2024, désormais Président d'Honneur"
    ],
    biographie: "Personnalité charismatique d'une dimension spirituelle et morale exceptionnelle, le Rév. Djakouti Mitré a consacré sa vie au développement des Assemblées de Dieu au Togo. Sous son mandat de 37 ans, l'Église a connu une explosion d'implantations, franchissant la barre des 1 500 paroisses. Érudit et visionnaire, il a fait de Lomé la capitale de la formation théologique pentecôtiste pour toute l'Afrique de l'Ouest francophone à travers l'ESTAO. Il demeure un patriarche et guide d'honneur vénéré.",
    citationMarquante: "Une Église qui ne prie pas et qui ne forme pas ses pasteurs est une Église sans avenir. Bâtissons sur le roc inébranlable du Christ."
  },
  {
    id: "adade-ayi-migbloessan",
    nom: "Rév. Dr. Adadé Ayi Migbloessan",
    titre: "Président National Actuel du Bureau Exécutif de l'EEADT",
    mandat: "2024 – Présent (Investi le 13 Octobre 2024)",
    anneeDebut: 2024,
    anneeFin: undefined,
    epoque: "Leadership contemporain, unité, renouveau spirituel et vision Togo 2030",
    nationalite: "Togolaise",
    realisationsCles: [
      "Élu triomphalement lors du Conseil Général Électif Extraordinaire d'Atakpamé en juillet 2024",
      "Investiture solennelle le 13 octobre 2024 au grand temple de l'ESTAO à Lomé devant des milliers de fidèles et dignitaires",
      "Docteur en théologie et ancien pasteur titulaire de la Paroisse Ébène de Djidjolé à Lomé",
      "Lancement du plan d'action axé sur la sanctification du corps pastoral, l'évangélisation agressive et la modernisation des archives",
      "Renforcement des liens fraternels avec les conseils des 5 régions ecclésiastiques et les paroisses locales du Grand Lomé"
    ],
    biographie: "Docteur en théologie, prédicateur inspiré et enseignant chevronné, le Rév. Dr. Adadé Ayi Migbloessan a été porté à la magistrature suprême de l'EEADT en juillet 2024. Investi solennellement à Lomé le 13 octobre 2024, il impulse une gouvernance axée sur la pureté spirituelle, l'intégrité ministérielle, l'accompagnement de la jeunesse (JAD) et la propagation méthodique de l'Évangile dans chaque ville et village du Togo.",
    citationMarquante: "Notre responsabilité devant Dieu et devant la nation togolaise est de préserver la sainte doctrine, de marcher dans l'amour fraternel et de proclamer la puissance du Christ ressuscité.",
    estActuel: true
  },
  {
    id: "pasteur-amouzou-adamavo2",
    nom: "Pasteur AMOUZOU",
    titre: "Pasteur Titulaire & Berger du Temple de la Résurrection (Adamavo 2)",
    mandat: "En fonction pastorale active",
    anneeDebut: 2018,
    anneeFin: undefined,
    epoque: "Bergerie locale, réveil spirituel et rayonnement paroissial à Adamavo 2",
    nationalite: "Togolaise",
    realisationsCles: [
      "Pasteur titulaire guidant fidèlement le troupeau du Seigneur au Temple de la Résurrection d'Adamavo 2",
      "Animation des cultes d'adoration, prédication puissante de la Parole et célébration des baptêmes et de la Sainte-Cène",
      "Coordination dynamique du rassemblement de la Jeunesse (JAD) le lundi et du rassemblement des Hommes le mardi",
      "Prière d'intercession, délivrance, accompagnement pastoral des foyers et visites des malades dans le quartier d'Adamavo 2",
      "Modernisation de l'édifice et mise en place des retransmissions pour édifier la diaspora togolaise"
    ],
    biographie: "Homme de prière et d'action, le Pasteur AMOUZOU est le berger titulaire de l'Église Évangélique des Assemblées de Dieu – Paroisse d'Adamavo 2 (Temple de la Résurrection). Il veille sur les âmes qui lui sont confiées avec amour, humilité et une fermeté doctrinale ancrée dans les Saintes Écritures. Sous sa conduite spirituelle, le Temple de la Résurrection connaît une communion vivante et une croissance continue de nouveaux convertis.",
    citationMarquante: "Au Temple de la Résurrection d'Adamavo 2, nous proclamons que Jésus-Christ est vivant hier, aujourd'hui et éternellement, capable de restaurer toute vie brisée.",
    estActuel: true
  }
];

export const TOGO_REPRESENTATIVES: TogoExecutiveMember[] = [
  {
    fonction: "Président National",
    nom: "Rév. Dr. Adadé Ayi Migbloessan",
    titre: "Président du Bureau Exécutif National (EEADT)",
    roleDescription: "Élu au Conseil Général électif extraordinaire d'Atakpamé en juillet 2024 et investi le 13 octobre 2024 à l'ESTAO de Lomé. Conduit la vision globale de sanctification, d'unité, d'évangélisation et de formation pastorale de l'Église au Togo."
  },
  {
    fonction: "Président d'Honneur",
    nom: "Rév. Djakouti Mitré",
    titre: "Ancien Président National (1987 – 2024)",
    roleDescription: "Figure historique ayant présidé l'Église des Assemblées de Dieu du Togo pendant 37 ans. Bâtisseur de l'ESTAO, des districts et du rayonnement national et sous-régional."
  },
  {
    fonction: "Pasteur Local en Vedette",
    nom: "Pasteur AMOUZOU",
    titre: "Pasteur Titulaire · Paroisse d'Adamavo 2",
    roleDescription: "Berger du Temple de la Résurrection à Adamavo 2 (Golfe 6). Prédicateur, conducteur de culte, encadrement de la JAD le lundi, des hommes le mardi et de la communion paroissiale."
  },
  {
    fonction: "Vice-Président National",
    nom: "Rév. Ankou Saram",
    titre: "Vice-Président du Bureau Exécutif National",
    roleDescription: "Assistance directe à la présidence nationale, coordination des départements exécutifs et inspection des cinq régions ecclésiastiques du Togo."
  },
  {
    fonction: "Secrétaire Général",
    nom: "Rév. Tchandao Madatina",
    titre: "Secrétaire Général du Bureau Exécutif",
    roleDescription: "Administration générale de l'EEADT, gestion des correspondances officielles, registres du clergé togolais et actes synodaux."
  },
  {
    fonction: "Secrétaire Général Adjoint",
    nom: "Rév. Yakpey Kokouvi Lucien",
    titre: "Secrétaire Général Adjoint",
    roleDescription: "Appui administratif au secrétariat, suivi des procès-verbaux des districts régionaux et archivage officiel."
  },
  {
    fonction: "Trésorier Général",
    nom: "Rév. Konvi Yawo",
    titre: "Trésorier Général du Bureau Exécutif",
    roleDescription: "Gestion financière, transparence budgétaire, ordonnancement des dépenses et financement des œuvres sociales au Togo."
  },
  {
    fonction: "Secrétaire Financier",
    nom: "Rév. Tiem Ludovic",
    titre: "Secrétaire Financier",
    roleDescription: "Comptabilité nationale, caisse d'entraide pastorale, suivi des contributions des paroisses et œuvres de bienfaisance."
  },
  {
    fonction: "Conseiller National",
    nom: "Rév. Laré Belarbi Yendoukoah",
    titre: "Conseiller du Bureau Exécutif",
    roleDescription: "Conseil pastoral, veille doctrinale, médiation fraternelle et accompagnement spirituel auprès du Bureau National."
  }
];

export const TOGO_TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    annee: 1936,
    titre: "Implantation Pionnière des Assemblées de Dieu au Togo",
    lieu: "Nord-Togo & Lomé",
    description: "Premières réunions de réveil pentecôtiste et vagues d'évangélisation au Togo avec des missionnaires et pasteurs pionniers. Les premières conversions sincères mènent à la formation des premières congrégations.",
    impact: "Naissance de la foi pentecôtiste au Togo et genèse de l'EEADT.",
    categorie: "Fondation"
  },
  {
    annee: 1965,
    titre: "Élection du 1er Président National Autochtone : Rév. Pasgo Bila Daniel",
    lieu: "Lomé, Togo",
    description: "Après l'ère missionnaire, le synode choisit le Rév. Pasteur Pasgo Bila Daniel pour prendre la tête de l'Église. C'est le début d'un mandat fondateur de 22 ans qui consacre l'autonomie indigène de l'Église.",
    impact: "Reconnaissance juridique nationale et structuration des premiers districts togolais.",
    categorie: "Mission"
  },
  {
    annee: 1987,
    titre: "Accession du Rév. Djakouti Mitré à la Présidence Nationale",
    lieu: "Lomé, Togo",
    description: "Début d'une présidence de 37 années placée sous le signe d'une formidable expansion territoriale, de l'édification de grands temples et de la fondation d'œuvres éducatives et sanitaires.",
    impact: "Multiplication des églises pour atteindre plus de 1 500 assemblées dans tout le Togo.",
    categorie: "Mission"
  },
  {
    annee: 1990,
    titre: "Fondation de l'ESTAO à Lomé",
    lieu: "Lomé (Quartier Tokoin/ESTAO), Togo",
    description: "Création de l'École Supérieure de Théologie de l'Afrique de l'Ouest (ESTAO), temple du savoir biblique formant les pasteurs, enseignants et missionnaires de tout l'espace francophone africain.",
    impact: "Le Togo devient le phare de la formation théologique pentecôtiste ouest-africaine.",
    categorie: "Doctrine"
  },
  {
    annee: 2018,
    titre: "Rayonnement du Temple de la Résurrection à Adamavo 2",
    lieu: "Adamavo 2, Grand Lomé, Togo",
    description: "Sous la conduite du Pasteur AMOUZOU, la paroisse d'Adamavo 2 (Temple de la Résurrection) se structure avec un engagement fort des départements des Hommes, de la Jeunesse (JAD) et des cultes fervents.",
    impact: "Évangélisation active du quartier d'Adamavo 2, baptêmes réguliers et délivrance des âmes.",
    categorie: "Mission"
  },
  {
    annee: 2024,
    titre: "Conseil Général Électif Extraordinaire d'Atakpamé (Juillet 2024)",
    lieu: "Atakpamé, Région des Plateaux, Togo",
    description: "Les délégués pastoraux des cinq régions du Togo élisent dans l'unité et la prière le Rév. Dr. Adadé Ayi Migbloessan comme nouveau Président National de l'EEADT, tandis que le Rév. Djakouti Mitré est honoré comme Président d'Honneur.",
    impact: "Passation pacifique et historique du témoin pastoral après 37 ans de ministère national.",
    categorie: "Présent"
  },
  {
    annee: 2024,
    titre: "Investiture Solennelle à l'ESTAO Lomé (13 Octobre 2024)",
    lieu: "Grand Temple de l'ESTAO, Lomé, Togo",
    description: "Investiture officielle du Rév. Dr. Adadé Ayi Migbloessan et de son équipe exécutive en présence d'une foule nombreuse, de serviteurs de Dieu venus de plusieurs pays et de délégations officielles togolaises.",
    impact: "Lancement du quinquennat pour une Église sainte, moderne, unie et missionnaire au Togo.",
    categorie: "Présent"
  }
];

export const THE_16_FUNDAMENTAL_TRUTHS: DoctrineArticle[] = [
  {
    numero: 1,
    titre: "L'Inspiration des Écritures",
    resume: "La Bible est la Parole inspirée et infaillible de Dieu, règle suprême et absolue de notre foi et de notre conduite.",
    referencesBibliques: ["2 Timothée 3:15-17", "1 Thessaloniciens 2:13", "2 Pierre 1:21"],
    texteComplet: "Les Écritures, tant l'Ancien que le Nouveau Testament, sont verbalement inspirées de Dieu et constituent la révélation de Dieu à l'homme, la règle infaillible et souveraine de la foi et de la conduite chrétienne."
  },
  {
    numero: 2,
    titre: "Le Seul Vrai Dieu",
    resume: "Un seul Dieu existant de toute éternité en trois personnes égales et coéternelles : le Père, le Fils et le Saint-Esprit.",
    referencesBibliques: ["Deutéronome 6:4", "Matthieu 28:19", "Luc 3:22"],
    texteComplet: "Le seul vrai Dieu s'est révélé comme l'Éternel 'JE SUIS' qui existe par Lui-même, Créateur des cieux et de la terre et Rédempteur de l'humanité. Il s'est en outre révélé comme incarnant les principes de relation et d'association en tant que Père, Fils et Saint-Esprit (Trinité)."
  },
  {
    numero: 3,
    titre: "La Divinité du Seigneur Jésus-Christ",
    resume: "Jésus-Christ est le Fils éternel de Dieu, né d'une vierge, mort pour nos péchés et ressuscité corporellement.",
    referencesBibliques: ["Matthieu 1:23", "Hébreux 7:26", "1 Corinthiens 15:3-4", "Actes 1:9"],
    texteComplet: "Le Seigneur Jésus-Christ est le Fils éternel de Dieu. Les Écritures déclarent Sa naissance virginale, Sa vie sans péché, Ses miracles authentiques, Sa mort expiatoire et substitutive à la croix, Sa résurrection corporelle d'entre les morts, et Son élévation à la droite du Père."
  },
  {
    numero: 4,
    titre: "La Chute de l'Homme",
    resume: "L'homme a été créé bon et droit, mais par sa transgression volontaire, il est tombé, entraînant la mort physique et spirituelle.",
    referencesBibliques: ["Genèse 1:26-27", "Romains 5:12-19"],
    texteComplet: "L'homme a été créé bon et droit ; car Dieu a dit : 'Faisons l'homme à notre image, selon notre ressemblance'. Cependant, par sa transgression volontaire, l'homme est tombé et a encouru non seulement la mort physique, mais aussi la mort spirituelle, qui est la séparation d'avec Dieu."
  },
  {
    numero: 5,
    titre: "Le Salut de l'Homme",
    resume: "Le salut s'obtient uniquement par la grâce, par le moyen de la foi dans le sang versé de Jésus-Christ.",
    referencesBibliques: ["Luc 24:47", "Jean 3:3", "Romains 10:13-15", "Éphésiens 2:8-9", "Tite 3:5-7"],
    texteComplet: "Le seul espoir de rédemption pour l'homme réside dans le sang versé de Jésus-Christ, le Fils de Dieu. Le salut est reçu par la repentance envers Dieu et la foi au Seigneur Jésus-Christ. Par le lavage de la régénération et le renouvellement du Saint-Esprit, étant justifié par la grâce par la foi, l'homme devient héritier de Dieu."
  },
  {
    numero: 6,
    titre: "Les Ordonnances de l'Église",
    resume: "Le baptême par immersion d'eau pour les croyants et la Sainte-Cène en mémoire de la mort et de la victoire du Seigneur.",
    referencesBibliques: ["Matthieu 28:19", "Marc 16:16", "1 Corinthiens 11:26", "2 Pierre 1:4"],
    texteComplet: "Le baptême par immersion est commandé dans les Écritures à tous ceux qui se sont repentis et ont cru en Christ de tout leur cœur. La Sainte-Cène (Repas du Seigneur), consistant en les éléments du pain et du fruit de la vigne, est le symbole commémorant Sa mort sacrificielle et annonçant Son retour."
  },
  {
    numero: 7,
    titre: "Le Baptême dans le Saint-Esprit",
    resume: "Une promesse pour chaque croyant, distincte et subséquente à la nouvelle naissance, conférant la puissance pour le témoignage.",
    referencesBibliques: ["Luc 24:49", "Actes 1:4, 8", "Actes 2:1-4", "1 Corinthiens 12:1-31"],
    texteComplet: "Tous les croyants ont droit et doivent ardemment s'attendre et chercher avec ferveur la promesse du Père, le baptême dans le Saint-Esprit et le feu, selon le commandement de notre Seigneur Jésus-Christ. Cette expérience est distincte et subséquente à la nouvelle naissance."
  },
  {
    numero: 8,
    titre: "Le Signe Physique Initial du Baptême de l'Esprit",
    resume: "Le baptême des croyants dans le Saint-Esprit est attesté par le signe physique initial du parler en d'autres langues.",
    referencesBibliques: ["Actes 2:4", "1 Corinthiens 12:4-10, 28"],
    texteComplet: "Le baptême des croyants dans le Saint-Esprit est attesté par le signe physique initial du parler en d'autres langues selon que l'Esprit donne de s'exprimer. Le parler en langues dans cette occurrence est de même essence que le don des langues, mais différent dans son usage et son dessein."
  },
  {
    numero: 9,
    titre: "La Sanctification",
    resume: "Un acte de séparation d'avec le mal et de consécration totale à Dieu, progressive et vécue par le secours du Saint-Esprit.",
    referencesBibliques: ["Hébreux 12:14", "1 Pierre 1:15-16", "1 Thessaloniciens 5:23", "Romains 12:1-2"],
    texteComplet: "La sanctification est un acte de séparation d'avec ce qui est mauvais et de consécration à Dieu. Les Écritures enseignent une vie de 'sainteté sans laquelle nul ne verra le Seigneur'. Par la puissance du Saint-Esprit, nous sommes capables d'obéir au commandement divin."
  },
  {
    numero: 10,
    titre: "L'Église et sa Mission",
    resume: "L'Église est le corps de Christ appelé à évangéliser le monde, adorer Dieu et édifier les saints à l'image du Fils.",
    referencesBibliques: ["Éphésiens 1:22-23", "Éphésiens 2:22", "Hébreux 12:23"],
    texteComplet: "L'Église est le Corps de Christ, l'habitation de Dieu par l'Esprit, avec des nominations divines pour l'accomplissement de sa grande commission. Chaque croyant né de l'Esprit est partie intégrante de l'Assemblée générale et de l'Église des premiers-nés inscrits dans les cieux."
  },
  {
    numero: 11,
    titre: "Le Ministère Divinement Appelé",
    resume: "Un ministère divinement institué et scripturairement pourvu pour conduire l'Église dans l'évangélisation et l'édification.",
    referencesBibliques: ["Marc 16:15-20", "Jean 4:23-24", "Éphésiens 4:11-16"],
    texteComplet: "Un ministère divinement appelé et scripturairement ordonné a été pourvu par notre Seigneur pour le quadruple dessein de conduire l'Église : évangélisation du monde, adoration de Dieu, édification d'un corps de saints et compassion fraternelle."
  },
  {
    numero: 12,
    titre: "La Guérison Divine",
    resume: "La guérison divine fait partie intégrante de l'Évangile ; la délivrance de la maladie est pourvue dans l'expiation à la croix.",
    referencesBibliques: ["Ésaïe 53:4-5", "Matthieu 8:16-17", "Jacques 5:14-16"],
    texteComplet: "La guérison divine fait partie intégrante de l'Évangile. La délivrance de la maladie est pourvue dans l'expiation, et constitue le privilège de tous les croyants selon la foi et la prière de l'Église."
  },
  {
    numero: 13,
    titre: "La Bienheureuse Espérance (L'Enlèvement)",
    resume: "La résurrection des morts en Christ et leur enlèvement avec les vivants pour rencontrer le Seigneur dans les airs.",
    referencesBibliques: ["1 Thessaloniciens 4:16-17", "Romains 8:23", "Tite 2:13", "1 Corinthiens 15:51-52"],
    texteComplet: "La résurrection de ceux qui sont endormis en Christ et leur translation avec ceux qui sont vivants et demeurent jusqu'à la venue du Seigneur est l'espérance imminente et bénie de l'Église."
  },
  {
    numero: 14,
    titre: "Le Règne Millénaire du Christ",
    resume: "La seconde venue visible de Christ avec Ses saints pour régner sur la terre pendant mille ans de paix et de justice.",
    referencesBibliques: ["Zacharie 14:5", "Matthieu 24:27, 30", "Apocalypse 1:7", "Apocalypse 19:11-14", "Apocalypse 20:1-6"],
    texteComplet: "La seconde venue de Christ comprend l'enlèvement des saints, qui est notre bienheureuse espérance, suivi du retour visible de Christ avec Ses saints pour régner sur la terre pendant mille ans."
  },
  {
    numero: 15,
    titre: "Le Jugement Dernier",
    resume: "Le jugement universel où les morts méchants ressusciteront et seront jugés selon leurs œuvres.",
    referencesBibliques: ["Matthieu 25:46", "Marc 9:43-48", "Apocalypse 19:20", "Apocalypse 20:11-15", "Apocalypse 21:8"],
    texteComplet: "Il y aura un jugement dernier dans lequel les morts impies seront ressuscités et jugés selon leurs œuvres. Quiconque n'est pas trouvé écrit dans le Livre de Vie sera jeté dans l'étang de feu."
  },
  {
    numero: 16,
    titre: "Les Nouveaux Cieux et la Nouvelle Terre",
    resume: "La promesse divine d'une création renouvelée où la justice habitera pour l'éternité avec Dieu au milieu de Son peuple.",
    referencesBibliques: ["2 Pierre 3:13", "Apocalypse 21", "Apocalypse 22"],
    texteComplet: "'Mais nous attendons, selon sa promesse, de nouveaux cieux et une nouvelle terre, où la justice habitera' (2 Pierre 3:13). Dieu habitera avec les hommes et essuiera toute larme de leurs yeux."
  }
];

// Historical alias for backwards-compatibility
export const HISTORICAL_FOUNDATION = {
  anneeFondation: 1936,
  dateExacte: "1936 – Implantation au Togo",
  lieuFondation: "Nord-Togo & Lomé (République Togolaise)",
  racinesSpirituelles: "Réveil pentecôtiste et Grande Commission sous la puissance de l'Esprit Saint",
  siegeNational: "Lomé, Togo",
  communauteNationale: "Église Évangélique des Assemblées de Dieu du Togo (EEADT)",
  paroisseSpecifique: "Paroisse d'Adamavo 2 – Temple de la Résurrection",
  pasteurTitulaire: "Pasteur AMOUZOU",
  nombreTemples: "Plus de 1 500 assemblées locales au Togo"
};

export const LEADERSHIP_CHRONOLOGY = TOGO_LEADERSHIP_CHRONOLOGY;
export const TIMELINE_MILESTONES = TOGO_TIMELINE_MILESTONES;
