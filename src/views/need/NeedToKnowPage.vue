<template>
  <common-layout :background="mainBackground">
    <div class="need">
      <h1 class="header">Нужно знать перед тренировкой</h1>

      <article>
        Для получения максимального эффекта от&nbsp;тренировок без нанесения вреда своему здоровью <b>необходимо</b>:
        <unordered-list :marker="{ positive: true }">
          <li>Определить цель тренировок</li>
          <li>Выбирать нагрузку исходя из&nbsp;своих физических возможнойстей</li>
          <li>Во&nbsp;время тренировок не&nbsp;допускать физических перегрузок</li>
          <li>Ознакомиться с&nbsp;кривой дозы-эффекта, отражающей зависимость эффективности тренировки от&nbsp;физических нагрузок</li>
          <li>Выбрать соответствующий рацион питания</li>
          <li>Определить частоту и&nbsp;продолжительность тренировок</li>
        </unordered-list>
      </article>

      <article>
        В процессе тренировок <b>нельзя</b>:
        <unordered-list :marker="{ negative: true }">
          <li>Пить более двух литров воды в&nbsp;день</li>
          <li>Идти на&nbsp;тренировку голодным</li>
          <li>Пренебрегать разминкой</li>
        </unordered-list>
      </article>

      <div class="flex">
        <regular-button :href="routes.HOME">Назад</regular-button>
      </div>
    </div>
  </common-layout>
</template>

<script>
import { CommonLayout } from '@/views';
import * as MainBackground from '@/views/backgrounds/main-background.jpg';
import { RegularButton, UnorderedList } from '@/components';
import { ROUTES } from '@/common/constants';

export default {
  name: 'NeedToKnowPage',
  components: {
    CommonLayout,
    RegularButton,
    UnorderedList
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
img {
  width: 25px;
  height: 25px;
}

.need{
  min-height: 44rem;
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
