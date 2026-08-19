export type ProjectsLocale =
  | "es"
  | "en";

export type ProjectCategory =
  | "web"
  | "ecommerce"
  | "product"
  | "branding";

export type ProjectSize =
  | "wide"
  | "medium"
  | "compact";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyFeature = {
  number: string;
  title: string;
  text: string;
};

export type CaseStudyPoint = {
  number: string;
  title: string;
  text: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  label: string;
  variant?: "wide" | "portrait";
};

export type ProjectArchiveLocaleContent = {
  categoryLabel: string;
};

export type CaseStudyLocaleContent =
  ProjectArchiveLocaleContent & {
    intro: string;

    metrics: CaseStudyMetric[];

    overview: {
      eyebrow: string;
      title: string;
      text: string;
    };

    scope: {
      eyebrow: string;
      title: string;
      intro: string;
      items: string[];
    };

    challenge: {
      eyebrow: string;
      title: string;
      text: string;
    };

    decisions: {
      eyebrow: string;
      title: string;
      items: CaseStudyPoint[];
    };

    gallery: CaseStudyImage[];

    features: CaseStudyFeature[];

    outcome: {
      eyebrow: string;
      title: string;
      text: string;
      items: string[];
    };

    statement: {
      lineOne: string;
      lineTwo: string;
      lineThree: string;
    };

    nextLabel: string;
  };

export type ProjectBase = {
  number: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  siteUrl: string;
  size: ProjectSize;
};

export type ArchiveOnlyProject =
  ProjectBase & {
    caseStudy: false;

    content: Record<
      ProjectsLocale,
      ProjectArchiveLocaleContent
    >;
  };

export type CaseStudyProject =
  ProjectBase & {
    caseStudy: true;

    platform: string;

    heroImage: string;

    content: Record<
      ProjectsLocale,
      CaseStudyLocaleContent
    >;

    next: {
      number: string;
      title: string;
      slug: string;
    };
  };

export type Project =
  | ArchiveOnlyProject
  | CaseStudyProject;

export const projects = [
  {
    number:
      "01",

    slug:
      "after-house",

    title:
      "AFTER HOUSE",

    category:
      "web",

    year:
      "2026",

    image:
      "/projects/after/after-house-home.webp",

    siteUrl:
      "https://afterhouse.com.mx/es",

    size:
      "wide",

    caseStudy:
      true,

    platform:
      "WEB",

    heroImage:
      "/projects/after/after-house-home.webp",

    content: {
      es: {
        categoryLabel:
          "WEB / EXPERIENCIAS / EVENTOS",

        intro:
          "Una experiencia digital construida para reunir servicios, entretenimiento y atmósfera bajo una misma identidad, convirtiendo la propuesta de After House en un recorrido pensado alrededor de cada evento.",

        metrics: [
          {
            label:
              "TIPO",

            value:
              "WEB / EXPERIENCIAS",
          },
          {
            label:
              "ENFOQUE",

            value:
              "EVENTOS",
          },
          {
            label:
              "AÑO",

            value:
              "2026",
          },
          {
            label:
              "ESTADO",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXTO",

          title:
            "UNA MARCA DE EXPERIENCIAS NECESITABA SENTIRSE COMO UNA EXPERIENCIA DESDE EL PRIMER CONTACTO.",

          text:
            "After House reúne servicios para eventos que van desde mixología y barman hasta entretenimiento, photo booth, bocados, cristalería, DJ y galerías digitales. El sitio debía presentar una oferta diversa sin fragmentarla y construir una narrativa común alrededor de la atmósfera, el servicio y los recuerdos.",
        },

        scope: {
          eyebrow:
            "02 / ALCANCE",

          title:
            "DE PRESENTAR SERVICIOS A CONSTRUIR UN RECORRIDO DIGITAL ALREDEDOR DEL EVENTO.",

          intro:
            "El proyecto se planteó como una experiencia web capaz de presentar la marca, explicar sus servicios y conducir al usuario hacia una cotización sin perder el carácter visual de After House.",

          items: [
            "ARQUITECTURA Y JERARQUÍA DEL SITIO",
            "EXPERIENCIA WEB RESPONSIVE",
            "PRESENTACIÓN DE SERVICIOS",
            "EXPERIENCIA BILINGÜE ES / EN",
            "SECCIONES DE MIXOLOGÍA Y EXPERIENCIAS",
            "GALERÍAS DIGITALES",
            "FORMULARIO DE COTIZACIÓN",
            "INTERACCIONES Y MOTION",
            "EXPERIENCIA MOBILE-FIRST",
          ],
        },

        challenge: {
          eyebrow:
            "03 / RETO",

          title:
            "HACER QUE SERVICIOS MUY DISTINTOS SE SINTIERAN PARTE DE UNA MISMA EXPERIENCIA.",

          text:
            "Mixología, entretenimiento, hospitalidad, gastronomía y recuerdos digitales tienen necesidades visuales y comerciales diferentes. El reto fue reunirlos dentro de una estructura coherente, mantener una identidad reconocible y lograr que el usuario entendiera la propuesta sin convertir el sitio en una lista de servicios.",
        },

        decisions: {
          eyebrow:
            "04 / DECISIONES CLAVE",

          title:
            "UNA EXPERIENCIA CONSTRUIDA ALREDEDOR DE CÓMO SE VIVE UN EVENTO.",

          items: [
            {
              number:
                "01",

              title:
                "LA EXPERIENCIA ANTES QUE EL CATÁLOGO",

              text:
                "La arquitectura presenta After House como una propuesta integral para eventos. Los servicios aparecen dentro de una narrativa común en lugar de funcionar como piezas aisladas.",
            },
            {
              number:
                "02",

              title:
                "ATMÓSFERA COMO LENGUAJE VISUAL",

              text:
                "Fotografía, composición, ritmo y contenido trabajan juntos para transmitir el carácter nocturno y social de la marca sin sacrificar claridad.",
            },
            {
              number:
                "03",

              title:
                "UN CAMINO CLARO HACIA LA COTIZACIÓN",

              text:
                "La experiencia conduce desde el descubrimiento de la marca y sus servicios hasta una acción comercial concreta: solicitar una propuesta para el evento.",
            },
            {
              number:
                "04",

              title:
                "CONTENIDO QUE CONTINÚA DESPUÉS DEL EVENTO",

              text:
                "Las galerías digitales introducen una capa de memoria dentro de la propuesta y conectan la experiencia física del evento con un espacio digital posterior.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/after/after-house-philosophy.webp",

            alt:
              "Experiencia web de After House",

            label:
              "EXPERIENCIA / HOME",

            variant:
              "wide",
          },
          {
            src:
              "/projects/after/after-house-mezcalita.webp",

            alt:
              "Servicios y experiencia de After House",

            label:
              "SERVICIOS / EXPERIENCIA",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "SERVICES",

            text:
              "Una estructura capaz de reunir mixología, entretenimiento, hospitalidad y servicios complementarios sin perder claridad.",
          },
          {
            number:
              "02",

            title:
              "ATMOSPHERE",

            text:
              "Una dirección visual pensada para transmitir energía, celebración y una sensación premium alrededor de cada evento.",
          },
          {
            number:
              "03",

            title:
              "MEMORY",

            text:
              "Las galerías digitales extienden la experiencia hacia los recuerdos y conectan lo que sucede durante el evento con lo que permanece después.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / RESULTADO",

          title:
            "UNA EXPERIENCIA DIGITAL QUE REÚNE MARCA, SERVICIOS Y CONVERSIÓN EN UN MISMO RECORRIDO.",

          text:
            "El resultado es una presencia digital que comunica la propuesta de After House desde la experiencia, organiza una oferta amplia de servicios y construye un camino claro hacia la cotización, dejando además una base preparada para evolucionar junto con la marca.",

          items: [
            "IDENTIDAD DIGITAL COHERENTE",
            "SERVICIOS CENTRALIZADOS",
            "EXPERIENCIA RESPONSIVE",
            "CONTENIDO BILINGÜE",
            "COTIZACIÓN INTEGRADA",
          ],
        },

        statement: {
          lineOne:
            "EXPERIENCE",

          lineTwo:
            "ATMOSPHERE",

          lineThree:
            "MEMORY.",
        },

        nextLabel:
          "SIGUIENTE PROYECTO",
      },

      en: {
        categoryLabel:
          "WEB / EXPERIENCES / EVENTS",

        intro:
          "A digital experience built to bring services, entertainment and atmosphere under one identity, turning the After House offering into a journey designed around each event.",

        metrics: [
          {
            label:
              "TYPE",

            value:
              "WEB / EXPERIENCES",
          },
          {
            label:
              "FOCUS",

            value:
              "EVENTS",
          },
          {
            label:
              "YEAR",

            value:
              "2026",
          },
          {
            label:
              "STATUS",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXT",

          title:
            "AN EXPERIENCE BRAND NEEDED TO FEEL LIKE AN EXPERIENCE FROM THE VERY FIRST INTERACTION.",

          text:
            "After House brings together event services ranging from mixology and bartending to entertainment, photo booth, bites, glassware, DJ and digital galleries. The website needed to present a diverse offering without fragmenting it, while building one narrative around atmosphere, service and memory.",
        },

        scope: {
          eyebrow:
            "02 / SCOPE",

          title:
            "FROM PRESENTING SERVICES TO BUILDING A DIGITAL JOURNEY AROUND THE EVENT.",

          intro:
            "The project was shaped as a web experience capable of presenting the brand, explaining its services and guiding users toward a quote without losing the visual character of After House.",

          items: [
            "SITE ARCHITECTURE AND HIERARCHY",
            "RESPONSIVE WEB EXPERIENCE",
            "SERVICE PRESENTATION",
            "BILINGUAL ES / EN EXPERIENCE",
            "MIXOLOGY AND EXPERIENCE SECTIONS",
            "DIGITAL GALLERIES",
            "QUOTE FORM",
            "INTERACTIONS AND MOTION",
            "MOBILE-FIRST EXPERIENCE",
          ],
        },

        challenge: {
          eyebrow:
            "03 / CHALLENGE",

          title:
            "MAKE VERY DIFFERENT SERVICES FEEL PART OF THE SAME EXPERIENCE.",

          text:
            "Mixology, entertainment, hospitality, food and digital memories have different visual and commercial needs. The challenge was to bring them into one coherent structure, maintain a recognizable identity and help users understand the offering without turning the website into a simple list of services.",
        },

        decisions: {
          eyebrow:
            "04 / KEY DECISIONS",

          title:
            "AN EXPERIENCE BUILT AROUND HOW AN EVENT IS ACTUALLY LIVED.",

          items: [
            {
              number:
                "01",

              title:
                "EXPERIENCE BEFORE CATALOG",

              text:
                "The architecture presents After House as an integrated event offering. Services live inside one shared narrative instead of behaving like isolated pieces.",
            },
            {
              number:
                "02",

              title:
                "ATMOSPHERE AS A VISUAL LANGUAGE",

              text:
                "Photography, composition, rhythm and content work together to convey the brand's social and nighttime character without sacrificing clarity.",
            },
            {
              number:
                "03",

              title:
                "A CLEAR PATH TO THE QUOTE",

              text:
                "The journey moves from discovering the brand and its services toward one concrete commercial action: requesting a proposal for the event.",
            },
            {
              number:
                "04",

              title:
                "CONTENT THAT LIVES BEYOND THE EVENT",

              text:
                "Digital galleries add a layer of memory to the offering and connect the physical event with a digital space that remains afterward.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/after/after-house-philosophy.webp",

            alt:
              "After House web experience",

            label:
              "EXPERIENCE / HOME",

            variant:
              "wide",
          },
          {
            src:
              "/projects/after/after-house-mezcalita.webp",

            alt:
              "After House services and experience",

            label:
              "SERVICES / EXPERIENCE",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "SERVICES",

            text:
              "A structure that brings mixology, entertainment, hospitality and complementary services together without losing clarity.",
          },
          {
            number:
              "02",

            title:
              "ATMOSPHERE",

            text:
              "A visual direction designed to communicate energy, celebration and a premium feeling around each event.",
          },
          {
            number:
              "03",

            title:
              "MEMORY",

            text:
              "Digital galleries extend the experience into memory, connecting what happens during the event with what remains afterward.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / OUTCOME",

          title:
            "A DIGITAL EXPERIENCE THAT BRINGS BRAND, SERVICES AND CONVERSION INTO ONE JOURNEY.",

          text:
            "The result is a digital presence that communicates the After House offering through experience, organizes a broad service portfolio and creates a clear path toward requesting a quote, while leaving a foundation ready to evolve with the brand.",

          items: [
            "COHERENT DIGITAL IDENTITY",
            "CENTRALIZED SERVICES",
            "RESPONSIVE EXPERIENCE",
            "BILINGUAL CONTENT",
            "INTEGRATED QUOTE FLOW",
          ],
        },

        statement: {
          lineOne:
            "EXPERIENCE",

          lineTwo:
            "ATMOSPHERE",

          lineThree:
            "MEMORY.",
        },

        nextLabel:
          "NEXT PROJECT",
      },
    },

    next: {
      number:
        "02",

      title:
        "FLOW SUPPLEMENTS",

      slug:
        "flow-supplements",
    },
  },

  {
    number:
      "02",

    slug:
      "flow-supplements",

    title:
      "FLOW",

    category:
      "ecommerce",

    year:
      "2026",

    image:
      "/projects/flow/flow-home.webp",

    siteUrl:
      "https://flowsupplementscompany.com/",

    size:
      "wide",

    caseStudy:
      true,

    platform:
      "SHOPIFY",

    heroImage:
      "/projects/flow/flow-home.webp",

    content: {
      es: {
        categoryLabel:
          "E-COMMERCE / SHOPIFY",

        intro:
          "Un e-commerce desarrollado para organizar un catálogo amplio de suplementos y convertir producto, información y compra en una experiencia más clara.",

        metrics: [
          {
            label:
              "TIPO",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATAFORMA",

            value:
              "SHOPIFY",
          },
          {
            label:
              "AÑO",

            value:
              "2026",
          },
          {
            label:
              "ESTADO",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXTO",

          title:
            "UN CATÁLOGO AMPLIO NECESITABA UNA ESTRUCTURA FÁCIL DE EXPLORAR.",

          text:
            "Flow Supplements reúne productos de distintas categorías, presentaciones y composiciones. El proyecto requería una tienda capaz de ordenar esa variedad y ayudar al usuario a encontrar productos sin convertir la navegación en un catálogo difícil de recorrer.",
        },

        scope: {
          eyebrow:
            "02 / ALCANCE",

          title:
            "DE ORGANIZAR EL CATÁLOGO A CONSTRUIR EL RECORRIDO DE COMPRA.",

          intro:
            "El trabajo se enfocó en estructurar la tienda para que categorías, productos, información y compra convivieran dentro de una experiencia consistente.",

          items: [
            "ESTRUCTURA DEL E-COMMERCE",
            "ORGANIZACIÓN DE CATÁLOGO",
            "COLECCIONES Y CATEGORÍAS",
            "PÁGINAS DE PRODUCTO",
            "EXPERIENCIA RESPONSIVE",
            "CARRITO Y FLUJO DE COMPRA",
            "CONFIGURACIÓN DE SHOPIFY",
            "INFORMACIÓN DE ENVÍOS",
            "CONTENIDO COMERCIAL",
          ],
        },

        challenge: {
          eyebrow:
            "03 / RETO",

          title:
            "HACER SIMPLE LA ELECCIÓN DENTRO DE UN CATÁLOGO CON MUCHAS OPCIONES.",

          text:
            "Cuando distintos productos comparten categorías, ingredientes o beneficios relacionados, la estructura de navegación se vuelve parte fundamental de la experiencia. El reto fue dar orden al catálogo y mantener siempre clara la relación entre descubrir, entender y comprar.",
        },

        decisions: {
          eyebrow:
            "04 / DECISIONES CLAVE",

          title:
            "UNA TIENDA ORGANIZADA PARA DESCUBRIR, ENTENDER Y COMPRAR.",

          items: [
            {
              number:
                "01",

              title:
                "CATEGORÍAS COMO PUNTO DE ENTRADA",

              text:
                "El catálogo se organiza para permitir que el usuario explore por familias de producto en lugar de depender únicamente de búsquedas individuales.",
            },
            {
              number:
                "02",

              title:
                "PRODUCTO ANTES QUE RUIDO",

              text:
                "La interfaz prioriza nombre, presentación, precio y acciones de compra para que la información comercial principal pueda identificarse rápidamente.",
            },
            {
              number:
                "03",

              title:
                "RECORRIDOS CORTOS HACIA LA COMPRA",

              text:
                "Las colecciones permiten acercar las acciones comerciales al momento de exploración y reducir pasos innecesarios durante el recorrido.",
            },
            {
              number:
                "04",

              title:
                "UNA BASE QUE PUEDE CRECER",

              text:
                "La estructura por colecciones permite incorporar nuevos productos y categorías manteniendo una lógica común dentro de la tienda.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/flow/flow-products.webp",

            alt:
              "Colección de productos más vendidos de Flow Supplements",

            label:
              "COLECCIÓN / MÁS VENDIDOS",

            variant:
              "wide",
          },
          {
            src:
              "/projects/flow/flow-product-detail.webp",

            alt:
              "Ficha de producto de Flow Supplements",

            label:
              "PRODUCTO / DETALLE",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "CATÁLOGO",

            text:
              "Productos organizados dentro de colecciones que facilitan la exploración de una oferta amplia.",
          },
          {
            number:
              "02",

            title:
              "PRODUCTO",

            text:
              "Fichas diseñadas para reunir presentación, precio, información y acciones de compra dentro de un mismo recorrido.",
          },
          {
            number:
              "03",

            title:
              "COMERCIO",

            text:
              "Carrito, promociones, envíos y navegación comercial integrados dentro de la experiencia de Shopify.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / RESULTADO",

          title:
            "UNA TIENDA PREPARADA PARA HACER MÁS SIMPLE DESCUBRIR, ENTENDER Y COMPRAR.",

          text:
            "El resultado es una estructura de e-commerce que conecta catálogo, categorías y producto dentro de un recorrido comercial consistente, dejando una base preparada para seguir incorporando nuevas referencias.",

          items: [
            "CATÁLOGO ORGANIZADO",
            "NAVEGACIÓN POR CATEGORÍAS",
            "EXPERIENCIA RESPONSIVE",
            "FLUJO DE COMPRA INTEGRADO",
            "BASE ESCALABLE EN SHOPIFY",
          ],
        },

        statement: {
          lineOne:
            "PRODUCT",

          lineTwo:
            "CLARITY",

          lineThree:
            "COMMERCE.",
        },

        nextLabel:
          "SIGUIENTE PROYECTO",
      },

      en: {
        categoryLabel:
          "E-COMMERCE / SHOPIFY",

        intro:
          "An e-commerce experience developed to organize a broad supplement catalog and turn product, information and purchase into a clearer journey.",

        metrics: [
          {
            label:
              "TYPE",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATFORM",

            value:
              "SHOPIFY",
          },
          {
            label:
              "YEAR",

            value:
              "2026",
          },
          {
            label:
              "STATUS",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXT",

          title:
            "A BROAD CATALOG NEEDED A STRUCTURE THAT WAS EASY TO EXPLORE.",

          text:
            "Flow Supplements brings together products across different categories, formats and formulations. The store needed to organize that variety and help users find products without turning navigation into a catalog that felt difficult to browse.",
        },

        scope: {
          eyebrow:
            "02 / SCOPE",

          title:
            "FROM ORGANIZING THE CATALOG TO BUILDING THE PURCHASE JOURNEY.",

          intro:
            "The work focused on structuring the store so categories, products, information and purchase could live within one consistent experience.",

          items: [
            "E-COMMERCE STRUCTURE",
            "CATALOG ORGANIZATION",
            "COLLECTIONS AND CATEGORIES",
            "PRODUCT PAGES",
            "RESPONSIVE EXPERIENCE",
            "CART AND PURCHASE FLOW",
            "SHOPIFY CONFIGURATION",
            "SHIPPING INFORMATION",
            "COMMERCIAL CONTENT",
          ],
        },

        challenge: {
          eyebrow:
            "03 / CHALLENGE",

          title:
            "MAKE CHOOSING SIMPLE INSIDE A CATALOG WITH MANY OPTIONS.",

          text:
            "When products share categories, ingredients or related benefits, navigation becomes a fundamental part of the experience. The challenge was to bring order to the catalog and keep the relationship between discovery, understanding and purchase clear at every step.",
        },

        decisions: {
          eyebrow:
            "04 / KEY DECISIONS",

          title:
            "A STORE ORGANIZED AROUND DISCOVERY, UNDERSTANDING AND PURCHASE.",

          items: [
            {
              number:
                "01",

              title:
                "CATEGORIES AS ENTRY POINTS",

              text:
                "The catalog is organized so users can explore product families instead of depending only on individual searches.",
            },
            {
              number:
                "02",

              title:
                "PRODUCT BEFORE NOISE",

              text:
                "The interface prioritizes name, format, price and purchase actions so the most important commercial information can be identified quickly.",
            },
            {
              number:
                "03",

              title:
                "SHORTER PATHS TO PURCHASE",

              text:
                "Collections bring commercial actions closer to the moment of exploration and reduce unnecessary steps throughout the journey.",
            },
            {
              number:
                "04",

              title:
                "A FOUNDATION THAT CAN GROW",

              text:
                "The collection-based structure makes it possible to add new products and categories while maintaining one consistent logic across the store.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/flow/flow-products.webp",

            alt:
              "Flow Supplements best-selling products collection",

            label:
              "COLLECTION / BEST SELLERS",

            variant:
              "wide",
          },
          {
            src:
              "/projects/flow/flow-product-detail.webp",

            alt:
              "Flow Supplements product page",

            label:
              "PRODUCT / DETAIL",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "CATALOG",

            text:
              "Products organized into collections that make a broad offering easier to explore.",
          },
          {
            number:
              "02",

            title:
              "PRODUCT",

            text:
              "Product pages designed to bring presentation, price, information and purchase actions into one journey.",
          },
          {
            number:
              "03",

            title:
              "COMMERCE",

            text:
              "Cart, promotions, shipping and commercial navigation integrated into the Shopify experience.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / OUTCOME",

          title:
            "A STORE BUILT TO MAKE DISCOVERY, UNDERSTANDING AND PURCHASE SIMPLER.",

          text:
            "The result is an e-commerce structure that connects catalog, categories and product within one consistent commercial journey, leaving a foundation ready to keep adding new references.",

          items: [
            "ORGANIZED CATALOG",
            "CATEGORY-BASED NAVIGATION",
            "RESPONSIVE EXPERIENCE",
            "INTEGRATED PURCHASE FLOW",
            "SCALABLE SHOPIFY FOUNDATION",
          ],
        },

        statement: {
          lineOne:
            "PRODUCT",

          lineTwo:
            "CLARITY",

          lineThree:
            "COMMERCE.",
        },

        nextLabel:
          "NEXT PROJECT",
      },
    },

    next: {
      number:
        "03",

      title:
        "BOULDR",

      slug:
        "bouldr",
    },
  },

  {
    number:
      "03",

    slug:
      "bouldr",

    title:
      "BOULDR",

    category:
      "ecommerce",

    year:
      "2026",

    image:
      "/projects/bouldr/bouldr-home.webp",

    siteUrl:
      "https://www.bouldr.com.mx/",

    size:
      "medium",

    caseStudy:
      true,

    platform:
      "SHOPIFY",

    heroImage:
      "/projects/bouldr/bouldr-home.webp",

    content: {
      es: {
        categoryLabel:
          "E-COMMERCE / SHOPIFY",

        intro:
          "Una tienda en línea desarrollada para convertir producto, contenido y personalidad de marca en una misma experiencia de compra.",

        metrics: [
          {
            label:
              "TIPO",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATAFORMA",

            value:
              "SHOPIFY",
          },
          {
            label:
              "AÑO",

            value:
              "2026",
          },
          {
            label:
              "ESTADO",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXTO",

          title:
            "UNA TIENDA QUE TENÍA QUE VENDER SIN SENTIRSE COMO UN CATÁLOGO GENÉRICO.",

          text:
            "Bouldr necesitaba una experiencia de e-commerce capaz de presentar sus productos con claridad y, al mismo tiempo, conservar una identidad propia. La tienda debía funcionar comercialmente sin separar la experiencia de compra de la forma en que la marca se comunica.",
        },

        scope: {
          eyebrow:
            "02 / ALCANCE",

          title:
            "DE LA ESTRUCTURA COMERCIAL A LA EXPERIENCIA COMPLETA DE LA TIENDA.",

          intro:
            "El proyecto abarcó la organización del e-commerce, la adaptación visual y la construcción de un recorrido donde catálogo, producto, contenido y compra compartieran una misma lógica.",

          items: [
            "ESTRUCTURA Y JERARQUÍA DEL SITIO",
            "SHOPIFY",
            "CATÁLOGO Y COLECCIONES",
            "PÁGINAS DE PRODUCTO",
            "EXPERIENCIA RESPONSIVE",
            "CARRITO Y FLUJO DE COMPRA",
            "ADAPTACIÓN VISUAL",
            "CONTENIDO DE MARCA",
            "AJUSTES DE EXPERIENCIA",
          ],
        },

        challenge: {
          eyebrow:
            "03 / RETO",

          title:
            "PRODUCTO, CONTENIDO Y COMPRA TENÍAN QUE SENTIRSE COMO PARTE DE LA MISMA MARCA.",

          text:
            "En un e-commerce, la experiencia no termina en mostrar productos. La navegación, la jerarquía visual, el contenido y las acciones de compra tenían que trabajar juntos para construir un recorrido comercial claro sin perder personalidad.",
        },

        decisions: {
          eyebrow:
            "04 / DECISIONES CLAVE",

          title:
            "LAS DECISIONES QUE ORDENARON LA EXPERIENCIA.",

          items: [
            {
              number:
                "01",

              title:
                "JERARQUÍA ANTES QUE DECORACIÓN",

              text:
                "Producto, categorías y acciones de compra tienen prioridad. La identidad visual acompaña el recorrido en lugar de competir con él.",
            },
            {
              number:
                "02",

              title:
                "MARCA DENTRO DEL COMERCIO",

              text:
                "El contenido no se plantea como una capa separada de la tienda, sino como parte del mismo recorrido que conduce al usuario hacia los productos.",
            },
            {
              number:
                "03",

              title:
                "PRODUCTO CON CONTEXTO",

              text:
                "La experiencia deja espacio para comunicar cada producto sin perder de vista precio, información y acciones comerciales.",
            },
            {
              number:
                "04",

              title:
                "UNA BASE PREPARADA PARA CRECER",

              text:
                "La estructura sobre Shopify permite incorporar nuevas colecciones, productos y contenido manteniendo una lógica consistente.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/bouldr/bouldr-products.webp",

            alt:
              "Vista del catálogo de productos de Bouldr",

            label:
              "CATÁLOGO / COLECCIÓN",

            variant:
              "wide",
          },
          {
            src:
              "/projects/bouldr/bouldr-product-detail.webp",

            alt:
              "Vista de producto individual de Bouldr",

            label:
              "PRODUCTO / DETALLE",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "BRAND",

            text:
              "Una dirección visual integrada a la tienda para que la experiencia comercial conserve la personalidad de Bouldr.",
          },
          {
            number:
              "02",

            title:
              "CONTENT",

            text:
              "Contenido y producto conviven dentro del mismo recorrido para ayudar a comunicar la propuesta de la marca.",
          },
          {
            number:
              "03",

            title:
              "COMMERCE",

            text:
              "Catálogo, producto, carrito y compra funcionan sobre una estructura preparada para la operación cotidiana del e-commerce.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / RESULTADO",

          title:
            "UNA EXPERIENCIA DE COMPRA QUE FUNCIONA COMO EXTENSIÓN DE LA MARCA.",

          text:
            "El resultado es una tienda donde identidad, contenido y comercio comparten la misma estructura, dando a Bouldr una base digital preparada para presentar productos, comunicar su propuesta y seguir creciendo dentro de Shopify.",

          items: [
            "IDENTIDAD INTEGRADA",
            "E-COMMERCE RESPONSIVE",
            "CATÁLOGO ESTRUCTURADO",
            "EXPERIENCIA DE COMPRA CONSISTENTE",
            "BASE ESCALABLE EN SHOPIFY",
          ],
        },

        statement: {
          lineOne:
            "COMMERCE",

          lineTwo:
            "CONTENT",

          lineThree:
            "EXPERIENCE.",
        },

        nextLabel:
          "SIGUIENTE PROYECTO",
      },

      en: {
        categoryLabel:
          "E-COMMERCE / SHOPIFY",

        intro:
          "An online store developed to turn product, content and brand personality into one cohesive shopping experience.",

        metrics: [
          {
            label:
              "TYPE",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATFORM",

            value:
              "SHOPIFY",
          },
          {
            label:
              "YEAR",

            value:
              "2026",
          },
          {
            label:
              "STATUS",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXT",

          title:
            "A STORE THAT NEEDED TO SELL WITHOUT FEELING LIKE A GENERIC CATALOG.",

          text:
            "Bouldr needed an e-commerce experience capable of presenting products clearly while preserving a distinct identity. The store had to work commercially without separating the shopping experience from the way the brand communicates.",
        },

        scope: {
          eyebrow:
            "02 / SCOPE",

          title:
            "FROM COMMERCIAL STRUCTURE TO THE COMPLETE STORE EXPERIENCE.",

          intro:
            "The project covered e-commerce organization, visual adaptation and the construction of a journey where catalog, product, content and purchase share the same logic.",

          items: [
            "SITE STRUCTURE AND HIERARCHY",
            "SHOPIFY",
            "CATALOG AND COLLECTIONS",
            "PRODUCT PAGES",
            "RESPONSIVE EXPERIENCE",
            "CART AND PURCHASE FLOW",
            "VISUAL ADAPTATION",
            "BRAND CONTENT",
            "EXPERIENCE REFINEMENT",
          ],
        },

        challenge: {
          eyebrow:
            "03 / CHALLENGE",

          title:
            "PRODUCT, CONTENT AND PURCHASE HAD TO FEEL LIKE PART OF THE SAME BRAND.",

          text:
            "In e-commerce, the experience does not end with showing products. Navigation, visual hierarchy, content and purchase actions had to work together to create a clear commercial journey without losing personality.",
        },

        decisions: {
          eyebrow:
            "04 / KEY DECISIONS",

          title:
            "THE DECISIONS THAT BROUGHT ORDER TO THE EXPERIENCE.",

          items: [
            {
              number:
                "01",

              title:
                "HIERARCHY BEFORE DECORATION",

              text:
                "Products, categories and purchase actions come first. The visual identity supports the journey instead of competing with it.",
            },
            {
              number:
                "02",

              title:
                "BRAND INSIDE COMMERCE",

              text:
                "Content is not treated as a separate layer of the store, but as part of the same journey that leads users toward the products.",
            },
            {
              number:
                "03",

              title:
                "PRODUCT WITH CONTEXT",

              text:
                "The experience leaves room to communicate each product without losing sight of price, information and commercial actions.",
            },
            {
              number:
                "04",

              title:
                "A FOUNDATION READY TO GROW",

              text:
                "The Shopify structure makes it possible to add new collections, products and content while maintaining a consistent logic.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/bouldr/bouldr-products.webp",

            alt:
              "Bouldr product catalog view",

            label:
              "CATALOG / COLLECTION",

            variant:
              "wide",
          },
          {
            src:
              "/projects/bouldr/bouldr-product-detail.webp",

            alt:
              "Bouldr individual product view",

            label:
              "PRODUCT / DETAIL",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "BRAND",

            text:
              "A visual direction integrated into the store so the commercial experience retains Bouldr's personality.",
          },
          {
            number:
              "02",

            title:
              "CONTENT",

            text:
              "Content and product live within the same journey to help communicate the brand proposition.",
          },
          {
            number:
              "03",

            title:
              "COMMERCE",

            text:
              "Catalog, product, cart and purchase work on a structure prepared for the day-to-day operation of the e-commerce business.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / OUTCOME",

          title:
            "A SHOPPING EXPERIENCE THAT WORKS AS AN EXTENSION OF THE BRAND.",

          text:
            "The result is a store where identity, content and commerce share the same structure, giving Bouldr a digital foundation ready to present products, communicate its proposition and keep growing within Shopify.",

          items: [
            "INTEGRATED IDENTITY",
            "RESPONSIVE E-COMMERCE",
            "STRUCTURED CATALOG",
            "CONSISTENT SHOPPING EXPERIENCE",
            "SCALABLE SHOPIFY FOUNDATION",
          ],
        },

        statement: {
          lineOne:
            "COMMERCE",

          lineTwo:
            "CONTENT",

          lineThree:
            "EXPERIENCE.",
        },

        nextLabel:
          "NEXT PROJECT",
      },
    },

    next: {
      number:
        "04",

      title:
        "BEEN CLASS",

      slug:
        "been-class",
    },
  },

  {
    number:
      "04",

    slug:
      "been-class",

    title:
      "BEEN CLASS",

    category:
      "ecommerce",

    year:
      "2026",

    image:
      "/projects/bc/beenclass-home.webp",

    siteUrl:
      "https://www.beenclass.com/",

    size:
      "compact",

    caseStudy:
      true,

    platform:
      "SHOPIFY",

    heroImage:
      "/projects/bc/beenclass-home.webp",

    content: {
      es: {
        categoryLabel:
          "E-COMMERCE / CALZADO",

        intro:
          "Un e-commerce desarrollado para llevar una marca de calzado a una experiencia de compra digital clara, visual y preparada para vender en línea.",

        metrics: [
          {
            label:
              "TIPO",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATAFORMA",

            value:
              "SHOPIFY",
          },
          {
            label:
              "AÑO",

            value:
              "2026",
          },
          {
            label:
              "ESTADO",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXTO",

          title:
            "EL PRODUCTO TENÍA QUE SER EL PROTAGONISTA.",

          text:
            "Been Class necesitaba una tienda donde el calzado pudiera explorarse de forma sencilla, mostrando producto, variantes e información comercial sin perder una presentación visual acorde con la marca.",
        },

        scope: {
          eyebrow:
            "02 / ALCANCE",

          title:
            "DE MOSTRAR PRODUCTOS A CONSTRUIR UNA TIENDA LISTA PARA OPERAR.",

          intro:
            "El proyecto se desarrolló alrededor del recorrido completo de e-commerce: descubrir productos, revisar opciones, seleccionar variantes y avanzar hacia la compra desde cualquier dispositivo.",

          items: [
            "SHOPIFY",
            "ESTRUCTURA DEL E-COMMERCE",
            "CATÁLOGO DE PRODUCTOS",
            "PÁGINAS DE PRODUCTO",
            "VARIANTES Y TALLAS",
            "EXPERIENCIA RESPONSIVE",
            "CARRITO Y CHECKOUT",
            "CONFIGURACIÓN DE ENVÍOS",
            "CONTENIDO COMERCIAL",
          ],
        },

        challenge: {
          eyebrow:
            "03 / RETO",

          title:
            "HACER QUE ELEGIR UN PRODUCTO FUERA TAN CLARO COMO VERLO.",

          text:
            "En una tienda de calzado no basta con presentar buenas fotografías. Talla, disponibilidad, precio, información del producto y compra tienen que convivir dentro de una interfaz fácil de entender, especialmente desde dispositivos móviles.",
        },

        decisions: {
          eyebrow:
            "04 / DECISIONES CLAVE",

          title:
            "UNA EXPERIENCIA CONSTRUIDA ALREDEDOR DEL PRODUCTO.",

          items: [
            {
              number:
                "01",

              title:
                "PRODUCTO AL FRENTE",

              text:
                "La interfaz deja que fotografía, nombre y precio construyan la primera lectura antes de introducir información secundaria.",
            },
            {
              number:
                "02",

              title:
                "VARIANTES SIN FRICCIÓN",

              text:
                "La selección de talla forma parte directa de la ficha para que el usuario pueda entender rápidamente qué opciones están disponibles.",
            },
            {
              number:
                "03",

              title:
                "COMPRA DESDE MÓVIL",

              text:
                "El recorrido se plantea para que explorar, elegir una variante y añadir al carrito funcione correctamente en pantallas pequeñas.",
            },
            {
              number:
                "04",

              title:
                "INFORMACIÓN COMERCIAL ACCESIBLE",

              text:
                "Envíos, devoluciones y condiciones de compra forman parte de la experiencia para que el usuario pueda resolver dudas sin abandonar la tienda.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/bc/beenclass-categories.webp",

            alt:
              "Colección de calzado para dama de Been Class",

            label:
              "COLECCIÓN / DESCUBRIMIENTO",

            variant:
              "wide",
          },
          {
            src:
              "/projects/bc/beenclass-product-detail.webp",

            alt:
              "Ficha de producto de Been Class",

            label:
              "PRODUCTO / DETALLE",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "PRODUCT",

            text:
              "Una presentación visual donde fotografía, información y variantes mantienen al producto como protagonista.",
          },
          {
            number:
              "02",

            title:
              "VARIANTS",

            text:
              "Tallas y disponibilidad integradas al flujo de selección antes de agregar un artículo al carrito.",
          },
          {
            number:
              "03",

            title:
              "COMMERCE",

            text:
              "Catálogo, carrito, checkout y logística reunidos dentro de la operación de Shopify.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / RESULTADO",

          title:
            "UNA TIENDA DIGITAL DONDE PRODUCTO Y COMPRA COMPARTEN EL MISMO RECORRIDO.",

          text:
            "El resultado es un e-commerce preparado para presentar el catálogo de Been Class, gestionar variantes y acompañar al usuario desde el descubrimiento del producto hasta la compra.",

          items: [
            "EXPERIENCIA RESPONSIVE",
            "CATÁLOGO ESTRUCTURADO",
            "VARIANTES POR PRODUCTO",
            "FLUJO DE COMPRA INTEGRADO",
            "OPERACIÓN SOBRE SHOPIFY",
          ],
        },

        statement: {
          lineOne:
            "STYLE",

          lineTwo:
            "PRODUCT",

          lineThree:
            "COMMERCE.",
        },

        nextLabel:
          "SIGUIENTE PROYECTO",
      },

      en: {
        categoryLabel:
          "E-COMMERCE / FOOTWEAR",

        intro:
          "An e-commerce experience developed to bring a footwear brand into a clear, visual shopping journey built for online sales.",

        metrics: [
          {
            label:
              "TYPE",

            value:
              "E-COMMERCE",
          },
          {
            label:
              "PLATFORM",

            value:
              "SHOPIFY",
          },
          {
            label:
              "YEAR",

            value:
              "2026",
          },
          {
            label:
              "STATUS",

            value:
              "LIVE ↗",
          },
        ],

        overview: {
          eyebrow:
            "01 / CONTEXT",

          title:
            "THE PRODUCT HAD TO BE THE PROTAGONIST.",

          text:
            "Been Class needed a store where footwear could be explored easily, showing product, variants and commercial information while maintaining a visual presentation aligned with the brand.",
        },

        scope: {
          eyebrow:
            "02 / SCOPE",

          title:
            "FROM SHOWING PRODUCTS TO BUILDING A STORE READY TO OPERATE.",

          intro:
            "The project was developed around the complete e-commerce journey: discovering products, reviewing options, selecting variants and moving toward purchase from any device.",

          items: [
            "SHOPIFY",
            "E-COMMERCE STRUCTURE",
            "PRODUCT CATALOG",
            "PRODUCT PAGES",
            "VARIANTS AND SIZES",
            "RESPONSIVE EXPERIENCE",
            "CART AND CHECKOUT",
            "SHIPPING CONFIGURATION",
            "COMMERCIAL CONTENT",
          ],
        },

        challenge: {
          eyebrow:
            "03 / CHALLENGE",

          title:
            "MAKE CHOOSING A PRODUCT AS CLEAR AS SEEING IT.",

          text:
            "In a footwear store, strong photography is not enough. Size, availability, price, product information and purchase actions need to live within an interface that is easy to understand, especially on mobile devices.",
        },

        decisions: {
          eyebrow:
            "04 / KEY DECISIONS",

          title:
            "AN EXPERIENCE BUILT AROUND THE PRODUCT.",

          items: [
            {
              number:
                "01",

              title:
                "PRODUCT FIRST",

              text:
                "The interface lets photography, name and price create the first read before introducing secondary information.",
            },
            {
              number:
                "02",

              title:
                "FRICTIONLESS VARIANTS",

              text:
                "Size selection is integrated directly into the product page so users can quickly understand which options are available.",
            },
            {
              number:
                "03",

              title:
                "SHOPPING FROM MOBILE",

              text:
                "The journey is designed so browsing, selecting a variant and adding to cart work correctly on smaller screens.",
            },
            {
              number:
                "04",

              title:
                "ACCESSIBLE COMMERCIAL INFORMATION",

              text:
                "Shipping, returns and purchase conditions are part of the experience so users can resolve questions without leaving the store.",
            },
          ],
        },

        gallery: [
          {
            src:
              "/projects/bc/beenclass-categories.webp",

            alt:
              "Been Class women's footwear collection",

            label:
              "COLLECTION / DISCOVERY",

            variant:
              "wide",
          },
          {
            src:
              "/projects/bc/beenclass-product-detail.webp",

            alt:
              "Been Class product page",

            label:
              "PRODUCT / DETAIL",

            variant:
              "portrait",
          },
        ],

        features: [
          {
            number:
              "01",

            title:
              "PRODUCT",

            text:
              "A visual presentation where photography, information and variants keep the product at the center of the experience.",
          },
          {
            number:
              "02",

            title:
              "VARIANTS",

            text:
              "Sizes and availability integrated into the selection flow before an item is added to the cart.",
          },
          {
            number:
              "03",

            title:
              "COMMERCE",

            text:
              "Catalog, cart, checkout and logistics brought together within the Shopify operation.",
          },
        ],

        outcome: {
          eyebrow:
            "06 / OUTCOME",

          title:
            "A DIGITAL STORE WHERE PRODUCT AND PURCHASE SHARE THE SAME JOURNEY.",

          text:
            "The result is an e-commerce experience prepared to present the Been Class catalog, manage variants and guide users from product discovery through purchase.",

          items: [
            "RESPONSIVE EXPERIENCE",
            "STRUCTURED CATALOG",
            "PRODUCT VARIANTS",
            "INTEGRATED PURCHASE FLOW",
            "SHOPIFY-BASED OPERATION",
          ],
        },

        statement: {
          lineOne:
            "STYLE",

          lineTwo:
            "PRODUCT",

          lineThree:
            "COMMERCE.",
        },

        nextLabel:
          "NEXT PROJECT",
      },
    },

    next: {
      number:
        "01",

      title:
        "AFTER HOUSE",

      slug:
        "after-house",
    },
  },

] as const satisfies readonly Project[];

export const archiveProjects =
  projects;

export function isCaseStudyProject(
  project:
    Project
): project is CaseStudyProject {
  return project.caseStudy;
}

export const caseStudyProjects =
  projects.filter(
    isCaseStudyProject
  );

export function getProjectBySlug(
  slug:
    string
) {
  return projects.find(
    (
      project
    ) =>
      project.slug ===
      slug
  );
}

export function getCaseStudyBySlug(
  slug:
    string
) {
  const project =
    getProjectBySlug(
      slug
    );

  return project &&
    isCaseStudyProject(
      project
    )
    ? project
    : undefined;
}

export function getProjectContent(
  project:
    Project,
  lang:
    ProjectsLocale
) {
  return project.content[
    lang
  ];
}

export function getCaseStudyContent(
  project:
    CaseStudyProject,
  lang:
    ProjectsLocale
) {
  return project.content[
    lang
  ];
}

export function getProjectHref(
  project:
    Project,
  lang:
    ProjectsLocale =
      "es"
) {
  if (
    !project.caseStudy
  ) {
    return project.siteUrl;
  }

  return lang ===
    "es"
    ? `/es/proyectos/${project.slug}/`
    : `/en/projects/${project.slug}/`;
}

export const projectsArchiveContent = {
  es: {
    meta: {
      label:
        "ARIXV / PROYECTOS",

      number:
        "01",
    },

    hero: {
      lineOne:
        "TODOS LOS",

      lineTwo:
        "PROYECTOS",

      description:
        "Una selección de sitios web, e-commerce, productos digitales y sistemas desarrollados por ARIXV.",

      count:
        `${String(
          projects.length
        ).padStart(
          2,
          "0"
        )} PROYECTOS`,
    },

    toolbar: {
      label:
        "FILTRO /",

      ariaLabel:
        "Filtrar proyectos",
    },

    filters: [
      {
        key:
          "all",

        label:
          "TODOS",
      },
      {
        key:
          "web",

        label:
          "WEB",
      },
      {
        key:
          "ecommerce",

        label:
          "E-COMMERCE",
      },
      {
        key:
          "product",

        label:
          "PRODUCTOS",
      },
    ],

    statement: {
      lineOne:
        "DISEÑO Y CÓDIGO",

      lineTwo:
        "TRABAJAN JUNTOS.",

      lineThree:
        "LAS IDEAS FUNCIONAN.",
    },

    cursor:
      "VER ↗",

    projectCta:
      "VER PROYECTO",

    imageAltPrefix:
      "Captura del proyecto",

    final: {
      index:
        `${String(
          projects.length
        ).padStart(
          2,
          "0"
        )} / ${String(
          projects.length
        ).padStart(
          2,
          "0"
        )}`,

      lineOne:
        "¿EL SIGUIENTE",

      lineTwo:
        "PUEDE SER EL TUYO?",

      cta:
        "INICIAR UN PROYECTO",

      href:
        "https://wa.me/528140165334?text=Hola%2C%20quiero%20iniciar%20un%20proyecto%20con%20ARIXV.%20Me%20gustar%C3%ADa%20contarles%20lo%20que%20necesito%20y%20conocer%20el%20proceso%2C%20tiempos%20y%20costos.",
    },
  },

  en: {
    meta: {
      label:
        "ARIXV / PROJECTS",

      number:
        "01",
    },

    hero: {
      lineOne:
        "ALL",

      lineTwo:
        "PROJECTS",

      description:
        "A selection of websites, e-commerce, digital products and systems developed by ARIXV.",

      count:
        `${String(
          projects.length
        ).padStart(
          2,
          "0"
        )} PROJECTS`,
    },

    toolbar: {
      label:
        "FILTER /",

      ariaLabel:
        "Filter projects",
    },

    filters: [
      {
        key:
          "all",

        label:
          "ALL",
      },
      {
        key:
          "web",

        label:
          "WEB",
      },
      {
        key:
          "ecommerce",

        label:
          "E-COMMERCE",
      },
      {
        key:
          "product",

        label:
          "PRODUCTS",
      },
    ],

    statement: {
      lineOne:
        "DESIGN AND CODE",

      lineTwo:
        "WORK TOGETHER.",

      lineThree:
        "IDEAS WORK.",
    },

    cursor:
      "VIEW ↗",

    projectCta:
      "VIEW PROJECT",

    imageAltPrefix:
      "Project preview",

    final: {
      index:
        `${String(
          projects.length
        ).padStart(
          2,
          "0"
        )} / ${String(
          projects.length
        ).padStart(
          2,
          "0"
        )}`,

      lineOne:
        "COULD THE NEXT ONE",

      lineTwo:
        "BE YOURS?",

      cta:
        "START A PROJECT",

      href:
        "https://wa.me/528140165334?text=Hello%2C%20I%27d%20like%20to%20start%20a%20project%20with%20ARIXV.%20I%27d%20like%20to%20tell%20you%20what%20I%20need%20and%20learn%20about%20the%20process%2C%20timelines%2C%20and%20costs.",
    },
  },
} as const;