<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mt-6 mx-4 md:mx-0">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-base md:text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {{ header }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">
        {{ description }}
      </p>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-500 py-3 px-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>
