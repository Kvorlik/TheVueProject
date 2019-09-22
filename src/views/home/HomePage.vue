<template>
  <common-layout show-main-titles :background="mainBackground">
    <h1 class="main-header">Добро пожаловать!</h1>
    Вас приветствует сервис онлайн-тренировок "Sportify".
    <div class="circle-nav-buttons">
      <circle-button
        :href="routes.WHERE_TO_BEGIN"
        :background="begin">
        С чего начать?
      </circle-button>

      <circle-button
        :href="routes.NEED_TO_KNOW"
        :background="needToKnow">
        Нужно знать перед&nbsp;тренировкой
      </circle-button>

      <circle-button
        :href="routes.STATISTICS"
        :background="statistics">
        Статистика
      </circle-button>
    </div>

    <test-invitation :background="banner">
      Хотите начать тренироваться, но&nbsp;не&nbsp;знаете ваш актуальный уровень физической подготовки? Не&nbsp;беда! Наш тест поможет вам определить его.
    </test-invitation>

    <exercises-invitation
      :href="routes.EXERCISES"
      button-text="Перейти к упражнениям"
    >
      Для полноценной тренировки на&nbsp;все группы мышц не&nbsp;нужен абонемент в&nbsp;спортзал, тренажёры и&nbsp;свободные веса. Всё, что вам понадобится&nbsp;&mdash; ваше тело.
    </exercises-invitation>
  </common-layout>
</template>

<script>
import { CommonLayout } from '@/views';
import { ROUTES } from '@/common/constants';
import MainBackground from '@/views/backgrounds/main-background.jpg';
import { CircleButton,
         TestInvitation,
         ExercisesInvitation
       } from '@/components';
import { BeginBackground,
         NeedToKnowBackground,
         StatisticsBackground,
         ExercisesBanner
       } from './images';

export default {
  name: 'HomePage',
  components: {
    CommonLayout,
    CircleButton,
    TestInvitation,
    ExercisesInvitation
  },
  data() {
    return {
      begin: BeginBackground,
      needToKnow: NeedToKnowBackground,
      statistics: StatisticsBackground,
      banner: ExercisesBanner,
      mainBackground: MainBackground
    }
  },
  computed: {
    routes() {
      return { ...ROUTES };
    }
  }
}
</script>

<style scoped lang="css" src="./HomePage.css"/>