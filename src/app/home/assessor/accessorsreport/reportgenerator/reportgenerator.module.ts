import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportgeneratorPage } from './reportgenerator.page';

const routes: Routes = [
  {
    path: '',
    component: ReportgeneratorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportgeneratorPage]
})
export class ReportgeneratorPageModule {}
