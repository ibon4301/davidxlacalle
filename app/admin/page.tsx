import Link from "next/link";
import { Camera, Images, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { requireAdmin } from "@/lib/adminAuth";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function AdminPage() {
  await requireAdmin();
  return (
    <main className="min-h-screen bg-background px-6 py-28 md:px-12 lg:px-20">
      <section className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
          <Camera className="size-4" />
          Panel privado
        </span>

        <h1 className="max-w-3xl text-5xl md:text-7xl">
          Gestión de fotografías.
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Desde aquí se gestionarán las imágenes visibles en la web de David
          Canales: foto destacada, galerías por sección y orden de aparición.
        </p>
      </div>

      <LogoutButton />
    </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-[2rem]">
            <CardContent className="p-8">
              <Images className="mb-6 size-8" />

              <h2 className="text-3xl">Fotografías</h2>

              <p className="mt-4 text-muted-foreground">
                Consulta las imágenes que vienen desde Supabase y que se
                muestran en las secciones de la web.
              </p>

              <Button asChild className="mt-8 rounded-full">
                <Link href="/admin/photos">Ver fotografías</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem]">
            <CardContent className="p-8">
              <Plus className="mb-6 size-8" />

              <h2 className="text-3xl">Subir nueva foto</h2>

              <p className="mt-4 text-muted-foreground">
                Próximamente podrás subir una imagen, elegir sección y marcarla
                como destacada.
              </p>

              <Button asChild variant="outline" className="mt-8 rounded-full">
                <Link href="/admin/photos/new">Preparar subida</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}