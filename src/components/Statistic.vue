<template>
  <div class="progress shadow">
    <div class="content-area">
      <h1 class="main-header">Статистика</h1>
      <div class="charts">
        <div class="chart">
          <h4>Тип телосложения</h4>
          <canvas class="body-type"/>
        </div>
        <div class="chart">
          <h4>Уровень физической подготовки</h4>
          <canvas class="physical-level"/>
        </div>
        <div class="link-button shadow" @click="goBack">Назад</div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Chart from 'chart.js';
export default {
  name: 'statistics',
  data(){
    return{
      results: [],
      bodyTypes: {
        thin: null,
        norm: null,
        thick: null
      },
      physicalLevels: {
        low: null,
        preMiddle: null,
        middle: null,
        upperMiddle: null,
        high: null
      }
    }
  },
  methods: {
    goBack() { this.$router.go(-1); },

    createBodyTypeGraph(){
      let target = document.querySelector(".body-type");
      new Chart(target, {
        type: 'doughnut',
        data: {
          labels: [
            'тонкокостный',
            'нормальный',
            'ширококостный'
          ],
          datasets: [{
            data: [
              this.bodyTypes.thin,
              this.bodyTypes.norm,
              this.bodyTypes.thick
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ]
          }]
        },
        responsive: true
      });
    },

    createPhysicalLevelGraph(){
      let target = document.querySelector(".physical-level");
      new Chart(target, {
        type: 'doughnut',
        data: {
          labels: [
            'низкий',
            'ниже среднего',
            'средний',
            'выше среднего',
            'высокий'
          ],
          datasets: [{
            data: [
              this.physicalLevels.low,
              this.physicalLevels.preMiddle,
              this.physicalLevels.middle,
              this.physicalLevels.upperMiddle,
              this.physicalLevels.high
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ]
          }]
        }
      });
    }
  },
  created(){
    db.collection('user-statistics').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let result = doc.data();
          result.id = doc.id;
          this.results.push(result);
        })
      })
      .then( () => {
        this.bodyTypes.thin = this.results.filter(result => result.figureType === "тонкокостный").length;
        this.bodyTypes.norm = this.results.filter(result => result.figureType === "нормальный").length;
        this.bodyTypes.thick = this.results.filter(result => result.figureType === "ширококостный").length;
        this.createBodyTypeGraph();
        this.physicalLevels.low = this.results.filter(result => result.physicalLvl === "низкий").length;
        this.physicalLevels.preMiddle = this.results.filter(result => result.physicalLvl === "ниже среднего").length;
        this.physicalLevels.middle = this.results.filter(result => result.physicalLvl === "средний").length;
        this.physicalLevels.upperMiddle = this.results.filter(result => result.physicalLvl === "выше среднего").length;
        this.physicalLevels.high = this.results.filter(result => result.physicalLvl === "высокий").length;
        this.createPhysicalLevelGraph();
      });
  }
}
</script>

<style scoped>
.progress{
  min-height: 90vh;
  margin: -90vh 2vw 0;
  border-radius: 6px;
  background: white;
  position: relative;
  font-size: 20px;
}

.shadow{
  box-shadow:
  0 3px 3px 0 rgba(60,64,67,.08),
  0 3px 3px 3px rgba(60,64,67,.16);
  transition: .2s;
}

.content-area{
  position: relative;
  padding: 3vh 2vw;
}

.main-header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.charts{
  display: grid;
  grid-template-areas:
    "graph1 graph2"
    "button button";
  grid-template-columns: 1fr 1fr;
}

.chart{
  padding-bottom: 5vh;
  margin-bottom: 3vh;
}

.chart:nth-child(odd){ border-right: 2px solid lightgray; }
h4{ text-align: center; }

.link-button{
  grid-area: button;
  justify-self: center;
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

.link-button:hover{
  cursor: pointer;
  box-shadow:
  0 6px 6px 0 rgba(60,64,67,.2),
  0 6px 6px 6px rgba(60,64,67,.2);
  color: black;
  transform: translateY(-5px);
}
</style>
