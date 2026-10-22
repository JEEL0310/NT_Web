export const caseStudies = [
  {
    id: "steelfab-erp",
    title: "SteelFab – Manufacturing & Production ERP",
    industry: "Manufacturing & Industrial",
    client: "SteelFab",
    technologies: "MERN Stack, Flutter",
    challenge:
      "Steel fabrication and precision machining operations struggled with disconnected spreadsheets for CNC & VMC machines, laser cutting, powder coating, raw material inventory, and shop-floor order tracking, leading to production bottlenecks and delayed dispatches.",
    solution:
      "Engineered an end-to-end manufacturing ERP connecting shop-floor machinery, CNC & VMC operations, laser cutting & bending schedules, powder coating lines, automated raw material inventory, and purchase-sales integration with real-time operational analytics.",
    impact: [
      "Unified CNC, VMC, laser cutting, and powder coating into one workflow",
      "Real-time raw material and work-in-progress (WIP) tracking",
      "Eliminated production scheduling conflicts on the shop floor",
      "Automated dispatch, billing, and financial reconciliations",
    ],
  },
  {
    id: "nothing-before-coffee",
    title: "Nothing Before Coffee × FUDR – Platform Security Assessment",
    industry: "Cybersecurity & VAPT",
    client: "Nothing Before Coffee × FUDR",
    technologies: "OWASP VAPT, Burp Suite, Network & API Auditing",
    challenge:
      "A rapidly expanding national F&B brand with web and cross-platform mobile apps (Android & iOS) required exhaustive security validation to protect user data, mobile payment gateways, user panels, and backend APIs prior to high-volume commercial expansion.",
    solution:
      "Conducted rigorous OWASP-aligned Vulnerability Assessment and Penetration Testing (VAPT) across web portals, Android & iOS mobile applications, API endpoints, authentication mechanisms, and administrative user panels with end-to-end exploit validation and remediation guidance.",
    impact: [
      "Zero critical vulnerabilities across Android & iOS production apps",
      "Hardened API endpoints and token-based authentication flows",
      "Admin panel access controls and privilege separation enforced",
      "Full OWASP security compliance verified before national rollout",
    ],
  },
  {
    id: "waterpark360-iot",
    title: "Waterpark360 – RFID & Connected Visitor Operations",
    industry: "Waterpark & Visitor Operations",
    client: "Waterpark360",
    technologies: "React Vite, Node.js, RFID Readers & IoT Access Hardware",
    challenge:
      "High-volume seasonal waterparks faced massive entry queues, physical cash handling security risks at food stalls and locker rentals, and lack of real-time crowd and revenue visibility across park zones.",
    solution:
      "Designed an integrated RFID-enabled digital ecosystem combining contactless RFID wristband access control, cashless wallet top-ups, locker management, real-time POS syncing, and centralized operator analytics.",
    impact: [
      "100% cashless park operations with instant RFID wristband checkout",
      "85% reduction in turnstile entry and queue wait times",
      "Real-time visitor telemetry and zone-by-zone revenue tracking",
      "Zero reconciliation discrepancies between gate admissions and concessions",
    ],
  },
  {
    id: "sugar-cosmetics",
    title: "Sugar Cosmetics – Application Security Assessment",
    industry: "Cybersecurity & E-Commerce",
    client: "Sugar Cosmetics",
    technologies: "VAPT, Web Security, API Penetration Testing",
    challenge:
      "One of India's leading omnichannel beauty brands handling millions of customer accounts, checkout transactions, and loyalty points needed exhaustive penetration testing to secure web application surfaces against unauthorized access and data leakage.",
    solution:
      "Executed deep-dive web application security assessment, authentication and authorization stress testing, session hijacking defenses, and post-assessment security remediation guidance to harden the customer-facing ecosystem.",
    impact: [
      "Identified and remediated authorization flaws in user checkout pipelines",
      "Secured sensitive customer profile data and transaction histories",
      "Hardened session management and payment gateway webhooks",
      "Verified security posture resilience under simulated attack conditions",
    ],
  },
  {
    id: "hudle-sports",
    title: "HUDLE × HSquare Sports – Platform Security & API Integrity",
    industry: "Sports Tech & Cybersecurity",
    client: "HUDLE × HSquare Sports Private Limited",
    technologies: "Android & iOS VAPT, API Flow Auditing",
    challenge:
      "Premier sports booking and venue platform facilitating thousands of daily court reservations, membership payments, and tournament registrations across mobile and web interfaces needed comprehensive security validation.",
    solution:
      "Performed comprehensive VAPT covering web application surfaces, Android & iOS application security flows, API integrity checks, and authorization boundary validation across athlete, venue owner, and admin panels.",
    impact: [
      "Comprehensive security validation for iOS & Android apps",
      "Zero-compromise API integrity check across payment & booking flows",
      "Multi-tenant role-based access control (RBAC) verification",
      "Eliminated API tampering and unauthorized reservation bypasses",
    ],
  },
  {
    id: "jayco-pulley",
    title: "Jayco Pulley – Foundry & Heavy Manufacturing ERP",
    industry: "Manufacturing & Heavy Industrial",
    client: "Jayco Pulley",
    technologies: "MERN Stack, Flutter",
    challenge:
      "Foundry and pulley manufacturing involves extreme operational complexity — from raw pig iron melting, foundry casting, machining, dynamic scrap ratios, to finished goods inventory and freight dispatch.",
    solution:
      "Developed a custom foundry ERP system managing operations from pig iron batch melting, heat tracking, casting yield analytics, machining process tracking, to warehouse inventory and B2B dispatch.",
    impact: [
      "End-to-end batch traceability from melting furnace to delivered pulley",
      "Accurate calculation of melting loss, scrap recirculation, and foundry yield",
      "Live work-in-progress (WIP) tracking across casting and machining stages",
      "Streamlined customer order fulfillment and B2B GST invoicing",
    ],
  },
  {
    id: "acade360",
    title: "ACADE360 – Institutional Education ERP System",
    industry: "Education & Institutions",
    client: "ACADE360",
    technologies: "React, Node.js, Android, iOS",
    challenge:
      "Educational institutions struggled with fragmented software for student admissions, biometric attendance, recurring fee collection, teacher payroll, and parent-student communications.",
    solution:
      "Delivered ACADE360: an enterprise-grade education ERP centralizing student admissions, automated attendance tracking, online fee payments with automated receipts, staff management, and parent-student portals.",
    impact: [
      "Centralized operations across admissions, academic records, and fees",
      "90% automated fee reconciliation with instant digital receipts",
      "Real-time attendance and academic performance notifications",
      "Unified mobile apps for teachers, students, and parents",
    ],
  },
  {
    id: "oscar-cashew",
    title: "Oscar Cashew Tech – Machinery Manufacturing ERP",
    industry: "Industrial Machinery Manufacturing",
    client: "Oscar Cashew Tech",
    technologies: "MERN Stack, Flutter",
    challenge:
      "Specialized food processing machinery manufacturer needed to synchronize complex multi-stage assembly, precision parts inventory, procurement lead times, and post-sale machine installations.",
    solution:
      "Created a bespoke machinery manufacturing ERP connecting bill-of-materials (BOM) management, production assembly schedules, vendor purchase orders, inventory tracking, and field commissioning.",
    impact: [
      "Precision BOM tracking for complex cashew processing machinery",
      "Real-time coordination between engineering design, procurement, and assembly",
      "Reduced component shortage delays on the assembly line by 45%",
      "Integrated post-delivery warranty and spare-parts management",
    ],
  },
  {
    id: "devgn-cinex",
    title: "Devgn CineX × Alfennzo – F&B & Cinema Platform Security",
    industry: "Entertainment & Hospitality Security",
    client: "Devgn CineX × Alfennzo",
    technologies: "Web & QR VAPT, API Remediation",
    challenge:
      "Modern cinema dining and multiplex ecosystem incorporating QR-based seat ordering, real-time kitchen display systems, and digital billing required thorough security auditing.",
    solution:
      "Conducted security assessment covering QR code ordering mechanisms, F&B inventory and billing APIs, web management consoles, and payment gateway integrations with remediation validation.",
    impact: [
      "Secured QR code ordering against parameter tampering and pricing manipulation",
      "Hardened concession billing APIs and kitchen management network",
      "Zero-leak audit trail for transactional records and patron data",
      "Verified compliance with enterprise data privacy standards",
    ],
  },
  {
    id: "urban-living",
    title: "Urban Living – Accommodation & Resident ERP",
    industry: "Hostels & Student Living",
    client: "Urban Living",
    technologies: "React Vite, Node.js, MongoDB",
    challenge:
      "Multi-property hostel provider faced recurring friction managing room allocation, security deposit tracking, mess attendance, maintenance complaints, and resident onboarding.",
    solution:
      "Engineered a centralized accommodation management ERP supporting room inventory allocation, automated monthly rent invoicing, resident KYC records, digital mess billing, and administrative dashboards.",
    impact: [
      "Automated monthly rent generation and security deposit tracking",
      "100% digital resident onboarding and room allocation workflow",
      "Real-time occupancy tracking across multi-wing properties",
      "Streamlined maintenance ticketing and tenant communication",
    ],
  },
];
