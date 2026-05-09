export type GallerySectionType =
  | "politica"
  | "deportes"
  | "temas-sociales"
  | "fiestas-tradicionales";

export type SectionPhoto = {
  title: string;
  location: string;
  date: string;
  image: string;
};

export type GallerySection = {
  type: GallerySectionType;
  label: string;
  title: string;
  intro: string;
  featuredPhoto: SectionPhoto;
  photos: SectionPhoto[];
};

export const gallerySections: Record<GallerySectionType, GallerySection> = {
  politica: {
    type: "politica",
    label: "Política",
    title: "Fotografía política e institucional.",
    intro:
      "Cobertura visual de actos públicos, instituciones, comparecencias y momentos clave de la actualidad política.",
    featuredPhoto: {
      title: "Actividad parlamentaria",
      location: "Madrid · Congreso",
      date: "2025",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1800&auto=format&fit=crop",
    },
    photos: [
      {
        title: "Comparecencia institucional",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Acto público",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Entorno institucional",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Rueda de prensa",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Jornada pública",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Actualidad política",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Congreso y medios",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Debate público",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Sala de prensa",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },

  deportes: {
    type: "deportes",
    label: "Deportes",
    title: "Fotografía deportiva en general.",
    intro:
      "Una selección de imágenes deportivas: partidos, competiciones, público, movimiento y momentos de intensidad.",
    featuredPhoto: {
      title: "Clásico de Copa",
      location: "España",
      date: "2025",
      image: "/coverages/clasico.jpg",
    },
    photos: [
      {
        title: "Partido en directo",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ambiente de grada",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Competición urbana",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Entrenamiento",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Momento de juego",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Celebración deportiva",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Campo y acción",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Velocidad",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Competición",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },

  "temas-sociales": {
    type: "temas-sociales",
    label: "Temas sociales",
    title: "Historias sociales, calle y realidad urbana.",
    intro:
      "Fotografía centrada en personas, comunidad, movilizaciones, espacios públicos y temas sociales de actualidad.",
    featuredPhoto: {
      title: "Movilización en Atocha",
      location: "Madrid",
      date: "2024",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1800&auto=format&fit=crop",
    },
    photos: [
      {
        title: "Vida urbana",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Comunidad",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Manifestación",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1453873531674-2151bcd01707?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Espacio público",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Historias cotidianas",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Calle y contexto",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Mirada social",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Encuentro ciudadano",
        location: "Madrid",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Barrio y comunidad",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },

  "fiestas-tradicionales": {
    type: "fiestas-tradicionales",
    label: "Fiestas tradicionales",
    title: "Tradición, cultura popular y celebración.",
    intro:
      "Cobertura fotográfica de fiestas populares, celebraciones culturales y momentos colectivos donde la imagen cuenta la identidad de cada lugar.",
    featuredPhoto: {
      title: "San Isidro",
      location: "Madrid",
      date: "2025",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1800&auto=format&fit=crop",
    },
    photos: [
      {
        title: "Celebración popular",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Tradición en la calle",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Fiesta local",
        location: "Valencia",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Cultura popular",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Ambiente festivo",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Encuentro cultural",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Calles en fiesta",
        location: "Madrid",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Música y tradición",
        location: "España",
        date: "2024",
        image:
          "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1400&auto=format&fit=crop",
      },
      {
        title: "Fiesta popular",
        location: "España",
        date: "2025",
        image:
          "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1400&auto=format&fit=crop",
      },
    ],
  },
};