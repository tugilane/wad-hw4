import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'
import auth from "../auth";
import LogIn from "../views/LogIn.vue";

const routes = [
  {
        path: "/",
        name: "home",
        component: LandingPage,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult) {
                next('/login')
            } else {
                next();
            }
        }
    },
  { path: '/signup', component: SignupPage },
  {path: "/login",component: LogIn,},
  { path: '/contact', component: ContactUsPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
