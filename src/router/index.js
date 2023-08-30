import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};
function CekProfil(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    next('/')
  }
};



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'about',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/product/detailproduct/:slug',
      name: 'productBySlug',
      component: () => import('../views/ProductBySlugView.vue'),
      props: true,
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/brand',
      name: 'brand',
      component: () => import('../views/BrandView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      props:true,
      beforeEnter: CekProfil,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      beforeEnter: cekToken,
      props:true
    },
    {
      path: '/login/terlebihdahulu/:slug',
      name: 'logins',
      component: () => import('../views/LoginView.vue'),
      props:true
    },
    {
      path: '/transaksi/:order_code',
      name: 'Transaksi',
      component: () => import('../views/Transaksi.vue'),
      beforeEnter: cekToken,
      props:true
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
  ]
});

export default router
