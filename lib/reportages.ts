export type ReportageType =
  | "politica"
  | "deportes"
  | "temas-sociales"
  | "fiestas-tradicionales";

export type Reportage = {
  slug: string;
  type: ReportageType;
  categoryLabel: string;
  title: string;
  excerpt: string;
  location: string;
  date: string;
  coverImage: string;
  description: string;
  gallery: string[];
};

export const reportages: Reportage[] = [
  // POLÍTICA
  {
    slug: "actividad-parlamentaria",
    type: "politica",
    categoryLabel: "Política",
    title: "Actividad parlamentaria",
    excerpt:
      "Cobertura documental de actos institucionales, comparecencias y entorno político.",
    location: "Madrid · Congreso",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje centrado en la actividad institucional, el ambiente político y los momentos que forman parte de la actualidad pública.",
    gallery: [
      "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "rueda-prensa-institucional",
    type: "politica",
    categoryLabel: "Política",
    title: "Rueda de prensa institucional",
    excerpt:
      "Cobertura visual de una comparecencia pública con foco en gestos, contexto y ambiente informativo.",
    location: "Madrid",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje centrado en el desarrollo de una rueda de prensa institucional, el entorno mediático y los detalles visuales del acto.",
    gallery: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "acto-publico-madrid",
    type: "politica",
    categoryLabel: "Política",
    title: "Acto público en Madrid",
    excerpt:
      "Fotografía documental de un encuentro público, con atención al espacio, asistentes y momentos clave.",
    location: "Madrid",
    date: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop",
    description:
      "Una cobertura de acto público pensada como archivo visual de actualidad y participación ciudadana.",
    gallery: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541872705-1f73c6400ec9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1400&auto=format&fit=crop",
    ],
  },

  // DEPORTES
  {
    slug: "clasico-copa",
    type: "deportes",
    categoryLabel: "Deportes",
    title: "Clásico de Copa",
    excerpt:
      "Cobertura fotográfica de evento deportivo, capturando intensidad, ambiente y protagonistas.",
    location: "España",
    date: "2025",
    coverImage: "/coverages/clasico.jpg",
    description:
      "Una cobertura deportiva enfocada en la tensión del juego, el ambiente del estadio y los momentos decisivos del encuentro.",
    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "ambiente-de-grada",
    type: "deportes",
    categoryLabel: "Deportes",
    title: "Ambiente de grada",
    excerpt:
      "Una mirada al público, la tensión previa y la energía colectiva de un evento deportivo.",
    location: "España",
    date: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje centrado en la atmósfera de grada, los detalles del entorno deportivo y la conexión entre público y competición.",
    gallery: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "competicion-urbana",
    type: "deportes",
    categoryLabel: "Deportes",
    title: "Competición urbana",
    excerpt:
      "Movimiento, acción y contexto visual en una competición desarrollada en entorno urbano.",
    location: "Madrid",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop",
    description:
      "Cobertura deportiva con especial atención al movimiento, la composición y la intensidad de la competición.",
    gallery: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
    ],
  },

  // TEMAS SOCIALES
  {
    slug: "protesta-atocha",
    type: "temas-sociales",
    categoryLabel: "Temas sociales",
    title: "Movilización en Atocha",
    excerpt:
      "Reportaje visual de una movilización social en el entorno urbano de Madrid.",
    location: "Madrid",
    date: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1600&auto=format&fit=crop",
    description:
      "Una pieza documental sobre movilización ciudadana, espacio público, presencia social y actualidad urbana.",
    gallery: [
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1453873531674-2151bcd01707?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "vida-urbana-madrid",
    type: "temas-sociales",
    categoryLabel: "Temas sociales",
    title: "Vida urbana en Madrid",
    excerpt:
      "Fotografías de calle, comunidad y escenas cotidianas dentro del espacio urbano.",
    location: "Madrid",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje visual sobre la vida diaria en la ciudad, los espacios compartidos y las pequeñas escenas que construyen memoria urbana.",
    gallery: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "comunidad-y-calle",
    type: "temas-sociales",
    categoryLabel: "Temas sociales",
    title: "Comunidad y calle",
    excerpt:
      "Un reportaje centrado en personas, encuentros y dinámicas sociales en el espacio público.",
    location: "España",
    date: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Cobertura documental de escenas sociales, comunidad y espacios de convivencia desde una mirada cercana.",
    gallery: [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=1400&auto=format&fit=crop",
    ],
  },

  // FIESTAS TRADICIONALES
  {
    slug: "san-isidro-2025",
    type: "fiestas-tradicionales",
    categoryLabel: "Fiestas tradicionales",
    title: "San Isidro 2025",
    excerpt:
      "Tradición, cultura popular y ambiente festivo en una de las celebraciones más reconocibles de Madrid.",
    location: "Madrid",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje visual centrado en la celebración popular, los detalles de la tradición y el ambiente colectivo de la ciudad.",
    gallery: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "la-tomatina-2025",
    type: "fiestas-tradicionales",
    categoryLabel: "Fiestas tradicionales",
    title: "La Tomatina 2025",
    excerpt:
      "Color, tradición y movimiento en una de las fiestas populares más reconocidas.",
    location: "Buñol · Valencia",
    date: "2025",
    coverImage:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop",
    description:
      "Reportaje visual sobre una celebración popular marcada por la energía colectiva, el color y el carácter festivo.",
    gallery: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    slug: "fiesta-local-madrid",
    type: "fiestas-tradicionales",
    categoryLabel: "Fiestas tradicionales",
    title: "Fiesta local en Madrid",
    excerpt:
      "Una mirada documental a la calle, la música y los encuentros dentro de una celebración popular.",
    location: "Madrid",
    date: "2024",
    coverImage:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    description:
      "Cobertura de una fiesta local donde la tradición, el ambiente y las personas construyen el relato visual.",
    gallery: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];

export function getReportageBySlug(slug: string) {
  return reportages.find((reportage) => reportage.slug === slug);
}

export function getReportagesByType(type: ReportageType) {
  return reportages.filter((reportage) => reportage.type === type);
}