import Vue from 'vue'
import Vuex from 'vuex'
import { getItem,setItem } from '@/utils/strong'
Vue.use(Vuex)
const localKey = "localkey"
export default new Vuex.Store({
  state: {
    user: getItem(localKey)
  },
  getters: {
  },
  mutations: {
    upData(state, data) {
      state.user = data
      setItem(localKey,data)
    }
  },
  actions: {
  },
  modules: {
  }
})
