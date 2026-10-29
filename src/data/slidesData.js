export const SLIDES = [
  {
    id: 1,
    title: "Portada",
    category: "Introducción",
    subtitle: "Propuesta de Colaboración Estratégica • Meetups Cognition (Devin) en Campus Wortev",
    description: "Alianza ejecutiva y operativa para posicionar a Campus Wortev como sede oficial de IA en CDMX."
  },
  {
    id: 2,
    title: "Resumen & Perfil",
    category: "Contexto",
    subtitle: "Alianza Estratégica, Contexto de Cognition y Audiencia de Alto Nivel",
    description: "2 meetups mensuales, 6 horas de capacitación gratuita en IA y audiencia del top 5% tech."
  },
  {
    id: 3,
    title: "Beneficios Ganar-Ganar",
    category: "Modelo",
    subtitle: "Modelo de Colaboración Recíproco: Lo que aporta y recibe cada parte",
    description: "Capacitación de élite por Enrique Diaz, base de datos de 200-300 leads y consumo exclusivo de catering."
  },
  {
    id: 4,
    title: "Presupuesto Operativo",
    category: "Inversión",
    subtitle: "Presupuesto Financiado 100% por Cognition & Derrama Directa para Wortev",
    description: "~$79,800 MXN por edición con $37,800 MXN facturados directo a la cocina/catering de Campus Wortev."
  },
  {
    id: 5,
    title: "Logística & Agenda",
    category: "Operación",
    subtitle: "Montaje en Terraza Jacarandas, Requerimientos Técnicos y Agenda Tipo",
    description: "Aforo 120-150 personas, Wi-Fi 700 Mbps, 2 pantallas y dinámica de 18:00 a 21:00 hrs."
  },
  {
    id: 6,
    title: "Siguientes Pasos",
    category: "Ruta",
    subtitle: "Hoja de Ruta hacia el Kick-off y Lanzamiento Oficial del Primer Meetup",
    description: "Validación de fechas en octubre/noviembre, cotización de catering y aprobación directiva."
  },
  {
    id: 7,
    title: "Formalización & Contacto",
    category: "Cierre",
    subtitle: "Aprobación de la Alianza y Canales de Comunicación Directa",
    description: "Confirmación formal con Enrique Diaz y agenda de reunión de coordinación."
  }
];

export const EXCHANGE_RATE_USD_TO_MXN = 19.0; // Proporción del documento (~$79,800 MXN ≈ $4,200 USD)

export const BUDGET_ITEMS = [
  {
    id: "catering_food",
    category: "Catering Wortev",
    beneficiary: "Wortev",
    rubro: "Catering Wortev (Alimentos)",
    description: "Servicio interno Wortev: pizzas artesanales / canapés y bocadillos (130-150 porciones).",
    unitMxn: 160,
    unitLabel: "pax",
    quantity: 140,
    totalMxn: 22400,
    highlight: true,
    tag: "Facturado a Wortev"
  },
  {
    id: "catering_drinks",
    category: "Catering Wortev",
    beneficiary: "Wortev",
    rubro: "Catering Wortev (Bebidas)",
    description: "Servicio interno Wortev: cervezas, copas de vino, refrescos y agua (2 bebidas / pax).",
    unitMxn: 110,
    unitLabel: "pax",
    quantity: 140,
    totalMxn: 15400,
    highlight: true,
    tag: "Facturado a Wortev"
  },
  {
    id: "swag_shirts",
    category: "Swag Cognition",
    beneficiary: "Cognition",
    rubro: "Camisetas Oficiales Cognition",
    description: "Playeras de algodón peinado con serigrafía / DTF de alta calidad para asistentes y staff.",
    unitMxn: 200,
    unitLabel: "pza",
    quantity: 130,
    totalMxn: 26000,
    highlight: false,
    tag: "Producción Externa"
  },
  {
    id: "swag_caps",
    category: "Swag Cognition",
    beneficiary: "Cognition",
    rubro: "Gorras Bordadas Cognition",
    description: "Gorras tipo snapback o dad hat con logo bordado en relieve (edición especial limitada).",
    unitMxn: 180,
    unitLabel: "pza",
    quantity: 60,
    totalMxn: 10800,
    highlight: false,
    tag: "Producción Externa"
  },
  {
    id: "swag_stickers",
    category: "Swag Cognition",
    beneficiary: "Cognition",
    rubro: "Stickers Cognition (Pack)",
    description: "Paquete de stickers de vinil troquelado holográfico / mate para laptops de participantes.",
    unitMxn: 10,
    unitLabel: "pza",
    quantity: 300,
    totalMxn: 3000,
    highlight: false,
    tag: "Producción Externa"
  },
  {
    id: "brand_banners",
    category: "Material Institucional",
    beneficiary: "Ambos",
    rubro: "Roll-ups / Banners Institucionales",
    description: "Roll-ups retráctiles de 85x200 cm para escenario y módulo de recepción (costo único reutilizable).",
    unitMxn: 1100,
    unitLabel: "pza",
    quantity: 2,
    totalMxn: 2200,
    highlight: false,
    tag: "Inversión Inicial"
  }
];

export const AGENDA_ITEMS = [
  {
    time: "18:00 – 18:30",
    duration: "30 min",
    title: "Registro de Asistentes, Entrega de Swag & Networking",
    description: "Check-in en recepción principal, entrega de kits oficiales de Cognition y bienvenida en terraza.",
    type: "reception",
    badge: "Acceso & Bienvenida",
    icon: "Users"
  },
  {
    time: "18:30 – 18:40",
    duration: "10 min",
    title: "Bienvenida Oficial e Intervención Institucional Campus Wortev",
    description: "Espacio en el escenario para que directivos de Wortev presenten sus servicios de aceleración, fondo y membresías de coworking.",
    type: "wortev",
    badge: "Espacio Wortev",
    icon: "Award"
  },
  {
    time: "18:40 – 19:40",
    duration: "60 min",
    title: "Presentación Técnica / Keynote: Desarrollo Autónomo con Devin",
    description: "Masterclass magistral con demostración en vivo de agentes de IA resolviendo tareas complejas de ingeniería y casos de éxito en la industria global.",
    type: "keynote",
    badge: "Keynote Principal",
    icon: "Laptop"
  },
  {
    time: "19:40 – 20:00",
    duration: "20 min",
    title: "Sesión Interactiva de Q&A + Entrega de Créditos Cognition",
    description: "Preguntas del público y entrega exclusiva de $200 USD en créditos de Cognition por cada participante registrado.",
    type: "credits",
    badge: "$200 USD en Créditos",
    icon: "Sparkles"
  },
  {
    time: "20:00 – 21:00",
    duration: "60 min",
    title: "Cóctel, Catering Interno de Wortev & Networking en Terraza",
    description: "Pizzas artesanales y bebidas provistas por el catering de Wortev, propiciando conexiones entre founders, devs senior e inversionistas.",
    type: "networking",
    badge: "Catering Wortev",
    icon: "Coffee"
  }
];
