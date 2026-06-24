"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Save } from "lucide-react";

import type { CmsPhoto } from "@/lib/galleryService";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sectionOptions = [
  { value: "politica", label: "Política" },
  { value: "deportes", label: "Deportes" },
  { value: "temas-sociales", label: "Temas sociales" },
  { value: "fiestas-tradicionales", label: "Fiestas tradicionales" },
];

type EditPhotoFormProps = {
  photo: CmsPhoto;
};

export default function EditPhotoForm({ photo }: EditPhotoFormProps) {
  const router = useRouter();

  const [title, setTitle] = useState(photo.title);
  const [sectionType, setSectionType] = useState(photo.type);
  const [location, setLocation] = useState(photo.location);
  const [photoDate, setPhotoDate] = useState(photo.date);
  const [featured, setFeatured] = useState(photo.featured);
  const [sortOrder, setSortOrder] = useState(photo.order);

  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!title.trim()) {
      setErrorMessage("El título no puede estar vacío.");
      return;
    }

    try {
      setIsSaving(true);

      if (featured) {
        const { error: featuredError } = await supabase
          .from("photos")
          .update({ featured: false })
          .eq("section_type", sectionType)
          .neq("id", photo.id);

        if (featuredError) {
          throw featuredError;
        }
      }
      
      const { error } = await supabase
        .from("photos")
        .update({
          title: title.trim(),
          section_type: sectionType,
          location: location.trim() || null,
          photo_date: photoDate.trim() || null,
          featured,
          sort_order: sortOrder,
        })
        .eq("id", photo.id);

      if (error) {
        throw error;
      }

      router.push("/admin/photos");
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "No se pudo guardar la fotografía. Revisa las políticas de Supabase.",
      );
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-28 md:px-12 lg:px-20">
      <section className="mx-auto max-w-5xl">
        <Button asChild variant="ghost" className="mb-8 rounded-full px-0">
          <Link href="/admin/photos">
            <ArrowLeft className="mr-2 size-4" />
            Volver a fotografías
          </Link>
        </Button>

        <div className="mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Editar fotografía
          </span>

          <h1 className="text-5xl md:text-7xl">Editar foto.</h1>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Modifica los datos de la imagen, su sección, orden o si debe aparecer
            como fotografía destacada.
          </p>
        </div>

        <Card className="overflow-hidden rounded-[2rem]">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border bg-muted">
              <img
                src={photo.image}
                alt={photo.title}
                className="h-full w-full object-cover"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">Título</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Sección
                </label>
                <select
                  value={sectionType}
                  onChange={(event) =>
                    setSectionType(event.target.value as CmsPhoto["type"])
                  }
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                >
                  {sectionOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Ubicación
                  </label>
                  <input
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="Madrid"
                    className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Fecha
                  </label>
                  <input
                    value={photoDate}
                    onChange={(event) => setPhotoDate(event.target.value)}
                    placeholder="2026"
                    className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Orden</label>
                <input
                  type="number"
                  min={0}
                  value={sortOrder}
                  onChange={(event) => setSortOrder(Number(event.target.value))}
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm">
                <input
                  type="checkbox"
                  checked={featured}
                  onChange={(event) => setFeatured(event.target.checked)}
                />
                Marcar como foto destacada de la sección
              </label>

              {errorMessage && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={isSaving}
                className="w-full rounded-full"
                size="lg"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Guardando cambios...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 size-4" />
                    Guardar cambios
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}