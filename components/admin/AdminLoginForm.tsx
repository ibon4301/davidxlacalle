"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Loader2, LogIn } from "lucide-react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminLoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !password.trim()) {
      setErrorMessage("Introduce email y contraseña.");
      return;
    }

    try {
      setIsLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        throw error;
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMessage("No se pudo iniciar sesión. Revisa email y contraseña.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-28 md:px-12 lg:px-20">
      <section className="mx-auto max-w-md">
        <div className="mb-10 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground">
            <Camera className="size-4" />
            Panel privado
          </span>

          <h1 className="text-5xl">Acceso admin.</h1>

          <p className="mt-5 text-muted-foreground">
            Inicia sesión para gestionar las fotografías de David Canales.
          </p>
        </div>

        <Card className="rounded-[2rem]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border bg-background px-4 py-3 outline-none transition focus:border-foreground"
                />
              </div>

              {errorMessage && (
                <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 size-4" />
                    Entrar
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