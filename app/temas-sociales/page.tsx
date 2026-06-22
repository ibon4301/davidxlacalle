import GallerySectionPage from "@/components/sections/GallerySectionPage";
import { getGallerySectionByType } from "@/lib/galleryService";

export default async function TemasSocialesPage() {
  const section = await getGallerySectionByType("temas-sociales");

  return <GallerySectionPage section={section} />;
}