<template>
  <div>
    Измерьте гибкость:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/flexibility.jpg">
      <div align="justify">
        Стоя на ступеньке с выпрямленными в коленях ногами, выполняется наклон вперед с
        касанием отметки ниже или выше нулевой точки.
      </div>
      <input type="text" v-model="flexibility" placeholder="Значение гибкости, см">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flexibility: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeFlexibility', this.flexibility);
  }
}
</script>

<style scoped src="./styles.css"></style>
