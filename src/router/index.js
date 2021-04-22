// Page de router entre les pages:
import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Payment from '../views/Payment.vue'
import Description from '../views/Description.vue'
import Map from '../views/Map.vue'
import DescriptionPage from '../views/DescriptionPage'
import PricePage from '../views/PricePage'
import PaymentPage from '../views/PaymentPage'
import HomePage from '../views/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  },
   {
     path: '/payment',
     name: 'Payment',
     component: Payment,
     meta: {
      title: 'Payement'
    }
   }, 
   {
     path: '/description',
     name: 'Description',
     component: Description,
     meta: {
       title: 'Description'
     }
   },
   {
    path: '/descriptionpage',
    name: 'DescriptionPage',
    component: DescriptionPage,
    meta: {
      title: 'DescriptionPage'
    }
  },
  {
    path: '/pricepage',
    name: 'PricePage',
    component: PricePage,
    meta: {
      title: 'PricePage'
    }
  },
  {
    path: '/paymentpage',
    name: 'PaymentPage',
    component: PaymentPage,
    meta: {
      title: 'PaymentPage'
    }
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
    meta: {
      title: 'HomePage'
    }
  },
   {
     path: '/map',
     name: 'Map',
     component: Map,
     meta: {
       title: 'Map'
     }
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

router.beforeEach((to, from, next) => {
  window.document.title = to.meta && to.meta.title ? to.meta.title : 'Abbay Road';
  next();
})

export default router