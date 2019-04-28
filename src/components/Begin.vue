<template>
  <div class="begin shadow">
    <div class="content-area">
      <h1 class="header">С чего начать?</h1>
      <p class="p">Для того, чтобы начать пользоваться нашим сервисом, вам необходимо знать свои:</p>
      <div class="block">
        <div class="box">
          <img src="../assets/begin/growth.png">
          <br>Рост
        </div>
        <div class="box">
          <img src="../assets/begin/pulse.png">
          <br>Пульс
        </div>
        <div class="box">
          <img src="../assets/begin/age.png">
          <br>Возраст
        </div>
        <div class="box">
          <img src="../assets/begin/weight.png">
          <br>Вес
        </div>
      </div>
      <p class="p">
        Также рекомендуется использовать
        <span>фитнес-трекер</span>
        для контроля изменения состояния своего организма в процессе тренировок.
      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.box{
  text-align: center;
}

.block{
  display: flex;
  justify-content: center;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
}

span{
  color: #ff9900;
}

img {
  width: 60%;
  height: 90%;
}

.begin{
  min-height: 90vh;
  margin: -90vh 2vw 0;
  border-radius: 6px;
  background: #fff;
  position: relative;
  font-size: 20px;
}

.shadow{
  box-shadow:
  0 3px 3px 0 rgba(60,64,67,.08),
  0 3px 3px 3px rgba(60,64,67,.16);
  transition: 0.2s;
}

.p{
  margin: 0 50px 0;
  padding: 30px 0 30px;
}

.header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.content-area{
  margin: 0 50px 0;
  padding: 30px 0 30px;
}
</style>
