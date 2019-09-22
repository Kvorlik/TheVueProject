<template>
  <div class="logo">
    <router-link :to='home'>
      <img src="./main-logo.jpg" alt="Logo">
    </router-link>
  </div>
</template>

<script>
import { ROUTES } from "@/common/constants";
export default {
  name: 'MainLogo',
  computed: {
    home() {
      return ROUTES.HOME;
    }
  }
}
</script>

<style scoped lang="css" src="./MainLogo.css"/>