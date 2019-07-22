import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingStatus: false,
    todos: [],
    events: [],
    user: { id: 1, name: 'Ravi Anand' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'food',
      'education',
      'community'
    ],
    count: 0
  },
  mutations: {
    SET_LOADING_STATUS (state, status) {
      state.loadingStatus = status
    },
    SET_TODOS (state, todos) {
      state.todos = todos
    },
    INCREMENT_COUNT (state, num) {
      state.count += num
    },
    ADD_EVENT (state, event) {
      state.events.push(event)
    }
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(d => d.status === 'done')
    },
    activeTodosCount (state, getters) {
      return state.todos.length - getters.doneTodos.length
    },
    getTodoById: state => id => {
      return state.todos.find(d => d.id === id)
    }
  },
  actions: {
    fetchToDos (context) {
      context.commit('SET_LOADING_STATUS', true)
      api.getTodos()
        .then(response => {
          context.commit('SET_LOADING_STATUS', false)
          context.commit('SET_TODOS', response.data)
        })
    },
    updateCount ({ state, commit }, value) {
      commit('INCREMENT_COUNT', value)
    },
    createEvent ({ state, commit }, event) {
      api.addEvent(event)
        .then(response => {
          commit('ADD_EVENT', event)
        })
        .catch(error => {
          throw error
        })
    }
  }
})
