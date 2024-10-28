<template>
  <div class="bg-white text-black">
    <h1 class="text-2xl font-bold mb-4">Movies</h1>
    <div v-if="loading" class="flex justify-center items-center h-64">
      <svg class="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
      </svg>
    </div>
    <div v-else>
      <table class="min-w-full bg-white text-black">
        <thead>
        <tr>
          <th class="py-2 px-4 border-b-2 border-gray-300 text-left">Movie Name</th>
          <th class="py-2 px-4 border-b-2 border-gray-300 text-left">Rating</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="movie in movies" :key="movie.id">
          <td class="py-2 px-4 border-b border-gray-300">{{ movie.movie }}</td>
          <td class="py-2 px-4 border-b border-gray-300">{{ movie.rating }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const movies = ref([]);
const loading = ref(true);

const loadMovies = async () => {
  try {
    const response = await fetch('https://dummyapi.online/api/movies');
    const data = await response.json();
    movies.value = data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  await loadMovies();
});
</script>