<template>
  <q-page class="yape-page flex flex-center q-pa-md">
    <div class="yape-card q-pa-lg shadow-10 text-center">
      <h4 class="q-mb-md">💳 Pago con Yape</h4>

      <div v-if="servicio" class="q-mb-md">
        <h6 class="q-mb-xs">{{ servicio }}</h6>
        <p class="text-primary q-mb-none">💰 S/ {{ precio }}</p>
      </div>

      <q-img
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/Yape_logo.png"
        style="width: 160px"
        class="q-mx-auto q-my-md"
      />

      <img
        :src="qrUrl"
        style="width: 200px; max-width: 100%;"
        alt="QR Yape"
      />

      <p class="q-mt-md">
        Escanea el QR y realiza el pago
      </p>

      <q-btn
        color="green"
        label="Ya realicé el pago"
        class="full-width q-mt-md"
        @click="confirmar"
      />

      <div v-if="estado" class="q-mt-md">
        <q-spinner v-if="estado === 'procesando'" />
        <div v-if="estado === 'ok'" class="text-green text-h6">
          ✅ Pago confirmado
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      servicio: '',
      precio: 0,
      estado: ''
    }
  },

  computed: {
    qrUrl () {
      return 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=YAPE-51915174884'
    }
  },

  mounted () {
    const q = this.$route.query
    this.servicio = q.servicio || ''
    this.precio = Number(q.precio || 0)
  },

  methods: {
    confirmar () {
      this.estado = 'procesando'

      setTimeout(() => {
        this.estado = 'ok'

        this.$q.notify({
          type: 'positive',
          message: 'Pago registrado correctamente 💳',
          icon: 'check_circle',
          position: 'top',
          timeout: 3000
        })
      }, 2000)
    }
  }
}
</script>

<style scoped>
.yape-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #00c853, #1b5e20);
}

.yape-card {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
}
</style>