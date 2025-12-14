import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import SignupPage from '../views/SignupPage.vue'
import ContactUsPage from '../views/ContactUsPage.vue'
import auth from "../auth";
import LogIn from "../views/LogIn.vue";
import PostPage from "../views/PostPage.vue";
import AddPostPage from "../views/AddPostPage.vue";

const routes = [
  
  { path: '/signup', component: SignupPage },
  {path: "/login",component: LogIn,},
  { path: '/contact', component: ContactUsPage },
  { path: "/posts/new", component: AddPostPage, meta: { requiresAuth: true }},
  { path: "/", component: LandingPage, meta: { requiresAuth: true }},
  { path: "/posts/:id", component: PostPage, meta: { requiresAuth: true }},
  { path: "/posts/", component: PostPage, meta: { requiresAuth: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) return next();

  try {
    const ok = await auth.authenticated();
    if (!ok) return next("/login");
    next();
  } catch (err) {
    next("/login");
  }
});


export default router;
