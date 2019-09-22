<template>
  <common-layout :background="mainBackground">
    <div class="begin">
      <h1 class="header">С чего начать?</h1>
      Для того, чтобы начать пользоваться нашим сервисом, вам необходимо знать свои:
      <div class="icons">
        <div class="box">
          <img src="./images/growth.png">
          <br>Рост
        </div>
        <div class="box">
          <img src="./images/pulse.png">
          <br>Пульс
        </div>
        <div class="box">
          <img src="./images/age.png">
          <br>Возраст
        </div>
        <div class="box">
          <img src="./images/weight.png">
          <br>Вес
        </div>
      </div>
      <p>
        Также рекомендуется использовать
        <span>фитнес-трекер</span>
        для контроля изменения состояния своего организма в&nbsp;процессе тренировок.
      </p>
      <div class="flex">
        <regular-button :href="routes.TEST">Начать!</regular-button>
        <regular-button :href="routes.HOME">Назад</regular-button>
      </div>
    </div>
  </common-layout>
</template>

<script>
import { CommonLayout } from '@/views';
import * as MainBackground from '@/views/backgrounds/main-background.jpg';
import { RegularButton } from '@/components';
import { ROUTES } from '@/common/constants';

export default {
  name: 'BeginPage',
  components: {
    CommonLayout,
    RegularButton
  },
  data() {
    return {
      mainBackground: MainBackground
    }
  },
  computed: {
    routes() {
      return {...ROUTES};
    }
  },
  created() {
    window.scrollTo({top: 0});
  }
}
</script>

<style scoped>
.begin{
  min-height: 44rem;
  font-size: 20px;
}

.box{
  text-align: center;
}

.icons{
  display: flex;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  margin: 2em 0;
}

span{
  color: var(--orange);
}

img {
  width: 60%;
  height: 90%;
}

.link-button:hover{
  cursor: pointer;
  box-shadow:
  0 6px 6px 0 rgba(60,64,67,.2),
  0 6px 6px 6px rgba(60,64,67,.2);
  color: black;
  transform: translateY(-5px);
}

.link-button{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  width: 200px;
  height: 50px;
  font-size: 18px;
  border-radius: 6px;
  color: white;
}

.header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
