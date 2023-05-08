<template>
  <div>
    <div class="home">Home</div>
    <div v-if="user" class="mt-6">{{ user.displayName }}</div>
  </div>
</template>

<script>
import { useUser } from "../composables/useUser";

export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
