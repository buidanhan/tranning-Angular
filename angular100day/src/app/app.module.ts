import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NarbarComponent } from './narbar/narbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AuthorDetailComponent } from './authors/author-detail.component';
import { toggleComponent } from './toggle.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './shared.service';
import { ShowDepComponent } from './employee/show-dep/show-dep.component'
import { AddEditDepComponent } from './employee/add-edit-dep/add-edit-dep.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { PopupShowComponent } from './employee/popup-show/popup-show.component'


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    NarbarComponent,
    FooterComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    toggleComponent,
    ShowDepComponent,
    PopupShowComponent,
    AddEditDepComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
