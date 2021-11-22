import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AccessorsreportPage } from './accessorsreport.page';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
const routes: Routes = [
  {
    path: '',
    component: AccessorsreportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  // providers:[
  //   FileOpener,
  //   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  // ],
  declarations: [AccessorsreportPage],
})
export class AccessorsreportPageModule {}
