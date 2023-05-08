<template>
  <div>
    <!-- Start: Info -->
    <div class="row" v-if="user">
      <div class="container mx-auto p-8">
        <div class="text-center">
          <div class="mx-auto h-24 w-24 overflow-hidden rounded-full">
            <img
              src="../assets/images/avatar.jpg"
              alt="User's Profile Avatar"
              class="w-ful h-auto object-cover"
              size="xs"
            />
          </div>
          <div class="mt-3 text-2xl font-bold text-primary">
            {{ user.displayName }}
          </div>
          <p class="semibold mt-1 text-gray-400">{{ user.email }}</p>
        </div>
      </div>
    </div>
    <!-- Start: Menu -->
    <div class="row">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1">
          <div class="col-span-1">
            <h3 class="text-xl font-bold text-primary">General</h3>
          </div>
        </div>
        <div class="grid grid-cols-1">
          <div class="col-span-1">
            <ul>
              <li
                v-for="(option, index) in profileOptions"
                :key="option.name"
                :class="{ 'text-red': index === profileOptions.length - 1 }"
              >
                <router-link
                  :to="option.route"
                  class="flex items-center justify-between py-3"
                >
                  <div class="flex items-center text-left">
                    <i class="t2ico text-2xl" :class="option.icon"></i>
                    <h5 class="semibold ml-3">{{ option.name }}</h5>
                  </div>
                  <div class="text-right">
                    <i class="t2ico t2ico-arrow-right"></i>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useUser } from "../composables/useUser";
import { PROFILE_OPTIONS } from "../constants/index";
export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const profileOptions = reactive(PROFILE_OPTIONS);

    return { profileOptions, user };
  },
};
</script>
