"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Trash2 } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

type DeactivatePhotoButtonProps = {
  photoId: string;
  photoTitle: string;
};

export default function DeactivatePhotoButton({
  photoId,
  photoTitle,
}: DeactivatePhotoButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDeactivate() {
    const confirmed = window.confirm(
      `¿Seguro que quieres quitar "${photoTitle}" de la web?`,
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);

      const { error } = await supabase
        .from("photos")
        .update({ is_active: false })
        .eq("id", photoId);

      if (error) {
        throw error;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("No se pudo desactivar la fotografía.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isDeleting}
      onClick={handleDeactivate}
      className="w-full rounded-full text-red-700 hover:text-red-800"
    >
      {isDeleting ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Quitando...
        </>
      ) : (
        <>
          <Trash2 className="mr-2 size-4" />
          Quitar de la web
        </>
      )}
    </Button>
  );
}