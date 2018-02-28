import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Hufflepuff from '@/components/hufflepuff'
import Slytherin from '@/components/slytherin'
import Ravenclaw from '@/components/ravenclaw'
import Gryffindor from '@/components/gryffindor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
	    path: '/hufflepuff',
	    name: 'Hufflepuff',
	    component: Hufflepuff
	  },
    {
	    path: '/slytherin',
	    name: 'Slytherin',
	    component: Slytherin
	  },
    {
	    path: '/ravenclaw',
	    name: 'Ravenclaw',
	    component: Ravenclaw
	  },
    {
	    path: '/gryffindor',
	    name: 'Gryffindor',
	    component: Gryffindor
	  }
  ]
})
