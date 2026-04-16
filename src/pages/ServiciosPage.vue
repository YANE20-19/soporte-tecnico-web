<template>
  <q-page class="catalog-page q-pa-xl">
    <div class="hero-catalog text-white q-mb-xl">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center">
        <div class="text-overline text-cyan-3">Catálogo de servicios</div>
        <h3 class="text-h3 text-weight-bold q-mt-sm">
          Soluciones profesionales para tu equipo
        </h3>
        <p class="text-subtitle1 q-mt-sm text-grey-3">
          Revisión, mantenimiento, limpieza, soporte remoto y recuperación de datos.
        </p>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12">
        <q-chip outline color="primary" icon="build">Mantenimiento</q-chip>
        <q-chip outline color="primary" icon="security" class="q-ml-sm">Virus</q-chip>
        <q-chip outline color="primary" icon="computer" class="q-ml-sm">Soporte</q-chip>
        <q-chip outline color="primary" icon="cloud_upload" class="q-ml-sm">Backup</q-chip>
      </div>
    </div>

    <div class="row q-col-gutter-xl">
      <div
        class="col-12 col-sm-6 col-md-4"
        v-for="(s, i) in servicios"
        :key="i"
      >
        <q-card class="catalog-card cursor-pointer" @click="verDetalle(s)">
          <div class="img-box">
            <q-img
              :src="s.img"
              class="catalog-img"
              fit="cover"
              loading="lazy"
              :position="s.pos || 'center'"
            />
            <div class="img-gradient"></div>
            <div class="price-badge">S/ {{ s.precio }}</div>
          </div>

          <q-card-section>
            <div class="row items-center no-wrap">
              <q-icon :name="s.icon" size="22px" color="primary" class="q-mr-sm" />
              <div class="text-h6 text-weight-bold ellipsis">
                {{ s.t }}
              </div>
            </div>

            <div class="text-grey-7 text-caption q-mt-sm">
              {{ s.d }}
            </div>

            <div class="q-mt-md">
              <q-chip
                dense
                square
                color="grey-2"
                text-color="grey-8"
                v-for="tag in s.tags"
                :key="tag"
                class="q-mr-xs q-mb-xs"
              >
                {{ tag }}
              </q-chip>
            </div>
          </q-card-section>

          <q-card-actions align="right" class="q-pa-md">
            <q-btn flat color="primary" icon="visibility" label="Ver detalle" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="dialog">
      <q-card class="service-dialog">
        <q-img :src="servicioActivo?.img" class="dialog-img" />

        <q-card-section>
          <div class="row items-center no-wrap q-mb-sm">
            <q-icon :name="servicioActivo?.icon" size="24px" color="primary" class="q-mr-sm" />
            <div class="text-h5 text-weight-bold">
              {{ servicioActivo?.t }}
            </div>
          </div>

          <div class="text-primary text-h6 q-mb-sm">
            Precio: S/ {{ servicioActivo?.precio }}
          </div>

          <div class="text-grey-8 q-mb-md">
            {{ servicioActivo?.detalle }}
          </div>

          <div class="text-weight-medium q-mb-xs">Incluye:</div>
          <ul class="q-pl-lg q-mb-none">
            <li v-for="item in (servicioActivo?.incluye || [])" :key="item">
              {{ item }}
            </li>
          </ul>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-btn flat label="Cerrar" color="grey" v-close-popup />
          <q-btn
            color="primary"
            icon="chat"
            label="Solicitar servicio"
            @click="solicitarServicio"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      servicioActivo: null,
      numeroWhatsApp: '51915174884',
      servicios: [
        {
          t: 'Mantenimiento de PC',
          d: 'Limpieza y optimización completa',
          detalle: 'Limpieza interna, cambio de pasta térmica, revisión de ventilación y mejora general del rendimiento.',
          precio: 50,
          icon: 'build',
          img: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg',
          pos: 'center',
          tags: ['Hardware', 'Limpieza', 'Optimización'],
          incluye: ['Limpieza interna', 'Cambio de pasta térmica', 'Prueba de rendimiento']
        },
        {
          t: 'Limpieza de Hardware',
          d: 'Eliminación de polvo y mantenimiento físico',
          detalle: 'Retiramos polvo acumulado en ventiladores, placa, fuente y componentes para evitar sobrecalentamiento.',
          precio: 35,
          icon: 'cleaning_services',
          img: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
          pos: 'center',
          tags: ['Limpieza', 'Temperatura', 'Hardware'],
          incluye: ['Soplado profesional', 'Limpieza de ventiladores', 'Revisión visual']
        },
        {
          t: 'Eliminación de Virus',
          d: 'Protección total contra amenazas',
          detalle: 'Eliminamos virus, malware, adware y software no deseado para devolver estabilidad a tu equipo.',
          precio: 60,
          icon: 'security',
          img: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
          pos: 'center',
          tags: ['Seguridad', 'Antivirus', 'Limpieza'],
          incluye: ['Escaneo completo', 'Eliminación de amenazas', 'Recomendación de protección']
        },
        {
          t: 'Formateo e Instalación',
          d: 'Sistema limpio y optimizado',
          detalle: 'Instalamos sistema operativo, drivers y programas esenciales para dejar tu equipo listo para trabajar.',
          precio: 70,
          icon: 'computer',
          img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
          pos: 'center',
          tags: ['Windows', 'Drivers', 'Software'],
          incluye: ['Instalación del sistema', 'Drivers', 'Programas básicos']
        },
        {
          t: 'Optimización de Equipos',
          d: 'Mayor velocidad y rendimiento',
          detalle: 'Ajustamos el sistema para reducir procesos innecesarios y mejorar el inicio, la velocidad y la fluidez.',
          precio: 45,
          icon: 'speed',
          img: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
          pos: 'center',
          tags: ['Rendimiento', 'Velocidad', 'Ajustes'],
          incluye: ['Limpieza de software', 'Optimización de inicio', 'Ajustes de sistema']
        },
        {
          t: 'Soporte Remoto',
          d: 'Ayuda inmediata a distancia',
          detalle: 'Te ayudamos por conexión remota para resolver problemas sin que salgas de casa o de tu oficina.',
          precio: 40,
          icon: 'support_agent',
          img: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
          pos: 'center',
          tags: ['Remoto', 'Soporte', 'Online'],
          incluye: ['Asistencia remota', 'Diagnóstico en vivo', 'Solución guiada']
        },
        {
          t: 'Recuperación de Datos',
          d: 'Recuperamos tu información',
          detalle: 'Recuperamos archivos borrados o dañados desde discos, USB y otros dispositivos de almacenamiento.',
          precio: 90,
          icon: 'storage',
          img: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
          pos: 'center',
          tags: ['Datos', 'Rescate', 'Archivos'],
          incluye: ['Evaluación del medio', 'Recuperación posible', 'Reporte del estado']
        },
        {
          t: 'Respaldo de Información',
          d: 'Backup seguro de tus archivos',
          detalle: 'Creamos copias de seguridad para proteger tu información importante y evitar pérdidas futuras.',
          precio: 55,
          icon: 'cloud_upload',
          img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
          pos: 'center',
          tags: ['Backup', 'Seguridad', 'Nube'],
          incluye: ['Copia de archivos', 'Organización de carpetas', 'Verificación']
        }
      ]
    }
  },

  methods: {
    verDetalle (servicio) {
      this.servicioActivo = servicio
      this.dialog = true
    },

    solicitarServicio () {
      const servicio = this.servicioActivo?.t || ''
      const mensaje = `Hola, estoy interesado en el servicio de: *${servicio}*`
      const url = `https://wa.me/${this.numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.catalog-page {
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  min-height: 100vh;
}

.hero-catalog {
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  min-height: 220px;
  background:
    radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.18), transparent 35%),
    radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.18), transparent 35%),
    linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.15), rgba(15, 23, 42, 0.55));
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 760px;
  padding: 24px;
}

.catalog-card {
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.35s ease;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

.catalog-card:hover {
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
}

.img-box {
  position: relative;
  height: 210px;
  overflow: hidden;
}

.catalog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.55s ease;
}

.catalog-card:hover .catalog-img {
  transform: scale(1.08);
}

.img-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.35));
  pointer-events: none;
}

.price-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 3;
  background: rgba(15, 23, 42, 0.85);
  color: #fff;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.85rem;
  backdrop-filter: blur(8px);
}

.service-dialog {
  max-width: 560px;
  width: 100%;
  border-radius: 18px;
  overflow: hidden;
}

.dialog-img {
  height: 220px;
  object-fit: cover;
}
</style>