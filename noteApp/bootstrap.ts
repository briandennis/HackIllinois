import {bootstrap} from 'angular2/platform/browser';
import {noteApp} from './noteApp';

bootstrap(noteApp)
  .catch(err => console.log(err));
