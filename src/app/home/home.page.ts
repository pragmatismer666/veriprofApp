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
        console.log(this.authService.user.role, "this.authService.user");
    }

    getSlug() {
        if (this.authService.user.role == 'Professional') {
            return 'professional';
        } else if (this.authService.user.role == "Accessor") {
            return 'accessor';
        }
    }

    checkRoleAndNavigate() {
        if (this.authService.user.role == 'Professional') {
            this.navCtrl.navigateForward('home/professional');
        } else if (this.authService.user.role == "Accessor") {
            this.navCtrl.navigateForward('home/accessor');
        }
    }

    goHome() {
        this.navCtrl.navigateRoot('home/' + this.getSlug());
    }

    goMyProject() {
        this.navCtrl.navigateRoot('home/' + this.getSlug() + '/project');
    }

    // goContact() {
    //     this.navCtrl.navigateRoot('/posts');
    // }

    logout() {
        localStorage.clear();
        this.navCtrl.navigateRoot('/landing');
    }
}
