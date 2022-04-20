import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

const routes: Routes = [
    {
        path: '',
        component: LandingPage,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SuperTabsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    declarations: [LandingPage]
})
export class LandingPageModule { }
