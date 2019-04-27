<template>
  <div class="header" v-if="showComponent">
    <div class="menu">
      <div class="nav1">
        <router-link to="/">
          <div class="nav1-wrap">
            <img src="@/assets/firebase_logo.png"/>
            :/ Sportify
          </div>
        </router-link>
      </div>
      <div class="nav-blank"/>
      <div class="nav2">
        <router-link to="/about">О нас</router-link>
      </div>
      <div class="nav3">
        <router-link to="/login">Вход</router-link>
        <span>&nbsp;//&nbsp;</span>
        <router-link to="/register">Регистрация</router-link>
      </div>
    </div>

    <div class="titles" v-if="showTitles">
      <div class="headertitle">Sportify</div>
      <div class="headersubtitle">"Спорт - это жизнь"</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTitles: true,
      showComponent: true
    }
  },
  methods: {
    check(val) {
      if (val == '/') {
        this.showTitles = true;
      }
      else this.showTitles = false;
      if (val == '/void') {
        this.showComponent = false;
      }
      else this.showComponent = true;
    },
  },
  beforeMount: function () { this.check(this.$route.path); },
  watch: {
    $route: function () { this.check(this.$route.path); }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
.header {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/head-background.jpg");
  background-size: cover;
  background-position-y: 100%;
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 8vh;
  margin-top: 1vh;
}

.nav1, .nav2, .nav3 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px 0;
  color: white;
  font-size: 18px;
}

.nav1-wrap{
  background-color: red;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px 0 10px 0;
}

.nav1 img{
  width: 32px;
}

.nav-blank {
  flex-grow: 1;
}

.titles {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  color: white;
  text-shadow:
  0 15px 102.86px rgba(0,0,0,.7),
  0 15px 40.02px rgba(0,0,0,.21);
  width: 900px;
  position: relative;
}

.headertitle {
  font-weight: bold;
  font-size: 100px;
}

.headersubtitle {
  right: 0px;
  font-size: 25px;
  font-family: 'Pacifico', cursive;
}

</style>
