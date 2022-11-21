import Vue from 'vue'
import App from './App.vue'
import {Button, Input, Image, Radio, Upload, Row, Col, Dialog, Container, Main} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Input)
Vue.use(Image)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dialog)
Vue.use(Container)
Vue.use(Main)


Vue.prototype.$axios = axios


new Vue({
  el:"#app",
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
