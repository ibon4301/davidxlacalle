import CountUp from "@/components/animations/Countup";
import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Building2,
  Camera,
  FileText,
  Newspaper,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

const coverages = [
  {
    title: "Protesta en estación de Atocha",
    category: "Activismo",
    location: "Madrid · 2024",
    description:
      "Movilización en el interior de la estación con presencia policial y bloqueo del tránsito.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Actividad parlamentaria",
    category: "Política",
    location: "Madrid · Congreso",
    description:
      "Cobertura documental de actos institucionales, comparecencias y entorno político.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Clásico de Copa: Barcelona vs Real Madrid",
    category: "Deportes",
    location: "España · 2025",
    description:
      "Cobertura documental de uno de los partidos más relevantes del calendario, con protagonismo de Pedri y Bellingham en el centro del juego.",
    image: "/coverages/clasico.jpg",
  },
];

const categories = [
  "Política",
  "Deportes",
  "Fiestas populares",
  "Activismo",
  "Actos oficiales",
  "Actualidad",
];

const services = [
  {
    icon: Trophy,
    title: "Eventos deportivos",
    text: "Cobertura acreditada en competiciones, partidos, ruedas de prensa y eventos deportivos.",
  },
  {
    icon: Building2,
    title: "Instituciones",
    text: "Actos oficiales, política, comparecencias, congresos y eventos institucionales.",
  },
  {
    icon: Newspaper,
    title: "Prensa y actualidad",
    text: "Fotografía documental para medios, archivo, comunicación y reportajes de actualidad.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden pt-20">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-6 py-16 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1800&auto=format&fit=crop"
            alt="Cobertura fotográfica documental"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/88" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-2">
              Fotoperiodismo · Actualidad · Eventos acreditados
            </Badge>

            <h1 className="max-w-5xl">
              Fotografía documental de actualidad y eventos.
            </h1>

            <p className="mt-7 max-w-2xl text-lg">
              Cobertura visual de política, deporte, cultura y movimientos
              sociales, con acceso acreditado y mirada periodística.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full px-8">
                Ver coberturas
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-full px-8">
                Solicitar disponibilidad
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t pt-8">
              <div>
                <p className="font-serif text-4xl">
                  <CountUp to={142} prefix="+" duration={1.8} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Coberturas
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl">
                  <CountUp to={12} prefix="+" duration={1.5} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ciudades
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl">
                  <CountUp to={24} suffix="h" duration={1.4} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Entrega rápida
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border bg-card shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop"
                  alt="Fotografía de evento documental"
                  className="h-full w-full object-cover"
                />
              </div>

              <Card className="absolute -bottom-8 -left-4 max-w-xs rounded-3xl border bg-card/90 backdrop-blur md:-left-8">
                <CardContent className="p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    Última cobertura
                  </p>
                  <h3 className="mt-2 text-2xl">Evento acreditado</h3>
                  <p className="mt-2 text-sm">
                    Galería documental preparada para publicarse desde un CMS
                    mediante slug.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Badge variant="outline" className="mb-4 rounded-full">
                  Portfolio
                </Badge>
                <h2>Coberturas recientes.</h2>
              </div>

              <p className="max-w-md">
                Una selección de trabajos documentales organizados por
                categoría, fecha, ubicación y contexto informativo.
              </p>
            </div>
          </Reveal>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {coverages.map((coverage, index) => (
              <Reveal key={coverage.title} delay={index * 0.1}>
                <Card className="group flex h-full min-h-[620px] flex-col overflow-hidden rounded-[2rem] border bg-card">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={coverage.image}
                      alt={coverage.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="flex flex-1 flex-col p-6">
                    <Badge variant="secondary" className="w-fit rounded-full">
                      {coverage.category}
                    </Badge>

                    <h3 className="mt-4 line-clamp-3">{coverage.title}</h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {coverage.location}
                    </p>

                    <Separator className="my-4" />

                    <p className="text-sm">{coverage.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="coberturas"
        className="bg-secondary/60 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Badge variant="outline" className="mb-4 rounded-full">
                Áreas de cobertura
              </Badge>

              <h2>Una mirada periodística aplicada a distintos escenarios.</h2>

              <p className="mt-6 text-lg">
                La web se organiza como archivo visual: política, deporte,
                fiestas populares, activismo, actos oficiales y actualidad.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Reveal key={category} delay={index * 0.05}>
                <Card className="rounded-3xl transition hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="flex items-center justify-between p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        Categoría
                      </p>
                      <h3 className="mt-2 text-2xl">{category}</h3>
                    </div>

                    <Camera className="size-5 text-muted-foreground" />
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enfoque" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Cobertura documental"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Badge variant="outline" className="mb-4 rounded-full">
              Enfoque documental
            </Badge>

            <h2>Documentar lo que ocurre, desde dentro.</h2>

            <p className="mt-6 text-lg">
              La fotografía no solo captura imágenes: también aporta contexto.
              Cada cobertura busca mostrar qué está pasando, dónde sucede y por
              qué importa.
            </p>

            <p className="mt-4 text-lg">
              Desde eventos deportivos hasta movilizaciones sociales o actos
              institucionales, el objetivo es construir un archivo visual con
              valor informativo, documental y periodístico.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <ShieldCheck className="mb-4 size-7" />
                  <h3 className="text-xl">Acceso</h3>
                  <p className="mt-2 text-sm">Coberturas acreditadas.</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <FileText className="mb-4 size-7" />
                  <h3 className="text-xl">Contexto</h3>
                  <p className="mt-2 text-sm">Lugar, fecha y relato.</p>
                </CardContent>
              </Card>

              <Card className="rounded-3xl">
                <CardContent className="p-6">
                  <Users className="mb-4 size-7" />
                  <h3 className="text-xl">Realidad</h3>
                  <p className="mt-2 text-sm">Personas, espacio y momento.</p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="servicios" className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Badge variant="outline" className="mb-4 rounded-full">
                Servicios
              </Badge>

              <h2>Cobertura profesional para distintos tipos de evento.</h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <Card className="rounded-3xl">
                    <CardContent className="p-8">
                      <Icon className="mb-6 size-8" />
                      <h3>{service.title}</h3>
                      <p className="mt-3">{service.text}</p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-primary-foreground md:px-14">
            <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <Badge className="mb-6 rounded-full bg-primary-foreground text-primary">
                  Disponible para cobertura
                </Badge>

                <h2 className="max-w-3xl text-primary-foreground">
                  Disponible para eventos, prensa y proyectos documentales.
                </h2>
              </div>

              <div>
                <p className="text-primary-foreground/70">
                  Posibilidad de desplazamiento y trabajo en distintos entornos,
                  con experiencia en eventos acreditados y cobertura en directo.
                </p>

                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-8 rounded-full px-8"
                >
                  Solicitar cobertura
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}