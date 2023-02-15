import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AccessorsreportPage } from "./accessorsreport.page";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";


const routes: Routes = [
    {
        path: "",
        component: AccessorsreportPage,
    },
    // {
    //     path: "reportgenerator",
    //     loadChildren: () => import("../reportgenerator/reportgenerator.module").then(m => m.ReportgeneratorPageModule)
    // },
    // "./reportgenerator/reportgenerator.module#ReportgeneratorPageModule"
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
export class AccessorsreportPageModule { }
