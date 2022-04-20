import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            { path: 'professional', loadChildren: './professional/professional.module#ProfessionalPageModule' },
            { path: 'assessor', loadChildren: './assessor/assessor.module#AssessorPageModule' },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
