<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--dark card-preview">
          <span class="eyebrow">
            <q-icon name="credit_card" size="18px" />
            Pago con tarjeta
          </span>
          <h1 class="section-title preview-title">Confirma tu servicio con un pago seguro.</h1>

          <div class="mock-card">
            <div class="mock-card-top">
              <span>TechSupport</span>
              <q-icon name="wifi" size="22px" />
            </div>
            <div class="mock-card-number">{{ tarjetaFormateada }}</div>
            <div class="mock-card-bottom">
              <div>
                <small>Titular</small>
                <strong>{{ titular || 'Nombre del titular' }}</strong>
              </div>
              <div>
                <small>CVV</small>
                <strong>{{ cvv || '***' }}</strong>
              </div>
            </div>
          </div>

          <div v-if="servicio" class="summary-strip">
            <span>{{ servicio }}</span>
            <strong>S/ {{ precio }}</strong>
          </div>
        </div>

        <div class="surface-panel">
          <span class="eyebrow eyebrow--light">
            <q-icon name="lock" size="18px" />
            Datos del pago
          </span>

          <q-form class="form-grid q-mt-lg" @submit.prevent="pagar">
            <q-input
              v-model="numeroTarjeta"
              label="Numero de tarjeta"
              outlined
              rounded
              color="primary"
              mask="#### #### #### ####"
            />
            <q-input
              v-model="titular"
              label="Nombre del titular"
              outlined
              rounded
              color="primary"
            />
            <div class="double-grid">
              <q-input
                v-model="vence"
                label="Vence"
                outlined
                rounded
                color="primary"
                mask="##/##"
              />
              <q-input v-model="cvv" label="CVV" outlined rounded color="primary" mask="###" />
            </div>

            <div class="action-row">
              <q-btn
                type="submit"
                unelevated
                no-caps
                label="Confirmar pago"
                class="ts-btn ts-btn--primary"
              />
              <q-btn flat no-caps label="Volver" :to="paymentRoute" class="ts-btn ts-btn--ghost" />
            </div>
          </q-form>

          <transition name="fade">
            <div v-if="ok" class="state-success q-mt-lg">
              <q-icon name="check_circle" color="positive" size="48px" />
              <div>Pago aprobado</div>
            </div>
          </transition>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'TarjetaPage',

  data() {
    return {
      ok: false,
      servicio: '',
      precio: 0,
      numeroTarjeta: '',
      titular: '',
      vence: '',
      cvv: '',
    }
  },

  computed: {
    tarjetaFormateada() {
      return this.numeroTarjeta || '**** **** **** ****'
    },

    paymentRoute() {
      return {
        path: '/pagos',
        query: {
          servicio: this.servicio,
          precio: this.precio,
        },
      }
    },
  },

  mounted() {
    const q = this.$route.query
    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    pagar() {
      if (!this.numeroTarjeta || !this.titular || !this.vence || !this.cvv) {
        this.$q.notify({
          type: 'warning',
          message: 'Completa los datos de la tarjeta.',
          position: 'top',
        })
        return
      }

      setTimeout(() => {
        this.ok = true

        this.$q.notify({
          type: 'positive',
          message: 'Pago registrado correctamente.',
          position: 'top',
          icon: 'check_circle',
          timeout: 3000,
        })
      }, 1600)
    },
  },
}
</script>

<style scoped>
.card-preview {
  display: grid;
  gap: 22px;
}

.preview-title {
  color: #fff;
}

.mock-card {
  padding: clamp(20px, 3vw, 26px);
  border-radius: 28px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.32), transparent 28%),
    linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06));
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.mock-card-top,
.mock-card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.mock-card-number {
  margin: 26px 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.2rem, 3vw, 2rem);
  letter-spacing: 0.06em;
  line-height: 1.2;
  word-break: break-word;
}

.mock-card-bottom small {
  display: block;
  margin-bottom: 6px;
  opacity: 0.7;
}

.summary-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.form-grid {
  display: grid;
  gap: 18px;
}

.double-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.state-success {
  display: grid;
  justify-items: center;
  gap: 8px;
  color: var(--ts-primary);
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.28s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 600px) {
  .double-grid {
    grid-template-columns: 1fr;
  }

  .mock-card-bottom,
  .summary-strip {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
