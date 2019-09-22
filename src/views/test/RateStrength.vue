<template>
  <div>
    Отжимания:
    <div class="flex column-flex frame-picture">
      <img src="./images/push-ups.png">
      <div class="frame-text">
        Расскажите, сколько вы отжимаетесь за 30 секунд? Женщины в упоре на коленях.
      </div>
      <input type="text" v-model="rateStrength" placeholder="Количество отжиманий" id="autofocus">
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
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changeRateStrength', this.rateStrength);
  }
}
</script>

<style scoped src="./styles.css"></style>
