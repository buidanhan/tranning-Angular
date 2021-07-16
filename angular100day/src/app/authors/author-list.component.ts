import { Component, OnInit } from '@angular/core';
import{authors, Author}  from '../authors.module';
@Component({
  selector: 'app-author-list',
  template: `
     <app-author-detail
      *ngFor="let author of authors" 
      [author]="author" 
      (select)="onSelected($event)" 
      (deleteAuthor)="handleDelete($event)"
      ></app-author-detail>
     <br>
     <div>
     current selected author:{{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
  `,
})
export class AuthorListComponent {

  authors=authors;
  currentAuthor=authors[0];
  constructor() { }
  onSelected(selectAuthor: Author)
  {
         this.currentAuthor=selectAuthor;
  }
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
    if(this.currentAuthor.id===author.id)
    {
      this.currentAuthor=this.authors[0];
    }
  }
}
