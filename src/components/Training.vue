<template>
  <div class="training shadow">
    <div class="content-area">
      <h1 class="main-header">Упражнения</h1>

      <div class="wrapper-loader flex" v-if="isVisible">
        <div class="loader">
          <div class="outer"></div>
          <div class="middle"></div>
          <div class="inner"></div>
        </div>
      </div>

      <div class="grid-area">
        <div class="card" v-for="exercise in exercises" :key="exercise.id">

          <div class="front flex">
            <h3>{{ exercise.title }}</h3>
            <span>{{ exercise.text }}</span>
            <div class="flex">
              <div class="tag" v-for="tag in exercise.tags" :key="tag.index">{{ tag }}</div>
            </div>
          </div>

          <div class="back flex">
            <h3>Шаги</h3>
            <ol>
              <li v-for="step in exercise.steps" :key="step.index">{{ step }}</li>
            </ol>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: 'training',
  data () {
    return {
      isVisible: true,
      exercises: []
    }
  },
  created(){
    window.scrollTo({top: 0});
    db.collection('exercises').get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let exercise = doc.data();
          exercise.id = doc.id;
          this.exercises.push(exercise);
        })
      })
      .then(() => this.isVisible = false);
  }
}
</script>

<style scoped>
.training{
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
  margin: 0 50px 0;
  padding: 30px 0 30px;
  position: relative;
}

.grid-area{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1vw;
}

.flex{
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-header{
  text-align: center;
  margin-top: 0;
  letter-spacing: normal;
  font-weight: bold;
}

.card {
  position: relative;
  perspective: 1000px;
}

.front{
  position: absolute;
  top: 0;
  left: 0;
  line-height: 30px;
}

.front, .back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: linear-gradient(to right bottom, #ff4e00, #ff6e00, #ff8900, #ffa111, #ffb82a);
  border-radius: 6px;
  padding: 30px;
  transition: 1s;
}

.card:hover .front{ transform: rotateY(180deg); }
.card:hover .back{ transform: rotateY(360deg); }

.front span{ margin: 1vh 0 2vh; }
.back li{ margin: 1vh 0 1vh; }
.back{ transform: rotateY(180deg); }
.front h3, .back h3{ margin: 0; }
.front, .back{ flex-direction: column; }

.tag{
  margin-right: 1vw;
  padding: 0.5vh 0.5vw;
  border: 1px solid black;
  border-radius: 25px;
  font-size: 15px;
  line-height: normal;
}

li{ list-style: none; }
li:before {
  counter-increment: myCounter;
  content:counter(myCounter);
  display: inline-block;
  text-align: center;
  margin: 5px 10px;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 50%;
}

ol{
  padding: 0;
  counter-reset: myCounter;
}

.wrapper-loader{
  position: absolute;
  width: 100%;
  height: 50vh;
  transition: 1s;
  z-index: 10;
}

.loader {
  position: relative;
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: black;
  border-right-color: black;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
