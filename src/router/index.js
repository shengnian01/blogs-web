import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/view/homepage'
import head from '@/view/head'
import java from '@/view/java'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/homepage'
    },
    {
      path: '/homepage',
      redirect:'/head',
      name:'homepage',
      component: homepage,
      children:[

         {
         path:'/java',
         name:'java',
         component:java

         },
         {
            path:'/head',
            name:'head',
            component:head
          }
      ]
    },

  ]
})
