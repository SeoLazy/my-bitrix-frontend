<template>
  <div class="login">
    <h1>Авторизация</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Логин" required />
      <input v-model="password" placeholder="Пароль" type="password" required />
      <button type="submit">Войти</button>
    </form>
    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = async () => {
  try {
    // Пример запроса в Bitrix24
    const res = await fetch('https://b24-k8mwsl.bitrix24.ru/rest/1/1e87oywe5hp6x3k2/user.get.json')
    const data = await res.json()

    // Допустим, ищем пользователя по логину
    const user = data.result.find(u => u.LOGIN === username.value)

    if (user && password.value === 'demo') {
      router.push({
        name: 'welcome',
        query: { name: user.NAME, login: user.LOGIN }
      })
    } else {
      error.value = 'Неверный логин или пароль'
    }
  } catch (e) {
    error.value = 'Ошибка авторизации'
    console.error(e)
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
input, button {
  padding: 10px;
}
</style>