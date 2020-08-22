import Vue from "vue";
import VueRouter from "vue-router";
import FollowTemplate from "../components/followTemplate/FollowTemplate";

const Login = () => import('pages/login/Login')
const Register = () => import('pages/register/Register')
const Desktop = () => import('pages/desktop/Desktop')
const Collect = () => import('components/fileList/Collect')
const Create = () => import('components/fileList/Create')
const Team = () => import('components/fileList/Team')
const Message = () => import('components/message/Message')
const CommentMessage = () => import('components/message/Comments')
const NoticeMessage = () => import('components/message/Notice')
const Trash = () => import('components/fileList/Trash')
const Recent = () => import('components/fileList/Recent')
const File = () => import('components/fileEdit/File')

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
    component: Desktop,
    children: [
      {
        path: '',
        redirect: 'create'
      },
      {
        path: 'recent',
        component: Recent
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
      },
      {
        path: 'trash',
        component: Trash
      },
      {
        path: 'edit',
        component: File
      },
      {
        path: 'followTeamplate',
        component: FollowTemplate
      },
      {
        path: 'message',
        component: Message,
        children: [
          {
            path: '',
            redirect: 'comment'
          },
          {
            path: 'comment',
            component: CommentMessage
          },
          {
            path: 'notice',
            component: NoticeMessage
          }
        ]
      }
    ]
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router