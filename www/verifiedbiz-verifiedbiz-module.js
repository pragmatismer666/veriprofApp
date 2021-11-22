(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifiedbiz-verifiedbiz-module"],{

/***/ "./src/app/home/accessor/verifiedbiz/verifiedbiz.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/accessor/verifiedbiz/verifiedbiz.module.ts ***!
  \*****************************************************************/
/*! exports provided: VerifiedbizPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedbizPageModule", function() { return VerifiedbizPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifiedbiz.page */ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.ts");







var routes = [
    {
        path: '',
        component: _verifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedbizPage"]
    }
];
var VerifiedbizPageModule = /** @class */ (function () {
    function VerifiedbizPageModule() {
    }
    VerifiedbizPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedbizPage"]]
        })
    ], VerifiedbizPageModule);
    return VerifiedbizPageModule;
}());



/***/ }),

/***/ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/accessor/verifiedbiz/verifiedbiz.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Verified Business</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scrollH\">\n    <table class=\"table\">\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>CDP</th>\n        <th>City</th>\n      </tr>\n      <tr *ngFor=\"let x of objs\">\n        <td>{{x.org_name}}</td>\n        <td>{{x.project_type}}</td>\n        <td>{{x.cdp_level}}</td>\n        <td>{{x.city}}</td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/accessor/verifiedbiz/verifiedbiz.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px;\n  min-width: 100%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2Nlc3Nvci92ZXJpZmllZGJpei9GOlxcMjAyMFxcMDhcXGlvbmljX2FwcFxcVmVyaXByb2ZfbWFpblxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxhY2Nlc3NvclxcdmVyaWZpZWRiaXpcXHZlcmlmaWVkYml6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFGbkI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVA5QjtJQVdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjY2Vzc29yL3ZlcmlmaWVkYml6L3ZlcmlmaWVkYml6LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/accessor/verifiedbiz/verifiedbiz.page.ts ***!
  \***************************************************************/
/*! exports provided: VerifiedbizPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedbizPage", function() { return VerifiedbizPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var VerifiedbizPage = /** @class */ (function () {
    function VerifiedbizPage(toastController, restApi, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
    }
    VerifiedbizPage.prototype.ngOnInit = function () {
        this.getAll();
    };
    VerifiedbizPage.prototype.getAll = function () {
        var _this = this;
        this.restApi.post('accessor/get-verified-business', {}).subscribe(function (res) {
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
    VerifiedbizPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifiedbiz',
            template: __webpack_require__(/*! ./verifiedbiz.page.html */ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.html"),
            styles: [__webpack_require__(/*! ./verifiedbiz.page.scss */ "./src/app/home/accessor/verifiedbiz/verifiedbiz.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], VerifiedbizPage);
    return VerifiedbizPage;
}());



/***/ })

}]);
//# sourceMappingURL=verifiedbiz-verifiedbiz-module.js.map