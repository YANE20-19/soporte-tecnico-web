<template>
  <q-page class="contact-page flex flex-center q-pa-md">
    <div class="form-box q-pa-lg shadow-10">
      <h4 class="text-center q-mb-md">Contacto Técnico</h4>

      <q-input v-model="nombre" label="Nombre" outlined class="q-mb-md" />
      <q-input v-model="telefono" label="Teléfono" outlined class="q-mb-md" />
      <q-input
        v-model="mensaje"
        label="Describe tu problema"
        type="textarea"
        outlined
        class="q-mb-md"
      />

      <q-btn
        color="green"
        class="full-width"
        label="Enviar a WhatsApp"
        @click="enviarWhatsApp"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      nombre: '',
      telefono: '',
      mensaje: ''
    }
  },

  methods: {
    enviarWhatsApp () {
      const numero = '51915174884'
      const texto =
`🖥️ NUEVO SOPORTE TÉCNICO
👤 Nombre: ${this.nombre}
📞 Teléfono: ${this.telefono}
💬 Problema: ${this.mensaje}`

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.form-box {
  width: 90%;
  max-width: 450px;
  background: white;
  border-radius: 18px;
}
</style>