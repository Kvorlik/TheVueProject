import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Void from '@/components/Void'
import Test from '@/components/Test/Main'
import Step0 from '@/components/Test/Step0'
import Step1 from '@/components/Test/Step1'
import Step2 from '@/components/Test/Step2'
import Step3 from '@/components/Test/Step3'
import Step4 from '@/components/Test/Step4'
import Step5 from '@/components/Test/Step5'
import Step6 from '@/components/Test/Step6'
import Step7 from '@/components/Test/Step7'
import Step8 from '@/components/Test/Step8'
import Step9 from '@/components/Test/Step9'
import Result from '@/components/Test/Result'
import Begin from '@/components/Begin'
import Need from '@/components/Need'
import Statistic from '@/components/Statistic'
import Training from '@/components/Training'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/void', name: 'Void', component: Void},
    {path: '/test', name: 'Test', component: Test,
     children: [
       {path: '', name: 'Step0', component: Step0},
       {path: 'step-one', name: 'Step1', component: Step1},
       {path: 'step-two', name: 'Step2', component: Step2},
       {path: 'step-three', name: 'Step3', component: Step3},
       {path: 'step-four', name: 'Step4', component: Step4},
       {path: 'step-five', name: 'Step5', component: Step5},
       {path: 'step-six', name: 'Step6', component: Step6},
       {path: 'step-seven', name: 'Step7', component: Step7},
       {path: 'step-eight', name: 'Step8', component: Step8},
       {path: 'step-nine', name: 'Step9', component: Step9},
       {path: 'result', name: 'Result', component: Result},
     ]
    },
    {path: '/where-to-begin', name: 'Begin', component: Begin},
    {path: '/need-to-know', name: 'Need', component: Need},
    {path: '/statistic', name: 'Statistic', component: Statistic},
    {path: '/training', name: 'Training', component: Training},
    {path: '*', redirect: '/void'}
  ]
})
