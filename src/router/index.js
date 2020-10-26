import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../components/MainView.vue'

//
import mycontents from '../views/MyContents'
import mycontents2 from '../views/MyContents2'
import mycontents3 from '../views/MyContents3'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'my-main',
    redirect: '/album1', //初めのページへリダイレクト
    component: MainView,
    children:[
      {
        path: '/album1',
        name: 'mycontents',
        component: mycontents
      },
      {
        path: '/album2',
        name: 'mycontents2',
        component: mycontents2
      },
      {
        path: '/sample',
        name: 'mycontents3',
        component: mycontents3
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ x:0, y: 0 }),
  routes
})

export default router
