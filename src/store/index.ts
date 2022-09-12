import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, IStoreType } from './types'

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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store
