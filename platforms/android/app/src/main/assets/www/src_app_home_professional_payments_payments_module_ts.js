"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_payments_payments_module_ts"],{

/***/ 4021:
/*!***************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 4595);







const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
    }
];
let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage]
    })
], PaymentsPageModule);



/***/ }),

/***/ 4595:
/*!*************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": () => (/* binding */ PaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page.html?ngResource */ 253);
/* harmony import */ var _payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss?ngResource */ 2400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);








let PaymentsPage = class PaymentsPage {
    constructor(toastController, authService, navCtrl, restApi) {
        this.toastController = toastController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.restApi = restApi;
        this.paylist = [];
        this.account = "Free Account";
        this.username = this.authService.user.name;
    }
    ngOnInit() {
        if (this.authService.userDetails().account_type != "pro") {
            this.account == "Pro Account";
        }
        else {
            this.account == "Free Account";
        }
    }
    getPaylist() {
        this.restApi.post('professional/get-pay', {}).subscribe((res) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.paylist = res.data;
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    getMyStatus() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                // console.log(res.personal);
                try {
                    this.account = res.data['0'].account.concat(' Account');
                    console.log(this.account);
                    this.updated = res.data['0'].account_updated;
                }
                catch (Error) {
                    this.toastController.create({
                        message: 'You Need To Create. Profile First. ',
                        duration: 2000
                    }).then(toast => toast.present());
                    this.navCtrl.navigateRoot('home/professional');
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    action(act) {
        this.restApi.post('professional/update-pay', { user_id: this.authService.user.userId, account: act }).subscribe((res) => {
            if (res && res.status) {
                this.account = res.personal['0'].account.concat(' Account');
                this.updated = res.personal['0'].account_updated;
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService }
];
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-payments',
        template: _payments_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payments_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentsPage);



/***/ }),

/***/ 2400:
/*!**************************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  font-size: 12px;\n}\n.table th {\n  background: #8a8a8a;\n  padding: 5px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n.table td {\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n}\n.scrollH {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFSO0FBSUE7RUFDSSxnQkFBQTtBQURKIiwiZmlsZSI6InBheW1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 253:
/*!**************************************************************************!*\
  !*** ./src/app/home/professional/payments/payments.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Payment Center</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"p-fixed\" style=\"overflow-y: scroll; margin-top: 10px !important; height: 90%;\">\n        <h4 class=\"text-center mt-4\">Payment Rule</h4>\n        <ng-container *ngIf=\"paylist.length > 0\">\n            <table class=\"table m-3 mb-0\" style=\"width: 90%\">\n                <tr>\n                    <th>ID</th>\n                    <th>Account Type</th>\n                    <th>Amount</th>\n                </tr>\n                <tr *ngFor=\"let x of paylist\">\n                    <td>{{x.id}}</td>\n                    <td>{{x.account}} Account</td>\n                    <ng-container *ngIf=\"x.amount=='0'\">\n                        <td>Free</td>\n                    </ng-container>\n                    <ng-container *ngIf=\"x.amount!='0'\">\n                        <td>R{{x.amount}}</td>\n                    </ng-container>\n                </tr>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"account == 'Free Account'\">\n            <ion-card-content class=\"m-2 mb-0\">\n                <ion-label>\n                    Hi {{username}}, you are currently subscribed to VeriProf Freemium account.\n                    To get more from VeriProf Upgrade your account to Pro Account for a monthly subscription of R89.99\n                    <br>\n                    <br>\n                    Benefits of Pro Account<br>\n                    1. Generate unlimited comprehensive reports of professional and businesses anytime requested.<br>\n                    2. Get notified when any of your data or business data are used on Verify by another person.<br>\n                </ion-label>\n            </ion-card-content>\n        </ng-container>\n        <ng-container *ngIf=\"account == 'Pro Account'\">\n            <ion-card-content class=\"m-2 mb-0\">\n                <ion-label>\n                    <br>\n                    Hi {{username}}, you are on Pro account enjoy every benefit of VeriProf with 24/7 support.\n                    <br>\n                </ion-label>\n            </ion-card-content>\n        </ng-container>\n\n        <h4 class=\"mt-4 text-center\">Update Account Payment Stats</h4>\n        <table class=\"table m-3 mb-1 font-16\" style=\"width: 90%;\">\n            <tr class=\"text-center\">\n                <th>Account Status</th>\n                <th>Updated Date</th>\n            </tr>\n            <tr class=\"text-center\">\n                <td>{{account}}</td>\n                <td>{{updated}}</td>\n            </tr>\n        </table>\n        <!-- <ion-card>\n            <ion-button size=\"small\" color=\"success\" class=\"project_verify pl-3\" (click)=\"action('pro')\"\n                style=\"width: 48%;\">\n                Pro Account</ion-button>\n            <ion-button size=\"small\" color=\"danger\" class=\"project_verify pr-3\" (click)=\"action('free')\"\n                style=\"width: 48%;\">\n                Free Account</ion-button>\n        </ion-card> -->\n        <br>\n        <ion-card-content>\n            <a\n                href=\"https://www.payfast.co.za/eng/process?cmd=_paynow&amp;receiver=11522879&amp;item_name=VeriProf+Pro&amp;amount=89.00&amp;cycles=0&amp;frequency=3&amp;m_payment_id=pay_now_11522879&amp;subscription_type=1\">\n                <img src=\"https://www.payfast.co.za/images/buttons/light-small-subscribe.png\" width=\"210\" height=\"36\"\n                    alt=\"Subscribe\" title=\"Subscribe Now with PayFast\" style=\"width:70%;margin:15%;margin-top:6%;\" />\n            </a>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_payments_payments_module_ts.js.map