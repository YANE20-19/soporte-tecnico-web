<template>
  <q-page class="payment-page flex flex-center q-pa-md">
    <div class="payment-card shadow-10 q-pa-lg">
      <h4 class="text-center">💳 Métodos de Pago</h4>

      <div v-if="servicio" class="q-mb-md text-center">
        <h6 class="q-mb-xs">{{ servicio.t }}</h6>
        <p class="text-primary q-mb-none">💰 S/ {{ servicio.precio }}</p>
      </div>

      <q-select
        v-model="metodo"
        :options="metodos"
        label="Elige método de pago"
        outlined
      />

      <q-btn
        color="green"
        label="Continuar"
        class="full-width q-mt-md"
        :disable="!metodo || !servicio"
        @click="continuar"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      servicio: null,
      metodo: null,
      metodos: ['💳 Tarjeta', '📱 Yape', '💵 Efectivo']
    }
  },

  mounted () {
    const q = this.$route.query

    if (q.servicio) {
      this.servicio = {
        t: q.servicio,
        precio: Number(q.precio),
        d: q.desc || ''
      }
    }
  },

  methods: {
    continuar () {
      if (!this.servicio || !this.metodo) return

      const baseQuery = {
        servicio: this.servicio.t,
        precio: this.servicio.precio,
        desc: this.servicio.d || ''
      }

      if (this.metodo.includes('Yape')) {
        this.$router.push({ path: '/yape', query: baseQuery })
      } else if (this.metodo.includes('Tarjeta')) {
        this.$router.push({ path: '/tarjeta', query: baseQuery })
      } else {
        this.$router.push({ path: '/efectivo', query: baseQuery })
      }
    }
  }
}
</script>

<style scoped>
.payment-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.payment-card {
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: 20px;
}
</style>