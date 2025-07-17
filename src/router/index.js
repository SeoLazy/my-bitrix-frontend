import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import Welcome from '../views/Welcome.vue'

const routes = [
    { path: '/', component: App },
    { path: '/welcome', name: 'welcome', component: Welcome }
]

export default createRouter({
    history: createWebHistory(),
    routes
})