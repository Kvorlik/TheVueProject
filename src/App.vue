<template>
  <div id="app">
    <Header/>
    <MainWindow/>
    <Footer/>
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
  background-color: #eeeeee;
}

h1, h2, h3, h4, h5, h6, body, span {
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: 300;
}

#app {

}
</style>
