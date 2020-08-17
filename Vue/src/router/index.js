import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import('pages/login/Login')
const Register = () => import('pages/register/Register')
const Desktop = () => import('pages/desktop/Desktop')
const Collect = () => import('components/fileList/Collect')
const Create = () => import('components/fileList/Create')
const Team = () => import('components/fileList/Team')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/desktop'
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
    component: Desktop,
    children: [
      {
        path: '',
        redirect: 'collect'
      },
      {
        path: 'collect',
        component: Collect
      },
      {
        path: 'create',
        component: Create
      },
      {
        path: 'team',
        component: Team
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router