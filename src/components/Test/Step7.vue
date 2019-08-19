<template>
  <div>
    Измерьте динамическую силу:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/jump.png">
      <div align="justify">
        Испытуемый стоит боком к стене рядом с вертикально закрепленной измерительной шкалой
        (ученическая линейка длиной 1 м). Не отрывая пяток от пола, он как можно выше касается
        шкалы поднятой вверх более активной рукой. Затем он отходит от стены на расстояние от 15 до 30 см,
        не делая шага, прыгает вверх, отталкиваясь двумя ногами. Более активной рукой он касается измерительной
        шкалы как можно выше. Разница между значениями первого и второго касания характеризует высоту прыжка.
        Дается три попытки, засчитывается лучшая.
      </div>
      <input type="text" v-model="strength" placeholder="Значение ДС, см">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      strength: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeStrength', this.strength);
  }
}
</script>

<style scoped src="./styles.css"></style>
