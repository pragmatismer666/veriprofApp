import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessionalPage } from './professional.page';
const routes: Routes = [
    { path: '', component: ProfessionalPage },
    { path: 'project', loadChildren: () => import("./project/project.module").then(m => m.ProjectPageModule) },
    { path: 'profile', loadChildren: () => import("./profile/profile.module").then(m => m.ProfilePageModule) },
    { path: 'report', loadChildren: () => import("./report/report.module").then(m => m.ReportPageModule) },
    { path: 'plans', loadChildren: () => import("./plans/plans.module").then(m => m.PlansPageModule) },
    { path: 'business', loadChildren: () => import("./business/business.module").then(m => m.BusinessPageModule) },
    { path: 'payments', loadChildren: () => import("./payments/payments.module").then(m => m.PaymentsPageModule) },
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
