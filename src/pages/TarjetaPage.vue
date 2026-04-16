<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="card-payment shadow-10 q-pa-lg">
      <h4 class="text-center q-mb-md">💳 Pago con Tarjeta</h4>

      <div v-if="servicio" class="q-mb-md text-center">
        <h6 class="q-mb-xs">{{ servicio }}</h6>
        <p class="text-primary q-mb-none">💰 S/ {{ precio }}</p>
      </div>

      <q-input v-model="numeroTarjeta" label="Número de tarjeta" outlined class="q-mb-md" />
      <q-input v-model="titular" label="Nombre del titular" outlined class="q-mb-md" />
      <q-input v-model="cvv" label="CVV" outlined type="password" class="q-mb-md" />

      <q-btn color="blue" label="Pagar" class="full-width" @click="pagar" />

      <transition name="fade">
        <div v-if="ok" class="q-mt-md text-center">
          <q-icon name="check_circle" color="green" size="60px" />
          <div class="text-green text-h6">Pago aprobado</div>
        </div>
      </transition>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      ok: false,
      servicio: '',
      precio: 0,
      numeroTarjeta: '',
      titular: '',
      cvv: ''
    }
  },

  mounted () {
    const q = this.$route.query

    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    pagar () {
      setTimeout(() => {
        this.ok = true

        this.$q.notify({
          type: 'positive',
          message: 'Pago registrado correctamente 💳',
          position: 'top',
          icon: 'check_circle',
          timeout: 3000
        })
      }, 2000)
    }
  }
}
</script>

<style scoped>
.card-payment {
  width: 100%;
  max-width: 420px;
  background: white;
  border-radius: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>