import Vue from 'vue'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

Vue.config.productionTip = false

library.add(fas);

new Vue({
  render: h => h(App),
}).$mount('#app')
