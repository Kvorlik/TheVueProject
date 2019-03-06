<template>
  <div id="app">
    <Header msg="This is msg 1"/>
    <MainWindow msg="This is msg 2"/>
    <Footer msg="This is msg 3"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MainWindow from './components/MainWindow.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    MainWindow,
    Footer
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: #efefef;
}
#app {

}
</style>
