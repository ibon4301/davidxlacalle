"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, RotateCcw } from "lucide-react";

import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

type RestorePhotoButtonProps = {
  photoId: string;
  photoTitle: string;
};

export default function RestorePhotoButton({
  photoId,
  photoTitle,
}: RestorePhotoButtonProps) {
  const router = useRouter();
  const [isRestoring, setIsRestoring] = useState(false);

  async function handleRestore() {
    const confirmed = window.confirm(
      `¿Seguro que quieres restaurar "${photoTitle}" en la web?`,
    );

    if (!confirmed) return;

    try {
      setIsRestoring(true);

      const { error } = await supabase
        .from("photos")
        .update({ is_active: true })
        .eq("id", photoId);

      if (error) {
        throw error;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("No se pudo restaurar la fotografía.");
    } finally {
      setIsRestoring(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isRestoring}
      onClick={handleRestore}
      className="w-full rounded-full"
    >
      {isRestoring ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Restaurando...
        </>
      ) : (
        <>
          <RotateCcw className="mr-2 size-4" />
          Restaurar en la web
        </>
      )}
    </Button>
  );
}