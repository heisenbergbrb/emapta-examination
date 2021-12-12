<template>
  <Card
    header="Four values of Agile"
    description="The four core values stated by the Agile Manifesto are:"
  >
    <CardInput 
      @submit="handleAddValues" 
      placeholder="Enter an agile core value"
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
          data-test="item"
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
      delete: Messages.DELETE_VALUE,
      update: Messages.UPDATE_VALUE
    },
  }),
  computed: {
    ...mapGetters({
      items: 'agileValues/items',
      loading: 'agileValues/loading'
    })
  },
  async created () {
    await this.bindItems()
    this.setLoading(false)
  },
  methods: {
    ...mapActions(
      'agileValues', 
      [ 
        'setLocalItems',
        'setLoading',
        'bindItems', 
        'addValue', 
        'removeValue', 
        'updateValue' 
      ]
    ),
    ...mapActions('modal', [ 'toggleModal' ])
  }
}
</script>
