import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "../configs/firebase";

const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  console.log("Before enter router: ", user);
  if (!user) {
    console.log("User is not logged in");
    next({ name: "login", params: {} });
  } else next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: () => import("../views/IndexView.vue"),
      name: "home",
      path: "/",
      meta: {
        text: "Home",
        leading: true,
        isShowFooter: true,
      },
    },
    {
      component: () => import("../views/RegisterView.vue"),
      meta: {
        layout: "auth",
      },
      name: "register",
      path: "/register",
    },
    {
      component: () => import("../views/LoginView.vue"),
      meta: {
        layout: "auth",
      },
      name: "login",
      path: "/login",
    },
    {
      component: () => import("../views/LogoutView.vue"),
      name: "logout",
      path: "/logout",
    },
    {
      component: () => import("../views/ProfileView.vue"),
      name: "profile",
      path: "/profile",
      meta: {
        text: "Profile",
        leading: false,
        isShowFooter: true,
      },
      beforeEnter: requireAuth,
    },
    {
      component: () => import("../views/ReportView.vue"),
      name: "report",
      path: "/report",
      meta: {
        text: "Report",
        leading: true,
        isShowFooter: true,
      },
    },
    {
      component: () => import("../views/BudgetView.vue"),
      name: "budget",
      path: "/budget",
      meta: {
        text: "Budget",
        leading: true,
        isShowFooter: true,
      },
    },
    {
      component: () => import("../views/NewTransactionView.vue"),
      name: "new-transaction",
      path: "/new-transaction",
      meta: {
        text: "New Transaction",
        leading: false,
        isShowFooter: false,
      },
    },
    {
      component: () => import("../views/NotificationView.vue"),
      name: "notification",
      path: "/notification",
      meta: {
        text: "Notification",
        leading: true,
        isShowFooter: true,
      },
    },
  ],
});

export default router;
