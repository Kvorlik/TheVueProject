import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import db from "@/firebase/init";
import swal from "sweetalert";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isSelected: null,
    progressPercents: 0,
    stats: {
      gender: null,
      age: null,
      height: null,
      weight: null,
      circle: null,
      pulse: null,
      systole: null,
      diastole: null,
      flexibility: null,
      rapidity: null,
      strength: null,
      rate: null,
      rateStrength: null
    },
    result: {
      idealWght: null,
      pulseRng: null,
      figureType: null,
      wghtType: null,
      physicalLvl: null
    }
  },

  mutations: {
    setGender(state, value) {
      state.isSelected = value;
      state.stats.gender = value;
    },
    incProgressPercents(state) {
      state.progressPercents += 10;
    },
    setAgeHeightWeight(state, value) {
      state.stats.age = value.age;
      state.stats.height = value.height;
      state.stats.weight = value.weight;
    },
    setCircle(state, value) {
      state.stats.circle = value;
    },
    setPulse(state, value) {
      state.stats.pulse = value;
    },
    setPressure(state, value) {
      state.stats.systole = value.systole;
      state.stats.diastole = value.diastole;
    },
    setFlexibility(state, value) {
      state.stats.flexibility = value;
    },
    setRapidity(state, value) {
      state.stats.rapidity = value;
    },
    setStrength(state, value) {
      state.stats.strength = value;
    },
    setRate(state, value) {
      state.stats.rate = value;
    },
    setRateStrength(state, value) {
      state.stats.rateStrength = value;
    },
  },

  getters: {
    getState(state) {
      return state;
    }
  },

  actions: {
    changeAgeHeightWeight(context, object) {
      context.commit('setAgeHeightWeight', object);
    },

    changeCircle(context, value) {
      context.commit('setCircle', value);
    },

    changePulse(context, value) {
      context.commit('setPulse', value);
    },

    changePressure(context, value) {
      context.commit('setPressure', value);
    },

    genderChoice(context, value){
      context.commit('setGender', value);
    },

    changeFlexibility(context, value){
      context.commit('setFlexibility', value);
    },

    changeRapidity(context, value){
      context.commit('setRapidity', value);
    },

    changeStrength(context, value){
      context.commit('setStrength', value);
    },

    changeRate(context, value){
      context.commit('setRate', value);
    },

    changeRateStrength(context, value){
      context.commit('setRateStrength', value);
    },

    incProgressBar(context) {
      let progress = document.querySelector('.progressbar');
      context.commit('incProgressPercents');
      progress.style.width = context.state.progressPercents + '%';
    },

    isFilled(context, value) {
      let stats = context.getters.getState.stats;
      switch (value) {
        case 'Step0':
          if (stats.gender === 'man' || stats.gender === 'woman') {
            context.dispatch('incProgressBar');
            router.push({path: 'step-one'});
          }
          else swal({text: "Выберите пол", icon: "warning", button: "Ага"});
          break;
        case 'Step1':
          if (stats.age != null && stats.height != null && stats.weight != null) {
            if (isFinite(stats.age) && stats.age > 0 &&
                isFinite(stats.height) && stats.height > 0 &&
                isFinite(stats.weight) && stats.weight > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-two'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо заполнить все поля", icon: "warning", button: "Ага"});
          break;
        case 'Step2':
          if (stats.circle != null) {
            if (isFinite(stats.circle) && stats.circle > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-three'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести окружность", icon: "warning", button: "Ага"});
          break;
        case 'Step3':
          if (stats.pulse != null) {
            if (isFinite(stats.pulse) && stats.pulse > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-four'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести пульс", icon: "warning", button: "Ага"});
          break;
        case 'Step4':
          if (stats.systole != null && stats.diastole != null) {
            if (isFinite(stats.systole) && stats.systole > 0 &&
                isFinite(stats.diastole) && stats.diastole > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-five'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести артериальное давление", icon: "warning", button: "Ага"});
          break;
        case 'Step5':
          if (stats.flexibility != null) {
            if (isFinite(stats.flexibility) && stats.flexibility > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-six'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести показатель гибкости", icon: "warning", button: "Ага"});
          break;
        case 'Step6':
          if (stats.rapidity != null) {
            if (isFinite(stats.rapidity) && stats.rapidity > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-seven'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести показатель быстроты", icon: "warning", button: "Ага"});
          break;
        case 'Step7':
          if (stats.strength != null) {
            if (isFinite(stats.strength) && stats.strength > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-eight'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести показатель динамической силы", icon: "warning", button: "Ага"});
          break;
        case 'Step8':
          if (stats.rate != null) {
            if (isFinite(stats.rate) && stats.rate > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'step-nine'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести показатель скоростной выносливости", icon: "warning", button: "Ага"});
          break;
        case 'Step9':
          if (stats.rateStrength != null) {
            if (isFinite(stats.rateStrength) && stats.rateStrength > 0){
              context.dispatch('incProgressBar');
              router.push({path: 'result'});
            }
            else swal({text: "Значения должны быть положительным числом", icon: "warning", button: "Понятно"});
          }
          else swal({text: "Необходимо ввести показатель скоростно-силовой выносливости", icon: "warning", button: "Ага"});
          break;
        default:
          swal({text: "Error. Path = " + router.path + ". Пожалуйста, свяжитесь с разработчиком.", icon: "error", button: "Ага"});
      }
    },

    async end(context) {
      db.collection("user-statistics").add({
        idealWeight: await context.dispatch('idealWeight'),
        pulseRange: await context.dispatch('pulseRange'),
        figureType: await context.dispatch('bodyType'),
        weightType: await context.dispatch('weightType'),
        physicalLvl: await context.dispatch('physicalLevel')
      }).then(() => {
        router.push({ name: 'Home' });
      }).catch(err => {
        throw new Error(err);
      })
    },

    idealWeight(context) {
      let stats = context.getters.getState.stats;
      let res = null;
      if (stats.age < 40) {
        res = stats.height - 110;
      }
      else res = stats.height - 100;
      return res;
    },

    ageWeightPoints(context) {
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let height = parseInt(stats.height);
      let weight = parseInt(stats.weight);
      let normalWeight = null;
      let res = age;

      if (stats.gender === 'man') normalWeight = 50 + ((height - 150) * 0.75) + ((age - 21) / 4);
      else normalWeight = (50 + ((height - 150) * 0.32) + ((age - 21) / 5));
      if (weight > normalWeight) res = res - ((weight-normalWeight.toFixed()) * 5);
      if (weight == normalWeight) res = res + 30;
      return res;
    },

    arterialPressurePoints(context) {
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let systole = parseInt(stats.systole);
      let diastole = parseInt(stats.diastole);
      let weight = parseInt(stats.weight);
      let normalSystole = null;
      let normalDiastole = null;
      let res = null;

      if (stats.gender === 'man') {
        normalSystole = 109 + (0.5 * age) + (0.1 * weight);
        normalDiastole = 74 + (0.1 * age) + (0.15 * weight);
      }
      else {
        normalSystole = 102 + (0.7 * age) + (0.15 * weight);
        normalDiastole = 78 + (0.17 * age) + (0.1 * weight);
      }
      if (systole == normalSystole && diastole == normalDiastole) res = res + 30;
      if ((systole > normalSystole) || (diastole > normalDiastole)) {
        if ((systole - normalSystole.toFixed()) >= 5) res = (res - (((systole - normalSystole.toFixed())/5).toFixed()) * 5);
        if ((diastole - normalDiastole.toFixed()) >= 5) res = (res - (((diastole - normalDiastole.toFixed())/5).toFixed()) * 5);
      }
      return res;
    },

    pulsePoints(context) {
      let pulse = parseInt(context.getters.getState.stats.pulse);
      let res = null;
      if (pulse < 90) res = 90 - pulse;
      return res;
    },

    flexibilityPoints(context) {
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let flexibility = parseInt(stats.flexibility);
      let res = null;

      if (stats.gender === 'man') {
        if (age >= 19 && age <= 22 && flexibility >= 9) res = flexibility - 8;
        if (age >= 23 && age <= 28 && flexibility >= 8) res = flexibility - 7;
        if (age >= 29 && age <= 37 && flexibility >= 7) res = flexibility - 6;
        if (age >= 38 && age <= 52 && flexibility >= 6) res = flexibility - 5;
        if (age >= 53 && age <= 60 && flexibility >= 5) res = flexibility - 4;
      }
      else {
        if (age >= 19 && age <= 22 && flexibility >= 10) res = flexibility - 9;
        if (age >= 23 && age <= 27 && flexibility >= 9) res = flexibility - 8;
        if (age >= 28 && age <= 35 && flexibility >= 8) res = flexibility - 7;
        if (age >= 36 && age <= 47 && flexibility >= 7) res = flexibility - 6;
        if (age >= 48 && age <= 60 && flexibility >= 6) res = flexibility - 5;
      }
      return res;
    },

    rapidityPoints(context) {
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let rapidity = parseInt(stats.rapidity);
      let res = null;

      if (stats.gender === 'man') {
        if (age >= 19 && age <= 20 && rapidity <= 13) res = (14 - rapidity) * 2;
        if (age >= 21 && age <= 23 && rapidity <= 14) res = (15 - rapidity) * 2;
        if (age >= 24 && age <= 26 && rapidity <= 15) res = (16 - rapidity) * 2;
        if (age >= 27 && age <= 30 && rapidity <= 16) res = (17 - rapidity) * 2;
        if (age >= 31 && age <= 34 && rapidity <= 17) res = (18 - rapidity) * 2;
        if (age >= 35 && age <= 38 && rapidity <= 18) res = (19 - rapidity) * 2;
        if (age >= 39 && age <= 42 && rapidity <= 19) res = (20 - rapidity) * 2;
        if (age >= 43 && age <= 47 && rapidity <= 20) res = (21 - rapidity) * 2;
        if (age >= 48 && age <= 51 && rapidity <= 21) res = (22 - rapidity) * 2;
        if (age >= 52 && age <= 56 && rapidity <= 22) res = (23 - rapidity) * 2;
        if (age >= 57 && age <= 60 && rapidity <= 23) res = (24 - rapidity) * 2;
      }
      else {
        if (age >= 19 && age <= 20 && rapidity <= 15) res = (16 - rapidity) * 2;
        if (age >= 21 && age <= 23 && rapidity <= 16) res = (17 - rapidity) * 2;
        if (age >= 24 && age <= 25 && rapidity <= 17) res = (18 - rapidity) * 2;
        if (age >= 26 && age <= 29 && rapidity <= 18) res = (19 - rapidity) * 2;
        if (age >= 30 && age <= 32 && rapidity <= 19) res = (20 - rapidity) * 2;
        if (age >= 33 && age <= 36 && rapidity <= 20) res = (21 - rapidity) * 2;
        if (age >= 37 && age <= 39 && rapidity <= 21) res = (22 - rapidity) * 2;
        if (age >= 40 && age <= 43 && rapidity <= 22) res = (23 - rapidity) * 2;
        if (age >= 44 && age <= 47 && rapidity <= 23) res = (24 - rapidity) * 2;
        if (age >= 48 && age <= 51 && rapidity <= 24) res = (25 - rapidity) * 2;
        if (age >= 52 && age <= 56 && rapidity <= 25) res = (26 - rapidity) * 2;
        if (age >= 57 && age <= 60 && rapidity <= 26) res = (27 - rapidity) * 2;
      }
      return res;
    },

    dynamicForce(context){
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let strength = parseInt(stats.strength);
      let res = null;

      if (stats.gender === 'man') {
        if(age == 19 && strength >= 57) res = (strength - 56) * 2;
        if(age == 20 && strength >= 56) res = (strength - 55) * 2;
        if(age == 21 && strength >= 55) res = (strength - 54) * 2;
        if(age == 22 && strength >= 53) res = (strength - 52) * 2;
        if(age == 23 && strength >= 52) res = (strength - 51) * 2;
        if(age == 24 && strength >= 51) res = (strength - 50) * 2;
        if(age == 25 && strength >= 50) res = (strength - 49) * 2;
        if(age == 26 && strength >= 49) res = (strength - 48) * 2;
        if(age == 27 && strength >= 48) res = (strength - 47) * 2;
        if(age == 28 && strength >= 47) res = (strength - 46) * 2;
        if(age >= 29 && age <= 30 && strength >= 46) res = (strength - 45) * 2;
        if(age == 31 && strength >= 45) res = (strength - 44) * 2;
        if(age == 32 && strength >= 44) res = (strength - 43) * 2;
        if(age >= 33 && age <= 34 && strength >= 43) res = (strength - 42) * 2;
        if(age >= 35 && age <= 36 && strength >= 42) res = (strength - 41) * 2;
        if(age >= 37 && age <= 38 && strength >= 41) res = (strength - 40) * 2;
        if(age == 39 && strength >= 40) res = (strength - 39) * 2;
        if(age >= 40 && age <= 42 && strength >= 39) res = (strength - 38) * 2;
        if(age >= 43 && age <= 44 && strength >= 38) res = (strength - 37) * 2;
        if(age >= 45 && age <= 46 && strength >= 37) res = (strength - 36) * 2;
        if(age >= 47 && age <= 49 && strength >= 36) res = (strength - 35) * 2;
        if(age >= 50 && age <= 52 && strength >= 35) res = (strength - 34) * 2;
        if(age >= 53 && age <= 55 && strength >= 34) res = (strength - 33) * 2;
        if(age >= 56 && age <= 59 && strength >= 33) res = (strength - 32) * 2;
        if(age == 60 && strength >= 32) res = (strength - 31) * 2;
      }
      else {
        if(age == 19 && strength >= 41) res = (strength - 40) * 2;
        if(age == 20 && strength >= 40) res = (strength - 39) * 2;
        if(age == 21 && strength >= 39) res = (strength - 38) * 2;
        if(age == 22 && strength >= 38) res = (strength - 37) * 2;
        if(age >= 23 && age <= 24 && strength >= 37) res = (strength - 36) * 2;
        if(age == 25 && strength >= 36) res = (strength - 35) * 2;
        if(age >= 26 && age <= 27 && strength >= 35) res = (strength - 34) * 2;
        if(age == 28 && strength >= 34) res = (strength - 33) * 2;
        if(age >= 29 && age <= 30 && strength >= 33) res = (strength - 32) * 2;
        if(age >= 31 && age <= 32 && strength >= 32) res = (strength - 31) * 2;
        if(age >= 33 && age <= 34 && strength >= 31) res = (strength - 30) * 2;
        if(age >= 35 && age <= 36 && strength >= 30) res = (strength - 29) * 2;
        if(age >= 37 && age <= 39 && strength >= 29) res = (strength - 28) * 2;
        if(age >= 40 && age <= 42 && strength >= 28) res = (strength - 27) * 2;
        if(age >= 43 && age <= 46 && strength >= 27) res = (strength - 26) * 2;
        if(age >= 47 && age <= 49 && strength >= 26) res = (strength - 25) * 2;
        if(age >= 50 && age <= 53 && strength >= 25) res = (strength - 24) * 2;
        if(age >= 54 && age <= 58 && strength >= 24) res = (strength - 23) * 2;
        if(age >= 59 && age <= 60 && strength >= 23) res = (strength - 22) * 2;
      }
      return res;
    },

    speedEndurance(context){
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let rate = parseInt(stats.rate);
      let res=null;

      if (stats.gender === 'man') {
        if(age >= 19 && age <= 20 && rate >= 18) res = (rate-17) * 3;
        if(age >= 21 && age <= 23 && rate >= 17) res = (rate-16) * 3;
        if(age >= 24 && age <= 26 && rate >= 16) res = (rate-15) * 3;
        if(age >= 19 && age <= 20 && rate >= 18) res = (rate-17) * 3;
        if(age >= 27 && age <= 30 && rate >= 15) res = (rate-14) * 3;
        if(age >= 31 && age <= 35 && rate >= 14) res = (rate-13) * 3;
        if(age >= 36 && age <= 41 && rate >= 13) res = (rate-12) * 3;
        if(age >= 42 && age <= 48 && rate >= 12) res = (rate-11) * 3;
        if(age >= 49 && age <= 53 && rate >= 11) res = (rate-10) * 3;
        if(age >= 54 && age <= 60 && rate >= 10) res = (rate-9) * 3;
      }
      else {
        if(age >= 19 && age <= 20 && rate >= 15) res = (rate - 14) * 3;
        if(age >= 21 && age <= 23 && rate >= 14) res = (rate - 13) * 3;
        if(age >= 24 && age <= 26 && rate >= 13) res = (rate - 12) * 3;
        if(age >= 27 && age <= 31 && rate >= 12) res = (rate - 11) * 3;
        if(age >= 32 && age <= 38 && rate >= 11) res = (rate - 10) * 3;
        if(age >= 39 && age <= 46 && rate >= 10) res = (rate - 9) * 3;
        if(age >= 48 && age <= 58 && rate >= 9) res = (rate - 8) * 3;
        if(age >= 59 && age <= 60 && rate >= 8) res = (rate - 7) * 3;
      }
      return res;
    },

    speedStrengthEndurance(context){
      let stats = context.getters.getState.stats;
      let age = parseInt(stats.age);
      let rateStrength = parseInt(stats.rateStrength);
      let res=null;

      if (stats.gender === 'man') {
        if(age == 19 && rateStrength >= 23) res = (rateStrength - 22) * 4;
        if(age >= 20 && age <= 21 && rateStrength >= 22) res = (rateStrength - 21) * 4;
        if(age >= 22 && age <= 23 && rateStrength >= 21) res = (rateStrength - 20) * 4;
        if(age >= 24 && age <= 26 && rateStrength >= 20) res = (rateStrength - 19) * 4;
        if(age >= 27 && age <= 29 && rateStrength >= 19) res = (rateStrength - 18) * 4;
        if(age >= 30 && age <= 32 && rateStrength >= 18) res = (rateStrength - 17) * 4;
        if(age >= 33 && age <= 36 && rateStrength >= 17) res = (rateStrength - 16) * 4;
        if(age >= 37 && age <= 39 && rateStrength >= 16) res = (rateStrength - 15) * 4;
        if(age >= 40 && age <= 47 && rateStrength >= 15) res = (rateStrength - 14) * 4;
        if(age >= 48 && age <= 54 && rateStrength >= 14) res = (rateStrength - 13) * 4;
        if(age >= 55 && age <= 60 && rateStrength >= 13) res = (rateStrength - 12) * 4;
      }
      else {
        if(age == 19 && rateStrength >= 21) res = (rateStrength - 20) * 4;
        if(age >= 20 && age <= 21 && rateStrength >= 20) res = (rateStrength - 19) * 4;
        if(age >= 22 && age <= 23 && rateStrength >= 19) res = (rateStrength - 18) * 4;
        if(age >= 24 && age <= 26 && rateStrength >= 18) res = (rateStrength - 17) * 4;
        if(age >= 27 && age <= 29 && rateStrength >= 17) res = (rateStrength - 16) * 4;
        if(age >= 30 && age <= 33 && rateStrength >= 16) res = (rateStrength - 15) * 4;
        if(age >= 34 && age <= 38 && rateStrength >= 15) res = (rateStrength - 14) * 4;
        if(age >= 39 && age <= 44 && rateStrength >= 14) res = (rateStrength - 13) * 4;
        if(age >= 45 && age <= 51 && rateStrength >= 13) res = (rateStrength - 12) * 4;
        if(age >= 52 && age <= 60 && rateStrength >= 12) res = (rateStrength - 11) * 4;
      }
      return res;
    },

    bodyType(context) {
      let stats = context.getters.getState.stats;
      let res = null;

      if (stats.gender === 'man') {
        if (stats.circle < 18) res = 'тонкокостный';
        if (stats.circle >= 18 && stats.circle <= 20) res = 'нормальный';
        if (stats.circle > 20) res = 'ширококостный';
      }
      else {
        if (stats.circle < 15) res = 'тонкокостный';
        if (stats.circle >= 15 && stats.circle <= 17) res = 'нормальный';
        if (stats.circle > 17) res = 'ширококостный';
      }
      return res;
    },

    weightType(context) {
      let stats = context.getters.getState.stats;
      let res = null;
      let index = (stats.weight / ((stats.height * 0.01)^2));

      if (index < 18.5) res = 'дефицит массы';
      if (index >= 18.5 && index <= 24.9) res = 'нормальная масса';
      if (index >= 25 && index <= 29.9) res = 'предожирение';
      if (index >= 30 && index <= 34.9) res = 'ожирение первой степени';
      if (index >= 35 && index <= 39.9) res = 'ожирение второй степени';
      if (index >= 40) res = 'ожирение третьей степени';
      return res;
    },

    pulseRange(context) {
      let stats = context.getters.getState.stats;
      let peak = null;
      let min = null;
      let max = null;
      let age = parseInt(stats.age);
      let pulse = parseInt(stats.pulse);

      if (stats.gender === 'man') peak = ((((205 - 0.5 * age) - pulse) * 70) / 100) + pulse;
      else peak = ((((220 - age) - pulse) * 60) / 100) + pulse;
      min = (peak - (0.06 * peak));
      max = (peak + (0.06 * peak));
      return parseInt(min) + ' - ' + parseInt(max);
    },

    async physicalLevel(context) {
      let res = "";
      let points = await context.dispatch('ageWeightPoints') +
                   await context.dispatch('arterialPressurePoints') +
                   await context.dispatch('pulsePoints') +
                   await context.dispatch('flexibilityPoints') +
                   await context.dispatch('rapidityPoints') +
                   await context.dispatch('dynamicForce') +
                   await context.dispatch('speedEndurance') +
                   await context.dispatch('speedStrengthEndurance');

      if(points < 50) res = 'низкий';
      if(points >= 50 && points < 90) res = 'ниже среднего';
      if(points >= 90 && points < 160) res = 'средний';
      if(points >= 160 && points < 200) res = 'выше среднего';
      if(points > 200) res = 'высокий';
      return res;
    }
  }
});
