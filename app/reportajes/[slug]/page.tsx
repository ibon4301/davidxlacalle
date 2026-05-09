import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Camera, MapPin } from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getReportageBySlug,
  reportages,
  type ReportageType,
} from "@/lib/reportages";

type ReportagePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const sectionLinks: Record<ReportageType, string> = {
  politica: "/politica",
  deportes: "/deportes",
  "temas-sociales": "/temas-sociales",
  "fiestas-tradicionales": "/fiestas-tradicionales",
};

export function generateStaticParams() {
  return reportages.map((reportage) => ({
    slug: reportage.slug,
  }));
}

export async function generateMetadata({ params }: ReportagePageProps) {
  const { slug } = await params;
  const reportage = getReportageBySlug(slug);

  if (!reportage) {
    return {
      title: "Reportaje no encontrado",
    };
  }

  return {
    title: `${reportage.title} | David Lacalle`,
    description: reportage.excerpt,
  };
}

export default async function ReportagePage({ params }: ReportagePageProps) {
  const { slug } = await params;
  const reportage = getReportageBySlug(slug);

  if (!reportage) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-20">
      <section className="px-6 py-10 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Button asChild variant="outline" className="mb-8 rounded-full">
              <Link href={sectionLinks[reportage.type]}>
                <ArrowLeft className="mr-2 size-4" />
                Volver a {reportage.categoryLabel.toLowerCase()}
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="overflow-hidden rounded-[2.5rem] border bg-card shadow-sm">
              <div className="relative min-h-[520px] overflow-hidden md:min-h-[680px]">
                <img
                  src={reportage.coverImage}
                  alt={reportage.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 max-w-5xl p-6 md:p-12">
                  <Badge className="mb-5 rounded-full bg-background text-foreground">
                    {reportage.categoryLabel}
                  </Badge>

                  <h1 className="max-w-4xl text-primary-foreground">
                    {reportage.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg text-primary-foreground/75">
                    {reportage.excerpt}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/75">
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
            </article>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="sticky top-28">
              <Badge variant="outline" className="mb-4 rounded-full">
                Reportaje
              </Badge>

              <h2>Contexto visual.</h2>

              <p className="mt-6 text-lg">{reportage.description}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {reportage.gallery.map((image, index) => (
              <Reveal key={image} delay={index * 0.04}>
                <Card className="group overflow-hidden rounded-[2rem] border bg-card">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={image}
                      alt={`${reportage.title} · fotografía ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-5">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {reportage.categoryLabel}
                    </p>

                    <h3 className="mt-2 text-2xl">
                      Fotografía {index + 1}
                    </h3>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}