<template>
  <div>
    <transition name="fade">
      <div
        v-if="show"
        @click="handleCloseModal"
        class="w-full h-full fixed left-0 top-0 bg-black opacity-20 z-30" 
      />
    </transition>
    <transition
      enter-active-class="transition duration-300 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-if="show"
        class="fixed bg-white dark:bg-gray-900 rounded-lg shadow-md z-40 modal font-inter w-9/12 sm:w-6/12 md:w-5/12 lg:w-4/12"
      >
        <div class="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  {{ title }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button 
              @click="handlePrimaryBtnClick"
              type="button" 
              class="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-modal-btn text-base font-medium text-gray-800 hover:bg-gray-200 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
              {{ buttonText }}
            </button>
            <button
              @click="handleCloseModal"
              type="button" 
              class="mt-3 w-full inline-flex justify-center rounded-md hover:text-gray-400 px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Modal",
  data: () =>({
    open: true
  }),
  computed: {
    ...mapGetters(
      'modal', 
      [ 'show', 'title', 'description', 'buttonText', 'buttonAction' ]  
    )
  },
  methods: {
    ...mapActions({
      toggleModal: 'modal/toggleModal'
    }),
    handleCloseModal () {
      this.toggleModal(false)
    },
    handlePrimaryBtnClick () {
      if (!this.buttonAction) return
      this.buttonAction()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>