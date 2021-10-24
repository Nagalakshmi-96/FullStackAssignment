import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListHeaderComponent } from './submission-list-header/submission-list-header.component';
import { SubmissionsRoutingModule } from './submission-routing';
import { SubmissionListDataComponent } from './submission-list-data/submission-list-data.component';
import { HttpClientModule } from '@angular/common/http';


import { CustomFilterPipe } from '../custom-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AssigneeModule } from '../assignee/assignee.module';

import { PagingService } from '../paging.service';
import { LoadersCssModule } from 'angular2-loaders-css';
import { FilterChangeDirective } from '../filter-change.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

@NgModule({
  imports: [
    CommonModule,SubmissionsRoutingModule,FormsModule,NgxPaginationModule,AssigneeModule,BrowserAnimationsModule,HttpClientModule,ReactiveFormsModule,Ng2DatetimePickerModule

  ],
  declarations: [SubmissionListHeaderComponent, SubmissionListDataComponent,CustomFilterPipe,FilterChangeDirective],
  providers:[PagingService]
})
export class SubmissionListModule {


 }
