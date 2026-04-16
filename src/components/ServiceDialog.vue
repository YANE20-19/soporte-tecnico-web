<template>
  <q-dialog
    persistent
    no-refocus
    :model-value="modelValue"
    transition-show="fade"
    transition-hide="fade"
    transition-duration="180"
    @hide="$emit('hide')"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <q-card v-if="service" class="service-dialog-card">
      <div class="service-dialog-media">
        <q-img :src="service.img" class="service-dialog-image" fit="cover" />
        <div class="service-dialog-overlay"></div>
        <div class="service-dialog-top">
          <div class="dialog-price-chip">S/ {{ service.precio }}</div>
          <div class="dialog-category-chip">{{ service.category }}</div>
        </div>
      </div>

      <q-card-section class="dialog-section">
        <div class="dialog-heading-row">
          <div class="icon-circle icon-circle--small" :style="{ background: service.accent }">
            <q-icon :name="service.icon" size="20px" />
          </div>
          <div>
            <div class="text-overline text-weight-bold text-primary">Servicio recomendado</div>
            <div class="dialog-title">{{ service.t }}</div>
          </div>
        </div>

        <p class="dialog-copy">
          {{ service.detalle }}
        </p>

        <div class="dialog-grid">
          <div class="dialog-surface">
            <div class="mini-title">Incluye</div>
            <ul class="service-list">
              <li v-for="item in service.incluye" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="dialog-surface">
            <div class="mini-title">Etiquetas</div>
            <div class="chip-row">
              <span v-for="tag in service.tags" :key="tag" class="tag-pill">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="dialog-actions">
        <q-btn
          flat
          label="Cerrar"
          class="ts-btn ts-btn--ghost"
          @click="$emit('close')"
        />
        <q-btn
          unelevated
          label="Consultar"
          class="ts-btn ts-btn--soft"
          @click="$emit('contact', service)"
        />
        <q-btn
          unelevated
          label="Ir a pagos"
          class="ts-btn ts-btn--primary"
          @click="$emit('pay', service)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'ServiceDialog',

  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    service: {
      type: Object,
      default: null,
    },
  },

  emits: ['update:modelValue', 'pay', 'contact', 'hide', 'close'],
}
</script>

<style scoped>
.service-dialog-card {
  width: min(720px, calc(100vw - 24px));
  max-height: min(860px, calc(100dvh - 24px));
  display: flex;
  flex-direction: column;
  border-radius: 28px;
  overflow: hidden;
  background: #fffaf4;
}

.service-dialog-media {
  position: relative;
  flex-shrink: 0;
  height: 240px;
}

.service-dialog-image {
  width: 100%;
  height: 100%;
}

.service-dialog-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(9, 16, 28, 0.06), rgba(9, 16, 28, 0.7));
}

.service-dialog-top {
  position: absolute;
  inset: 18px 18px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  z-index: 1;
}

.dialog-price-chip,
.dialog-category-chip {
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
  background: rgba(255, 250, 244, 0.92);
  color: var(--ts-ink);
}

.dialog-section {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  padding: clamp(22px, 3vw, 28px);
}

.dialog-heading-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 18px;
}

.dialog-title {
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.65rem, 2.8vw, 2rem);
  font-weight: 700;
  line-height: 1.12;
}

.dialog-copy {
  margin: 0 0 22px;
  color: var(--ts-muted);
  line-height: 1.7;
}

.dialog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.dialog-surface {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 93, 115, 0.08);
}

.mini-title {
  margin-bottom: 12px;
  font-weight: 800;
  color: var(--ts-ink);
}

.service-list {
  margin: 0;
  padding-left: 18px;
  color: var(--ts-muted);
  line-height: 1.6;
}

.dialog-actions {
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 0 28px 28px;
  gap: 12px;
  background: #fffaf4;
}

.dialog-actions :deep(.q-btn) {
  width: 100%;
}

@media (max-width: 860px) {
  .dialog-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .dialog-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .service-dialog-card {
    width: calc(100vw - 16px);
    max-height: calc(100dvh - 16px);
    border-radius: 24px;
  }

  .service-dialog-media {
    height: 188px;
  }

  .service-dialog-top {
    inset: 14px 14px auto;
    gap: 8px;
  }

  .dialog-price-chip,
  .dialog-category-chip {
    padding: 7px 12px;
    font-size: 0.92rem;
  }

  .dialog-section {
    padding: 20px;
  }

  .dialog-heading-row {
    gap: 12px;
    margin-bottom: 16px;
  }

  .dialog-copy {
    margin-bottom: 18px;
  }

  .dialog-surface {
    padding: 16px;
  }

  .dialog-actions {
    grid-template-columns: 1fr;
    padding: 0 20px 20px;
  }
}

@media (max-width: 420px) {
  .dialog-section {
    padding: 18px;
  }

  .dialog-heading-row {
    flex-direction: column;
  }

  .service-dialog-media {
    height: 172px;
  }

  .dialog-title {
    font-size: 1.5rem;
  }
}
</style>
