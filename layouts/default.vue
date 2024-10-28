<template>
  <div class="container mx-auto p-4">
    <app-header/>
    <main>
      <slot/>
    </main>
    <button
        v-if="showGoToTop"
        @click="scrollToTop"
        class="fixed bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';

const showGoToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
};

const handleScroll = () => {
  showGoToTop.value = window.scrollY > 200;
};

onMounted(() => {
  console.log('Hey I hope you like it 😅')
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>