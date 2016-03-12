import {Component} from 'angular2/core';
import {Header} from './header';
import {Note} from './note';
import {NoteService} from './noteService';

@Component({
  selector: 'note-app',
  template: `
    <na-header></na-header>
    <div *ngFor="#note of notes" id='noteBoard'>
      {{note}}
    </div>
  `,
  directives: [Header, Note],
  providers: [NoteService]
})
export class noteApp {

  private _noteService: NoteService;
  notes: Note[];

  constructor(notesService: NoteService){
    this._noteService = notesService;
    this.notes = this._noteService.getNotes();
  }
}
