export const mainNav = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "About OPEANS", to: "/about" },
      { label: "Facilities", to: "/facilities" },
      { label: "Accreditations", to: "/accreditations" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
  {
    label: "Training",
    to: "/training",
    children: [
      { label: "All Training", to: "/training" },
      { label: "Offshore & Marine", to: "/training?category=offshore" },
      { label: "Fire & Emergency", to: "/training?category=fire" },
      { label: "First Aid", to: "/training?category=first-aid" },
      { label: "Industrial Safety", to: "/training?category=industrial" },
      { label: "Lifting & Rigging", to: "/training?category=lifting" },
      { label: "HSE", to: "/training?category=hse" },
      { label: "Logistics & Supply Chain", to: "/training?category=logistics" },
      { label: "Driving & Transport", to: "/training?category=driving" },
      { label: "Corporate Training", to: "/corporate-training" },
      { label: "Training Calendar", to: "/training-calendar" },
    ],
  },
  { label: "Clients", to: "/clients" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];