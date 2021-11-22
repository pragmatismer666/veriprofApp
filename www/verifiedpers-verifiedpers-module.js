(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifiedpers-verifiedpers-module"],{

/***/ "./src/app/home/accessor/verifiedpers/verifiedpers.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/accessor/verifiedpers/verifiedpers.module.ts ***!
  \*******************************************************************/
/*! exports provided: VerifiedpersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedpersPageModule", function() { return VerifiedpersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verifiedpers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifiedpers.page */ "./src/app/home/accessor/verifiedpers/verifiedpers.page.ts");







var routes = [
    {
        path: '',
        component: _verifiedpers_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedpersPage"]
    }
];
var VerifiedpersPageModule = /** @class */ (function () {
    function VerifiedpersPageModule() {
    }
    VerifiedpersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verifiedpers_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedpersPage"]]
        })
    ], VerifiedpersPageModule);
    return VerifiedpersPageModule;
}());



/***/ }),

/***/ "./src/app/home/accessor/verifiedpers/verifiedpers.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/accessor/verifiedpers/verifiedpers.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Verified Professional</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scrollH\">\n    <table class=\"table\">\n      <tr>\n        <th>Name</th>\n        <th>Mobile</th>\n        <th>Email</th>\n      </tr>\n      <tr *ngFor=\"let x of objs\">\n        <td>{{x.name}}</td>\n        <td>{{x.mobile}}</td>\n        <td>{{x.email}}</td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/accessor/verifiedpers/verifiedpers.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/accessor/verifiedpers/verifiedpers.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px;\n  min-width: 100%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2Nlc3Nvci92ZXJpZmllZHBlcnMvRjpcXDIwMjBcXDA4XFxpb25pY19hcHBcXFZlcmlwcm9mX21haW5cXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxcYWNjZXNzb3JcXHZlcmlmaWVkcGVyc1xcdmVyaWZpZWRwZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFGbkI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVA5QjtJQVdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjY2Vzc29yL3ZlcmlmaWVkcGVycy92ZXJpZmllZHBlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/accessor/verifiedpers/verifiedpers.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/accessor/verifiedpers/verifiedpers.page.ts ***!
  \*****************************************************************/
/*! exports provided: VerifiedpersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedpersPage", function() { return VerifiedpersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var VerifiedpersPage = /** @class */ (function () {
    function VerifiedpersPage(toastController, restApi, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
    }
    VerifiedpersPage.prototype.ngOnInit = function () {
        this.getAll();
    };
    VerifiedpersPage.prototype.getAll = function () {
        var _this = this;
        this.restApi.post('accessor/get-verified-prof', {}).subscribe(function (res) {
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
    VerifiedpersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifiedpers',
            template: __webpack_require__(/*! ./verifiedpers.page.html */ "./src/app/home/accessor/verifiedpers/verifiedpers.page.html"),
            styles: [__webpack_require__(/*! ./verifiedpers.page.scss */ "./src/app/home/accessor/verifiedpers/verifiedpers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], VerifiedpersPage);
    return VerifiedpersPage;
}());



/***/ })

}]);
//# sourceMappingURL=verifiedpers-verifiedpers-module.js.map