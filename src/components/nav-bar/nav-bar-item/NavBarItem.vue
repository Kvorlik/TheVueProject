<template>
  <div class="nav-item underline">
    <router-link :to="href">
      <span><slot/></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    href: String
  }
}
</script>

<style scoped lang="css" src="./NavBarItem.css"/>