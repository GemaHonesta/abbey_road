// Page de router entre les pages:
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Payment from '../views/Payment.vue'
import Description from '../views/Description.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
   {
     path: '/payment',
     name: 'Payment',
     component: Payment
   }, 

   {
     path: '/description',
     name: 'Description',
     component: Description
   }



  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router