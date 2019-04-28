<template>
  <div class="home shadow">
    <div class="content-area">
      <h1 class="main-header">Добро пожаловать!</h1>
      Вас приветствует сервис онлайн-тренировок "Sportify".
      <div class="circle-nav-buttons">
        <router-link to="/where-to-begin">
          <div class="circle-link-button btn1 shadow">
            <div class="button-text underline">
              <span>С чего начать?</span>
            </div>
          </div>
        </router-link>
        <router-link to="/need-to-know">
          <div class="circle-link-button btn2 shadow">
            <div class="button-text underline">
              <span>Нужно знать</span><br>
              <span>перед тренировкой</span>
            </div>
          </div>
        </router-link>
        <router-link to="/progress">
          <div class="circle-link-button btn3 shadow">
            <div class="button-text underline">
              <span>Узнать достижения</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="big-button-wrap">
        <router-link to="/training">
          <div class="big-link-button shadow">
            <div class="big-button-text underline">
              <span>Начать тренировку</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="test-invitation">
        Хотите узнать уровень своей физической подготовки?
        Наш тест поможет вам сделать это!
        <div class="button-wrap">
          <router-link to="/test">
            <div class="link-button shadow">Начать тест</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.home{
  min-height: 90vh;
  margin: -40vh 2vw 0;
  border-radius: 6px;
  background: #fff;
  position: relative;
  font-size: 20px;
}

.content-area{
  margin: 0 50px 0;
  padding: 30px 0 30px;
}

.main-header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.btn1{background-image: url("../assets/home/button1.jpg");}
.btn2{background-image: url("../assets/home/button2.jpg");}
.btn3{background-image: url("../assets/home/button3.jpg");}
.btn1, .btn2, .btn3{
  background-size: cover;
}

.underline span{
  text-decoration: none;
  position: relative;
}

.underline span::before{
  content: '';
  bottom: 0;
  right: 0;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: black;
  transition: .5s;
}

.underline span:hover::before{
  width: 100%;
  left: 0;
}

.button-text,
.big-button-text,
.underline span,
.underline span::before{
  z-index: 10;
}

.button-text::before{
  content: '';
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border: solid 2px;
  border-radius: 50%;
  transition: .5s;
  opacity: 0;
}

.button-text::after{
  content: '';
  position: absolute;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border: solid 2px;
  border-radius: 50%;
  transition: .5s;
  opacity: 0;
}

.button-text:hover:before{
  opacity: 1;
  transform: scale(0.9);
}

.shadow{
  box-shadow:
  0 3px 3px 0 rgba(60,64,67,.08),
  0 3px 3px 3px rgba(60,64,67,.16);
  transition: .2s;
}

.link-button:hover,
.big-link-button:hover,
.circle-link-button:hover{
  cursor: pointer;
  box-shadow:
  0 6px 6px 0 rgba(60,64,67,.2),
  0 6px 6px 6px rgba(60,64,67,.2);
  color: black;
}

.link-button:hover{
  transform: translateY(-5px);
}

.circle-link-button:hover{
  transform: rotate(360deg);
}

.circle-nav-buttons{
  display: flex;
  justify-content: space-around;
  margin: 100px 50px 100px;
}

.circle-link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 20vw;
  font-size: 25px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  transition: .5s;
}

.big-link-button::before,
.circle-link-button::before{
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  border-radius: 50%;
  transition: .5s;
}

.big-link-button:hover:before,
.circle-link-button:hover:before{
  background-color: #ff9900;
  opacity: 0.7;
}

.big-link-button::before{
  border-radius: 6px;
}

.button-wrap{
  padding: 0 50px 0;
}

.test-invitation{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 500px;
  height: 90px;
  font-size: 25px;
  border-radius: 6px;
}

.big-button-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px 50px;
}

.big-link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 40vh;
  font-size: 50px;
  border-radius: 6px;
  background-image: url("../assets/home/start.jpg");
  background-size: cover;
  background-position-y: 50%;
  position: relative;
}
</style>
