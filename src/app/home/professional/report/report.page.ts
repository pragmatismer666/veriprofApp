import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-report',
    templateUrl: './report.page.html',
    styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {

    objs: Array<any> = [];
    reports: Array<any> = [];
    segment: string = "reports";
    account: string;
    constructor(public toastController: ToastController, public restApi: RestApiService, public navCtrl: NavController, public authService: AuthenticateService) { }

    ngOnInit() {
        console.log(`Your account plan is a ${this.authService.user.account_type}.`);
        this.restApi.toast(`Your account plan is a ${this.authService.user.account_type}.`, 1500);
        this.getMyPDFs();
        this.getReport();
    }

    getMyStatus() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                try {
                    this.account = res.data['0'].account.concat(' Account');
                }
                catch (Error) {
                    this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
                        duration: 2000
                    }).then(toast => toast.present());
                }
                if (this.account != "Pro Account") {
                    this.navCtrl.navigateRoot('home/professional');
                    this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, (error) => {
            this.toastController.create({
                message: 'Something went wrong!',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getReport() {
        this.restApi.post('professional/get-report', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            console.log("professional report getReport = : ", res);
            if (res && res.status) {
                if (res.status == true) {
                    this.reports = res.data;
                } else {
                    this.restApi.toast(res.data, 2000);
                }
            } else {
                this.restApi.toast("Invalid Database Connection!", 2000);    
            }
        }, (error) => {
            console.log("Report getReport error = : ", error);
            this.restApi.toast("Something went wrong!", 2000);
        });
    }

    // Get my Bid and Plan Documents
    getMyPDFs() {
        this.restApi.post("professional/get-myReport", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.objs = res.data;
                } else {
                    this.restApi.toast(res.message, 2000);
                }
            }
        }, (error) => {
            console.log("Report getMyPDFs error = : ", error);
            this.restApi.toast("Something went wrong!", 2000);
        });
    }

    download(filename: string) {
        console.log(filename);
        // this.restApi.downfile('reports/', filename);
        this.restApi.downfile("", filename);
    }
}
