<template>
  <div class="header">
    This is from Header.vue
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
