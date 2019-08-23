<template>
  <div>
    Введите окружность самого тонкого<br>места на запястье:
    <div class="flex column-flex frame2">
      <input type="text" v-model="circle" placeholder="Окружность, см" id="autofocus">
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
  mounted() {
    document.querySelector('#autofocus').focus();
  },
  beforeUpdate() {
    this.$store.dispatch('changeCircle', this.circle);
  }
}
</script>

<style scoped src="./styles.css"></style>
