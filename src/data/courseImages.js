
const modules = import.meta.glob(
  "../assets/images/courses_cover/*.webp",
  { eager: true, import: "default" }
);

const imageMap = {};
for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/\/([^/]+)\.webp$/);
  if (match) {
    imageMap[match[1]] = url;
  }
}

// Fallback used if a course image is missing
const FALLBACK =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=2000&q=90";

export function getCourseImage(slug) {
  return imageMap[slug] ?? FALLBACK;
}

export { imageMap };
