(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["professional-professional-module"],{

/***/ "./src/app/home/professional/professional.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/professional/professional.module.ts ***!
  \**********************************************************/
/*! exports provided: ProfessionalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalPageModule", function() { return ProfessionalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _professional_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./professional.page */ "./src/app/home/professional/professional.page.ts");







var routes = [
    { path: '', component: _professional_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalPage"] },
    { path: 'project', loadChildren: './project/project.module#ProjectPageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
    { path: 'plans', loadChildren: './plans/plans.module#PlansPageModule' },
    { path: 'business', loadChildren: './business/business.module#BusinessPageModule' }
];
var ProfessionalPageModule = /** @class */ (function () {
    function ProfessionalPageModule() {
    }
    ProfessionalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_professional_page__WEBPACK_IMPORTED_MODULE_6__["ProfessionalPage"]]
        })
    ], ProfessionalPageModule);
    return ProfessionalPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/professional.page.html":
/*!**********************************************************!*\
  !*** ./src/app/home/professional/professional.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" style=\"background: black;height: 25%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../../assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n        <h3 text-center color=\"light\">Welcome : {{userName}}</h3>\n    </ion-content>\n</ion-header>\n\n<ion-content color=\"dark\">\n    <div [ngSwitch]=\"land_seg\" class=\"segPart\">\n        <ion-card *ngSwitchCase=\"'dashboardp'\">\n            <ion-card>\n                <ion-segment scrollable>\n                    <ion-segment-button (click)=\"project()\">\n                        <ion-img src=\"../../../assets/myproj.png\"></ion-img>\n                        <ion-label class=\"inner\">My Projects</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button (click)=\"profile()\">\n                        <ion-img src=\"../../../assets/prof.png\"></ion-img>\n                        <ion-label class=\"inner\">My Profile</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n                <br>\n                <ion-segment scrollable>\n                    <ion-segment-button (click)=\"plans()\">\n                        <ion-img src=\"../../../assets/plans.png\"></ion-img>\n                        <ion-label class=\"inner\">ePlan Filling</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button (click)=\"report()\">\n                        <ion-img src=\"../../../assets/reports.png\"></ion-img>\n                        <ion-label class=\"inner\">Reporting</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n                <br>\n                <ion-segment scrollable>\n                    <ion-segment-button (click)=\"bids()\" style=\"width: 50%;\">\n                        <ion-img src=\"../../../assets/accreport.png\"></ion-img>\n                        <ion-label class=\"inner\">Tender BIDS</ion-label>\n                    </ion-segment-button>\n                    <ion-row style=\"width: 50%;\">\n                        <ng-container *ngIf=\"moffice != 'no'\">\n                            <ion-row style=\"width: 100%;\">\n                                <ion-label style=\"font-size: 15px;\">{{moffice}} is your office email? </ion-label>\n                            </ion-row>\n                            <ion-row style=\"margin: auto;\">\n                                <ion-button style=\"width: 50%;\" size=\"small\" color=\"success\" class=\"project_verify\"\n                                    (click)=\"saction('Verified')\">Yes</ion-button>\n                                <ion-button style=\"width: 50%;\" size=\"small\" color=\"success\" class=\"project_verify\"\n                                    (click)=\"saction('Unerified')\">No</ion-button>\n                            </ion-row>\n                        </ng-container>\n                    </ion-row>\n                </ion-segment>\n            </ion-card>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'quickp'\">\n            <ion-card>\n                <ion-item color=\"dark\" style=\"margin-bottom: 10px;\">\n                    <ion-label  position=\"floating\" color=\"dark\" class=\"inner\">Key Word</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"keyword\" color=\"dark\" class=\"inner\"></ion-input>\n                    <ion-button class=\"inner\" color=\"success\" slot=\"end\" style=\"margin:0px; margin-top: 16px;\" (click)=\"searchContent()\">Search</ion-button>\n                </ion-item>   \n                <ion-item color=\"dark\" lines=\"none\" style=\"font-size: 13px;\">\n                    <ng-container *ngIf=\"valArray != null\">\n                        <tr *ngFor=\"let eachVal of valArray\">\n                            <td data-th=\"\">{{eachVal.key}}</td>\n                            <td data-th=\"\">{{eachVal.val}}</td>\n                        </tr>\n                    </ng-container>\n                </ion-item>\n            </ion-card>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'newsp'\">\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'accountp'\">\n            <ion-segment [(ngModel)]=\"change_account\" color=\"light\" class=\"landTabs\">\n                <ion-segment-button value=\"update_account\">\n                    <ion-label>Update Account</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"delete_account\">\n                    <ion-label>Delete Account</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n            <div [ngSwitch]=\"change_account\">\n                <ion-card *ngSwitchCase=\"'update_account'\">\n                    <br>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">Name</ion-label>\n                        <ion-input type=\"text\" class=\"inner\" [(ngModel)]=\"account.name\" value={{account.name}}></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">Current Password</ion-label>\n                        <ion-input type=\"password\" placeholder=\"Input your password to update.\" required class=\"inner\"\n                            [(ngModel)]=\"account.oldpass\" value={{account.oldpass}}></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">New Password</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"account.newpass\"\n                            value={{account.newpass}}></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">Confirm</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"account.confirm\"\n                            value={{account.confirm}}></ion-input>\n                    </ion-item>\n                    <br>\n                    <ion-button style=\"font-size: 12px;width:100%;\" type=\"submit\" color=\"dark\" (click)=\"update('update')\">Update Account</ion-button>\n                </ion-card>\n                <ion-card *ngSwitchCase=\"'delete_account'\">\n                    <br>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">Current Password</ion-label>\n                        <ion-input type=\"password\" placeholder=\"Input your password to update.\" required class=\"inner\"\n                            [(ngModel)]=\"delete_account.oldpass\" value={{delete_account.oldpass}}></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"floating\" class=\"inner\">Confirm</ion-label>\n                        <ion-input type=\"password\" required class=\"inner\" [(ngModel)]=\"delete_account.confirm\"\n                            value={{delete_account.confirm}}></ion-input>\n                    </ion-item>\n                    <br>\n                    <ion-button style=\"font-size: 12px;width:100%;color: red;\" type=\"submit\" color=\"danger\"\n                    (click)=\"delete()\">Delete Account</ion-button>\n                </ion-card>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-segment [(ngModel)]=\"land_seg\" color=\"light\" class=\"landTabs\">\n        <ion-segment-button value=\"dashboardp\">\n            <ion-label>Dashboard</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"quickp\">\n            <ion-label>Quick Verify</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"newsp\">\n            <ion-label>News</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"accountp\">\n            <ion-label>Account</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/professional/professional.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/home/professional/professional.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7; }\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7; }\n\na {\n  color: #810909; }\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center; }\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center; }\n\n.headerImage {\n  height: 55%;\n  width: 55%;\n  margin: auto;\n  margin-top: 4%;\n  margin-bottom: 0%; }\n\n.segPart {\n  height: 70%;\n  margin: 5%; }\n\n.segPart ion-item {\n  --background: #000;\n  --border-color: white; }\n\n.landTabs {\n  width: 100%;\n  background-color: #000; }\n\n.landTabs ion-label {\n  font-size: 10px;\n  color: wheat; }\n\n.landTabs ion-segment-button {\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content; }\n\n.project_verify {\n  padding: 2px;\n  height: 1.9rem;\n  margin: 0rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxccHJvZmVzc2lvbmFsXFxwcm9mZXNzaW9uYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksZUFBZTtFQUNmLGNBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxnREFBZ0Q7RUFDaEQsY0FBK0I7RUFDL0Isa0JBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZ0I7RUFDaEIsY0FBOEI7RUFDOUIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0ksV0FBa0I7RUFDbEIsVUFBa0I7RUFDbEIsWUFBbUI7RUFDbkIsY0FBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBSXJCO0VBQ0ksV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFlO0VBQ2YscUJBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFzQjtFQUN0QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSxlQUFlO0VBQ2YsWUFBZ0IsRUFBQTs7QUFHcEI7RUFDSSw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQjtFQUN0Qiw4QkFBc0I7RUFBdEIsMkJBQXNCO0VBQXRCLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFlBQVk7RUFDWixjQUFlO0VBQ2YsWUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XHJcbn1cclxuXHJcbi5pbm5lciB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvciAgICA6IHJnYigxNjgsIDE2NywgMTY3KTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogcmdiKDEyOSwgOSwgOSk7XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yICAgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XHJcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xyXG59XHJcblxyXG5saW5rIHtcclxuICAgIGZvbnQtc2l6ZSA6IDEzcHg7XHJcbiAgICBjb2xvciAgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vICBUYWJzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmhlYWRlckltYWdlIHtcclxuICAgIGhlaWdodCAgICAgICA6IDU1JTtcclxuICAgIHdpZHRoICAgICAgICA6IDU1JTtcclxuICAgIG1hcmdpbiAgICAgICA6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wICAgOiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAlO1xyXG59XHJcblxyXG5cclxuLnNlZ1BhcnQge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4uc2VnUGFydCBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQgIDogIzAwMDtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxhbmRUYWJzIHtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubGFuZFRhYnMgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yICAgIDogd2hlYXQ7XHJcbn1cclxuXHJcbi5sYW5kVGFicyBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0X3ZlcmlmeSB7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBoZWlnaHQgOiAxLjlyZW07XHJcbiAgICBtYXJnaW4gOiAwcmVtO1xyXG59XHJcblxyXG4vLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0iXX0= */"

/***/ }),

/***/ "./src/app/home/professional/professional.page.ts":
/*!********************************************************!*\
  !*** ./src/app/home/professional/professional.page.ts ***!
  \********************************************************/
/*! exports provided: ProfessionalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalPage", function() { return ProfessionalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






var ProfessionalPage = /** @class */ (function () {
    function ProfessionalPage(toastController, restApi, navCtrl, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.land_seg = "dashboardp";
        // land_seg: string = "accountp";
        this.change_account = "update_account";
        this.errorMessage = '';
        this.successMessage = '';
        // Quick Verify
        this.exceptStrs = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
        this.keyArray = [];
        this.valArray = [];
        // Accounts -------------------------
        this.account = {
            name: this.authService.userDetails().name,
            newpass: '',
            confirm: '',
            oldpass: ''
        };
        this.delete_account = {
            oldpass: '',
            confirm: ''
        };
        // check Staff 
        this.moffice = '';
    }
    ProfessionalPage.prototype.ngOnInit = function () {
        this.getAccount();
        if (this.authService.userDetails()) {
            this.userName = this.authService.userDetails().name;
        }
        else {
            this.navCtrl.navigateBack('');
        }
    };
    ProfessionalPage.prototype.project = function () {
        this.router.navigateByUrl('home/professional/project');
    };
    ProfessionalPage.prototype.profile = function () {
        this.router.navigateByUrl('home/professional/profile');
    };
    ProfessionalPage.prototype.report = function () {
        this.router.navigateByUrl('home/professional/report');
    };
    ProfessionalPage.prototype.plans = function () {
        this.router.navigateByUrl('home/professional/plans');
    };
    ProfessionalPage.prototype.bids = function () {
        this.router.navigateByUrl('home/professional/business');
    };
    ProfessionalPage.prototype.logout = function () {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    };
    ProfessionalPage.prototype.getProfess = function () {
        var _this = this;
        this.restApi.get('professional/get-profess').subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.objs = res.data;
                    console.log(_this.objs);
                }
                else {
                    _this.restApi.toast(res.message, 1200);
                }
            }
        }, function (error) {
            _this.restApi.toast("Something went wrong.", 1200);
        });
    };
    // Quick verify search function ------------------
    ProfessionalPage.prototype.manageData = function (data) {
        try {
            this.keyArray = Object.keys(data);
            for (var index = 0; index < this.keyArray.length; index++) {
                if (this.exceptStrs.includes(this.keyArray[index])) {
                    continue;
                }
                var updateKey = "";
                if (this.keyArray[index].includes("_")) {
                    updateKey = this.keyArray[index].split("_")[0].toUpperCase() + " " + this.keyArray[index].split("_")[1].toUpperCase();
                }
                else {
                    updateKey = this.keyArray[index].toUpperCase();
                }
                var eachVal = { key: updateKey, val: data[this.keyArray[index].toString()] };
                this.valArray.push(eachVal);
            }
        }
        catch (error) {
            console.log(error);
            this.restApi.toast('Response data type is wrong.', 1200);
        }
    };
    ProfessionalPage.prototype.searchContent = function () {
        var _this = this;
        if (this.keyword == null) {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else if (this.keyword.trim() == "") {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else {
            this.valArray = [];
            this.restApi.post('/search', { key: this.keyword.trim() })
                .subscribe(function (res) {
                console.log(res);
                if (res && res.status) {
                    if (res.status == 'success') {
                        _this.restApi.toast('Successfully.', 1200);
                        _this.manageData(res.data);
                    }
                    else {
                        _this.restApi.toast('There is no result.', 1200);
                    }
                }
            }, function (error) {
                console.log(error);
                _this.restApi.toast('Please Check search bar.', 1200);
            });
        }
    };
    // user Account - update and delete -----------------------
    ProfessionalPage.prototype.update = function (key) {
        var _this = this;
        var checkFlag = true;
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
            this.restApi.post('accessor/up-user', { user_id: this.authService.user.userId, data: this.account, pass: this.account.oldpass, key: key }).subscribe(function (res) {
                if (res && res.status) {
                    console.log(res.status);
                    if (res.status == 'success') {
                        _this.account.name = res.data.name;
                        _this.restApi.toast("Updated as successfully. Please login again.", 1200);
                        _this.logout();
                    }
                    else {
                        _this.restApi.toast(res.data, 1200);
                    }
                }
            }, function (error) {
                _this.restApi.toast("Please input correct current password.", 1200);
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
            this.restApi.post('accessor/up-user', { user_id: this.authService.user.userId, data: {}, pass: this.delete_account.oldpass, key: key }).subscribe(function (res) {
                if (res && res.status) {
                    if (res.status == 'success') {
                        _this.restApi.toast("Updated as successfully. Please login again.", 1200);
                        _this.logout();
                    }
                    else {
                        _this.restApi.toast(res.data, 1200);
                    }
                }
            }, function (error) {
                _this.restApi.toast("Please input correct current password.", 1200);
            });
        }
        if (checkFlag) {
        }
    };
    ProfessionalPage.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = 0;
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Your account and all information will be removed.',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary'
                                    }, {
                                        text: 'Okay',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            {
                                                _this.update('delete');
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Dashboard page functions
    ProfessionalPage.prototype.getAccount = function () {
        var _this = this;
        this.restApi.post('/get-users', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status == "success") {
                _this.account.name = res.data.name;
                _this.account.email = res.data.email;
                _this.account.mobile = res.data.mobile;
                _this.checkStaff();
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Something went wrong.", 1200);
        });
    };
    ProfessionalPage.prototype.checkStaff = function () {
        var _this = this;
        this.restApi.post('professional/check-staff', { email: this.account.email }).subscribe(function (res) {
            if (res && res.status == "success") {
                if (res.data == 'no') {
                    _this.restApi.toast("There is no staff confirm request.", 800);
                }
                _this.moffice = res.data;
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Something went wrong.", 1200);
        });
    };
    ProfessionalPage.prototype.saction = function (key) {
        var _this = this;
        this.restApi.post('professional/verify-staff', { email: this.account.email, key: key }).subscribe(function (res) {
            if (res && res.status == 'success') {
                _this.restApi.toast(" Updated as successfully.", 1200);
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Something went wrong.", 1200);
            _this.restApi.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    ProfessionalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.page.html */ "./src/app/home/professional/professional.page.html"),
            styles: [__webpack_require__(/*! ./professional.page.scss */ "./src/app/home/professional/professional.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], ProfessionalPage);
    return ProfessionalPage;
}());



/***/ })

}]);
//# sourceMappingURL=professional-professional-module.js.map