// No need to import Icons since we're using string literals for icons
import { joinPath } from "../navigation";

// Interface for static items that might remain (like 'All Posts')
interface BlogStaticMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Using string type for Iconify icons
}

// Interface for a section containing static items
interface BlogMenuStaticSection {
  sectionTitle: string;
  items: BlogStaticMenuItem[];
}

// Keep only static links or sections here. Dynamic posts will be fetched in the component.
export const blogMenuStatic: BlogMenuStaticSection[] = [
  {
    sectionTitle: "Búsqueda", // Example section title
    items: [
      {
        title: "Todas las entradas",
        description: "Acceda todas las entradas del blog.",
        href: joinPath(import.meta.env.BASE_URL, "/blog"), // Link to the main blog index
        icon: "mdi:text-box-multiple-outline",
      },
      // Add other static links like categories if needed
      // { title: "Categories", description: "View posts by category.", href: "/blog/categories", icon: "mdi:tag-multiple" },
    ],
  },
];

// Note: The dynamic "Latest Post" with image will be handled directly in Blog.astro
