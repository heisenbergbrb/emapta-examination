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
      <Loading v-if="loading" />
      <template v-else>
        <p 
          v-if="!items.length"
          class="text-center my-5 text-sm text-gray-500 dark:text-gray-400"
        >
          No data available
        </p>
        <AgileItem 
          v-else
          v-for="item in items"
          :key="item.id"
          :item="item"
          @edit:value="handleClickEditValue"
          @confirm:remove="handleConfirmRemoveValue"
          @confirm:edit="handleConfirmEdit"
        />
      </template>
    </div>
  </Card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from './Card.vue'
import CardInput from './CardInput.vue'
import AgileItem from './AgileItem.vue'
import Loading from './Loading.vue'
import agile from '../mixins/agile-crud-logic'
import Messages from '../constants/messages.js'

export default {
  name: "AgileValues",
  mixins: [ agile ],
  components: {
    Card,
    CardInput,
    AgileItem,
    Loading
  },
  data: () => ({
    message: {
      delete: Messages.DELETE_PRINCIPLE,
      update: Messages.UPDATE_PRINCIPLE
    }
  }),
  computed: {
    ...mapGetters({
      items: 'agilePrinciples/items',
      loading: 'agilePrinciples/loading'
    })
  },
  async created () {
    await this.bindItems()
    this.setLoading(false)
  },
  methods: {
    ...mapActions(
      'agilePrinciples', 
      [ 
        'setLocalItems', 
        'setLoading',
        'bindItems', 
        'addValue', 
        'removeValue', 
        'updateValue' 
      ]
    ),
    ...mapActions('modal', [ 'toggleModal' ]),
  }
}
</script>
