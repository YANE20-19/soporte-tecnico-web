export const whatsappNumber = '51915174884'

export const navigationLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
]

export const companyProfile = {
  brand: 'TechSupport',
  tagline: 'Soporte tecnico moderno, rapido y confiable',
  summary:
    'Servicio de soporte tecnico para computadoras y laptops con diagnostico claro, mantenimiento, optimizacion y atencion remota o coordinada en Sullana.',
  location: 'Sullana y atencion remota',
  schedule: 'Atencion por WhatsApp, llamadas y coordinacion directa',
  responseTime: 'Respuesta rapida por WhatsApp o llamada',
  phoneLabel: '915 174 884',
  whatsappLabel: '915 174 884',
  email: 'yaneliogonapaz50@gmail.com',
}

export const homeMetrics = [
  { value: 'PC y Laptop', label: 'Soporte tecnico integral' },
  { value: 'Remoto', label: 'Atencion rapida donde estes' },
  { value: 'Agil', label: 'Diagnostico inicial claro' },
  { value: 'Confiable', label: 'Proceso seguro y ordenado' },
]

export const services = [
  {
    slug: 'mantenimiento-pc',
    category: 'Mantenimiento',
    t: 'Mantenimiento de PC',
    d: 'Limpieza interna, revision termica y ajuste general para mejorar estabilidad y rendimiento.',
    detalle:
      'Revisamos tu computadora, retiramos polvo acumulado, renovamos pasta termica cuando hace falta y dejamos el equipo listo para trabajar con mayor estabilidad.',
    precio: 50,
    icon: 'memory',
    img: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Hardware', 'Temperatura', 'Rendimiento'],
    incluye: ['Limpieza interna', 'Revision de ventiladores', 'Prueba de rendimiento'],
    accent: 'var(--ts-teal-soft)',
  },
  {
    slug: 'limpieza-hardware',
    category: 'Mantenimiento',
    t: 'Limpieza de Hardware',
    d: 'Mantenimiento fisico para reducir temperatura y prolongar la vida util del equipo.',
    detalle:
      'Limpiamos componentes internos, rejillas y ventiladores para que tu equipo funcione con mejor ventilacion y menos riesgo de sobrecalentamiento.',
    precio: 35,
    icon: 'cleaning_services',
    img: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Limpieza', 'Temperatura', 'Prevencion'],
    incluye: ['Soplado tecnico', 'Limpieza de ventiladores', 'Chequeo visual de piezas'],
    accent: 'var(--ts-peach-soft)',
  },
  {
    slug: 'eliminacion-virus',
    category: 'Seguridad',
    t: 'Eliminacion de Virus',
    d: 'Limpieza profunda de malware, adware y amenazas que afectan la seguridad del equipo.',
    detalle:
      'Realizamos una revision completa del sistema, eliminamos amenazas, restauramos configuraciones importantes y dejamos recomendaciones para evitar reinfecciones.',
    precio: 60,
    icon: 'shield',
    img: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Seguridad', 'Antivirus', 'Proteccion'],
    incluye: ['Escaneo completo', 'Limpieza de malware', 'Recomendaciones de proteccion'],
    accent: 'var(--ts-sky-soft)',
  },
  {
    slug: 'formateo-instalacion',
    category: 'Software',
    t: 'Formateo e Instalacion',
    d: 'Instalacion limpia del sistema, drivers y programas esenciales para empezar de nuevo sin fallas.',
    detalle:
      'Dejamos el equipo desde cero con sistema operativo, drivers correctos y programas basicos para que vuelvas a estudiar o trabajar con normalidad.',
    precio: 70,
    icon: 'computer',
    img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Windows', 'Drivers', 'Instalacion'],
    incluye: ['Sistema operativo', 'Drivers', 'Software basico'],
    accent: 'var(--ts-sand-soft)',
  },
  {
    slug: 'optimizacion-equipos',
    category: 'Software',
    t: 'Optimizacion de Equipos',
    d: 'Ajustes del sistema para mejorar velocidad, inicio y fluidez en el uso diario.',
    detalle:
      'Reducimos procesos innecesarios, ordenamos el inicio del sistema y ajustamos el rendimiento para que el equipo responda mejor en tareas diarias.',
    precio: 45,
    icon: 'speed',
    img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Velocidad', 'Inicio', 'Ajustes'],
    incluye: ['Optimizacion de arranque', 'Limpieza de software', 'Ajustes de rendimiento'],
    accent: 'var(--ts-coral-soft)',
  },
  {
    slug: 'soporte-remoto',
    category: 'Soporte',
    t: 'Soporte Remoto',
    d: 'Atencion a distancia para resolver fallas comunes sin mover tu computadora o laptop.',
    detalle:
      'Nos conectamos de forma remota para revisar configuraciones, resolver problemas de software y ayudarte con fallas que pueden solucionarse a distancia.',
    precio: 40,
    icon: 'support_agent',
    img: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Remoto', 'Asistencia', 'Rapido'],
    incluye: ['Diagnostico guiado', 'Asistencia remota', 'Recomendacion final'],
    accent: 'var(--ts-teal-soft)',
  },
  {
    slug: 'recuperacion-datos',
    category: 'Datos',
    t: 'Recuperacion de Datos',
    d: 'Evaluacion y rescate de archivos desde discos, memorias USB y unidades externas.',
    detalle:
      'Revisamos el medio afectado, evaluamos la posibilidad de recuperacion y priorizamos tu informacion importante antes de intervenir.',
    precio: 90,
    icon: 'database',
    img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Datos', 'Archivos', 'Rescate'],
    incluye: ['Evaluacion del medio', 'Intento de rescate', 'Reporte del estado'],
    accent: 'var(--ts-sky-soft)',
  },
  {
    slug: 'respaldo-informacion',
    category: 'Datos',
    t: 'Respaldo de Informacion',
    d: 'Copias de seguridad ordenadas para proteger documentos, fotos y archivos importantes.',
    detalle:
      'Preparamos copias de seguridad, ordenamos carpetas y verificamos que tu informacion quede protegida antes de cualquier cambio importante.',
    precio: 55,
    icon: 'cloud_upload',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Backup', 'Organizacion', 'Prevencion'],
    incluye: ['Copia de seguridad', 'Orden de carpetas', 'Verificacion final'],
    accent: 'var(--ts-sand-soft)',
  },
]

export const processSteps = [
  {
    title: 'Cuentanos el problema',
    body: 'Escribenos por WhatsApp o llamanos para revisar la falla de tu computadora o laptop.',
    icon: 'forum',
  },
  {
    title: 'Diagnostico claro',
    body: 'Evaluamos el equipo y te explicamos la mejor solucion con claridad antes de empezar.',
    icon: 'manage_search',
  },
  {
    title: 'Solucion y seguimiento',
    body: 'Aplicamos el servicio y te dejamos recomendaciones para que el equipo siga funcionando bien.',
    icon: 'verified_user',
  },
]

export const trustHighlights = [
  {
    title: 'Atencion confiable',
    body: 'Tratamos tu equipo con cuidado y explicamos cada paso con lenguaje simple.',
  },
  {
    title: 'Soluciones claras',
    body: 'Te orientamos segun la falla real para evitar gastos innecesarios.',
  },
  {
    title: 'Soporte cercano',
    body: 'Respondemos por WhatsApp, llamadas y soporte remoto con trato directo.',
  },
]

export const testimonials = [
  {
    name: 'Diagnostico claro',
    role: 'Sin sorpresas',
    quote: 'Te explicamos la falla de forma simple antes de iniciar cualquier servicio.',
  },
  {
    name: 'Atencion rapida',
    role: 'Respuesta directa',
    quote: 'Coordinamos por WhatsApp o llamada para ayudarte sin hacerte perder tiempo.',
  },
  {
    name: 'Soporte confiable',
    role: 'Computadoras y laptops',
    quote: 'Buscamos que tu equipo vuelva a funcionar bien con una solucion segura y practica.',
  },
]

export const aboutValues = [
  {
    title: 'Diagnostico honesto',
    body: 'Tomamos decisiones segun la falla real del equipo, sin cambios innecesarios.',
    icon: 'precision_manufacturing',
  },
  {
    title: 'Comunicacion clara',
    body: 'Te orientamos con explicaciones sencillas, tiempos realistas y pasos faciles de seguir.',
    icon: 'record_voice_over',
  },
  {
    title: 'Cuidado del equipo',
    body: 'Tratamos cada dispositivo como una herramienta importante para tu trabajo o estudio.',
    icon: 'health_and_safety',
  },
]

export const contactCards = [
  {
    title: 'WhatsApp o llamadas',
    body: 'Escribenos o llamanos para revisar tu caso y coordinar la atencion.',
    icon: 'phone',
    value: companyProfile.phoneLabel,
  },
  {
    title: 'Correo electronico',
    body: 'Envianos tu consulta o detalles del problema y te responderemos pronto.',
    icon: 'mail',
    value: companyProfile.email,
  },
  {
    title: 'Direccion',
    body: 'Atendemos clientes en Sullana y coordinamos el servicio segun el caso.',
    icon: 'place',
    value: 'Sullana',
  },
  {
    title: 'Atencion remota',
    body: 'Tambien brindamos ayuda a distancia para fallas de software y configuracion.',
    icon: 'support_agent',
    value: 'Disponible por coordinacion',
  },
]

export const paymentMethods = [
  {
    key: 'tarjeta',
    title: 'Tarjeta',
    description: 'Pago con debito o credito para confirmar tu servicio.',
    icon: 'credit_card',
    accent: 'var(--ts-sky-soft)',
  },
  {
    key: 'yape',
    title: 'Yape',
    description: 'Pago rapido con QR o numero directo desde tu celular.',
    icon: 'qr_code_2',
    accent: 'var(--ts-teal-soft)',
  },
  {
    key: 'efectivo',
    title: 'Efectivo',
    description: 'Coordina la atencion y paga en efectivo segun el servicio.',
    icon: 'payments',
    accent: 'var(--ts-peach-soft)',
  },
]

export const footerServices = services.slice(0, 4)
