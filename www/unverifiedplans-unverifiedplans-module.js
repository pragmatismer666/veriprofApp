(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unverifiedplans-unverifiedplans-module"],{

/***/ "./src/app/home/accessor/unverifiedplans/unverifiedplans.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/unverifiedplans/unverifiedplans.module.ts ***!
  \*************************************************************************/
/*! exports provided: UnverifiedplansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedplansPageModule", function() { return UnverifiedplansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unverifiedplans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unverifiedplans.page */ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.ts");







var routes = [
    {
        path: '',
        component: _unverifiedplans_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedplansPage"]
    }
];
var UnverifiedplansPageModule = /** @class */ (function () {
    function UnverifiedplansPageModule() {
    }
    UnverifiedplansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_unverifiedplans_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedplansPage"]]
        })
    ], UnverifiedplansPageModule);
    return UnverifiedplansPageModule;
}());



/***/ }),

/***/ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/unverifiedplans/unverifiedplans.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Unverified Plans</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"\">\n  <div class=\"scrollH\">\n    <table class=\"table\">\n      <tr>\n        <th>Organtion</th>\n        <th>Categories</th>\n        <th>Locations</th>\n        <th>Years Est</th>\n        <!-- <th>CDB Level</th> -->\n        <th>Check</th>\n        <th>Report</th>\n      </tr>\n      <tr *ngFor=\"let x of pendingPlans\">\n        <td>{{x.client_name}}</td>\n        <td>{{x.professional}}</td>\n        <td>{{x.client_city}}</td>\n        <td>2020</td>\n        <td>\n          <ion-radio-group value=\"biff\">\n              <ion-radio slot=\"start\" value=\"true\"></ion-radio>\n              <ion-label style=\"font-size: 14px;\">True</ion-label>\n              <ion-radio slot=\"start\" value=\"false\"></ion-radio>\n              <ion-label style=\"font-size: 13px;\">False</ion-label>\n          </ion-radio-group>\n        </td>\n        <td class=\"d-flex\"><ion-button size=\"small\" color=\"danger\" (click)=\"unverified(x)\">Unverified</ion-button> <ion-button size=\"small\" color=\"success\">Schedule VA</ion-button></td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/unverifiedplans/unverifiedplans.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px;\n  min-width: 100%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2Nlc3Nvci91bnZlcmlmaWVkcGxhbnMvRjpcXDIwMjBcXDA4XFxpb25pY19hcHBcXFZlcmlwcm9mX21haW5cXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxcYWNjZXNzb3JcXHVudmVyaWZpZWRwbGFuc1xcdW52ZXJpZmllZHBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFGbkI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVA5QjtJQVdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjY2Vzc29yL3VudmVyaWZpZWRwbGFucy91bnZlcmlmaWVkcGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxle1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/accessor/unverifiedplans/unverifiedplans.page.ts ***!
  \***********************************************************************/
/*! exports provided: UnverifiedplansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedplansPage", function() { return UnverifiedplansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var UnverifiedplansPage = /** @class */ (function () {
    function UnverifiedplansPage(toastController, restApi, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.pendingPlans = [];
    }
    UnverifiedplansPage.prototype.ngOnInit = function () {
        this.getPending();
    };
    UnverifiedplansPage.prototype.getPending = function () {
        var _this = this;
        this.restApi.post('accessor/get-pending-plan', {}).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.pendingPlans = res.data;
                    console.log(_this.pendingPlans);
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
    UnverifiedplansPage.prototype.unverified = function (x) {
        var _this = this;
        this.restApi.post('accessor/unverify-pending-plan', { plan_id: x.id }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.getPending();
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
    UnverifiedplansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unverifiedplans',
            template: __webpack_require__(/*! ./unverifiedplans.page.html */ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.html"),
            styles: [__webpack_require__(/*! ./unverifiedplans.page.scss */ "./src/app/home/accessor/unverifiedplans/unverifiedplans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], UnverifiedplansPage);
    return UnverifiedplansPage;
}());



/***/ })

}]);
//# sourceMappingURL=unverifiedplans-unverifiedplans-module.js.map