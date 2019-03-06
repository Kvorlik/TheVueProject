<template>
  <div id="app">
    This is from App.vue <br>
    <img alt="Vue logo" src="./assets/logo.png">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
