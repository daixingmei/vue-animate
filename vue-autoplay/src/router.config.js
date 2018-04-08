import Home from './components/home.vue'
import User from './components/user.vue'

export default {
  routes: [
    { path: '/home', component: Home },
    { path: '/user', component: User },
    { path: '*', redirect: '/home' }
  ]
}
