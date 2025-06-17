// No need to import Icons since we're using string literals for icons
import { joinPath } from "../navigation";

interface AboutMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Using string type for Iconify icons
}

interface AboutMenuSection {
  sectionTitle: string; // Keep sectionTitle optional if not always needed visually
  items: AboutMenuItem[];
}

export const aboutMenu: AboutMenuSection[] = [
  {
    sectionTitle: "Acerca de Innovapaz", // First section
    items: [
      {
        title: "Resumen del proyecto",
        description: "Entienda las metas y audiencia de Innovapaz.",
        href: joinPath(import.meta.env.BASE_URL, "/about/project-overview"),
        icon: "mdi:information-outline",
      },
    ],
  },
  {
    sectionTitle: "Equipo", // Second section
    items: [
      {
        title: "Equipo",
        description: "Conozca los investigadores y administrativos del proyecto.",
        href: joinPath(import.meta.env.BASE_URL, "/about/project-team"),
        icon: "mdi:account-group",
      },

    ],
  },
];
