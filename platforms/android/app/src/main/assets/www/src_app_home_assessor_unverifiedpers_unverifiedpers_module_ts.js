"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_unverifiedpers_unverifiedpers_module_ts"],{

/***/ 2314:
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedpersPageModule": () => (/* binding */ UnverifiedpersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unverifiedpers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedpers.page */ 9417);







const routes = [
    {
        path: '',
        component: _unverifiedpers_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedpersPage
    }
];
let UnverifiedpersPageModule = class UnverifiedpersPageModule {
};
UnverifiedpersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_unverifiedpers_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedpersPage]
    })
], UnverifiedpersPageModule);



/***/ }),

/***/ 9417:
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedpersPage": () => (/* binding */ UnverifiedpersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedpers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedpers.page.html?ngResource */ 1326);
/* harmony import */ var _unverifiedpers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedpers.page.scss?ngResource */ 5452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);








let UnverifiedpersPage = class UnverifiedpersPage {
    constructor(toastController, router, restApi, authService, alertController) {
        this.toastController = toastController;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.getProfess();
    }
    getProfess() {
        this.restApi.post('accessor/get-prof', {}).subscribe((res) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.objs = res.data;
                    console.log(this.objs);
                }
                else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    schedule() {
        this.router.navigateByUrl('home/assessor/schedules');
    }
};
UnverifiedpersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
UnverifiedpersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-unverifiedpers',
        template: _unverifiedpers_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unverifiedpers_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnverifiedpersPage);



/***/ }),

/***/ 5452:
/*!**********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  font-size: 14px;\n  width: 96%;\n  margin: 2%;\n  margin-top: 5%;\n}\n.table th {\n  background: #8a8a8a;\n  padding: 3px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n.table td {\n  background: #ccc;\n  padding: 3px;\n  color: #000;\n  border: 1px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRwZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFSIiwiZmlsZSI6InVudmVyaWZpZWRwZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBmb250LXNpemUgOiAxNHB4O1xyXG4gICAgd2lkdGggICAgIDogOTYlO1xyXG4gICAgbWFyZ2luICAgIDogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nICAgOiAzcHg7XHJcbiAgICAgICAgY29sb3IgICAgIDogI2ZmZjtcclxuICAgICAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nICAgOiAzcHg7XHJcbiAgICAgICAgY29sb3IgICAgIDogIzAwMDtcclxuICAgICAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 1326:
/*!**********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Unverified Professional</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"scroll-x\">\n        <table class=\"table\">\n            <tr>\n                <th>Name</th>\n                <th>ID No</th>\n                <th>Email</th>\n                <th>Exp in Years</th>\n                <th>Status</th>\n            </tr>\n            <tr *ngFor=\"let x of objs\">\n                <td>{{x.name}}</td>\n                <td>{{x.id_no}}</td>\n                <td>{{x.email}}</td>\n                <td>{{x.exp_year}}</td>\n                <ng-container *ngIf=\"x.status == 'Pending'\">\n                    <td (click)=\"verify(x)\" style=\"background-color: lightgreen;\">Begin Schedule</td>\n                </ng-container>\n                <ng-container *ngIf=\"x.status == 'Unverified'\">\n                    <td (click)=\"schedule()\" style=\"background-color: rgb(180, 0, 0);\">Begin Schedule</td>\n                </ng-container>\n                <ng-container *ngIf=\"x.status == 'Verified'\">\n                    <td>Verified</td>\n                </ng-container>\n            </tr>\n        </table>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedpers_unverifiedpers_module_ts.js.map