<template>
  <void-layout :background="voidBackground">
    <span class="center-content">404</span>

    <spacer/>

    <div class="controls">
      Страница не существует
      <div class="nav-buttons">
        <regular-button :href="routes.HOME">
          Главная
        </regular-button>
        <regular-button @clicked="$router.go(-1)">
          Назад
        </regular-button>
      </div>
    </div>
  </void-layout>
</template>

<script>
import { VoidLayout } from '@/views';
import VoidBackground from '@/views/backgrounds/void-background.jpg';
import { RegularButton, Spacer } from '@/components';
import { ROUTES } from '@/common/constants'

export default {
  name: 'VoidPage',
  components: {
    VoidLayout,
    RegularButton,
    Spacer
  },
  data() {
    return {
      voidBackground: VoidBackground
    }
  },
  computed: {
    routes() {
      return {...ROUTES};
    }
  }
}
</script>

<style scoped lang="css" src="./VoidPage.css"/>