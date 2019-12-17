# sportify
A single page web application for OmSU.  
[Link to app](https://vue-omsu-6aa01.web.app/).

### Project uses
- Vue framework
- Vue Router
- Vuex store
- Firebase database and hosting
- SweetAlert popups
- Chart.js

### Actions with project
```
npm install //setup

npm run serve //compiles and hot-reloads for development

npm run build //compiles and minifies for production
```

### Compilation
To try the app, you can follow the link above or add your firebase project initialization file in `/src/firebase/init.js`.  
[Here](https://firebase.google.com/docs/web/setup) are the detailed steps how to do that.  
You will also need to create two firestore collections in your firebase project: `exercises` and `user-statistics`.  
Here is the structure of collections:

#### excercises:
| Field     | Type              |
| --------- | ----------------- |
| steps     | array of strings  |
| tags      | array of strings  |
| text      | string            |
| steps     | string            |

#### user-statistics:
| Field       | Type   |
| ----------- | ------ |
| figureType  | string |
| idealWeight | number |
| physicalLvl | string |
| pulseRange  | string |
| weightType  | string |

### Atomic design
Now the project is in a refactoring state.  
I am trying to learn and apply a component approach called atomic design.  
You can [take a look at the plan](https://miro.com/app/board/o9J_kwxjFl4=/) of components in this project.

To clone a branch with the new code, you can use the following command:  
`git clone https://github.com/Kvorlik/sportify.git -b road-to-atomic`