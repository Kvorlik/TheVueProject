<template>
  <div>
    <div class="wrapper flex relative">
      <div class="container flex shadow frame10">
        <span>Ваш идеальный вес:&nbsp;</span>
        <span class="painted result">{{ idealWeight }}</span>
      </div>
      <div class="container flex shadow frame10">
        <span>Допустимый диапозон изменения пульса:&nbsp;</span>
        <span class="painted result">{{ pulseRange }}</span>
      </div>
      <div class="container flex shadow frame10">
        <span>Тип телосложения:&nbsp;</span>
        <span class="painted">{{ bodyType }}</span>
      </div>
    </div>

    <div class="result-strings">
      <div class="flex">
        <span>У вас&nbsp;</span>
        <span class="painted">{{ weightType }}</span>
      </div>
      <div class="flex">
        <span>Ваш уровень физической подготовки&nbsp;</span>
        <span class="painted">{{ physicalLevel }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      idealWeight: null,
      pulseRange: null,
      bodyType: null,
      weightType: null,
      physicalLevel: null,
    }
  },
  async beforeMount() {
    this.idealWeight = await this.$store.dispatch('idealWeight');
    this.pulseRange = await this.$store.dispatch('pulseRange');
    this.bodyType = await this.$store.dispatch('bodyType');
    this.weightType = await this.$store.dispatch('weightType');
    this.physicalLevel = await this.$store.dispatch('physicalLevel');
  }
}
</script>

<style scoped src="./styles.css"></style>
