"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "Política", href: "/politica" },
  { label: "Deportes", href: "/deportes" },
  { label: "Temas sociales", href: "/temas-sociales" },
  { label: "Fiestas tradicionales", href: "/fiestas-tradicionales" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-full bg-primary text-primary-foreground transition duration-500 group-hover:scale-110">
            <span className="absolute inset-0 translate-y-full bg-foreground transition duration-500 group-hover:translate-y-0" />
            <Camera className="relative z-10 size-5 transition duration-500 group-hover:rotate-[-12deg]" />
          </span>

          <div className="leading-tight">
            <p className="font-serif text-xl font-semibold">David Canales</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Fotoperiodista
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative rounded-full px-4 py-2 text-sm transition duration-300 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-primary/10 blur-md transition duration-500 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />

                <span
                  className={`absolute inset-0 rounded-full border transition duration-500 ${
                    isActive
                      ? "border-border bg-card/80 shadow-sm"
                      : "border-transparent bg-card/0 group-hover:border-border group-hover:bg-card/80 group-hover:shadow-sm"
                  }`}
                />

                <span
                  className={`relative z-10 inline-flex transition duration-300 ${
                    isActive
                      ? "-translate-y-0.5"
                      : "translate-y-0 group-hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-foreground transition-all duration-500 ${
                    isActive ? "w-8" : "w-0 group-hover:w-8"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Button
          asChild
          className="group hidden overflow-hidden rounded-full md:inline-flex"
        >
          <Link href="/contacto" className="relative">
            <span className="relative z-10">Solicitar cobertura</span>
            <span className="absolute inset-0 -translate-x-full bg-foreground/15 transition duration-500 group-hover:translate-x-0" />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="p-6">
            <div className="mb-8">
              <p className="font-serif text-2xl font-semibold">
                David Canales
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Fotoperiodista
              </p>
            </div>

            <Separator className="mb-8" />

            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative overflow-hidden rounded-2xl border px-4 py-4 text-lg transition duration-300 ${
                      isActive
                        ? "border-border bg-secondary text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-1 bg-primary transition duration-300 ${
                        isActive
                          ? "translate-x-0"
                          : "-translate-x-full group-hover:translate-x-0"
                      }`}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <Button asChild className="mt-8 w-full rounded-full">
              <Link href="/contacto">Solicitar cobertura</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}