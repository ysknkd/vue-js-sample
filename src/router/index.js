import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Tweets from '../components/Tweets'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tweets',
      component: Tweets
    }
  ]
})
