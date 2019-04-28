<template>
  <div class="notfound shadow">

    <div class="menu">
      <div class="nav1">
        <router-link to="/">
          <div class="nav1-wrap">
            <img src="@/assets/void/firebase_logo-black.png"/>
            :/ Sportify
          </div>
        </router-link>
      </div>
      <div class="nav-blank"/>
    </div>

    <div class="controls">
      Страница не существует
      <div class="nav-buttons">
        <div class="button-wrap">
          <div class="link-button shadow" @click="goHome">Главная</div>
        </div>
        <div class="button-wrap">
          <div class="link-button shadow" @click="goBack">Назад</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' })
    },
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.notfound{
  height: 100vh;
  background: #fff;
  background-image: url("../assets/void/404.png");
  background-size: cover;
  background-position-y: 70%;
  font-size: 25px;
  color: #fff;
}

.menu {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 8vh;
  margin-top: 1vh;
}

.nav1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2vw 0;
  font-size: 18px;
}

.nav1-wrap{
  background-color: rgba(255,255,255,.4);
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px 0 10px 0;
}

.nav1-wrap img{
  width: 32px;
}

.nav-blank {
  flex-grow: 1;
}

.button-wrap{
  padding: 20px;
}

.nav-buttons{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  color: white;
}

.shadow{
  box-shadow:
  0 3px 3px 0 rgba(60,64,67,.08),
  0 3px 3px 3px rgba(60,64,67,.16);
  transition: .2s;
}

.link-button:hover{
  cursor: pointer;
  box-shadow:
  0 3px 6px 0px rgba(255,3,3,.5),
  0 3px 6px 6px rgba(255,3,3,.6);
  color: black;
  transform: translateY(-5px);
}

.link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff9900;
  width: 200px;
  height: 50px;
  font-size: 18px;
  border-radius: 6px;
}

.controls{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
}
</style>
