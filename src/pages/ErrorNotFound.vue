<template>
  <q-page class="flex flex-center column text-center">
    <h1 class="text-h1 text-primary">404</h1>
    <p class="text-grey-7">Página no encontrada</p>

    <q-btn
      color="primary"
      label="Volver al inicio"
      to="/"
      class="q-mt-md"
    />
  </q-page>
</template>

<script>
export default {
  name: 'ErrorNotFound'
}
</script>