import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { PlayerDetailsHeaderComponent } from './player-details-header/player-details-header.component';


const playerDetailsRoutes: Routes = [
{path:'playerDetails/:id',component:PlayerDetailsHeaderComponent},

];

export const playerDetailsRoutingModule: ModuleWithProviders = RouterModule.forChild(playerDetailsRoutes);
