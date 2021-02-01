import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'

// 引入全局css样式控制文件
import '@/assets/css/global.css'

// 引入elementui
import ElementUI from 'element-ui'

// 引入axios
import '@/utils/axios'

// 注册
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
