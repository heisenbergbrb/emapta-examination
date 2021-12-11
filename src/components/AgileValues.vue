<template>
  <Card
    header="Four values of Agile"
    description="The four core values of Agile software development as stated by the Agile Manifesto are:"
  >
    <CardInput 
      @submit="handleAddValues" 
      placeholder="Enter an agile core value"
    />
    <div class="md:mt-2">
      <AgileItem 
        v-for="item in items"
        :key="item.id"
        :item="item"
        @edit:value="handleClickEditValue"
        @confirm:remove="handleConfirmRemoveValue"
        @confirm:edit="handleConfirmEdit"
      />
    </div>
  </Card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from './Card.vue'
import CardInput from './CardInput.vue'
import AgileItem from './AgileItem.vue'
import Messages from '../constants/messages.json'

export default {
  name: "AgileValues",
  components: {
    Card,
    CardInput,
    AgileItem
  },
  computed: {
    ...mapGetters({
      items: 'agileValues/items'
    })
  },
  methods: {
    ...mapActions('agileValues', [ 'setAgileValuesItems' ]),
    ...mapActions('modal', [ 'toggleModal' ]),
    handleAddValues (inputValue) {
      console.log(inputValue)
    },
    async handleClickEditValue ({ itemId, isEditing }) {
      if (!isEditing) await this.timeout(200)
      const updatedItems = [ ...this.items ].map(item => {
        if (item.id === itemId) {
          item.isEditing = isEditing
        }

        return item
      })
      this.setAgileValuesItems(updatedItems)
    },
    handleConfirmEdit ({ itemId, value }) {
      if (!this.handleEditValidation(itemId, value)) return
      this.toggleModal({
        show: true,
        title: Messages.UPDATE_VALUE.TITLE,
        description: Messages.UPDATE_VALUE.DESCRIPTION,
        buttonText: Messages.UPDATE_VALUE.BUTTON_TEXT,
        buttonAction: () => {
          this.handleDeleteValueFromApi(itemId)
        }
      })
    },
    handleEditValidation (itemId, value) {
      if (value !== '') return true
      const updatedItems = [ ...this.items ].map(item => {
        if (item.id === itemId) {
          item.isEditing = false
        }

        return item
      })
      this.setAgileValuesItems(updatedItems)

      return false
    },
    handleConfirmRemoveValue (id) {
      this.toggleModal({
        show: true,
        title: Messages.DELETE_VALUE.TITLE,
        description: Messages.DELETE_VALUE.DESCRIPTION,
        buttonText: Messages.DELETE_VALUE.BUTTON_TEXT,
        buttonAction: () => {
          this.handleDeleteValueFromApi(id)
        }
      })
    },
    handleDeleteValueFromApi (id) {
      console.log(id)
    },
  }
}
</script>
