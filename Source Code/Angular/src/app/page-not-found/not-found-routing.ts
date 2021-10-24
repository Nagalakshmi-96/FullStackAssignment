import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';


const notFoundRoutes: Routes = [
{path:'notFound',component:NotFoundComponent},

];

export const notFoundRoutingModule: ModuleWithProviders = RouterModule.forChild(notFoundRoutes);
