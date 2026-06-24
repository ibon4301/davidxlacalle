"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImagePlus, Loader2, Save } from "lucide-react";

import type { CmsPhoto } from "@/lib/galleryService";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sectionOptions = [
  { value: "politica", label: "Política" },
  { value: "deportes", label: "Deportes" },
  { value: "temas-sociales", label: "Temas sociales" },
  { value: "fiestas-tradicionales", label: "Fiestas tradicionales" },
];

function slugifyFileName(fileName: string) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "");
}

type EditPhotoFormProps = {
  photo: CmsPhoto;
};

export default function EditPhotoForm({ photo }: EditPhotoFormProps) {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState(photo.title);
  const [sectionType, setSectionType] = useState(photo.type);
  const [location, setLocation] = useState(photo.location);
  const [photoDate, setPhotoDate] = useState(photo.date);
  const [featured, setFeatured] = useState(photo.featured);
  const [sortOrder, setSortOrder] = useState(photo.order);

  const [newFile, setNewFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>(photo.image);

  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setNewFile(null);
      setPreviewUrl(photo.image);
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setErrorMessage("El archivo seleccionado no es una imagen.");
      setNewFile(null);
      setPreviewUrl(photo.image);
      return;
    }

    setErrorMessage("");
    setNewFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  }

  async function uploadNewImageIfNeeded() {
    if (!newFile) {
      return photo.image;
    }

    const cleanFileName = slugifyFileName(newFile.name);
    const filePath = `${sectionType}/${Date.now()}-${cleanFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(filePath, newFile, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      throw uploadError;
    }

    const { data: publicUrlData } = supabase.storage
      .from("gallery")
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!title.trim()) {
      setErrorMessage("El título no puede estar vacío.");
      return;
    }

    try {
      setIsSaving(true);

      const imageUrl = await uploadNewImageIfNeeded();

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
          image_url: imageUrl,
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
        "No se pudo guardar la fotografía. Revisa Supabase, la imagen o las políticas del bucket.",
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
            Modifica los datos de la imagen, su sección, orden, fotografía
            destacada o sustituye la imagen actual por una nueva.
          </p>
        </div>

        <Card className="overflow-hidden rounded-[2rem]">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div className="space-y-4">
              <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border bg-muted">
                <img
                  src={previewUrl}
                  alt={title || photo.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {newFile && (
                <p className="rounded-2xl border px-4 py-3 text-sm text-muted-foreground">
                  Nueva imagen seleccionada:{" "}
                  <span className="font-medium text-foreground">
                    {newFile.name}
                  </span>
                </p>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Sustituir imagen
                </label>

                <div className="rounded-2xl border bg-background p-4">
                  <label className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed px-4 py-6 text-sm text-muted-foreground transition hover:border-foreground hover:text-foreground">
                    <ImagePlus className="size-5" />
                    Seleccionar nueva imagen
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  <p className="mt-3 text-xs text-muted-foreground">
                    Si no seleccionas ninguna imagen, se mantendrá la actual.
                  </p>
                </div>
              </div>

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