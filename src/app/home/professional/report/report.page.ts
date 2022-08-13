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

    objs: Array<any>;
    account: string;
    constructor(public toastController: ToastController, public restApi: RestApiService, public navCtrl: NavController, public authService: AuthenticateService) { }

    ngOnInit() {
        this.getReport();
    }

    getMyStatus() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                try {
                    this.account = res.personal['0'].account.concat(' Account');
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
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getReport() {
        this.restApi.post('professional/get-report', {}).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.objs = res.data;
                } else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        },
            error => {
                this.toastController.create({
                    message: 'Something went wrong.',
                    duration: 2000
                }).then(toast => toast.present());
            });
    }

    download(filename) {
        console.log(filename);
        this.restApi.downfile('reports/', filename);
    }
}
