import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
import { ToastController } from "@ionic/angular";
// import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "app-schedules",
    templateUrl: "./schedules.page.html",
    styleUrls: ["./schedules.page.scss"],
})

export class SchedulesPage implements OnInit {

    objs: Array<any>;
    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        public authService: AuthenticateService,
    ) { }

    ngOnInit() {
        this.get_schedule();
    }

    get_schedule() {
        // console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.post("accessor/get-schedule", { created_by: this.authService.user.userId }).subscribe((res: any) => {
            console.log(res);
            if (res && res.status) {
                this.objs = res.data;
            }
        }, error => {
            this.toastController.create({
                message: "Something went wrong.",
                duration: 2000
            }).then(toast => toast.present());
        });
    }
}
