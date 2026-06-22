import GallerySectionPage from "@/components/sections/GallerySectionPage";
import { getGallerySectionByType } from "@/lib/galleryService";

export default async function PoliticaPage() {
  const section = await getGallerySectionByType("politica");

  return <GallerySectionPage section={section} />;
}