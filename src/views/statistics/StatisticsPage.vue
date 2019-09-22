<template>
  <common-layout :background="mainBackground">
    <div class="progress">
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
        <regular-button :href="routes.HOME" id="button">Назад</regular-button>
      </div>
    </div>
  </common-layout>
</template>

<script>
import { CommonLayout } from '@/views';
import * as MainBackground from '@/views/backgrounds/main-background.jpg';
import { RegularButton } from '@/components';
import { ROUTES } from '@/common/constants';

import db from "@/firebase/init";
import Chart from 'chart.js';

export default {
  name: 'StatisticsPage',
  components: {
    CommonLayout,
    RegularButton
  },
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
      },
      mainBackground: MainBackground
    }
  },
  computed: {
    routes() {
      return {...ROUTES};
    }
  },
  methods: {
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
    window.scrollTo({top: 0});
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
  min-height: 44rem;
  font-size: 20px;
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

.chart:nth-child(odd) {
  border-right: 2px solid lightgray;
}

#button {
  justify-self: center;
  grid-area: button;
}

h4 {
  text-align: center;
}
</style>
