<template>
  <div>
    Введите ваши данные:
    <div class="flex">
      <div class="container flex input-container square-input">
        <img src="@/assets/test/img1.png">
        <div class="label flex">
          <span>Возраст</span>
        </div>
        <input type="text" v-model="stats.age" placeholder="Лет" id="autofocus">
      </div>
      <div class="container flex input-container square-input">
        <img src="@/assets/test/img2.png">
        <div class="label flex">
          <span>Рост</span>
        </div>
        <input type="text" v-model="stats.height" placeholder="См">
      </div>
      <div class="container flex input-container square-input">
        <img src="@/assets/test/img3.png">
        <div class="label flex">
          <span>Вес</span>
        </div>
        <input type="text" v-model="stats.weight" placeholder="Кг">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stats: {
        age: null,
        height: null,
        weight: null
      }
    }
  },
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changeAgeHeightWeight', this.stats);
  }
}
</script>

<style scoped src="./styles.css"></style>
