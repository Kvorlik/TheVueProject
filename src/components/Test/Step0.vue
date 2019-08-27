<template>
  <div>
    Выберите ваш пол:
    <div class="wrapper flex">
      <div class="container flex"
          :class="{
            shadow: this.$store.getters.getState.isSelected !== 'man',
            selected: this.$store.getters.getState.isSelected === 'man'
            }"
          @click="$store.dispatch('genderChoice', 'man')">
        <img src="@/assets/test/Man.png">
        <div class="link-button shadow offset flex">Мужской</div>
      </div>
      <div class="container flex"
          :class="{
            shadow: this.$store.getters.getState.isSelected !== 'woman',
            selected: this.$store.getters.getState.isSelected === 'woman'
            }"
          @click="$store.dispatch('genderChoice', 'woman')">
        <img src="@/assets/test/Woman.png">
        <div class="link-button shadow offset flex">Женский</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('initFlush');
  }
}
</script>

<style scoped src="./styles.css"></style>
