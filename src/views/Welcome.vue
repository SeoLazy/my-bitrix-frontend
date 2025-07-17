<template>
  <div class="welcome">
    <h1>Вы авторизованы</h1>
    <p>Добро пожаловать, {{ name }} ({{ login }})</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.query.name || 'Гость'
const login = route.query.login || 'неизвестен'
</script>