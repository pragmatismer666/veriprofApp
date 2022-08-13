import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';
import { LandingPage } from './landing.page';

const routes: Routes = [
    {
        path: '',
        component: LandingPage,
    }
];

@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    schemas : [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers:[
    ],
    declarations: [LandingPage]
})
export class LandingPageModule { }
