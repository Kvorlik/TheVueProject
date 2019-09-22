import Gender from './Gender';
import AgeHeightWeight from './AgeHeightWeight';
import Circle from './Circle';
import Pulse from './Pulse';
import Pressure from './Pressure';
import Flexibility from './Flexibility';
import Rapidity from './Rapidity';
import Strength from './Strength';
import Rate from './Rate';
import RateStrength from './RateStrength';
import Result from './Result';
// import store from '@/store';
// import { ROUTES } from '@/common/constants';

// const catchBeginNotFromStart = (to, from, next) => {
//   if (store.getters.getState.isSelected) next();
//   else next({path: ROUTES.TEST});
// }

// const STEPS = [
//   { path: '', name: 'Gender', component: Gender },
//   { path: 'step-one', name: 'AgeHeightWeight', component: AgeHeightWeight },
//   { path: 'step-two', name: 'Circle', component: Circle },
//   { path: 'step-three', name: 'Pulse', component: Pulse },
//   { path: 'step-four', name: 'Pressure', component: Pressure },
//   { path: 'step-five', name: 'Flexibility', component: Flexibility },
//   { path: 'step-six', name: 'Rapidity', component: Rapidity },
//   { path: 'step-seven', name: 'Strength', component: Strength },
//   { path: 'step-eight', name: 'Rate', component: Rate },
//   { path: 'step-nine', name: 'RateStrength', component: RateStrength },
//   { path: 'result', name: 'Result', component: Result }
// ];
const STEPS = [
  { path: '', name: 'Step0', component: Gender },
  { path: 'step-one', name: 'Step1', component: AgeHeightWeight },
  { path: 'step-two', name: 'Step2', component: Circle },
  { path: 'step-three', name: 'Step3', component: Pulse },
  { path: 'step-four', name: 'Step4', component: Pressure },
  { path: 'step-five', name: 'Step5', component: Flexibility },
  { path: 'step-six', name: 'Step6', component: Rapidity },
  { path: 'step-seven', name: 'Step7', component: Strength },
  { path: 'step-eight', name: 'Step8', component: Rate },
  { path: 'step-nine', name: 'Step9', component: RateStrength },
  { path: 'result', name: 'Result', component: Result }
];

var stepsList = [];
for (let step of STEPS) {
  stepsList = [
    ...stepsList,
    {
      path: step.path,
      name: step.name,
      component: step.component,
      // beforeEnter: (to, from, next) => catchBeginNotFromStart(to, from, next)
    }
  ]
}

export default {
  stepsList
};