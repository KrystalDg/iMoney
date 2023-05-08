<template>
  <header id="header" class="py-8">
    <div class="max-auto container px-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="mr-2 h-10 w-10 overflow-hidden rounded-full"
          >
            <img
              class="h-auto w-full object-cover"
              size="sm"
              src="../assets/images/avatar.jpg"
              alt="User Avatar"
            />
          </div>
          <h1 class="text-xl font-bold text-dark">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <router-link :to="{ name: 'notification', params: {} }">
                <i class="t2ico t2ico-notification text-xl"></i>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
