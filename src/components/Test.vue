<template>
  <div class="test shadow">
    <div class="content-area">
      <h1 class="main-header" v-if="frameShow < 4">Подготовка к тренировке</h1>
      <h1 class="main-header" v-if="frameShow == 4">Результаты</h1>
      <div class="frame" v-if="frameShow == 0">
        Выберите ваш пол:
        <div class="wrapper flex">
          <div class="container flex" :class="{ shadow: isSelected != 'man', selected: isSelected == 'man' }" @click="genderChoice('man')">
            <img src="@/assets/test/Man.png">
            <div class="link-button shadow offset flex">Мужской</div>
          </div>
          <div class="container flex" :class="{ shadow: isSelected != 'woman', selected: isSelected == 'woman' }" @click="genderChoice('woman')">
            <img src="@/assets/test/Woman.png">
            <div class="link-button shadow offset flex">Женский</div>
          </div>
        </div>
      </div>
      <div class="frame" v-if="frameShow == 1">
        Введите ваши данные:
        <div class="flex">
          <div class="container flex input-container square-input">
            <img src="../assets/test/img1.png">
            <div class="label flex">
              <span>Возраст</span>
            </div>
            <input type="text" v-model="stats.age" placeholder="Лет">
          </div>
          <div class="container flex input-container square-input">
            <img src="../assets/test/img2.png">
            <div class="label flex">
              <span>Рост</span>
            </div>
            <input type="text" v-model="stats.height" placeholder="См">
          </div>
          <div class="container flex input-container square-input">
            <img src="../assets/test/img3.png">
            <div class="label flex">
              <span>Вес</span>
            </div>
            <input type="text" v-model="stats.weight" placeholder="Кг">
          </div>
        </div>
      </div>
      <div class="frame" v-if="frameShow == 2">
        Введите окружность самого тонкого места на запястье:
        <div class="flex column-flex frame2">
          <img src="../assets/test/hand.png">
          <input type="text" v-model="stats.circle" placeholder="Окружность, см">
        </div>
      </div>
      <div class="frame" v-if="frameShow == 3">
        Измерьте частоту сердечных сокращений (пульс) в состоянии покоя.
        Для правилного измерения ЧСС ознакомьтесь с
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <!-- TODO: Не забыть поменять ссылку на боевом -->
          <span class="painted">инструкцией</span>
        </a>.
        <div class="flex column-flex frame3">
          <img src="../assets/test/img4.png">
          <input type="text" v-model="stats.pulse" placeholder="Пульс, уд/мин">
        </div>
      </div>
      <div class="frame" v-if="frameShow == 4">
        <div class="wrapper flex relative">
          <div class="container flex shadow frame4">
            <span>Ваш идеальный вес:&nbsp;</span>
            <span class="painted result">{{ idealWeiht() }}</span>
          </div>
          <div class="container flex shadow frame4">
            <span>Допустимый диапозон изменения пульса:&nbsp;</span>
            <span class="painted result">{{ pulseRange() }}</span>
          </div>
          <div class="container flex shadow frame4">
            <span>Тип телосложения:&nbsp;</span>
            <span class="painted">{{ bodyType() }}</span>
          </div>
        </div>
        <div class="wrapper">
          <div class="flex">
            <span>У вас&nbsp;</span>
            <span class="painted">{{ weightType() }}</span>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="link-button shadow flex" v-if="frameShow < 4" @click="isFilled(frameShow)">Далее</div>
        <div class="link-button shadow flex" v-if="frameShow == 4" @click="end">Закончить</div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: 'test',
  data() {
    return {
      frameShow: 0,
      isSelected: 0,
      stats: {
        gender: "",
        age: null,
        height: null,
        weight: null,
        circle: null,
        pulse: null
      }
    }
  },
  methods: {
    genderChoice(value) {
      this.isSelected = value;
      this.stats.gender = value;
    },
    isFilled(value) {
      switch (value) {
        case 0:
          if (this.stats.gender == "man" || this.stats.gender == "woman") { this.frameShow++; }
          else { alert("Выберите пол."); }
          break;
        case 1:
          if (this.stats.age != null &&
              this.stats.height != null &&
              this.stats.weight != null) { this.frameShow++; }
          else { alert("Необходимо заполнить все поля."); }
          break;
        case 2:
          if (this.stats.circle != null) { this.frameShow++; }
          else { alert("Необходимо ввести окружность."); }
          break;
        case 3:
          if (this.stats.pulse != null) { this.frameShow++; }
          else { alert("Необходимо ввести пульс"); }
          break;
        default:
          alert('Error. frameShow = ' + this.frameShow)
      }
    },
    end() {
      db.collection("user-statistics").add({
        gender: this.stats.gender,
        age: this.stats.age,
        height: this.stats.height,
        weight: this.stats.weight,
        circle: this.stats.circle,
        pulse: this.stats.pulse
      }).then(() => {
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        throw new Error(err)
      })
    },
    idealWeiht() {
      let res = null;

      if (this.stats.age < 40) {
        res = this.stats.height - 110;
      }
      else res = this.stats.height - 100;
      return res;
    },
    bodyType() {
      let res = null;

      if (this.stats.gender == "man") {
        if (this.stats.circle < 18){
          res = "астенический (тонкокостный)";
        }
        if (this.stats.circle >= 18 && this.stats.circle <= 20){
          res = "мормостенический (нормальный)";
        }
        if (this.stats.circle > 20){
          res = "гиперстеничесий (ширококостный)";
        }
      }
      else {
        if (this.stats.circle < 15){
          res = "астенический (тонкокостный)";
        }
        if (this.stats.circle >= 15 && this.stats.circle <= 17){
          res = "мормостенический (нормальный)";
        }
        if (this.stats.circle > 17){
          res = "гиперстенический (ширококостный)";
        }
      }
      return res;
    },
    weightType() {
      let res = null;
      let index = (this.stats.weight / ((this.stats.height * 0.01)^2));

      if (index < 18.5) {
        res = "дефицит массы";
      }
      if (index >= 18.5 && index <= 24.9) {
        res = "нормальная масса";
      }
      if (index >= 25 && index <= 29.9) {
        res = "предожирение";
      }
      if (index >= 30 && index <= 34.9) {
        res = "ожирение первой степени";
      }
      if (index >= 35 && index <= 39.9) {
        res = "ожирение второй степени";
      }
      if (index >= 40) {
        res = "ожирение третьей степени";
      }
      return res;
    },
    pulseRange() {
      let peak = null;
      let min = null;
      let max = null;
      let age = parseInt(this.stats.age);
      let pulse = parseInt(this.stats.pulse);

      if (this.stats.gender == "man") {
        peak = ((((205 - 0.5 * age) - pulse) * 70) / 100) + pulse;
      }
      else {
        peak = ((((220 - age) - pulse) * 60) / 100) + pulse;
      }
      min = (peak - (0.06 * peak));
      max = (peak + (0.06 * peak));
      return parseInt(min) + ' - ' + parseInt(max);
    }
  }
}
</script>

<style scoped>
.test{
  min-height: 90vh;
  margin: -90vh 20vw 0;
  border-radius: 6px;
  background: #fff;
  background-image: url("../assets/test/back.jpg");
  background-position-y: 35vh;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  font-size: 20px;
}

.content-area{
  margin: 0 50px 0;
  padding: 30px 0 30px;
}

.shadow{
  box-shadow:
  0 3px 3px 0 rgba(60,64,67,.08),
  0 3px 3px 3px rgba(60,64,67,.16);
  transition: .2s;
}

.main-header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.selected{
  box-shadow:
  0 0px 6px 6px rgba(255,153,0,.6),
  0 0px 6px 6px rgba(255,153,0,.6);
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
  background-color: #ff9900;
  width: 200px;
  height: 50px;
  font-size: 18px;
  border-radius: 6px;
  color: white;
}

.offset{
  margin-top: -10px;
}

.wrapper{
  margin: 40px 0 50px;
}

.container{
  flex-direction: column;
  border-radius: 6px;
  padding: 30px 50px;
  margin: 0 2.5vw 0;
  background-color: white;
}

.input-container{
  margin: 0;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.column-flex{
  flex-direction: column;
}

.square-input input[type="text"]{
  width: 150px;
  height: 150px;
  font-size: 50px;
}

input[type="text"]{
  border: 1px solid #aaa;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
}

.input-container img{
  width: 50px;
  height: 50px;
}

.frame2 img{
  height: 50vh;
  margin: 2vh;
}

.frame3 img{
  height: 50vh;
}

.frame4{
  margin: 0 2vw 0;
  width: calc(88vw / 3);
  min-height: 200px;
  min-width: 200px;
  padding: 0 0.5vw 0;
  font-size: 25px;
  text-align: center;
}

.label{
  box-sizing: content-box;
  margin-top: 1vh;
  margin-bottom: -20px;
  background-color: #ff9900;
  color: white;
  width: 120px;
  border-radius: 10px;
  border-left: 4px solid white;
  border-right: 4px solid white;
  z-index: 999;
}

.painted{
  color: #ff9900;
}

.result{
  font-size: 40px;
  vertical-align: middle;
}

.relative{
  position: relative;
}
</style>
