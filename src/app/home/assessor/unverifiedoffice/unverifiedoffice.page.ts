import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
import { ToastController, AlertController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";
// import { AlertController } from "ionic-angular";

@Component({
    selector: "app-unverifiedoffice",
    templateUrl: "./unverifiedoffice.page.html",
    styleUrls: ["./unverifiedoffice.page.scss"],
})

export class UnverifiedofficePage implements OnInit {

    segment: string = "unverified";
    offices: Array<any> = [];
    verified: Array<any> = [];
    schedules: Array<any>;
    x: any;
    action: any;

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        private router: Router,
        public authService: AuthenticateService,
        public alertController: AlertController,
    ) { }

    ngOnInit() {
        this.getUnverifiedOffice();
        this.getVerifiedOffice();
    }

    getUnverifiedOffice() {
        this.restApi.post("accessor/get-unverifiedOffice", {}).subscribe((res: any) => {
            if (res && res.status) {
                // console.log("UnverifiedofficePage getUnverifiedOffice res.data = : ", JSON.stringify(res.data));
                if (res.status == "success") {
                    this.offices = res.data;
                    // console.log("UnverifiedofficePage getUnverifiedOffice this.offices = : ", JSON.stringify(this.offices));
                    // this.get_schedule();
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    getVerifiedOffice() {
        this.restApi.post("accessor/get-verifiedOffice", {}).subscribe((res: any) => {
            if (res && res.status) {
                // console.log(res.data);
                if (res.status == "success") {
                    this.verified = res.data;
                    // this.get_schedule();
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    checkDate(date: string) {
        return true;
    }

    async selectDate(x: any) {
        let nowDateTime = new Date((new Date).getTime() + 60 * 60 * 24 * 1000).toJSON().toString().split("T")[0];
        const alert = await this.alertController.create({
            header: "Please select date",
            inputs: [
                {
                    name: "schedule_date",
                    placeholder: "Select DateTime",
                    type: "datetime-local",
                    min: `${nowDateTime}T00:00`,
                }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: () => {
                        console.log("Confirm Cancel");
                    }
                },
                {
                    text: "Ok",
                    handler: (alertData) => { //takes the data 
                        this.addSchedule(x, alertData.schedule_date);
                    }
                }
            ]
        });

        await alert.present();
    }

    addSchedule(x: any, schedule_date: string) {
        let newSchedule = {
            verify_user_id: x.created_by,
            verify_target: "office",
            verify_content_id: x.id,
            created_by: this.authService.user.userId,
            date: schedule_date
        }
        this.restApi.post("accessor/add-schedule", newSchedule).subscribe((res: any) => {
            // console.log(res);
            if (res && res.status && res.data) {
                this.restApi.toast("Added Schedule successfully", 1200);
                this.getUnverifiedOffice();
            } else {
                this.restApi.toast("Invalid Database Connection", 1200);
            }
        }, (error) => {
            console.log("unverifiedoffice addSchedule error = : ", error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    verifyOffice(data: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: "office",
            }
        };
        this.router.navigate(["home/assessor/reportgenerator"], navigationExtras);
    }

    download(filename: string) {
        this.restApi.downfile("uploads/", filename);
    }

    updatebusiness(x: any) {
        this.restApi.post("accessor/verify-business", { user_id: this.authService.user.userId, business_id: x.buzi_id, office_id: x.id, email: x.email }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.getUnverifiedOffice();
                }
                this.restApi.toast(res.data, 1200);
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    async verify(x: any) {
        // console.log(x);
        let val = 0;
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Unverified Business Detail",
            // message: "Business Title : "+x.org_name+"<br>Project Type : "+x.project_type+"<br>CPD Level : "+x.cdp_level+"<br>CIPC Reg Number : "+x.cipc_reg_number+"<br>Professional : "+x.profess+"<br>Business Address1 : "+x.business_address_line_1+"<br>Business Address2 : "+x.business_address_line2+"<br>City : "+x.city+"<br>Code : "+x.code+"<br>States : "+x.province+"",
            inputs: [{ id: "pname", name: "pname", type: "checkbox", label: "Name is " + x.pname + "?", handler: () => { val++; }, },
            { id: "pcouncil", name: "pcouncil", type: "checkbox", label: "Practice Council reg. No is " + x.pcouncil + "?", handler: () => { val++; }, },
            { name: "pcipc_reg_no", type: "checkbox", label: "CIPC registration is " + x.pcipc_reg_no + "?", handler: () => { val++; }, },
            { name: "ptype", type: "checkbox", label: "Business Type is " + x.ptype + "?", handler: () => { val++; }, },
            { name: "director", type: "checkbox", label: "Director is " + x.director + "?", handler: () => { val++; }, },
            { name: "dir_prof_regno", type: "checkbox", label: "Director Prof registration No is " + x.dir_prof_regno + "?", handler: () => { val++; }, },
            { name: "owned", type: "checkbox", label: "%Owned is " + x.owned + "?", handler: () => { val++; }, },
            { name: "phone", type: "checkbox", label: "Office Phone Number is " + x.phone + "?", handler: () => { val++; }, },
            { name: "email", type: "checkbox", label: "Office Email is " + x.email + "?", handler: () => { val++; }, },
            { name: "res_prof_name", type: "checkbox", label: "Responsible Professional Name is " + x.res_prof_name + "?", handler: () => { val++; }, },
            { name: "res_prof_reg", type: "checkbox", label: "Responsible Professional Reg No is " + x.res_prof_reg + "?", handler: () => { val++; }, }
            ],
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary"
                }, {
                    text: "Okay",
                    cssClass: "secondary",
                    handler: () => {
                        if (val >= 11) { this.updatebusiness(x); }
                        else {
                            this.restApi.toast("It is not enough to verify.", 1200);
                        }
                    }
                }
            ]
        });
        await alert.present();
    }

    get_schedule() {
        console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.post("accessor/get-schedule", {}).subscribe((res: any) => {
            if (res) {
                if (res.status == "success") {
                    this.schedules = res.data;
                    // console.log(this.schedules, this.offices);
                    for (var j = 0; j < this.offices.length; j++) {
                        for (var i = 0; i < this.schedules.length; i++) {
                            if (this.schedules[i].verify_target == this.offices[j].email && new Date(this.schedules[i].date).getTime() < new Date().getTime()) {
                                this.offices[j].status = "Pending";
                            }
                        }
                    }
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    schedule() {
        this.router.navigateByUrl("home/assessor/schedules");
    }
}
