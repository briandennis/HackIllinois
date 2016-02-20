import {bootstrap} from 'angular2/platform/browser';
import {myApp} from './myFirstApp';

bootstrap(myApp)
 .catch(err => console.log(err));
