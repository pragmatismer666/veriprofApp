import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";

@Component({
    selector: "app-plans",
    templateUrl: "./plans.page.html",
    styleUrls: ["./plans.page.scss"],
})

export class PlansPage implements OnInit {

    segment: string = "added";
    Plans: Array<any> = [];
    name: string = "any";
    loadData: string = "any";
    afAuth: any;
    afDatabase: any;
    uid: any;
    navCtrl: any;
    // profess_address:any = {};
    // pendingPlans: Array<any> = [];

    plan: any = {
        client_name: "",
        client_address_line_1: "",
        client_address_line_2: "",
        client_city: "",
        client_province: "",
        client_zipcode: "",
        erfno: "",
        occupancy: "",
        hia_sensitivity: "",
        municipal: "",
        professional_reg_number: "",
        professional: "",
        contact_email: "",
        contact_phone: "",
        contact_address_line_1: "",
        contact_address_line_2: "",
        contact_city: "",
        contact_province: "",
        contact_zipcode: "",
        project_plan_no: "",
        project_title: "",
        project_cost: "",
        project_area: "",
        project_address_line_1: "",
        project_address_line_2: "",
        project_city: "",
        project_province: "",
        project_zipcode: "",
        responsible_qs: "",
        file: ""
    };


    constructor(public toastController: ToastController, public authService: AuthenticateService, public restApi: RestApiService) { }

    async ngOnInit() {
        this.getplanNo();
        this.getPlans();
        await this.loadSavedPlans();
    }

    ngOnDestroy() {
        this.authService.saveData(this.plan, "plan");
    }

    async loadSavedPlans(){
        let saved_plan = await this.authService.getSavedData("plan");
        // console.log( saved_plan);
        if ( saved_plan != null ){
            this.plan = saved_plan;
        }
    }

    submit() {
        for (let x in this.plan) {
            if (this.plan[x].length == 0) {
                let name = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name, 1200);
            }
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.plan.contact_email) != true) { this.restApi.toast("Please input validated email.", 1500); }
        // console.log(this.plan, this.authService.user.userId);
        this.restApi.post("professional/add-plan", { user_id: this.authService.user.userId, data: this.plan }).subscribe((res: any) => {
            if (res && res.status == "success") {
                this.restApi.toast(res.message, 1200);
                this.segment = "added";
                this.Plans = res.data;
                for (let x in this.plan) {
                    this.plan[x] = "";
                }
            }
        }, error => {
            this.restApi.toast(error.message, 1200);
        });
    }

    getPlans() {
        this.restApi.post("professional/get-plan", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status == "success") {
                console.log(res.data);
                this.Plans = res.data;
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    getplanNo() {
        var text = "";
        var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.plan.project_plan_no = text;
    }

    changeListener($event: any): void {
        let file = $event.target.files[0];
        if (file && file.type == "application/pdf") {
            this.restApi.postFile(file, "/upload-file", "plan").subscribe(res => {
                console.log("plan page changeListener res : ", res);
                if (res && res.status && res.status == "success") {
                    this.plan.file = res.filename;
                }
            }, error => {
                console.log(error);
            });
        } else {
            this.restApi.toast("Only PDF supported", 1200);
        }
    }

    download(filename: string) {
        this.restApi.downfile("certificate/", filename);
    }
}
