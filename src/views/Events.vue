<template>
  <v-container class="justify-center">
    <h1>
      This is Event List file...
    </h1>
    <v-flex xs4 class="offset-sm4">
      <EventCard v-for="event in events" :key="event.id" :event="event" class="my-4"/>
    </v-flex>
  </v-container>
</template>

<script>
import EventCard from '@/components/EventCard'
import api from '@/api'

export default {
  name: 'Events',
  components: {
    EventCard
  },
  data () {
    return {
      events: []
    }
  },
  created () {
    api.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(`there was an error: ${error.response}`)
      })
  }
}
</script>

<style scoped>

</style>
