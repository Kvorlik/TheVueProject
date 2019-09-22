<template>
    <div class="common-layout">
        <full-screen-background :background="this.background"/>
        <div class="content-area">
          <nav-bar/>
          <main-titles v-if="showMainTitles"/>
          <main class="content">
            <slot/>
          </main>
        </div>
        <common-footer/>
    </div>
</template>

<script>
import { FullScreenBackground, NavBar, CommonFooter, MainTitles } from '@/components';
export default {
    name: 'CommonLayout',
    props: {
      showMainTitles: Boolean,
      background: String
    },
    components: {
      FullScreenBackground,
      NavBar,
      CommonFooter,
      MainTitles
    }
}
</script>

<style scoped lang="css" src="./CommonLayout.css"/>