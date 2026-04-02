<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentTheme = ref(document.documentElement.getAttribute('data-bs-theme'))

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/two' },
]

function changeTheme() {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', newTheme)
  currentTheme.value = newTheme
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <p class="navbar-brand" @click="router.push('/')">VueBS</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in navLinks" :key="link.name">
            <p class="nav-link" @click="router.push(link.path)">{{ link.name }}</p>
          </li>
        </ul>
      </div>
      <div class="d-flex" @click="changeTheme" style="cursor: pointer">
        <i-bi-brightness-high-fill v-if="currentTheme === 'dark'" />
        <i-bi-moon-stars-fill v-else />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link,
.navbar-brand {
  cursor: pointer;
}
</style>
