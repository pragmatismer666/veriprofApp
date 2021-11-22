import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AccessorPage } from './accessor.page';

import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx'
import { Base64 } from '@ionic-native/base64/ngx';

const routes: Routes = [
    { path: '', component: AccessorPage },
    { path: 'unverifiedbiz', loadChildren: './unverifiedbiz/unverifiedbiz.module#UnverifiedbizPageModule' },
    { path: 'unverifiedpers', loadChildren: './unverifiedpers/unverifiedpers.module#UnverifiedpersPageModule' },
    // { path: 'unverifiedplans', loadChildren: './unverifiedplans/unverifiedplans.module#UnverifiedplansPageModule' },
    { path: 'schedules', loadChildren: './schedules/schedules.module#SchedulesPageModule' },
    { path: 'accessorsreport', loadChildren: './accessorsreport/accessorsreport.module#AccessorsreportPageModule' },
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        Camera,
        File,
        Base64,
    ],
    declarations: [AccessorPage]
})

export class AccessorPageModule { }
