<template>
  <q-page class="about-page">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-white">
        <h1 class="text-h3 text-weight-bold">Soporte Técnico Profesional</h1>
        <p class="q-mt-sm text-subtitle1">
          Reparación, mantenimiento y optimización de equipos
        </p>
      </div>
    </section>

    <section class="q-pa-xl">
      <div class="row items-center q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <q-img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            class="about-img"
          />
        </div>

        <div class="col-12 col-md-6">
          <div class="badge">✔ Servicio Profesional</div>

          <h2 class="section-title q-mt-sm q-mb-md">Sobre Nosotros</h2>

          <p class="desc">
            Nos especializamos en reparación, mantenimiento y optimización de computadoras y laptops.
            Brindamos soluciones rápidas, seguras y confiables.
          </p>

          <div class="stats">
            <div class="stat-card">
              <div class="number">+500</div>
              <div class="label">Equipos</div>
            </div>

            <div class="stat-card">
              <div class="number">+3</div>
              <div class="label">Años</div>
            </div>

            <div class="stat-card">
              <div class="number">100%</div>
              <div class="label">Clientes felices</div>
            </div>
          </div>

          <div class="q-mt-lg">
            <q-btn
              color="green"
              label="Contactar por WhatsApp"
              icon="chat"
              size="lg"
              class="cta-btn"
              @click="irWhatsApp"
            />
          </div>
        </div>
      </div>

      <div class="features">
        <h3 class="text-center text-weight-bold q-mb-xl">¿Por qué elegirnos?</h3>

        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="feature-card">
              ⚡ Atención rápida
              <p>Respuesta inmediata a tus problemas</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="feature-card">
              🔒 Seguridad total
              <p>Protegemos tu información</p>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="feature-card">
              💻 Experiencia técnica
              <p>Profesionales capacitados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {
  methods: {
    irWhatsApp () {
      const mensaje = 'Hola, quiero información sobre sus servicios'
      const numero = '51915174884'
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.about-page {
  background: #f8fafc;
}

.hero {
  height: 40vh;
  position: relative;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent),
    radial-gradient(circle at 80% 70%, rgba(0,255,200,0.15), transparent);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.about-img {
  border-radius: 20px;
  height: 350px;
  object-fit: cover;
  box-shadow: 0 25px 60px rgba(0,0,0,0.25);
}

.badge {
  background: #22c55e;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
}

.section-title {
  font-size: 28px;
  font-weight: bold;
}

.desc {
  color: #475569;
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.stat-card {
  flex: 1;
  background: white;
  padding: 15px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.number {
  font-size: 22px;
  font-weight: bold;
  color: #2563eb;
}

.features {
  margin-top: 60px;
}

.feature-card {
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.feature-card:hover {
  transform: translateY(-10px);
  background: #e0f2fe;
}

.cta-btn {
  border-radius: 12px;
  padding: 12px 30px;
  font-weight: bold;
}
</style>