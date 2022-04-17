<script setup lang="ts">
useHead({
  title: 'Nuxt 3 UnoCSS',
});

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

const sidebar = ref(false);
</script>

<template>
  <main class="flex flex-col sm:flex-row">
    <aside
      class="px-2 w-10/12 sm:w-300px border-r h-screen fixed sm:sticky top-0 border-gray-200 pb-2 bg-white z-10 flex-col transition-all duration-300 transform sm:transform-none"
      :class="sidebar ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- nav header -->
      <div
        class="flex justify-between gap-2 items-center mb-2 px-4 border-b border-gray-200 -mx-2 sm:border-none"
      >
        <nuxt-link
          to="/"
          class="py-5 font-bold text-lg text-indigo flex gap-2 items-center justify-between sm:justify-center"
        >
          <div class="flex gap-2 items-center">
            <div class="i-logos-vue w-5 h-5" />
            Nuxt 3 UnoCSS
          </div>
        </nuxt-link>
        <button
          class="i-ri-close-line w-6 h-6 text inline sm:hidden"
          @click="sidebar = false"
        ></button>
      </div>

      <!-- menu -->
      <ul class="flex-grow">
        <li>
          <a
            href="#"
            class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
          >
            <div class="i-ri-dashboard-line w-5 h-5" />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
          >
            <div class="i-ri-user-line w-5 h-5" />
            <span class="flex-grow">User</span>
            <div class="i-ri-arrow-right-s-line w-5 h-5" />
          </a>
          <ul class="">
            <li>
              <a
                href="#"
                class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
              >
                <div class="w-5"></div>
                Add User
              </a>
              <a
                href="#"
                class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
              >
                <div class="w-5"></div>
                User List
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
          >
            <div class="i-ri-book-2-line w-5 h-5" />
            <span class="flex-grow">Posts</span>
            <div class="i-ri-arrow-right-s-line w-5 h-5" />
          </a>
          <ul class="">
            <li>
              <a
                href="#"
                class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
              >
                <div class="w-5"></div>
                New Post
              </a>
              <a
                href="#"
                class="px-4 py-2 block transition duration-300 hover:bg-indigo hover:text-white rounded flex gap-2 items-center w-full"
              >
                <div class="w-5"></div>
                Post List
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
    <div class="w-full flex-grow">
      <!-- header -->
      <header class="bg-white border-b border-gray-200">
        <div
          class="pl-4 sm:pl-0 pr-4 py-3 flex gap-2 items-center justify-between"
        >
          <button
            class="i-ri-menu-line w-5 h-5 flex-shrink-0 px-4 py-2 rounded inline sm:hidden"
            @click="sidebar = true"
          />

          <div class="relative w-6/12">
            <div
              class="i-ri-search-line text-gray-400 absolute left-6 w-5 h-5 top-2.5"
            />
            <input
              type="search"
              placeholder="Search"
              class="pl-13 py-2 border-none rounded-lg focus:outline-none w-full"
            />
          </div>

          <div class="space-x-0">
            <nuxt-link
              class="text-gray-600 hover:bg-indigo hover:text-white px-3 py-2 rounded flex items-center gap-2"
              to="/"
            >
              <div class="i-ri-user-line w-5 h-5" />
              <span class="hidden sm:inline">Admin</span>
              <div class="i-ri-arrow-down-s-line w-5 h-5" />
            </nuxt-link>
          </div>
        </div>
      </header>

      <!-- main content -->
      <div class="px-6 py-6">
        <div class="mb-5">
          <nuxt-link class="font-semibold text-2xl" to="/">
            Dashboard
          </nuxt-link>
          <div class="text-gray-500">Overview & summary</div>
        </div>

        <!-- stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 mb-5 gap-5">
          <div
            v-for="stat in stats"
            :key="stat.text"
            class="flex gap-4 border border-gray-200 rounded-xl items-center px-4 py-3"
          >
            <div
              class="rounded-full w-10 h-10 flex items-center justify-center text-white flex-shrink-0"
              :class="stat.color"
            >
              <div class="w-5 h-5" :class="stat.icon" />
            </div>
            <div>
              <h3 class="font-semibold text-xl truncate">
                {{ stat.count }}
              </h3>
              <h4 class="text-gray-600">
                {{ stat.text }}
              </h4>
            </div>
          </div>
        </div>

        <!-- card -->
        <div class="border border-gray-200 rounded-lg">
          <h1 class="font-semibold text-lg text-gray-700 px-4 pt-3 pb-2">
            Hello World
          </h1>
          <div class="px-4 pb-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sit esse voluptatem et deserunt earum explicabo aut quis laboriosam
            nostrum quisquam sequi maxime est vitae, vero reiciendis veniam
            repudiandae fugit!
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
  color: #333;
}
</style>
