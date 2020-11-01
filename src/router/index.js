import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../components/MainView.vue'

//storeにアクセスするために必要
import store from '../store'

//
import mylogin from '../views/Login'
import mycontents from '../views/MyContents'
import mycontents2 from '../views/MyContents2'
import mycontents3 from '../views/MyContents3'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'my-main',
    redirect: '/login', //初めのページへリダイレクト
    component: MainView,
    children:[
      {
        path: '/login',
        name: 'login',
        component: mylogin
      },      
      {
        path: '/album1',
        name: 'mycontents',
        component: mycontents,
        meta: { requiresAuth: true } //loginしている必要がある
      },
      {
        path: '/album2',
        name: 'mycontents2',
        component: mycontents2,
        meta: { requiresAuth: true } //loginしている必要がある        
      },
      {
        path: '/album3',
        name: 'mycontents3',
        component: mycontents3,
        meta: { requiresAuth: true } //loginしている必要がある        
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: { requiresAuth: true }, //loginしている必要がある
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

router.beforeEach((to, from, next) => {
  //if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
  console.log("store.state.isLogin: " + store.state.isLogin)
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isLogin) {    
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});

export default router
