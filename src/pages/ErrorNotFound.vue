<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-card hero-card--light not-found-card">
        <span class="eyebrow eyebrow--light">
          <q-icon name="error_outline" size="18px" />
          Página no encontrada
        </span>
        <div class="not-found-code">404</div>
        <h1 class="section-title">La ruta que buscas no existe o ya cambió.</h1>
        <p class="muted-copy lead-copy">
          Puedes volver al inicio o ir directo al catálogo para seguir navegando sin perderte.
        </p>

        <div class="action-row">
          <q-btn
            unelevated
            no-caps
            label="Volver al inicio"
            to="/"
            class="ts-btn ts-btn--primary"
          />
          <q-btn flat no-caps label="Ver servicios" to="/servicios" class="ts-btn ts-btn--ghost" />
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ErrorNotFound',
}
</script>

<style scoped>
.not-found-card {
  display: grid;
  justify-items: start;
  gap: 14px;
}

.not-found-code {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(4rem, 10vw, 7rem);
  line-height: 1;
  color: var(--ts-primary);
}
</style>
