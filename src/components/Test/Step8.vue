<template>
  <div>
    Выносливость:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/legs.jpg">
      <div class="frame-text">
        Подсчитывается максимальная частота поднимания
        прямых ног до угла 90° за 20 секунд.
      </div>
      <input type="text" v-model="rate" placeholder="Количество выполнений">
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
