// No need to import Icons since we're using string literals for icons
import { joinPath } from "../navigation";

interface ResourceMenuItem {
  title: string;
  description: string;
  href: string;
  icon: string; // Using string type for Iconify icons
}

interface ResourceMenuSection {
  sectionTitle: string; // Keep sectionTitle optional if not always needed visually
  items: ResourceMenuItem[];
}

export const resourcesMenu: ResourceMenuSection[] = [
  {
    sectionTitle: "Talleres de Contabilidad y Finanzas", // First section
    items: [
      {
        title: "Contabilidad de Gestión",
        description: "Información del taller de Contabilidad de Gestión.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/contabilidad-de-gestion"),
        icon: "mdi:circle-slice-4",
      },
      {
        title: "Finanzas Básicas para Emprendedores",
        description: "Información del taller de Finanzas Básicas para Emprendedores.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/finanzas-basicas-para-emprendedores"),
        icon: "mdi:database-lock",
      },
    ],
  },
  {
    sectionTitle: "Taller de Formalización & General", // Second section
    items: [
      {
        title: "Formalización de Emprendimientos",
        description:
          "Información del taller de Formalización de Emprendimientos.",
        href: joinPath(import.meta.env.BASE_URL, "/resources/formalizacion-de-emprendimientos"),
        icon: "mdi:shield-check",
      },
      {
        title: "Todos los Talleres",
        description: "Visite todos los talleres disponibles del proyecto.",
        href: joinPath(import.meta.env.BASE_URL, "/resources"),
        icon: "mdi:view-grid",
      },
    ],
  },
];
