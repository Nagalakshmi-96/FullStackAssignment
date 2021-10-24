import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { SubmissionListHeaderComponent } from './submission-list-header/submission-list-header.component';


const submissionRoutes: Routes = [
{path:'submissionList',component:SubmissionListHeaderComponent}
];

export const SubmissionsRoutingModule: ModuleWithProviders = RouterModule.forChild(submissionRoutes);
