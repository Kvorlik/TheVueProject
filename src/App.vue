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
@import url('https://fonts.googleapis.com/css?family=Exo+2');
body {
  margin: 0px;
  padding: 0px;
  background-color: #eeeeee;
}

* {
  /* font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: normal;
  letter-spacing: normal; */
  /* font-family: 'Raleway', 'RalewayOffline', sans-serif;
  font-weight: 500;
  letter-spacing: 2px; */
  /* font-family: 'Comfortaa', cursive; */
  font-family: 'Exo 2', sans-serif;
}

*::selection {
  background: transparent;
}

*, *:before, *:after {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  outline: 0;
  color: white;
}
</style>
