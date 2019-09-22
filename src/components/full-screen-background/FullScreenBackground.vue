<template>
  <div class="background" :style="getBackground"/>
</template>

<script>
export default {
  name: 'FullScreenBackground',
  props: {
    background: String
  },
  computed: {
    getBackground() {
      return 'backgroundImage: url(' + this.background + ')';
    }
  }
}
</script>

<style scoped lang="css" src="./FullScreenBackground.css">