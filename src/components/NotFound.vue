<template>
  <div class="notfound">
    <Header/>
    <div class="notfound-content">
      Упс! Похоже что-то пошло не так.
      <div class="el1">
        404
      </div>
      Страница не найдена
      <div class="nav-buttons">
        <div class="link-button">
          <router-link to="/" class="in-text-link">Главная</router-link>
        </div>
        <div class="link-button">
          <router-link to="/" class="in-text-link">Назад</router-link>
        </div>
      </div>
      <img src="@/assets/404.png" class="ufo"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'notfound',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
.notfound-content{
  height: 90vh;
  margin: -90vh 30px 0;
  border-radius: 6px;
  box-shadow:
  0 16px 24px 2px rgba(0,0,0,.14),
  0 6px 30px 5px rgba(0,0,0,.12),
  0 8px 10px -5px rgba(0,0,0,.2);
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #3c4858;
}

.el1{
  font-size: 300px;
  color: #3c4858;
}

.ufo{
  height: 70vh;
  position: absolute;
  left: 5%;
}

.nav-buttons{
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa726;
  width: 200px;
  height: 50px;
  font-size: 18px;
  border-radius: 6px;
  margin: 20px;
}
</style>
