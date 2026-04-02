<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/two' },
]

function changeTheme() {
  const currentTheme = document.documentElement.getAttribute('data-bs-theme')
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', newTheme)
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
      <button class="btn btn-outline-primary" @click="changeTheme">Toggle Theme</button>
      <template>
        <i-bi-alarm />
      </template>
    </div>
  </nav>
</template>

<style scoped>
.nav-link,
.navbar-brand {
  cursor: pointer;
}
</style>
