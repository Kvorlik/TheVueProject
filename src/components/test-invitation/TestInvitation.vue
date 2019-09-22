<template>
  <div class="icon-container" :style="getBackground">
    <span>
      <slot/>
    </span>
    <div class="icon-wrapper">
      <router-link :to="routes.TEST">
        <play-icon color="#ff9900"/>
        <span>Начать!</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { PlayIcon } from '@/components';
import { ROUTES } from '@/common/constants';

export default {
  name: 'TestInvitation',
  props: {
    background: String
  },
  components: {
    PlayIcon
  },
  computed: {
    routes() {
      return { ...ROUTES };
    },
    getBackground() {
      return 'backgroundImage: url(' + this.background + ')';
    }
  }
}
</script>

<style scoped lang="css" src="./TestInvitation.css"/>