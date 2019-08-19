<template>
  <div>
    Измерьте пульс в состоянии покоя.
    Для правилного измерения ознакомьтесь с
    <a href="https://tiny.cc/a2686y" target="_blank">
      <span class="painted">инструкцией</span>
    </a>
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/img4.png">
      <input type="text" v-model="pulse" placeholder="Пульс, уд/мин">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pulse: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changePulse', this.pulse);
  }
}
</script>

<style scoped src="./styles.css"></style>
