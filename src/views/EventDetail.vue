<template>
  <h1>
    Event Detail's for event id {{event.title}}
  </h1>
</template>

<script>
import api from '@/api'

export default {
  name: 'EventDetail',
  props: ['id'],
  data () {
    return {
      event: {}
    }
  },
  created () {
    api.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.debug(`There was an error fetching event: ${error.response}`)
      })
  }
}
</script>

<style scoped>

</style>
