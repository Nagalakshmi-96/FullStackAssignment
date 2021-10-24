import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailsHeaderComponent } from './player-details-header/player-details-header.component';
import { PlayerDetailsDataComponent } from './player-details-data/player-details-data.component';
import { playerDetailsRoutingModule } from './playerDetails-routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { AssigneeModule } from '../assignee/assignee.module';


@NgModule({
  imports: [
    CommonModule,playerDetailsRoutingModule,FormsModule,ReactiveFormsModule,Ng2DatetimePickerModule,AssigneeModule
  ],
  declarations: [PlayerDetailsHeaderComponent, PlayerDetailsDataComponent]
})
export class PlayerDetailsModule { }
