<template>
  <ul :class="{
    positive: marker.positive,
    negative: marker.negative
  }">
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'PositiveList',
  props: {
    marker: Object
  }
}
</script>

<style scoped lang="css" src="./UnorderedList.css"/>