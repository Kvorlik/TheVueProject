<template>
  <div>
    Высота прыжка:
    <div class="flex column-flex frame-picture">
      <img src="./images/jump.png">
      <div class="frame-text">
        Стоя на месте, каснитесь шкалы поднятой вверх рукой.<br>
        Затем прыгните вверх и каснитесь измерительной шкалы как можно выше.<br>
        Разница между первым и вторым касаниями - высота вашего прыжка.
      </div>
      <input type="text" v-model="strength" placeholder="Высота, см" id="autofocus">
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
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changeStrength', this.strength);
  }
}
</script>

<style scoped src="./styles.css"></style>
