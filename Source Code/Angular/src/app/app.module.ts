import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubmissionListModule } from './submission-list/submission-list.module';
import { PlayerDetailsModule } from './player-details/player-details.module';

import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { AppRoutingModule } from './app-routing';

import { FormsModule } from '@angular/forms';
import { FilterChangeDirective } from './filter-change.directive';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubmissionListModule,
    PlayerDetailsModule,
    FormsModule,
    PageNotFoundModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
