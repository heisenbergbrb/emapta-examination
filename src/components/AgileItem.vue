<template>
  <div class="flex justify-between items-center text-gray-700 md:my-1 cursor-default select-none group">
    <p
      v-if="!item.isEditing"
      class="text-sm dark:text-gray-100"
    >
      {{ item.text }}
    </p>
    <input
      v-else
      :ref="`input-values-${item.id}`"
      :value="item.text"
      @blur="handleClickEditItem(item.id, false)"
      type="text"
      class="text-sm dark:text-gray-100 dark:bg-gray-800 flex-1 focus:outline-none"
    >
    <div
      v-if="!item.isEditing"
      class="opacity-0 group-hover:opacity-100"
    >
      <button 
        @click="handleClickEditItem(item.id)"
        class="hover:bg-gray-200 rounded-full" 
        style="padding: 3px"
      >
        <svg class="h-5 w-5 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
          <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
      </button>
      <button
        @click="handleConfirmRemoveItem(item.id)"
        class="hover:bg-gray-200 rounded-full" 
        style="padding: 3px"
      >
        <svg class="h-5 w-5 text-gray-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
          <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <button
      v-else
      @click="handleConfirmEdit(item.id)"
      class="hover:bg-gray-200 rounded-full" 
      style="padding: 3px"
    >
      <svg class="h-5.5 w-5.5 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    async handleClickEditItem (itemId, isEditing = true) {
      this.$emit('edit:value', { itemId, isEditing })
      await this.$nextTick()
      if (isEditing) this.$refs[`input-values-${itemId}`].focus()
    },
    handleConfirmEdit (itemId) {
      this.$emit('confirm:edit', {
        itemId,
        value: this.$refs[`input-values-${itemId}`].value.trim()
      })
    },
    handleConfirmRemoveItem (id) {
      this.$emit('confirm:remove', id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>