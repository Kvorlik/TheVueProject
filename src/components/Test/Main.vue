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
  beforeUpdate() {
    this.isStepTwo = (this.$route.name === 'Step2') ? true : false;
    this.isResultStep = (this.$route.name === 'Result') ? true : false;
  }
}
</script>

<style scoped src="./styles.css"></style>
