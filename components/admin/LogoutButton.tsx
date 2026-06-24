"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function handleLogout() {
    try {
      setIsLoggingOut(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        throw error;
      }

      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("No se pudo cerrar sesión.");
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      disabled={isLoggingOut}
      onClick={handleLogout}
      className="rounded-full"
    >
      {isLoggingOut ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Saliendo...
        </>
      ) : (
        <>
          <LogOut className="mr-2 size-4" />
          Cerrar sesión
        </>
      )}
    </Button>
  );
}