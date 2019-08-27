<template>
  <div class="test shadow" :class="{ wristbg: isStepTwo, forestbg: isResultStep }">
    <div class="progressbar"/>
    <div class="content-area">
      <h1 class="main-header" v-if="$route.name != 'Result'">Подготовка к тренировке</h1>
      <h1 class="main-header" v-if="$route.name === 'Result'">Результаты</h1>

      <router-view/>

      <div class="flex">
        <div class="link-button shadow flex" v-if="$route.name != 'Result'" @click="$store.dispatch('isFilled', $route.name)">Далее</div>
        <div class="link-button shadow flex" v-if="$route.name === 'Result'" @click="$store.dispatch('end')">Закончить</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isStepTwo: false,
      isResultStep: false
    }
  },
  mounted() {
    window.scrollTo({top: 0});
    document.querySelector('.content-area').addEventListener('keypress', e => {
      if (e.keyCode === 13) this.$store.dispatch('isFilled', this.$route.name);
    });
  },
  beforeUpdate() {
    this.isStepTwo = (this.$route.name === 'Step2') ? true : false;
    this.isResultStep = (this.$route.name === 'Result') ? true : false;
  },
  watch: {
    $route: () => window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
</script>

<style scoped src="./styles.css"></style>
