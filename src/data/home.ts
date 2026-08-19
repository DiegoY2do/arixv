export type HomeLocale =
  | "es"
  | "en";

type HomeContent = {
  hero: {
    meta: {
      eyebrow: string;
      services: string;
      location: string;
      year: string;
    };

    title: {
      lineOne: string;
      lineTwo: string;
    };

    statement: {
      prefix: string;
      words: readonly [
        string,
        string,
        string,
        string,
      ];
    };

    intro: string;

    cta: {
      label: string;
      href: string;
    };

    scrollLabel: string;
  };

  selectedWork: {
    meta: {
      label: string;
      number: string;
    };

    heading: {
      lineOne: string;
      lineTwo: string;
    };

    viewAll: {
      label: string;
      href: string;
    };

    collection: {
      title: string;
      cta: string;
      href: string;
    };

    projects: readonly {
      number: string;
      title: string;
      category: string;
      year: string;
      description: string;
      cta: string;
      href: string;
      image: string;
      mobileImage: string;
      visual: "commerce" | "brand" | "product";
    }[];
  };

  services: {
    meta: {
      label: string;
      number: string;
    };

    eyebrow: string;

    items: readonly [
      string,
      string,
      string,
      string,
    ];

    tagline: string;

    cta: {
      label: string;
      href: string;
    };
  };

  technologyTicker: {
    label: string;

    items: readonly {
      name: string;
      logo: string;
      layout: "wide" | "icon";
    }[];
  };

  capabilities: {
    statement: readonly [
      string,
      string,
      string,
    ];

    details: readonly {
      number: string;
      title: string;
      description: string;
      tag: string;
      items: readonly string[];
    }[];
  };

  process: {
    meta: {
      label: string;
      number: string;
    };

    eyebrow: string;
    title: string;
    intro: string;

    steps: readonly {
      number: string;
      title: string;
      short: string;
      description: string;
    }[];
  };

  explorations: {
    meta: {
      label: string;
      number: string;
    };

    words: readonly [
      string,
      string,
    ];

    intro: string;

    cards: readonly {
      number: string;
      title: string;
      category: string;
      image: string;
    }[];
  };

  testimonials: {
    meta: {
      label: string;
      number: string;
    };

    eyebrow: string;
    title: string;

    items: readonly {
      number: string;
      quote: string;
      client: string;
      project: string;
    }[];
  };

  finalCta: {
    meta: {
      label: string;
      number: string;
    };

    eyebrow: string;
    headline: string;
    description: string;
    cta: string;
    href: string;
    email: string;
  };

  footer: {
    navigation: readonly {
      label: string;
      href: string;
    }[];

    contact: readonly {
      label: string;
      value: string;
      href: string;
    }[];

    social: readonly {
      label: string;
      href: string;
    }[];

    legal: readonly {
      label: string;
      href: string;
    }[];

    copyright: string;
  };

  transition: {
    words: readonly [
      string,
      string,
      string,
    ];

    darkMeta: {
      left: string;
      right: string;
    };

    intro: {
      meta: string;
      number: string;
      title: string;
      label: string;
      description: string;
    };
  };
};

const technologyItems = [
  { name: "WordPress", logo: "/brands/wordpress.svg", layout: "wide" },
  { name: "Shopify", logo: "/brands/shopify.svg", layout: "icon" },
  { name: "Astro", logo: "/brands/astro.svg", layout: "wide" },
  { name: "React", logo: "/brands/react.svg", layout: "icon" },
  { name: "Next.js", logo: "/brands/nextjs.svg", layout: "wide" },
  { name: "GSAP", logo: "/brands/gsap.svg", layout: "wide" },
  { name: "MySQL", logo: "/brands/mysql.svg", layout: "wide" },
  { name: "Supabase", logo: "/brands/supabase.svg", layout: "wide" },
  { name: "Figma", logo: "/brands/figma.svg", layout: "icon" },
  { name: "Adobe Photoshop", logo: "/brands/adobe-photoshop.svg", layout: "icon" },
  { name: "Adobe Illustrator", logo: "/brands/adobe-illustrator.svg", layout: "icon" },
  { name: "Adobe After Effects", logo: "/brands/adobe-after-effects.svg", layout: "icon" },
  { name: "Stripe", logo: "/brands/stripe.svg", layout: "wide" },
  { name: "Mercado Pago", logo: "/brands/mercado-pago.svg", layout: "icon" },
  { name: "PayPal", logo: "/brands/paypal.svg", layout: "icon" },
] as const;

export const homeContent = {
  es: {
    hero: {
      meta: {
        eyebrow:
          "DEVELOPMENT STUDIO",

        services:
          "DESIGN / TECHNOLOGY",

        location:
          "MEXICO",

        year:
          "2026",
      },

      title: {
        lineOne:
          "DIGITAL",

        lineTwo:
          "EXPERIENCES",
      },

      statement: {
        prefix:
          "BUILT TO",

        words: [
          "PERFORM.",
          "CONVERT.",
          "SCALE.",
          "EVOLVE.",
        ],
      },

      intro:
        "Estrategia, diseño y desarrollo para convertir ideas en sitios web, e-commerce y productos digitales.",

      cta: {
        label:
          "HABLEMOS",

        href:
          "#contact",
      },

      scrollLabel:
        "SCROLL TO EXPLORE",
    },

    selectedWork: {
      meta: {
        label:
          "ARIXV / PROYECTOS DESTACADOS",

        number:
          "02",
      },

      heading: {
        lineOne:
          "PROYECTOS",

        lineTwo:
          "DESTACADOS",
      },

      viewAll: {
        label:
          "VER TODOS LOS PROYECTOS",

        href:
          "/es/proyectos/",
      },

      collection: {
        title:
          "Explora más sitios web, e-commerce y productos digitales desarrollados por ARIXV.",

        cta:
          "VER TODOS LOS PROYECTOS",

        href:
          "/es/proyectos/",
      },

      projects: [
        {
          number:
            "01",

          title:
            "AFTER HOUSE",

          category:
            "WEB / EXPERIENCIAS / EVENTOS",

          year:
            "2026",

          description:
            "Una experiencia digital que reúne servicios, entretenimiento y atmósfera alrededor de cada evento.",

          cta:
            "VER PROYECTO",

          href:
            "/es/proyectos/after-house/",

          image:
            "/images/projects/afterhouse.png",

          mobileImage:
            "/images/projects/mobile/afterhouse.png",

          visual:
            "product",
        },
        {
          number:
            "02",

          title:
            "BOULDR",

          category:
            "E-COMMERCE / SHOPIFY",

          year:
            "2026",

          description:
            "Una tienda en línea donde producto, contenido y experiencia de compra funcionan como un mismo sistema.",

          cta:
            "VER PROYECTO",

          href:
            "/es/proyectos/bouldr/",

          image:
            "/images/projects/bouldr.png",

          mobileImage:
            "/images/projects/mobile/bouldr.png",

          visual:
            "commerce",
        },
        {
          number:
            "03",

          title:
            "FLOW SUPPLEMENTS",

          category:
            "E-COMMERCE / SHOPIFY",

          year:
            "2026",

          description:
            "Un e-commerce que organiza catálogo, información y compra para hacer más simple descubrir y elegir productos.",

          cta:
            "VER PROYECTO",

          href:
            "/es/proyectos/flow-supplements/",

          image:
            "/images/projects/flow.png",

          mobileImage:
            "/images/projects/mobile/flow.png",

          visual:
            "commerce",
        },
      ],
    },

    services: {
      meta: {
        label:
          "ARIXV / SERVICIOS",

        number:
          "03",
      },

      eyebrow:
        "NUESTROS SERVICIOS",

      items: [
        "WEB",
        "E-COMMERCE",
        "PRODUCTOS",
        "SISTEMAS",
      ],

      tagline:
        "DISEÑAMOS CON INTENCIÓN. DESARROLLAMOS PARA FUNCIONAR.",

      cta: {
        label:
          "VER SERVICIOS",

        href:
          "#capabilities",
      },
    },

    technologyTicker: {
      label:
        "HERRAMIENTAS / TECNOLOGÍAS / PLATAFORMAS",

      items:
        technologyItems,
    },

    capabilities: {
      statement: [
        "DONDE LAS IDEAS",
        "TOMAN FORMA",
        "Y SE CONVIERTEN EN PRODUCTO.",
      ],

      details: [
        {
          number:
            "01",

          title:
            "ESTRATEGIA Y DISEÑO",

          description:
            "Definimos cómo debe funcionar, sentirse y comunicar un producto digital antes de construirlo. Organizamos contenido, recorridos e interfaces para que cada decisión tenga una razón.",

          tag:
            "ESTRATEGIA / UX / UI",

          items: [
            "Arquitectura de información",
            "UX / recorridos de usuario",
            "UI / diseño de interfaces",
            "Wireframes y prototipos",
            "Dirección visual",
            "Sistemas de diseño",
            "Motion e interacción",
          ],
        },
        {
          number:
            "02",

          title:
            "DESARROLLO WEB",

          description:
            "Desarrollamos sitios web rápidos, responsivos y preparados para crecer, desde implementaciones sobre CMS hasta experiencias completamente a medida.",

          tag:
            "WEB / CMS / DESARROLLO",

          items: [
            "Sitios corporativos",
            "Landing pages",
            "WordPress",
            "Desarrollo a medida",
            "Frontend interactivo",
            "Integraciones y APIs",
            "Optimización de rendimiento",
            "Mantenimiento y evolución",
          ],
        },
        {
          number:
            "03",

          title:
            "E-COMMERCE",

          description:
            "Diseñamos y desarrollamos tiendas en línea donde catálogo, contenido y compra forman una sola experiencia, cuidando tanto la conversión como la operación diaria.",

          tag:
            "SHOPIFY / PAGOS / EXPERIENCIA",

          items: [
            "Shopify",
            "Arquitectura de catálogo",
            "Páginas de producto",
            "Carrito y checkout",
            "Pasarelas de pago",
            "Envíos y logística",
            "Integraciones",
            "Optimización de experiencia de compra",
          ],
        },
        {
          number:
            "04",

          title:
            "PRODUCTOS Y SISTEMAS",

          description:
            "Convertimos procesos, servicios e ideas de negocio en productos digitales funcionales: plataformas, paneles y sistemas web diseñados alrededor de quienes realmente los utilizan.",

          tag:
            "PRODUCTO / DATOS / SISTEMAS",

          items: [
            "Plataformas web",
            "Paneles administrativos",
            "Sistemas internos",
            "SaaS",
            "Reservas y gestión",
            "Dashboards",
            "Bases de datos",
            "Autenticación y roles",
            "Integraciones y automatización",
          ],
        },
      ],
    },

    process: {
      meta: {
        label:
          "ARIXV / PROCESO",

        number:
          "05",
      },

      eyebrow:
        "DE LA IDEA AL PRODUCTO",

      title:
        "UN PROCESO CLARO. CERO RUIDO.",

      intro:
        "Cada proyecto es distinto, pero nuestra forma de trabajar mantiene una lógica clara: entender antes de decidir, diseñar antes de construir y desarrollar solo lo que realmente aporta.",

      steps: [
        {
          number:
            "01",

          title:
            "ENTENDER",

          short:
            "CONTEXTO / OBJETIVOS",

          description:
            "Definimos objetivos, audiencia, necesidades, alcance y restricciones para empezar el proyecto con una dirección clara.",
        },
        {
          number:
            "02",

          title:
            "DISEÑAR",

          short:
            "UX / UI / DIRECCIÓN",

          description:
            "Convertimos lo aprendido en estructura, recorridos, interfaces y una dirección visual coherente antes de pasar al desarrollo.",
        },
        {
          number:
            "03",

          title:
            "CONSTRUIR",

          short:
            "DESARROLLO / INTERACCIÓN / SISTEMAS",

          description:
            "Desarrollamos la solución cuidando rendimiento, responsive, interacción, integraciones y una base técnica preparada para evolucionar.",
        },
        {
          number:
            "04",

          title:
            "LANZAR",

          short:
            "PRUEBAS / PUBLICACIÓN / EVOLUCIÓN",

          description:
            "Probamos, corregimos y publicamos. Después dejamos una base estable para medir, mejorar y continuar creciendo cuando el proyecto lo necesite.",
        },
      ],
    },

    explorations: {
      meta: {
        label:
          "ARIXV / REFERENCIAS",

        number:
          "06",
      },

      words: [
        "IDEAS EN",
        "MOVIMIENTO",
      ],

      intro:
        "Una selección de sitios y referencias visuales que exploramos por su composición, interacción, ritmo y dirección digital.",

      cards: [
        {
          number:
            "01",

          title:
            "REFERENCE 01",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-01.webp",
        },
        {
          number:
            "02",

          title:
            "REFERENCE 02",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-02.webp",
        },
        {
          number:
            "03",

          title:
            "REFERENCE 03",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-03.webp",
        },
        {
          number:
            "04",

          title:
            "REFERENCE 04",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-04.webp",
        },
        {
          number:
            "05",

          title:
            "REFERENCE 05",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-05.webp",
        },
        {
          number:
            "06",

          title:
            "REFERENCE 06",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-06.webp",
        },
      ],
    },

    testimonials: {
      meta: {
        label:
          "ARIXV / TESTIMONIOS",

        number:
          "07",
      },

      eyebrow:
        "RELACIONES QUE VAN MÁS ALLÁ DE UNA ENTREGA",

      title:
        "MÁS QUE CLIENTES. ALIADOS.",

      items: [
        {
          number:
            "01",

          quote:
            "Entendieron la idea, la ordenaron y la llevaron a una experiencia mucho más clara de lo que imaginábamos.",

          client:
            "CLIENTE / E-COMMERCE",

          project:
            "WEB / E-COMMERCE",
        },
        {
          number:
            "02",

          quote:
            "El proceso fue directo y muy cuidado. Cada decisión tenía una razón y el resultado se sintió completamente nuestro.",

          client:
            "CLIENTE / SITIO WEB",

          project:
            "SITIO WEB / MARCA",
        },
        {
          number:
            "03",

          quote:
            "Encontraron una forma más simple de convertir una necesidad compleja en un producto digital fácil de usar.",

          client:
            "CLIENTE / PRODUCTO DIGITAL",

          project:
            "PRODUCTO / SISTEMA",
        },
        {
          number:
            "04",

          quote:
            "La comunicación fue clara durante todo el proyecto y siempre supimos qué se estaba construyendo y por qué.",

          client:
            "CLIENTE / SITIO WEB",

          project:
            "WEB / UX",
        },
        {
          number:
            "05",

          quote:
            "El resultado final se siente sólido, rápido y coherente con la forma en la que queríamos presentar nuestra marca.",

          client:
            "CLIENTE / E-COMMERCE",

          project:
            "E-COMMERCE / DIGITAL",
        },
      ],
    },

    finalCta: {
      meta: {
        label:
          "ARIXV / CONTACTO",

        number:
          "08",
      },

      eyebrow:
        "TU IDEA PUEDE SER LO SIGUIENTE.",

      headline:
        "HABLEMOS",

      description:
        "Cuéntanos qué necesitas construir. Sitios web, e-commerce, productos digitales o sistemas: todo empieza por entender bien la idea.",

      cta:
        "INICIAR UN PROYECTO",

      href:
        "https://wa.me/528140165334?text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20ARIXV.%20Me%20gustar%C3%ADa%20contarles%20lo%20que%20necesito%20y%20conocer%20el%20proceso%2C%20tiempos%20y%20costos.",

      email:
        "contacto@arixv.com.mx",
    },

    footer: {
      navigation: [
        {
          label:
            "PROYECTOS",

          href:
            "/es/proyectos/",
        },
        {
          label:
            "SERVICIOS",

          href:
            "/es/#capabilities",
        },
        {
          label:
            "PROCESO",

          href:
            "/es/#process",
        },
        {
          label:
            "CONTACTO",

          href:
            "/es/#contact",
        },
      ],

      contact: [
        {
          label:
            "EMAIL",

          value:
            "contacto@arixv.com.mx",

          href:
            "mailto:contacto@arixv.com.mx",
        },
        {
          label:
            "WHATSAPP",

          value:
            "+52 81 4016 5334",

          href:
            "https://wa.me/528140165334?text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20ARIXV.%20Me%20gustar%C3%ADa%20contarles%20lo%20que%20necesito%20y%20conocer%20el%20proceso%2C%20tiempos%20y%20costos.",
        },
      ],

      social: [
        {
          label:
            "INSTAGRAM",

          href:
            "https://www.instagram.com/arixv21/",
        },
        {
          label:
            "FACEBOOK",

          href:
            "https://www.facebook.com/profile.php?id=61572553050464",
        },
      ],

      legal: [
        {
          label:
            "AVISO DE PRIVACIDAD",

          href:
            "/es/aviso-de-privacidad",
        },
        {
          label:
            "TÉRMINOS Y CONDICIONES",

          href:
            "/es/terminos-y-condiciones",
        },
      ],

      copyright:
        "© 2026 ARIXV",
    },

    transition: {
      words: [
        "DESIGN",
        "CODE",
        "IMPACT",
      ],

      darkMeta: {
        left:
          "ARIXV / DEVELOPMENT STUDIO",

        right:
          "01 — 03",
      },

      intro: {
        meta:
          "ARIXV / STUDIO",

        number:
          "01",

        title:
          "CONVERTIMOS IDEAS EN PRODUCTOS DIGITALES DONDE DISEÑO, DESARROLLO Y NEGOCIO TRABAJAN JUNTOS.",

        label:
          "DESIGN / DEVELOPMENT / STRATEGY",

        description:
          "Diseñamos y desarrollamos sitios web, e-commerce y productos digitales con una base clara: funcionar bien, comunicar mejor y estar preparados para crecer.",
      },
    },
  },

  en: {
    hero: {
      meta: {
        eyebrow:
          "DEVELOPMENT STUDIO",

        services:
          "DESIGN / TECHNOLOGY",

        location:
          "MEXICO",

        year:
          "2026",
      },

      title: {
        lineOne:
          "DIGITAL",

        lineTwo:
          "EXPERIENCES",
      },

      statement: {
        prefix:
          "BUILT TO",

        words: [
          "PERFORM.",
          "CONVERT.",
          "SCALE.",
          "EVOLVE.",
        ],
      },

      intro:
        "Strategy, design and development to turn ideas into websites, e-commerce and digital products.",

      cta: {
        label:
          "LET'S TALK",

        href:
          "#contact",
      },

      scrollLabel:
        "SCROLL TO EXPLORE",
    },

    selectedWork: {
      meta: {
        label:
          "ARIXV / SELECTED WORK",

        number:
          "02",
      },

      heading: {
        lineOne:
          "FEATURED",

        lineTwo:
          "PROJECTS",
      },

      viewAll: {
        label:
          "VIEW ALL PROJECTS",

        href:
          "/en/projects/",
      },

      collection: {
        title:
          "Explore more websites, e-commerce and digital products developed by ARIXV.",

        cta:
          "VIEW ALL PROJECTS",

        href:
          "/en/projects/",
      },

      projects: [
        {
          number:
            "01",

          title:
            "AFTER HOUSE",

          category:
            "WEB / EXPERIENCES / EVENTS",

          year:
            "2026",

          description:
            "A digital experience that brings services, entertainment and atmosphere together around each event.",

          cta:
            "VIEW PROJECT",

          href:
            "/en/projects/after-house/",

          image:
            "/images/projects/afterhouse.png",

          mobileImage:
            "/images/projects/mobile/afterhouse.png",

          visual:
            "product",
        },
        {
          number:
            "02",

          title:
            "BOULDR",

          category:
            "E-COMMERCE / SHOPIFY",

          year:
            "2026",

          description:
            "An e-commerce experience where product, content and the purchase journey work as one system.",

          cta:
            "VIEW PROJECT",

          href:
            "/en/projects/bouldr/",

          image:
            "/images/projects/bouldr.png",

          mobileImage:
            "/images/projects/mobile/bouldr.png",

          visual:
            "commerce",
        },
        {
          number:
            "03",

          title:
            "FLOW SUPPLEMENTS",

          category:
            "E-COMMERCE / SHOPIFY",

          year:
            "2026",

          description:
            "An e-commerce experience that brings catalog, product information and purchase together to make discovery simpler.",

          cta:
            "VIEW PROJECT",

          href:
            "/en/projects/flow-supplements/",

          image:
            "/images/projects/flow.png",

          mobileImage:
            "/images/projects/mobile/flow.png",

          visual:
            "commerce",
        },
      ],
    },

    services: {
      meta: {
        label:
          "ARIXV / SERVICES",

        number:
          "03",
      },

      eyebrow:
        "OUR SERVICES",

      items: [
        "WEB",
        "E-COMMERCE",
        "PRODUCTS",
        "SYSTEMS",
      ],

      tagline:
        "DESIGNED WITH INTENT. DEVELOPED TO WORK.",

      cta: {
        label:
          "VIEW SERVICES",

        href:
          "#capabilities",
      },
    },

    technologyTicker: {
      label:
        "TOOLS / TECHNOLOGIES / PLATFORMS",

      items:
        technologyItems,
    },

    capabilities: {
      statement: [
        "WHERE IDEAS",
        "TAKE SHAPE",
        "AND BECOME PRODUCT.",
      ],

      details: [
        {
          number:
            "01",

          title:
            "STRATEGY & DESIGN",

          description:
            "We define how a digital product should work, feel and communicate before we build it. We organize content, journeys and interfaces so every decision has a clear reason.",

          tag:
            "STRATEGY / UX / UI",

          items: [
            "Information architecture",
            "UX / user journeys",
            "UI / interface design",
            "Wireframes and prototypes",
            "Visual direction",
            "Design systems",
            "Motion and interaction",
          ],
        },
        {
          number:
            "02",

          title:
            "WEB DEVELOPMENT",

          description:
            "We develop fast, responsive websites built to grow, from CMS implementations to fully custom experiences.",

          tag:
            "WEB / CMS / DEVELOPMENT",

          items: [
            "Corporate websites",
            "Landing pages",
            "WordPress",
            "Custom development",
            "Interactive frontend",
            "Integrations and APIs",
            "Performance optimization",
            "Maintenance and evolution",
          ],
        },
        {
          number:
            "03",

          title:
            "E-COMMERCE",

          description:
            "We design and develop online stores where catalog, content and purchase work as one experience, supporting both conversion and day-to-day operations.",

          tag:
            "SHOPIFY / PAYMENTS / EXPERIENCE",

          items: [
            "Shopify",
            "Catalog architecture",
            "Product pages",
            "Cart and checkout",
            "Payment gateways",
            "Shipping and logistics",
            "Integrations",
            "Shopping experience optimization",
          ],
        },
        {
          number:
            "04",

          title:
            "PRODUCTS & SYSTEMS",

          description:
            "We turn processes, services and business ideas into functional digital products: platforms, dashboards and web systems designed around the people who actually use them.",

          tag:
            "PRODUCT / DATA / SYSTEMS",

          items: [
            "Web platforms",
            "Admin dashboards",
            "Internal systems",
            "SaaS",
            "Booking and management",
            "Data dashboards",
            "Databases",
            "Authentication and roles",
            "Integrations and automation",
          ],
        },
      ],
    },

    process: {
      meta: {
        label:
          "ARIXV / PROCESS",

        number:
          "05",
      },

      eyebrow:
        "FROM IDEA TO PRODUCT",

      title:
        "A CLEAR PROCESS. ZERO NOISE.",

      intro:
        "Every project is different, but our process follows a clear logic: understand before deciding, design before building, and develop only what adds real value.",

      steps: [
        {
          number:
            "01",

          title:
            "UNDERSTAND",

          short:
            "CONTEXT / GOALS",

          description:
            "We define goals, audience, needs, scope and constraints so the project starts with a clear direction.",
        },
        {
          number:
            "02",

          title:
            "DESIGN",

          short:
            "UX / UI / DIRECTION",

          description:
            "We turn what we learn into structure, journeys, interfaces and a coherent visual direction before moving into development.",
        },
        {
          number:
            "03",

          title:
            "BUILD",

          short:
            "DEVELOPMENT / INTERACTION / SYSTEMS",

          description:
            "We build the solution with performance, responsiveness, interaction, integrations and a technical foundation ready to evolve.",
        },
        {
          number:
            "04",

          title:
            "LAUNCH",

          short:
            "TESTING / RELEASE / EVOLUTION",

          description:
            "We test, refine and publish. Then we leave a stable foundation ready to measure, improve and keep growing when the project needs it.",
        },
      ],
    },

    explorations: {
      meta: {
        label:
          "ARIXV / REFERENCES",

        number:
          "06",
      },

      words: [
        "IDEAS IN",
        "MOTION",
      ],

      intro:
        "A selection of websites and visual references we explore for their composition, interaction, rhythm and digital direction.",

      cards: [
        {
          number:
            "01",

          title:
            "REFERENCE 01",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-01.webp",
        },
        {
          number:
            "02",

          title:
            "REFERENCE 02",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-02.webp",
        },
        {
          number:
            "03",

          title:
            "REFERENCE 03",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-03.webp",
        },
        {
          number:
            "04",

          title:
            "REFERENCE 04",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-04.webp",
        },
        {
          number:
            "05",

          title:
            "REFERENCE 05",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-05.webp",
        },
        {
          number:
            "06",

          title:
            "REFERENCE 06",

          category:
            "WEB / VISUAL STUDY",

          image:
            "/images/explorations/reference-06.webp",
        },
      ],
    },

    testimonials: {
      meta: {
        label:
          "ARIXV / TESTIMONIALS",

        number:
          "07",
      },

      eyebrow:
        "RELATIONSHIPS THAT GO BEYOND DELIVERY",

      title:
        "BEYOND CLIENTS. PARTNERS.",

      items: [
        {
          number:
            "01",

          quote:
            "They understood the idea, gave it structure, and turned it into a much clearer experience than we had imagined.",

          client:
            "CLIENT / E-COMMERCE",

          project:
            "WEB / E-COMMERCE",
        },
        {
          number:
            "02",

          quote:
            "The process was direct and carefully considered. Every decision had a reason and the result felt completely ours.",

          client:
            "CLIENT / WEBSITE",

          project:
            "WEBSITE / BRAND",
        },
        {
          number:
            "03",

          quote:
            "They found a simpler way to turn a complex need into a digital product that is easy to use.",

          client:
            "CLIENT / DIGITAL PRODUCT",

          project:
            "PRODUCT / SYSTEM",
        },
        {
          number:
            "04",

          quote:
            "Communication stayed clear throughout the project and we always understood what was being built and why.",

          client:
            "CLIENT / WEBSITE",

          project:
            "WEB / UX",
        },
        {
          number:
            "05",

          quote:
            "The final result feels solid, fast, and consistent with the way we wanted to present our brand.",

          client:
            "CLIENT / E-COMMERCE",

          project:
            "E-COMMERCE / DIGITAL",
        },
      ],
    },

    finalCta: {
      meta: {
        label:
          "ARIXV / CONTACT",

        number:
          "08",
      },

      eyebrow:
        "YOUR IDEA COULD BE NEXT.",

      headline:
        "LET'S TALK",

      description:
        "Tell us what you need to build. Websites, e-commerce, digital products or systems: it all starts with understanding the idea.",

      cta:
        "START A PROJECT",

      href:
        "https://wa.me/528140165334?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project%20with%20ARIXV.%20I%27d%20like%20to%20tell%20you%20what%20I%20need%20and%20learn%20about%20the%20process%2C%20timelines%2C%20and%20costs.",

      email:
        "contacto@arixv.com.mx",
    },

    footer: {
      navigation: [
        {
          label:
            "PROJECTS",

          href:
            "/en/projects/",
        },
        {
          label:
            "SERVICES",

          href:
            "/en/#capabilities",
        },
        {
          label:
            "PROCESS",

          href:
            "/en/#process",
        },
        {
          label:
            "CONTACT",

          href:
            "/en/#contact",
        },
      ],

      contact: [
        {
          label:
            "EMAIL",

          value:
            "contacto@arixv.com.mx",

          href:
            "mailto:contacto@arixv.com.mx",
        },
        {
          label:
            "WHATSAPP",

          value:
            "+52 81 4016 5334",

          href:
            "https://wa.me/528140165334?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project%20with%20ARIXV.%20I%27d%20like%20to%20tell%20you%20what%20I%20need%20and%20learn%20about%20the%20process%2C%20timelines%2C%20and%20costs.",
        },
      ],

      social: [
        {
          label:
            "INSTAGRAM",

          href:
            "https://www.instagram.com/arixv21/",
        },
        {
          label:
            "FACEBOOK",

          href:
            "https://www.facebook.com/profile.php?id=61572553050464",
        },
      ],

      legal: [
        {
          label:
            "PRIVACY POLICY",

          href:
            "/en/privacy",
        },
        {
          label:
            "TERMS & CONDITIONS",

          href:
            "/en/terms",
        },
      ],

      copyright:
        "© 2026 ARIXV",
    },

    transition: {
      words: [
        "DESIGN",
        "CODE",
        "IMPACT",
      ],

      darkMeta: {
        left:
          "ARIXV / DEVELOPMENT STUDIO",

        right:
          "01 — 03",
      },

      intro: {
        meta:
          "ARIXV / STUDIO",

        number:
          "01",

        title:
          "WE TURN IDEAS INTO DIGITAL PRODUCTS WHERE DESIGN, DEVELOPMENT AND BUSINESS WORK TOGETHER.",

        label:
          "DESIGN / DEVELOPMENT / STRATEGY",

        description:
          "We design and develop websites, e-commerce and digital products with a clear foundation: work well, communicate better and be ready to grow.",
      },
    },
  },
} as const satisfies Record<
  HomeLocale,
  HomeContent
>;