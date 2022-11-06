"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 8721:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageModule": () => (/* binding */ LandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page */ 5970);








const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage,
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__.CUSTOM_ELEMENTS_SCHEMA
        ],
        providers: [],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage]
    })
], LandingPageModule);



/***/ }),

/***/ 5970:
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPage": () => (/* binding */ LandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.page.html?ngResource */ 5806);
/* harmony import */ var _landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.page.scss?ngResource */ 2075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/rest-api.service */ 4714);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ 7053);








let LandingPage = class LandingPage {
    constructor(toastController, restApi, navCtrl, router, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
        this.land_seg = "loginp";
        // Quick Verify
        this.exceptStrs = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
        this.keyArray = [];
        this.valArray = [];
    }
    ngOnInit() {
    }
    professional() {
        this.router.navigateByUrl('auth/login/professional');
    }
    assessor() {
        this.router.navigateByUrl('auth/login/assessor');
    }
    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    }
    getDetails() {
        this.restApi.post('get-details', {}).subscribe((res) => {
            if (res && res.status) {
                try {
                    console.log(res.data);
                    this.title = res.data['0']['title'];
                    this.email = res.data['0']['email'];
                    this.phone = res.data['0']['number'];
                    this.address = res.data['0']['address'];
                    this.Alarm = res.data['0']['Alarm'];
                }
                catch (Error) {
                    this.restApi.toast("Something went wrong.", 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
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
            this.restApi.toast('Response data type is wrong.', 1200);
        }
    }
    searchContent() {
        if (this.keyword == null) {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else if (this.keyword.trim() == "") {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else {
            this.valArray = [];
            this.restApi.post('search', { key: this.keyword.trim() })
                .subscribe((res) => {
                console.log(res);
                if (res && res.status) {
                    if (res.status == 'success') {
                        this.restApi.toast('Successfully.', 1200);
                        this.manageData(res.data);
                    }
                    else {
                        this.restApi.toast('There is no result.', 1200);
                    }
                }
            }, error => {
                console.log(error);
                this.restApi.toast('Please Check search bar.', 1200);
            });
        }
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService }
];
LandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-landing',
        template: _landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingPage);



/***/ }),

/***/ 2075:
/*!******************************************************!*\
  !*** ./src/app/landing/landing.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".headerImage {\n  height: 75%;\n  margin: auto;\n  margin-top: 6%;\n  margin-bottom: 0%;\n}\n\n.landTabs {\n  position: fixed;\n  bottom: 0;\n  color: wheat !important;\n}\n\n.landTabs ion-segment-button {\n  --indicator-color: var(--ion-color-dark);\n  color: wheat !important;\n  border-radius: 0px !important;\n  border: 0.05px solid #1d1d1d;\n  font-size: 14px;\n  height: 35px;\n}\n\n.segment-button-checked ::ng-deep {\n  border-top: 3px solid #fff !important;\n}\n\n.segPart ion-item {\n  background-color: #000;\n}\n\n.segPart ion-card {\n  margin-left: 5%;\n  margin-right: 5%;\n  background-color: #000;\n}\n\n.segPart ion-card h1 {\n  text-align: center;\n  color: wheat !important;\n}\n\n.segPart ion-card ion-button {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.quick_verify_card {\n  top: 130px;\n  bottom: 40px;\n  margin-bottom: 0px;\n  width: 90%;\n}\n\nth {\n  width: 100%;\n  background: #8a8a8a;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\ntd {\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHFDQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJsYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJJbWFnZSB7XG4gICAgaGVpZ2h0ICAgICAgIDogNzUlO1xuICAgIG1hcmdpbiAgICAgICA6IGF1dG87XG4gICAgbWFyZ2luLXRvcCAgIDogNiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG59XG5cbi5sYW5kVGFicyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbSAgOiAwO1xuICAgIGNvbG9yOiB3aGVhdCAhaW1wb3J0YW50O1xufVxuXG4ubGFuZFRhYnMgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLWluZGljYXRvci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIGNvbG9yICAgICAgICAgICAgOiB3aGVhdCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXMgICAgOiAwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAuMDVweCBzb2xpZCByZ2IoMjksIDI5LCAyOSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzVweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgOjpuZy1kZWVwIHtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xufVxuLy8gc2VncGFydFxuLnNlZ1BhcnQgaW9uLWl0ZW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLnNlZ1BhcnQgaW9uLWNhcmR7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuLnNlZ1BhcnQgaW9uLWNhcmQgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hlYXQgIWltcG9ydGFudDtcbn1cblxuLnNlZ1BhcnQgaW9uLWNhcmQgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLy8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4ucXVpY2tfdmVyaWZ5X2NhcmQge1xuICAgIHRvcDogMTMwcHg7XG4gICAgYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG50aCB7XG4gICAgd2lkdGggICAgIDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xuICAgIGNvbG9yICAgICA6ICNmZmY7XG4gICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XG59XG5cbnRkIHtcbiAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgIHBhZGRpbmcgICA6IDVweDtcbiAgICBjb2xvciAgICAgOiAjMDAwO1xuICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xuICAgIHdpZHRoICAgICA6IDUwJTtcbn0iXX0= */";

/***/ }),

/***/ 5806:
/*!******************************************************!*\
  !*** ./src/app/landing/landing.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"height: 140px; border: none;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n    </ion-content>\n</ion-header>\n\n<ion-content class=\"ion-content-overflow-hidden\" padding color=\"dark\">\n    <div [ngSwitch]=\"land_seg\" class=\"segPart\">\n        <ion-card class=\"p-fixed quick_verify_card\" *ngSwitchCase=\"'quickp'\">\n            <h1>Quick Verify</h1>\n            <ion-item class=\"m-4 mb-1\" color=\"dark\">\n                <ion-label color=\"success\" position=\"floating\" class=\"inner\">Key Word</ion-label>\n                <ion-input class=\"inner \" type=\"text\" [(ngModel)]=\"keyword\" color=\"light\"></ion-input>\n                <ion-button class=\"inner m-0 mt-3\" color=\"success\" slot=\"end\" (click)=\"searchContent()\">Search</ion-button>\n            </ion-item>\n            <ion-item class=\"m-4 mt-0 mb-1\" color=\"dark\" lines=\"none\" style=\"height: 68%; overflow-y: scroll;\">\n                <tbody>\n                    <ng-container *ngIf=\"valArray != null\">\n                        <tr class=\"w-100 m-auto\" *ngFor=\"let eachVal of valArray\">\n                            <td data-th=\"\">{{eachVal.key}}</td>\n                            <td data-th=\"\">{{eachVal.val}}</td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n            </ion-item>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'newsp'\">\n            <h1 text-center color=\"light\">News</h1>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'loginp'\">\n            <h1 text-center color=\"light\">Login - Account</h1>\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"assessor()\" style=\"margin-top: 30%;\">\n                <ion-icon slot=\"start\" name=\"Construct\"></ion-icon>As An Assessors\n            </ion-button>\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"professional()\" style=\"margin-top: 25%;\">\n                <ion-icon slot=\"start\" name=\"cog\"></ion-icon>As A Professional\n            </ion-button>\n        </ion-card>\n    </div>\n    <ion-segment [(ngModel)]=\"land_seg\" class=\"landTabs\">\n        <ion-segment-button value=\"quickp\">\n            <ion-label>Search</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"newsp\">\n            <ion-label>News</ion-label>\n        </ion-segment-button>\n        <ion-segment-button color=\"dark\" value=\"loginp\">\n            <ion-label>Login</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map