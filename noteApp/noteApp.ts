import {Component} from 'angular2/core';
import {Header} from './header';

@Component({
  selector: 'note-app',
  template: `
    <na-header></na-header>
  `,
  directives: [Header]
})
export class noteApp {

}
