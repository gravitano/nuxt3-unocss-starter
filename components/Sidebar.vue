<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const { modelValue } = toRefs(props);

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(props.modelValue);

watch(
  modelValue,
  (val) => {
    isOpen.value = val;
  },
  { immediate: true }
);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

const menus = ref([
  {
    icon: 'i-ri-home-2-line',
    text: 'Dashboard',
    to: '/',
  },
  {
    text: 'Posts',
    icon: 'i-ri-book-2-line',
    children: [
      {
        text: 'New Post',
        to: '/posts/create',
      },
      {
        text: 'All Posts',
        to: '/posts',
      },
    ],
  },
  {
    text: 'Pages',
    icon: 'i-ri-book-line',
    children: [
      {
        text: 'Login',
        to: '/auth/login',
      },
      {
        text: 'Register',
        to: '/auth/register',
      },
    ],
  },
]);
</script>

<template>
  <ModalBackdrop v-if="isOpen" @click="isOpen = false" />

  <aside
    class="px-2 w-10/12 sm:w-300px border-r h-screen fixed sm:sticky top-0 border-gray-200 pb-2 bg-white z-10 flex-col transition-all duration-300 transform sm:transform-none"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
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
        @click="isOpen = false"
      ></button>
    </div>

    <!-- menu -->
    <ul class="flex-grow">
      <SidebarItem v-for="menu in menus" :key="menu.text" :menu="menu" />
    </ul>
  </aside>
</template>

<style scoped></style>
