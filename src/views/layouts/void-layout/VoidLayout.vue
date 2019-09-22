<template>
    <div class="void-layout">
        <full-screen-background :background="background"/>
        <div class="content-area">
          <nav-bar/>
          <main class="content">
            <slot/>
          </main>
        </div>
        <common-footer/>
    </div>
</template>

<script>
import { FullScreenBackground, NavBar, CommonFooter } from '@/components';
export default {
    name: 'VoidLayout',
    props: {
      background: String
    },
    components: {
      FullScreenBackground,
      NavBar,
      CommonFooter
    }
}
</script>

<style scoped lang="css" src="./VoidLayout.css"/>