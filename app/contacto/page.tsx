import Reveal from "@/components/animations/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Mail, Phone } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden px-6 py-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1800&auto=format&fit=crop"
            alt="Contacto para cobertura fotográfica"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-6 rounded-full px-4 py-2">
                Contacto
              </Badge>

              <h1>Solicita una cobertura fotográfica.</h1>

              <p className="mt-7 text-lg">
                Para eventos deportivos, actos políticos, temas sociales,
                fiestas tradicionales o reportajes documentales, puedes enviar
                una solicitud con los detalles principales de la cobertura.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Card className="rounded-3xl">
                  <CardContent className="p-6">
                    <Mail className="mb-4 size-7" />
                    <h3 className="text-xl">Correo</h3>
                    <a
                      href="mailto:davidxlacalle@gmail.com"
                      className="mt-2 block text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      davidxlacalle@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl">
                  <CardContent className="p-6">
                    <Phone className="mb-4 size-7" />
                    <h3 className="text-xl">Móvil</h3>
                    <a
                      href="tel:+34625941334"
                      className="mt-2 block text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      625 941 334
                    </a>
                  </CardContent>
                </Card>

                <Card className="rounded-3xl sm:col-span-2">
                  <CardContent className="p-6">
                    <Camera className="mb-4 size-7" />
                    <h3 className="text-xl">Instagram</h3>
                    <a
                      href="https://www.instagram.com/davidxlacalle"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      @davidxlacalle
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="rounded-[2rem] border bg-card/95 shadow-xl backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="mb-8">
                  <Badge variant="outline" className="mb-4 rounded-full">
                    Solicitud de cobertura
                  </Badge>

                  <h2 className="text-3xl">Cuéntanos los detalles.</h2>

                  <p className="mt-3 text-sm">
                    Completa la información básica para valorar disponibilidad,
                    desplazamiento y necesidades del reportaje.
                  </p>
                </div>

                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}