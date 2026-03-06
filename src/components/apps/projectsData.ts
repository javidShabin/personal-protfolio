export interface PortfolioProject {
  id: string;
  windowId: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "delivist",
    windowId: "project-delivist",
    name: "Delivist",
    subtitle: "Food ordering website",
    description:
      "Delivist helps users discover restaurants, place orders quickly, and track deliveries in real time.",
    image: "/projects/delivist.svg",
    highlights: [
      "Restaurant browsing with category filters",
      "Cart, checkout, and order tracking flow",
      "Responsive UI for desktop and mobile",
    ],
  },
  {
    id: "staffmint",
    windowId: "project-staffmint",
    name: "StaffMint",
    subtitle: "AI receptionist project",
    description:
      "StaffMint acts as an AI receptionist that handles first contact, appointment intent, and visitor queries.",
    image: "/projects/staffmint.svg",
    highlights: [
      "AI-powered query handling and routing",
      "Appointment capture workflow",
      "Structured conversation summaries for staff",
    ],
  },
  {
    id: "uptimeflux",
    windowId: "project-uptimeflux",
    name: "UptimeFlux",
    subtitle: "Uptime monitoring system",
    description:
      "UptimeFlux monitors service health, tracks incidents, and keeps teams informed about outages.",
    image: "/projects/uptimeflux.svg",
    highlights: [
      "Real-time uptime checks and status tracking",
      "Incident timeline and visibility dashboard",
      "Alerts for downtime events",
    ],
  },
];

