<template>
  <footer>
    <div class="container">
      <div>
        &#169; 2019, made by dream team for OmSU
      </div>

      <div class="links">
        <square-logo href="https://github.com/Kvorlik/sportify" :src="github"/>
        <square-logo href="https://ru.vuejs.org/index.html" :src="vue"/>
        <square-logo href="https://firebase.google.com/" :src="firebase"/>
      </div>
    </div>
  </footer>
</template>

<script>
import SquareLogo from '../square-logo/SquareLogo';
import { GithubLogo, VueLogo, FirebaseLogo } from './images'

export default {
  name: 'CommonFooter',
  components: {
    SquareLogo
  },
  data() {
    return {
      github: GithubLogo,
      vue: VueLogo,
      firebase: FirebaseLogo
    }
  }
}
</script>

<style scoped lang="css" src="./CommonFooter.css"/>