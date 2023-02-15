import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import { AssessorPage } from "./assessor.page";

// import { File } from "@ionic-native/file/ngx";
// import { Camera } from "@ionic-native/camera/ngx"
// import { Base64 } from "@ionic-native/base64/ngx";

const routes: Routes = [
    { path: "", component: AssessorPage },
    { path: "unverifiedbiz", loadChildren: () => import("./unverifiedbiz/unverifiedbiz.module").then(m => m.UnverifiedbizPageModule) },
    { path: "unverifiedoffice", loadChildren: () => import("./unverifiedoffice/unverifiedoffice.module").then(m => m.UnverifiedofficePageModule) },
    { path: "unverifiedproject", loadChildren: () => import("./unverifiedproject/unverifiedproject.module").then(m => m.UnverifiedprojectPageModule) },
    { path: "unverifiedprof", loadChildren: () => import("./unverifiedprof/unverifiedprof.module").then(m => m.UnverifiedprofPageModule) },
    { path: "schedules", loadChildren: () => import("./schedules/schedules.module").then(m => m.SchedulesPageModule) },
    { path: "accessorsreport", loadChildren: () => import("./accessorsreport/accessorsreport.module").then(m => m.AccessorsreportPageModule) },
    { path: "reportsubmission", loadChildren: () => import("./reportsubmission/reportsubmission.module").then(m => m.ReportsubmissionPageModule) },
    { path: "reportgenerator", loadChildren: () => import("./reportgenerator/reportgenerator.module").then(m => m.ReportgeneratorPageModule) }
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
        // Camera,
        // File,
        // Base64,
    ],
    declarations: [AssessorPage]
})

export class AssessorPageModule { }
