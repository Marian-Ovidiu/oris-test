import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: function () {
            return import('../views/AboutView.vue')
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: function () {
            return import('../views/ContactView.vue')
        }
    },
    {
        path: '/products',
        name: 'products',
        component: function () {
            return import('../views/ProductsView.vue')
        }
    },
    {
        path: '/product/:id_product',
        name: 'product',
        component: function () {
            return import('../views/ProductView.vue')
        }
    },
    {
        path: '/404',
        name: '404',
        component: function () {
            return import('../views/NotFound.vue')
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
