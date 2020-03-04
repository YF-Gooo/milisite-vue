import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from  './views/About.vue'
import Index from '@/components/index/Index'
import NarBar from '@/components/header/NavBar.vue'
import Footer from '@/components/footer/Footer'
import SignIn from  '@/components/user/SignIn.vue'
import SignUp from  '@/components/user/SignUp.vue'
import PostImage from  '@/components/image/PostImage.vue'
import ShowImage from  '@/components/image/ShowImage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/',
    component: Index,
    children: [
    {
        path: '/',
        name: 'home',
        components: {
          header: NarBar,
          content: Home,
          footer: Footer
        },
        meta: {
          title: 'MILI-Site | 喵站'
        }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        header: NarBar,
        content: About,
        footer: Footer
      },
      meta: {
        title: '关于我 | 资深云爹妈'
      }
    },
    {
      path: '/postImage',
      name: 'postImage',
      components: {
        header: NarBar,
        content: PostImage,
        footer: Footer
      },
    },
    {
      path: '/image/:imageID',
      name: 'showImage',
      components: {
        header: NarBar,
        content: ShowImage,
        footer: Footer
      },
    },
    {
      path: '/signin',
      name: 'signin',
      components: {
        header: NarBar,
        content: SignIn,
        footer: Footer
      },
      meta: {
        title: '登录 | 资深云爹妈'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      components: {
        header: NarBar,
        content: SignUp,
        footer: Footer
      },
      meta: {
        title: '注册 | 资深云爹妈'
      }
    }
  ]
}
]
})
