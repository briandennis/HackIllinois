import {Injectable} from 'angular2/core';
import {Note} from './note';

@Injectable()
export class NoteService {

  notes:Note[];

  getNotes(){
    return this.notes;
  }
}
