<template>
  <router-link :to="{name:'event-detail', params:{id: event.id}}" class="">
    <v-card color="blue-grey darken-2" class="white--text my-4">
      <v-card-title primary-title>
        <div>
          <span>@{{event.time}} on {{event.date}}</span>
          <div class="headline">{{event.title}}</div>
          <span>{{event.description}}</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-btn flat dark>Going</v-btn>
        <v-btn flat dark>Not Going</v-btn>
        <base-icon>{{event.attendees.length}} attending</base-icon>
      </v-card-actions>
    </v-card>
  </router-link>
</template>

<script>

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
