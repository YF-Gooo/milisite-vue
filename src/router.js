import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from  './views/About.vue'
import SignIn from  '@/components/user/SignIn.vue'
import SignUp from  '@/components/user/SignUp.vue'
import PostPhoto from  '@/components/photo/PostPhoto.vue'
import ShowPhoto from  '@/components/photo/ShowPhoto.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        components: {
          content: Home,
        },
        meta: {
          title: 'MILI-Site | 喵站',
          keepAlive: true
        }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        content: About,
      },
      meta: {
        title: '关于我 | 资深云爹妈'
      }
    },
    {
      path: '/postPhoto',
      name: 'postPhoto',
      components: {
        content: PostPhoto,
      },
    },
    {
      path: '/photo/:photoID',
      name: 'showPhoto',
      components: {
        content: ShowPhoto,
      },
      meta: {
        title: 'MILI-Site | 喵站',
      }
    },
    {
      path: '/signin',
      name: 'signin',
      components: {
        content: SignIn,
      },
      meta: {
        title: '登录 | 资深云爹妈'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: {
        content: SignUp,
      },
      meta: {
        title: '注册 | 资深云爹妈'
      }
    }
  ]
})
