<template>
  <h1>Logout Page</h1>
</template>

<script>
import { useRouter } from "vue-router";
import { useSignOut } from "../composables/useSignOut";

export default {
  setup() {
    const router = useRouter();
    const { error, signout } = useSignOut();
    async function onSignOut() {
      await signout();
      if (!error.value) {
        router.push({ name: "login", params: {} });
      }
    }
    onSignOut();
    return {};
  },
};
</script>
