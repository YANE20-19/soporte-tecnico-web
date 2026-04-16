<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="handshake" size="18px" />
            Sobre el servicio
          </span>
          <h1 class="section-title section-title--large">
            Soporte tecnico con atencion clara, cercana y confiable.
          </h1>
          <p class="muted-copy lead-copy">
            Trabajamos para que tu computadora o laptop vuelva a funcionar bien sin explicaciones
            confusas ni procesos complicados.
          </p>

          <div class="about-metric-grid section-spacing">
            <article
              v-for="item in homeMetrics.slice(0, 4)"
              :key="item.label"
              class="about-metric-card"
            >
              <div class="about-metric-value">{{ item.value }}</div>
              <div class="about-metric-label">{{ item.label }}</div>
            </article>
          </div>
        </div>

        <div class="story-card">
          <q-img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
            class="story-image"
            fit="cover"
          />
          <div class="story-overlay">
            <div class="story-copy">
              <div class="story-tag">Atencion con enfoque humano</div>
              <div class="story-title">
                Priorizamos tu tiempo, tu informacion y el buen estado de tu equipo.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="triple-grid">
        <article v-for="item in aboutValues" :key="item.title" class="content-card">
          <div class="icon-circle" style="background: var(--ts-peach-soft)">
            <q-icon :name="item.icon" size="24px" />
          </div>
          <h2 class="mini-title q-mt-md">{{ item.title }}</h2>
          <p class="muted-copy q-mb-none">{{ item.body }}</p>
        </article>
      </section>

      <section class="hero-grid">
        <div class="surface-panel">
          <span class="eyebrow eyebrow--light">
            <q-icon name="route" size="18px" />
            Como trabajamos
          </span>
          <h2 class="section-title">Un proceso simple para ayudarte mas rapido.</h2>

          <div class="timeline-list">
            <div v-for="(step, index) in processSteps" :key="step.title" class="timeline-item">
              <div class="timeline-badge">{{ index + 1 }}</div>
              <div>
                <div class="mini-title">{{ step.title }}</div>
                <p class="muted-copy q-mb-none">{{ step.body }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="stack-column">
          <div class="floating-card promise-card">
            <div class="mini-title">Promesa de atencion</div>
            <p class="muted-copy">
              Revisamos el problema, explicamos la solucion y coordinamos la atencion mas
              conveniente para que tu equipo vuelva a funcionar bien.
            </p>
            <div class="chip-row">
              <span class="tag-pill">Claridad</span>
              <span class="tag-pill">Confianza</span>
              <span class="tag-pill">Seguimiento</span>
            </div>
          </div>

          <div class="floating-card">
            <div class="mini-title">Lo que puedes esperar</div>
            <ul class="service-list muted-copy">
              <li>Diagnostico claro y trato directo.</li>
              <li>Recomendaciones utiles para tu equipo.</li>
              <li>Atencion por WhatsApp o llamada.</li>
              <li>Soporte remoto y coordinado en Sullana.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="cta-card">
        <div>
          <span class="eyebrow">Listos para ayudarte</span>
          <h2 class="section-title cta-heading">
            Si tu computadora o laptop falla, coordinemos la atencion hoy mismo.
          </h2>
        </div>

        <div class="action-row">
          <q-btn
            unelevated
            no-caps
            label="Ver servicios"
            to="/servicios"
            class="ts-btn ts-btn--warm"
          />
          <q-btn
            unelevated
            no-caps
            label="Ir a contacto"
            to="/contacto"
            class="ts-btn ts-btn--soft"
          />
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { aboutValues, homeMetrics, processSteps } from 'src/data/site'

export default {
  name: 'NosotrosPage',

  data() {
    return {
      aboutValues,
      homeMetrics,
      processSteps,
    }
  },
}
</script>

<style scoped>
.hero-grid {
  align-items: start;
}

.section-title--large {
  max-width: 11ch;
  font-size: clamp(2rem, 3vw, 3.3rem);
  line-height: 1;
}

.lead-copy {
  max-width: 44ch;
}

.about-metric-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.about-metric-card {
  display: grid;
  align-content: start;
  min-height: 0;
  padding: 20px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(244, 249, 253, 0.82));
  border: 1px solid rgba(22, 32, 51, 0.06);
  box-shadow: var(--ts-shadow-soft);
}

.about-metric-value {
  margin-bottom: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  line-height: 1.05;
}

.about-metric-label {
  max-width: 18ch;
  color: var(--ts-muted);
  font-size: 0.98rem;
  line-height: 1.5;
}

.story-card {
  position: relative;
  overflow: hidden;
  min-height: clamp(340px, 44vw, 460px);
  border-radius: 34px;
  border: 1px solid var(--ts-border);
  box-shadow: var(--ts-shadow);
}

.story-image {
  width: 100%;
  height: 100%;
  min-height: clamp(340px, 44vw, 460px);
}

.story-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, rgba(10, 18, 31, 0.08), rgba(10, 18, 31, 0.7));
}

.story-copy {
  padding: 22px;
  color: #fff;
}

.story-tag {
  margin-bottom: 8px;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.78;
}

.story-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.3rem, 2vw, 1.7rem);
  line-height: 1.18;
}

.timeline-list {
  display: grid;
  gap: 18px;
  margin-top: 22px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(22, 32, 51, 0.06);
}

.timeline-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: var(--ts-primary);
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
}

.promise-card {
  background: linear-gradient(135deg, rgba(255, 243, 236, 0.95), rgba(255, 250, 245, 0.95));
}

.cta-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(24px, 3vw, 32px);
  border-radius: 32px;
  background: rgba(255, 250, 244, 0.84);
  border: 1px solid var(--ts-border);
  box-shadow: var(--ts-shadow-soft);
}

.cta-heading {
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .cta-card {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .section-title--large {
    max-width: none;
  }

  .about-metric-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 14px;
  }
}

@media (max-width: 540px) {
  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-badge {
    width: 46px;
    height: 46px;
  }
}
</style>
