"use client";

import { useState } from "react";
import { CalendarDays, Loader2, MapPin, MessageSquare, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const coverageTypes = [
  "Política",
  "Deportes",
  "Temas sociales",
  "Fiestas tradicionales",
  "Acto institucional",
  "Evento privado",
];

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  coverageType: string;
  date: string;
  location: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  coverageType: "",
  date: "",
  location: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialFormState);
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  function updateField(name: keyof ContactFormState, value: string) {
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage("");
    setStatusType("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatusMessage("Nombre, email y mensaje son obligatorios.");
      setStatusType("error");
      return;
    }

    try {
      setIsSending(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message ?? "No se pudo enviar la solicitud.");
      }

      setForm(initialFormState);
      setStatusMessage("Solicitud enviada correctamente. David la recibirá por email.");
      setStatusType("success");
    } catch (error) {
      console.error(error);
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar la solicitud.",
      );
      setStatusType("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
            className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="tu@email.com"
            className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
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
            value={form.coverageType}
            onChange={(event) =>
              updateField("coverageType", event.target.value)
            }
            className="h-12 w-full rounded-2xl border bg-background px-4 text-sm outline-none transition focus:border-primary"
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
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Fecha del evento
          </label>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="date"
              name="date"
              type="date"
              value={form.date}
              onChange={(event) => updateField("date", event.target.value)}
              className="h-12 w-full rounded-2xl border bg-background px-4 pl-11 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="location" className="mb-2 block text-sm font-medium">
            Lugar
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={(event) => updateField("location", event.target.value)}
              placeholder="Ciudad o dirección"
              className="h-12 w-full rounded-2xl border bg-background px-4 pl-11 text-sm outline-none transition focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Mensaje
        </label>
        <div className="relative">
          <MessageSquare className="pointer-events-none absolute left-4 top-4 size-4 text-muted-foreground" />
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Describe brevemente el evento, horario, necesidades de cobertura o cualquier detalle importante."
            rows={6}
            className="w-full resize-none rounded-2xl border bg-background px-4 py-4 pl-11 text-sm outline-none transition focus:border-primary"
          />
        </div>
      </div>

      {statusMessage && (
        <p
          className={`rounded-2xl border px-4 py-3 text-sm ${
            statusType === "success"
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {statusMessage}
        </p>
      )}

      <Separator />

      <Button
        type="submit"
        size="lg"
        disabled={isSending}
        className="w-full rounded-full"
      >
        {isSending ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" />
            Enviando solicitud...
          </>
        ) : (
          <>
            Enviar solicitud
            <Send className="ml-2 size-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Respuesta sujeta a disponibilidad y características de la cobertura.
      </p>
    </form>
  );
}