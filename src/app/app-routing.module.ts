import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
    { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'reportsubmission', loadChildren: './home/assessor/reportsubmission/reportsubmission.module#ReportsubmissionPageModule' },
  { path: 'reportgenerator', loadChildren: './home/assessor/accessorsreport/reportgenerator/reportgenerator.module#ReportgeneratorPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
