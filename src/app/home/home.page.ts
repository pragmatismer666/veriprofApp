import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(public authService: AuthenticateService,
        public navCtrl: NavController) { }

    ngOnInit() {
        this.checkRoleAndNavigate();
    }

    getSlug() {
        if (this.authService.user.role == 'Professional') {
            return 'professional';
        } else if (this.authService.user.role == "Assessor") {
            return 'assessor';
        }
    }

    checkRoleAndNavigate() {
        if (this.authService.userDetails().role == 'Professional') {
            this.navCtrl.navigateForward('home/professional');
        } else if (this.authService.userDetails().role == "Assessor") {
            this.navCtrl.navigateForward('home/assessor');
        }
    }

    goHome() {
        this.navCtrl.navigateRoot('home/' + this.getSlug());
    }

    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateRoot('/landing');
    }
}
