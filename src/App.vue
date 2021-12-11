<template>
  <div 
    id="app" 
    :class="isDark ? 'dark' : ''"
    class="h-full w-full"
  >
    <Modal />
    <div class="h-full bg-gray-100 dark:bg-gray-900 font-inter">
      <Navbar
        :isDark="isDark"
        @toggle:darkmode="handleToogleDarkMode" 
      />
      <Main />
    </div>
  </div>
</template>

<script>
import { Main, Navbar, Modal } from './components'

export default {
  name: 'App',
  components: {
    Main,
    Navbar,
    Modal
  },
  data: () => ({
    isDark: false
  }),
  methods: {
    handleToogleDarkMode () {
      this.isDark = !this.isDark
    }
  }
}
</script>
