<template>
  <div class="tabs flex mb-4 sticky-header">
    <NuxtLink
        to="/tab1"
        class="custom-tab"
        :class="$route.path === '/tab1' ? 'custom-tab-active' : 'custom-tab-inactive'"
    >
      Tab 1
    </NuxtLink>
    <NuxtLink
        to="/tab2"
        class="custom-tab"
        :class="$route.path === '/tab2' ? 'custom-tab-active' : 'custom-tab-inactive'"
    >
      Tab 2
    </NuxtLink>
    <NuxtLink
        to="/tab3"
        class="custom-tab"
        :class="$route.path === '/tab3' ? 'custom-tab-active' : 'custom-tab-inactive'"
    >
      Tab 3
    </NuxtLink>
  </div>
</template>

<style scoped>
.custom-tab {
  padding: 10px 20px;
  border-radius: 8px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.custom-tab-active {
  border-color: #1e90ff;
  color: #1e90ff;
}

.custom-tab-inactive {
  color: #6b7280;
}

.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  padding: 10px 0;
}
</style>