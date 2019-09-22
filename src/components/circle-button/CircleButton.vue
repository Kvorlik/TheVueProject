<template>
  <router-link :to="href">
    <div class="circle-link-button flex shadow" :style="getBackground">
      <div class="button-text underline">
        <span>
          <slot/>
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CircleButton',
  props: {
    href: String,
    background: String
  },
  computed: {
    getBackground() {
      return 'backgroundImage: url(' + this.background + ')';
    }
  }
}
</script>

<style scoped lang="css" src="./CircleButton.css"/>