<template>
  <div>
    <h1>Вы авторизованы в системе</h1>
    <p>Имя: {{ name }}</p>
    <p>Логин: {{ login }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const name = route.query.name || 'Неизвестно'
const login = route.query.login || '—'
</script>