(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unverifiedpers-unverifiedpers-module"],{

/***/ "./src/app/home/assessor/unverifiedpers/unverifiedpers.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.module.ts ***!
  \***********************************************************************/
/*! exports provided: UnverifiedpersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedpersPageModule", function() { return UnverifiedpersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unverifiedpers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unverifiedpers.page */ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.ts");







var routes = [
    {
        path: '',
        component: _unverifiedpers_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedpersPage"]
    }
];
var UnverifiedpersPageModule = /** @class */ (function () {
    function UnverifiedpersPageModule() {
    }
    UnverifiedpersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_unverifiedpers_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedpersPage"]]
        })
    ], UnverifiedpersPageModule);
    return UnverifiedpersPageModule;
}());



/***/ }),

/***/ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Unverified Professional</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scrollH\">\n    <table class=\"table\">\n      <tr>\n        <th>Name</th>\n        <th>ID No</th>\n        <th>Email</th>\n        <th>Exp in Years</th>\n        <th>Status</th>\n      </tr>\n      <tr *ngFor=\"let x of objs\">\n        <td>{{x.name}}</td>\n        <td>{{x.id_no}}</td>\n        <td>{{x.email}}</td>\n        <td>{{x.exp_year}}</td>\n        <td class=\"d-flex\">\n          <ng-container *ngIf=\"x.status == 'Pending'\">\n            <ion-button size=\"small\" color=\"success\" class='verifybtn' (click)=\"verify(x)\">Begin Verification</ion-button>\n          </ng-container>\n          <ng-container *ngIf=\"x.status == 'Unverified'\">\n            <ion-button size=\"small\" color=\"danger\" class='verifybtn' (click)=\"schedule()\">Verify</ion-button>\n          </ng-container>\n          <ng-container *ngIf=\"x.status == 'Verified'\">Verified</ng-container>\n        </td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px;\n  min-width: 100%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n  .verifybtn {\n  font-size: 10px;\n  margin-top: -2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hc3Nlc3Nvci91bnZlcmlmaWVkcGVycy9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxhc3Nlc3NvclxcdW52ZXJpZmllZHBlcnNcXHVudmVyaWZpZWRwZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFGbkI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVA5QjtJQVdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fzc2Vzc29yL3VudmVyaWZpZWRwZXJzL3VudmVyaWZpZWRwZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLnZlcmlmeWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedpers/unverifiedpers.page.ts ***!
  \*********************************************************************/
/*! exports provided: UnverifiedpersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedpersPage", function() { return UnverifiedpersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UnverifiedpersPage = /** @class */ (function () {
    function UnverifiedpersPage(toastController, router, restApi, authService, alertController) {
        this.toastController = toastController;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.alertController = alertController;
    }
    UnverifiedpersPage.prototype.ngOnInit = function () {
        this.getProfess();
    };
    UnverifiedpersPage.prototype.getProfess = function () {
        var _this = this;
        this.restApi.post('accessor/get-prof', {}).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.objs = res.data;
                    console.log(_this.objs);
                }
                else {
                    _this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(function (toast) { return toast.present(); });
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    UnverifiedpersPage.prototype.schedule = function () {
        this.router.navigateByUrl('home/assessor/schedules');
    };
    UnverifiedpersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unverifiedpers',
            template: __webpack_require__(/*! ./unverifiedpers.page.html */ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.html"),
            styles: [__webpack_require__(/*! ./unverifiedpers.page.scss */ "./src/app/home/assessor/unverifiedpers/unverifiedpers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], UnverifiedpersPage);
    return UnverifiedpersPage;
}());



/***/ })

}]);
//# sourceMappingURL=unverifiedpers-unverifiedpers-module.js.map