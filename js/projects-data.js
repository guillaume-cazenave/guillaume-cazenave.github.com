const PROJECTS = [

  // ── MIS EN AVANT (featured: true = apparaît en premier) ────

  {
    id: "clip-realo-run",
    title: "Clip Concept — Run (Realo)",
    type: "personnel",
    category: "video",
    featured: true,
    thumbnail: "img/proj/realo-thumb.jpg",
    images: ["img/proj/realo-thumb.jpg"],
    description: "Clip concept full 3D sur le morceau 'Run' de Realo. Réalisé sur Unreal Engine avec motion capture faciale et corporelle. Direction artistique, animation et rendu temps réel.",
    tags: ["Unreal Engine", "Motion capture", "Blender", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: "https://www.instagram.com/p/DFYXqBuRn9I/"
  },
  {
    id: "clip-fakemink-fidelio",
    title: "Clip Concept — Fidelio (Fakemink)",
    type: "personnel",
    category: "video",
    featured: true,
    thumbnail: "img/proj/fakemink-thumb.jpg",
    images: ["img/proj/fakemink-thumb.jpg"],
    description: "Clip concept vidéo sur le morceau 'Fidelio' de Fakemink. Effets visuels réalisés sous After Effects — transitions, compositing et color grading.",
    tags: ["After Effects", "Premiere Pro"],
    year: "2026",
    link: "https://www.instagram.com/p/DTQkn8_ACMr/"
  },
  {
    id: "addiktok",
    title: "Addik'Tok — Addictions France",
    type: "client",
    category: "video",
    featured: true,
    thumbnail: "img/proj/addiktok-thumb.jpg",
    images: [],
    description: "Monteur et réalisateur vidéo en alternance pendant un an chez Addictions France. Écriture, réalisation et montage de plus de 50 contenus courts de prévention pour le dispositif Addik'Tok.\n\nProblématique centrale : produire du contenu audiovisuel de prévention crédible pour les jeunes sur les réseaux sociaux.",
    tags: ["Premiere Pro", "After Effects", "Motion design", "Réalisation"],
    year: "2026",
    link: "",
    addiktok: true
  },
  {
    id: "documentaire-victoria",
    title: "Victoria Ultraaa",
    type: "ecole",
    category: "video",
    featured: true,
    thumbnail: "img/proj/victoria-thumb.jpg",
    images: ["img/proj/victoria-thumb.jpg"],
    description: "Documentaire court-métrage sur Victoria Ultraaa, drag queen. Réalisation, tournage et montage complet.\n\nProjet de cours BUT MMI — direction artistique, interviews et captation terrain.",
    tags: ["Premiere Pro", "After Effects", "Tournage"],
    year: "2026",
    link: "https://www.youtube.com/embed/_k2_lCX5yG0"
  },
  {
    id: "illu-3d",
    title: "Illustrations 3D",
    type: "personnel",
    category: "3d",
    featured: true,
    thumbnail: "img/proj/illu3d-thumb.jpg",
    images: [
      "img/proj/illu3d-thumb.jpg",
      "img/proj/illu3d-2.jpg",
      "img/proj/illu3d-3.jpg",
      "img/proj/illu3d-4.jpg"
    ],
    description: "Série d'une dizaine d'illustrations 3D réalisées sous Blender. Explorations créatives libres — scènes minimalistes, rendus stylisés et compositions abstraites.",
    tags: ["Blender", "Cycles", "Photoshop", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  },

  // ── ÉCOLE ──────────────────────────────────────────────────

  {
    id: "tuto-slider-interview",
    title: "Tuto Slider & Interview",
    type: "ecole",
    category: "video",
    featured: false,
    thumbnail: "img/proj/tuto-thumb.jpg",
    images: ["img/proj/tuto-thumb.jpg"],
    description: "Projet tutoré — réalisation de deux tutoriels vidéo : un tuto slider et un tuto interview. Écriture, tournage, montage et motion design.",
    tags: ["Premiere Pro", "After Effects"],
    year: "2026",
    link: "https://www.youtube.com/embed/vSxGU-zlZMw"
  },
  {
    id: "photo-roche",
    title: "Direction Artistique — La Roche",
    type: "ecole",
    category: "photo",
    featured: false,
    thumbnail: "img/proj/roche-thumb.jpg",
    images: ["img/proj/roche-thumb.jpg"],
    description: "Projet photo avec direction artistique complète, univers dédié à la roche. Conception du concept, shooting et post-production.",
    tags: ["Photoshop", "Lightroom", "Direction artistique"],
    year: "2026",
    link: ""
  },
  {
    id: "mapping-vosges",
    title: "Mapping Vidéo — Haute Confiserie",
    type: "ecole",
    category: "video",
    featured: false,
    thumbnail: "img/proj/mapping-thumb.jpg",
    images: ["img/proj/mapping-thumb.jpg"],
    description: "Motion design pour mapping vidéo réalisé pour la Haute Confiserie des Vosges. Création des animations et intégration pour la projection architecturale.",
    tags: ["After Effects", "Premiere Pro"],
    year: "2026",
    link: ""
  },
  {
    id: "jeu-video-gdevelop",
    title: "Jeu Vidéo 3D",
    type: "ecole",
    category: "3d",
    featured: false,
    thumbnail: "img/proj/jeu-thumb.jpg",
    images: ["img/proj/jeu-thumb.jpg"],
    description: "Conception et développement d'un jeu vidéo 3D sous GDevelop. Modélisation des assets, level design et intégration gameplay.",
    tags: ["GDevelop", "Blender", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  },
  {
    id: "creation-sonore",
    title: "Création Sonore",
    type: "ecole",
    category: "design",
    featured: false,
    thumbnail: "img/proj/son-thumb.jpg",
    images: ["img/proj/son-thumb.jpg"],
    description: "Création d'une histoire fictive racontée uniquement par le son — ambiances, voix, sound design. Exploration narrative sans image.",
    tags: ["Audition", "Sound design"],
    year: "2026",
    link: ""
  },
  {
    id: "magicien-oz",
    title: "Parc — Magicien d'Oz",
    type: "ecole",
    category: "design",
    featured: false,
    thumbnail: "img/proj/oz-thumb.jpg",
    images: ["img/proj/oz-thumb.jpg"],
    description: "Direction artistique pour un parc d'attraction sur le thème du Magicien d'Oz. Création d'affiches et de vidéos promotionnelles dans l'univers de la franchise.",
    tags: ["Illustrator", "Photoshop", "After Effects", "Premiere Pro"],
    year: "2026",
    link: ""
  },
  {
    id: "perso-3d-lowpoly",
    title: "Personnage 3D Low Poly",
    type: "ecole",
    category: "3d",
    featured: false,
    thumbnail: "img/proj/lowpoly-thumb.jpg",
    images: ["img/proj/lowpoly-thumb.jpg"],
    description: "Réalisation d'un personnage 3D en low poly sous Blender avec animation en motion capture. Rigging, skinning et intégration des données mocap.",
    tags: ["Blender", "Motion capture", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  },
  {
    id: "court-metrage-clef",
    title: "Court Métrage — La Clef",
    type: "ecole",
    category: "video",
    featured: true,
    thumbnail: "img/proj/clef-thumb.jpg",
    images: ["img/proj/clef-thumb.jpg"],
    description: "Fiction courte avec effets spéciaux 3D intégrés en post-production. Réalisation, direction d'acteurs, tournage et VFX sous Blender et After Effects.",
    tags: ["Premiere Pro", "After Effects", "Blender", "VFX"],
    year: "2026",
    link: "https://www.youtube.com/embed/exCiXB6j2Rs"
  },
  {
    id: "court-metrage-transaction",
    title: "Court Métrage — La Transaction",
    type: "ecole",
    category: "video",
    featured: true,
    thumbnail: "img/proj/transaction-thumb.jpg",
    images: ["img/proj/transaction-thumb.jpg"],
    description: "Court métrage de fiction réalisé dans le cadre du BUT MMI. Écriture du scénario, réalisation, direction d'acteurs et montage.",
    tags: ["Premiere Pro", "After Effects"],
    year: "2026",
    link: "https://www.youtube.com/embed/-pdodey_W7A"
  },

  // ── PERSONNEL ──────────────────────────────────────────────

  {
    id: "paysages-vacances",
    title: "Paysages — Color Grading",
    type: "personnel",
    category: "photo",
    featured: false,
    thumbnail: "img/proj/paysage-thumb.jpg",
    images: ["img/proj/paysage-thumb.jpg"],
    description: "Plans et photos de paysages captés en vacances. Travail de color grading cinématographique et retouche photographique.",
    tags: ["Premiere Pro", "Photoshop", "Lightroom"],
    year: "2026",
    link: ""
  },
  {
    id: "azap",
    title: "AZAP — Marque de Vêtements",
    type: "personnel",
    category: "design",
    featured: false,
    thumbnail: "img/proj/azap-thumb.jpg",
    images: ["img/proj/azap-thumb.jpg"],
    description: "Création et gestion complète d'une marque de vêtements : identité visuelle, création des visuels, impression sérigraphie à la main, préparation et gestion des commandes, envoi et communication.",
    tags: ["Illustrator", "Photoshop", "Sérigraphie", "Branding"],
    year: "2026",
    link: ""
  },

  // ── CLIENT ─────────────────────────────────────────────────

  {
    id: "expensive-base",
    title: "Expensive Base — Breakdance Bruxelles",
    type: "client",
    category: "3d",
    featured: false,
    thumbnail: "img/proj/expensivebase-thumb.jpg",
    images: ["img/proj/expensivebase-thumb.jpg"],
    description: "Commande d'un visuel 3D pour l'annonce d'un événement de breakdance à Bruxelles. Réalisé sur Blender et Premiere Pro.",
    tags: ["Blender", "Premiere Pro", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  },
  {
    id: "visualiseur-rappeur",
    title: "Visualiseur 3D — Rappeur",
    type: "client",
    category: "3d",
    featured: false,
    thumbnail: "img/proj/visualiseur-thumb.jpg",
    images: ["img/proj/visualiseur-thumb.jpg"],
    description: "Commande d'un visualiseur 3D pour un client rappeur, dirigé par Femz. Réalisé entièrement sur Blender, Premiere Pro et After Effects.",
    tags: ["Blender", "Premiere Pro", "After Effects", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  },
  {
    id: "ozon",
    title: "Ozon — Visuels 3D",
    type: "client",
    category: "3d",
    featured: false,
    thumbnail: "img/proj/ozon-thumb.jpg",
    images: ["img/proj/ozon-thumb.jpg"],
    description: "Réalisation de plusieurs visuels 3D pour la marque de vêtements Ozon — nouveaux pantalons et vestes de survêtement. Modélisation, habillage et rendu des pièces sous Blender.",
    tags: ["Blender", "Cycles", "Photoshop", "Marvelous Designer", "Substance Painter"],
    year: "2026",
    link: ""
  }
];
