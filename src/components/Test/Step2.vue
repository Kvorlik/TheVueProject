<template>
  <div>
    Введите окружность самого тонкого<br>места на запястье:
    <div class="flex column-flex frame2">
      <input type="text" v-model="circle" placeholder="Окружность, см">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circle: null
    }
  },
  beforeUpdate() {
    this.$store.dispatch('changeCircle', this.circle);
  }
}
</script>

<style scoped src="./styles.css"></style>
