<template>
  <div>
    <h1>Авторизация</h1>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Пароль" />
    <button @click="tryLogin">Войти</button>
    <p v-if="error" style="color: red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const tryLogin = async () => {
  error.value = ''
  try {
    const res = await fetch('https://b24-k8mwsl.bitrix24.ru/rest/1/1e87oywe5hp6x3k2/user.search.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ FILTER: { EMAIL: email.value } })
    })

    const data = await res.json()

    if (data.result && data.result.length > 0) {
      const user = data.result[0]
      // можно дополнительно сравнивать user.LAST_NAME или ID
      router.push({ name: 'Welcome', query: { name: user.NAME, login: user.EMAIL } })
    } else {
      error.value = 'Неверный логин или пользователь не найден'
    }
  } catch (e) {
    error.value = 'Ошибка при подключении к Bitrix24'
    console.error(e)
  }
}
</script>