import { createStore } from 'vuex'

import { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'charon',
      age: 18
    }
  },
  mutations: {
    changeName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalInfo')
}

export default store
