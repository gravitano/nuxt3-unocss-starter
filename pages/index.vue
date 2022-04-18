<script lang="ts" setup>
const stats = ref([
  {
    text: 'Users',
    count: '100',
    icon: 'i-ri-user-line',
    color: 'bg-indigo',
  },
  {
    text: 'Posts',
    count: '20',
    icon: 'i-ri-book-2-line',
    color: 'bg-blue',
  },
  {
    text: 'Comments',
    count: '500',
    icon: 'i-ri-chat-2-line',
    color: 'bg-orange',
  },
  {
    text: 'Views',
    count: '12000',
    icon: 'i-ri-bar-chart-box-line',
    color: 'bg-emerald',
  },
]);
</script>

<template>
  <div>
    <div class="mb-5">
      <nuxt-link class="font-semibold text-2xl" to="/"> Dashboard </nuxt-link>
      <div class="text-gray-500">Overview & summary</div>
    </div>

    <!-- stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 mb-5 gap-5">
      <StatsItem v-for="stat in stats" :key="stat.text" v-bind="stat" />
    </div>

    <!-- card -->
    <div class="border border-gray-200 rounded-lg">
      <h1 class="font-semibold text-lg text-gray-700 px-4 pt-3 pb-2">
        Hello World
      </h1>
      <div class="px-4 pb-3 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit
        esse voluptatem et deserunt earum explicabo aut quis laboriosam nostrum
        quisquam sequi maxime est vitae, vero reiciendis veniam repudiandae
        fugit!
      </div>
    </div>
  </div>
</template>

<style scoped></style>
