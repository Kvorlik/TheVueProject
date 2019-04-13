<template>
  <div class="header">
    <div class="menu">
      <div class="nav1">
        <router-link to="/">
          <div class="nav1-wrap">
            <img src="@/assets/firebase_logo.png"/>
            <div class="nav1-text">
              :/ Sportify
            </div>
          </div>
        </router-link>
      </div>
      <div class="nav-blank"/>
      <div class="nav2"><router-link to="About">О нас</router-link></div>
      <div class="nav3"><router-link to="Login">Вход</router-link> // <router-link to="Register">Регистрация</router-link></div>
    </div>

    <div class="titles">
      <div class="headertitle">Sportify</div>
      <div class="headersubtitle">Спорт - это жизнь</div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

<style scoped>
div::selection {
  background: transparent;
}

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
  margin-top: 30px;
}

.nav1, .nav2, .nav3 {
  margin: 0 30px 0;
  color: white;
  font-size: 20px;
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

.nav1-text{
  color: black;
  font-size: 25px;
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
}

.headertitle {
  font-weight: bold;
  font-size: 100px;
}

.headersubtitle {
  font-size: 25px;
  font-style: italic;
}

</style>
