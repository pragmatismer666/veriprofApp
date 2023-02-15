"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_professional_module_ts"],{

/***/ 8857:
/*!**********************************************************!*\
  !*** ./src/app/home/professional/professional.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalPageModule": () => (/* binding */ ProfessionalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _professional_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professional.page */ 8478);







const routes = [
    { path: '', component: _professional_page__WEBPACK_IMPORTED_MODULE_0__.ProfessionalPage },
    { path: 'project', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_project_project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./project/project.module */ 1313)).then(m => m.ProjectPageModule) },
    { path: 'profile', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 566)).then(m => m.ProfilePageModule) },
    { path: 'report', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_report_report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./report/report.module */ 1406)).then(m => m.ReportPageModule) },
    { path: 'plans', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_plans_plans_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./plans/plans.module */ 5163)).then(m => m.PlansPageModule) },
    { path: 'business', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_business_business_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./business/business.module */ 9146)).then(m => m.BusinessPageModule) },
    { path: 'payments', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_professional_payments_payments_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./payments/payments.module */ 4021)).then(m => m.PaymentsPageModule) },
];
let ProfessionalPageModule = class ProfessionalPageModule {
};
ProfessionalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_professional_page__WEBPACK_IMPORTED_MODULE_0__.ProfessionalPage]
    })
], ProfessionalPageModule);



/***/ }),

/***/ 8478:
/*!********************************************************!*\
  !*** ./src/app/home/professional/professional.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfessionalPage": () => (/* binding */ ProfessionalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _professional_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./professional.page.html?ngResource */ 6021);
/* harmony import */ var _professional_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professional.page.scss?ngResource */ 9126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);








let ProfessionalPage = class ProfessionalPage {
    constructor(toastController, restApi, navCtrl, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.land_seg = "dashboardp";
        this.change_account = "update_account";
        this.errorMessage = "";
        this.successMessage = "";
        // Quick Verify
        this.exceptStrs = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
        this.keyArray = [];
        this.valArray = [];
        // Accounts -------------------------
        this.account = {
            name: "",
            email: "",
            newpass: "",
            confirm: "",
            oldpass: ""
        };
        this.delete_account = {
            oldpass: "",
            confirm: ""
        };
        // check Staff 
        this.moffice = "";
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // let token = await this.authService.getToken();
            // console.log("Professional ngOnInit token : ", token);
            let userData = this.authService.userDetails();
            if (userData != null && userData != undefined) {
                this.account.name = userData.name;
                this.account.email = userData.email;
                // this.account.mobile = userData.mobile;
                this.userName = userData.name;
                this.checkStaff();
            }
            else {
                this.navCtrl.navigateBack("");
            }
        });
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
    manageData(data) {
        try {
            this.keyArray = Object.keys(data);
            for (let index = 0; index < this.keyArray.length; index++) {
                if (this.exceptStrs.includes(this.keyArray[index])) {
                    continue;
                }
                let updateKey = "";
                if (this.keyArray[index].includes("_")) {
                    updateKey = this.keyArray[index].split("_")[0].toUpperCase() + " " + this.keyArray[index].split("_")[1].toUpperCase();
                }
                else {
                    updateKey = this.keyArray[index].toUpperCase();
                }
                let eachVal = { key: updateKey, val: data[this.keyArray[index].toString()] };
                this.valArray.push(eachVal);
            }
        }
        catch (error) {
            console.log(error);
            this.restApi.toast("Response data type is wrong.", 1200);
        }
    }
    searchContent() {
        if (this.keyword == null) {
            this.restApi.toast("Please put keyword.", 1200);
        }
        else if (this.keyword.trim() == "") {
            this.restApi.toast("Please put keyword.", 1200);
        }
        else {
            this.valArray = [];
            this.restApi.post("/search", { key: this.keyword.trim() })
                .subscribe((res) => {
                console.log(res);
                if (res && res.status) {
                    if (res.status == "success") {
                        this.restApi.toast("Successfully.", 1200);
                        this.manageData(res.data);
                    }
                    else {
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
    update(key) {
        let checkFlag = true;
        if (key == "update") {
            if (this.account.oldpass.length < 5) {
                this.restApi.toast("Password must be longer than 5 letters.", 1200);
                checkFlag = false;
                return;
            }
            if (this.account.newpass != this.account.confirm) {
                this.restApi.toast("Please input same password in confirm.", 1200);
                checkFlag = false;
                return;
            }
            if (this.account.newpass < 5) {
                this.restApi.toast("Password must be longer than 5 letters.", 1200);
                checkFlag = false;
                return;
            }
            if (this.account.name < 5) {
                this.restApi.toast("Name must be longer than 5 letters.", 1200);
                checkFlag = false;
                return;
            }
            this.restApi.post("accessor/up-user", { user_id: this.authService.user.userId, data: this.account, pass: this.account.oldpass, key: key }).subscribe((res) => {
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
        }
        else if (key == "delete") {
            if (this.delete_account.oldpass.length < 5) {
                this.restApi.toast("Password must be longer than 5 letters.", 1200);
                checkFlag = false;
                return;
            }
            if (this.delete_account.oldpass != this.delete_account.confirm) {
                this.restApi.toast("Please same password in confirm.", 1200);
                checkFlag = false;
                return;
            }
            this.restApi.post("accessor/up-user", { user_id: this.authService.user.userId, data: {}, pass: this.delete_account.oldpass, key: key }).subscribe((res) => {
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
    delete() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let val = 0;
            const alert = yield this.alertController.create({
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
                            {
                                this.update("delete");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Dashboard page functions
    getAccount() {
        this.restApi.post("get-users", { user_id: this.authService.user.userId }).subscribe((res) => {
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
        this.restApi.post("professional/check-staff", { email: this.account.email }).subscribe((res) => {
            if (res && res.status == "success") {
                if (res.data == "no") {
                    this.restApi.toast("There is no staff confirm request.", 800);
                }
                this.moffice = res.data;
            }
        }, error => {
            console.log("Professional Page, checkStaff, error : ", error);
            this.moffice = "no";
            // this.restApi.toast("Something went wrong.", 1200);
        });
    }
    saction(key) {
        this.restApi.post("professional/verify-staff", { email: this.account.email, key: key }).subscribe((res) => {
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
};
ProfessionalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ProfessionalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-professional",
        template: _professional_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_professional_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfessionalPage);



/***/ }),

/***/ 9126:
/*!*********************************************************************!*\
  !*** ./src/app/home/professional/professional.page.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".headerImage {\n  height: 55%;\n  width: 55%;\n  margin: auto;\n  margin-top: 4%;\n  margin-bottom: 0%;\n}\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7;\n}\n\n.landTabs {\n  position: fixed;\n  bottom: 0;\n  color: wheat !important;\n}\n\n.account_setting ion-segment-button {\n  --indicator-color: gray;\n}\n\n.landTabs ion-segment-button {\n  --indicator-color: var(--ion-color-dark);\n  color: wheat !important;\n  border-radius: 0px !important;\n  border: 0.05px solid #1d1d1d;\n  font-size: 12px;\n  height: 35px;\n}\n\n.segment-button-checked ::ng-deep {\n  border-top: 3px solid #fff !important;\n}\n\nion-content ion-card {\n  background-color: #000;\n  margin: 4% 10% 18% 10%;\n}\n\nion-content ion-card ion-segment-button {\n  border: none !important;\n}\n\n.project_verify {\n  padding: 2px;\n  height: 1.9rem;\n  margin: 0rem;\n}\n\n.quick_verify_card_profess {\n  top: 150px;\n  bottom: 0px;\n  width: 80%;\n}\n\nth {\n  width: 100%;\n  background: #8a8a8a;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\ntd {\n  min-width: 120px;\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Zlc3Npb25hbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kscUNBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJwcm9mZXNzaW9uYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckltYWdlIHtcclxuICAgIGhlaWdodCAgICAgICA6IDU1JTtcclxuICAgIHdpZHRoICAgICAgICA6IDU1JTtcclxuICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wICAgOiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcblxyXG4uaW5uZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XHJcbn1cclxuXHJcbi5sYW5kVGFicyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b20gIDogMDtcclxuICAgIGNvbG9yOiB3aGVhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWNjb3VudF9zZXR0aW5nIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogZ3JheTtcclxufVxyXG5cclxuLmxhbmRUYWJzIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgY29sb3IgICAgICAgICAgICA6IHdoZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzICAgIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXIgICAgICAgICAgIDogMC4wNXB4IHNvbGlkIHJnYigyOSwgMjksIDI5KTtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgOiAxMnB4O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgICA6IDM1cHg7XHJcbn1cclxuXHJcbi5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIDo6bmctZGVlcCB7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY29udGVudCBpb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogNCUgMTAlIDE4JSAxMCU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByb2plY3RfdmVyaWZ5IHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGhlaWdodCA6IDEuOXJlbTtcclxuICAgIG1hcmdpbiA6IDByZW07XHJcbn1cclxuXHJcbi5xdWlja192ZXJpZnlfY2FyZF9wcm9mZXNzIHtcclxuICAgIHRvcCAgIDogMTUwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoIDogODAlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgIGNvbG9yICAgICA6ICNmZmY7XHJcbiAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcclxufVxyXG5cclxudGQge1xyXG4gICAgbWluLXdpZHRoIDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgY29sb3IgICAgIDogIzAwMDtcclxuICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGggICAgIDogNTAlO1xyXG59XHJcblxyXG4vLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnByb2ZfaW1nX2ljb257XHJcbiAgICBcclxufSJdfQ== */";

/***/ }),

/***/ 6021:
/*!*********************************************************************!*\
  !*** ./src/app/home/professional/professional.page.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"dark\" style=\"height: 25%;\">\n    <ion-content color=\"dark\" class=\"ion-content-overflow-hidden\">\n        <ion-img src=\"../../../assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n        <h5 class=\"text-center\" color=\"light\">Welcome : {{userName}}</h5>\n    </ion-content>\n</ion-header>\n\n<ion-content color=\"dark\" class=\"ion-content-overflow-hidden\">\n    <div [ngSwitch]=\"land_seg\" class=\"scroll-y mb-0 p-fixed w-100 h-68\">\n        <ion-card *ngSwitchCase=\"'dashboardp'\">\n            <ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"project()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/myproj.png\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">My Projects</ion-label>\n                    </ion-card>\n                </ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"profile()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/prof.png\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">My Profile</ion-label>\n                    </ion-card>\n                </ion-segment>\n            </ion-segment>\n            <ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"plans()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/plans.png\" class=\"prof_img_icon\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">ePlan Filling</ion-label>\n                    </ion-card>\n                </ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"report()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/reports.png\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">Verified Report</ion-label>\n                    </ion-card>\n                </ion-segment>\n            </ion-segment>\n            <ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"bids()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/accreport.png\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">Tender BIDS</ion-label>\n                    </ion-card>\n                </ion-segment>\n                <ion-segment>\n                    <ion-card (click)=\"payments()\">\n                        <ion-card-content>\n                            <ion-img src=\"../../../assets/paydue.png\"></ion-img>\n                        </ion-card-content>\n                        <ion-label class=\"inner\">Payment</ion-label>\n                    </ion-card>\n                </ion-segment>\n            </ion-segment>\n            <ion-segment>\n                <ng-container *ngIf=\"moffice != 'no'\">\n                    <ion-row style=\"width: 100%;\">\n                        <ion-label style=\"font-size: 18px;\">{{moffice}} is your office email? </ion-label>\n                    </ion-row>\n                    <ion-row style=\"margin: auto;\">\n                        <ion-button style=\"width: 50%;\" size=\"small\" color=\"success\" class=\"project_verify\"\n                            (click)=\"saction('Verified')\">Yes</ion-button>\n                        <ion-button style=\"width: 50%;\" size=\"small\" color=\"success\" class=\"project_verify\"\n                            (click)=\"saction('Unerified')\">No</ion-button>\n                    </ion-row>\n                </ng-container>\n            </ion-segment>\n        </ion-card>\n        <ion-card class=\"p-fixed rounded-0 quick_verify_card_profess\" *ngSwitchCase=\"'quickp'\">\n            <ion-item color=\"dark\" class=\"mb-2 mt-5\">\n                <ion-label position=\"floating\" color=\"dark\" class=\"inner\">Key Word</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"keyword\" color=\"dark\" class=\"inner\"></ion-input>\n                <ion-button class=\"inner\" color=\"success\" slot=\"end\" style=\"margin:0px; margin-top: 20px;\"\n                    (click)=\"searchContent()\">Search</ion-button>\n            </ion-item>\n            <ion-item class=\"h-100 overflow-scroll\" color=\"dark\" lines=\"none\">\n                <tbody>\n                    <ng-container *ngIf=\"valArray != null\">\n                        <tr *ngFor=\"let eachVal of valArray\">\n                            <td data-th=\"\">{{eachVal.key}}</td>\n                            <td data-th=\"\">{{eachVal.val}}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </ion-item>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'newsp'\">\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'accountp'\" style=\"padding: 0px !important;\">\n            <ion-segment class=\"account_setting\" [(ngModel)]=\"change_account\">\n                <ion-segment-button value=\"update_account\">\n                    <ion-label color=\"light\">Update Account</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"delete_account\">\n                    <ion-label color=\"light\">Delete Account</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n            <div [ngSwitch]=\"change_account\">\n                <ion-card *ngSwitchCase=\"'update_account'\" color=\"dark\">\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">Name</ion-label>\n                        <ion-input type=\"text\" class=\"inner\" [(ngModel)]=\"account.name\" value={{account.name}}>\n                        </ion-input>\n                    </ion-item>\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">Current Password</ion-label>\n                        <ion-input type=\"password\" placeholder=\"Input your password to update.\" required class=\"inner\"\n                            [(ngModel)]=\"account.oldpass\" value={{account.oldpass}}></ion-input>\n                    </ion-item>\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">New Password</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"account.newpass\"\n                            value={{account.newpass}}></ion-input>\n                    </ion-item>\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">Confirm</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"account.confirm\"\n                            value={{account.confirm}}></ion-input>\n                    </ion-item>\n                    <br>\n                    <ion-button class=\"font-16 w-100\" type=\"submit\" color=\"success\" (click)=\"update('update')\">Update\n                        Account</ion-button>\n                </ion-card>\n                <ion-card *ngSwitchCase=\"'delete_account'\">\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">Current Password</ion-label>\n                        <ion-input type=\"password\" placeholder=\"Input your password to update.\" required class=\"inner\"\n                            [(ngModel)]=\"delete_account.oldpass\" value={{delete_account.oldpass}}></ion-input>\n                    </ion-item>\n                    <ion-item color=\"dark\">\n                        <ion-label position=\"floating\" class=\"inner\">Confirm</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"delete_account.confirm\"\n                            value={{delete_account.confirm}}></ion-input>\n                    </ion-item>\n                    <ion-button class=\"font-16 w-100\" type=\"submit\" color=\"danger\" (click)=\"delete()\">Delete Account\n                    </ion-button>\n                </ion-card>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <ion-segment [(ngModel)]=\"land_seg\" class=\"landTabs\">\n        <ion-segment-button value=\"dashboardp\">\n            <ion-label>Dashboard</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"quickp\">\n            <ion-label>Quick Verify</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"newsp\">\n            <ion-label>News</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"accountp\">\n            <ion-label>Account</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_professional_module_ts.js.map