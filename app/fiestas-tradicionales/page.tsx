import GallerySectionPage from "@/components/sections/GallerySectionPage";
import { getGallerySectionByType } from "@/lib/galleryService";

export default async function FiestasTradicionalesPage() {
  const section = await getGallerySectionByType("fiestas-tradicionales");

  return <GallerySectionPage section={section} />;
}