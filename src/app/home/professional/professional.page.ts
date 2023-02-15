import { Component, OnInit } from "@angular/core";
import { NavController, ToastController, AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";

@Component({
    selector: "app-professional",
    templateUrl: "./professional.page.html",
    styleUrls: ["./professional.page.scss"],
})
export class ProfessionalPage implements OnInit {

    land_seg: string = "dashboardp";
    change_account: string = "update_account";

    userName: string;
    objs: any;
    errorMessage: string = "";
    successMessage: string = "";
    // Quick Verify
    exceptStrs: Array<string> = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
    keyArray: Array<string> = [];
    valArray: Array<any> = [];
    keyword: string;

    // Accounts -------------------------
    account: any = {
        name: "",
        email: "",
        newpass: "",
        confirm: "",
        oldpass: ""
    };
    delete_account: any = {
        oldpass: "",
        confirm: ""
    }
    // check Staff 
    moffice: string = "";

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        private navCtrl: NavController,
        private router: Router,
        private authService: AuthenticateService,
        public alertController: AlertController
    ) { }

    async ngOnInit() {
        // let token = await this.authService.getToken();
        // console.log("Professional ngOnInit token : ", token);
        let userData = this.authService.userDetails();
        if (userData != null && userData != undefined) {
            this.account.name = userData.name;
            this.account.email = userData.email;
            // this.account.mobile = userData.mobile;
            this.userName = userData.name;
            this.checkStaff();
        } else {
            this.navCtrl.navigateBack("");
        }
    }

    project() {
        this.router.navigateByUrl("home/professional/project");
    }

    profile() {
        this.router.navigateByUrl("home/professional/profile");
    }

    report() {
        this.router.navigateByUrl("home/professional/report");
        // if (this.authService.userDetails().account_type == "pro") {
        //     this.router.navigateByUrl("home/professional/report");
        // } else {
        //     this.restApi.toast("Only pro account can see reports!", 1000);
        // }
    }

    plans() {
        this.router.navigateByUrl("home/professional/plans");
    }

    bids() {
        this.router.navigateByUrl("home/professional/business");
    }

    payments() {
        this.router.navigateByUrl("home/professional/payments");
    }

    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateBack("");
    }

    // getProfess() {
    //     this.restApi.get("professional/get-profess").subscribe((res: any) => {
    //         if (res && res.status) {
    //             if (res.status == "success") {
    //                 this.objs = res.data;
    //                 console.log(this.objs);
    //             } else {
    //                 this.restApi.toast(res.message, 1200);
    //             }
    //         }
    //     }, error => {
    //         this.restApi.toast("Something went wrong.", 1200);
    //     });
    // }

    // Quick verify search function ------------------
    manageData(data: any) {
        try {
            this.keyArray = Object.keys(data);
            for (let index = 0; index < this.keyArray.length; index++) {
                if (this.exceptStrs.includes(this.keyArray[index])) {
                    continue;
                }
                let updateKey = "";
                if (this.keyArray[index].includes("_")) {
                    updateKey = this.keyArray[index].split("_")[0].toUpperCase() + " " + this.keyArray[index].split("_")[1].toUpperCase()
                } else {
                    updateKey = this.keyArray[index].toUpperCase();
                }
                let eachVal = { key: updateKey, val: data[this.keyArray[index].toString()] }
                this.valArray.push(eachVal);
            }
        } catch (error) {
            console.log(error);
            this.restApi.toast("Response data type is wrong.", 1200);
        }
    }

    searchContent() {
        if (this.keyword == null) {
            this.restApi.toast("Please put keyword.", 1200);
        } else if (this.keyword.trim() == "") {
            this.restApi.toast("Please put keyword.", 1200);
        } else {
            this.valArray = [];
            this.restApi.post("/search", { key: this.keyword.trim() })
                .subscribe((res: any) => {
                    console.log(res);
                    if (res && res.status) {
                        if (res.status == "success") {
                            this.restApi.toast("Successfully.", 1200);
                            this.manageData(res.data);
                        } else {
                            this.restApi.toast("There is no result.", 1200);
                        }
                    }
                }, error => {
                    console.log(error);
                    this.restApi.toast("Please Check search bar.", 1200);
                });
        }
    }

    // user Account - update and delete -----------------------
    update(key: any) {
        let checkFlag = true;
        if (key == "update") {
            if (this.account.oldpass.length < 5) { this.restApi.toast("Password must be longer than 5 letters.", 1200); checkFlag = false; return; }
            if (this.account.newpass != this.account.confirm) { this.restApi.toast("Please input same password in confirm.", 1200); checkFlag = false; return; }
            if (this.account.newpass < 5) { this.restApi.toast("Password must be longer than 5 letters.", 1200); checkFlag = false; return; }
            if (this.account.name < 5) { this.restApi.toast("Name must be longer than 5 letters.", 1200); checkFlag = false; return; }
            this.restApi.post("accessor/up-user", { user_id: this.authService.user.userId, data: this.account, pass: this.account.oldpass, key: key }).subscribe((res: any) => {
                if (res && res.status) {
                    console.log(res.status);
                    if (res.status == "success") {
                        this.account.name = res.data.name;
                        this.restApi.toast("Updated as successfully. Please login again.", 1200);
                        this.logout();
                    }
                    else {
                        this.restApi.toast(res.data, 1200);
                    }
                }
            }, error => {
                this.restApi.toast("Please input correct current password.", 1200);
            });
        } else if (key == "delete") {
            if (this.delete_account.oldpass.length < 5) { this.restApi.toast("Password must be longer than 5 letters.", 1200); checkFlag = false; return; }
            if (this.delete_account.oldpass != this.delete_account.confirm) { this.restApi.toast("Please same password in confirm.", 1200); checkFlag = false; return; }
            this.restApi.post("accessor/up-user", { user_id: this.authService.user.userId, data: {}, pass: this.delete_account.oldpass, key: key }).subscribe((res: any) => {
                if (res && res.status) {
                    if (res.status == "success") {
                        this.restApi.toast("Updated as successfully. Please login again.", 1200);
                        this.logout();
                    }
                    else {
                        this.restApi.toast(res.data, 1200);
                    }
                }
            }, error => {
                this.restApi.toast("Please input correct current password.", 1200);
            });
        }

        if (checkFlag) {

        }
    }

    async delete() {
        let val = 0;
        const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "Your account and all information will be removed.",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    cssClass: "secondary"
                }, {
                    text: "Okay",
                    cssClass: "secondary",
                    handler: () => {
                        { this.update("delete"); }
                    }
                }
            ]
        });
        await alert.present();
    }

    // Dashboard page functions
    getAccount() {
        this.restApi.post("get-users", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status == "success") {
                this.account.name = res.data.name;
                this.account.email = res.data.email;
                this.account.mobile = res.data.mobile;
                this.checkStaff();
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    checkStaff() {
        // console.log("Professional Page, checkStaff, this.account.email : ", this.account.email);
        this.restApi.post("professional/check-staff", { email: this.account.email }).subscribe((res: any) => {
            if (res && res.status == "success") {
                if (res.data == "no") { this.restApi.toast("There is no staff confirm request.", 800); }
                this.moffice = res.data;
            }
        }, error => {
            console.log("Professional Page, checkStaff, error : ", error);
            this.moffice = "no";
            // this.restApi.toast("Something went wrong.", 1200);
        });
    }

    saction(key: any) {
        this.restApi.post("professional/verify-staff", { email: this.account.email, key: key }).subscribe((res: any) => {
            if (res && res.status == "success") {
                this.restApi.toast(" Updated as successfully.", 1200);
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
            this.restApi.toastController.create({
                message: "Something went wrong.",
                duration: 2000
            }).then(toast => toast.present());
        });
    }
}
