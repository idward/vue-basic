// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource';
//加载依赖
Vue.use(vueResource);

Vue.config.productionTip = false

Vue.filter('dTofixed',function (value) {
  return Number(value).toFixed(2);
});
Vue.filter('dCurrency',function (value) {
  return '\u00A5 ' + value;
});

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // render:h => h(App)
});

// debugger;
