<template>
  <form
    @submit.prevent="handleAddValue"
    class="pb-5"
  >
    <input
      v-model="value"
      :class="{shake: isShakeAnimationShown}"
      :placeholder="placeholder"
      class=" 
      text-black
      dark:text-white
      dark:placeholder-input-placeholder-dark
      placeholder-input-placeholder
      w-full 
      px-4 py-2.5 mt-2 
      md:text-base
      text-sm
      transition duration-500 ease-in-out transform 
      border-transparent rounded-lg 
      bg-input
      dark:bg-input-dark
      focus:border-yellow-500
      shadow-md
      focus:outline-none 
      focus:shadow-outline
      ring-gray-400"
    >
  </form>
</template>

<script>
export default {
  name: "CardInput",
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  data: () => ({
    value: '',
    isShakeAnimationShown: false
  }),
  watch: {
    async isShakeAnimationShown (isShown) {
      if (isShown) {
        await this.timeout(150)
        this.isShakeAnimationShown = false
      }
    }
  },
  methods: {
    handleAddValue () {
      (this.value.trim() === '') 
        ? this.isShakeAnimationShown = true
        : this.$emit('submit', this.value.trim())
      this.value = ''
    }
  }
}
</script>

<style scoped>
.shake {
  animation: shake 150ms 2 linear;
  -moz-animation: shake 150ms 2 linear;
  -webkit-animation: shake 150ms 2 linear;
  -o-animation: shake 150ms 2 linear;
}

@keyframes shake {
  0% {
    transform: translate(3px, 0);
  }
  50% {
    transform: translate(-3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@-moz-keyframes shake {
  0% {
    -moz-transform: translate(3px, 0);
  }
  50% {
    -moz-transform: translate(-3px, 0);
  }
  100% {
    -moz-transform: translate(0, 0);
  }
}

@-webkit-keyframes shake {
  0% {
    -webkit-transform: translate(3px, 0);
  }
  50% {
    -webkit-transform: translate(-3px, 0);
  }
  100% {
    -webkit-transform: translate(0, 0);
  }
}

@-ms-keyframes shake {
  0% {
    -ms-transform: translate(3px, 0);
  }
  50% {
    -ms-transform: translate(-3px, 0);
  }
  100% {
    -ms-transform: translate(0, 0);
  }
}

@-o-keyframes shake {
  0% {
    -o-transform: translate(3px, 0);
  }
  50% {
    -o-transform: translate(-3px, 0);
  }
  100% {
    -o-transform: translate(0, 0);
  }
}
</style>
