import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//'admin-lte'から必要なものをimportする
//jqueryのロードのために必要
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'admin-lte'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/jquery/jquery.min.js'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
