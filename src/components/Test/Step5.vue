<template>
  <div>
    Измерьте гибкость:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/flexibility.png">
      <div class="frame-text">
        Наклонитесь вперед с касанием отметки ниже или выше нулевой точки.
      </div>
      <input type="text" v-model="flexibility" placeholder="Значение гибкости, см" id="autofocus">
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
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changeFlexibility', this.flexibility);
  }
}
</script>

<style scoped src="./styles.css"></style>
