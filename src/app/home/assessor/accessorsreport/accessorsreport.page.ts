import { Component, OnInit, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
// import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { LoadingController } from "@ionic/angular";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
    selector: "app-accessorsreport",
    templateUrl: "./accessorsreport.page.html",
    styleUrls: ["./accessorsreport.page.scss"],
})
export class AccessorsreportPage implements OnInit {

    assessor_report: string = "projectp";

    projects: Array<any>;
    offices: Array<any>;
    profiles: Array<any>;
    // eplans: Array<any>;

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        public authService: AuthenticateService,
        public loadingCtrl: LoadingController,
        public nav: NavController,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ) {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.type) {
                this.assessor_report = params.type + "p";
            }
        });
    }

    ngOnInit() {
        this.getReport();
    }

    goDashboard(){
        this.router.navigate(["home/assessor"]);
    }

    getReport() {
        this.restApi.post("accessor/get-report", {}).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res);
                this.profiles = res.profiles;
                this.projects = res.projects;
                this.offices = res.offices;
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    download(filename: string) {
        this.restApi.downfile("/create/report/", filename);
    }
}
