import GallerySectionPage from "@/components/sections/GallerySectionPage";
import { getGallerySectionByType } from "@/lib/galleryService";

export default async function DeportesPage() {
  const section = await getGallerySectionByType("deportes");

  return <GallerySectionPage section={section} />;
}