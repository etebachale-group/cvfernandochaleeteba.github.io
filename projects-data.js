const projectData = {
  "eteba-chat": {
    "es": `# Eteba Chat 🤖

## ¿Qué es Eteba Chat?

**Eteba Chat** es una plataforma B2B de automatización comercial impulsada por Inteligencia Artificial, diseñada para empresas en África y a nivel global. Permite a cualquier negocio desplegar un asistente virtual inteligente que atiende clientes, gestiona catálogos y procesa pedidos de forma autónoma, las 24 horas del día.

---

## 🎯 El Problema que Resuelve

Muchas empresas pierden ventas y clientes por demoras en la atención al cliente, falta de personal disponible fuera del horario laboral y dificultad para gestionar consultas en múltiples idiomas. En mercados como Guinea Ecuatorial y otros países africanos, esto se agrava por la diversidad lingüística (español, francés, inglés, lenguas locales).

---

## ✨ Características Principales

- **🤖 Asistente IA Personalizable** — Cada negocio configura su propio asistente con tono, idioma y manual de operaciones propios
- **🌍 Búsqueda Multiidioma** — Comprende y responde en español, francés e inglés de forma simultánea
- **🧠 Sistema de Alias Auto-aprendizaje** — Aprende sinónimos automáticamente ("tenis" = "zapatillas" = "sneakers" = "baskets")
- **💬 Memoria de Conversación** — Mantiene el contexto de la conversación durante 15 minutos
- **📦 Pedidos Sin Fricción** — El cliente solo confirma su ciudad; el sistema usa sus datos de sesión para completar el pedido
- **🏪 Chat Universal** — Los visitantes pueden chatear con cualquier negocio registrado desde la plataforma central
- **📊 Dashboard Administrativo** — Métricas de uso, gestión de catálogo CRUD, configuración del asistente y gestión de API keys
- **🔌 Widget Embebible** — Una sola línea de código para integrar el chat en cualquier sitio web externo
- **🔑 API REST Abierta** — Integración con apps móviles, sistemas ERP o cualquier plataforma externa
- **👥 Multi-tenant** — Cada negocio tiene sus datos completamente aislados
- **🔐 Google OAuth** — Inicio de sesión con un solo clic mediante cuenta Google

---

## ⚙️ ¿Cómo Funciona?

La plataforma opera como un ecosistema multi-tenant:

1. **El negocio se registra** y configura su asistente: sube su catálogo de productos, define el tono del asistente y establece su idioma principal.
2. **Los clientes interactúan** con el asistente a través del chat universal de la plataforma o mediante el widget embebido en el sitio del negocio.
3. **El motor de IA clasifica la intención** del mensaje (consulta de catálogo, pedido, soporte general) en milisegundos sin necesidad de llamar al LLM para consultas simples.
4. **El sistema procesa la consulta**: busca productos en tiempo real, calcula envíos y registra pedidos automáticamente.
5. **El administrador revisa** las métricas, historial de pedidos y conversaciones desde el dashboard.

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript (SPA) |
| Backend | Node.js + Express + TypeScript |
| Motor de IA | Groq API (Llama 3.1 8B Instant) + OpenRouter (respaldo) |
| Embeddings | Xenova/Transformers (all-MiniLM-L6-v2, 384 dimensiones) |
| Base de Datos | PostgreSQL + MySQL |
| Autenticación | Google OAuth 2.0 |
| Hosting | Render.com |

---

## 💼 Impacto

- Reduce hasta un **70% los costos** de atención al cliente
- Garantiza **disponibilidad 24/7** sin intervención humana
- Procesa pedidos en **segundos** en lugar de horas
- Escala a **miles de negocios** desde una sola infraestructura

---

## 🔗 Estado Actual

🟢 **En línea:** [https://eteba-chat.onrender.com](https://eteba-chat.onrender.com)`,

    "en": `# Eteba Chat 🤖

## What is Eteba Chat?

**Eteba Chat** is a B2B commercial automation platform powered by Artificial Intelligence, designed for businesses in Africa and globally. It allows any business to deploy an intelligent virtual assistant that handles customers, manages catalogs, and processes orders autonomously, 24 hours a day.

---

## 🎯 The Problem it Solves

Many businesses lose sales and customers due to delays in customer service, lack of staff available outside business hours, and difficulty managing inquiries in multiple languages. In markets like Equatorial Guinea and other African countries, this is compounded by linguistic diversity.

---

## ✨ Key Features

- **🤖 Customizable AI Assistant** — Each business configures its own assistant with custom tone, language and operations manual
- **🌍 Multilingual Search** — Understands and responds in Spanish, French and English simultaneously
- **🧠 Auto-learning Alias System** — Automatically learns synonyms ("sneakers" = "trainers" = "baskets")
- **💬 Conversation Memory** — Maintains conversation context for 15 minutes
- **📦 Frictionless Orders** — Customer only confirms city; system uses session data to complete the order
- **🏪 Universal Chat** — Visitors can chat with any registered business from the central platform
- **📊 Admin Dashboard** — Usage metrics, CRUD catalog management, assistant configuration and API key management
- **🔌 Embeddable Widget** — One line of code to integrate the chat into any external website
- **🔑 Open REST API** — Integration with mobile apps, ERP systems or any external platform
- **👥 Multi-tenant** — Each business has completely isolated data
- **🔐 Google OAuth** — One-click login via Google account

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript (SPA) |
| Backend | Node.js + Express + TypeScript |
| AI Engine | Groq API (Llama 3.1 8B Instant) + OpenRouter (fallback) |
| Embeddings | Xenova/Transformers (all-MiniLM-L6-v2, 384 dimensions) |
| Database | PostgreSQL + MySQL |
| Authentication | Google OAuth 2.0 |
| Hosting | Render.com |

---

## 🔗 Status

🟢 **Live:** [https://eteba-chat.onrender.com](https://eteba-chat.onrender.com)`
  },

  "rotteri-online-shop": {
    "es": `# Rotteri Online Shop 🛒

## ¿Qué es Rotteri?

**Rotteri Online Shop** es una plataforma de comercio electrónico especializada en moda y accesorios, diseñada para el mercado de Guinea Ecuatorial. Conecta a compradores con una selección curada de productos de moda — ropa, calzado, accesorios y más — con entrega a domicilio.

---

## 🎯 El Problema que Resuelve

El comercio electrónico en Guinea Ecuatorial aún es incipiente. Muchos negocios de moda operan solo a través de redes sociales, sin un canal de venta estructurado. Rotteri ofrece una plataforma profesional que centraliza el catálogo, gestiona pedidos y facilita la compra online con métodos de pago locales.

---

## ✨ Características Principales

- **🛍️ Catálogo Visual** — Exploración de productos por categorías con fotografías de alta calidad
- **🔍 Búsqueda y Filtros Avanzados** — Filtrado por talla, color, precio y categoría
- **🛒 Carrito de Compras** — Gestión intuitiva del carrito con resumen de pedido
- **📦 Sistema de Pedidos** — Seguimiento del estado del pedido en tiempo real
- **🏷️ Gestión de Descuentos** — Cupones y ofertas especiales
- **📱 Diseño Móvil** — Experiencia optimizada para smartphones
- **👤 Perfil de Usuario** — Historial de compras y direcciones guardadas
- **🏪 Panel de Vendedor** — Gestión de inventario y pedidos para el equipo

---

## ⚙️ ¿Cómo Funciona?

1. El usuario navega el catálogo y selecciona los productos deseados
2. Agrega artículos al carrito y revisa el resumen de su pedido
3. Completa la información de entrega y elige el método de pago
4. Recibe confirmación del pedido y seguimiento hasta la entrega

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Diseño | Glassmorphism, Responsive Design |

---

## 💼 Impacto

Proporciona a los negocios de moda ecuatoguineanos una vitrina digital profesional, ampliando su alcance más allá de las redes sociales y aumentando sus ventas mediante un proceso de compra estructurado y confiable.

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# Rotteri Online Shop 🛒

## What is Rotteri?

**Rotteri Online Shop** is an e-commerce platform specializing in fashion and accessories, designed for the Equatorial Guinea market. It connects buyers with a curated selection of fashion products — clothing, footwear, accessories and more — with home delivery.

---

## ✨ Key Features

- **🛍️ Visual Catalog** — Product browsing by categories with high-quality photos
- **🔍 Advanced Search & Filters** — Filter by size, color, price and category
- **🛒 Shopping Cart** — Intuitive cart management with order summary
- **📦 Order System** — Real-time order status tracking
- **📱 Mobile Design** — Optimized experience for smartphones
- **👤 User Profile** — Purchase history and saved addresses

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟢 **Live**`
  },

  "abeme-modjobuy-envos": {
    "es": `# Abeme Modjobuy Envíos 📦

## ¿Qué es Abeme Modjobuy Envíos?

**Abeme Modjobuy Envíos** es una plataforma integral de gestión de envíos y logística para Guinea Ecuatorial. Conecta a tiendas, clientes, agencias de transporte y puntos de pago en un solo ecosistema digital, permitiendo rastrear envíos, calcular tarifas y coordinar la logística de última milla de forma eficiente.

---

## 🎯 El Problema que Resuelve

La logística en Guinea Ecuatorial carece de digitalización. Los envíos entre ciudades (Malabo, Bata, etc.) se gestionan manualmente, sin trazabilidad ni confirmación para el cliente. Abeme Modjobuy Envíos digitaliza todo el proceso: desde el registro del paquete hasta la entrega y el pago.

---

## ✨ Características Principales

### Para Clientes
- **📍 Rastreo en Tiempo Real** — Seguimiento del estado de cada envío con historial completo
- **💰 Calculadora de Tarifas** — Cálculo instantáneo de costos por ruta y peso
- **📋 Historial de Envíos** — Registro completo de todos los envíos realizados
- **🔔 Notificaciones** — Alertas automáticas sobre el estado del paquete

### Para Tiendas y Negocios
- **🏪 Panel de Vendedor** — Gestión de envíos y seguimiento de pedidos
- **📊 Reportes de Ventas** — Estadísticas de envíos y cobros
- **🔗 Integración** — Conecta con el catálogo de productos

### Para Agencias de Transporte
- **🚚 Gestión de Rutas** — Administración de rutas disponibles y tarifas
- **📦 Control de Paquetes** — Registro y seguimiento de todos los envíos activos
- **💳 Cobros** — Sistema de facturación integrado

### Para el Administrador
- **🗺️ Gestión de Orígenes y Destinos** — El admin define las rutas disponibles
- **👥 Gestión de Usuarios** — Control de acceso para tiendas, agencias y puntos de pago
- **📈 Dashboard Analítico** — Métricas generales de la plataforma

---

## ⚙️ ¿Cómo Funciona?

1. **El administrador** configura las rutas disponibles, las agencias de envío y los puntos de pago
2. **La tienda** registra un paquete para enviar, especificando origen, destino y descripción
3. **La agencia de transporte** recibe el paquete, lo registra en el sistema y actualiza el estado durante el trayecto
4. **El cliente** rastrea su paquete en tiempo real mediante un código de seguimiento
5. **El punto de pago** verifica el cobro y confirma la entrega al destinatario

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Autenticación | Sistema de roles multi-nivel |
| Diseño | Panel responsivo por tipo de usuario |

---

## 👥 Roles del Sistema

| Rol | Acceso |
|-----|--------|
| Administrador | Configuración total: rutas, usuarios, tarifas |
| Agencia de Envíos | Gestión de paquetes y rutas asignadas |
| Tienda | Registro de envíos y seguimiento |
| Punto de Pago | Verificación y cobro al destinatario |
| Cliente | Rastreo de envíos propios |

---

## 💼 Impacto

Formaliza la logística informal ecuatoguineana, reduciendo pérdidas de paquetes, eliminando disputas de pagos y ofreciendo a los negocios locales una herramienta profesional para ofrecer servicio de envío confiable a sus clientes.

---

## 🔗 Estado Actual

🟡 **En desarrollo activo**`,

    "en": `# Abeme Modjobuy Envíos 📦

## What is Abeme Modjobuy Envíos?

**Abeme Modjobuy Envíos** is a comprehensive shipping and logistics management platform for Equatorial Guinea. It connects stores, customers, transport agencies and payment points in a single digital ecosystem.

---

## ✨ Key Features

- **📍 Real-time Tracking** — Package status tracking with complete history
- **💰 Rate Calculator** — Instant cost calculation by route and weight
- **🚚 Route Management** — Available routes and rates administration
- **👥 Multi-role System** — Admin, agencies, stores, payment points and customers
- **📊 Analytics Dashboard** — Platform-wide metrics

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟡 **In active development**`
  },

  "eteba-chale-group": {
    "es": `# Eteba Chale Group 🏢

## ¿Qué es Eteba Chale Group?

**Eteba Chale Group** es el sitio web corporativo del grupo empresarial Eteba Chale, que agrupa varios proyectos tecnológicos desarrollados para el mercado ecuatoguineano y africano. Es la puerta de entrada al ecosistema de productos y servicios digitales del grupo.

---

## 🎯 Misión

Impulsar la digitalización y el desarrollo tecnológico en Guinea Ecuatorial y África, creando soluciones de software accesibles, en idioma local, que resuelvan problemas reales de negocios y personas.

---

## ✨ Contenido del Sitio

- **🏠 Presentación Corporativa** — Historia, misión, visión y valores del grupo
- **🚀 Portafolio de Productos** — Catálogo de todas las plataformas y aplicaciones desarrolladas
- **🌍 Presencia Regional** — Proyectos con impacto en Guinea Ecuatorial, Camerún, Nigeria y otros países africanos
- **📞 Contacto Empresarial** — Canal de contacto para partnerships y negocios
- **📰 Blog y Noticias** — Actualizaciones sobre los productos del grupo
- **👥 Equipo** — Presentación del equipo de desarrollo

---

## ⚙️ Productos del Grupo

El grupo Eteba Chale desarrolla y mantiene un ecosistema de productos digitales:

| Producto | Categoría | Estado |
|---------|-----------|--------|
| Eteba Chat | IA Comercial | 🟢 Live |
| Eteba Pay | Pagos Digitales | 🟡 Beta |
| Rotteri Shop | E-commerce | 🟢 Live |
| Abeme Modjobuy | Logística | 🟡 En desarrollo |
| ËRËBË | Votación Digital | 🟢 Live |
| GQ-Turismo | Turismo | 🟡 En desarrollo |

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Framework CSS | Sistema de diseño propio |
| Backend | PHP / Node.js |
| Diseño | Glassmorphism, Dark Mode |

---

## 💼 Impacto

El grupo Eteba Chale Group representa el ecosistema tecnológico más completo desarrollado nativamente en Guinea Ecuatorial, con productos en producción que sirven a miles de usuarios en el país.

---

## 🔗 Estado Actual

🟢 **En línea:** [https://etebachalegroup.xo.je](https://etebachalegroup.xo.je)`,

    "en": `# Eteba Chale Group 🏢

## What is Eteba Chale Group?

**Eteba Chale Group** is the corporate website of the Eteba Chale business group, which brings together several technology projects developed for the Equatoguinean and African market.

---

## ✨ Site Content

- **🏠 Corporate Presentation** — Group history, mission, vision and values
- **🚀 Product Portfolio** — Catalog of all developed platforms and applications
- **🌍 Regional Presence** — Projects with impact in Equatorial Guinea and Africa
- **📞 Business Contact** — Contact channel for partnerships and business

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |

---

## 🔗 Status

🟢 **Live:** [https://etebachalegroup.xo.je](https://etebachalegroup.xo.je)`
  },

  "dreams-lux-hair": {
    "es": `# Dreams Lux Hair ✨

## ¿Qué es Dreams Lux Hair?

**Dreams Lux Hair** es una plataforma de e-commerce y catálogo digital especializada en productos capilares y pelucas de lujo. Conecta a clientes con una selección premium de extensiones, pelucas naturales, productos de cuidado capilar y accesorios, con el enfoque puesto en la belleza afro y latinoamericana.

---

## 🎯 El Problema que Resuelve

El mercado de productos capilares de calidad en Guinea Ecuatorial dependía exclusivamente de la importación informal y las redes sociales para publicitar y vender. Dreams Lux Hair crea un espacio digital profesional donde los clientes pueden explorar, comparar y adquirir productos con confianza.

---

## ✨ Características Principales

- **💇 Catálogo Especializado** — Selección curada de pelucas, extensiones y productos capilares premium
- **🎨 Galería Visual** — Fotografías detalladas de cada producto en diferentes ángulos
- **🔍 Filtros de Búsqueda** — Filtrado por tipo de cabello, longitud, color y precio
- **💳 Proceso de Compra** — Carrito de compras y gestión de pedidos
- **📱 Diseño Responsivo** — Experiencia optimizada para móvil y desktop
- **⭐ Reseñas de Clientes** — Sistema de valoraciones y comentarios
- **🏷️ Ofertas Especiales** — Descuentos y promociones temporales
- **📞 Contacto Directo** — WhatsApp integrado para consultas personalizadas

---

## ⚙️ ¿Cómo Funciona?

1. La cliente explora el catálogo y filtra por sus preferencias (tipo, longitud, color)
2. Revisa las fotografías detalladas y las reseñas de otros clientes
3. Agrega al carrito y completa el pedido especificando dirección de entrega
4. Recibe confirmación y seguimiento del envío

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Diseño | Estética de lujo, colores dorados y oscuros |

---

## 💼 Impacto

Profesionaliza la venta de productos capilares premium en Guinea Ecuatorial, ofreciendo a las clientas una experiencia de compra elegante y confiable que antes solo estaba disponible en mercados internacionales.

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# Dreams Lux Hair ✨

## What is Dreams Lux Hair?

**Dreams Lux Hair** is an e-commerce and digital catalog platform specializing in hair products and luxury wigs, focused on Afro and Latin American beauty.

---

## ✨ Key Features

- **💇 Specialized Catalog** — Curated selection of wigs, extensions and premium hair products
- **🎨 Visual Gallery** — Detailed product photographs from multiple angles
- **🔍 Search Filters** — Filter by hair type, length, color and price
- **📱 Responsive Design** — Optimized for mobile and desktop

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟢 **Live**`
  },

  "bubi-lex": {
    "es": `# Bubi-Lex 📖

## ¿Qué es Bubi-Lex?

**Bubi-Lex** es un diccionario y plataforma lingüística digital dedicada a la preservación y digitalización de la lengua Bubi, el idioma nativo del pueblo Bubi de la Isla de Bioko, Guinea Ecuatorial. Es la primera herramienta digital de este tipo para esta lengua, combinando un diccionario interactivo con recursos culturales e integración de Inteligencia Artificial.

---

## 🎯 El Problema que Resuelve

La lengua Bubi, al igual que muchas lenguas africanas, enfrenta el riesgo de extinción ante la predominancia del español y el francés. Las generaciones jóvenes tienen cada vez menos acceso a recursos para aprender su lengua materna. Bubi-Lex crea el primer repositorio digital estructurado de vocabulario, expresiones y gramática Bubi.

---

## ✨ Características Principales

- **📚 Diccionario Interactivo** — Miles de entradas Bubi ↔ Español con pronunciación, definiciones y ejemplos de uso
- **🔊 Audio de Pronunciación** — Grabaciones de hablantes nativos para cada término
- **🤖 Asistente IA Lingüístico** — Traducciones contextuales y explicaciones gramaticales mediante IA
- **📖 Gramática Estructurada** — Guías de gramática Bubi organizadas por nivel
- **🏛️ Archivo Cultural** — Proverbios, canciones tradicionales y expresiones culturales
- **🔍 Búsqueda Avanzada** — Búsqueda por raíz, categoría gramatical o contexto semántico
- **👥 Contribución Comunitaria** — Los hablantes nativos pueden proponer y validar nuevas entradas
- **📱 Acceso Offline** — Funcionalidad básica sin conexión a internet
- **🎓 Módulo de Aprendizaje** — Lecciones estructuradas para aprender Bubi desde cero

---

## ⚙️ ¿Cómo Funciona?

1. **El usuario busca** una palabra en español para obtener su traducción al Bubi, o viceversa
2. **Obtiene** la definición, ejemplos de uso, pronunciación y contexto cultural
3. **El asistente IA** puede generar traducciones de frases completas con explicaciones gramaticales
4. **Los hablantes nativos** validan el contenido mediante un sistema de revisión comunitaria
5. **Los académicos** pueden exportar datasets para investigación lingüística

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js / PHP |
| Base de Datos | MySQL |
| IA Lingüística | Modelos de lenguaje para traducción contextual |
| Audio | Web Audio API para pronunciación |
| Diseño | Interfaz cultural con elementos visuales Bubi |

---

## 💼 Impacto Cultural y Social

Bubi-Lex representa un esfuerzo de **preservación cultural sin precedentes** para Guinea Ecuatorial:

- **Preservación lingüística** de una lengua con menos de 100,000 hablantes nativos
- **Acceso educativo** para la diáspora Bubi alrededor del mundo
- **Recurso académico** para lingüistas e investigadores de lenguas africanas
- **Identidad cultural** para las nuevas generaciones de jóvenes Bubi

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# Bubi-Lex 📖

## What is Bubi-Lex?

**Bubi-Lex** is a digital dictionary and linguistic platform dedicated to the preservation and digitalization of the Bubi language, the native language of the Bubi people of Bioko Island, Equatorial Guinea. It is the first digital tool of its kind for this language.

---

## ✨ Key Features

- **📚 Interactive Dictionary** — Thousands of Bubi ↔ Spanish entries with pronunciation and examples
- **🔊 Audio Pronunciation** — Native speaker recordings for each term
- **🤖 AI Linguistic Assistant** — Contextual translations and grammatical explanations
- **🏛️ Cultural Archive** — Proverbs, traditional songs and cultural expressions
- **👥 Community Contribution** — Native speakers can propose and validate new entries
- **🎓 Learning Module** — Structured lessons to learn Bubi from scratch

---

## 💼 Impact

Represents an unprecedented cultural preservation effort for Equatorial Guinea, providing a digital resource for the Bubi language spoken by fewer than 100,000 native speakers.

---

## 🔗 Status

🟢 **Live**`
  },

  "eteba-pay": {
    "es": `# Eteba Pay 💰

## ¿Qué es Eteba Pay?

**Eteba Pay** es una plataforma de pagos digitales diseñada para el mercado ecuatoguineano y africano. Facilita transacciones electrónicas, transferencias de dinero, cobros para negocios y gestión de billeteras digitales, adaptada a las realidades del mercado local donde el acceso a soluciones de pago globales es limitado.

---

## 🎯 El Problema que Resuelve

Guinea Ecuatorial y gran parte de África Central tienen acceso limitado a soluciones de pago digital globales (PayPal, Stripe, etc.). Los negocios locales no tienen cómo cobrar online de forma fiable. Eteba Pay crea una solución de pago nativa, adaptada a los métodos de pago locales (móvil, banco, efectivo), que permite a cualquier negocio aceptar pagos digitales.

---

## ✨ Características Principales

### Para Consumidores
- **💳 Billetera Digital** — Saldo recargable para pagos rápidos sin efectivo
- **📲 Transferencias** — Envío de dinero entre usuarios de la plataforma
- **🧾 Historial de Transacciones** — Registro completo de todas las operaciones
- **🔔 Notificaciones** — Alertas en tiempo real de cobros y abonos
- **🔒 Seguridad** — Autenticación de dos factores y encriptación de datos

### Para Negocios
- **🏪 Pasarela de Cobro** — Botón de pago integrable en cualquier sitio web
- **📊 Dashboard Financiero** — Métricas de ventas, ingresos y transacciones
- **🔑 API de Pagos** — Integración con tiendas online y aplicaciones
- **📄 Facturación Digital** — Generación automática de recibos y facturas
- **💼 Gestión de Cobros** — Panel para verificar y gestionar pagos recibidos

### Para Administradores
- **🗂️ Gestión de Cuentas** — Control total sobre usuarios y negocios
- **⚖️ Cumplimiento** — Herramientas de prevención de fraude y cumplimiento normativo
- **📈 Analítica** — Dashboard global de flujo de dinero en la plataforma

---

## ⚙️ ¿Cómo Funciona?

1. **El usuario crea su cuenta** y recarga su billetera mediante transferencia bancaria o agente local
2. **El negocio genera un enlace de pago** o integra el widget en su plataforma
3. **El cliente realiza el pago** desde su billetera Eteba Pay con un solo clic
4. **El negocio recibe** el dinero en su cuenta con confirmación instantánea
5. **El comercio retira** el dinero a su cuenta bancaria cuando lo necesita

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js + PHP |
| Base de Datos | MySQL |
| Seguridad | Encriptación end-to-end, 2FA |
| Autenticación | Sistema propio + OAuth |
| Diseño | Interfaz financiera limpia y confiable |

---

## 💼 Impacto

Democratiza el acceso a los pagos digitales en Guinea Ecuatorial, permitiendo que negocios de cualquier tamaño acepten pagos electrónicos y que ciudadanos sin acceso a banca internacional puedan participar en la economía digital.

---

## 🔗 Estado Actual

🟡 **Beta — Acceso limitado**`,

    "en": `# Eteba Pay 💰

## What is Eteba Pay?

**Eteba Pay** is a digital payments platform designed for the Equatoguinean and African market, facilitating electronic transactions, money transfers, business collections and digital wallet management.

---

## ✨ Key Features

- **💳 Digital Wallet** — Rechargeable balance for fast cashless payments
- **📲 Transfers** — Send money between platform users
- **🏪 Payment Gateway** — Embeddable payment button for any website
- **🔑 Payment API** — Integration with online stores and applications
- **🔒 Security** — Two-factor authentication and data encryption

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js + PHP |
| Database | MySQL |
| Security | End-to-end encryption, 2FA |

---

## 🔗 Status

🟡 **Beta — Limited access**`
  },

  "rb": {
    "es": `# ËRËBË 🌍

## ¿Qué es ËRËBË?

**ËRËBË** (que significa "tierra" en Bubi) es la primera plataforma de votación digital de Guinea Ecuatorial. Permite a los ciudadanos participar en eventos de votación y nominación — desde certámenes culturales hasta elecciones comunitarias — de forma segura, transparente y accesible desde cualquier dispositivo.

---

## 🎯 El Problema que Resuelve

Los eventos de votación en Guinea Ecuatorial (concursos de belleza, premios culturales, reconocimientos comunitarios) se realizaban de forma manual o a través de encuestas informales en redes sociales, sin control de duplicados, sin transparencia en los resultados ni capacidad de escalar. ËRËBË digitaliza y formaliza este proceso.

---

## ✨ Características Principales

- **🗳️ Sistema de Votación en Tiempo Real** — Los votos se contabilizan y publican al instante
- **👥 Gestión de Eventos** — Creación de eventos con categorías, nominados y reglas personalizadas
- **🏆 Sistema de Gamificación** — Puntos, badges y rankings para incentivar la participación
- **💬 Comentarios y Reacciones** — Los usuarios pueden interactuar con los nominados y entre sí
- **📊 Dashboard de Analytics** — Estadísticas en tiempo real de votos, participación y tendencias
- **🎫 Sistema de Tickets** — Compra de votos adicionales o acceso a eventos premium
- **📱 PWA (Progressive Web App)** — Instalable como app nativa en cualquier dispositivo
- **🔐 Seguridad Anti-fraude** — Verificación de usuarios para prevenir votos duplicados
- **🌐 Diseño Glassmorphism** — Interfaz visual moderna y elegante con modo oscuro

---

## ⚙️ ¿Cómo Funciona?

1. **El organizador** crea un evento en la plataforma, define las categorías y agrega a los nominados con sus fotos
2. **La plataforma publica** el evento con un enlace compartible en redes sociales
3. **Los ciudadanos** se registran (o inician sesión) y votan por sus favoritos
4. **El sistema** verifica la identidad del votante para evitar fraudes
5. **Los resultados** se actualizan en tiempo real y se publican al finalizar el evento

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP 8.3+, Laravel 9 |
| Base de Datos | MySQL 8.0 |
| Servidor | Apache 2.4 |
| Diseño | Glassmorphism, Responsive, PWA |
| Seguridad | HTTPS forzado, protección XSS y CSRF |

---

## 💼 Impacto

ËRËBË moderniza la participación ciudadana en Guinea Ecuatorial, creando una herramienta que:
- Aumenta la participación en eventos culturales y comunitarios
- Garantiza transparencia en los procesos de votación
- Conecta a la diáspora ecuatoguineana con eventos en el país

---

## 🔗 Estado Actual

🟢 **En línea:** [https://erebe.xo.je](https://erebe.xo.je)`,

    "en": `# ËRËBË 🌍

## What is ËRËBË?

**ËRËBË** (meaning "earth" in Bubi) is the first digital voting platform of Equatorial Guinea, allowing citizens to participate in voting and nomination events securely, transparently and from any device.

---

## ✨ Key Features

- **🗳️ Real-time Voting System** — Votes are counted and published instantly
- **👥 Event Management** — Create events with custom categories, nominees and rules
- **🏆 Gamification System** — Points, badges and rankings to incentivize participation
- **📊 Analytics Dashboard** — Real-time statistics on votes, participation and trends
- **📱 PWA** — Installable as a native app on any device
- **🔐 Anti-fraud Security** — User verification to prevent duplicate votes

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP 8.3+, Laravel 9 |
| Database | MySQL 8.0 |

---

## 🔗 Status

🟢 **Live:** [https://erebe.xo.je](https://erebe.xo.je)`
  },

  "hackforce-ai-api": {
    "es": `# HackForce AI API 🤖

## ¿Qué es HackForce AI API?

**HackForce AI API** es una plataforma de inteligencia artificial para desarrolladores que centraliza el acceso a múltiples modelos de lenguaje (LLMs) a través de una única API unificada. Permite a equipos de desarrollo integrar capacidades de IA en sus aplicaciones sin necesidad de gestionar múltiples proveedores, cuentas o formatos de API.

---

## 🎯 El Problema que Resuelve

El ecosistema de IA está fragmentado: OpenAI, Anthropic, Google, Meta y otros proveedores tienen APIs incompatibles entre sí. Los desarrolladores deben mantener integraciones separadas para cada proveedor, gestionar múltiples claves de API y adaptar su código cuando cambian de modelo. HackForce AI API resuelve esto con una capa de abstracción única.

---

## ✨ Características Principales

- **🔑 API Unificada** — Un solo endpoint compatible con múltiples modelos (GPT, Claude, Llama, Gemini, etc.)
- **⚖️ Balanceo de Carga** — Distribución inteligente de peticiones entre proveedores según disponibilidad y costo
- **🔄 Fallback Automático** — Si un proveedor falla, redirige automáticamente a un modelo alternativo
- **📊 Dashboard de Uso** — Monitoreo en tiempo real de peticiones, tokens usados y costos
- **🔐 Gestión de API Keys** — Sistema seguro de generación y rotación de claves
- **⚡ Caché Inteligente** — Caché de respuestas para peticiones idénticas, reduciendo costos
- **📈 Rate Limiting** — Control de límites de velocidad por usuario y plan
- **🧪 Playground Interactivo** — Interfaz web para probar modelos sin escribir código
- **📋 Logs de Peticiones** — Historial completo de todas las llamadas a la API

---

## ⚙️ ¿Cómo Funciona?

1. **El desarrollador** se registra y obtiene una API key de HackForce
2. **Configura su aplicación** para apuntar al endpoint de HackForce en lugar del proveedor directo
3. **Envía peticiones** con el formato estándar de HackForce, especificando el modelo deseado
4. **HackForce enruta** la petición al proveedor correspondiente, gestiona la autenticación y devuelve la respuesta
5. **El dashboard** muestra estadísticas de uso, costos y rendimiento en tiempo real

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Backend | Node.js + Express + TypeScript |
| Base de Datos | PostgreSQL |
| Autenticación | JWT + API Keys |
| Caché | Redis |
| Documentación | OpenAPI / Swagger |
| Hosting | Cloud (escalable horizontalmente) |

---

## 💼 Impacto

Democratiza el acceso a la IA para desarrolladores de todo el mundo, especialmente en regiones donde el acceso directo a múltiples proveedores de LLMs es complejo o costoso. Reduce la complejidad de integración y los costos operativos en hasta un 40%.

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# HackForce AI API 🤖

## What is HackForce AI API?

**HackForce AI API** is an artificial intelligence platform for developers that centralizes access to multiple language models (LLMs) through a single unified API.

---

## ✨ Key Features

- **🔑 Unified API** — Single endpoint compatible with multiple models (GPT, Claude, Llama, Gemini, etc.)
- **⚖️ Load Balancing** — Smart distribution of requests between providers
- **🔄 Automatic Fallback** — Auto-redirects to alternative model if provider fails
- **📊 Usage Dashboard** — Real-time monitoring of requests, tokens and costs
- **⚡ Smart Cache** — Response caching for identical requests
- **🧪 Interactive Playground** — Web interface to test models without writing code

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express + TypeScript |
| Database | PostgreSQL |
| Cache | Redis |

---

## 🔗 Status

🟢 **Live**`
  },

  "ecg-digital-city": {
    "es": `# ECG Digital City 🏙️

## ¿Qué es ECG Digital City?

**ECG Digital City** es una plataforma de ciudad digital para Guinea Ecuatorial que centraliza servicios gubernamentales, ciudadanos y empresariales en un único portal digital. Facilita trámites online, directorio de negocios locales, noticias y comunicación ciudadana, actuando como la "ciudad virtual" de Ecuador Ecuatorial.

---

## 🎯 El Problema que Resuelve

Los ciudadanos y empresas de Guinea Ecuatorial tienen dificultades para acceder a información gubernamental actualizada, directorio de negocios locales y servicios ciudadanos de forma digital. La información está dispersa, desactualizada o simplemente no está disponible online. ECG Digital City centraliza todo en un único punto de acceso.

---

## ✨ Características Principales

- **🏛️ Portal Ciudadano** — Información sobre trámites, requisitos y servicios gubernamentales
- **🗺️ Directorio de Negocios** — Mapa interactivo y listado de empresas locales por categoría
- **📰 Noticias Locales** — Agregador de noticias relevantes para Guinea Ecuatorial
- **📋 Directorio de Servicios** — Hospitales, escuelas, entidades gubernamentales y más
- **🏢 Portal Empresarial** — Registro y visibilidad para negocios locales
- **👥 Foros Ciudadanos** — Espacios de participación y debate ciudadano
- **📱 App Móvil** — Versión PWA accesible desde cualquier smartphone
- **🔍 Búsqueda Inteligente** — Búsqueda unificada en todos los servicios del portal

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Mapas | Google Maps API / OpenStreetMap |
| Diseño | Portal gubernamental moderno |

---

## 💼 Impacto

Moderniza la relación digital entre ciudadanos, negocios y gobierno en Guinea Ecuatorial, reduciendo la brecha digital y facilitando el acceso a información y servicios de forma remota.

---

## 🔗 Estado Actual

🟡 **En desarrollo**`,

    "en": `# ECG Digital City 🏙️

## What is ECG Digital City?

**ECG Digital City** is a digital city platform for Equatorial Guinea that centralizes government, citizen and business services in a single digital portal.

---

## ✨ Key Features

- **🏛️ Citizen Portal** — Information on procedures and government services
- **🗺️ Business Directory** — Interactive map of local businesses by category
- **📰 Local News** — News aggregator for Equatorial Guinea
- **🏢 Business Portal** — Registration and visibility for local businesses

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟡 **In development**`
  },

  "sugarbabylounge": {
    "es": `# SugarBabyLounge 🥂

## ¿Qué es SugarBabyLounge?

**SugarBabyLounge** es una plataforma de entretenimiento, eventos y lifestyle para un público adulto premium. Ofrece acceso a eventos exclusivos, contenido de lifestyle, reservas en locales de lujo y una comunidad para personas que disfrutan del entretenimiento de alta gama.

---

## 🎯 Propósito

Crear un espacio digital elegante y exclusivo donde los amantes del lifestyle de lujo puedan descubrir eventos, conectar con personas afines y acceder a experiencias premium de entretenimiento y ocio.

---

## ✨ Características Principales

- **🎉 Directorio de Eventos** — Eventos exclusivos, fiestas privadas y experiencias premium
- **🍾 Reservas en Locales** — Sistema de reservas en restaurantes y locales de lujo
- **👥 Red Social Privada** — Comunidad cerrada para miembros verificados
- **📱 App Premium** — Interfaz elegante con diseño glassmorphism y modo oscuro
- **🔐 Acceso por Membresía** — Contenido exclusivo para miembros suscritos
- **📸 Galería de Eventos** — Fotografías y cobertura de eventos pasados
- **🎟️ Compra de Entradas** — Sistema de tickets para eventos presenciales

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Base de Datos | MySQL |
| Diseño | Glassmorphism, Dark Mode, Colores dorados |

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# SugarBabyLounge 🥂

## What is SugarBabyLounge?

**SugarBabyLounge** is an entertainment, events and lifestyle platform for a premium adult audience, offering access to exclusive events, luxury venue bookings and a community for high-end entertainment enthusiasts.

---

## ✨ Key Features

- **🎉 Events Directory** — Exclusive events and premium experiences
- **🍾 Venue Bookings** — Luxury restaurant and venue reservation system
- **👥 Private Social Network** — Closed community for verified members
- **🎟️ Ticket Purchases** — Ticketing system for in-person events

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Database | MySQL |

---

## 🔗 Status

🟢 **Live**`
  },

  "abeme-oil": {
    "es": `# ABEME OIL 🛢️

## ¿Qué es ABEME OIL?

**ABEME OIL** es el sitio web corporativo y plataforma digital de una empresa del sector de hidrocarburos y energía. Presenta los servicios, proyectos y capacidades de la empresa en el sector de petróleo, gas y energía en Guinea Ecuatorial y la región de África Central.

---

## 🎯 Propósito

Ofrecer una presencia digital profesional y creíble para una empresa del sector energético, mostrando su experiencia, proyectos realizados, capacidades técnicas y canales de contacto para partnerships empresariales.

---

## ✨ Contenido del Sitio

- **🏢 Presentación Corporativa** — Historia, misión y valores de la empresa
- **⚙️ Servicios** — Catálogo de servicios ofrecidos en el sector energético
- **📁 Proyectos** — Portfolio de proyectos realizados con detalles técnicos
- **👥 Equipo Directivo** — Presentación del equipo de liderazgo
- **📍 Presencia Regional** — Mapa de operaciones en África Central
- **📞 Contacto Empresarial** — Formulario y datos de contacto para negocios B2B
- **📄 Documentación** — Recursos descargables sobre servicios y capacidades

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Diseño | Corporativo, colores de la industria energética |

---

## 💼 Impacto

Proporciona visibilidad digital profesional a una empresa del sector energético ecuatoguineano, facilitando el establecimiento de relaciones comerciales y la captación de proyectos a nivel regional e internacional.

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# ABEME OIL 🛢️

## What is ABEME OIL?

**ABEME OIL** is the corporate website and digital platform of a hydrocarbons and energy sector company, presenting its services, projects and capabilities in the oil, gas and energy sector in Equatorial Guinea.

---

## ✨ Site Content

- **🏢 Corporate Presentation** — Company history, mission and values
- **⚙️ Services** — Catalog of services in the energy sector
- **📁 Projects** — Portfolio of completed projects
- **📞 Business Contact** — B2B contact form and details

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟢 **Live**`
  },

  "gq-turismo": {
    "es": `# GQ-Turismo 🌴

## ¿Qué es GQ-Turismo?

**GQ-Turismo** es una plataforma de turismo digital para Guinea Ecuatorial que conecta a viajeros con agencias de turismo, guías locales y negocios relacionados con el turismo (hoteles, restaurantes, actividades). Es el primer portal turístico completo del país, diseñado para promover Guinea Ecuatorial como destino turístico.

---

## 🎯 El Problema que Resuelve

Guinea Ecuatorial tiene un enorme potencial turístico (playas vírgenes, selva tropical, cultura Bubi y Fang, fauna única) pero carece de infraestructura digital para promoverlo. Los turistas no encuentran información actualizada sobre destinos, agencias confiables o guías locales. GQ-Turismo llena este vacío.

---

## ✨ Características Principales

- **🗺️ Destinos Turísticos** — Guías detalladas de destinos en Bioko, Río Muni e islas
- **🧳 Agencias de Turismo** — Directorio verificado de agencias con paquetes y precios
- **🧭 Guías Turísticos** — Perfiles de guías locales certificados con valoraciones
- **🏨 Alojamientos** — Hoteles, hostales y alojamientos recomendados
- **🍽️ Gastronomía** — Directorio de restaurantes con cocina local e internacional
- **📅 Actividades** — Reservas de actividades: senderismo, buceo, safari, tours culturales
- **💼 Panel de Agencia** — Las agencias gestionan sus paquetes y reservas desde un dashboard
- **⭐ Sistema de Valoraciones** — Reseñas verificadas de turistas reales
- **🌐 Multiidioma** — Español, francés e inglés para alcanzar turistas internacionales
- **📱 Diseño Responsivo** — Optimizado para móvil, donde la mayoría busca información

---

## 👥 Tipos de Usuarios

| Rol | Descripción |
|-----|-------------|
| Super Admin | Gestión total de la plataforma, usuarios y contenido |
| Agencia de Turismo | Panel propio para gestionar paquetes, precios y reservas |
| Guía Turístico | Perfil profesional con disponibilidad y servicios |
| Local/Negocio | Restaurantes, hoteles y negocios turísticos |
| Turista | Búsqueda, reservas y valoraciones |

---

## ⚙️ ¿Cómo Funciona?

1. **El turista** busca destinos en Guinea Ecuatorial y encuentra guías detalladas
2. **Explora agencias, guías y actividades** filtradas por tipo, precio y valoración
3. **Realiza una reserva** directamente desde la plataforma o contacta al proveedor
4. **La agencia/guía** gestiona la reserva desde su panel de control
5. **Tras la experiencia**, el turista deja su valoración para futuras referencias

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Autenticación | Sistema RBAC multi-rol |
| Diseño | Imágenes de naturaleza, colores tropicales |

---

## 💼 Impacto

Posiciona a Guinea Ecuatorial como destino turístico en el mapa digital, creando un ecosistema que beneficia a agencias, guías, negocios locales y al turismo del país en general.

---

## 🔗 Estado Actual

🟡 **En desarrollo activo**`,

    "en": `# GQ-Turismo 🌴

## What is GQ-Turismo?

**GQ-Turismo** is a digital tourism platform for Equatorial Guinea that connects travelers with tourism agencies, local guides and tourism-related businesses.

---

## ✨ Key Features

- **🗺️ Tourist Destinations** — Detailed guides for destinations in Bioko, Río Muni and islands
- **🧳 Tourism Agencies** — Verified directory with packages and prices
- **🧭 Local Guides** — Certified local guide profiles with ratings
- **📅 Activities** — Bookings for hiking, diving, safari and cultural tours
- **⭐ Rating System** — Verified reviews from real tourists
- **🌐 Multilingual** — Spanish, French and English for international tourists

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟡 **In active development**`
  },

  "frikabeatz": {
    "es": `# Frikabeatz 🎵

## ¿Qué es Frikabeatz?

**Frikabeatz** es una plataforma de distribución y venta de beats, pistas musicales y producción musical, orientada a productores de música y artistas. Permite a los productores vender sus beats online, y a los artistas explorar y licenciar pistas para sus proyectos musicales.

---

## 🎯 El Problema que Resuelve

Los productores de música ecuatoguineanos y africanos no tienen canales digitales especializados para vender su trabajo. El mercado de beats y producción musical está dominado por plataformas internacionales que no tienen alcance local. Frikabeatz crea un mercado de música nativo para el mercado africano.

---

## ✨ Características Principales

- **🎵 Catálogo de Beats** — Exploración de pistas por género, tempo, estado de ánimo y precio
- **▶️ Reproductor Preview** — Vista previa de 30 segundos de cada beat antes de comprar
- **💳 Licencias de Uso** — Diferentes tipos de licencias (básica, exclusiva, sin royalties)
- **🔑 Entrega Digital** — Descarga inmediata de archivos de alta calidad tras la compra
- **🎤 Portal del Productor** — Dashboard para subir beats, gestionar precios y ver estadísticas de ventas
- **📊 Analytics** — Estadísticas de reproducciones, descargas y ventas por beat
- **🔍 Búsqueda Avanzada** — Filtros por BPM, tonalidad, género y mood
- **❤️ Favoritos** — Los artistas guardan beats para revisarlos después
- **💬 Mensajería** — Comunicación directa entre artistas y productores para colaboraciones personalizadas

---

## ⚙️ ¿Cómo Funciona?

**Para el Productor:**
1. Se registra como productor y accede a su dashboard
2. Sube sus beats con metadata completa (BPM, tonalidad, género, descripción)
3. Establece precios y tipos de licencias disponibles
4. Recibe notificaciones y pagos cuando un artista compra su beat

**Para el Artista:**
1. Explora el catálogo y escucha previews de los beats
2. Filtra por sus preferencias musicales
3. Adquiere la licencia que necesita para su proyecto
4. Descarga inmediatamente los archivos en alta calidad (WAV, MP3)

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Base de Datos | MySQL |
| Audio | Web Audio API, streaming adaptativo |
| Pagos | Pasarela de pago integrada |
| Diseño | Oscuro, vibrante, estética musical |

---

## 💼 Impacto

Crea un mercado de música digital para productores africanos, permitiéndoles monetizar su talento y conectar con artistas que buscan pistas originales para sus proyectos.

---

## 🔗 Estado Actual

🟢 **En línea**`,

    "en": `# Frikabeatz 🎵

## What is Frikabeatz?

**Frikabeatz** is a beat distribution and sales platform for music producers and artists, allowing producers to sell their beats online and artists to explore and license tracks for their musical projects.

---

## ✨ Key Features

- **🎵 Beat Catalog** — Explore tracks by genre, tempo, mood and price
- **▶️ Preview Player** — 30-second preview before purchasing
- **💳 Use Licenses** — Different license types (basic, exclusive, royalty-free)
- **🔑 Digital Delivery** — Instant download after purchase
- **🎤 Producer Portal** — Dashboard to upload beats and track sales

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Database | MySQL |

---

## 🔗 Status

🟢 **Live**`
  },

  "personal-portfolio-website": {
    "es": `# Personal Portfolio Website 👨‍💻

## ¿Qué es este Portfolio?

Este es el **portfolio personal** de Fernando Chale Eteba, desarrollador full-stack ecuatoguineano fundador del Eteba Chale Group. Es el sitio que estás viendo ahora mismo — una presentación visual de los proyectos desarrollados, habilidades técnicas y trayectoria profesional.

---

## 🎯 Propósito

Crear una presencia digital profesional que comunique de forma efectiva las habilidades técnicas, los proyectos desarrollados y la visión como desarrollador, actuando como carta de presentación digital para clientes, colaboradores y reclutadores.

---

## ✨ Características del Portfolio

- **🏠 Hero Dinámico** — Pantalla completa con animaciones y presentación impactante
- **🚀 Sección de Proyectos** — Galería visual de todos los proyectos con logos, descripción y links
- **🔍 Filtros de Proyectos** — Filtrado por tecnología, categoría y estado
- **📄 Detalle de Proyectos** — Página dedicada a cada proyecto con documentación completa
- **🛠️ Skills** — Visualización animada de tecnologías y habilidades
- **👤 Sobre Mí** — Información personal y trayectoria profesional
- **📞 Contacto** — Formulario y links directos a redes profesionales
- **🌍 Multiidioma** — Soporte para español, francés e inglés
- **🌙 Diseño Dark Mode** — Interfaz oscura moderna con glassmorphism
- **📱 Responsive** — Experiencia perfecta en todos los dispositivos

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript vanilla |
| Datos | projects-data.js (datos centralizados) |
| Hosting | GitHub Pages |
| Diseño | Glassmorphism, Animaciones CSS, Dark Mode |
| Fuentes | Google Fonts (Inter, Outfit) |
| Iconos | Font Awesome |

---

## 💼 Habilidades Demostradas

- Diseño UI/UX avanzado sin frameworks CSS
- Arquitectura SPA con JavaScript vanilla
- Internacionalización (i18n) multi-idioma
- Optimización de performance para sitios estáticos
- GitHub Pages deployment

---

## 🔗 Estado Actual

🟢 **En línea:** [https://cvfernandochaleeteba.github.io](https://cvfernandochaleeteba.github.io)`,

    "en": `# Personal Portfolio Website 👨‍💻

## What is this Portfolio?

This is the **personal portfolio** of Fernando Chale Eteba, Equatoguinean full-stack developer and founder of Eteba Chale Group. It's the site you're viewing right now.

---

## ✨ Portfolio Features

- **🏠 Dynamic Hero** — Full-screen with animations and impactful presentation
- **🚀 Projects Gallery** — Visual showcase of all projects with logos and links
- **🔍 Project Filters** — Filter by technology, category and status
- **📄 Project Details** — Dedicated page for each project
- **🌍 Multilingual** — Spanish, French and English support
- **🌙 Dark Mode Design** — Modern dark interface with glassmorphism

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Hosting | GitHub Pages |
| Design | Glassmorphism, CSS Animations, Dark Mode |

---

## 🔗 Status

🟢 **Live:** [https://cvfernandochaleeteba.github.io](https://cvfernandochaleeteba.github.io)`
  },

  "africa-youth-portal": {
    "es": `# Africa Youth Portal 🌍

## ¿Qué es Africa Youth Portal?

**Africa Youth Portal** es una plataforma digital dedicada a empoderar a los jóvenes africanos, especialmente de Guinea Ecuatorial, ofreciendo recursos educativos, oportunidades de empleo, becas, noticias relevantes y una red de conexión entre jóvenes africanos emprendedores y profesionales.

---

## 🎯 El Problema que Resuelve

Los jóvenes africanos tienen dificultades para acceder a información sobre oportunidades educativas, becas internacionales, empleos en el sector tecnológico y redes de networking profesional. La información está fragmentada en múltiples plataformas internacionales que no están contextualizadas para la realidad africana. Africa Youth Portal centraliza estos recursos.

---

## ✨ Características Principales

- **📚 Recursos Educativos** — Artículos, guías y recursos de aprendizaje adaptados al contexto africano
- **🎓 Base de Datos de Becas** — Directorio actualizado de becas para jóvenes africanos (locales e internacionales)
- **💼 Bolsa de Empleo** — Ofertas de trabajo en empresas africanas y multinacionales presentes en el continente
- **🚀 Directorio de Startups** — Proyectos y emprendimientos de jóvenes africanos
- **👥 Red de Networking** — Conexión entre jóvenes profesionales y emprendedores africanos
- **📰 Noticias África** — Noticias relevantes sobre tecnología, economía y sociedad en África
- **🏆 Historias de Éxito** — Casos inspiradores de jóvenes africanos que han destacado
- **📅 Eventos** — Conferencias, hackathons y encuentros para jóvenes africanos

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Base de Datos | MySQL |
| Diseño | Colores africanos, moderno y accesible |

---

## 💼 Impacto

Conecta a la juventud africana con oportunidades que de otra forma serían difíciles de encontrar, contribuyendo al desarrollo del capital humano del continente y fomentando el emprendimiento tecnológico en África.

---

## 🔗 Estado Actual

🟡 **En desarrollo**`,

    "en": `# Africa Youth Portal 🌍

## What is Africa Youth Portal?

**Africa Youth Portal** is a digital platform dedicated to empowering young Africans by offering educational resources, job opportunities, scholarships, news and a connection network for African entrepreneurs and professionals.

---

## ✨ Key Features

- **📚 Educational Resources** — Articles and learning guides for the African context
- **🎓 Scholarships Database** — Updated directory of scholarships for young Africans
- **💼 Job Board** — Job offers at African and multinational companies
- **👥 Networking** — Connection between young African professionals and entrepreneurs

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP |
| Database | MySQL |

---

## 🔗 Status

🟡 **In development**`
  },

  "guinea-vista": {
    "es": `# Guinea Vista 🎥

## ¿Qué es Guinea Vista?

**Guinea Vista** es una plataforma de contenido multimedia — videos, documentales, reportajes y entretenimiento — dedicada a Guinea Ecuatorial. Es el primer portal de streaming y contenido audiovisual nativo del país, donde creadores locales pueden publicar y monetizar su contenido, y los ciudadanos pueden consumir contenido de calidad en su idioma y sobre su realidad.

---

## 🎯 El Problema que Resuelve

Guinea Ecuatorial no tiene plataformas de contenido audiovisual propias. Los creadores locales dependen de YouTube o redes sociales internacionales sin herramientas adaptadas al mercado local. No existe un repositorio organizado de documentales, reportajes y entretenimiento sobre Guinea Ecuatorial. Guinea Vista llena este vacío.

---

## ✨ Características Principales

- **🎬 Catálogo de Vídeos** — Documentales, reportajes, entretenimiento y contenido cultural ecuatoguineano
- **📺 Streaming** — Reproducción en streaming con calidad adaptativa según la conexión
- **🎤 Portal de Creadores** — Los creadores locales suben y gestionan su contenido
- **💰 Monetización** — Los creadores ganan con vistas y suscripciones premium
- **🔍 Búsqueda y Categorías** — Navegación por categorías: noticias, cultura, deporte, música, documentales
- **👥 Comunidad** — Comentarios, valoraciones y listas de reproducción
- **📱 Responsive** — Experiencia óptima en móvil, tablet y desktop
- **🌍 Multiidioma** — Contenido en español, francés y lenguas locales

---

## ⚙️ ¿Cómo Funciona?

1. **El creador** sube su vídeo con título, descripción y categoría
2. **La plataforma** procesa el vídeo y lo hace disponible en streaming
3. **El espectador** busca contenido y lo consume desde cualquier dispositivo
4. **El algoritmo** recomienda contenido relevante según el historial de vistas
5. **Los creadores** reciben estadísticas y monetización por su contenido

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP, Laravel |
| Base de Datos | MySQL |
| Video | Streaming adaptativo (HLS) |
| Almacenamiento | CDN para archivos de vídeo |
| Diseño | Netflix-inspired, dark mode |

---

## 💼 Impacto

Crea el primer ecosistema de contenido audiovisual nativo para Guinea Ecuatorial, ofreciendo a creadores locales una plataforma propia y a ciudadanos una fuente de contenido relevante sobre su país y cultura.

---

## 🔗 Estado Actual

🟡 **En desarrollo**`,

    "en": `# Guinea Vista 🎥

## What is Guinea Vista?

**Guinea Vista** is a multimedia content platform — videos, documentaries, reports and entertainment — dedicated to Equatorial Guinea, the first native streaming and audiovisual content portal of the country.

---

## ✨ Key Features

- **🎬 Video Catalog** — Documentaries, reports and entertainment about Equatorial Guinea
- **📺 Streaming** — Adaptive quality streaming based on connection
- **🎤 Creator Portal** — Local creators upload and manage their content
- **💰 Monetization** — Creators earn from views and premium subscriptions
- **🌍 Multilingual** — Content in Spanish, French and local languages

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP, Laravel |
| Database | MySQL |
| Video | Adaptive streaming (HLS) |

---

## 🔗 Status

🟡 **In development**`
  },

  "bitcora-de-aprendizaje": {
    "es": `# Bitácora de Aprendizaje 📓

## ¿Qué es Bitácora de Aprendizaje?

**Bitácora de Aprendizaje** es una aplicación de escritorio Java diseñada para registrar, organizar y analizar el progreso de aprendizaje y las sesiones de trabajo. Funciona como un diario de desarrollo personal estructurado, donde se registran eventos de aprendizaje categorizados en Aciertos, Errores, Dificultades y Consejos, permitiendo análisis y reflexión continua.

---

## 🎯 El Problema que Resuelve

Los desarrolladores y profesionales raramente documentan sistemáticamente lo que aprenden. El conocimiento adquirido en sesiones de trabajo se pierde o se olvida. La Bitácora de Aprendizaje crea un sistema estructurado de registro que permite identificar patrones, áreas de mejora y medir el progreso real a lo largo del tiempo.

---

## ✨ Características Principales

- **📝 Registro de Eventos** — Creación de entradas estructuradas con fecha, categoría y descripción detallada
- **🗂️ 4 Categorías de Análisis:**
  - ✅ **Aciertos** — Lo que funcionó correctamente
  - ❌ **Errores** — Equivocaciones cometidas y sus causas
  - ⚠️ **Dificultades** — Obstáculos encontrados durante el trabajo
  - 💡 **Consejos/Estrategias** — Buenas prácticas descubiertas
- **📊 Dashboard de Estadísticas** — Gráficas de distribución de eventos por categoría y período
- **🔍 Búsqueda y Filtros** — Búsqueda por texto, fecha, categoría y proyecto
- **📅 Vista de Calendario** — Visualización de entradas por día, semana o mes
- **📤 Exportación** — Exportar la bitácora a PDF o CSV para análisis externos
- **🏷️ Etiquetas y Proyectos** — Organización de entradas por proyecto o área de conocimiento
- **🌙 Diseño Moderno** — Interfaz gráfica elegante con tema oscuro

---

## ⚙️ ¿Cómo Funciona?

1. Al terminar una sesión de trabajo, el usuario abre la Bitácora
2. Crea una o más entradas describiendo qué ocurrió en esa sesión
3. Categoriza cada entrada (Acierto, Error, Dificultad o Consejo)
4. Agrega etiquetas y el nombre del proyecto relacionado
5. Con el tiempo, el dashboard muestra patrones y progreso real

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Lenguaje | Java 17+ |
| GUI | JavaFX / Swing |
| Base de Datos | SQLite (local, sin servidor) |
| Build | Maven |
| Empaquetado | JAR ejecutable (sin instalación) |
| Diseño | Tema oscuro personalizado |

---

## 💼 Impacto Personal

Herramienta de productividad personal que transforma la forma de documentar el aprendizaje, permitiendo:
- Identificar patrones de errores repetitivos
- Medir el crecimiento técnico a lo largo del tiempo
- Crear una base de conocimiento personal y consultable
- Mejorar la eficiencia en futuras sesiones de trabajo

---

## 🔗 Estado Actual

🟢 **Disponible — Aplicación de escritorio**`,

    "en": `# Bitácora de Aprendizaje 📓

## What is Bitácora de Aprendizaje?

**Bitácora de Aprendizaje** (Learning Log) is a Java desktop application designed to record, organize and analyze learning progress and work sessions, functioning as a structured personal development journal.

---

## ✨ Key Features

- **📝 Event Recording** — Structured entries with date, category and detailed description
- **🗂️ 4 Analysis Categories:** Successes, Errors, Difficulties, Tips/Strategies
- **📊 Statistics Dashboard** — Distribution charts by category and period
- **🔍 Search & Filters** — Search by text, date, category and project
- **📤 Export** — Export to PDF or CSV for external analysis

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Language | Java 17+ |
| Database | SQLite (local, no server) |
| Build | Maven |
| Distribution | Executable JAR |

---

## 🔗 Status

🟢 **Available — Desktop application**`
  },

  "photostudio": {
    "es": `# Photostudio 📸

## ¿Qué es Photostudio?

**Photostudio** es una plataforma web y aplicación para fotógrafos profesionales y estudios de fotografía, que ofrece gestión de clientes, galerías de fotos online, reserva de sesiones fotográficas y entrega digital de trabajos. Es una herramienta completa de gestión de negocio para fotógrafos.

---

## 🎯 El Problema que Resuelve

Los fotógrafos profesionales gestionan su negocio de forma fragmentada: las reservas por WhatsApp, la entrega de fotos por WeTransfer, las facturas en Excel y la comunicación con clientes por email. Photostudio unifica todo en una sola plataforma profesional.

---

## ✨ Características Principales

- **📅 Sistema de Reservas** — Los clientes reservan sesiones fotográficas online con calendario de disponibilidad
- **🖼️ Galerías Privadas** — Entrega de fotos en galerías protegidas con contraseña para cada cliente
- **💳 Pagos Online** — Cobro de reservas y trabajos directamente desde la plataforma
- **📋 Gestión de Clientes** — CRM básico con historial de sesiones, preferencias y comunicaciones
- **🎨 Portfolio Público** — Galería pública del fotógrafo para atraer nuevos clientes
- **✉️ Comunicación Integrada** — Mensajería y notificaciones automáticas para confirmaciones y recordatorios
- **📊 Estadísticas** — Ingresos, sesiones realizadas y métricas de negocio
- **🏷️ Catálogo de Servicios** — Los fotógrafos definen sus paquetes y precios
- **📥 Descarga Selectiva** — Los clientes eligen qué fotos descargar de su galería

---

## ⚙️ ¿Cómo Funciona?

**Para el Fotógrafo:**
1. Crea su perfil y sube su portfolio para atraer clientes
2. Define sus servicios, precios y disponibilidad en el calendario
3. Recibe reservas y pagos automáticamente
4. Tras la sesión, sube las fotos a la galería privada del cliente

**Para el Cliente:**
1. Visita el portfolio del fotógrafo y elige el paquete que necesita
2. Reserva y paga online eligiendo fecha y hora disponible
3. Recibe enlace privado a su galería tras la sesión
4. Descarga sus fotos favoritas desde la galería protegida

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Base de Datos | MySQL |
| Almacenamiento | Sistema de archivos / Cloud Storage |
| Pagos | Pasarela de pago integrada |
| Diseño | Minimalista, enfocado en la fotografía |

---

## 💼 Impacto

Profesionaliza la gestión de negocios de fotografía en Guinea Ecuatorial y la región, permitiendo a los fotógrafos locales ofrecer una experiencia de cliente comparable a los estudios internacionales.

---

## 🔗 Estado Actual

🟡 **En desarrollo**`,

    "en": `# Photostudio 📸

## What is Photostudio?

**Photostudio** is a web platform for professional photographers and photography studios, offering client management, online photo galleries, session booking and digital delivery.

---

## ✨ Key Features

- **📅 Booking System** — Clients book photo sessions online with availability calendar
- **🖼️ Private Galleries** — Password-protected photo delivery for each client
- **💳 Online Payments** — Direct booking and project payments
- **🎨 Public Portfolio** — Photographer's public gallery to attract new clients
- **📊 Business Stats** — Revenue, sessions and business metrics

---

## 🛠️ Technologies

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | PHP / Node.js |
| Database | MySQL |

---

## 🔗 Status

🟡 **In development**`
  }
};
