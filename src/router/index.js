import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Welcome from '../Welcome.vue'

const routes = [
    { path: '/', component: App },
    { path: '/welcome', name: 'Welcome', component: Welcome },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router