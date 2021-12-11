<template>
  <nav class="h-12 bg-white dark:bg-gray-800">
    <div class="container mx-auto flex justify-end items-center px-4 md:px-12 lg:px-40 xl:px-72 h-full">
      <button
        @click="handeEmitToggleDarkMode"
        class="bg-gray-200 p-2 rounded dark:bg-gray-600 hover:bg-gray-300"
      >
        <svg 
          v-if="!isDark"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          class="h-5 w-5 text-gray-700"  
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
        <svg 
          v-else
          viewBox="0 0 24 24"  fill="none"  
          stroke="currentColor"  
          stroke-width="2"  
          stroke-linecap="round"  
          stroke-linejoin="round"
          class="h-5 w-5 text-gray-200"  
        >  
          <circle cx="12" cy="12" r="5" />  <line x1="12" y1="1" x2="12" y2="3" />  <line x1="12" y1="21" x2="12" y2="23" />  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />  <line x1="1" y1="12" x2="3" y2="12" />  <line x1="21" y1="12" x2="23" y2="12" />  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: [ 'isDark' ],
  methods: {
    handeEmitToggleDarkMode () {
      this.$emit('toggle:darkmode')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>