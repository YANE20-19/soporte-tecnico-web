<template>
  <q-layout view="lHh Lpr lFf" class="main-bg">

    <!-- HEADER MODERNO -->
    <q-header class="header-glass">
      <q-toolbar>

        <q-toolbar-title class="text-weight-bold">
          💻 TechSupport
        </q-toolbar-title>

        <q-btn flat label="Inicio" to="/" />
        <q-btn flat label="Servicios" to="/servicios" />
        <q-btn flat label="Nosotros" to="/nosotros" />
        <q-btn flat label="Contacto" to="/contacto" />

      </q-toolbar>
    </q-header>

    <!-- CONTENIDO -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- BOTÓN WHATSAPP PRO -->
    <a
      href="https://wa.me/51915174884"
      target="_blank"
      class="whatsapp-pro"
    >
      💬
    </a>

  </q-layout>
</template>

<style>
.main-bg {
  background: linear-gradient(135deg, #020617, #0f172a);
}

/* HEADER GLASS */
.header-glass {
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(10px);
}

/* WHATSAPP PRO */
.whatsapp-pro {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  font-size: 26px;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  transition: 0.3s;
}

.whatsapp-pro:hover {
  transform: scale(1.1) rotate(5deg);
}
</style>