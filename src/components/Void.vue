<template>
  <div class="notfound shadow">
    Упс! Похоже что-то пошло не так.
    <div class="el1">
      404
    </div>
    Страница не найдена
    <div class="nav-buttons">
      <div class="button-wrap">
        <div class="link-button shadow" @click="goHome">Главная</div>
      </div>
      <div class="button-wrap">
        <div class="link-button shadow" @click="goBack">Назад</div>
      </div>
    </div>
    <img src="@/assets/404.png" class="ufo"/>
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
  height: 90vh;
  margin: -90vh 2vw 0;
  border-radius: 6px;
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
  font-size: 250px;
  color: #3c4858;
}

.ufo{
  width: 30vw;
  position: absolute;
  left: 5%;
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
  transition: 0.2s;
}

.link-button:hover{
  cursor: pointer;
  box-shadow:
  0 6px 6px 0 rgba(60,64,67,.2),
  0 6px 6px 6px rgba(60,64,67,.2);
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
}
</style>
