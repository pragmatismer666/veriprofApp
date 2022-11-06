import { Component, OnInit, Injectable } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthenticateService } from "../services/authentication.service";
import { RestApiService } from "../services/rest-api.service";

@Injectable({
    providedIn: 'root'
})
@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.page.html",
    styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {

    slideOptsOne = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay: true
    };

    constructor(
        public authService: AuthenticateService,
        public restApi: RestApiService,
        public navCtrl: NavController,
    ) { }

    async ngOnInit() {
        // console.log(" ================================ ");
        let token = await this.authService.getToken();
        // let token = "776a6ad599005240843e15abb33b6f0c906b90cef71963658a6181ee0f70f662"
        console.log("Auth Service, checkLogin, token : ", token);
        if (token != undefined && token != null) {
            this.restApi.post("check-login", { token: token }).subscribe((res: any) => {
                console.log("Auth Service, checkLogin, res : ", res);
                if (res && res.status) {
                    if (res.status == "true") {
                        this.authService.setUser(JSON.parse(res.data));
                        this.navCtrl.navigateForward("/home");
                    }
                }
            }, (error) => {
                console.log("Auth Service, checkLogin, error : ", error);
                this.restApi.toast(error.message, 1200);
            });
        }

    }
}
