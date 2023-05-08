<template>
  <footer
    id="footer"
    class="p-b-safe-4 fixed bottom-0 left-0 w-full bg-white py-4"
  >
    <div class="container mx-auto h-full px-8">
      <ul class="flex h-full items-center justify-between">
        <li v-for="item in navItems" :key="item.name">
          <router-link :to="{ name: item.name, params: {} }">
            <i class="t2ico text-2xl" :class="item.icon"></i>
          </router-link>
        </li>
      </ul>
      <div
        data-circle
        class="absolute left-1/2 top-0 -translate-x-1/2 transform bg-dark-light"
      ></div>
    </div>
    <div
      class="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full bg-primary text-white"
      @click="gotoRoute"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { NAV_BOTTOM_ITEMS } from "../constants/index";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    function gotoRoute() {
      router.push({ name: "new-transaction", params: {} });
    }

    return { navItems, gotoRoute };
  },
};
</script>

<style lang="css" scoped>
footer#footer > div.container > div[data-circle] {
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
