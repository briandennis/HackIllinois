import {Component} from 'angular2/core';
import {Header} from './header';
import {Note} from './note';

@Component({
  selector: 'note-app',
  template: `
    <na-header></na-header>
    <div id='noteBoard'>
      <na-note> </na-note>
    </div>
  `,
  directives: [Header, Note]
})
export class noteApp {

  notes: string[] = ['testing', 'this is a test', 'this is yet another test'];

}
