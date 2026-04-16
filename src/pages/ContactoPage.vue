<template>
  <q-page class="page-shell">
    <div class="page-width page-grid">
      <section class="hero-grid">
        <div class="hero-card hero-card--light">
          <span class="eyebrow eyebrow--light">
            <q-icon name="mail" size="18px" />
            Contacto y coordinacion
          </span>
          <h1 class="section-title section-title--large">
            Contactanos y cuentanos que problema tiene tu computadora o laptop.
          </h1>
          <p class="muted-copy lead-copy">
            Atendemos soporte tecnico en Sullana y de manera remota. Puedes escribir por WhatsApp,
            llamar al 915 174 884 o enviar un correo a {{ companyProfile.email }}.
          </p>
        </div>

        <div class="stack-column">
          <article v-for="card in contactCards" :key="card.title" class="contact-card">
            <div class="contact-card-top">
              <div class="icon-circle icon-circle--small" style="background: var(--ts-sky-soft)">
                <q-icon :name="card.icon" size="20px" />
              </div>
              <div class="mini-title q-mb-none">{{ card.title }}</div>
            </div>
            <div class="contact-value">{{ card.value }}</div>
            <p class="muted-copy q-mb-none">{{ card.body }}</p>
          </article>
        </div>
      </section>

      <section class="hero-grid">
        <div class="surface-panel form-panel">
          <span class="eyebrow eyebrow--light">
            <q-icon name="description" size="18px" />
            Cuentanos tu caso
          </span>

          <q-form class="form-grid q-mt-lg" @submit.prevent="enviarWhatsApp">
            <q-input
              v-model="nombre"
              label="Nombre"
              outlined
              rounded
              color="primary"
              :rules="[(val) => !!val || 'Ingresa tu nombre']"
            />

            <q-input
              v-model="telefono"
              label="Celular"
              outlined
              rounded
              color="primary"
              mask="### ### ###"
              :rules="[(val) => !!val || 'Ingresa tu celular']"
            />

            <q-input
              v-model="equipo"
              label="Computadora o laptop"
              outlined
              rounded
              color="primary"
              hint="Ejemplo: laptop Lenovo, PC de oficina, laptop HP"
            />

            <q-input
              v-model="mensaje"
              label="Describe la falla"
              type="textarea"
              outlined
              rounded
              color="primary"
              autogrow
              :rules="[(val) => !!val || 'Describe el problema']"
            />

            <div class="action-row">
              <q-btn
                type="submit"
                unelevated
                no-caps
                label="Enviar por WhatsApp"
                class="ts-btn ts-btn--primary"
              />
              <q-btn
                flat
                no-caps
                label="Ver servicios"
                to="/servicios"
                class="ts-btn ts-btn--ghost"
              />
            </div>
          </q-form>
        </div>

        <div class="stack-column">
          <div class="floating-card">
            <div class="mini-title">Por que escribirnos</div>
            <ul class="service-list muted-copy">
              <li>Respuesta directa por WhatsApp o llamada.</li>
              <li>Orientacion clara segun la falla del equipo.</li>
              <li>Atencion remota o coordinada en Sullana.</li>
            </ul>
          </div>

          <div class="floating-card">
            <div class="mini-title">Datos de atencion</div>
            <p class="muted-copy q-mb-none">
              WhatsApp o llamadas: {{ companyProfile.phoneLabel }}. Correo:
              {{ companyProfile.email }}. Ubicacion: {{ companyProfile.location }}.
            </p>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { companyProfile, contactCards } from 'src/data/site'
import { buildWhatsAppUrl } from 'src/utils/contact'

export default {
  name: 'ContactoPage',

  data() {
    return {
      companyProfile,
      contactCards,
      nombre: '',
      telefono: '',
      equipo: '',
      mensaje: '',
    }
  },

  methods: {
    enviarWhatsApp() {
      if (!this.nombre || !this.telefono || !this.mensaje) {
        this.$q.notify({
          type: 'warning',
          message: 'Completa los campos principales antes de continuar.',
          position: 'top',
        })
        return
      }

      const texto =
        'Nuevo soporte tecnico\n' +
        `Nombre: ${this.nombre}\n` +
        `Celular: ${this.telefono}\n` +
        `Equipo: ${this.equipo || 'No especificado'}\n` +
        `Problema: ${this.mensaje}`

      window.open(buildWhatsAppUrl(texto), '_blank')
    },
  },
}
</script>

<style scoped>
.section-title--large {
  font-size: clamp(2rem, 3vw, 3.2rem);
  max-width: 11ch;
  line-height: 1;
}

.contact-card {
  display: grid;
  gap: 10px;
}

.contact-card-top {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-value {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  word-break: break-word;
}

.form-panel {
  display: grid;
}

.form-grid {
  display: grid;
  gap: 18px;
}

@media (min-width: 860px) {
  .form-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .form-grid > :nth-child(3),
  .form-grid > :nth-child(4),
  .form-grid > :nth-child(5) {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .section-title--large {
    max-width: none;
  }
}
</style>
