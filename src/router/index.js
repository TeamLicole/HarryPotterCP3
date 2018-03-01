import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import hufflepuff from '@/components/hufflepuff'
import slytherin from '@/components/slytherin'
import ravenclaw from '@/components/ravenclaw'
import gryffindor from '@/components/gryffindor'

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
	    name: 'hufflepuff',
	    component: hufflepuff
	  },
    {
	    path: '/slytherin',
	    name: 'slytherin',
	    component: slytherin
	  },
    {
	    path: '/ravenclaw',
	    name: 'ravenclaw',
	    component: ravenclaw
	  },
    {
	    path: '/gryffindor',
	    name: 'gryffindor',
	    component: gryffindor
	  }
  ]
})
