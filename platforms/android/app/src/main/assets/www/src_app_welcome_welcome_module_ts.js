"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_welcome_welcome_module_ts"],{

/***/ 2526:
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePageModule": () => (/* binding */ WelcomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page */ 3297);







const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage
    }
];
let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_0__.WelcomePage]
    })
], WelcomePageModule);



/***/ }),

/***/ 3297:
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomePage": () => (/* binding */ WelcomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.page.html?ngResource */ 7030);
/* harmony import */ var _welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.page.scss?ngResource */ 787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ 7053);
/* harmony import */ var _services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/rest-api.service */ 4714);







let WelcomePage = class WelcomePage {
    constructor(authService, restApi, navCtrl) {
        this.authService = authService;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(" ================================ ");
            let token = yield this.authService.getToken();
            // let token = "776a6ad599005240843e15abb33b6f0c906b90cef71963658a6181ee0f70f662"
            console.log("Auth Service, checkLogin, token : ", token);
            if (token != undefined && token != null) {
                this.restApi.post("check-login", { token: token }).subscribe((res) => {
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
        });
    }
};
WelcomePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: _services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__.RestApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
WelcomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-welcome",
        template: _welcome_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_welcome_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WelcomePage);



/***/ }),

/***/ 787:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: 100%;\n  background-color: black;\n  color: blanchedalmond;\n}\n\nion-button {\n  margin-left: 15%;\n  margin-right: 15%;\n}\n\np {\n  padding: 0 35px;\n  font-size: 16px;\n  line-height: 1.6;\n  color: blanchedalmond;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxQkFBQTtBQUFKIiwiZmlsZSI6IndlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZyAgICA6IDAgMzVweDtcclxuICAgIGZvbnQtc2l6ZSAgOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIC8vIGNvbG9yICAgICAgOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 7030:
/*!******************************************************!*\
  !*** ./src/app/welcome/welcome.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>Welcome</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content-overflow-hidden\">\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\">\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../assets/veriprof-logo.png\" />\n                <h2>Welcome</h2>\n                <p>\n                    VeriProf is a platform designed to protect\n                    the interests of the public and Professionals\n                    within the built environment sector.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../assets/veriprof-logo.png\" />\n                <h2>Redefining transparency</h2>\n                <p>\n                    As a professional in the built environment\n                    VeriProf will provide an independently managed\n                    electronic platform available at the tip of\n                    your figure tips.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../assets/veriprof-logo.png\" />\n                <h2>A new way of protecting your Interest</h2>\n                <p> \n                    As the client, knowing with whom you are engaged\n                    in business with has never been more important.\n                    VeriProf will give you, the client, confirmation\n                    as to whom you deal with.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../assets/veriprof-logo.png\" />\n                <h2>Ready?</h2>\n                <p>want to find out how VeriProf can serve you better?</p>\n                <ion-button color=\"danger\" expand=\"block\" routerLink=\"/landing\" class=\"ml-5 mr-5\">\n                    Let's go <ion-icon slot=\"end\" name=\"arrow-forward\">\n                    </ion-icon>\n                </ion-button>\n            </div>\n        </ion-slide>\n    </ion-slides>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_welcome_welcome_module_ts.js.map