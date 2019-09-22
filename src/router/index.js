import Vue from 'vue'
import Router from 'vue-router'
import {
  HomePage,
  BeginPage,
  NeedToKnowPage,
  StatisticsPage,
  ExercisesPage,
  TestPage,
  steps,
  VoidPage
} from '../views';
import { ROUTES } from '@/common/constants';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: ROUTES.HOME, name: 'HomePage', component: HomePage},
    {path: ROUTES.WHERE_TO_BEGIN, name: 'BeginPage', component: BeginPage},
    {path: ROUTES.NEED_TO_KNOW, name: 'NeedToKnowPage', component: NeedToKnowPage},
    {path: ROUTES.STATISTICS, name: 'StatisticsPage', component: StatisticsPage},
    {path: ROUTES.EXERCISES, name: 'ExercisesPage', component: ExercisesPage},
    {path: ROUTES.TEST, component: TestPage,
      children: steps.stepsList
    },
    {path: ROUTES.VOID, name: 'VoidPage', component: VoidPage},
    {path: '*', redirect: ROUTES.VOID}
  ]
})
