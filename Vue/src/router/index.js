import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import('pages/login/Login')
const Register = () => import('pages/register/Register')
const Desktop = () => import('pages/desktop/Desktop')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/desktop',
    component: Desktop
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router