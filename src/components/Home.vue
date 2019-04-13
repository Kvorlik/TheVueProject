<template>
  <div class="home">
    <Header/>
    <div class="home-content">Home page</div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.home-content{
  height: 1000px;
  margin: -40vh 30px 0;
  border-radius: 6px;
  box-shadow:
  0 16px 24px 2px rgba(0,0,0,.14),
  0 6px 30px 5px rgba(0,0,0,.12),
  0 8px 10px -5px rgba(0,0,0,.2);
  background: #fff;
  position: relative;
}
</style>
