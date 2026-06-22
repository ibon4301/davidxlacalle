import {
  gallerySections,
  type GallerySection,
  type GallerySectionType,
  type SectionPhoto,
} from "@/lib/gallerySections";
import { supabase } from "@/lib/supabaseClient";

export type CmsPhoto = SectionPhoto & {
  id: string;
  type: GallerySectionType;
  featured: boolean;
  order: number;
};

export type CmsGallerySection = {
  type: GallerySectionType;
  label: string;
  title: string;
  intro: string;
  featuredPhoto: CmsPhoto;
  photos: CmsPhoto[];
};

type SupabasePhotoRow = {
  id: string;
  title: string;
  section_type: GallerySectionType;
  location: string | null;
  photo_date: string | null;
  image_url: string;
  featured: boolean;
  sort_order: number;
};

function mapPhotoToCmsPhoto(
  photo: SectionPhoto,
  type: GallerySectionType,
  featured: boolean,
  index: number,
): CmsPhoto {
  return {
    id: `${type}-${featured ? "featured" : "photo"}-${index}`,
    type,
    featured,
    order: index,
    title: photo.title,
    location: photo.location,
    date: photo.date,
    image: photo.image,
  };
}

function mapSectionToCmsSection(section: GallerySection): CmsGallerySection {
  return {
    type: section.type,
    label: section.label,
    title: section.title,
    intro: section.intro,
    featuredPhoto: mapPhotoToCmsPhoto(
      section.featuredPhoto,
      section.type,
      true,
      0,
    ),
    photos: section.photos.map((photo, index) =>
      mapPhotoToCmsPhoto(photo, section.type, false, index + 1),
    ),
  };
}

function mapSupabasePhotoToCmsPhoto(photo: SupabasePhotoRow): CmsPhoto {
  return {
    id: photo.id,
    type: photo.section_type,
    featured: photo.featured,
    order: photo.sort_order,
    title: photo.title,
    location: photo.location ?? "",
    date: photo.photo_date ?? "",
    image: photo.image_url,
  };
}

function getFallbackSection(type: GallerySectionType): CmsGallerySection {
  return mapSectionToCmsSection(gallerySections[type]);
}

async function getPhotosFromSupabase(
  type: GallerySectionType,
): Promise<CmsPhoto[]> {
  const { data, error } = await supabase
    .from("photos")
    .select(
      "id, title, section_type, location, photo_date, image_url, featured, sort_order",
    )
    .eq("section_type", type)
    .eq("is_active", true)
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true });

  if (error) {
    console.error(`Error loading photos from Supabase for ${type}:`, error);
    return [];
  }

  return (data ?? []).map((photo) =>
    mapSupabasePhotoToCmsPhoto(photo as SupabasePhotoRow),
  );
}

export async function getGallerySectionByType(
  type: GallerySectionType,
): Promise<CmsGallerySection> {
  const fallbackSection = getFallbackSection(type);
  const photos = await getPhotosFromSupabase(type);

  if (photos.length === 0) {
    return fallbackSection;
  }

  const featuredPhoto =
    photos.find((photo) => photo.featured) ?? fallbackSection.featuredPhoto;

  const gridPhotos = photos.filter((photo) => !photo.featured);

  return {
    ...fallbackSection,
    featuredPhoto,
    photos: gridPhotos.length > 0 ? gridPhotos : fallbackSection.photos,
  };
}

export async function getAllGallerySections(): Promise<CmsGallerySection[]> {
  const sectionTypes = Object.keys(gallerySections) as GallerySectionType[];

  return Promise.all(
    sectionTypes.map((type) => getGallerySectionByType(type)),
  );
}

export async function getAdminPhotos(options?: {
  active?: boolean;
}): Promise<CmsPhoto[]> {
  let query = supabase
    .from("photos")
    .select(
      "id, title, section_type, location, photo_date, image_url, featured, sort_order",
    )
    .order("section_type", { ascending: true })
    .order("featured", { ascending: false })
    .order("sort_order", { ascending: true });

  if (typeof options?.active === "boolean") {
    query = query.eq("is_active", options.active);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error loading admin photos from Supabase:", error);
    return [];
  }

  return (data ?? []).map((photo) =>
    mapSupabasePhotoToCmsPhoto(photo as SupabasePhotoRow),
  );
}

export async function getAdminPhotoById(
  id: string,
): Promise<CmsPhoto | null> {
  const { data, error } = await supabase
    .from("photos")
    .select(
      "id, title, section_type, location, photo_date, image_url, featured, sort_order",
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error loading admin photo by id:", error);
    return null;
  }

  return mapSupabasePhotoToCmsPhoto(data as SupabasePhotoRow);
}