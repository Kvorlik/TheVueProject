<template>
  <router-link :to="href">
      <button class="link-button" :style="getStyles">
        <slot/>
      </button>
    </router-link>
</template>

<script>
export default {
  name: 'RegularButton',
  props: {
    href: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    },
    fontSize: {
      type: Number,
      default: 18
    }
  },
  computed: {
    getStyles() {
      return 'width: ' + this.width + 'px; height: ' + this.height + 'px; font-size: ' + this.fontSize + 'px;'
    }
  }
}
</script>

<style scoped lang="css" src="./RegularButton.css"/>