<template>
  <v-container class="text-xs-left">
    <h1>all Todos</h1>
    <v-form>
      <ul v-for="todo in todos" :key="todo.id">
        <li>{{todo.title}}</li>
      </ul>
    </v-form>
    <v-divider></v-divider>
    <v-form>
      <h2>Done Todos</h2>
      <ul v-for="todo in doneTodos" :key="todo.id">
        <li>{{todo.title}}</li>
      </ul>
    </v-form>
    <v-divider/>
    <v-label>There are {{activeTodosCount}} todos</v-label>
    <p class="mt-3">{{getTodoById(2)}}</p>
    <v-text-field v-model.number="num"></v-text-field>
    <v-btn @click="incrementCount">Increment Count {{count}}</v-btn>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Todos',
  computed: {
    ...mapState(['todos', 'count']),
    ...mapGetters(['doneTodos', 'activeTodosCount', 'getTodoById'])
  },
  created () {
    this.$store.dispatch('fetchToDos')
  },
  data () {
    return {
      num: ''
    }
  },
  methods: {
    incrementCount () {
      this.$store.dispatch('updateCount', this.num)
    }
  }
}
</script>

<style scoped>

</style>
