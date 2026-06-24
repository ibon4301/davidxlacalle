"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ImagePlus, Loader2, Upload } from "lucide-react";
import Link from "next/link";

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

export default function NewPhotoForm() {
  const router = useRouter();
  const supabase = createClient();

  const [title, setTitle] = useState("");
  const [sectionType, setSectionType] = useState("deportes");
  const [location, setLocation] = useState("");
  const [photoDate, setPhotoDate] = useState("2026");
  const [featured, setFeatured] = useState(false);
  const [sortOrder, setSortOrder] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setErrorMessage("El archivo seleccionado no es una imagen.");
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    setErrorMessage("");
    setFile(selectedFile);
    setPreviewUrl(URL.createObjectURL(selectedFile));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!title.trim()) {
      setErrorMessage("Añade un título para la fotografía.");
      return;
    }

    if (!file) {
      setErrorMessage("Selecciona una imagen.");
      return;
    }

    try {
      setIsUploading(true);

      const cleanFileName = slugifyFileName(file.name);
      const filePath = `${sectionType}/${Date.now()}-${cleanFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data: publicUrlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(filePath);

      const imageUrl = publicUrlData.publicUrl;

      if (featured) {
        const { error: featuredError } = await supabase
          .from("photos")
          .update({ featured: false })
          .eq("section_type", sectionType);

        if (featuredError) {
          throw featuredError;
        }
      }

      const { error: insertError } = await supabase.from("photos").insert({
        title: title.trim(),
        section_type: sectionType,
        location: location.trim() || null,
        photo_date: photoDate.trim() || null,
        image_url: imageUrl,
        featured,
        sort_order: sortOrder,
        is_active: true,
      });

      if (insertError) {
        throw insertError;
      }

      router.push("/admin/photos");
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "No se pudo subir la fotografía. Revisa Supabase o las políticas del bucket.",
      );
    } finally {
      setIsUploading(false);
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
            <ImagePlus className="size-4" />
            Nueva fotografía
          </span>

          <h1 className="text-5xl md:text-7xl">Subir foto.</h1>

          <p className="mt-5 max-w-2xl text-muted-foreground">
            Sube una imagen al bucket de Supabase y crea automáticamente su
            registro en la tabla de fotografías.
          </p>
        </div>

        <Card className="overflow-hidden rounded-[2rem]">
          <CardContent className="grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div className="relative min-h-[420px] overflow-hidden rounded-[1.5rem] border bg-muted">
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Vista previa"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[420px] flex-col items-center justify-center p-8 text-center text-muted-foreground">
                  <ImagePlus className="mb-4 size-10" />
                  <p>Selecciona una imagen para ver la vista previa.</p>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">Imagen</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-2xl border bg-background px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Título</label>
                <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="Ej: Partido en directo"
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Sección
                </label>
                <select
                  value={sectionType}
                  onChange={(event) => setSectionType(event.target.value)}
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
                disabled={isUploading}
                className="w-full rounded-full"
                size="lg"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Subiendo fotografía...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 size-4" />
                    Subir fotografía
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