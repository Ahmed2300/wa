import { Project, ServiceItem, StudioStep, MaterialSpecimen, SocialTile } from '@/types';

export const BRAND_ASSETS = {
  // Official Wordmark SVG/PNG
  wordmark: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_khzKFZGLlG_y9IU85606kI4T4QT2MVO-WBI5GpXvkdpikqIBzx9ilep2b-9Ze85jtT38yZ5OweWWivxqAlhR1nrs4gL8uRs_Dtaqal1KF2zmax-8rmlL5rwUp5s3iUv2XKY-tE6htpxgi8OzAQFXCCKqmESf0RIK9v9wqJWBEW2Kq7rYDkdVuVvGs5er_wLtgTYamRgE5K1n6c9Cfrenkkn243N5Uo7Z-rWl8ZjawlAVZhoC_9YNJ0OqNii6Zl24vQ",
  // High-Res Hero Image
  heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
  // High-Res Sunlit Parisian Studio Atelier
  studioImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
  // High-Res Contact Atelier Photography
  contactImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuACOtuyVNWoOkx-Gxa5DY3t7UOrtBfDyPsDuVUk0gTN-_mO2DygkJ2sEpEWAI1CwdTmD5-ybKOzMSmk3yB7srLWyMOOVERB_p0f1PUkxLmsFCOLXAgBiPKnAduW0ahI8MNlQmoMP0n6Rt7G-a4to9Xhxoc8mfMgBEjvufCVVS2fUFZB62EGz2WIKW4tJo7r247taDXiQFF8p_U0x5GghaHyV9DLHyAD0S87V2v4xd57Q_-n17269_1E",
  // Monogram seal
  monogramImage: "https://lh3.googleusercontent.com/aida/AEtjO1UCetHyuTpzpJyU7-9ixWbyxiW-aKRlbJZGzxyv8XJcxSTj1V0zbzTan74oOCbj3x5y9ly8LwnczHuYmj5SoYXPdZsOCOgtLWSC09cymsEcuyHBPPmES-FV-gspqzAsQApCzU-xXn6h8uQAufukJwycSO5sontsTIrPjktvJnxIKPMd2_x59bFckQoaaOo0tj5bmiL-ZpNvy3_-qVFXyBkR9VZwrs1h5WSUizAgvcjoMmQar9f6oYjyfw"
};

export const CONTENT = {
  fr: {
    nav: {
      projects: 'Projets',
      studio: 'Studio',
      services: 'Services',
      materials: 'Matières',
      journal: 'Journal',
      contact: 'Contact',
      bookConsultation: 'Prendre rendez-vous',
      location: 'Paris & Île-de-France',
    },
    hero: {
      eyebrow: "RÉNOVATION D'APPARTEMENTS À PARIS",
      title: "Des intérieurs pensés pour durer.",
      subtitle: "Rénovation et architecture d’intérieur sur-mesure pour appartements haussmanniens et contemporains.",
      cta: "Découvrir les réalisations",
      territory: "Paris & Île-de-France — Atelier d'architecture & maîtrise d'œuvre",
      recentProjects: "Réalisations récentes :",
      scrollDown: "Défiler pour explorer",
    },
    projects: {
      eyebrow: "SÉLECTION ARCHITECTURALE",
      title: "Une sélection d'appartements d'exception rénovés à Paris.",
      subtitle: "L'articulation mesurée entre rigueur haussmannienne, matières brutes et pureté contemporaine.",
      filterAll: "Tous les projets",
      filterHaussmann: "Haussmannien",
      filterDuplex: "Duplex",
      filterHotelParticulier: "Hôtel Particulier",
      viewProject: "Consulter la monographie",
      items: [
        {
          id: 'tournon',
          title: "Appartement Tournon",
          location: "Paris VIe — Saint-Germain-des-Prés",
          year: "2024",
          area: "180 m²",
          category: "Haussmannien",
          description: "Une réhabilitation intégrale au pied du Palais du Luxembourg. L'espace déploie un dialogue feutré entre les moulures d'époque restaurées au blanc de Meudon et un plancher d'origine en chêne de Bourgogne posé en point de Hongrie.",
          materials: ["Chêne de Bourgogne", "Cheminée en marbre sculpté", "Enduit à la chaux", "Laiton bruni"],
          imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VfAG7CvceNc8X9ef1cVqZznST0O1Rc0FPuQUg-Sgdg3ca4dm3vBssoVf_PLWz_1t6defW4VVPQZyNW1QT4UYNxv0M_xpMLeSRQKYdouSWkrFt3KOo0pDoAp6-K8h7g9xiJAQAWK2qtpNBTSMLw5yEGk6Suxy1cX6f8WilbDqnXLBFvVaTL0tlzpKh-A-PLHERsrUBZOlFeTS_3P3e0T0UlrOTczhR4lj_TkmwgPoqJZmjQe15wdtvQqhI",
          featured: true,
        },
        {
          id: 'saint-thomas',
          title: "Duplex Saint-Thomas d'Aquin",
          location: "Paris VIIe — Carré des Rives",
          year: "2024",
          area: "240 m²",
          category: "Duplex",
          description: "Nidifié dans le quadrilatère aristocratique du Faubourg Saint-Germain, ce duplex réinvente le dégagement vertical. L'escalier hélicoïdal sur-mesure en chêne de France blanchi s'érige comme une sculpture libre sous une verrière à double hauteur.",
          materials: ["Escalier chêne blanchi", "Verrière acier profil fin", "Travertin d'Ascoli", "Plâtre sculpté"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
        },
        {
          id: 'marais',
          title: "Hôtel Particulier Marais",
          location: "Paris IIIe — Rue de Turenne",
          year: "2023",
          area: "310 m²",
          category: "Hôtel Particulier",
          description: "Un ensemble patrimonial du XVIIe siècle repensé dans l'esprit d'une collection privée : menuiseries architecturales en chêne fil de bois, vasques monolithes en travertin brut et conservation des parois en pierre de taille apparente.",
          materials: ["Pierre de taille calcaire", "Boiseries en noyer français", "Travertin romain", "Sol béton minéral ciré"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
        },
        {
          id: 'neuilly',
          title: "Appartement Neuilly",
          location: "Neuilly-sur-Seine — Bords de Seine",
          year: "2024",
          area: "195 m²",
          category: "Haussmannien",
          description: "Volumes décloisonnés et lumière rasante. L'espace de vie s'ouvre sur une perspective filante mettant en scène des meubles sur-mesure intégrés et un travail d'ébénisterie sur panneau de chêne scié.",
          materials: ["Chêne brut scié", "Marbre Fior di Bosco", "Tissu lin naturel", "Portes toute hauteur"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
        }
      ] as Project[]
    },
    studio: {
      eyebrow: "ATELIER & PHILOSOPHIE",
      title: "Une approche calme de la rénovation.",
      subtitle: "Concevoir des espaces qui vieillissent avec noblesse et sobriété.",
      quote: "Nous croyons qu'un intérieur d'exception ne cherche pas à impressionner à tout prix. Il s'appuie sur la sincérité des matières premières — la pierre calcaire patinée, le chêne de fil, le laiton brossé — et le dialogue mesuré avec les volumes architecturaux originels.",
      manifesto: "Chaque projet débute par un sondage archéologique des strates du bâti. Nous récusons l'ornement superficiel pour privilégier l'élégance des matières pures sourcées auprès d'artisans d'art français. Nous accompagnons un nombre restreint de réalisations résidentielles par an afin de garantir une présence continue sur chaque chantier.",
      stepsEyebrow: "MÉTHODOLOGIE D'ATELIER",
      stepsTitle: "De l'idée à la livraison.",
      steps: [
        {
          step: "01",
          title: "Écoute & Diagnostic",
          description: "Analyse approfondie du lieu, examen des structures historiques, audition de vos usages et définition d'un cahier des charges rigoureux."
        },
        {
          step: "02",
          title: "Conception & Matières",
          description: "Plans architecturaux millimétrés, perspectives 3D d'éclairage naturel, sélection physique des échantillons de matériaux et chiffrage transparent."
        },
        {
          step: "03",
          title: "Réalisation & Maîtrise d'Œuvre",
          description: "Coordination quotidienne des artisans d'art, contrôle strict des finitions, menuiserie sur-mesure et livraison clés en main sans compromis."
        }
      ] as StudioStep[],
      pillars: [
        { title: "Matériaux pérennes", desc: "Chêne massif, calcaires de carrière française, marbres mats non-rebouchés." },
        { title: "Sur-mesure intégral", desc: "Agencements sculptés sur place pour épouser les irrégularités de l'ancien." },
        { title: "Transparence totale", desc: "Planning rigoureux et reporting hebdomadaire des étapes du chantier." },
        { title: "Artisans d'exception", desc: "Compagnons ébénistes, tailleurs de pierre et staffeurs parisiens." }
      ]
    },
    services: {
      eyebrow: "NOS SAVOIR-FAIRE",
      title: "Un accompagnement complet, du premier tracé à la remise des clés.",
      subtitle: "Appartements haussmanniens et résidences contemporaines, à Paris et en Île-de-France.",
      items: [
        {
          number: "01",
          title: "Rénovation Complète",
          subtitle: "Restructuration totale & gros œuvre",
          description: "Dépose intégrale, renforcement de planchers bois, modification de cloisons porteuses, mise aux normes thermiques et acoustiques d'exception.",
          deliverables: ["Diagnostic structurel", "Coordination corps d'état", "Assurance décennale", "Livraison sans réserve"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0"
        },
        {
          number: "02",
          title: "Architecture d'Intérieur",
          subtitle: "Zonage spatial & lumière",
          description: "Création de perspectives épurées, optimisation des circulations, intégration de verrières d'acier et dessin d'éclairages architecturaux invisibles.",
          deliverables: ["Plans d'exécution 1:20", "Étude lumino-technique", "Planches de matières", "Vues immersives"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg"
        },
        {
          number: "03",
          title: "Menuiserie & Agencement Sur-Mesure",
          subtitle: "Mobilier intégré de haute précision",
          description: "Dessin et fabrication de dressings invisibles, bibliothèques monumentales, îlots en pierre massive et portes dérobées affleurantes.",
          deliverables: ["Ébénisterie d'art", "Calepinage de pierre", "Quincaillerie en laiton massif", "Pose au millimètre"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          number: "04",
          title: "Sourcing & Direction Artistique",
          subtitle: "Sélection d'antiquités & design",
          description: "Recherche de pièces de collection, textiles en lin brut, luminaires d'architectes et mobilier iconique en harmonie avec les volumes du lieu.",
          deliverables: ["Carnet d'acquisitions", "Accompagnement galeries", "Finitions sur-mesure", "Mise en scène finale"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv3Koqq4SsNWcYZRdYaVq8V700-QMA71z0N72s2XGt4oPdnqXgmuS6yqXW5m930D3D2yjz5KYA3bm0L0T-pcciXmYhbHBGolDc6ZrEfiNq_POf19KE5zhnzVHFKjSu-k6O3-Ps1RjPLmcVblLk7nDl8CdtyLAjUva5F2geFBpIrz8v-VxC85GblgMrqt4pedt0fdlyqyIg-9rjRLtcT7hs62wwLCDRRWXDxD68p-ADqc-Wk5ir3ff"
        }
      ] as (ServiceItem & { imageUrl: string })[]
    },
    materials: {
      eyebrow: "PALETTE TACTILE",
      title: "L'intelligence des matières pures.",
      subtitle: "Nous sélectionnons exclusivement des matériaux nobles qui se patinent avec le temps.",
      items: [
        {
          name: "Pierre de Taille Calcaire",
          origin: "Carrières de l'Oise & Bassin Parisien",
          finish: "Honnée à la main, arêtes vives",
          useCase: "Cheminées sculptées, murs porteurs restaurés, soubassements",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8"
        },
        {
          name: "Chêne de France Blanchi & Scié",
          origin: "Forêts éco-gérées du Val de Loire",
          finish: "Brossé mat naturel, séché à l'air libre",
          useCase: "Parquets en chevrons, habillages muraux, escaliers sculptés",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt"
        },
        {
          name: "Travertin & Marbre Calacatta",
          origin: "Bassins de Tivoli & Carrare",
          finish: "Non-rebouché, adouci satiné",
          useCase: "Plans vasques monolithes, îlots centraux, crédences",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          name: "Bronze Brut Patiné au Feu",
          origin: "Fonderies artisanales françaises",
          finish: "Patiné médaille, ciré à chaud",
          useCase: "Poignées de portes sur-mesure, quincaillerie invisible, baguettes",
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
          imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VfAG7CvceNc8X9ef1cVqZznST0O1Rc0FPuQUg-Sgdg3ca4dm3vBssoVf_PLWz_1t6defW4VVPQZyNW1QT4UYNxv0M_xpMLeSRQKYdouSWkrFt3KOo0pDoAp6-K8h7g9xiJAQAWK2qtpNBTSMLw5yEGk6Suxy1cX6f8WilbDqnXLBFvVaTL0tlzpKh-A-PLHERsrUBZOlFeTS_3P3e0T0UlrOTczhR4lj_TkmwgPoqJZmjQe15wdtvQqhI",
          caption: "Lumière matinale rasante sur les moulures restaurées de l'Appartement Tournon.",
          tag: "#Paris6 #Haussmann",
          location: "Saint-Germain-des-Prés"
        },
        {
          id: 2,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
          caption: "Sculpture du vide : détail de l'escalier hélicoïdal en chêne de France blanchi.",
          tag: "#EscalierSurMesure",
          location: "Faubourg Saint-Germain"
        },
        {
          id: 3,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
          caption: "Dialogue minéral : la pierre de taille du XVIIe siècle mise à nu.",
          tag: "#Marais #Heritage",
          location: "Rue de Turenne"
        },
        {
          id: 4,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
          caption: "Calepinage de travertin brut et perspectives fuyantes.",
          tag: "#Travertin #Matières",
          location: "Neuilly-sur-Seine"
        },
        {
          id: 5,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
          caption: "Sérénité d'un salon parisien : lin texturé et parquet en point de Hongrie.",
          tag: "#QuietLuxury",
          location: "Paris VIIIe"
        },
        {
          id: 6,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-xesGI6YBFSabEqVdWVgopLlKaceHBuzx8zvGz0-74GQJItq1B_u3KW7wZ_RHIImLnqfxQdhDgiWnDLnq4sZB4HgyF6eWYdc_3qGYt6lEiwheUcYp9xGg3SaqAqUle_Srnb-shd1Krq8PHEfx6WtPHqh-mk2HukaHsvpdHOqIS9ZZLyD2s0H9mDTJTUAy2fRVLjbmW4dySKwi7W8YalvDrV4cLJrFASkNfEVQU1JMC9OoRXBQMC-c",
          caption: "Détail de ferronnerie : poignée de porte en bronze massif patiné au feu.",
          tag: "#BronzePatine",
          location: "Quartier Latin"
        },
        {
          id: 7,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0",
          caption: "Les teintes de sable et de chaux : l'harmonie minérale de nos chantiers.",
          tag: "#ChantierParis",
          location: "Paris VIIe"
        },
        {
          id: 8,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
          caption: "L'Atelier d'Architecture : planches de matières et calepinage.",
          tag: "#AtelierArchitecture",
          location: "Paris VIe"
        },
        {
          id: 9,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbq-uKe3W7gP3sVpv3UCx4mwmXmMw6pQonXn8F5ZjtwHNHn0WMyEUiXlwxjM59zoy3Jbs17DV8KPtVgycG43eo6d_Xicdpg59ek9VMipSRKMbELk_e3NKfg5-o1CBDxcvkt4umiD9ptza8MPJYW-VQCFBb6FGiMbcZ5aepMbX8GVbLg9XvwGT2of783_fv5fZksmQu3OHrALLqkkT7OASMGMfmpFUuvs0BrrhtcAh6HSSPfEeRW7Ys",
          caption: "Grain de la pierre de taille parisienne sous la lumière douce du matin.",
          tag: "#PierreDeTaille",
          location: "Paris IVe"
        }
      ] as SocialTile[]
    },
    contact: {
      eyebrow: "INITIER UN PROJET",
      title: "Parlons de votre lieu d'exception.",
      subtitle: "Chaque collaboration commence par une rencontre intime et un diagnostic spatial sur place.",
      form: {
        name: "Nom complet",
        namePlaceholder: "ex. Arthur de Montmirail",
        email: "Adresse e-mail",
        emailPlaceholder: "votre@domaine.com",
        phone: "Numéro de téléphone",
        phonePlaceholder: "+33 6 12 34 56 78",
        projectType: "Nature du projet",
        projectTypes: ["Rénovation complète", "Architecture d'intérieur", "Agencement sur-mesure", "Autre"],
        surface: "Surface estimée (m²)",
        surfacePlaceholder: "ex. 150",
        budget: "Enveloppe budgétaire indicative",
        budgetOptions: ["150k€ – 300k€", "300k€ – 600k€", "600k€ – 1M€+", "Non défini"],
        message: "Décrivez votre projet & adresse parisienne",
        messagePlaceholder: "Localisation (arrondissement), typologie du bien, contraintes architecturales...",
        submit: "Envoyer ma demande de consultation",
        submitting: "Transmission en cours...",
        success: "Votre demande a bien été transmise à l'atelier. Nous vous recontacterons sous 48 heures ouvrées.",
      },
      atelierDetails: {
        title: "Atelier Paris",
        addressLine1: "14 Rue de Tournon",
        addressLine2: "75006 Paris • France",
        notes: "Sur rendez-vous privé uniquement",
        email: "contact@wadesign.fr",
        phone: "+33 (0)1 42 68 50 14",
        hours: "Du lundi au vendredi • 09h30 – 19h00",
        instagram: "@wa.design.france"
      }
    },
    footer: {
      baseline: "Atelier d'Architecture d'Intérieur & Rénovation Patrimoniale",
      rights: "Tous droits réservés. Monographie WA Design France.",
      legal: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      backToTop: "Retour en haut",
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      studio: 'Studio',
      services: 'Services',
      materials: 'Materials',
      journal: 'Journal',
      contact: 'Contact',
      bookConsultation: 'Book a consultation',
      location: 'Paris & Île-de-France',
    },
    hero: {
      eyebrow: "APARTMENT RENOVATION IN PARIS",
      title: "Interiors made to last.",
      subtitle: "Bespoke renovation and interior architecture for Haussmannian and contemporary apartments.",
      cta: "Discover our projects",
      territory: "Paris & Île-de-France — Architecture studio & project management",
      recentProjects: "Recent projects:",
      scrollDown: "Scroll to explore",
    },
    projects: {
      eyebrow: "ARCHITECTURAL SELECTION",
      title: "A curated selection of exceptional apartments renovated in Paris.",
      subtitle: "The measured harmony between Haussmannian rigor, raw materials, and contemporary purity.",
      filterAll: "All projects",
      filterHaussmann: "Haussmannian",
      filterDuplex: "Duplex",
      filterHotelParticulier: "Private Mansion",
      viewProject: "View monograph",
      items: [
        {
          id: 'tournon',
          title: "Tournon Apartment",
          location: "Paris 6th — Saint-Germain-des-Prés",
          year: "2024",
          area: "180 m²",
          category: "Haussmannian",
          description: "A complete rehabilitation at the foot of the Luxembourg Palace. The space establishes a muted dialogue between historic moldings restored with Meudon whiting and an original Burgundy oak floor laid in Hungarian chevron point.",
          materials: ["Burgundy Oak", "Sculpted Marble Fireplace", "Limewash Plaster", "Burnished Brass"],
          imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VfAG7CvceNc8X9ef1cVqZznST0O1Rc0FPuQUg-Sgdg3ca4dm3vBssoVf_PLWz_1t6defW4VVPQZyNW1QT4UYNxv0M_xpMLeSRQKYdouSWkrFt3KOo0pDoAp6-K8h7g9xiJAQAWK2qtpNBTSMLw5yEGk6Suxy1cX6f8WilbDqnXLBFvVaTL0tlzpKh-A-PLHERsrUBZOlFeTS_3P3e0T0UlrOTczhR4lj_TkmwgPoqJZmjQe15wdtvQqhI",
          featured: true,
        },
        {
          id: 'saint-thomas',
          title: "Saint-Thomas d'Aquin Duplex",
          location: "Paris 7th — Carré des Rives",
          year: "2024",
          area: "240 m²",
          category: "Duplex",
          description: "Tucked within the aristocratic quadrangle of Faubourg Saint-Germain, this duplex reinvents vertical movement. The custom helical staircase in bleached French oak stands like a free sculpture beneath a double-height glass canopy.",
          materials: ["Bleached Oak Staircase", "Slender Steel Canopy", "Ascoli Travertine", "Sculpted Plaster"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
        },
        {
          id: 'marais',
          title: "Marais Private Mansion",
          location: "Paris 3rd — Rue de Turenne",
          year: "2023",
          area: "310 m²",
          category: "Private Mansion",
          description: "A 17th-century heritage estate re-envisioned in the spirit of a private collection: architectural woodwork in straight-grain oak, monolithic basins in raw travertine, and preserved exposed Parisian limestone walls.",
          materials: ["Limestone Pierre de Taille", "French Walnut Paneling", "Roman Travertine", "Honed Mineral Floor"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
        },
        {
          id: 'neuilly',
          title: "Neuilly Residence",
          location: "Neuilly-sur-Seine — Riverbanks of the Seine",
          year: "2024",
          area: "195 m²",
          category: "Haussmannian",
          description: "De-partitioned volumes bathed in raking natural light. The living sanctuary opens into an uninterrupted linear vista highlighting bespoke integrated cabinetry and artisanal sawn-oak wall paneling.",
          materials: ["Raw Sawn Oak", "Fior di Bosco Marble", "Natural Linen Textiles", "Full-Height Flush Doors"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
        }
      ] as Project[]
    },
    studio: {
      eyebrow: "ATELIER & PHILOSOPHY",
      title: "A calm approach to renovation.",
      subtitle: "Designing spaces that age gracefully with timeless dignity.",
      quote: "We believe an exceptional interior does not seek to impress at all costs. It relies on the sincerity of authentic raw materials — patinated limestone, straight-grain oak, brushed brass — and a measured dialogue with the building's historic soul.",
      manifesto: "Every commission begins with an archaeological reading of the building's historical layers. We reject superficial ornament in favor of pure, noble elements sourced directly from French master craftsmen. We limit our commissions each year to ensure uncompromising, daily on-site oversight.",
      stepsEyebrow: "ATELIER METHODOLOGY",
      stepsTitle: "From concept to handover.",
      steps: [
        {
          step: "01",
          title: "Listening & Spatial Audit",
          description: "Thorough in-situ analysis, assessment of historical load-bearing structures, lifestyle audition, and establishing an uncompromising architectural brief."
        },
        {
          step: "02",
          title: "Design & Material Specification",
          description: "Millimetric architectural drawings, natural lighting simulations, physical material curation and fully transparent, line-item costing."
        },
        {
          step: "03",
          title: "Execution & Site Direction",
          description: "Daily coordination of master artisans, relentless finish quality control, bespoke joinery fitting, and turn-key delivery without compromise."
        }
      ] as StudioStep[],
      pillars: [
        { title: "Enduring Materials", desc: "Solid oak, authentic French quarry limestones, unsealed satin marbles." },
        { title: "Bespoke Millwork", desc: "Artisanal joinery scribed on-site to embrace the subtle irregularities of historic buildings." },
        { title: "Unflinching Clarity", desc: "Rigorous milestone schedules and weekly photo-documented status reporting." },
        { title: "Master Artisans", desc: "Guild cabinetmakers, stonecutters, and classical Parisian ornamental plasterers." }
      ]
    },
    services: {
      eyebrow: "OUR EXPERTISE",
      title: "Comprehensive guidance, from the initial sketch to key handover.",
      subtitle: "Haussmannian apartments and contemporary residences across Paris and the Île-de-France region.",
      items: [
        {
          number: "01",
          title: "Complete Renovation",
          subtitle: "Full restructuring & structural works",
          description: "Full strip-out, wooden floor reinforcement, load-bearing partition alterations, and acoustic/thermal isolation engineered to modern museum standards.",
          deliverables: ["Structural diagnostic", "Trade contractor supervision", "Ten-year guarantee coverage", "Zero-defect delivery"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0"
        },
        {
          number: "02",
          title: "Interior Architecture",
          subtitle: "Spatial zoning & lighting architecture",
          description: "Sculpting uncluttered sightlines, optimizing circulation flow, incorporating bespoke steel partitions, and designing concealed architectural lighting fixtures.",
          deliverables: ["1:20 detailed execution plans", "Lighting & ambiance study", "Material swatch books", "Photorealistic rendering"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABAXe16Zck3J_LzBdHinRfj465Y9StCtCMABUbiYda0-zdmerIcVTOPOfNY7uwLucnvy2-ib-10TQLPR28oz7x2yDGPseFDeRAoUhwA9cCvc8k2G6CvSFk8Q49JkSBQH3K1N3UaXalQkFSPOWE9pPFPRRwAeMUgPzcl7FSKClUIx34ZFpOujlUtDNDuBOg1J04FtuU_MsOdRMPo2kVua37Z0aqxJkr7_fOFJzaUwN0UQYk9tN-rghg"
        },
        {
          number: "03",
          title: "Custom Joinery & Millwork",
          subtitle: "High-precision integrated furniture",
          description: "Design and creation of concealed dressing rooms, monolithic stone islands, library galleries, and flush concealed doors with zero visible trims.",
          deliverables: ["Master cabinetmaking", "Stone vein calepinage", "Solid brass bespoke hardware", "Millimetric on-site installation"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9WF6IED3_rBy63dwt6hJY5vorV6cyZV2pgj9h709VT53TWTNH4xYbdods0VFpc3wRgYvIdE9tFtspRVeTxYbYpcCdpONOdZMESr_45P-IFB9-xl1Whi0i03FsP-DPEzJ0V7HjHbkMqgo38qILRWjyPJ_K3uFFhEQSahfxuQOo2NpTHjdH-RiFxUodKo0aEQ9Gdi1i1AzX1AJtmrefL1whA3u8936UY9RDn1HB9F_OJSs33DKkl-5"
        },
        {
          number: "04",
          title: "Sourcing & Art Direction",
          subtitle: "Curation of antiques & collectible design",
          description: "Searching for rare mid-century masterworks, textured Belgian linens, collectible architect-designed luminaires, and bespoke upholstered pieces.",
          deliverables: ["Acquisition dossier", "Private gallery accompaniment", "Bespoke textile finishes", "Final editorial styling"],
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiv3Koqq4SsNWcYZRdYaVq8V700-QMA71z0N72s2XGt4oPdnqXgmuS6yqXW5m930D3D2yjz5KYA3bm0L0T-pcciXmYhbHBGolDc6ZrEfiNq_POf19KE5zhnzVHFKjSu-k6O3-Ps1RjPLmcVblLk7nDl8CdtyLAjUva5F2geFBpIrz8v-VxC85GblgMrqt4pedt0fdlyqyIg-9rjRLtcT7hs62wwLCDRRWXDxD68p-ADqc-Wk5ir3ff"
        }
      ] as (ServiceItem & { imageUrl: string })[]
    },
    materials: {
      eyebrow: "TACTILE PALETTE",
      title: "The intelligence of pure materials.",
      subtitle: "We exclusively curate noble elements that develop a richer patina with each passing year.",
      items: [
        {
          name: "French Pierre de Taille Limestone",
          origin: "Quarries of the Oise & Parisian Basin",
          finish: "Hand-honed, sharp perpendicular edges",
          useCase: "Sculpted fireplaces, restored structural walls, base plinths",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8"
        },
        {
          name: "Bleached & Sawn French Oak",
          origin: "Sustainably managed Loire Valley forests",
          finish: "Natural matte brushed, air-dried",
          useCase: "Chevron parquet, architectural wall paneling, sculpted staircases",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt"
        },
        {
          name: "Roman Travertine & Calacatta",
          origin: "Tivoli & Carrara Basins",
          finish: "Unfilled natural pores, satin honed",
          useCase: "Monolithic vanity basins, kitchen islands, architectural backsplashes",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf"
        },
        {
          name: "Fire-Patinated Raw Bronze",
          origin: "Artisanal French Foundries",
          finish: "Medal patina, hot beeswax sealed",
          useCase: "Custom door handles, invisible hardware, perimeter trims",
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHevmbIglI2LAWD7H_0pEjTtEPpLvemTN4033pHXve35It76uA24jqmOaqXRAmWWa97d2zFZYbzVVP6QC4Sfrm4oSGuCyqdH14dAm-tNUfW9Zyderhql5KV2LC28rzJtkdWgAZVKFYbwq2n4fXABlP_biFoJdZB-r7x4qZuWSskIuRpmI0HN7hcg3FMWS5l2wRWDa-TiQVQ8TKk8VvaY-qVnqcFZuGNwZETTeqDr0HkpBKUbuKX0Qu"
        }
      ] as MaterialSpecimen[]
    },
    socialGrid: {
      eyebrow: "VISUAL JOURNAL & INSTAGRAM",
      title: "The Grammar of Silence.",
      subtitle: "Follow our daily architectural process on",
      handle: "@wa.design.france",
      instagramUrl: "https://www.instagram.com/wa.design.france/",
      exploreMore: "Visit our Instagram",
      tiles: [
        {
          id: 1,
          imageUrl: "https://lh3.googleusercontent.com/aida/AEtjO1VfAG7CvceNc8X9ef1cVqZznST0O1Rc0FPuQUg-Sgdg3ca4dm3vBssoVf_PLWz_1t6defW4VVPQZyNW1QT4UYNxv0M_xpMLeSRQKYdouSWkrFt3KOo0pDoAp6-K8h7g9xiJAQAWK2qtpNBTSMLw5yEGk6Suxy1cX6f8WilbDqnXLBFvVaTL0tlzpKh-A-PLHERsrUBZOlFeTS_3P3e0T0UlrOTczhR4lj_TkmwgPoqJZmjQe15wdtvQqhI",
          caption: "Raking morning light touching restored moldings in the Tournon Apartment.",
          tag: "#Paris6 #Haussmann",
          location: "Saint-Germain-des-Prés"
        },
        {
          id: 2,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDepriQl0aJ4A3QTUGqOEgUQ1QFvkK52BfcKpaaJvV-EcudFhtMu_XeN4qON0nu8KUhurqqOgrCHTBvzDEJ3Jwg_sEsUjXA4tVuiLICf38dCxsVKPs9_cuxunAtfyyfXfkXfoUh4VnF9qSNBd-PsnmBMULP3q-ANbCxRS5Cy2OFp7BCIUDiRSIJm1iRKL4DLZbyNJ1Wr5onUJfQx5FDYH_WGGnqSebksupOkyc5H5HTlKU_ki9gj9wt",
          caption: "Sculpting the void: detail of the custom helical staircase in bleached French oak.",
          tag: "#CustomStaircase",
          location: "Faubourg Saint-Germain"
        },
        {
          id: 3,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRp_7KV7_hz-SaT8VUkdxdNvhzaD22ybIBgODssxD5p8gMMLjDMLgU80qP-pQFADTanTuxgOm1G9RUW-KGC3Pe-79RH1KtEatFQNk6oXpNwUV7SWJAF5htQuE7lHTP0a5EYW0D5eiTHl_16BhFoHghejJtcj_cYJk7Hq2-voB43JhJF94M4h4qB-zDp-MhbX5ByEm1J3SvY4RWJkeQMd8iXH6Up18jKWEbJ0iDEkc4u64v3E11yQS8",
          caption: "Mineral dialogue: 17th-century exposed limestone restored with reverence.",
          tag: "#Marais #Heritage",
          location: "Rue de Turenne"
        },
        {
          id: 4,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_254KOK60UDZZT9jO_qLVmpsKK2M3jbjd6qaeOVjHxb4oKlhyWwWRfChiJSYYshOA3D3V3xUIMo5eBs-T3kPhpi9mCnO9sOawxQcdESFsizA19LiUBHb9_ofHMptUWSfvOeSpJbHjhDL0ieXDIPr9-_9zOcZmvW8WoCjv5v1_dvsoEcSzjAghpBYOLnFxBbUE5QULn0Co9tOIKb9ylLhTwUOuzBUn65R4AyaNk6gLLoT4m4gER3Tf",
          caption: "Raw travertine calepinage and seamless architectural sightlines.",
          tag: "#Travertine #Materials",
          location: "Neuilly-sur-Seine"
        },
        {
          id: 5,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXVi5ap24Wn6VkYm_Sc5n5SsykQa9fbuxsp_iZwxaH3R3VKZYwoGgu2CQtSIYBSXOUYuA1ynHrRH51ce9O3ZPB2D0SQD8Wg5wwEIxJEtZylvc6GHu3fZL9jQGsg9tpaEQ-czCzk7cnVccGkYpa-p8oLgvsPSQj5Er0x33H5o2FidHeqHGt0Y6G6UjDMb7ZNciZOTeuZFFRu8wJd2AmD2NYkzZva6kfvwvp1rqWJkJYNXbskMRFaclH",
          caption: "Tranquility of a Parisian salon: textured linens and Hungarian point parquet.",
          tag: "#QuietLuxury",
          location: "Paris 8th"
        },
        {
          id: 6,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-xesGI6YBFSabEqVdWVgopLlKaceHBuzx8zvGz0-74GQJItq1B_u3KW7wZ_RHIImLnqfxQdhDgiWnDLnq4sZB4HgyF6eWYdc_3qGYt6lEiwheUcYp9xGg3SaqAqUle_Srnb-shd1Krq8PHEfx6WtPHqh-mk2HukaHsvpdHOqIS9ZZLyD2s0H9mDTJTUAy2fRVLjbmW4dySKwi7W8YalvDrV4cLJrFASkNfEVQU1JMC9OoRXBQMC-c",
          caption: "Architectural pull handle forged in flame-patinated raw bronze.",
          tag: "#ArchitecturalDetail",
          location: "Foundry Atelier"
        },
        {
          id: 7,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2CCP9522LM9rTVWdyiMwMtkKNVpz4koTqZSNLvQN9tjiEY25rvFtdquDGNnQ8ttlZ8j1pJNd7dLbm84pu6DcToVZ_EKHYCk_16knOB3VWE12uoMdrqNL6euj3_9pYB_DP3aFOgzlrWwf7mbXJ4H3DWKDOGG-8OTD46xiF5m9bFPrhygrXow4WXKwJxUrzEy7IXjXsw87KvSbQuoQwKiJGW07Lh9VYnOBvB8jee_ljpEPC7XtJwN0",
          caption: "Hues of warm sand and lime plaster: mineral tranquility in the making.",
          tag: "#ParisRenovation",
          location: "Paris 7th"
        },
        {
          id: 8,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxkdeUQwIUloH6Kx2Rc3s43nKrniaGSJMnaChiB973lsRQcZdcwb71SQArlSXvfQhlrw1tXl0i4O1LJa4CFRSgze7YmEZeknwndddQeJO68F5RdBl4Q8Xhbpr48yrkDCrhj18feiKeh7wyrsUGGUkX6He8Ukl7Ryn9oCC_kyrtO85SQmyUj-VZvcsL9smfAyxa06dcJO_aC0l0yrq1OkHtxj_TDyNQ-1Rky-6YyTaZKBXXu4aT87Hg",
          caption: "Atelier architecture drawing board and material library.",
          tag: "#ArchitectureAtelier",
          location: "Paris 6th"
        },
        {
          id: 9,
          imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbq-uKe3W7gP3sVpv3UCx4mwmXmMw6pQonXn8F5ZjtwHNHn0WMyEUiXlwxjM59zoy3Jbs17DV8KPtVgycG43eo6d_Xicdpg59ek9VMipSRKMbELk_e3NKfg5-o1CBDxcvkt4umiD9ptza8MPJYW-VQCFBb6FGiMbcZ5aepMbX8GVbLg9XvwGT2of783_fv5fZksmQu3OHrALLqkkT7OASMGMfmpFUuvs0BrrhtcAh6HSSPfEeRW7Ys",
          caption: "Grain of Parisian limestone under the morning sun.",
          tag: "#LimestoneTexture",
          location: "Paris 4th"
        }
      ] as SocialTile[]
    },
    contact: {
      eyebrow: "INITIATE A CONVERSATION",
      title: "Let us discuss your historic residence.",
      subtitle: "Every collaboration begins with a private consultation and on-site spatial diagnostic.",
      form: {
        name: "Full Name",
        namePlaceholder: "e.g. Arthur de Montmirail",
        email: "Email Address",
        emailPlaceholder: "your@domain.com",
        phone: "Phone Number",
        phonePlaceholder: "+33 6 12 34 56 78",
        projectType: "Project Typology",
        projectTypes: ["Full Renovation", "Interior Architecture", "Bespoke Millwork", "Other"],
        surface: "Estimated Area (m²)",
        surfacePlaceholder: "e.g. 150",
        budget: "Indicative Investment Envelope",
        budgetOptions: ["€150k – €300k", "€300k – €600k", "€600k – €1M+", "To be defined"],
        message: "Describe your residence & Parisian location",
        messagePlaceholder: "Arrondissement, building typology, architectural requirements...",
        submit: "Request Private Consultation",
        submitting: "Transmitting inquiry...",
        success: "Your inquiry has been received by our atelier. We will respond within 48 business hours.",
      },
      atelierDetails: {
        title: "Paris Atelier",
        addressLine1: "14 Rue de Tournon",
        addressLine2: "75006 Paris • France",
        notes: "Strictly by private appointment",
        email: "contact@wadesign.fr",
        phone: "+33 (0)1 42 68 50 14",
        hours: "Monday to Friday • 09:30 – 19:00",
        instagram: "@wa.design.france"
      }
    },
    footer: {
      baseline: "Interior Architecture Atelier & Heritage Renovation",
      rights: "All rights reserved. WA Design France Archival Monograph.",
      legal: "Legal Notices",
      privacy: "Privacy Policy",
      backToTop: "Back to top",
    }
  }
};
