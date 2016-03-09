import {Component} from 'angular2/core';
import {Header} from './header';
import {Note} from './note';
import {NoteService} from './noteService';

@Component({
  selector: 'note-app',
  template: `
    <na-header></na-header>
    <div id='noteBoard'>
      <na-note> </na-note>
    </div>
  `,
  directives: [Header, Note, NoteService]
})
export class noteApp {

  private _noteService:NoteService;

  constructor(notesService:NoteService){
    this._noteService = notesService;
  }

  notes: string[] = ['testing', 'this is a test', 'this is yet another test'];

}
