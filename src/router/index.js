import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home.vue'
import Detail from '@/pages/detail.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods/detail',
    name: 'Detail',
    component: Detail
  }
];

const router = new Router({
  mode: 'history',
  routes: routes
});
//导出Router对象
export default router;
