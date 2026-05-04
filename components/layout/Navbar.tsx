"use client";

import Link from "next/link";
import { Camera, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Coberturas", href: "#coberturas" },
  { label: "Enfoque", href: "#enfoque" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Camera className="size-5" />
          </span>

          <div className="leading-tight">
            <p className="font-serif text-xl font-semibold">David Canales</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Fotoperiodista
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Button className="hidden rounded-full md:inline-flex">
          Solicitar cobertura
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-6">
            <div className="mb-8">
              <p className="font-serif text-2xl font-semibold">David Canales</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Fotoperiodista
              </p>
            </div>

            <Separator className="mb-8" />

            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg text-muted-foreground transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Button className="mt-8 w-full rounded-full">
              Solicitar cobertura
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}