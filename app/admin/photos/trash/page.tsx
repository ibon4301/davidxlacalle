import Link from "next/link";
import { ArrowLeft, Camera, RotateCcw, Trash2 } from "lucide-react";

import { getAdminPhotos } from "@/lib/galleryService";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RestorePhotoButton from "@/components/admin/RestorePhotoButton";

function getSectionLabel(type: string) {
  const labels: Record<string, string> = {
    politica: "Política",
    deportes: "Deportes",
    "temas-sociales": "Temas sociales",
    "fiestas-tradicionales": "Fiestas tradicionales",
  };

  return labels[type] ?? type;
}

export default async function AdminTrashPhotosPage() {
  const photos = await getAdminPhotos({ active: false });

  return (
    <main className="min-h-screen bg-background px-6 py-28 md:px-12 lg:px-20">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Button asChild variant="ghost" className="mb-6 rounded-full px-0">
              <Link href="/admin/photos">
                <ArrowLeft className="mr-2 size-4" />
                Volver a fotografías
              </Link>
            </Button>

            <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
              <Trash2 className="size-4" />
              Papelera
            </span>

            <h1 className="text-5xl md:text-7xl">Fotos desactivadas.</h1>

            <p className="mt-5 max-w-2xl text-muted-foreground">
              Estas fotografías no aparecen en la web pública, pero siguen
              guardadas en Supabase. Puedes restaurarlas cuando quieras.
            </p>
          </div>

          <Button asChild className="rounded-full">
            <Link href="/admin/photos">
              <Camera className="mr-2 size-4" />
              Ver activas
            </Link>
          </Button>
        </div>

        {photos.length === 0 ? (
          <Card className="rounded-[2rem]">
            <CardContent className="p-10">
              <h2 className="text-3xl">No hay fotos desactivadas.</h2>
              <p className="mt-4 text-muted-foreground">
                Cuando quites una foto de la web aparecerá aquí.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {photos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden rounded-[2rem]">
                <div className="relative h-72">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover grayscale"
                  />

                  <div className="absolute inset-0 bg-background/30" />

                  <div className="absolute left-4 top-4 flex gap-2">
                    <Badge className="rounded-full bg-background text-foreground">
                      {getSectionLabel(photo.type)}
                    </Badge>

                    <Badge variant="outline" className="rounded-full bg-background">
                      Desactivada
                    </Badge>
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
                    <RotateCcw className="size-4" />
                    Lista para restaurar
                  </div>

                  <div className="mt-6">
                    <RestorePhotoButton
                      photoId={photo.id}
                      photoTitle={photo.title}
                    />
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