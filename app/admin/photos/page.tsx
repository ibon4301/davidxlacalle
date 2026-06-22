import Link from "next/link";
import { ArrowLeft, Camera, CheckCircle2, Star } from "lucide-react";

import { getAdminPhotos } from "@/lib/galleryService";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function getSectionLabel(type: string) {
  const labels: Record<string, string> = {
    politica: "Política",
    deportes: "Deportes",
    "temas-sociales": "Temas sociales",
    "fiestas-tradicionales": "Fiestas tradicionales",
  };

  return labels[type] ?? type;
}

export default async function AdminPhotosPage() {
  const photos = await getAdminPhotos();

  return (
    <main className="min-h-screen bg-background px-6 py-28 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Button asChild variant="ghost" className="mb-6 rounded-full px-0">
              <Link href="/admin">
                <ArrowLeft className="mr-2 size-4" />
                Volver al panel
              </Link>
            </Button>

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
              <Camera className="size-4" />
              Fotos desde Supabase
            </span>

            <h1 className="text-5xl md:text-7xl">Fotografías.</h1>

            <p className="mt-5 max-w-2xl text-muted-foreground">
              Listado de imágenes cargadas desde la tabla{" "}
              <code>photos</code>. Aquí comprobaremos que el CMS está
              funcionando antes de crear el formulario de subida.
            </p>
          </div>

          <Button asChild className="rounded-full">
            <Link href="/admin/photos/new">Subir foto</Link>
          </Button>
        </div>

        {photos.length === 0 ? (
          <Card className="rounded-[2rem]">
            <CardContent className="p-10">
              <h2 className="text-3xl">Todavía no hay fotos en Supabase.</h2>
              <p className="mt-4 text-muted-foreground">
                Inserta alguna fila en la tabla photos para verla aparecer aquí.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {photos.map((photo) => (
              <Card
                key={photo.id}
                className="overflow-hidden rounded-[2rem]"
              >
                <div className="relative h-72">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge className="rounded-full bg-background text-foreground">
                      {getSectionLabel(photo.type)}
                    </Badge>

                    {photo.featured && (
                      <Badge className="rounded-full bg-primary text-primary-foreground">
                        <Star className="mr-1 size-3" />
                        Destacada
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h2 className="text-2xl">{photo.title}</h2>

                  <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                    <p>Ubicación: {photo.location || "Sin ubicación"}</p>
                    <p>Fecha: {photo.date || "Sin fecha"}</p>
                    <p>Orden: {photo.order}</p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4" />
                    Activa en la web
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}