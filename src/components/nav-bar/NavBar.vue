<template>
  <nav class="navbar">
    <main-logo id="first"/>
    <spacer/>
    <nav-bar-item :href="routes.ABOUT" id="second">О нас</nav-bar-item>
    <nav-bar-item :href="routes.REGISTER" id="third">Регистрация</nav-bar-item>
  </nav>
</template>

<script>
import { ROUTES } from "@/common/constants";
import MainLogo from '../main-logo/MainLogo';
import NavBarItem from '../nav-bar/nav-bar-item/NavBarItem';
import Spacer from '../spacer/Spacer';

export default {
  name: 'NavBar',
  components: {
    MainLogo,
    NavBarItem,
    Spacer
  },
  computed: {
    routes() {
      return { ...ROUTES };
    }
  }
}
</script>

<style scoped lang="css" src="./NavBar.css"/>