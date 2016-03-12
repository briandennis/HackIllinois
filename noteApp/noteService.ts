import {Injectable} from 'angular2/core';
import {Note} from './note';

@Injectable()
export class NoteService {

  notes:Note[] = [new Note('Hello world!')];

  constructor(notes:Note[] ){
    this.notes = notes;
  }

  getNotes(){
    return this.notes;
  }
}
