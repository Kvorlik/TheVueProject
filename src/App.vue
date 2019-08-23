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

.swal-button--confirm{
  background-color: #ff9900;
}

.swal-button--confirm:not([disabled]):hover{
  background-color: #ff9900;
  color: black;
}

.swal-text{
  font-size: 20px;
}
</style>
