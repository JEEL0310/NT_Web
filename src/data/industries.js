export const industries = [
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    icon: "Factory",
    description:
      "Custom ERP solutions for steel fabrication, machinery builders, foundries, and furniture makers — digitizing shop floors, CNC/VMC operations, raw material inventory, and B2B orders.",
    challenges: [
      "Manual production scheduling and shop-floor blind spots",
      "Inaccurate raw material inventory and WIP tracking",
      "Disconnected CNC, VMC, laser cutting, and powder coating stages",
      "Complex order fulfillment and B2B dispatch bottlenecks",
    ],
    solutions: [
      "Integrated manufacturing and production management",
      "Real-time machine scheduling and stage-by-stage WIP tracking",
      "Automated bill-of-materials (BOM) and raw material inventory",
      "Unified dispatch, packaging, and GST financial integration",
    ],
  },
  {
    id: "metal-brass",
    title: "Metal & Brass Industries",
    icon: "Building2",
    description:
      "Specialized business management and ERP platforms built around the operational dynamics of brass components, metal casting, foundry operations, and precision part machining.",
    challenges: [
      "Melting loss, foundry yield tracking, and scrap recirculation",
      "Fluctuating raw metal commodity rates and pricing models",
      "Manual order coordination between melting, casting, and finishing",
      "Lack of centralized inventory visibility across processing units",
    ],
    solutions: [
      "Pig iron melting operations and foundry production tracking",
      "Dynamic scrap ratio management and yield analytics",
      "End-to-end batch traceability from melting furnace to delivered part",
      "Automated vendor procurement, B2B invoicing, and ledger sync",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity & Platform Testing",
    icon: "Shield",
    description:
      "Enterprise VAPT, application security assessments, API integrity testing, and Security by Design implementations protecting digital platforms, web apps, and mobile applications.",
    challenges: [
      "Unidentified OWASP vulnerabilities in production web and mobile apps",
      "API endpoints vulnerable to parameter tampering and unauthorized access",
      "Weak authentication, authorization, and session handling controls",
      "Admin panel access control and privilege escalation vulnerabilities",
    ],
    solutions: [
      "Comprehensive web, mobile (Android/iOS), and API penetration testing",
      "OWASP-aligned security assessments and exploit validation",
      "Hardened authentication, RBAC boundaries, and token validation",
      "Actionable remediation guidance and post-fix retesting",
    ],
  },
  {
    id: "waterparks",
    title: "Waterparks & Visitor Operations",
    icon: "Activity",
    description:
      "RFID-enabled connected ecosystems integrating contactless turnstile access, digital cashless wristbands, locker rentals, and multi-zone real-time operations.",
    challenges: [
      "Long entry queues and slow physical ticket verification",
      "Physical cash handling security risks at wet-zone stalls",
      "Lack of real-time crowd distribution and telemetry across zones",
      "End-of-day revenue reconciliation discrepancies across park outlets",
    ],
    solutions: [
      "Contactless RFID-based turnstile access and crowd monitoring",
      "100% cashless wristband transactions across concessions and retail",
      "Centralized POS synchronization and digital wallet management",
      "Real-time operator dashboards with automated audit reporting",
    ],
  },
  {
    id: "sports",
    title: "Sports & Recreation",
    icon: "Trophy",
    description:
      "Digital management platforms for sports academies, turf venues, tournaments, and athletic clubs — supporting court bookings, player records, and fee collections.",
    challenges: [
      "Manual court bookings leading to double-booking conflicts",
      "Scattered member registration and player attendance records",
      "Complex tournament scheduling and fee tracking",
      "Lack of real-time venue utilization metrics",
    ],
    solutions: [
      "Automated slot booking and instant payment gateway syncing",
      "Academy student data, attendance, and coach assignment",
      "Tournament bracket management and live player statistics",
      "Real-time revenue visibility and multi-location dashboard",
    ],
  },
  {
    id: "education",
    title: "Education & Institutions",
    icon: "GraduationCap",
    description:
      "Comprehensive institutional ERPs (ACADE360) and academic tools managing admissions, biometric attendance, recurring fee collections, and student-parent-staff portals.",
    challenges: [
      "Manual student admissions and paper-heavy verification",
      "Delayed fee tracking, manual receipting, and reconciliation errors",
      "Disconnected biometric attendance and staff payroll systems",
      "Fragmented communication between administration, teachers, and parents",
    ],
    solutions: [
      "Digital admissions pipeline with automated verification workflows",
      "Automated recurring fee management with digital receipt generation",
      "Biometric and AI-assisted attendance tracking integration",
      "Dedicated mobile apps for students, teachers, and administration",
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality & Food Services",
    icon: "Utensils",
    description:
      "Cloud POS, QR-based digital ordering, real-time kitchen display systems, and inventory synchronisation engineered for multi-outlet restaurants and cinema dining.",
    challenges: [
      "High peak-hour order turnaround delays and lost tickets",
      "Table and seat ordering mix-ups in cinema and dining environments",
      "Inventory shrinkage and inaccurate ingredient stock levels",
      "Unsynchronized billing between online orders and floor POS",
    ],
    solutions: [
      "Contactless QR code food ordering directly from seats or tables",
      "Real-time kitchen order synchronization via WebSockets",
      "Recipe-level inventory deduction and stock threshold alerts",
      "Integrated multi-tender billing and sales analytics",
    ],
  },
  {
    id: "hostels",
    title: "Hostels & Accommodation",
    icon: "Hotel",
    description:
      "End-to-end hostel administration ERPs covering student onboarding, room inventory allocation, digital mess billing, and maintenance tracking.",
    challenges: [
      "Manual room allocation leading to vacancy and double-booking errors",
      "Paper-based resident records and unverified identity documentation",
      "Uncollected monthly rent and manual security deposit ledgers",
      "Mess attendance disputes and maintenance tracking delays",
    ],
    solutions: [
      "Visual room inventory management and instant occupancy status",
      "Digital KYC and tenant onboarding record storage",
      "Automated rent invoicing, payment reminders, and receipts",
      "Integrated mess meal logging and maintenance ticketing portal",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate & Property Operations",
    icon: "Building",
    description:
      "Custom digital business solutions for real estate firms and land brokerages — managing property listings, customer leads, site visits, and deal pipelines.",
    challenges: [
      "Lost buyer and investor leads across fragmented spreadsheets",
      "Inefficient property inventory tracking across multiple land parcels",
      "Disjointed agent coordination and unscheduled client site visits",
      "Lack of pipeline visibility into deal stages and brokerage commissions",
    ],
    solutions: [
      "Centralized CRM for land and commercial property brokerage",
      "Lead scoring, automated assignment, and follow-up reminders",
      "Interactive property catalog with zoning and pricing metrics",
      "Pipeline deal stage tracking from inquiry to registry closing",
    ],
  },
  {
    id: "startups",
    title: "SaaS & Enterprise Startups",
    icon: "Rocket",
    description:
      "High-velocity product engineering from MVP to enterprise-grade SaaS platforms — combining modern frontend frameworks, scalable backends, and security by design.",
    challenges: [
      "Need to launch MVPs rapidly without accumulating technical debt",
      "Engineering architecture that scales economically under traffic spikes",
      "Meeting enterprise client security expectations from day one",
      "Complex multi-tenant database partitioning and user access roles",
    ],
    solutions: [
      "Production-ready SaaS architecture built on modern tech stacks",
      "Security by design embedded across APIs, auth, and database schemas",
      "Containerized microservices optimized for cost-effective cloud scale",
      "Rapid sprint cycles delivering market-validated features",
    ],
  },
];
