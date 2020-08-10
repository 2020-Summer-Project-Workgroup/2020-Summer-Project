import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import('views/login/Login')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router