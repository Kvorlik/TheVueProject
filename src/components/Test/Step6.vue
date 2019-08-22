<template>
  <div>
    Быстрота:
    <div class="flex column-flex frame-picture">
      <img src="@/assets/test/rapidity.png">
      <div class="frame-text">
        Задача: как можно быстрее большим и указательным пальцами схватить падающую сверху линейку.
      </div>
      <input type="text" v-model="rapidity" placeholder="Показатель быстроты, см">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rapidity: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeRapidity', this.rapidity);
  }
}
</script>

<style scoped src="./styles.css"></style>
