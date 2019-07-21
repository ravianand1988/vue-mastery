<template>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <router-link to="/">
      <v-toolbar-title class="white--text">Vue-Mastery Course</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <div id="nav">
      <router-link :to="{name: 'events'}">All Events!!</router-link>
      |
      <router-link :to="{name: 'event-create'}">Create Event</router-link>
      |
      <router-link :to="{name: 'user', params:{username:'ravi'}}">Rav</router-link>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Toolbar'
}
</script>

<style scoped>

</style>
