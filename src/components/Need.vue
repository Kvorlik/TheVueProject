<template>
  <div class="need shadow">
    <div class="content-area">
      <h1 class="header p">Нужно знать перед тренировкой</h1>
      <p>Для получения максимального эффекта от тренировок без нанесения вреда своему здоровью <b>необходимо</b>: </p>

      <ul>
        <img src="../assets/need/checked.png">Определить цель тренировок<br>
        <img src="../assets/need/checked.png">Выбирать нагрузку исходя из своих физических возможнойстей<br>
        <img src="../assets/need/checked.png">Во время тренировок не допускать физических перегрузок<br>
        <img src="../assets/need/checked.png">Ознакомиться с <span style="color: #ff8c00;">кривой дозы-эффекта</span>, отражающей зависимость эффективности тренировки от физических нагрузок<br>
        <img src="../assets/need/checked.png">Выбрать соответствующий рацион питания<br>
        <img src="../assets/need/checked.png">Определить частоту и продолжительность тренировок<br>
      </ul>

      <p>В процессе тренировок <b>нельзя</b>:</p>
      <ul>
        <img src="../assets/need/cross.png">Пить много воды (более 2-х литров в день)<br>
        <img src="../assets/need/cross.png">Идти на тренировку голодным<br>
        <img src="../assets/need/cross.png">Пренебрегать разминкой<br>
      </ul>
      <div class="flex">
        <div class="link-button shadow" @click="$router.go(-1)">Назад</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'need',
  created() {
    window.scrollTo({top: 0});
  }
}
</script>

<style scoped>
img {
  width: 25px;
  height: 25px;
}

.need{
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
  background-color: #ff9900;
  width: 200px;
  height: 50px;
  font-size: 18px;
  border-radius: 6px;
  color: white;
}

.p{
  margin: 0 50px 0;
  padding: 0 0 30px;
}

.header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.content-area{
  min-height: 90vh;
  position: relative;
  margin: 0 50px 0;
  padding: 30px 0 30px;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
