<template>
  <div>
    Измерьте скоростную выносливость:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/legs.jpg">
      <div align="justify">
        Подсчитывается максимальная частота поднимания прямых ног до угла 90°
        из положения лежа на спине за 20 секунд.
      </div>
      <input type="text" v-model="rate" placeholder="Значение СВ, раз">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rate: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeRate', this.rate);
  }
}
</script>

<style scoped src="./styles.css"></style>
