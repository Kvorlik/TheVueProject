<template>
  <div>
    Измерьте величину артериального давления.
    Для правильного измерения ознакомьтесь с
    <a href="http://tiny.cc/u9686y" target="_blank">
      <span class="painted">инструкцией</span>
    </a>.
    <div class="flex column-flex frame-picture">
      <img src="./images/blood-pressure.png">
      <div class="flex column-flex">
        <input type="text" v-model="stats.systole" placeholder="Систола, мм рт.ст." id="autofocus">
        <input type="text" v-model="stats.diastole" placeholder="Диастола, мм.рт.ст.">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: {
        systole: null,
        diastole: null
      }
    }
  },
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changePressure', this.stats);
  }
}
</script>

<style scoped src="./styles.css"></style>
