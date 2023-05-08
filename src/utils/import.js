import { defineAsyncComponent } from "vue";
import { projectAuth } from "../configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

// kiem tra xem user da dang nhap hay chua
export let auth = projectAuth;
export const checkAuthState = onAuthStateChanged;

// dang ky component global
export function registerGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("../layouts/AuthLayout.vue"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("../layouts/DefaultLayout.vue"))
  );
}
