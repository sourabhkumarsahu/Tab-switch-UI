<template>
  <div>
    <h1 class="text-2xl font-bold bg-white text-black mb-4">Products</h1>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="product in products" :key="product.id" class="border rounded-lg p-4 shadow-md">
        <img :src="product.image" alt="Product Image" class="w-full h-48 object-contain mb-4 rounded">
        <h2 class="font-bold text-lg mb-2">{{ product.title }}</h2>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="font-semibold text-blue-500">Price: ${{ product.price }}</p>
      </div>
    </div>
    <div ref="bottom" class="flex justify-center items-center h-16">
      <svg v-if="loadingMore" class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';

const products = ref([]);
const loading = ref(true);
const loadingMore = ref(false);
const page = ref(1);
const bottom = ref(null);

const loadProducts = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page.value}`);
    const data = await response.json();
    products.value = [...products.value, ...data];
    page.value += 1;
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    loading.value = false;
    loadingMore.value = false;
  }
};

onMounted(async () => {
  await loadProducts();

  const observer = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting && !loadingMore.value) {
      loadingMore.value = true;
      await loadProducts();
    }
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  });

  if (bottom.value) {
    observer.observe(bottom.value);
  }
});
</script>

<style scoped>
</style>