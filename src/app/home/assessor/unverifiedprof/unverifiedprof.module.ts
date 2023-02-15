import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnverifiedprofPage } from './unverifiedprof.page';

const routes: Routes = [
    {
        path: '',
        component: UnverifiedprofPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UnverifiedprofPage]
})
export class UnverifiedprofPageModule { }
