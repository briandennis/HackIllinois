import {bootstrap} from 'angular2/platform/browser';
import {myApp} from './templating';

bootstrap(myApp)
 .catch(err => console.log(err));
