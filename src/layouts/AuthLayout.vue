<template>
  <div>
    <navigation-brand />
    <slot />
  </div>
</template>

<script>
import NavigationBrand from "../components/NavigationBrand.vue";
export default {
  components: {
    NavigationBrand,
  },
};
</script>
