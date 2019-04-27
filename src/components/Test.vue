<template>
  <div class="test shadow">
    <h1 class="main-header" v-if="frameShow < 4">Подготовка к тренировке</h1>
    <h1 class="main-header" v-if="frameShow == 4">Результаты</h1>
    <div class="frame" v-if="frameShow == 0">
      Выберите ваш пол:
      <div class="wrapper">
        <div class="container" :class="{ shadow: isSelected != 'man', selected: isSelected == 'man' }" @click="genderChoice('man')">
          <img src="@/assets/test/Man.png">
          <div class="link-button shadow offset">Мужской</div>
        </div>
        <div class="container" :class="{ shadow: isSelected != 'woman', selected: isSelected == 'woman' }" @click="genderChoice('woman')">
          <img src="@/assets/test/Woman.png">
          <div class="link-button shadow offset">Женский</div>
        </div>
      </div>
    </div>

    <div class="frame" v-if="frameShow == 1">
      Введите ваш возраст:<br>
      <input type="text" v-model="stats.age"><br>
      Рост:<br>
      <input type="text" v-model="stats.height"><br>
      И вес:<br>
      <input type="text" v-model="stats.weight"><br>
    </div>

    <div class="frame" v-if="frameShow == 2">
      third frame
    </div>
    <div class="frame" v-if="frameShow == 3">
      fourth frame
    </div>
    <div class="frame" v-if="frameShow == 4">
      result frame
    </div>
    <div class="link-button shadow" v-if="frameShow < 4" @click="frameShow++">Далее</div>
    <div class="link-button shadow" v-if="frameShow == 4" @click="end">Закончить</div>
    <button type="button" @click="debug">Debug</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      frameShow: 0,
      isSelected: 0,
      stats: {
        gender: 0,
        age: 0,
        height: 0,
        weight: 0
      }
    }
  },
  methods: {
    debug() {
      console.log(this.stats);
    },
    genderChoice(value) {
      this.isSelected = value;
      this.stats.gender = value;
    },
    end() {
      // Действия с Firebase
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>
  .test{
    height: 90vh;
    margin: -90vh 25vw 0;
    border-radius: 6px;
    background: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 25px;
  }

  .shadow{
    box-shadow:
    0 3px 3px 0 rgba(60,64,67,.08),
    0 3px 3px 3px rgba(60,64,67,.16);
    transition: 0.2s;
  }

  .main-header{
    text-align: center;
    margin-top: 0;
    letter-spacing: normal;
    font-weight: bold;
  }

  .selected{
    box-shadow:
    0 0px 6px 6px rgba(255,167,38,.6),
    0 0px 6px 6px rgba(255,167,38,.6);
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
    color: white;
  }

  .offset{
    margin: -10px;
  }

  .wrapper{
    display: flex;
    justify-content: space-around;
    margin: 50px 0 50px;
  }

  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 30px 50px;
    margin: 0 50px 0;
  }
</style>
