<template>
  <q-layout view="lHh Lpr lFf" class="site-layout">
    <q-header class="site-header">
      <q-toolbar class="page-width site-toolbar">
        <router-link to="/" class="brand-link">
          <div class="brand-mark">
            <img src="/brand-mark.svg" alt="Logo de Soporte Técnico" class="brand-logo" />
          </div>

          <div class="brand-copy">
            <div class="brand-name">{{ companyProfile.brand }}</div>
            <div class="brand-tagline">{{ companyProfile.tagline }}</div>
          </div>
        </router-link>

        <div v-if="$q.screen.gt.md" class="desktop-nav">
          <q-btn
            v-for="link in navigationLinks"
            :key="link.to"
            flat
            no-caps
            :label="link.label"
            :to="link.to"
            class="nav-btn"
            :class="{ 'nav-btn--active': isCurrentRoute(link.to) }"
          />
        </div>

        <div class="toolbar-actions">
          <q-btn
            v-if="$q.screen.gt.sm"
            unelevated
            no-caps
            label="Solicitar soporte"
            to="/contacto"
            class="ts-btn ts-btn--primary"
          />

          <q-btn
            v-if="$q.screen.lt.md"
            flat
            round
            icon="menu"
            class="menu-btn"
            @click="drawer = true"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" side="right" overlay bordered class="mobile-drawer">
      <div class="drawer-top">
        <div>
          <div class="drawer-brand">{{ companyProfile.brand }}</div>
          <div class="drawer-text">{{ companyProfile.summary }}</div>
        </div>

        <q-btn flat round icon="close" @click="drawer = false" />
      </div>

      <q-list class="drawer-list">
        <q-item
          v-for="link in navigationLinks"
          :key="link.to"
          clickable
          :to="link.to"
          class="drawer-item"
          @click="drawer = false"
        >
          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>

      <div class="drawer-panel">
        <div class="mini-title">Atención directa</div>
        <div class="drawer-text">{{ companyProfile.responseTime }}</div>

        <div class="drawer-contact-list">
          <div class="drawer-contact-item">
            WhatsApp o llamadas: {{ companyProfile.phoneLabel }}
          </div>
          <div class="drawer-contact-item">{{ companyProfile.email }}</div>
          <div class="drawer-contact-item">{{ companyProfile.location }}</div>
        </div>

        <q-btn
          unelevated
          no-caps
          label="Escribir por WhatsApp"
          class="ts-btn ts-btn--warm full-width q-mt-md"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </q-drawer>

    <q-page-container class="site-page-container">
      <router-view v-slot="{ Component, route }">
        <transition name="site-page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </q-page-container>

    <footer class="site-footer">
      <div class="page-width footer-grid">
        <div class="footer-brand">
          <div class="brand-inline">
            <div class="brand-mark brand-mark--footer">
              <img src="/brand-mark.svg" alt="Logo de Soporte Técnico" class="brand-logo" />
            </div>
            <div>
              <div class="footer-brand-name">{{ companyProfile.brand }}</div>
              <div class="footer-copy">{{ companyProfile.tagline }}</div>
            </div>
          </div>

          <p class="footer-copy footer-copy--wide">
            {{ companyProfile.summary }}
          </p>

          <div class="footer-pills">
            <span class="info-pill">{{ companyProfile.location }}</span>
            <span class="info-pill">{{ companyProfile.schedule }}</span>
          </div>
        </div>

        <div>
          <div class="footer-title">Navegación</div>
          <div class="footer-links">
            <router-link
              v-for="link in navigationLinks"
              :key="link.to"
              :to="link.to"
              class="footer-link"
            >
              {{ link.label }}
            </router-link>
          </div>
        </div>

        <div>
          <div class="footer-title">Contacto</div>
          <div class="footer-links">
            <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="footer-link">
              WhatsApp o llamadas: {{ companyProfile.phoneLabel }}
            </a>
            <a :href="`mailto:${companyProfile.email}`" class="footer-link">
              {{ companyProfile.email }}
            </a>
            <span class="footer-link footer-link--static">{{ companyProfile.location }}</span>
          </div>
        </div>
      </div>
    </footer>

    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="floating-whatsapp"
    >
      <q-icon name="chat" size="24px" />
    </a>
  </q-layout>
</template>

<script>
import { companyProfile, navigationLinks } from 'src/data/site'
import { buildWhatsAppUrl } from 'src/utils/contact'

export default {
  name: 'MainLayout',

  data() {
    return {
      drawer: false,
      companyProfile,
      navigationLinks,
      whatsappUrl: buildWhatsAppUrl('Hola, quiero información sobre sus servicios.'),
    }
  },

  methods: {
    isCurrentRoute(route) {
      if (route === '/') {
        return this.$route.path === '/'
      }

      return this.$route.path.startsWith(route)
    },
  },
}
</script>

<style scoped>
.site-layout {
  color: var(--ts-ink);
}

.site-page-container {
  position: relative;
}

:deep(.site-page-enter-active),
:deep(.site-page-leave-active) {
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
}

:deep(.site-page-enter-from) {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}

:deep(.site-page-leave-to) {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}

.site-header {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(244, 249, 255, 0.78));
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(22, 32, 51, 0.06);
  box-shadow: 0 12px 32px rgba(14, 35, 53, 0.05);
}

.site-toolbar {
  min-height: 86px;
  gap: 16px;
  padding-block: 10px;
}

.brand-link,
.brand-inline {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-link {
  min-width: 0;
  max-width: min(100%, 420px);
}

.brand-mark {
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.brand-mark--footer {
  width: 44px;
  height: 44px;
}

.brand-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 14px 24px rgba(13, 107, 125, 0.18));
}

.brand-copy {
  min-width: 0;
}

.brand-name,
.footer-brand-name,
.drawer-brand {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-name {
  font-size: 1.1rem;
  color: var(--ts-ink);
}

.brand-tagline,
.footer-copy,
.drawer-text {
  color: var(--ts-muted);
  font-size: 0.92rem;
  line-height: 1.6;
}

.desktop-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.toolbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.desktop-nav + .toolbar-actions {
  margin-left: 12px;
}

.nav-btn {
  min-height: 42px;
  padding-inline: 12px;
  border-radius: 999px;
  color: var(--ts-muted);
  font-weight: 600;
}

.nav-btn--active {
  color: var(--ts-ink);
  background: rgba(13, 107, 125, 0.1);
}

.menu-btn {
  background: rgba(13, 107, 125, 0.08);
  color: var(--ts-primary);
}

.mobile-drawer {
  width: min(92vw, 360px);
  background:
    radial-gradient(circle at top right, rgba(40, 184, 204, 0.14), transparent 28%),
    linear-gradient(180deg, #fbfdff, #eef4fa);
}

.drawer-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  padding: 26px 22px 18px;
}

.drawer-list {
  padding: 8px 12px 0;
}

.drawer-item {
  border-radius: 16px;
  margin-bottom: 6px;
}

.drawer-panel {
  margin: 20px 16px 16px;
  padding: 18px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(220, 243, 248, 0.92), rgba(255, 243, 237, 0.94));
  border: 1px solid rgba(13, 107, 125, 0.08);
}

.drawer-contact-list {
  display: grid;
  gap: 8px;
  margin-top: 16px;
}

.drawer-contact-item {
  color: var(--ts-ink);
  font-size: 0.92rem;
  font-weight: 600;
}

.site-footer {
  padding: 10px 0 34px;
}

.footer-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) repeat(2, minmax(200px, 0.85fr));
  gap: clamp(20px, 2vw, 28px);
  padding: clamp(24px, 3vw, 34px);
  border-radius: 30px;
  background:
    radial-gradient(circle at top right, rgba(40, 184, 204, 0.12), transparent 24%),
    rgba(248, 252, 255, 0.84);
  border: 1px solid rgba(22, 32, 51, 0.08);
  box-shadow: var(--ts-shadow-soft);
}

.footer-brand {
  display: grid;
  gap: 16px;
}

.footer-copy {
  margin: 0;
}

.footer-copy--wide {
  max-width: 520px;
}

.footer-title {
  margin-bottom: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.footer-links,
.footer-pills {
  display: grid;
  gap: 10px;
}

.footer-link {
  color: var(--ts-muted);
  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-link:hover {
  color: var(--ts-primary);
  transform: translateX(4px);
}

.footer-link--static:hover {
  color: var(--ts-muted);
  transform: none;
}

.floating-whatsapp {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 30;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  color: #fff;
  background: linear-gradient(135deg, #1dbf73, #128c7e);
  box-shadow: 0 20px 38px rgba(18, 140, 126, 0.28);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.floating-whatsapp:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 26px 44px rgba(18, 140, 126, 0.32);
}

@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: auto;
  }
}

@media (max-width: 600px) {
  .site-toolbar {
    min-height: 74px;
    gap: 12px;
  }

  .brand-tagline {
    display: none;
  }

  .footer-grid {
    padding: 22px;
  }

  .floating-whatsapp {
    right: 14px;
    bottom: 14px;
    width: 54px;
    height: 54px;
  }
}

@media (max-width: 420px) {
  .site-toolbar {
    min-height: 70px;
    gap: 10px;
    padding-block: 8px;
  }

  .brand-link {
    max-width: none;
    gap: 10px;
  }

  .brand-mark {
    width: 46px;
    height: 46px;
  }

  .brand-name {
    font-size: 1rem;
  }

  .drawer-top {
    padding: 20px 18px 14px;
  }

  .drawer-panel {
    margin: 16px 12px 12px;
    padding: 16px;
  }

  .footer-grid {
    padding: 18px;
  }
}

@media (prefers-reduced-motion: reduce) {
  :deep(.site-page-enter-active),
  :deep(.site-page-leave-active) {
    transition: none;
  }
}
</style>
