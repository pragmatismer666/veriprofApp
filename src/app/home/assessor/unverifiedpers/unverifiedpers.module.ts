import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UnverifiedpersPage } from './unverifiedpers.page';

const routes: Routes = [
  {
    path: '',
    component: UnverifiedpersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UnverifiedpersPage]
})
export class UnverifiedpersPageModule {}
