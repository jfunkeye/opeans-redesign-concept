

const imageModules = import.meta.glob(
  "../assets/images/courses_cover/*.webp",
  { eager: true, import: "default" }
);

export const courseImages = Object.entries(imageModules).reduce(
  (acc, [path, url]) => {
    const filename = path.split("/").pop().replace(".webp", "");
    acc[filename] = url;
    return acc;
  },
  {}
);


export function getCourseImage(num) {
  return courseImages[String(num)] || "";
}
