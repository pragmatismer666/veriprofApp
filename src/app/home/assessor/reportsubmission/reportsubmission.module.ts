import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportsubmissionPage } from './reportsubmission.page';

const routes: Routes = [
    {
        path: '',
        component: ReportsubmissionPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ReportsubmissionPage]
})
export class ReportsubmissionPageModule { }
