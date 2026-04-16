<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="qr_code_2" size="18px" />
            Pago móvil
          </span>
          <h1 class="section-title section-title--large">
            Paga con Yape y confirma tu atención en minutos.
          </h1>

          <div v-if="servicio" class="payment-summary-card q-mt-xl">
            <div>
              <div class="mini-title">{{ servicio }}</div>
              <p class="muted-copy q-mb-none">
                Confirma el pago y continúa con la coordinación del servicio.
              </p>
            </div>
            <div class="payment-price">S/ {{ precio }}</div>
          </div>

          <div class="instruction-list q-mt-xl">
            <div class="instruction-item">
              <div class="instruction-index">1</div>
              <div>Escanea el QR o usa el número directo.</div>
            </div>
            <div class="instruction-item">
              <div class="instruction-index">2</div>
              <div>Confirma el pago desde tu celular.</div>
            </div>
            <div class="instruction-item">
              <div class="instruction-index">3</div>
              <div>Registra la operación para continuar con la coordinación.</div>
            </div>
          </div>
        </div>

        <div class="floating-card yape-card">
          <q-img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/Yape_logo.png"
            class="yape-logo"
            fit="contain"
          />

          <img :src="qrUrl" alt="QR Yape" class="qr-image" />

          <div class="tag-pill q-mx-auto">Número: 915 174 884</div>

          <q-btn
            unelevated
            no-caps
            label="Confirmar pago"
            class="ts-btn ts-btn--primary full-width q-mt-lg"
            @click="confirmar"
          />

          <div v-if="estado" class="state-box">
            <q-spinner v-if="estado === 'procesando'" color="primary" size="32px" />
            <div v-else class="state-success">
              <q-icon name="check_circle" color="positive" size="42px" />
              <div>Pago registrado correctamente</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'YapePage',

  data() {
    return {
      servicio: '',
      precio: 0,
      estado: '',
    }
  },

  computed: {
    qrUrl() {
      return 'https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=YAPE-51915174884'
    },
  },

  mounted() {
    const q = this.$route.query
    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    confirmar() {
      this.estado = 'procesando'

      setTimeout(() => {
        this.estado = 'ok'

        this.$q.notify({
          type: 'positive',
          message: 'Pago registrado correctamente.',
          icon: 'check_circle',
          position: 'top',
          timeout: 3000,
        })
      }, 1800)
    },
  },
}
</script>

<style scoped>
.section-title--large {
  font-size: clamp(2rem, 3vw, 3.1rem);
  max-width: 11ch;
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

.instruction-list {
  display: grid;
  gap: 14px;
}

.instruction-item {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.74);
  border: 1px solid rgba(22, 32, 51, 0.06);
}

.instruction-index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: var(--ts-primary);
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
}

.yape-card {
  display: grid;
  gap: 18px;
  justify-items: center;
  text-align: center;
}

.yape-logo {
  width: 180px;
  height: 72px;
}

.qr-image {
  width: min(260px, 100%);
  border-radius: 22px;
  border: 10px solid rgba(255, 255, 255, 0.84);
  box-shadow: var(--ts-shadow-soft);
}

.state-box {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.state-success {
  display: grid;
  justify-items: center;
  gap: 8px;
  color: var(--ts-primary);
  font-weight: 700;
}

@media (max-width: 768px) {
  .section-title--large {
    max-width: none;
  }

  .payment-summary-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
