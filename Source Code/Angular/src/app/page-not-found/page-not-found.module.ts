import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

import { notFoundRoutingModule } from './not-found-routing';

@NgModule({
  imports: [
    CommonModule,notFoundRoutingModule
  ],
  declarations: [NotFoundComponent]
})
export class PageNotFoundModule { }
