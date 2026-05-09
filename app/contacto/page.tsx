import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  CalendarDays,
  Camera,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
} from "lucide-react";

const coverageTypes = [
  "Política",
  "Deportes",
  "Temas sociales",
  "Fiestas tradicionales",
  "Acto institucional",
  "Evento privado",
];

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

                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Nombre
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tu nombre"
                        className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Teléfono
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+34 600 000 000"
                        className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="coverageType"
                        className="mb-2 block text-sm font-medium"
                      >
                        Tipo de cobertura
                      </label>
                      <select
                        id="coverageType"
                        name="coverageType"
                        className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Selecciona una opción
                        </option>

                        {coverageTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="date"
                        className="mb-2 block text-sm font-medium"
                      >
                        Fecha del evento
                      </label>
                      <div className="relative">
                        <CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="date"
                          name="date"
                          type="date"
                          className="h-12 w-full rounded-2xl border bg-background px-4 pl-11 text-sm outline-none transition focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="mb-2 block text-sm font-medium"
                      >
                        Lugar
                      </label>
                      <div className="relative">
                        <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          id="location"
                          name="location"
                          type="text"
                          placeholder="Ciudad o dirección"
                          className="h-12 w-full rounded-2xl border bg-background px-4 pl-11 text-sm outline-none transition focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Mensaje
                    </label>
                    <div className="relative">
                      <MessageSquare className="pointer-events-none absolute left-4 top-4 size-4 text-muted-foreground" />
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Describe brevemente el evento, horario, necesidades de cobertura o cualquier detalle importante."
                        rows={6}
                        className="w-full resize-none rounded-2xl border bg-background px-4 py-4 pl-11 text-sm outline-none transition focus:border-primary"
                      />
                    </div>
                  </div>

                  <Separator />

                  <Button type="button" size="lg" className="w-full rounded-full">
                    Enviar solicitud
                    <Send className="ml-2 size-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Respuesta sujeta a disponibilidad y características de la
                    cobertura.
                  </p>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </main>
  );
}