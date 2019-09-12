<template>
  <div class="home shadow">
    <div class="content-area">
      <h1 class="main-header">Добро пожаловать!</h1>
      Вас приветствует сервис онлайн-тренировок "Sportify".
      <div class="circle-nav-buttons">
        <router-link to="/where-to-begin">
          <div class="circle-link-button flex btn1 shadow">
            <div class="button-text underline">
              <span>С чего начать?</span>
            </div>
          </div>
        </router-link>
        <router-link to="/need-to-know">
          <div class="circle-link-button flex btn2 shadow">
            <div class="button-text underline">
              <span>Нужно знать</span><br>
              <span>перед тренировкой</span>
            </div>
          </div>
        </router-link>
        <router-link to="/statistic">
          <div class="circle-link-button flex btn3 shadow">
            <div class="button-text underline">
              <span>Статистика</span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="flex icon-container">
        <span>
          Для полноценной тренировки на все группы мышц
          не нужен абонемент в спортзал, тренажёры и свободные веса.
          Всё, что вам понадобится — <br>
          <u>ваше тело</u>.
        </span>
        <div class="icon-wrapper">
          <router-link :to="{ name: 'Training'}">
            <play-icon color="#ff9900"/>
            <span>Начать!</span>
          </router-link>
        </div>
      </div>

      <div class="test-invitation flex">
        Хотите узнать уровень своей физической подготовки?
        Наш тест поможет вам сделать это!
        <div class="button-wrap">
          <router-link :to="{name: 'Step0'}">
            <div class="link-button flex shadow">Начать тест</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from "./svg/PlayIcon"
export default {
  name: 'home',
  components: {
    PlayIcon
  }
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
  overflow-x: hidden;
}

.content-area{ padding: 3vh 2vw; }

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
  width: 0;
  height: 2px;
  background-color: black;
  transition: .5s;
}

.underline span:hover::before{
  width: 100%;
  left: 0;
}

.button-text,
.underline span,
.underline span::before,
.icon-container span,
.icon-wrapper{
  z-index: 10;
}

.button-text::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: solid 2px;
  border-radius: 50%;
  transition: .5s;
  opacity: 0;
}

.button-text::after{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
.circle-link-button:hover{
  cursor: pointer;
  box-shadow:
  0 6px 6px 0 rgba(60,64,67,.2),
  0 6px 6px 6px rgba(60,64,67,.2);
  color: black;
}

.link-button:hover{ transform: translateY(-5px); }
.circle-link-button:hover{ transform: rotate(360deg); }

.circle-nav-buttons{
  display: flex;
  justify-content: space-around;
  margin: 10vh 3vw 0;
}

.circle-link-button{
  width: 20vw;
  height: 20vw;
  font-size: 25px;
  text-align: center;
  border-radius: 50%;
  position: relative;
  transition: .5s;
}

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

.circle-link-button:hover:before{
  background-color: #ff9900;
  opacity: 0.7;
}

.button-wrap{ padding: 0 50px 0; }
.test-invitation{ justify-content: space-around; }

.link-button{
  background-color: green;
  width: 500px;
  height: 90px;
  font-size: 25px;
  border-radius: 6px;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container{
  position: relative;
  justify-content: flex-end;
  width: 96vw;
  margin: 10vh -2vw 3vh;
  background-image: url("../assets/home/banner.png");
  background-size: cover;
}

.icon-container > span{
  position: absolute;
  left: 15vh;
  width: 35%;
  color: white;
  font-size: 2.5vw;
  text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
  cursor: default;
}

.icon-wrapper{
  width: 20vw;
  height: 20vw;
  margin: 10vh 15vh;
  position: relative;
}

.icon-wrapper span{
  position: absolute;
  top: 11vw;
  left: 2vw;
  font-size: 4vw;
  color: #ff9900;
  z-index: 10;
  transform: rotateZ(-29deg);
  cursor: pointer;
}
.icon-wrapper,
.icon-wrapper svg,
.icon-wrapper span{ transition: .5s; }
.icon-wrapper:hover span{ color: black; }
.icon-wrapper:hover{ transform: scale(1.1); }

</style>
