import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            { path: 'professional', loadChildren: () => import("./professional/professional.module").then(m => m.ProfessionalPageModule) },
            { path: 'assessor', loadChildren: () => import("./assessor/assessor.module").then(m => m.AssessorPageModule) },
        ]
    }
];
// () => import('./home/home.module').then(m => m.HomePageModule)
// './professional/professional.module#ProfessionalPageModule'    './assessor/assessor.module#AssessorPageModule'
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
