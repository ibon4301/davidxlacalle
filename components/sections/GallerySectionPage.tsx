"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Reveal from "@/components/animations/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CmsGallerySection } from "@/lib/galleryService";
import {
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";

type GallerySectionPageProps = {
  section: CmsGallerySection;
};

type SlideDirection = "next" | "previous";

const smoothEase = [0.22, 1, 0.36, 1] as const;
const exitEase = [0.4, 0, 1, 1] as const;

const lightboxVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(10px)",
    transition: {
      duration: 0.35,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.25,
      ease: exitEase,
    },
  },
};

const imageVariants = {
  enter: (direction: SlideDirection) => ({
    opacity: 0,
    x: direction === "next" ? 80 : -80,
    scale: 0.96,
    filter: "blur(12px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: smoothEase,
    },
  },
  exit: (direction: SlideDirection) => ({
    opacity: 0,
    x: direction === "next" ? -80 : 80,
    scale: 0.98,
    filter: "blur(10px)",
    transition: {
      duration: 0.28,
      ease: exitEase,
    },
  }),
};

const infoVariants = {
  enter: {
    opacity: 0,
    y: 18,
    filter: "blur(8px)",
  },
  center: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      delay: 0.08,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(8px)",
    transition: {
      duration: 0.18,
    },
  },
};

export default function GallerySectionPage({
  section,
}: GallerySectionPageProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(
    null,
  );

  const [slideDirection, setSlideDirection] =
    useState<SlideDirection>("next");

  const selectedPhoto =
    selectedPhotoIndex !== null ? section.photos[selectedPhotoIndex] : null;

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const openLightbox = (index: number) => {
    setSlideDirection("next");
    setSelectedPhotoIndex(index);
  };

  const showPreviousPhoto = () => {
    setSlideDirection("previous");

    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0 ? section.photos.length - 1 : currentIndex - 1;
    });
  };

  const showNextPhoto = () => {
    setSlideDirection("next");

    setSelectedPhotoIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === section.photos.length - 1 ? 0 : currentIndex + 1;
    });
  };

  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      }

      if (event.key === "ArrowRight") {
        showNextPhoto();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhotoIndex]);

  return (
    <main className="min-h-screen pt-20">
      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <Badge variant="outline" className="mb-5 rounded-full">
                {section.label}
              </Badge>

              <h1>{section.title}</h1>

              <p className="mt-6 text-lg">{section.intro}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="group relative min-h-[520px] overflow-hidden rounded-[2.5rem] border bg-card shadow-sm md:min-h-[680px]">
              <img
                src={section.featuredPhoto.image}
                alt={section.featuredPhoto.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 md:left-10 md:top-10">
                <Badge className="rounded-full bg-background text-foreground">
                  Foto destacada
                </Badge>
              </div>

              <div className="absolute bottom-0 left-0 max-w-4xl p-6 md:p-10">
                <Badge className="mb-5 rounded-full bg-primary text-primary-foreground">
                  {section.label}
                </Badge>

                <h2 className="max-w-3xl text-primary-foreground">
                  {section.featuredPhoto.title}
                </h2>

                <div className="mt-7 flex flex-wrap gap-4 text-sm text-primary-foreground/75">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="size-4" />
                    {section.featuredPhoto.location}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Calendar className="size-4" />
                    {section.featuredPhoto.date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Camera className="size-4" />
                    {section.photos.length} fotografías
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Badge variant="outline" className="mb-4 rounded-full">
                  Galería
                </Badge>

                <h2>Fotografías de {section.label.toLowerCase()}.</h2>
              </div>

              <p className="max-w-md">
                Selección visual de imágenes dentro de esta sección. Pulsa
                sobre cualquier fotografía para verla en grande.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.photos.map((photo, index) => (
              <Reveal key={`${photo.title}-${index}`} delay={index * 0.04}>
                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  className="block h-full w-full rounded-[2rem] text-left outline-none ring-0 transition focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Card className="group relative h-[560px] overflow-hidden rounded-[2rem] border bg-card transition duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 transition duration-700 ease-out group-hover:opacity-100" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-700 ease-out group-hover:opacity-100">
                      <span className="translate-y-3 rounded-full bg-background px-5 py-3 text-sm font-medium text-foreground shadow-lg transition duration-700 ease-out group-hover:translate-y-0">
                        Ver fotografía
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-4 rounded-full bg-background text-foreground">
                        {section.label}
                      </Badge>

                      <h3 className="text-3xl text-primary-foreground">
                        {photo.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                        <span>{photo.location}</span>
                        <span>·</span>
                        <span>{photo.date}</span>
                      </div>
                    </div>
                  </Card>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedPhoto && selectedPhotoIndex !== null && (
          <motion.div
            key="lightbox"
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-6"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: smoothEase,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.25,
                },
              }}
            />

            <Button
              type="button"
              onClick={closeLightbox}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:right-8 md:top-8"
              aria-label="Cerrar imagen"
            >
              <X className="size-5" />
            </Button>

            <Button
              type="button"
              onClick={showPreviousPhoto}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 z-20 rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:left-8"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="size-6" />
            </Button>

            <Button
              type="button"
              onClick={showNextPhoto}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 z-20 rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-black md:right-8"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="size-6" />
            </Button>

            <div className="relative z-10 flex h-full w-full max-w-7xl flex-col items-center justify-center">
              <div className="relative flex min-h-[48vh] w-full items-center justify-center overflow-hidden rounded-[2rem] md:min-h-[66vh]">
                <AnimatePresence mode="wait" custom={slideDirection}>
                  <motion.img
                    key={selectedPhoto.image}
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    custom={slideDirection}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="max-h-[78vh] w-auto max-w-full rounded-[2rem] object-contain shadow-2xl"
                    draggable={false}
                  />
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedPhoto.title}-${selectedPhotoIndex}`}
                  variants={infoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="mt-6 w-full max-w-4xl text-center"
                >
                  <Badge className="mb-4 rounded-full bg-white text-black">
                    {section.label}
                  </Badge>

                  <h3 className="text-3xl text-white md:text-4xl">
                    {selectedPhoto.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-white/65">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4" />
                      {selectedPhoto.location}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Calendar className="size-4" />
                      {selectedPhoto.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Camera className="size-4" />
                      {selectedPhotoIndex + 1} / {section.photos.length}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}