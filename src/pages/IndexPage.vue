<template>
  <q-page class="home-page">

    <!-- 🔥 HERO -->
    <section class="hero">

      <div class="overlay"></div>

      <div class="hero-content text-center text-white">
        <h1 class="title">
          Soporte Técnico Profesional
          <p class="badge">✔ Rápido • ✔ Seguro • ✔ Garantía</p>
          
        </h1>

        <p class="subtitle">
          Reparación, mantenimiento y optimización de computadoras y laptops
        </p>

        <div class="q-mt-md">
          <q-btn color="primary" label="Ver Servicios" to="/servicios" class="q-mr-sm"/>
          <q-btn outline color="white" label="Contactar" to="/contacto"/>
        </div>
      </div>
    </section>

    <!-- 🚀 SERVICIOS -->
    <section class="q-pa-xl services-section">

      <h4 class="text-center text-weight-bold q-mb-lg text-white">
        Nuestros Servicios
      </h4>

      <div class="row q-col-gutter-lg">

        <div
          class="col-12 col-sm-6 col-md-4"
          v-for="(s, i) in servicios"
          :key="i"
        >
          <q-card class="service-card cursor-pointer" @click="verDetalle(s)">

            <div class="img-box">
              <q-img :src="s.img" class="service-img" />
            </div>

            <q-card-section>
              <div class="text-h6 text-weight-bold text-white">
                {{ s.t }}
              </div>

              <div class="text-grey-4 text-caption q-mt-sm">
                {{ s.d }}
              </div>
            </q-card-section>

          </q-card>
        </div>

      </div>
    </section>

    <!-- ⚙️ COMO TRABAJAMOS -->
    <section class="q-pa-xl work-section text-center">

      <h4 class="text-weight-bold q-mb-xl">
        ¿Cómo trabajamos?
      </h4>

      <div class="row q-col-gutter-lg">

        <div class="col-12 col-md-4">
          <div class="work-box">
            <q-icon name="support_agent" size="40px" color="primary"/>
            <h6>Diagnóstico</h6>
            <p>Analizamos tu equipo y detectamos el problema rápidamente.</p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="work-box">
            <q-icon name="build" size="40px" color="primary"/>
            <h6>Solución</h6>
            <p>Aplicamos la mejor solución con herramientas profesionales.</p>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="work-box">
            <q-icon name="verified" size="40px" color="primary"/>
            <h6>Garantía</h6>
            <p>Te entregamos tu equipo funcionando y con garantía.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- ⭐ BENEFICIOS -->
    <section class="q-pa-xl benefits-section">

      <div class="row q-col-gutter-lg text-center">

        <div class="col-6 col-md-3">
          <h4 class="text-primary">+500</h4>
          <p>Equipos reparados</p>
        </div>

        <div class="col-6 col-md-3">
          <h4 class="text-primary">100%</h4>
          <p>Clientes satisfechos</p>
        </div>

        <div class="col-6 col-md-3">
          <h4 class="text-primary">24/7</h4>
          <p>Soporte disponible</p>
        </div>

        <div class="col-6 col-md-3">
          <h4 class="text-primary">Rápido</h4>
          <p>Atención inmediata</p>
        </div>

      </div>
    </section>

    <!-- 💬 CTA FINAL -->
    <section class="cta-section text-center text-white">

      <h4>¿Tu computadora está lenta o con fallas?</h4>

      <p class="q-mt-sm">
        Contáctanos ahora y solucionamos tu problema rápidamente
      </p>

      <q-btn
        color="green"
        label="Escribir por WhatsApp"
        class="q-mt-md"
        @click="irWhatsApp"
      />

    </section>

    <!-- 🔍 MODAL -->
    <q-dialog v-model="dialog">
      <q-card class="modal-card">

        <q-img :src="servicioActivo?.img" class="modal-img" />

        <q-card-section>
          <div class="text-h6 text-weight-bold">
            {{ servicioActivo?.t }}
          </div>

          <div class="text-grey-7 q-mt-sm">
            {{ servicioActivo?.detalle }}
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cerrar" v-close-popup />
          <q-btn color="green" label="Solicitar" @click="irWhatsApp"/>
        </q-card-actions>

      </q-card>
    </q-dialog>

  </q-page>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      servicioActivo: null,

      servicios: [
        {
          t: 'Mantenimiento de PC',
          d: 'Limpieza y optimización',
          detalle: 'Limpieza interna, cambio de pasta térmica y mejora del rendimiento.',
          img: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg',
        },
        {
          t: 'Eliminación de Virus',
          d: 'Protección total',
          detalle: 'Eliminamos virus y malware completamente.',
          img: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg',
        },
        {
          t: 'Formateo e Instalación',
          d: 'Sistema limpio',
          detalle: 'Instalamos sistema operativo y programas.',
          img: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg',
        }
      ]
    }
  },

  methods: {
    verDetalle(s) {
      this.servicioActivo = s
      this.dialog = true
    },

    irWhatsApp() {
      const servicio = this.servicioActivo?.t || ''
      const numero = '51915174884'

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
        `Hola, quiero información sobre: ${servicio}`
      )}`

      window.open(url, '_blank')
    }
  }
}
</script>

<style>
/* HERO */
/* 🌟 HERO MEJORADO */
.hero {
  position: relative;
  height: 90vh;

  background:
    linear-gradient(135deg, rgba(0, 153, 255, 0.6), rgba(0, 0, 80, 0.8)),
    url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80');

  background-size: cover;
  background-position: center;
}

/* 🔥 overlay más claro */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

/* CONTENIDO */
.hero-content {
  position: relative;
  z-index: 2;
}

/* ✨ TÍTULO PRO */
.title {
  font-size: 3.2rem;
  font-weight: 800;
  color: #ffffff;

  text-shadow:
    0 0 10px rgba(0, 200, 255, 0.7),
    0 0 20px rgba(0, 200, 255, 0.5),
    0 5px 25px rgba(0, 0, 0, 0.8);
}

/* SUBTITULO MÁS CLARO */
.subtitle {
  color: #f1f5f9;
  font-size: 1.2rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.6);
}

/* BADGE */
.badge {
  margin-top: 10px;
  color: #38bdf8;
  font-weight: 600;
}

/* BOTONES MÁS PRO */
.q-btn {
  font-weight: bold;
  border-radius: 10px;
  transition: 0.3s;
}

.q-btn:hover {
  transform: scale(1.05);
}

/* 🌌 SERVICIOS */
.services-section {
  background: linear-gradient(135deg, #020617, #0f172a);
}

/* TARJETAS PRO */
.service-card {
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  overflow: hidden;
  transition: 0.4s;
}

.service-card:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

/* IMAGEN PERFECTA */
.img-box {
  height: 200px;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}

.service-card:hover .service-img {
  transform: scale(1.1);
}

/* ⚙️ COMO TRABAJAMOS */
.work-section {
  background: #f8fafc;
}

.work-box {
  padding: 20px;
  transition: 0.3s;
}

.work-box:hover {
  transform: scale(1.05);
}

/* 📊 BENEFICIOS */
.benefits-section {
  background: linear-gradient(135deg, #e0f2fe, #f1f5f9);
}

.benefits-section h4 {
  font-size: 2rem;
  font-weight: bold;
}

/* 💬 CTA */
.cta-section {
  background: linear-gradient(135deg, #0ea5e9, #1e3a8a);
  padding: 70px;
}

.cta-section h4 {
  font-size: 1.8rem;
  font-weight: bold;
}

/* MODAL */
.modal-card {
  max-width: 500px;
  border-radius: 16px;
}

.modal-img {
  height: 200px;
  object-fit: cover;
}
</style>