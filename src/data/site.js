export const whatsappNumber = '51915174884'

export const navigationLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export const companyProfile = {
  brand: 'TechSupport',
  tagline: 'Soporte técnico moderno, rápido y confiable',
  summary:
    'Servicio de soporte técnico para computadoras y laptops, con diagnóstico claro, mantenimiento, optimización y atención remota o coordinada en Sullana.',
  location: 'Sullana y atención remota',
  schedule: 'Atención por WhatsApp, llamadas y coordinación directa',
  responseTime: 'Respuesta rápida por WhatsApp o llamada',
  phoneLabel: '915 174 884',
  whatsappLabel: '915 174 884',
  email: 'yaneliogonapaz50@gmail.com',
}

export const homeMetrics = [
  { value: 'PC y Laptop', label: 'Soporte técnico integral' },
  { value: 'Remoto', label: 'Atención rápida donde estés' },
  { value: 'Ágil', label: 'Diagnóstico inicial claro' },
  { value: 'Confiable', label: 'Proceso seguro y ordenado' },
]

export const services = [
  {
    slug: 'mantenimiento-pc',
    category: 'Mantenimiento',
    t: 'Mantenimiento de PC',
    d: 'Limpieza interna, revisión térmica y ajuste general para mejorar estabilidad y rendimiento.',
    detalle:
      'Revisamos tu computadora, retiramos polvo acumulado, renovamos pasta térmica cuando hace falta y dejamos el equipo listo para trabajar con mayor estabilidad.',
    precio: 50,
    icon: 'memory',
    img: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Hardware', 'Temperatura', 'Rendimiento'],
    incluye: ['Limpieza interna', 'Revisión de ventiladores', 'Prueba de rendimiento'],
    accent: 'var(--ts-teal-soft)',
  },
  {
    slug: 'limpieza-hardware',
    category: 'Mantenimiento',
    t: 'Limpieza de Hardware',
    d: 'Mantenimiento físico para reducir temperatura y prolongar la vida útil del equipo.',
    detalle:
      'Limpiamos componentes internos, rejillas y ventiladores para que tu equipo funcione con mejor ventilación y menos riesgo de sobrecalentamiento.',
    precio: 35,
    icon: 'cleaning_services',
    img: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Limpieza', 'Temperatura', 'Prevención'],
    incluye: ['Soplado técnico', 'Limpieza de ventiladores', 'Chequeo visual de piezas'],
    accent: 'var(--ts-peach-soft)',
  },
  {
    slug: 'eliminacion-virus',
    category: 'Seguridad',
    t: 'Eliminación de Virus',
    d: 'Limpieza profunda de malware, adware y amenazas que afectan la seguridad del equipo.',
    detalle:
      'Realizamos una revisión completa del sistema, eliminamos amenazas, restauramos configuraciones importantes y dejamos recomendaciones para evitar reinfecciones.',
    precio: 60,
    icon: 'shield',
    img: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Seguridad', 'Antivirus', 'Protección'],
    incluye: ['Escaneo completo', 'Limpieza de malware', 'Recomendaciones de protección'],
    accent: 'var(--ts-sky-soft)',
  },
  {
    slug: 'formateo-instalacion',
    category: 'Software',
    t: 'Formateo e Instalación',
    d: 'Instalación limpia del sistema, drivers y programas esenciales para empezar de nuevo sin fallas.',
    detalle:
      'Dejamos el equipo desde cero con sistema operativo, drivers correctos y programas básicos para que vuelvas a estudiar o trabajar con normalidad.',
    precio: 70,
    icon: 'computer',
    img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Windows', 'Drivers', 'Instalación'],
    incluye: ['Sistema operativo', 'Drivers', 'Software básico'],
    accent: 'var(--ts-sand-soft)',
  },
  {
    slug: 'optimizacion-equipos',
    category: 'Software',
    t: 'Optimización de Equipos',
    d: 'Ajustes del sistema para mejorar velocidad, inicio y fluidez en el uso diario.',
    detalle:
      'Reducimos procesos innecesarios, ordenamos el inicio del sistema y ajustamos el rendimiento para que el equipo responda mejor en tareas diarias.',
    precio: 45,
    icon: 'speed',
    img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Velocidad', 'Inicio', 'Ajustes'],
    incluye: ['Optimización de arranque', 'Limpieza de software', 'Ajustes de rendimiento'],
    accent: 'var(--ts-coral-soft)',
  },
  {
    slug: 'soporte-remoto',
    category: 'Soporte',
    t: 'Soporte Remoto',
    d: 'Atención a distancia para resolver fallas comunes sin mover tu computadora o laptop.',
    detalle:
      'Nos conectamos de forma remota para revisar configuraciones, resolver problemas de software y ayudarte con fallas que pueden solucionarse a distancia.',
    precio: 40,
    icon: 'support_agent',
    img: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Remoto', 'Asistencia', 'Rápido'],
    incluye: ['Diagnóstico guiado', 'Asistencia remota', 'Recomendación final'],
    accent: 'var(--ts-teal-soft)',
  },
  {
    slug: 'recuperacion-datos',
    category: 'Datos',
    t: 'Recuperación de Datos',
    d: 'Evaluación y rescate de archivos desde discos, memorias USB y unidades externas.',
    detalle:
      'Revisamos el medio afectado, evaluamos la posibilidad de recuperación y priorizamos tu información importante antes de intervenir.',
    precio: 90,
    icon: 'database',
    img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Datos', 'Archivos', 'Rescate'],
    incluye: ['Evaluación del medio', 'Intento de rescate', 'Reporte del estado'],
    accent: 'var(--ts-sky-soft)',
  },
  {
    slug: 'respaldo-informacion',
    category: 'Datos',
    t: 'Respaldo de Información',
    d: 'Copias de seguridad ordenadas para proteger documentos, fotos y archivos importantes.',
    detalle:
      'Preparamos copias de seguridad, ordenamos carpetas y verificamos que tu información quede protegida antes de cualquier cambio importante.',
    precio: 55,
    icon: 'cloud_upload',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Backup', 'Organización', 'Prevención'],
    incluye: ['Copia de seguridad', 'Orden de carpetas', 'Verificación final'],
    accent: 'var(--ts-sand-soft)',
  },
]

export const processSteps = [
  {
    title: 'Cuéntanos el problema',
    body: 'Escríbenos por WhatsApp o llámanos para revisar la falla de tu computadora o laptop.',
    icon: 'forum',
  },
  {
    title: 'Diagnóstico claro',
    body: 'Evaluamos el equipo y te explicamos la mejor solución con claridad antes de empezar.',
    icon: 'manage_search',
  },
  {
    title: 'Solución y seguimiento',
    body: 'Aplicamos el servicio y te dejamos recomendaciones para que el equipo siga funcionando bien.',
    icon: 'verified_user',
  },
]

export const trustHighlights = [
  {
    title: 'Diagnóstico antes de intervenir',
    body: 'Revisamos la falla y te explicamos el alcance del servicio antes de empezar.',
  },
  {
    title: 'Cuidado de archivos e información',
    body: 'Priorizamos tus documentos y configuraciones importantes durante cada atención.',
  },
  {
    title: 'Coordinación directa',
    body: 'Confirmamos por WhatsApp o llamada los pasos, tiempos y modalidad de atención.',
  },
]

export const testimonials = [
  {
    name: 'Proceso claro',
    role: 'Sin costos sorpresa',
    quote:
      'Primero revisamos la falla y luego te explicamos la solución recomendada antes de intervenir.',
  },
  {
    name: 'Atención coordinada',
    role: 'WhatsApp o llamada',
    quote:
      'Coordinamos horario, modalidad y detalles del servicio para que sepas qué esperar en cada paso.',
  },
  {
    name: 'Cuidado del equipo',
    role: 'Trabajo y estudio',
    quote:
      'Tratamos tu computadora o laptop con orden, cuidando archivos y configuraciones importantes.',
  },
]

export const aboutValues = [
  {
    title: 'Diagnóstico honesto',
    body: 'Tomamos decisiones según la falla real del equipo, sin cambios ni gastos innecesarios.',
    icon: 'precision_manufacturing',
  },
  {
    title: 'Comunicación clara',
    body: 'Te orientamos con explicaciones sencillas, tiempos realistas y pasos fáciles de seguir.',
    icon: 'record_voice_over',
  },
  {
    title: 'Cuidado del equipo',
    body:
      'Tratamos cada dispositivo y su información como herramientas importantes para tu trabajo o estudio.',
    icon: 'health_and_safety',
  },
]

export const missionVision = [
  {
    title: 'Misión',
    body:
      'Brindar soporte técnico confiable para computadoras y laptops, resolviendo fallas con claridad, protegiendo la información del cliente y devolviendo estabilidad al equipo para el trabajo, estudio y uso diario.',
    icon: 'flag',
    accent: 'var(--ts-sky-soft)',
    points: [
      'Resolver problemas reales con diagnóstico claro.',
      'Cuidar la información y el estado del equipo.',
      'Ofrecer una atención práctica, honesta y ordenada.',
    ],
  },
  {
    title: 'Visión',
    body:
      'Ser un servicio de soporte técnico reconocido en Sullana y en atención remota por su confianza, rapidez y cuidado profesional, ayudando a que más personas mantengan sus equipos seguros, optimizados y listos para seguir produciendo.',
    icon: 'visibility',
    accent: 'var(--ts-peach-soft)',
    points: [
      'Ser una referencia confiable en soporte técnico cercano.',
      'Impulsar equipos más seguros, estables y duraderos.',
      'Mantener una experiencia clara en cada atención y seguimiento.',
    ],
  },
]

export const contactCards = [
  {
    title: 'WhatsApp o llamadas',
    body: 'Escríbenos o llámanos para revisar tu caso y coordinar la atención.',
    icon: 'phone',
    value: companyProfile.phoneLabel,
  },
  {
    title: 'Correo electrónico',
    body: 'Envíanos tu consulta o detalles del problema y te responderemos pronto.',
    icon: 'mail',
    value: companyProfile.email,
  },
  {
    title: 'Dirección',
    body: 'Atendemos clientes en Sullana y coordinamos el servicio según el caso.',
    icon: 'place',
    value: 'Sullana',
  },
  {
    title: 'Atención remota',
    body: 'También brindamos ayuda a distancia para fallas de software y configuración.',
    icon: 'support_agent',
    value: 'Disponible por coordinación',
  },
]

export const paymentMethods = [
  {
    key: 'tarjeta',
    title: 'Tarjeta',
    description: 'Pago con débito o crédito para confirmar tu servicio.',
    icon: 'credit_card',
    accent: 'var(--ts-sky-soft)',
  },
  {
    key: 'yape',
    title: 'Yape',
    description: 'Pago rápido con QR o número directo desde tu celular.',
    icon: 'qr_code_2',
    accent: 'var(--ts-teal-soft)',
  },
  {
    key: 'efectivo',
    title: 'Efectivo',
    description: 'Coordina la atención y paga en efectivo según el servicio.',
    icon: 'payments',
    accent: 'var(--ts-peach-soft)',
  },
]

export const footerServices = services.slice(0, 4)
