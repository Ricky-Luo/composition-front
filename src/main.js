import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import '@openfonts/noto-sans-sc_chinese-simplified'
// import '@fontsource/noto-sans-sc'
import "@fontsource/ma-shan-zheng"

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
