import GallerySectionPage from "@/components/sections/GallerySectionPage";
import { gallerySections } from "@/lib/gallerySections";

export default function FiestasTradicionalesPage() {
  return (
    <GallerySectionPage section={gallerySections["fiestas-tradicionales"]} />
  );
}