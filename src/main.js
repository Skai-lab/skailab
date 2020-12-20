import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/*
import "./myfiles/main.css"
*/
/*
import "./myfiles/myjs.js"
*/

/*
import  'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' ;

import 'https://fonts.gstatic.com';
import  'https://fonts.googleapis.com/css2?family=Lato:ital,wght0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap';
    */
import  './myfiles/assets/css/fontawsome/css/all.css';

import  './myfiles/assets/bootstrap/css/bootstrap.min.css';
/*
import  'https://cdn.jsdelivr.net/npm/bootstrap4.5.3/dist/css/bootstrap.min.css' ;
*/
import  './myfiles/assets/css/style.css';
import  './myfiles/assets/css/buttonstyle.css';

/*
import  'https://s.pageclip.co/v1/pageclip.css' ;
*/



/*

import 'C:/Users/Admin/Desktop/forked skailab the real one/skailab/assets/bootstrap/css/bootstrap.min.css';


import 'C:/Users/Admin/Desktop/forked skailab the real one/skailab/assets/css/style.css';
import 'C:/Users/Admin/Desktop/forked skailab the real one/skailab/assets/css/buttonstyle.css';

*/






createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
