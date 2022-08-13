import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.page.html',
    styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

    constructor(public toastController: ToastController, public authService: AuthenticateService, public navCtrl: NavController, public restApi: RestApiService) { }

    paylist: any = [];
    account: string = "Free Account";
    updated: string;
    username: string = this.authService.user.name;

    ngOnInit() {
        if (this.authService.userDetails().account_type != "pro") {
            this.account == "Pro Account";
        } else {
            this.account == "Free Account";
        }
    }

    getPaylist() {
        this.restApi.post('professional/get-pay', {}).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.paylist = res.data;
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getMyStatus() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                // console.log(res.personal);
                try {
                    this.account = res.personal['0'].account.concat(' Account');
                    console.log(this.account);
                    this.updated = res.personal['0'].account_updated;
                }
                catch (Error) {
                    this.toastController.create({
                        message: 'You Need To Create. Profile First. ',
                        duration: 2000
                    }).then(toast => toast.present());
                    this.navCtrl.navigateRoot('home/professional');
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    action(act: string) {
        this.restApi.post('professional/update-pay', { user_id: this.authService.user.userId, account: act }).subscribe((res: any) => {
            if (res && res.status) {
                this.account = res.personal['0'].account.concat(' Account');
                this.updated = res.personal['0'].account_updated;
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
}
