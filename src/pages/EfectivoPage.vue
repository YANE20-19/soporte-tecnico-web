<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="payments" size="18px" />
            Reserva con pago en efectivo
          </span>
          <h1 class="section-title section-title--large">
            Reserva tu servicio y paga en efectivo al coordinar la atención.
          </h1>

          <div v-if="servicio" class="payment-summary-card q-mt-xl">
            <div>
              <div class="mini-title">{{ servicio }}</div>
              <p class="muted-copy q-mb-none">
                Pago presencial o según la coordinación del servicio.
              </p>
            </div>
            <div class="payment-price">S/ {{ precio }}</div>
          </div>

          <div class="instruction-list q-mt-xl">
            <div class="instruction-item">
              <div class="instruction-index">1</div>
              <div>Confirma tu solicitud desde esta vista.</div>
            </div>
            <div class="instruction-item">
              <div class="instruction-index">2</div>
              <div>Coordinamos hora, modalidad y condiciones del servicio.</div>
            </div>
            <div class="instruction-item">
              <div class="instruction-index">3</div>
              <div>El pago se realiza en el momento acordado.</div>
            </div>
          </div>
        </div>

        <div class="floating-card cash-card">
          <div class="cash-icon">
            <q-icon name="account_balance_wallet" size="38px" />
          </div>
          <div class="mini-title">Solicitud en efectivo</div>
          <p class="muted-copy cash-copy">
            Ideal para visitas coordinadas o clientes que prefieren pagar al recibir la atención.
          </p>

          <q-btn
            unelevated
            no-caps
            label="Confirmar reserva"
            class="ts-btn ts-btn--primary full-width"
            @click="confirmar"
          />

          <transition name="fade">
            <div v-if="ok" class="state-success">
              <q-icon name="check_circle" color="positive" size="48px" />
              <div>Solicitud registrada</div>
            </div>
          </transition>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EfectivoPage',

  data() {
    return {
      ok: false,
      servicio: '',
      precio: 0,
    }
  },

  mounted() {
    const q = this.$route.query
    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    confirmar() {
      this.ok = true

      this.$q.notify({
        type: 'positive',
        message: 'Solicitud registrada correctamente.',
        position: 'top',
        icon: 'check_circle',
        timeout: 3000,
      })
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

.cash-card {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 16px;
}

.cash-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 84px;
  height: 84px;
  border-radius: 28px;
  background: var(--ts-sand-soft);
  color: var(--ts-primary);
}

.cash-copy {
  max-width: 320px;
  margin: 0;
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
