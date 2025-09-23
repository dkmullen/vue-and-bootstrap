<script setup>
import { ref, computed, onMounted } from "vue"

const props = defineProps({
  currentPageOnLoad: Number,
  totalPages: Number,
})

const currentPage = ref()
// how many pages to show before/after current
const delta = 2

const pages = computed(() => {
  let range = []
  let rangeWithDots = []
  let l

  for (let i = 1; i <= props.totalPages; i++) {
    if (
      i === 1 || // first
      i === props.totalPages || // last
      (i >= currentPage.value - delta && i <= currentPage.value + delta)
    ) {
      range.push(i)
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1) // just one skipped, insert it
      } else if (i - l !== 1) {
        rangeWithDots.push("...") // multiple skipped
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
})

function goToPage(page) {
  if (page === "..." || page < 1 || page > props.totalPages) return
  currentPage.value = page
}

onMounted(() => {
  currentPage.value = props.currentPageOnLoad
})
</script>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <!-- Previous -->
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a href="#" class="page-link" @click.prevent="goToPage(currentPage - 1)">
          Previous
        </a>
      </li>

      <!-- Page numbers & ellipses -->
      <li
        v-for="(page, index) in pages"
        :key="index"
        :class="['page-item', { active: page === currentPage, disabled: page === '...' }]"
      >
        <a
          v-if="page !== '...'"
          href="#"
          class="page-link"
          @click.prevent="goToPage(page)"
        >
          {{ page }}
        </a>
        <span v-else class="page-link">…</span>
      </li>

      <!-- Next -->
      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a href="#" class="page-link" @click.prevent="goToPage(currentPage + 1)">
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>
