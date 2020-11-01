import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状態管理パターン
export default new Vuex.Store({
  state: {
    count: 0,
    bad_count: 0,
    isLogin : false,
    myCognito : null,
    cognito_user_session : null
  },
  mutations: {
    increment (state){
      state.count++
    },
    increment_bad (state){
      state.bad_count++
    },
    doLogin(state, cognito_user_session){
      state.isLogin = true
      console.log('setCognito start')    
      state.cognito_user_session = cognito_user_session      
    },
    setCognito(state, cognito){
      state.myCognito = cognito
    },
    logoutCognito(state){
      state.myCognito.logout()
      state.isLogin = false
      state.myCognito = null
    }
  },
  //非同期処理を行う場合 backendとの通信など
  actions: {
  },
  modules: {
  }
})
