import Link from "next/link";
import { Camera, Mail, MapPin } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="max-w-xl text-primary-foreground">
              Cobertura visual para eventos que merecen ser documentados.
            </h2>

            <p className="mt-6 max-w-md text-primary-foreground/70">
              Fotografía documental y de actualidad para política, deporte,
              cultura, activismo, actos oficiales y eventos acreditados.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.25em] text-primary-foreground/60">
              Navegación
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-primary-foreground/80">
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#coberturas">Coberturas</Link>
              <Link href="#enfoque">Enfoque</Link>
              <Link href="#servicios">Servicios</Link>
              <Link href="#contacto">Contacto</Link>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.25em] text-primary-foreground/60">
              Contacto
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-primary-foreground/80">
              <p className="flex items-center gap-3">
                <Mail className="size-4" />
                contacto@davidcanales.com
              </p>

              <p className="flex items-center gap-3">
                <Camera className="size-4" />
                @davidcanales
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="size-4" />
                España
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col justify-between gap-4 text-sm text-primary-foreground/50 md:flex-row">
          <p>© 2026 David Canales. Todos los derechos reservados.</p>
          <p>Fotoperiodismo · Eventos · Actualidad · Documental</p>
        </div>
      </div>
    </footer>
  );
}