<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="inventory_2" size="18px" />
            Servicios de soporte técnico
          </span>
          <h1 class="section-title section-title--large">
            Soluciones para que tu computadora o laptop vuelva a rendir bien.
          </h1>
          <p class="muted-copy lead-copy">
            Encuentra servicios para lentitud, virus, formateo, mantenimiento, respaldo de archivos
            y soporte remoto. Elige la opcion que mejor se adapte a tu problema.
          </p>

          <div class="chip-row q-mt-xl">
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="filter-chip"
              :class="{ 'filter-chip--active': categoriaActiva === category }"
              @click="categoriaActiva = category"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <div class="floating-card catalog-side-panel">
          <div class="mini-title">Resumen de servicios</div>
          <div class="catalog-summary">
            <div class="catalog-summary-item">
              <strong>{{ filteredServices.length }}</strong>
              <span>servicios visibles</span>
            </div>
            <div class="catalog-summary-item">
              <strong>{{ categories.length - 1 }}</strong>
              <span>categorias</span>
            </div>
            <div class="catalog-summary-item">
              <strong>S/ {{ cheapestPrice }}</strong>
              <span>precio inicial</span>
            </div>
          </div>

          <div class="note-box q-mt-lg">
            Si no sabes qué servicio necesitas, también puedes pedir orientación por WhatsApp antes
            de reservar.
          </div>
        </div>
      </section>

      <section class="card-grid">
        <article
          v-for="service in filteredServices"
          :key="service.slug"
          class="content-card catalog-card"
        >
          <div class="catalog-media">
            <q-img :src="service.img" fit="cover" class="catalog-image" />
            <div class="catalog-media-overlay"></div>
            <div class="catalog-media-top">
              <span class="catalog-category">{{ service.category }}</span>
              <span class="catalog-price">S/ {{ service.precio }}</span>
            </div>
          </div>

          <div class="catalog-content">
            <div class="catalog-header">
              <div class="icon-circle icon-circle--small" :style="{ background: service.accent }">
                <q-icon :name="service.icon" size="20px" />
              </div>
              <div class="mini-title q-mb-none">{{ service.t }}</div>
            </div>

            <p class="muted-copy">{{ service.d }}</p>

            <div class="chip-row q-mb-md">
              <span v-for="tag in service.tags" :key="tag" class="tag-pill">
                {{ tag }}
              </span>
            </div>

            <div class="catalog-list">
              <div
                v-for="item in service.incluye.slice(0, 2)"
                :key="item"
                class="catalog-list-item"
              >
                <q-icon name="check_circle" color="positive" size="18px" />
                <span>{{ item }}</span>
              </div>
            </div>

            <div class="action-row q-mt-md">
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
          </div>
        </article>
      </section>

      <section class="surface-panel final-banner">
        <div>
          <span class="eyebrow eyebrow--light">
            <q-icon name="bolt" size="18px" />
            Ayuda inmediata
          </span>
          <h2 class="section-title">
            Si aún no sabes qué servicio elegir, te orientamos por WhatsApp.
          </h2>
        </div>

        <div class="action-row">
          <q-btn
            unelevated
            no-caps
            label="Consultar por WhatsApp"
            class="ts-btn ts-btn--warm"
            @click="consultarWhatsApp()"
          />
          <q-btn flat no-caps label="Ir a contacto" to="/contacto" class="ts-btn ts-btn--ghost" />
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
import { services } from 'src/data/site'
import { buildServiceMessage, buildServicePaymentQuery, buildWhatsAppUrl } from 'src/utils/contact'

export default {
  name: 'ServiciosPage',

  components: {
    ServiceDialog,
  },

  data() {
    return {
      detalleScrollTop: 0,
      dialog: false,
      restaurarScrollAlCerrar: false,
      servicioActivo: null,
      categoriaActiva: 'Todos',
      services,
    }
  },

  computed: {
    categories() {
      return ['Todos', ...new Set(this.services.map((service) => service.category))]
    },

    filteredServices() {
      if (this.categoriaActiva === 'Todos') {
        return this.services
      }

      return this.services.filter((service) => service.category === this.categoriaActiva)
    },

    cheapestPrice() {
      return Math.min(...this.services.map((service) => service.precio))
    },
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
      if (!service) return

      this.$router.push({
        path: '/pagos',
        query: buildServicePaymentQuery(service),
      })
    },
  },
}
</script>

<style scoped>
.section-title--large {
  font-size: clamp(2rem, 3vw, 3.4rem);
  max-width: 12ch;
  line-height: 1;
}

.filter-chip {
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(22, 32, 51, 0.08);
  background: rgba(255, 255, 255, 0.68);
  color: var(--ts-muted);
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

.filter-chip--active,
.filter-chip:hover {
  color: #fff;
  background: var(--ts-primary);
  border-color: var(--ts-primary);
}

.catalog-side-panel {
  display: grid;
  align-content: start;
  gap: 18px;
}

.catalog-summary {
  display: grid;
  gap: 14px;
}

.catalog-summary-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(22, 32, 51, 0.06);
}

.catalog-summary-item strong {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
}

.catalog-card {
  padding: 0;
}

.catalog-media {
  position: relative;
  min-height: 220px;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 24px 24px 0 0;
}

.catalog-image {
  width: 100%;
  height: 100%;
}

.catalog-media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 18, 31, 0.04), rgba(10, 18, 31, 0.55));
}

.catalog-media-top {
  position: absolute;
  inset: 16px 16px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.catalog-category,
.catalog-price {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 250, 244, 0.88);
  font-weight: 700;
}

.catalog-content {
  display: grid;
  gap: 14px;
  padding: clamp(20px, 2vw, 24px);
}

.catalog-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.catalog-list {
  display: grid;
  gap: 10px;
}

.catalog-list-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: var(--ts-muted);
}

.final-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
}

@media (max-width: 1024px) {
  .final-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .section-title--large {
    max-width: none;
  }
}
</style>
