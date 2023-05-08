<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold text-gray-400">Email</span>
            <input
              id="email"
              class="mt-1 rounded-lg border border-gray-100 px-4 py-3"
              type="email"
              placeholder="example@gmail.com"
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold text-gray-400">Password</span>
            <input
              id="password"
              class="mt-1 rounded-lg border border-gray-100 px-4 py-3"
              type="password"
              placeholder="example"
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="w-full bg-primary py-3 text-center font-bold text-white"
          >
            Sign In
          </button>
          <button
            v-else
            type="button"
            class="w-full cursor-not-allowed bg-gray-800 py-3 text-center font-bold text-white"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Start: Error -->
      <div class="mt-4 text-left text-red" v-if="error">
        <span>{{ error }}</span>
      </div>
      <!-- Start: Direction -->
      <div class="mt-6 w-full text-center">
        <span class="font-semibold">I'm new user.</span>
        <span class="m-1">
          <router-link
            :to="{ name: 'register', params: {} }"
            class="font-bold text-primary"
            >Sign Up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "../composables/useSignIn";

export default {
  setup() {
    const router = useRouter();
    const { error, isPending, signin } = useSignIn();
    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signin(email.value, password.value);
      if (!error.value) {
        router.push({ name: "profile", params: {} });
      }
    }
    return {
      email,
      password,
      error,
      isPending,
      onSubmit,
    };
  },
};
</script>
