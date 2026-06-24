import NewPhotoForm from "@/components/admin/NewPhotoForm";
import { requireAdmin } from "@/lib/adminAuth";

export default async function NewPhotoPage() {
await requireAdmin();
  return <NewPhotoForm />;
}