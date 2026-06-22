import Link from "next/link";

import CountUp from "@/components/animations/Countup";
import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  AtSign,
  Building2,
  Camera,
  FileText,
  Mail,
  Newspaper,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

const sections = [
  {
    title: "Política",
    href: "/politica",
    description:
      "Actos institucionales, campañas, comparecencias y actualidad pública.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Deportes",
    href: "/deportes",
    description:
      "Partidos, competiciones, público, movimiento y momentos de intensidad.",
    image: "/coverages/clasico.jpg",
  },
  {
    title: "Temas sociales",
    href: "/temas-sociales",
    description:
      "Movilizaciones, historias humanas, comunidad y realidad urbana.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Fiestas tradicionales",
    href: "/fiestas-tradicionales",
    description:
      "Celebraciones populares, cultura local, tradición y ambiente colectivo.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1400&auto=format&fit=crop",
  },
];

const featuredCoverages = [
  {
    title: "San Isidro entre calles, música y tradición",
    category: "Fiestas tradicionales",
    location: "Madrid · 2025",
    description:
      "Una mirada visual a la celebración popular, el ambiente de la ciudad y los momentos espontáneos de la fiesta.",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1400&auto=format&fit=crop",
    href: "/fiestas-tradicionales",
  },
  {
    title: "Actividad parlamentaria y actualidad política",
    category: "Política",
    location: "Madrid · Congreso",
    description:
      "Fotografía documental de actos institucionales, comparecencias, ruedas de prensa y entorno político.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1400&auto=format&fit=crop",
    href: "/politica",
  },
  {
    title: "Clásico de Copa: Barcelona vs Real Madrid",
    category: "Deportes",
    location: "España · 2025",
    description:
      "Cobertura deportiva centrada en la intensidad, el ambiente, los protagonistas y los momentos clave del encuentro.",
    image: "/coverages/clasico.jpg",
    href: "/deportes",
  },
];

const services = [
  {
    icon: Trophy,
    title: "Eventos deportivos",
    text: "Cobertura de partidos, competiciones, eventos acreditados y momentos de acción.",
  },
  {
    icon: Building2,
    title: "Actos políticos",
    text: "Fotografía documental de actos oficiales, instituciones, campañas y comparecencias.",
  },
  {
    icon: Newspaper,
    title: "Reportajes sociales",
    text: "Cobertura visual de temas sociales, actualidad, comunidad y vida urbana.",
  },
];

const socialLinks = [
  {
    name: "@davidxlacalle",
    icon: Camera,
    href: "https://www.instagram.com/davidxlacalle",
  },
  {
    name: "davidxlacalle@gmail.com",
    icon: Mail,
    href: "mailto:davidxlacalle@gmail.com",
  },
  {
    name: "Contacto",
    icon: AtSign,
    href: "/contacto",
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
              Fotografía documental · Actualidad · Eventos
            </Badge>

            <h1 className="max-w-5xl">
              Historias reales contadas a través de la imagen.
            </h1>

            <p className="mt-7 max-w-2xl text-lg">
              Portfolio visual de David Canales: política, deportes, temas
              sociales y fiestas tradicionales reunidos en una web donde la
              fotografía tiene todo el protagonismo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/deportes">
                  Ver galerías
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                <Link href="/contacto">Solicitar cobertura</Link>
              </Button>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t pt-8">
              <div>
                <p className="font-serif text-4xl text-foreground">
                  <CountUp to={4} duration={1.4} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Secciones
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-foreground">
                  <CountUp to={40} prefix="+" duration={1.6} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fotografías
                </p>
              </div>

              <div>
                <p className="font-serif text-4xl text-foreground">
                  <CountUp to={24} suffix="h" duration={1.4} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Respuesta
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border bg-card shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop"
                  alt="Fotografía documental social"
                  className="h-full w-full object-cover"
                />
              </div>

              <Card className="absolute -bottom-8 -left-4 max-w-xs rounded-3xl border bg-card/90 backdrop-blur md:-left-8">
                <CardContent className="p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
                    Portfolio visual
                  </p>
                  <h3 className="mt-2 text-2xl">Galerías por sección</h3>
                  <p className="mt-2 text-sm">
                    Cada bloque reúne una foto destacada y una selección visual
                    de imágenes relacionadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="secciones" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Badge variant="outline" className="mb-4 rounded-full">
                Secciones
              </Badge>

              <h2>Cuatro áreas visuales para explorar su trabajo.</h2>

              <p className="mt-6 text-lg">
                La web se organiza en secciones claras para que cada tipo de
                cobertura tenga su propio espacio y las fotografías se puedan
                ver de forma directa.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.08}>
                <Link href={section.href} className="block h-full">
                  <Card className="group h-full overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                      <div className="absolute bottom-0 left-0 p-5">
                        <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
                          Sección
                        </p>

                        <h3 className="mt-2 text-2xl text-primary-foreground">
                          {section.title}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-sm">{section.description}</p>

                      <span className="mt-6 inline-flex items-center text-sm font-medium text-foreground">
                        Ver galería
                        <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="portfolio"
        className="bg-secondary/60 px-6 py-24 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Badge variant="outline" className="mb-4 rounded-full">
                  Portfolio
                </Badge>

                <h2>Coberturas destacadas.</h2>
              </div>

              <p className="max-w-md">
                Una selección inicial de imágenes y temas que representan el
                enfoque documental de la web.
              </p>
            </div>
          </Reveal>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {featuredCoverages.map((coverage, index) => (
              <Reveal key={coverage.title} delay={index * 0.1}>
                <Link href={coverage.href} className="block h-full">
                  <Card className="group relative h-[620px] overflow-hidden rounded-[2rem] border bg-card transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={coverage.image}
                      alt={coverage.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <Badge className="mb-4 w-fit rounded-full bg-background text-foreground">
                        {coverage.category}
                      </Badge>

                      <h3 className="max-w-sm text-3xl text-primary-foreground">
                        {coverage.title}
                      </h3>

                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
                        {coverage.location}
                      </p>

                      <Separator className="my-4 bg-primary-foreground/15" />

                      <p className="max-w-sm text-sm text-primary-foreground/75">
                        {coverage.description}
                      </p>

                      <span className="mt-6 inline-flex items-center text-sm font-medium text-primary-foreground">
                        Ver sección
                        <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre-david" className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Trabajo documental de David"
                className="aspect-[4/5] h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Badge variant="outline" className="mb-4 rounded-full">
              Sobre David
            </Badge>

            <h2>Una mirada documental centrada en lo que ocurre.</h2>

            <p className="mt-6 text-lg">
              David desarrolla una fotografía cercana a la actualidad, los
              eventos sociales y la vida pública. Su trabajo busca mostrar cada
              escena desde una mirada visual, directa y periodística.
            </p>

            <p className="mt-4 text-lg">
              Esta web está pensada para que sus fotografías destaquen por
              encima de todo: imágenes amplias, galerías limpias y una
              navegación sencilla por temática.
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
                  <p className="mt-2 text-sm">Lugar, fecha y relato visual.</p>
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

      <section id="servicios" className="bg-secondary/60 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Badge variant="outline" className="mb-4 rounded-full">
                Coberturas
              </Badge>

              <h2>Cobertura profesional para distintos tipos de evento.</h2>

              <p className="mt-6 text-lg">
                La web facilita que una persona, entidad o medio pueda contactar
                con David para solicitar una cobertura fotográfica.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={index * 0.1}>
                  <Card className="h-full rounded-3xl">
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

      <section id="contacto" className="px-6 py-24 md:px-12 lg:px-20">
        <Reveal>
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-primary-foreground md:px-14 md:py-16">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <Badge className="mb-7 rounded-full bg-primary-foreground text-primary">
                  Contacto para coberturas
                </Badge>

                <h2 className="max-w-4xl text-primary-foreground">
                  Solicita disponibilidad para eventos, prensa y proyectos
                  documentales.
                </h2>

                <p className="mt-7 max-w-2xl text-primary-foreground/70">
                  Contacta con David para coberturas deportivas, actos políticos,
                  fiestas tradicionales, temas sociales o reportajes especiales.
                </p>
              </div>

              <div className="flex flex-col gap-7 lg:items-end">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full rounded-full px-8 lg:w-[450px]"
                >
                  <Link href="/contacto">Solicitar cobertura</Link>
                </Button>

                <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-[450px]">
                  <a
                    href="https://www.instagram.com/davidxlacalle"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/80 transition hover:bg-primary-foreground hover:text-primary"
                  >
                    <Camera className="size-4" />
                    @davidxlacalle
                  </a>

                  <a
                    href="mailto:davidxlacalle@gmail.com"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground/80 transition hover:bg-primary-foreground hover:text-primary"
                  >
                    <Mail className="size-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}