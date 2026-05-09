import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { GallerySection } from "@/lib/gallerySections";
import { getReportagesByType } from "@/lib/reportages";
import { ArrowLeft, ArrowRight, Calendar, Camera, MapPin } from "lucide-react";

type ArchivePageProps = {
  section: GallerySection;
};

const sectionLinks = {
  politica: "/politica",
  deportes: "/deportes",
  "temas-sociales": "/temas-sociales",
  "fiestas-tradicionales": "/fiestas-tradicionales",
};

export default function ArchivePage({ section }: ArchivePageProps) {
  const reportages = getReportagesByType(section.type);

  return (
    <main className="min-h-screen pt-20">
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Button asChild variant="outline" className="mb-10 rounded-full">
              <Link href={sectionLinks[section.type]}>
                <ArrowLeft className="mr-2 size-4" />
                Volver a {section.label.toLowerCase()}
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-12 max-w-4xl">
              <Badge variant="outline" className="mb-5 rounded-full">
                Archivo · {section.label}
              </Badge>

              <h1>Archivo completo de {section.label.toLowerCase()}.</h1>

              <p className="mt-6 text-lg">
                Selección de coberturas, reportajes y galerías fotográficas
                dentro de la sección de {section.label.toLowerCase()}.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reportages.map((reportage, index) => (
              <Reveal key={reportage.slug} delay={index * 0.05}>
                <Link href={`/reportajes/${reportage.slug}`} className="block h-full">
                  <Card className="group h-full overflow-hidden rounded-[2rem] border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={reportage.coverImage}
                        alt={reportage.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <Badge className="absolute left-4 top-4 rounded-full bg-background text-foreground">
                        {reportage.categoryLabel}
                      </Badge>

                      <div className="absolute bottom-0 left-0 p-5">
                        <h2 className="text-3xl text-primary-foreground">
                          {reportage.title}
                        </h2>

                        <div className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/75">
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="size-4" />
                            {reportage.location}
                          </span>

                          <span className="inline-flex items-center gap-2">
                            <Calendar className="size-4" />
                            {reportage.date}
                          </span>

                          <span className="inline-flex items-center gap-2">
                            <Camera className="size-4" />
                            {reportage.gallery.length} fotografías
                          </span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <p className="text-sm">{reportage.excerpt}</p>

                      <span className="mt-5 inline-flex items-center text-sm font-medium text-foreground">
                        Ver cobertura
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
    </main>
  );
}