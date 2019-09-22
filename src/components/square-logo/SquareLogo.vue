<template>
  <div class="logo">
    <a :href="href" target="_blank">
      <img :src="src"/>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SquareLogo',
  props: {
    href: String,
    src: String
  }
}
</script>

<style scoped>
  .logo img {
    width: 32px;
    margin: 10px 10px 0;
  }
</style>