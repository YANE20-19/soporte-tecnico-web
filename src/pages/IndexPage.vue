<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--dark">
          <span class="eyebrow">
            <q-icon name="verified" size="18px" />
            Soporte técnico para computadoras y laptops
          </span>

          <h1 class="display-title">
            Soluciones rápidas y confiables para tu computadora o laptop.
          </h1>

          <p class="lead-copy">
            Mantenimiento, formateo, eliminación de virus, optimización y soporte remoto con
            atención clara en Sullana.
          </p>

          <div class="chip-row q-mt-xl">
            <span class="info-pill">WhatsApp o llamadas</span>
            <span class="info-pill">Atención remota</span>
            <span class="info-pill">Diagnóstico claro</span>
          </div>

          <div class="action-row q-mt-xl">
            <q-btn
              unelevated
              no-caps
              label="Ver servicios"
              to="/servicios"
              class="ts-btn ts-btn--warm"
            />
            <q-btn
              outline
              no-caps
              label="Solicitar diagnóstico"
              to="/contacto"
              class="ts-btn ts-btn--ghost hero-btn-outline"
            />
          </div>
        </div>

        <div class="stack-column">
          <div class="hero-visual-card">
            <q-img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              class="hero-visual-image"
            />
            <div class="hero-visual-copy">
              <div class="hero-visual-kicker">Atención técnica confiable</div>
              <div class="hero-visual-title">
                Recibe ayuda para lentitud, virus, errores y mantenimiento sin complicaciones.
              </div>
            </div>
          </div>

          <div class="hero-metric-panel">
            <div class="metric-grid">
              <article v-for="item in heroHighlights" :key="item.title" class="metric-card">
                <div class="metric-top">
                  <div class="icon-circle icon-circle--small metric-icon">
                    <q-icon :name="item.icon" size="18px" />
                  </div>
                  <div class="metric-value">{{ item.title }}</div>
                </div>
                <div class="metric-label">{{ item.body }}</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="surface-panel">
        <span class="eyebrow eyebrow--light">
          <q-icon name="apps" size="18px" />
          Servicios destacados
        </span>
        <div class="page-header-copy">
          <h2 class="section-title">
            Servicios pensados para resolver lo que más afecta tu equipo.
          </h2>
          <p class="muted-copy">
            Desde mantenimiento preventivo hasta soporte remoto y recuperación de datos, encuentra
            una atención práctica para computadoras y laptops.
          </p>
        </div>

        <div class="card-grid section-spacing">
          <article
            v-for="service in featuredServices"
            :key="service.slug"
            class="content-card service-card"
          >
            <div class="service-top">
              <div class="icon-circle" :style="{ background: service.accent }">
                <q-icon :name="service.icon" size="24px" />
              </div>
              <div class="service-price">S/ {{ service.precio }}</div>
            </div>

            <div class="mini-title">{{ service.t }}</div>
            <p class="muted-copy service-copy">{{ service.d }}</p>

            <div class="chip-row q-mb-md">
              <span v-for="tag in service.tags.slice(0, 2)" :key="tag" class="tag-pill">
                {{ tag }}
              </span>
            </div>

            <div class="action-row">
              <q-btn
                flat
                no-caps
                label="Ver detalle"
                class="ts-btn ts-btn--soft"
                @click="verDetalle(service)"
              />
              <q-btn
                unelevated
                no-caps
                label="Reservar servicio"
                class="ts-btn ts-btn--primary"
                @click="irPagos(service)"
              />
            </div>
          </article>
        </div>
      </section>

      <section class="triple-grid">
        <article v-for="step in processSteps" :key="step.title" class="support-card">
          <div class="icon-circle" style="background: var(--ts-sand-soft)">
            <q-icon :name="step.icon" size="24px" />
          </div>
          <h3 class="mini-title q-mt-md">{{ step.title }}</h3>
          <p class="muted-copy q-mb-none">{{ step.body }}</p>
        </article>
      </section>

      <section class="hero-grid">
        <div class="surface-panel">
          <span class="eyebrow eyebrow--light">
            <q-icon name="verified" size="18px" />
            Por qué elegirnos
          </span>
          <h2 class="section-title">Atención moderna, clara y enfocada en resolver.</h2>
          <div class="card-grid section-spacing">
            <article v-for="item in trustHighlights" :key="item.title" class="content-card">
              <div class="mini-title">{{ item.title }}</div>
              <p class="muted-copy q-mb-none">{{ item.body }}</p>
            </article>
          </div>
        </div>

        <div class="floating-card testimonial-panel">
          <span class="eyebrow eyebrow--light">
            <q-icon name="star" size="18px" />
            Compromisos del servicio
          </span>
          <div v-for="testimonial in testimonials" :key="testimonial.name" class="testimonial-card">
            <div class="testimonial-stars">5/5</div>
            <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            <div class="testimonial-author">
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-panel">
        <div>
          <div class="eyebrow">Contacto directo</div>
          <h2 class="section-title cta-title">
            Escríbenos y coordinamos la mejor solución para tu equipo.
          </h2>
          <p class="lead-copy cta-copy">
            WhatsApp o llamadas: {{ companyProfile.phoneLabel }}. Correo:
            {{ companyProfile.email }}. Atendemos en {{ companyProfile.location }}.
          </p>
        </div>

        <div class="action-row">
          <q-btn
            unelevated
            no-caps
            label="Ver catálogo completo"
            to="/servicios"
            class="ts-btn ts-btn--warm"
          />
          <q-btn
            unelevated
            no-caps
            label="Hablar por WhatsApp"
            class="ts-btn ts-btn--soft"
            @click="consultarWhatsApp()"
          />
        </div>
      </section>
    </div>

    <ServiceDialog
      v-model="dialog"
      :service="servicioActivo"
      @close="cerrarDetalle"
      @contact="consultarWhatsApp"
      @hide="limpiarDetalle"
      @pay="irPagos"
    />
  </q-page>
</template>

<script>
import ServiceDialog from 'src/components/ServiceDialog.vue'
import {
  companyProfile,
  processSteps,
  services,
  testimonials,
  trustHighlights,
} from 'src/data/site'
import { buildServiceMessage, buildServicePaymentQuery, buildWhatsAppUrl } from 'src/utils/contact'

export default {
  name: 'IndexPage',

  components: {
    ServiceDialog,
  },

  data() {
    return {
      companyProfile,
      detalleScrollTop: 0,
      dialog: false,
      restaurarScrollAlCerrar: false,
      servicioActivo: null,
      processSteps,
      testimonials,
      trustHighlights,
      featuredServices: services.slice(0, 4),
      heroHighlights: [
        {
          title: 'PC y Laptop',
          body: 'Soporte técnico integral',
          icon: 'computer',
        },
        {
          title: 'Remoto',
          body: 'Atención rápida donde estés',
          icon: 'headset_mic',
        },
        {
          title: 'Ágil',
          body: 'Diagnóstico inicial claro',
          icon: 'bolt',
        },
        {
          title: 'Confiable',
          body: 'Proceso seguro y ordenado',
          icon: 'verified_user',
        },
      ],
    }
  },

  methods: {
    verDetalle(service) {
      this.detalleScrollTop = window.scrollY || window.pageYOffset || 0
      this.restaurarScrollAlCerrar = false
      this.servicioActivo = service
      this.dialog = true
    },

    cerrarDetalle() {
      this.restaurarScrollAlCerrar = true
      this.dialog = false
    },

    limpiarDetalle() {
      const detalleScrollTop = this.detalleScrollTop
      const restaurarScrollAlCerrar = this.restaurarScrollAlCerrar

      this.restaurarScrollAlCerrar = false
      this.servicioActivo = null

      if (restaurarScrollAlCerrar) {
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            window.scrollTo(0, detalleScrollTop)
          })
        })
      }
    },

    consultarWhatsApp(service = this.servicioActivo) {
      const message = service
        ? buildServiceMessage(service.t)
        : 'Hola, quiero información sobre sus servicios.'

      window.open(buildWhatsAppUrl(message), '_blank')
    },

    irPagos(service = this.servicioActivo) {
      if (!service) {
        this.$router.push('/servicios')
        return
      }

      this.$router.push({
        path: '/pagos',
        query: buildServicePaymentQuery(service),
      })
    },
  },
}
</script>

<style scoped>
.hero-grid {
  align-items: start;
}

.display-title {
  max-width: 10.5ch;
  margin-bottom: 20px;
  font-size: clamp(2.8rem, 4vw, 4.8rem);
  line-height: 0.94;
  text-wrap: balance;
}

.lead-copy {
  max-width: 48ch;
}

.hero-visual-card {
  position: relative;
  min-height: clamp(320px, 42vw, 460px);
  overflow: hidden;
  border-radius: 34px;
  border: 1px solid var(--ts-border);
  box-shadow: var(--ts-shadow);
}

.hero-visual-image {
  width: 100%;
  height: 100%;
  min-height: clamp(320px, 42vw, 460px);
}

.hero-visual-copy {
  position: absolute;
  inset: auto 20px 20px;
  max-width: min(100%, 420px);
  padding: 18px;
  border-radius: 24px;
  background: rgba(11, 24, 38, 0.72);
  backdrop-filter: blur(14px);
  color: #fff;
}

.hero-visual-kicker {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.78;
}

.hero-visual-title {
  margin-top: 6px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  line-height: 1.2;
}

.hero-metric-panel {
  padding: 20px;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(255, 250, 244, 0.88), rgba(255, 255, 255, 0.88));
  border: 1px solid rgba(22, 32, 51, 0.06);
  box-shadow: var(--ts-shadow-soft);
}

.metric-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.metric-card {
  display: grid;
  gap: 12px;
  min-height: 0;
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(247, 244, 240, 0.84));
}

.metric-top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.metric-icon {
  background: var(--ts-sky-soft);
}

.metric-value {
  font-size: 1.35rem;
  line-height: 1.05;
}

.metric-label {
  max-width: 22ch;
  font-size: 0.97rem;
  line-height: 1.45;
}

.hero-btn-outline {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.24);
}

.service-card {
  display: grid;
  gap: 16px;
  align-content: start;
}

.service-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.service-price {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(15, 93, 115, 0.08);
  color: var(--ts-primary);
  font-weight: 700;
}

.service-copy {
  margin: 0;
}

.testimonial-panel {
  display: grid;
  gap: 14px;
}

.testimonial-card {
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(22, 32, 51, 0.06);
}

.testimonial-stars {
  color: var(--ts-accent);
  letter-spacing: 0.2em;
  font-size: 0.95rem;
}

.testimonial-quote {
  margin: 10px 0 14px;
  color: var(--ts-ink);
}

.testimonial-author {
  display: grid;
  color: var(--ts-muted);
}

.cta-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(24px, 3vw, 34px);
  border-radius: 34px;
  background:
    linear-gradient(135deg, rgba(15, 93, 115, 0.94), rgba(23, 135, 154, 0.88)),
    linear-gradient(135deg, #0f5d73, #2f8da0);
  color: #fff;
  box-shadow: 0 22px 48px rgba(15, 93, 115, 0.22);
}

.cta-title,
.cta-copy {
  color: inherit;
}

@media (max-width: 1024px) {
  .cta-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .display-title {
    max-width: none;
  }

  .hero-metric-panel {
    padding: 14px;
  }

  .metric-grid {
    grid-template-columns: 1fr;
  }

  .hero-visual-copy {
    inset: auto 16px 16px;
    padding: 16px;
  }
}

@media (max-width: 540px) {
  .hero-visual-title {
    font-size: 1.15rem;
  }
}
</style>
