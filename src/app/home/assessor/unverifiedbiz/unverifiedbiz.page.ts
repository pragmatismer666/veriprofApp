import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
import { ToastController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
// import { AlertController } from "ionic-angular";


@Component({
    selector: "app-unverifiedbiz",
    templateUrl: "./unverifiedbiz.page.html",
    styleUrls: ["./unverifiedbiz.page.scss"],
})
export class UnverifiedbizPage implements OnInit {

    objs: Array<any> = [];
    verifieds: Array<any> = [];
    schedules: Array<any>;
    x: any;
    action: any;
    isAssessorBusiness: Boolean = false;
    selectedBusiness: any = {};

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        private router: Router,
        public authService: AuthenticateService,
        public alertController: AlertController,
    ) { }

    ngOnInit() {
        this.getBusiness();
    }

    openAssessorBusiness(x : any){
        this.selectedBusiness = x;
        this.isAssessorBusiness = true;
    }

    closeAssessorBusiness (){
        this.isAssessorBusiness = false;
        this.selectedBusiness = {};
    }

    getBusiness() {
        this.restApi.post("accessor/get-business", {}).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.objs = res.data;
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
}
