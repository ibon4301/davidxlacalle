import {
  gallerySections,
  type GallerySection,
  type GallerySectionType,
  type SectionPhoto,
} from "@/lib/gallerySections";

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

export async function getGallerySectionByType(
  type: GallerySectionType,
): Promise<CmsGallerySection> {
  const section = gallerySections[type];

  return mapSectionToCmsSection(section);
}

export async function getAllGallerySections(): Promise<CmsGallerySection[]> {
  return Object.values(gallerySections).map(mapSectionToCmsSection);
}