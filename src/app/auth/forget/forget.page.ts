import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-forget',
    templateUrl: './forget.page.html',
    styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {

    user_email: string = '';

    currentUserType = 'public_user';

    UserTypes = {
        'public_user': {
            title: 'Member Area'
        },
        'accessor': {
            title: 'Accessor'
        },
        'professional': {
            title: 'Professional'
        }
    };

    constructor(
        public toastController: ToastController,
        private navCtrl: NavController,
        public restApi: RestApiService,
        private router: Router) {
        this.currentUserType = this.router.url.split('/').pop();
    }

    ngOnInit() {
    }

    sendPass() {
        if (this.user_email.length == 0) {
            this.restApi.toast('Please fill your eamil into Email', 1200);
        }
        else {
            this.restApi.post('/forget', { email: this.user_email }).subscribe((res: any) => {
                if (res && res.status) {
                    this.restApi.toast(res.message, 1000);
                }
            }, error => {
                this.restApi.toast('Something went wrong.', 1200);
            });
        }
    }

    goLoginPage() {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    }
}