<template>
  <Card
    header="The 12 principles"
    description="The 12 principles articulated in the Agile Manifesto are:"
  >
    <CardInput
      @submit="handleAddValues" 
      placeholder="Enter an agile principle"
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
      items: 'agilePrinciples/items'
    })
  },
  methods: {
    ...mapActions('agilePrinciples', [ 'setAgilePrincipleItems' ]),
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
        title: Messages.UPDATE_PRINCIPLE.TITLE,
        description: Messages.UPDATE_PRINCIPLE.DESCRIPTION,
        buttonText: Messages.UPDATE_PRINCIPLE.BUTTON_TEXT,
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
        title: Messages.DELETE_PRINCIPLE.TITLE,
        description: Messages.DELETE_PRINCIPLE.DESCRIPTION,
        buttonText: Messages.DELETE_PRINCIPLE.BUTTON_TEXT,
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
