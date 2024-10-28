<template>
  <div>
    <h1 class="text-2xl font-bold bg-white text-black mb-4">Breweries</h1>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div v-for="brewery in breweries" :key="brewery.id" class="border rounded-lg p-4 shadow-md">
        <h2 class="font-bold text-lg mb-2">{{ brewery.name }}</h2>
        <p class="text-gray-700 mb-2">Type: {{ brewery.brewery_type }}</p>
        <p class="text-gray-700 mb-2">City: {{ brewery.city }}</p>
        <p class="text-gray-700 mb-2">State: {{ brewery.state }}</p>
        <a :href="brewery.website_url" class="text-blue-500 underline" target="_blank">Visit Website</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const breweries = ref([]);
const loading = ref(true);

const loadBreweries = async () => {
  try {
    const response = await fetch('https://api.openbrewerydb.org/breweries');
    const data = await response.json();
    breweries.value = data;
  } catch (error) {
    console.error('Error fetching breweries:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await loadBreweries();
});
</script>