(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payments-module"],{

/***/ "./src/app/home/professional/payments/payments.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payments.page */ "./src/app/home/professional/payments/payments.page.ts");







var routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]
    }
];
var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_6__["PaymentsPage"]]
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/payments/payments.page.html":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Payment Center</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h4 text-center style=\"margin-top:8% ;\">Payment Rule</h4>\n  <table class=\"table\" style=\"width: 90%;margin:5%;margin-top: 3%;\">\n    <tr>\n      <th>ID</th>\n      <th>Account Type</th>\n      <th>Amount</th>\n    </tr>\n    <tr *ngFor=\"let x of paylist\">\n      <td>{{x.id}}</td>\n      <td>{{x.account}} Account</td>\n      <ng-container *ngIf=\"x.amount=='0'\" >\n        <td>Free</td>\n      </ng-container>\n      <ng-container *ngIf=\"x.amount!='0'\" >\n        <td>R{{x.amount}}</td>\n      </ng-container>      \n    </tr>\n  </table>\n  <ng-container *ngIf=\"account == 'Free Account'\" >\n    <ion-card-content style='margin:2%;margin-bottom:0%;'>\n    <ion-label>\n      Hi {{username}}, you are currently subscribed to VeriProf Freemium account. \n      To get more from VeriProf Upgrade your account to Pro Account for a monthly subscription of R89.99\n      <br>\n      <br>\n      Benefits of Pro Account<br>\n      1. Generate unlimited comprehensive reports of professional and businesses anytime requested.<br>\n      2. Get notified when any of your data or business data are used on Verify by another person.<br>\n    </ion-label>\n    </ion-card-content>\n  </ng-container>\n  <ng-container *ngIf=\"account == 'Pro Account'\" >\n    <ion-card-content style='margin:2%;margin-bottom:0%;'>\n    <ion-label>\n      <br>\n      Hi {{username}}, you are on Pro account enjoy every benefit of VeriProf with 24/7 support.\n      <br>\n    </ion-label>\n    </ion-card-content>\n  </ng-container>\n\n  <h4 text-center style=\"margin-top:10% ;\">Update Account Payment Stats</h4>\n  <table class=\"table\" style=\"width: 90%;margin:5%;margin-bottom:1%;font-size:16px ;\">\n    <tr>\n      <th>Account Status</th>\n      <th>Updated Date</th>\n    </tr>\n    <tr style=\"text-align: center;\">\n      <td>{{account}}</td>\n      <td>{{updated}}</td>\n    </tr>\n  </table>\n  <ion-button size=\"small\" color=\"success\" class=\"project_verify\" (click)=\"action('Pro')\" style=\"width: 44%;margin-left: 5%;\">Pro Account</ion-button>\n  <ion-button size=\"small\" color=\"danger\" class=\"project_verify\" (click)=\"action('Free')\" style=\"width: 44%;margin-right: 5%;\">Free Account</ion-button>\n  <br>\n  <ion-card-content >\n    <a href=\"https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=11522879&amp;item_name=VeriProf+Pro&amp;amount=89.00&amp;cycles=0&amp;frequency=3&amp;m_payment_id=pay_now_11522879&amp;subscription_type=1\">\n      <img src=\"https://www.payfast.co.za/images/buttons/light-small-subscribe.png\" width=\"210\" height=\"36\" alt=\"Subscribe\" title=\"Subscribe Now with PayFast\" style=\"width:70%;margin:15%;margin-top:6%;\" />\n    </a>\n  </ion-card-content>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/professional/payments/payments.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 12px; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcGF5bWVudHMvRjpcXDIwMjBcXDA4XFxpb25pY19hcHBcXFZlcmlwcm9mX21haW5cXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxccHJvZmVzc2lvbmFsXFxwYXltZW50c1xccGF5bWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBR1EsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCLEVBQUE7RUFOOUI7SUFVUSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQUk5QjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcGF5bWVudHMvcGF5bWVudHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/professional/payments/payments.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.ts ***!
  \*************************************************************/
/*! exports provided: PaymentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPage", function() { return PaymentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






var PaymentsPage = /** @class */ (function () {
    function PaymentsPage(toastController, authService, navCtrl, restApi) {
        this.toastController = toastController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.restApi = restApi;
        this.username = this.authService.user.name;
    }
    PaymentsPage.prototype.ngOnInit = function () {
        console.log(this.authService.user.name);
        this.getPaylist();
        this.getMyStatus();
    };
    PaymentsPage.prototype.getPaylist = function () {
        var _this = this;
        this.restApi.post('professional/get-pay', {}).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.paylist = res.data;
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    PaymentsPage.prototype.getMyStatus = function () {
        var _this = this;
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                // console.log(res.personal);
                try {
                    _this.account = res.personal['0'].account.concat(' Account');
                    console.log(_this.account);
                    _this.updated = res.personal['0'].account_updated;
                }
                catch (Error) {
                    _this.toastController.create({
                        message: 'You Need To Create. Profile First. ',
                        duration: 2000
                    }).then(function (toast) { return toast.present(); });
                    _this.navCtrl.navigateRoot('home/professional');
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    PaymentsPage.prototype.action = function (act) {
        var _this = this;
        if (this.account != null) {
            this.restApi.post('professional/update-pay', { user_id: this.authService.user.userId, account: act }).subscribe(function (res) {
                if (res && res.status) {
                    _this.account = res.personal['0'].account.concat(' Account');
                    _this.updated = res.personal['0'].account_updated;
                }
            }, function (error) {
                _this.toastController.create({
                    message: 'Something went wrong.',
                    duration: 2000
                }).then(function (toast) { return toast.present(); });
            });
        }
        // else{
        //   this.toastController.create({
        //     message: 'You need to submit your profile.',
        //     duration: 2000
        //   }).then(toast => toast.present());
        // }
    };
    PaymentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payments',
            template: __webpack_require__(/*! ./payments.page.html */ "./src/app/home/professional/payments/payments.page.html"),
            styles: [__webpack_require__(/*! ./payments.page.scss */ "./src/app/home/professional/payments/payments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], PaymentsPage);
    return PaymentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=payments-payments-module.js.map