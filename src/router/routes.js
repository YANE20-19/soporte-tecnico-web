const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'servicios', component: () => import('pages/ServiciosPage.vue') },
      { path: 'contacto', component: () => import('pages/ContactoPage.vue') },
      { path: 'nosotros', component: () => import('pages/NosotrosPage.vue') },
      { path: 'pagos', component: () => import('pages/PagosPage.vue') },
      { path: 'yape', component: () => import('pages/YapePage.vue') },
      { path: 'tarjeta', component: () => import('pages/TarjetaPage.vue') },
      { path: 'efectivo', component: () => import('pages/EfectivoPage.vue') }
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes