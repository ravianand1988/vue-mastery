<template>
  <v-container>
    <h1>
      Create new event, {{username}}
    </h1>
    <v-form @submit.prevent="createEvent">
      <v-date-picker v-model="event.date"></v-date-picker>
      <v-time-picker v-model="event.time"></v-time-picker>
      <v-text-field v-model="event.title"></v-text-field>
      <v-text-field v-model="event.location"></v-text-field>
      <v-text-field v-model="event.organiser"></v-text-field>
      <v-select v-model="event.category" :items="categories"></v-select>
      <v-textarea v-model="event.description"></v-textarea>
      <input type="submit">
    </v-form>
    <v-label>this Event was created by {{username}}</v-label>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'EventCreate',
  computed: {
    username () {
      return this.$store.state.user.name
    },
    ...mapState(['user', 'categories'])
  },
  data () {
    return {
      event: this.createEventFreshObject()
    }
  },
  methods: {
    incrementCount () {
      this.$store.dispatch('updateCount', 6)
    },
    createEvent () {
      console.debug('creatiing')
      this.$store.dispatch('createEvent', this.event)
      console.debug('created..')
    },
    createEventFreshObject () {
      const user = this.user
      const id = Math.floor(Math.random() * 10000)
      return {
        id: id,
        category: '',
        organiser: this.username,
        title: '',
        description: '',
        date: '',
        time: '',
        attendees: [user]
      }
    }
  }
}
</script>

<style scoped>

</style>
