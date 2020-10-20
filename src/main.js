import Vue from 'vue'


import App from './App'

import 'font-awesome/css/font-awesome.css'

import './config/bootstrap'
import './config/clipboard'
import './config/inputMask'
import './config/msgs'
import './config/axios'
import './config/mq'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')