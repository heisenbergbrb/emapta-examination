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
      <AgileItem 
        v-else
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
import Loading from './Loading.vue'
import agile from '../mixins/agile'
import Messages from '../constants/messages.json'

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
    }
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
