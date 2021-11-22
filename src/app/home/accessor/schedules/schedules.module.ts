import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SchedulesPage } from './schedules.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    IonicModule,
    // Validators,
    RouterModule.forChild(routes),
  ],
  declarations: [SchedulesPage]
})
export class SchedulesPageModule {}
