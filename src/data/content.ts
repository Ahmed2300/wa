import { Project, ServiceItem, StudioStep, MaterialSpecimen, SocialTile, Testimonial } from '@/types';

// Pure, High-Resolution Architectural Photography Assets (Verified JPEGs, No Logo Overlays)
export const BRAND_ASSETS = {
  // Official Wordmark Vector
  wordmark: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_khzKFZGLlG_y9IU85606kI4T4QT2MVO-WBI5GpXvkdpikqIBzx9ilep2b-9Ze85jtT38yZ5OweWWivxqAlhR1nrs4gL8uRs_Dtaqal1KF2zmax-8rmlL5rwUp5s3iUv2XKY-tE6htpxgi8OzAQFXCCKqmESf0RIK9v9wqJWBEW2Kq7rYDkdVuVvGs5er_wLtgTYamRgE5K1n6c9Cfrenkkn243N5Uo7Z-rWl8ZjawlAVZhoC_9YNJ0OqNii6Zl24vQ",
  // Full-bleed Parisian luxury apartment interior (soft morning daylight, chevron parquet, linen sofa)
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
  // Sunlit Parisian atelier interior with high ceilings and drawing boards
  studioImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
  // Authentic Parisian architecture atelier in 6th arrondissement (drawing table, stone & fabric samples)
  contactImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuACOtuyVNWoOkx-Gxa5DY3t7UOrtBfDyPsDuVUk0gTN-_mO2DygkJ2sEpEWAI1CwdTmD5-ybKOzMSmk3yB7srLWyMOOVERB_p0f1PUkxLmsFCOLXAgBiPKnAduW0ahI8MNlQmoMP0n6Rt7G-a4to9Xhxoc8mfMgBEjvufCVVS2fUFZB62EGz2WIKW4tJo7r247taDXiQFF8p_U0x5GghaHyV9DLHyAD0S87V2v4xd57Q_-n17269_1E",
};

export const CONTENT = {
  fr: {
    nav: {
      projects: 'Réalisations',
      studio: 'À propos',
      services: 'Expertises',
      materials: 'Matériaux',
      journal: 'Journal',
      contact: 'Contact',
      bookConsultation: 'Prendre rendez-vous',
      location: 'Paris & Île-de-France',
    },
    hero: {
      eyebrow: "RÉNOVATION HAUT DE GAMME · PARIS & ÎLE-DE-FRANCE",
      title: "Rénovez votre appartement avec élégance et précision.",
      subtitle: "Wa.Design transforme vos espaces de vie en lieux d’exception. Spécialistes de la rénovation d’appartements luxueux à Paris et en Île-de-France, nous travaillons main dans la main avec les meilleurs architectes d’intérieur pour créer des intérieurs raffinés, fonctionnels et intemporels.",
      cta: "Découvrir nos réalisations",
      ctaSecondary: "Prendre rendez-vous",
      territory: "Paris & Île-de-France — Spécialistes de la rénovation haut de gamme",
      recentProjects: "Réalisations récentes :",
      scrollDown: "Découvrir notre démarche",
      promiseTitle: "Notre promesse",
      promise: "Chaque projet est unique. Nous ne rénovons pas seulement des appartements : nous créons des cadres de vie qui reflètent votre personnalité, votre rythme et vos aspirations. Du premier croquis à la remise des clés, nous orchestrons chaque détail avec exigence et transparence.",
      whyUsTitle: "Pourquoi Wa.Design ?",
      whyUs: [
        "Expertise exclusive en rénovation haut de gamme",
        "Collaboration étroite avec des architectes d’intérieur reconnus",
        "Suivi de chantier rigoureux et communication transparente",
        "Sélection rigoureuse de matériaux nobles et durables",
        "Respect des délais et du budget convenus"
      ]
    },
    strip: {
      promiseEyebrow: "NOTRE ENGAGEMENT EXCLUSIF",
      promiseText: "Chaque projet est unique. Nous ne rénovons pas seulement des appartements : nous créons des cadres de vie qui reflètent votre personnalité, votre rythme et vos aspirations.",
      whyPoints: [
        "Expertise exclusive en rénovation haut de gamme",
        "Collaboration avec architectes d’intérieur reconnus",
        "Suivi de chantier rigoureux & communication transparente",
        "Sélection rigoureuse de matériaux nobles et durables",
        "Respect des délais et du budget convenus"
      ]
    },
    projects: {
      eyebrow: "SÉLECTION ARCHITECTURALE",
      title: "Nos réalisations",
      subtitle: "Découvrez une sélection de projets que nous avons menés à bien. Chaque appartement raconte une histoire différente, mais tous partagent la même exigence de qualité et d’élégance.",
      filterAll: "Toutes les réalisations",
      filterHaussmann: "Haussmannien",
      filterDuplex: "Contemporain",
      filterHotelParticulier: "Familial & Particulier",
      viewProject: "Consulter la fiche projet",
      items: [
        {
          id: 'neuilly-haussmann',
          title: "Appartement Haussmannien, Neuilly-sur-Seine",
          location: "Neuilly-sur-Seine — Bords de Seine",
          year: "2024",
          area: "145 m²",
          duration: "7 mois",
          category: "Haussmannien",
          description: "Transformation d’un appartement classique en un intérieur contemporain lumineux. Ouverture des volumes, création d’une cuisine ouverte haut de gamme, salle de bain parentale avec douche à l’italienne et baignoire îlot, dressing sur-mesure.",
          materials: ["Parquet chêne massif", "Marbre Calacatta", "Laques mates", "Ferronnerie noire"],
          imageUrl: BRAND_ASSETS.heroImage,
          featured: true,
        },
        {
          id: 'chaptal-paris9',
          title: "Appartement contemporain, rue Chaptal",
          location: "Paris 9e — Rue Chaptal",
          year: "2024",
          area: "98 m²",
          duration: "5 mois",
          category: "Contemporain",
          description: "Optimisation totale de l’espace. Création d’une suite parentale, cuisine semi-ouverte avec îlot central, et un séjour baigné de lumière. Ambiance : tons neutres, textures douces, éclairage architectural soigné.",
          materials: ["Tons neutres", "Textures douces", "Îlot central", "Éclairage architectural"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5",
        },
        {
          id: 'pergolese-paris16',
          title: "Appartement familial, Pergolèse",
          location: "Paris 16e — Pergolèse",
          year: "2023",
          area: "180 m²",
          duration: "9 mois",
          category: "Familial",
          description: "Un projet pensé pour une famille. Espaces de vie généreux, 4 chambres, 3 salles de bain, bureau fermé et grande cuisine conviviale. Travail important sur l’isolation acoustique et thermique, tout en conservant le cachet d’origine.",
          materials: ["Isolation acoustique de pointe", "Parquet d’origine restauré", "4 chambres & 3 SDB", "Menuiseries sur-mesure"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
        },
        {
          id: 'marais-turenne',
          title: "Hôtel Particulier Marais, Rue de Turenne",
          location: "Paris 3e — Rue de Turenne",
          year: "2023",
          area: "210 m²",
          duration: "8 mois",
          category: "Hôtel Particulier",
          description: "Rénovation lourde d'un ensemble historique. Dialogue entre la pierre de taille du XVIIe siècle mise à nu, boiseries en chêne de fil sur-mesure et calepinage de travertin brut adouci.",
          materials: ["Pierre de taille calcaire", "Marbre Calacatta", "Travertin romain", "Laiton bruni"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
        }
      ] as Project[],
      testimonialsTitle: "Retours clients",
      testimonials: [
        {
          quote: "Wa.Design a transformé notre appartement au-delà de nos attentes. Professionnalisme, écoute et un sens du détail remarquable.",
          author: "Famille L.",
          location: "Neuilly-sur-Seine"
        },
        {
          quote: "Un chantier parfaitement maîtrisé. Nous avons eu un seul interlocuteur du début à la fin. Très recommandable.",
          author: "M. et Mme R.",
          location: "Paris 9e"
        }
      ] as Testimonial[]
    },
    studio: {
      eyebrow: "À PROPOS DE WA.DESIGN",
      title: "Qui sommes-nous ?",
      subtitle: "Wa.Design est née d’une conviction simple : un intérieur d’exception ne se limite pas à l’esthétique. Il doit être pensé pour être habité, aimé et transmis.",
      quote: "Nous croyons que chaque rénovation doit raconter une histoire — la vôtre. Un intérieur d’exception allie raffinement, confort et intelligence d’usage.",
      manifesto: "Nous sommes une équipe passionnée de rénovation d’appartements de luxe, basée en Île-de-France. Nous intervenons principalement à Paris, Neuilly-sur-Seine, et dans les quartiers les plus recherchés de la région parisienne.",
      visionTitle: "Notre vision",
      vision: "Créer des espaces qui allient raffinement, confort et intelligence d’usage. Nous croyons que chaque rénovation doit raconter une histoire — la vôtre.",
      approachTitle: "Notre approche",
      approach: "Nous travaillons en étroite collaboration avec des architectes d’intérieur sélectionnés pour leur sensibilité et leur exigence. Cette synergie nous permet d’offrir une prestation globale : conception, coordination des travaux, suivi de chantier et livraison clé en main.",
      stepsEyebrow: "PROCESSUS DE RÉALISATION",
      stepsTitle: "Notre méthode en 5 étapes",
      steps: [
        {
          step: "01",
          title: "Premier rendez-vous & étude de faisabilité",
          description: "Échange sur vos envies, votre budget et vos contraintes. Visite du bien et premiers conseils d'aménagement."
        },
        {
          step: "02",
          title: "Conception & chiffrage",
          description: "En collaboration avec l’architecte d’intérieur (si besoin), nous élaborons le projet, les plans détaillés et un devis transparent."
        },
        {
          step: "03",
          title: "Validation & planning",
          description: "Validation formelle des plans, des matériaux et verrouillage du planning d'intervention des travaux."
        },
        {
          step: "04",
          title: "Travaux & suivi",
          description: "Coordination complète des artisans, suivi quotidien, reporting photographique et points d’étape réguliers."
        },
        {
          step: "05",
          title: "Réception & livraison",
          description: "Visite de réception méticuleuse, levée immédiate des réserves, remise des clés et dossier technique complet."
        }
      ] as StudioStep[],
      pillars: [
        { title: "Excellence dans les détails", desc: "Une exigence sans compromis sur chaque ligne, joint, matière et raccord." },
        { title: "Transparence totale", desc: "Chiffrage poste par poste, reporting photographique continu et communication fluide." },
        { title: "Respect des délais", desc: "Un calendrier d'exécution strict et un engagement ferme sur les dates convenues." },
        { title: "Passion pour le beau et le bien fait", desc: "L'amour des matières nobles, durables et du geste artisanal d'exception." }
      ]
    },
    services: {
      eyebrow: "NOS EXPERTISES",
      title: "Nos expertises",
      subtitle: "Un accompagnement sur-mesure, de la conception initiale à la remise des clés.",
      items: [
        {
          number: "01",
          title: "Rénovation complète d’appartements",
          subtitle: "Prise en charge intégrale & gros œuvre",
          description: "Nous prenons en charge l’intégralité de votre projet : démolition, gros œuvre, second œuvre, finitions. Chaque intervention est pensée pour maximiser la lumière, optimiser les volumes et sublimer les matériaux.",
          deliverables: ["Curage & démolition", "Gros œuvre & renforts", "Second œuvre technique", "Finitions de haute volée"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0"
        },
        {
          number: "02",
          title: "Rénovation partielle & rafraîchissement haut de gamme",
          subtitle: "Interventions ciblées sur pièces maîtresses",
          description: "Cuisine, salle de bain, dressing, séjour… Nous intervenons sur des zones précises avec le même niveau d’exigence que pour une rénovation totale.",
          deliverables: ["Cuisines d’architecte", "Suites & salles de bain", "Dressings sur-mesure", "Salons de réception"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          number: "03",
          title: "Accompagnement avec architecte d’intérieur",
          subtitle: "Synergie fluide ou mise en relation",
          description: "Vous avez déjà un architecte ? Nous travaillons en parfaite synergie avec lui. Vous n’en avez pas encore ? Nous vous mettons en relation avec des professionnels de confiance.",
          deliverables: ["Synergie technique", "Chiffrage poste par poste", "Plans d’exécution 1:20", "Conseil éclairé"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg"
        },
        {
          number: "04",
          title: "Conseil & sélection de matériaux",
          subtitle: "Sourcing noble, pérenne et tactile",
          description: "Nous vous guidons dans le choix des matériaux nobles : marbres, bois précieux, laques, métaux, textiles techniques… Chaque matière est sélectionnée pour sa qualité, sa durabilité et son esthétique.",
          deliverables: ["Marbres & pierres pures", "Bois précieux & parquets", "Laques mates & enduits", "Quincaillerie d'art"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          number: "05",
          title: "Suivi de chantier & coordination",
          subtitle: "Interlocuteur unique & transparence totale",
          description: "Un seul interlocuteur dédié. Reporting régulier, photos d’avancement, respect strict du planning et du budget convenus.",
          deliverables: ["Interlocuteur dédié unique", "Reporting photo hebdomadaire", "Respect du calendrier fixé", "Zéro surcoût imprévu"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv3Koqq4SsNWcYZRdYaVq8V700-QMA71z0N72s2XGt4oPdnqXgmuS6yqXW5m930D3D2yjz5KYA3bm0L0T-pcciXmYhbHBGolDc6ZrEfiNq_POf19KE5zhnzVHFKjSu-k6O3-Ps1RjPLmcVblLk7nDl8CdtyLAjUva5F2geFBpIrz8v-VxC85GblgMrqt4pedt0fdlyqyIg-9rjRLtcT7hs62wwLCDRRWXDxD68p-ADqc-Wk5ir3ff"
        }
      ] as (ServiceItem & { imageUrl: string })[]
    },
    materials: {
      eyebrow: "MATÉRIAUX & RESSOURCES",
      title: "Nos matériaux de prédilection",
      subtitle: "Nous sélectionnons uniquement des matériaux nobles, durables et esthétiques. Nous travaillons exclusivement avec des fournisseurs reconnus pour leur sérieux et la qualité de leurs produits.",
      items: [
        {
          name: "Parquets en chêne massif & contrecollé",
          origin: "Forêts éco-gérées françaises",
          finish: "Point de Hongrie, chevrons, lames larges, brossé mat",
          useCase: "Salons d'apparat, suites, circulations intérieures",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt"
        },
        {
          name: "Marbres & pierres naturelles (Calacatta, Carrare, Travertin)",
          origin: "Carrières de Carrare & Tivoli",
          finish: "Adouci satiné, non rebouché, arêtes franches",
          useCase: "Plans vasques monolithes, îlots de cuisine, crédences",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          name: "Menuiseries & agencements sur-mesure",
          origin: "Ateliers d’ébénisterie d'art parisiens",
          finish: "Laques mates, placages de bois précieux, ferronnerie noire",
          useCase: "Cuisines d’architecte, dressings intégrés, bibliothèques",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          name: "Sanitaires & robinetteries design (Vola, Fantini, Agape)",
          origin: "Manufactures européennes d’exception",
          finish: "Laiton brossé, noir mat, acier chirurgical",
          useCase: "Douches à l'italienne, baignoires îlots, robinetterie encastrée",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHevmbIglI2LAWD7H_0pEjTtEPpLvemTN4033pHXve35It76uA24jqmOaqXRAmWWa97d2zFZYbzVVP6QC4Sfrm4oSGuCyqdH14dAm-tNUfW9Zyderhql5KV2LC28rzJtkdWgAZVKFYbwq2n4fXABlP_biFoJdZB-r7x4qZuWSskIuRpmI0HN7hcg3FMWS5l2wRWDa-TiQVQ8TKk8VvaY-qVnqcFZuGNwZETTeqDr0HkpBKUbuKX0Qu"
        }
      ] as MaterialSpecimen[]
    },
    socialGrid: {
      eyebrow: "JOURNAL VISUEL & INSTAGRAM",
      title: "La Grammaire du Silence.",
      subtitle: "Suivez notre processus architectural au quotidien sur",
      handle: "@wa.design.france",
      instagramUrl: "https://www.instagram.com/wa.design.france/",
      exploreMore: "Consulter notre Instagram",
      tiles: [
        {
          id: 1,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
          caption: "Sculpture du vide : escalier hélicoïdal sur-mesure en chêne de France blanchi.",
          tag: "#EscalierSurMesure",
          location: "Faubourg Saint-Germain"
        },
        {
          id: 2,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg",
          caption: "Élaboration des plans d'exécution et sélection tactile des échantillons à l'atelier.",
          tag: "#AtelierConception",
          location: "Paris VIe"
        },
        {
          id: 3,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
          caption: "Dialogue minéral : la pierre de taille du XVIIe siècle mise à nu avec boiseries chêne.",
          tag: "#Marais #Heritage",
          location: "Rue de Turenne"
        },
        {
          id: 4,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
          caption: "Calepinage de travertin brut et perspectives fuyantes dans l'espace bain.",
          tag: "#Travertin #Matières",
          location: "Neuilly-sur-Seine"
        },
        {
          id: 5,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
          caption: "Sérénité d'un salon parisien : lin texturé, cheminée restaurée et parquet point de Hongrie.",
          tag: "#QuietLuxury",
          location: "Paris VIIIe"
        },
        {
          id: 6,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-xesGI6YBFSabEqVdWVgopLlKaceHBuzx8zvGz0-74GQJItq1B_u3KW7wZ_RHIImLnqfxQdhDgiWnDLnq4sZB4HgyF6eWYdc_3qGYt6lEiwheUcYp9xGg3SaqAqUle_Srnb-shd1Krq8PHEfx6WtPHqh-mk2HukaHsvpdHOqIS9ZZLyD2s0H9mDTJTUAy2fRVLjbmW4dySKwi7W8YalvDrV4cLJrFASkNfEVQU1JMC9OoRXBQMC-c",
          caption: "Détail de ferronnerie d'art : poignée de porte en bronze massif patiné au feu.",
          tag: "#BronzePatine",
          location: "Quartier Latin"
        },
        {
          id: 7,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0",
          caption: "Fenêtres cintrées à l'ancienne et lumière traversante : réhabilitation complète.",
          tag: "#ArchitectureParis",
          location: "Parc Monceau"
        },
        {
          id: 8,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
          caption: "L'atelier de création : sélection rigoureuse d'échantillons et modélisations.",
          tag: "#WaDesignStudio",
          location: "Rue de Tournon"
        },
        {
          id: 9,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5",
          caption: "Ébénisterie sur-mesure : assemblage invisible en noyer et alignements parfaits.",
          tag: "#HauteMenuiserie",
          location: "Paris XVIe"
        }
      ] as SocialTile[]
    },
    contact: {
      eyebrow: "CONTACTEZ WA.DESIGN",
      title: "Parlons de votre projet",
      subtitle: "Vous souhaitez rénover votre appartement ? Contactez-nous pour un premier échange sans engagement.",
      email: "contact@wadesignfrance.com",
      zone: "Paris et Île-de-France (Neuilly, Levallois, Boulogne, 8e, 9e, 16e, 17e prioritaires)",
      responseNotice: "Nous vous répondons sous 24 à 48 heures ouvrées.",
      form: {
        nameLabel: "Nom complet",
        namePlaceholder: "ex. Marc de Lavallière",
        emailLabel: "Adresse email",
        emailPlaceholder: "ex. marc.lavalliere@domaine.com",
        phoneLabel: "Numéro de téléphone",
        phonePlaceholder: "ex. +33 6 12 34 56 78",
        cityLabel: "Ville / Arrondissement",
        cityPlaceholder: "ex. Neuilly-sur-Seine ou Paris 8e",
        areaLabel: "Surface approximative",
        projectTypeLabel: "Type de projet",
        projectTypes: [
          "Rénovation complète d’appartement",
          "Rénovation partielle & rafraîchissement haut de gamme",
          "Accompagnement avec architecte d’intérieur",
          "Conseil & sélection de matériaux"
        ],
        messageLabel: "Détails de votre projet",
        messagePlaceholder: "Décrivez l'état actuel de votre bien, vos attentes esthétiques, et la date envisagée...",
        submit: "Envoyer ma demande de projet",
        submitting: "Transmission en cours...",
        success: "Votre message a été transmis avec succès. Un de nos responsables vous contactera sous 24 à 48h ouvrées.",
      }
    },
    footer: {
      baseline: "Spécialistes de la rénovation d’appartements luxueux à Paris et en Île-de-France. Collaboration étroite avec les meilleurs architectes d’intérieur.",
      address: "Hôtel de Brancas — 14 Rue de Tournon, 75006 Paris",
      navigation: "Plan du site",
      legal: "Mentions légales",
      confidentiality: "Politique de confidentialité",
      copyright: "© 2024 WA Design France. Tous droits réservés.",
      backToTop: "Haut de page",
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      studio: 'About Us',
      services: 'Expertise',
      materials: 'Materials',
      journal: 'Journal',
      contact: 'Contact',
      bookConsultation: 'Book a Meeting',
      location: 'Paris & Greater Paris',
    },
    hero: {
      eyebrow: "HIGH-END APARTMENT RENOVATION · PARIS & ÎLE-DE-FRANCE",
      title: "Renovate your apartment with elegance and precision.",
      subtitle: "Wa.Design transforms your living spaces into exceptional residences. Specialists in luxury apartment renovation across Paris and Île-de-France, we work hand in hand with leading interior architects to craft refined, functional, and timeless homes.",
      cta: "Discover our projects",
      ctaSecondary: "Book an appointment",
      territory: "Paris & Île-de-France — Specialists in luxury residential renovation",
      recentProjects: "Recent completions:",
      scrollDown: "Explore our approach",
      promiseTitle: "Our Promise",
      promise: "Every project is unique. We do not merely renovate apartments: we craft living environments that reflect your personality, your rhythm, and your aspirations. From the first sketch to key handover, we orchestrate every detail with rigor and complete transparency.",
      whyUsTitle: "Why Wa.Design?",
      whyUs: [
        "Exclusive expertise in high-end residential renovation",
        "Close collaboration with renowned interior architects",
        "Rigorous site oversight and fully transparent communication",
        "Meticulous curation of noble, enduring materials",
        "Strict adherence to agreed schedules and budgets"
      ]
    },
    strip: {
      promiseEyebrow: "OUR EXCLUSIVE COMMITMENT",
      promiseText: "Every project is unique. We do not merely renovate apartments: we craft living environments that reflect your personality, your rhythm, and your aspirations.",
      whyPoints: [
        "Exclusive expertise in high-end renovation",
        "Collaboration with renowned interior architects",
        "Rigorous site oversight & transparent communication",
        "Meticulous curation of noble, enduring materials",
        "Strict adherence to agreed schedules & budgets"
      ]
    },
    projects: {
      eyebrow: "ARCHITECTURAL PORTFOLIO",
      title: "Our Projects",
      subtitle: "Explore a curated selection of residential transformations. Every apartment tells a unique story, yet all share the same standard of elegance and uncompromising craftsmanship.",
      filterAll: "All Projects",
      filterHaussmann: "Haussmannian",
      filterDuplex: "Contemporary",
      filterHotelParticulier: "Family & Mansions",
      viewProject: "View project dossier",
      items: [
        {
          id: 'neuilly-haussmann',
          title: "Haussmannian Residence, Neuilly-sur-Seine",
          location: "Neuilly-sur-Seine — Riverbanks of the Seine",
          year: "2024",
          area: "145 m²",
          duration: "7 months",
          category: "Haussmannian",
          description: "Transformation of a classical apartment into a light-filled contemporary sanctuary. Volume decluttering, high-end open chef's kitchen, master ensuite with walk-in Italian shower and freestanding bathtub, bespoke dressing room.",
          materials: ["Solid French Oak Parquet", "Calacatta Marble", "Matte Lacquers", "Black Architectural Metalwork"],
          imageUrl: BRAND_ASSETS.heroImage,
          featured: true,
        },
        {
          id: 'chaptal-paris9',
          title: "Contemporary Apartment, Rue Chaptal",
          location: "Paris 9th — Rue Chaptal",
          year: "2024",
          area: "98 m²",
          duration: "5 months",
          category: "Contemporary",
          description: "Total spatial optimization. Creation of an elegant master suite, semi-open kitchen with central island, and a sun-drenched living room. Atmosphere: neutral tones, soft textures, tailored architectural lighting.",
          materials: ["Neutral Tones", "Soft Textures", "Central Island", "Architectural Lighting"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5",
        },
        {
          id: 'pergolese-paris16',
          title: "Family Apartment, Pergolèse",
          location: "Paris 16th — Pergolèse",
          year: "2023",
          area: "180 m²",
          duration: "9 months",
          category: "Family",
          description: "A tailored home designed for family living. Generous reception spaces, 4 bedrooms, 3 bathrooms, private home office, and an expansive convivial kitchen. Substantial acoustic and thermal insulation while preserving authentic period charm.",
          materials: ["High-Performance Acoustic Insulation", "Restored Original Parquet", "4 Bedrooms & 3 Baths", "Custom Cabinetry"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
        },
        {
          id: 'marais-turenne',
          title: "Marais Private Residence, Rue de Turenne",
          location: "Paris 3rd — Rue de Turenne",
          year: "2023",
          area: "210 m²",
          duration: "8 months",
          category: "Mansion",
          description: "Major renovation of a 17th-century historic residence. Dialogue between exposed dressed limestone, custom rift-sawn oak paneling, and honed raw Roman travertine calepinage.",
          materials: ["Exposed Dressed Limestone", "Calacatta Marble", "Honed Roman Travertine", "Burnished Brass"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
        }
      ] as Project[],
      testimonialsTitle: "Client Reviews",
      testimonials: [
        {
          quote: "Wa.Design transformed our apartment well beyond our expectations. Exemplary professionalism, active listening, and a remarkable eye for detail.",
          author: "L. Family",
          location: "Neuilly-sur-Seine"
        },
        {
          quote: "A flawlessly orchestrated project. We had a single dedicated contact from concept through completion. Highly recommended.",
          author: "Mr. & Mrs. R.",
          location: "Paris 9th"
        }
      ] as Testimonial[]
    },
    studio: {
      eyebrow: "ABOUT WA.DESIGN",
      title: "Who are we?",
      subtitle: "Wa.Design was born from a simple conviction: an exceptional interior is never limited to aesthetics. It must be designed to be lived in, cherished, and passed down.",
      quote: "We believe every renovation must tell a story — yours. An exceptional interior unites refinement, enduring comfort, and intelligent everyday utility.",
      manifesto: "We are a passionate team specializing in luxury apartment renovation, based in the Paris region. We operate primarily in Paris, Neuilly-sur-Seine, and the most sought-after neighborhoods across Île-de-France.",
      visionTitle: "Our Vision",
      vision: "To create spaces that combine refinement, comfort, and functional intelligence. We believe that every renovation should tell a story — yours.",
      approachTitle: "Our Approach",
      approach: "We work hand in hand with interior architects chosen for their sensitivity and exacting standards. This synergy allows us to deliver a comprehensive service: conception, contractor coordination, site direction, and turn-key delivery.",
      stepsEyebrow: "EXECUTION PROCESS",
      stepsTitle: "Our 5-Stage Method",
      steps: [
        {
          step: "01",
          title: "Initial Consultation & Feasibility",
          description: "Discussion of your aspirations, budget, and constraints. In-situ visit and initial layout guidance."
        },
        {
          step: "02",
          title: "Design & Detailed Costing",
          description: "In collaboration with the interior architect (if needed), we develop the design, detailed execution drawings, and a transparent cost estimate."
        },
        {
          step: "03",
          title: "Validation & Schedule",
          description: "Formal approval of drawings, physical material curation, and locking the project milestone schedule."
        },
        {
          step: "04",
          title: "Works & Oversight",
          description: "Complete artisan coordination, daily on-site presence, photographic reporting, and regular status briefings."
        },
        {
          step: "05",
          title: "Handover & Delivery",
          description: "Rigorous snagging walkthrough, immediate reserve resolution, key handover, and full technical handover dossier."
        }
      ] as StudioStep[],
      pillars: [
        { title: "Excellence in Every Detail", desc: "An uncompromising standard for every line, seam, material junction, and finish." },
        { title: "Total Transparency", desc: "Line-item costing, continuous photo progress logs, and clear communication." },
        { title: "Strict Deadlines", desc: "A disciplined execution calendar and a firm commitment to agreed delivery dates." },
        { title: "Passion for Craftsmanship", desc: "A profound love for noble, durable materials and master guild savoir-faire." }
      ]
    },
    services: {
      eyebrow: "OUR EXPERTISE",
      title: "Our Expertise",
      subtitle: "Comprehensive, bespoke guidance from initial concept through turnkey handover.",
      items: [
        {
          number: "01",
          title: "Complete Apartment Renovation",
          subtitle: "Full restructuring & structural works",
          description: "We oversee every dimension of your project: demolition, structural works, second-fix installations, and fine finishes. Every intervention is engineered to maximize natural light, optimize flow, and elevate noble materials.",
          deliverables: ["Demolition & strip-out", "Structural reinforcement", "Technical MEP works", "High-precision architectural finishes"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0"
        },
        {
          number: "02",
          title: "Partial Renovation & High-End Refresh",
          subtitle: "Targeted interventions on focal spaces",
          description: "Kitchen, bathroom, dressing room, living salon… We intervene on focused areas with the exact same level of rigor as for a complete full-scale renovation.",
          deliverables: ["Architectural chef kitchens", "Master suites & walk-in showers", "Integrated bespoke wardrobes", "Refined reception salons"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          number: "03",
          title: "Interior Architect Collaboration",
          subtitle: "Fluid teamwork or trusted matchmaking",
          description: "Already have an architect? We work in seamless synergy with them. Do you need one? We introduce you to trusted professionals selected for their sensitivity and discipline.",
          deliverables: ["Technical synergy", "Line-item costing", "1:20 working plans", "Expert aesthetic guidance"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg"
        },
        {
          number: "04",
          title: "Material Advisory & Selection",
          subtitle: "Noble, tactile and enduring sourcing",
          description: "We guide you in curating noble materials: marbles, precious hardwoods, lacquers, metals, architectural textiles… Every specimen is chosen for its quality, durability, and visual warmth.",
          deliverables: ["Calacatta & Carrara stone setting", "Solid French oak floors", "Matte lacquers & mineral plasters", "Artisanal bronze & brass"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          number: "05",
          title: "Site Oversight & Project Direction",
          subtitle: "Single point of contact & total clarity",
          description: "A single dedicated project director. Frequent reporting, progress photography, and unyielding respect for the agreed timeline and budget.",
          deliverables: ["Dedicated project director", "Weekly photographic logs", "Strict milestone adherence", "Zero budget surprises"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv3Koqq4SsNWcYZRdYaVq8V700-QMA71z0N72s2XGt4oPdnqXgmuS6yqXW5m930D3D2yjz5KYA3bm0L0T-pcciXmYhbHBGolDc6ZrEfiNq_POf19KE5zhnzVHFKjSu-k6O3-Ps1RjPLmcVblLk7nDl8CdtyLAjUva5F2geFBpIrz8v-VxC85GblgMrqt4pedt0fdlyqyIg-9rjRLtcT7hs62wwLCDRRWXDxD68p-ADqc-Wk5ir3ff"
        }
      ] as (ServiceItem & { imageUrl: string })[]
    },
    materials: {
      eyebrow: "MATERIALS & RESOURCES",
      title: "Our Materials of Choice",
      subtitle: "We select exclusively noble, durable, and aesthetic materials. We work only with recognized suppliers celebrated for their reliability and superior product quality.",
      items: [
        {
          name: "Solid & Engineered Oak Parquets",
          origin: "Sustainably managed French forests",
          finish: "Chevron, herringbone, wide planks, matte brushed",
          useCase: "Grand salons, master suites, interior galleries",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt"
        },
        {
          name: "Natural Marbles & Stones (Calacatta, Carrara, Travertine)",
          origin: "Carrara & Tivoli quarries",
          finish: "Satin honed, unsealed pore, crisp geometric edges",
          useCase: "Monolithic vanities, kitchen islands, splashbacks",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          name: "Bespoke Millwork & Built-In Cabinetry",
          origin: "Parisian master cabinetmaking workshops",
          finish: "Matte lacquers, noble wood veneers, concealed black hardware",
          useCase: "Architectural kitchens, walk-in dressing rooms, library walls",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          name: "Design Fixtures & Faucetry (Vola, Fantini, Agape)",
          origin: "Exceptional European manufacturers",
          finish: "Brushed brass, matte black, surgical stainless steel",
          useCase: "Walk-in showers, freestanding bathtubs, concealed mixers",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHevmbIglI2LAWD7H_0pEjTtEPpLvemTN4033pHXve35It76uA24jqmOaqXRAmWWa97d2zFZYbzVVP6QC4Sfrm4oSGuCyqdH14dAm-tNUfW9Zyderhql5KV2LC28rzJtkdWgAZVKFYbwq2n4fXABlP_biFoJdZB-r7x4qZuWSskIuRpmI0HN7hcg3FMWS5l2wRWDa-TiQVQ8TKk8VvaY-qVnqcFZuGNwZETTeqDr0HkpBKUbuKX0Qu"
        }
      ] as MaterialSpecimen[]
    },
    socialGrid: {
      eyebrow: "VISUAL JOURNAL & INSTAGRAM",
      title: "The Grammar of Silence.",
      subtitle: "Follow our daily architectural and site process on",
      handle: "@wa.design.france",
      instagramUrl: "https://www.instagram.com/wa.design.france/",
      exploreMore: "Explore on Instagram",
      tiles: [
        {
          id: 1,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
          caption: "Sculpting vertical space: custom helical staircase in bleached French oak.",
          tag: "#BespokeStaircase",
          location: "Faubourg Saint-Germain"
        },
        {
          id: 2,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg",
          caption: "Execution drawings development and tactile sample curation at the atelier.",
          tag: "#AtelierConception",
          location: "Paris 6th"
        },
        {
          id: 3,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
          caption: "Mineral dialogue: 17th-century exposed limestone paired with solid oak millwork.",
          tag: "#Marais #Heritage",
          location: "Rue de Turenne"
        },
        {
          id: 4,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
          caption: "Raw travertine calepinage and vanishing lines in the master bath suite.",
          tag: "#Travertine #Materials",
          location: "Neuilly-sur-Seine"
        },
        {
          id: 5,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
          caption: "Quiet serenity of a Parisian salon: textured linen, restored fireplace, herringbone parquet.",
          tag: "#QuietLuxury",
          location: "Paris 8th"
        },
        {
          id: 6,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-xesGI6YBFSabEqVdWVgopLlKaceHBuzx8zvGz0-74GQJItq1B_u3KW7wZ_RHIImLnqfxQdhDgiWnDLnq4sZB4HgyF6eWYdc_3qGYt6lEiwheUcYp9xGg3SaqAqUle_Srnb-shd1Krq8PHEfx6WtPHqh-mk2HukaHsvpdHOqIS9ZZLyD2s0H9mDTJTUAy2fRVLjbmW4dySKwi7W8YalvDrV4cLJrFASkNfEVQU1JMC9OoRXBQMC-c",
          caption: "Bespoke architectural ironmongery: solid bronze door handle patinated with fire.",
          tag: "#BronzePatina",
          location: "Latin Quarter"
        },
        {
          id: 7,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0",
          caption: "Arched heritage French windows and through-light: complete luxury renovation.",
          tag: "#ParisArchitecture",
          location: "Parc Monceau"
        },
        {
          id: 8,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
          caption: "The design atelier: rigorous physical sample selection and architectural models.",
          tag: "#WaDesignStudio",
          location: "Rue de Tournon"
        },
        {
          id: 9,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5",
          caption: "Bespoke master millwork: seamless walnut joinery with millimetric alignments.",
          tag: "#FineMillwork",
          location: "Paris 16th"
        }
      ] as SocialTile[]
    },
    contact: {
      eyebrow: "GET IN TOUCH WITH WA.DESIGN",
      title: "Let's discuss your project",
      subtitle: "Looking to renovate your apartment? Contact us for an initial consultation without obligation.",
      email: "contact@wadesignfrance.com",
      zone: "Paris and Île-de-France (Neuilly, Levallois, Boulogne, 8th, 9th, 16th, 17th priority areas)",
      responseNotice: "We respond within 24 to 48 business hours.",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "e.g. Marc de Lavallière",
        emailLabel: "Email address",
        emailPlaceholder: "e.g. marc.lavalliere@domain.com",
        phoneLabel: "Phone number",
        phonePlaceholder: "e.g. +33 6 12 34 56 78",
        cityLabel: "City / District",
        cityPlaceholder: "e.g. Neuilly-sur-Seine or Paris 8th",
        areaLabel: "Approximate floor area",
        projectTypeLabel: "Project type",
        projectTypes: [
          "Complete apartment renovation",
          "Partial renovation & key focal rooms",
          "Interior architect collaboration & advisory"
        ],
        messageLabel: "Project details",
        messagePlaceholder: "Describe your property's current state, your aesthetic vision, and anticipated timeline...",
        submit: "Submit project inquiry",
        submitting: "Submitting inquiry...",
        success: "Your inquiry has been successfully transmitted. Our team will contact you within 24 to 48 business hours.",
      }
    },
    footer: {
      baseline: "Specialists in luxury apartment renovation across Paris and Île-de-France. Close collaboration with leading interior architects.",
      address: "Hôtel de Brancas — 14 Rue de Tournon, 75006 Paris",
      navigation: "Sitemap",
      legal: "Legal Notices",
      confidentiality: "Privacy Policy",
      copyright: "© 2024 WA Design France. All rights reserved.",
      backToTop: "Back to top",
    }
  }
};
