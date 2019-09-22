<template>
    <div class="test-layout">
        <full-screen-background :background="background"/>
        <div class="content-area">
          <nav-bar/>
          <main
            class="content"
            :class="{
              'wrist-background': contentBackground.wristBackground,
              'forest-background': contentBackground.forestBackground
            }"
          >
            <slot/>
          </main>
        </div>
        <common-footer/>
    </div>
</template>

<script>
import { FullScreenBackground, NavBar, CommonFooter } from '@/components';
export default {
    name: 'TestLayout',
    props: {
      background: String,
      contentBackground: Object
    },
    components: {
      FullScreenBackground,
      NavBar,
      CommonFooter
    }
}
</script>

<style scoped lang="css" src="./TestLayout.css"/>