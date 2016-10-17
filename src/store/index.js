import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const logger = store => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    // called after every mutation.
    // The mutation comes in the format of { type, payload }.
    // console.log(mutation);
    // console.log(state);
  })
}

const store = new Vuex.Store({
  state: {
    posts: [
      { id: '0.b82q7lhna4', title: 'json-server', author: 'typicode', content: '123' },
      { id: '0.16qh65otjqo', title: 'aa', author: 'abc', content: '456' },
      { id: '0.u7qvv0rqr0g', title: 'bb', author: 'abc', content: '789' }
    ]
  },

  actions: {
    addPost({ commit }, post) {
      commit('ADD_POST', post)
    }
  },

  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post)
    }
  },

  plugins: [logger]
})


export default store

