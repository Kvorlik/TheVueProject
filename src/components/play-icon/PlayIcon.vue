<template>
  <svg
    :fill="color"
    enable-background="new 0 0 415.346 415.346"
    version="1.1"
    viewBox="0 0 415.346 415.346"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg">

    <path
      d="m41.712 415.35c-11.763 0-21.3-9.537-21.3-21.3v-372.75c0-11.763
        9.537-21.299 21.3-21.299l346.12 191.7s15.975 15.975 0 31.951c-15.975
        15.974-346.12 191.7-346.12 191.7z"/>
  </svg>
</template>

<script>
export default {
  name: 'playIcon',
  props: {
    color: String
  }
}
</script>
