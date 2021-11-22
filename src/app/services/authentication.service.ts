import { Injectable } from "@angular/core";
// import * as firebase from 'firebase/app';
import { NavController } from '@ionic/angular';
import { RestApiService } from './rest-api.service';

@Injectable()
export class AuthenticateService {

    user: any;

    constructor(public restApi: RestApiService, public navCtrl: NavController) { }

    registerUser(value: any) {
        return new Promise<any>((resolve, reject) => {
            this.restApi.post('register', value).subscribe(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
        })
    }

    loginUser(value: any) {
        return new Promise<any>((resolve, reject) => {
            this.restApi.post('login', value).subscribe(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
        })
    }

    logoutUser() {
        localStorage.clear();
        this.navCtrl.navigateRoot('/landing');
    }

    userDetails() {
        if (typeof this.user == 'undefined') {
            let user = localStorage.getItem('user');
            if (user == null) {
                return false;
            }
            this.user = JSON.parse(user);
            return this.user;
        } else {
            return this.user;
        }
    }

    setUser(data) {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(data));
    }
}