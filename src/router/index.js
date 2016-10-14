import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../views/Blog'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/blog', component: Blog }
  ]
})

