<template>
  <q-page class="q-pa-md flex flex-center">
    <div class="cash shadow-10 q-pa-lg text-center">
      <h4 class="q-mb-md">💵 Pago en Efectivo</h4>

      <div v-if="servicio" class="q-mb-md">
        <h6 class="q-mb-xs">{{ servicio }}</h6>
        <p class="text-primary q-mb-none">💰 S/ {{ precio }}</p>
      </div>

      <p>
        Acércate a nuestra tienda para completar el pago
      </p>

      <q-btn color="green" label="Confirmar solicitud" @click="confirmar" />

      <transition name="fade">
        <div v-if="ok" class="q-mt-md text-center">
          <q-icon name="check_circle" color="green" size="50px" />
          <div class="text-green q-mt-sm">Solicitud registrada</div>
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
      precio: 0
    }
  },

  mounted () {
    const q = this.$route.query
    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    confirmar () {
      this.ok = true

      this.$q.notify({
        type: 'positive',
        message: 'Pago en efectivo registrado correctamente 💵',
        position: 'top',
        icon: 'check_circle',
        timeout: 3000
      })
    }
  }
}
</script>

<style scoped>
.cash {
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