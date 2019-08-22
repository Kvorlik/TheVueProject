<template>
  <div>
    Отжимания:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/push-ups.png">
      <div class="frame-text">
        Расскажите, сколько вы отжимаетесь за 30 секунд? Женщины в упоре на коленях.
      </div>
      <input type="text" v-model="rateStrength" placeholder="Количество отжиманий">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rateStrength: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeRateStrength', this.rateStrength);
  }
}
</script>

<style scoped src="./styles.css"></style>
