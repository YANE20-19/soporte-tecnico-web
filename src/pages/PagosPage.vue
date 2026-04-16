<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="payments" size="18px" />
            Metodo de pago
          </span>
          <h1 class="section-title section-title--large">
            Elige la forma de pago que te resulte mas comoda.
          </h1>
          <p class="muted-copy lead-copy">
            Selecciona tarjeta, Yape o efectivo para continuar con la reserva o coordinacion de tu
            servicio.
          </p>

          <div v-if="servicio" class="payment-summary-card q-mt-xl">
            <div>
              <div class="mini-title">{{ servicio.t }}</div>
              <p class="muted-copy q-mb-none">{{ servicio.d }}</p>
            </div>
            <div class="payment-price">S/ {{ servicio.precio }}</div>
          </div>

          <div v-else class="note-box q-mt-xl">
            Aun no has elegido un servicio. Vuelve al catalogo y selecciona la opcion que necesitas.
          </div>
        </div>

        <div class="floating-card">
          <div class="mini-title">Metodos disponibles</div>
          <div class="method-stack">
            <button
              v-for="method in paymentMethods"
              :key="method.key"
              type="button"
              class="method-picker"
              :class="{ 'method-picker--active': metodo === method.key }"
              @click="metodo = method.key"
            >
              <div class="icon-circle icon-circle--small" :style="{ background: method.accent }">
                <q-icon :name="method.icon" size="20px" />
              </div>
              <div>
                <div class="mini-title q-mb-none">{{ method.title }}</div>
                <div class="muted-copy">{{ method.description }}</div>
              </div>
            </button>
          </div>

          <div class="action-row q-mt-lg">
            <q-btn
              unelevated
              no-caps
              label="Continuar"
              class="ts-btn ts-btn--primary"
              :disable="!metodo || !servicio"
              @click="continuar"
            />
            <q-btn
              flat
              no-caps
              label="Volver a servicios"
              to="/servicios"
              class="ts-btn ts-btn--ghost"
            />
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { paymentMethods } from 'src/data/site'

export default {
  name: 'PagosPage',

  data() {
    return {
      metodo: null,
      servicio: null,
      paymentMethods,
    }
  },

  mounted() {
    const q = this.$route.query

    if (q.servicio) {
      this.servicio = {
        t: q.servicio,
        precio: Number(q.precio),
        d: q.desc || '',
      }
    }
  },

  methods: {
    continuar() {
      if (!this.servicio || !this.metodo) return

      this.$router.push({
        path: `/${this.metodo}`,
        query: {
          servicio: this.servicio.t,
          precio: this.servicio.precio,
          desc: this.servicio.d || '',
        },
      })
    },
  },
}
</script>

<style scoped>
.section-title--large {
  font-size: clamp(2rem, 3vw, 3.2rem);
  max-width: 12ch;
  line-height: 1;
}

.payment-summary-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(22, 32, 51, 0.06);
}

.payment-price {
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(15, 93, 115, 0.1);
  color: var(--ts-primary);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
}

.method-stack {
  display: grid;
  gap: 14px;
  margin-top: 18px;
}

.method-picker {
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  width: 100%;
  padding: 16px;
  border: 1px solid rgba(22, 32, 51, 0.08);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.78);
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.method-picker--active,
.method-picker:hover {
  border-color: rgba(15, 93, 115, 0.22);
  box-shadow: 0 16px 30px rgba(15, 93, 115, 0.12);
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .section-title--large {
    max-width: none;
  }
}

@media (max-width: 768px) {
  .payment-summary-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
