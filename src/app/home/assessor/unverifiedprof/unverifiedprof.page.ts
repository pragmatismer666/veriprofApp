import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-unverifiedprof',
    templateUrl: './unverifiedprof.page.html',
    styleUrls: ['./unverifiedprof.page.scss'],
})
export class UnverifiedprofPage implements OnInit {

    segment: String = "unverified";
    profs: Array<any> = [];
    verified: Array<any> = [];
    x: string;

    constructor(
        public toastController: ToastController,
        private router: Router,
        public restApi: RestApiService,
        public authService: AuthenticateService,
        public alertController: AlertController
    ) { }

    ngOnInit() {
        this.getUnverifiedProf();
        this.getVerifiedProf();
    }

    getUnverifiedProf() {
        this.restApi.post("accessor/get-unverifiedProf", {}).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.profs = res.data;
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    getVerifiedProf() {
        this.restApi.post("accessor/get-verifiedProf", {}).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.verified = res.data;
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
        console.log(x);
        let newSchedule = {
            verify_user_id: x.user_id,
            verify_target: "profile",
            verify_content_id: x.id,
            created_by: this.authService.user.userId,
            date: schedule_date
        }
        console.log(newSchedule);
        this.restApi.post("accessor/add-schedule", newSchedule).subscribe((res: any) => {
            console.log(res);
            if (res && res.status) {
                this.getUnverifiedProf();
                this.restApi.toast("Added Schedule successfully", 1200);
            } else {
                this.restApi.toast(res.data, 1200);
            }
        }, (error) => {
            console.log("unverifiedprof addSchedule error = : ", error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    verifyProf(data: any) {
        let navigationExtras: NavigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: "profile",
            }
        };
        this.router.navigate(["home/assessor/reportgenerator"], navigationExtras);
    }

    download(filename: string) {
        this.restApi.downfile("uploads/", filename);
    }
}
