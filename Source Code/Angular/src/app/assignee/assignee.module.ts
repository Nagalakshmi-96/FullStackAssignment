import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAssigneeComponent } from './add-assignee/add-assignee.component';
import { ClickOutsideModule } from 'ng4-click-outside';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,ClickOutsideModule,FormsModule,ClickOutsideModule
  ],
  declarations: [AddAssigneeComponent],
  exports: [AddAssigneeComponent]
})
export class AssigneeModule { }
