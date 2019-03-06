<template>
  <div class="mainwindow">
    This is from MainWindow.vue
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
