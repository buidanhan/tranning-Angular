import { Component, Input, Output,EventEmitter} from '@angular/core';
import { Author } from '../authors.module';
@Component({
  selector: 'app-author-detail',
  template: `
     <div>
     {{author.firstName}}  {{author.lastName}}
     <button (click)="select.emit(author)">Select</button>
     <button (click)="handleDelete()">X</button>
     </div>
  `
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output() select= new EventEmitter<Author>();
  @Output() deleteAuthor=new EventEmitter<Author>();
  constructor() {
    this.author = {
      id: 1,
      email: "",
      firstName: "",
      gender: "",
      ipAddress: "",
      lastName: "",
    }
  }
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}

