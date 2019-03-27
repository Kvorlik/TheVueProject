<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
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

* {
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: normal;
  letter-spacing: normal;
}

a {
  text-decoration: none;
  outline: 0;
  color: white;
}
</style>
