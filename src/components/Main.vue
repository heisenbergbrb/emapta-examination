<template>
  <div class="container mx-auto md:px-12 lg:px-40 xl:px-72 pb-6">
    <AgileValues />
    <AgilePrinciples />
  </div> 
</template>

<script>
import AgileValues from './AgileValues.vue'
import AgilePrinciples from './AgilePrinciples.vue'
export default {
  name: 'Main',
  components: {
    AgileValues,
    AgilePrinciples
  }
}
</script>
