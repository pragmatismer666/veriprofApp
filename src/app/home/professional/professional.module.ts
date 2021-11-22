import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalPage } from './professional.page';
const routes: Routes = [
    { path: '', component: ProfessionalPage },
    { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
    { path: 'plans', loadChildren: './plans/plans.module#PlansPageModule' },
    { path: 'business', loadChildren: './business/business.module#BusinessPageModule' }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ProfessionalPage]
})
export class ProfessionalPageModule { }
