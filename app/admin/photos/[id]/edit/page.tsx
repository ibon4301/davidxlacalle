import { notFound } from "next/navigation";

import EditPhotoForm from "@/components/admin/EditPhotoForm";
import { getAdminPhotoById } from "@/lib/galleryService";

type EditPhotoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPhotoPage({ params }: EditPhotoPageProps) {
  const { id } = await params;
  const photo = await getAdminPhotoById(id);

  if (!photo) {
    notFound();
  }

  return <EditPhotoForm photo={photo} />;
}