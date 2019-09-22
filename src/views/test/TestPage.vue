<template>
  <test-layout
    :background="mainBackground"
    :content-background="{ wristBackground, forestBackground }"
  >
    <div class="test">
      <div class="progress-bar"/>
      <h1 class="main-header" v-if="$route.name != 'Result'">Подготовка к тренировке</h1>
      <h1 class="main-header" v-if="$route.name === 'Result'">Результаты</h1>

      <router-view/>

      <div class="flex">
        <div class="link-button shadow flex" v-if="$route.name != 'Result'" @click="$store.dispatch('isFilled', $route.name)">Далее</div>
        <div class="link-button shadow flex" v-if="$route.name === 'Result'" @click="$store.dispatch('end')">Закончить</div>
      </div>
    </div>
  </test-layout>
</template>

<script>
import { TestLayout } from '@/views';
import * as MainBackground from '@/views/backgrounds/main-background.jpg';

export default {
  name: 'TestPage',
  components: {
    TestLayout
  },
  data() {
    return {
      wristBackground: false,
      forestBackground: false,
      mainBackground: MainBackground
    }
  },
  mounted() {
    window.scrollTo({top: 0});
    document.querySelector('.content-area').addEventListener('keypress', e => {
      if (e.keyCode === 13) this.$store.dispatch('isFilled', this.$route.name);
    });
  },
  beforeUpdate() {
    this.wristBackground = (this.$route.name === 'Step2') ? true : false;
    this.forestBackground = (this.$route.name === 'Result') ? true : false;
  },
  watch: {
    $route: () => window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
</script>

<style scoped src="./styles.css"></style>
