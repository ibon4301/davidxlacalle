import Link from "next/link";
import { Camera, Code2, Mail, MapPin, Phone } from "lucide-react";

import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="max-w-xl text-primary-foreground">
              Cobertura visual para historias que merecen ser documentadas.
            </h2>

            <p className="mt-6 max-w-md text-primary-foreground/70">
              Fotografía documental y de actualidad para política, deporte,
              temas sociales, fiestas tradicionales y eventos acreditados.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.25em] text-primary-foreground/60">
              Navegación
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-primary-foreground/80">
              <Link
                href="/politica"
                className="transition hover:text-primary-foreground"
              >
                Política
              </Link>

              <Link
                href="/deportes"
                className="transition hover:text-primary-foreground"
              >
                Deportes
              </Link>

              <Link
                href="/temas-sociales"
                className="transition hover:text-primary-foreground"
              >
                Temas sociales
              </Link>

              <Link
                href="/fiestas-tradicionales"
                className="transition hover:text-primary-foreground"
              >
                Fiestas tradicionales
              </Link>

              <Link
                href="/contacto"
                className="transition hover:text-primary-foreground"
              >
                Solicitar cobertura
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-sm uppercase tracking-[0.25em] text-primary-foreground/60">
              Contacto
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-primary-foreground/80">
              <a
                href="mailto:davidxlacalle@gmail.com"
                className="flex items-center gap-3 transition hover:text-primary-foreground"
              >
                <Mail className="size-4" />
                davidxlacalle@gmail.com
              </a>

              <a
                href="tel:+34625941334"
                className="flex items-center gap-3 transition hover:text-primary-foreground"
              >
                <Phone className="size-4" />
                625 941 334
              </a>

              <a
                href="https://www.instagram.com/davidxlacalle"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-primary-foreground"
              >
                <Camera className="size-4" />
                @davidxlacalle
              </a>

              <p className="flex items-center gap-3">
                <MapPin className="size-4" />
                España
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/10" />

        <div className="flex flex-col justify-between gap-4 text-sm text-primary-foreground/50 md:flex-row">
          <p>© 2026 David Lacalle. Todos los derechos reservados.</p>

          <div className="flex flex-col gap-2 md:items-end">
            <p>Fotoperiodismo · Eventos · Actualidad · Documental</p>

            <a
              href="https://github.com/ibon4301"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-primary-foreground"
            >
              <Code2 className="size-4" />
              Diseño y desarrollo web por Ibón Balea 
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}