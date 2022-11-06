import { Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { RestApiService } from "./rest-api.service";
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: "root"
})
export class AuthenticateService {

    user: any;
    constructor(
        public restApi: RestApiService,
        public navCtrl: NavController,
        private storage: Storage
    ) { }

    registerUser(value: any) {
        return new Promise<any>((resolve, reject) => {
            this.restApi.post("register", value).subscribe(res => {
                resolve(res);
            }, error => {
                reject(error);
            });
        })
    }

    loginUser(value: any) {
        return new Promise<any>((resolve, reject) => {
            this.restApi.post("login", value).subscribe((res) => {
                resolve(res);
            }, error => {
                reject(error);
            });
        })
    }

    async logoutUser() {
        localStorage.clear();
        this.storage.remove("token");
        this.navCtrl.navigateRoot("/landing");
    }

    // ============ localstorage data - User
    setToken(token: string) {
        this.storage.set("token", token);
    }

    async getToken() {
        return await this.storage.get("token");
    }

    setUser(data: any) {
        this.user = data;
        localStorage.setItem("user", JSON.stringify(data));
    }

    userDetails() {
        if (typeof this.user == "undefined") {
            let user = localStorage.getItem("user");
            if (user == null) {
                return false;
            }
            this.user = JSON.parse(user);
            return this.user;
        } else {
            return this.user;
        }
    }

    // ============ localstorage data - Profile Data
    saveProfileData(personProfile: any, businessProfile: any, hofficeProfile: any) {
        localStorage.setItem("personal", JSON.stringify(personProfile));
        localStorage.setItem("business", JSON.stringify(businessProfile));
        localStorage.setItem("hoffice", JSON.stringify(hofficeProfile));
    }

    getProfileData(type: string) {
        return JSON.parse(localStorage.getItem(type));
    }
}
