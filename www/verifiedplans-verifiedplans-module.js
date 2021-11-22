(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verifiedplans-verifiedplans-module"],{

/***/ "./src/app/home/accessor/verifiedplans/verifiedplans.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/accessor/verifiedplans/verifiedplans.module.ts ***!
  \*********************************************************************/
/*! exports provided: VerifiedplansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedplansPageModule", function() { return VerifiedplansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verifiedplans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verifiedplans.page */ "./src/app/home/accessor/verifiedplans/verifiedplans.page.ts");







var routes = [
    {
        path: '',
        component: _verifiedplans_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedplansPage"]
    }
];
var VerifiedplansPageModule = /** @class */ (function () {
    function VerifiedplansPageModule() {
    }
    VerifiedplansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verifiedplans_page__WEBPACK_IMPORTED_MODULE_6__["VerifiedplansPage"]]
        })
    ], VerifiedplansPageModule);
    return VerifiedplansPageModule;
}());



/***/ }),

/***/ "./src/app/home/accessor/verifiedplans/verifiedplans.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/accessor/verifiedplans/verifiedplans.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Verified Plans</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"scrollH\">\n    <table class=\"table\">\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>City</th>\n        <th>Cost</th>\n        <th>Professional</th>\n      </tr>\n      <tr *ngFor=\"let x of objs\">\n        <td>{{x.project_title}}</td>\n        <td>{{x.project_type}}</td>\n        <td>{{x.project_city}}</td>\n        <td>{{x.project_cost}}</td>\n        <td>{{x.professional_name}}</td>\n      </tr>\n    </table>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/accessor/verifiedplans/verifiedplans.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/accessor/verifiedplans/verifiedplans.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px;\n  min-width: 100%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2Nlc3Nvci92ZXJpZmllZHBsYW5zL0Y6XFwyMDIwXFwwOFxcaW9uaWNfYXBwXFxWZXJpcHJvZl9tYWluXFx2ZXJpcHJvZi1hcHAvc3JjXFxhcHBcXGhvbWVcXGFjY2Vzc29yXFx2ZXJpZmllZHBsYW5zXFx2ZXJpZmllZHBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixlQUFlLEVBQUE7RUFGbkI7SUFJUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVA5QjtJQVdRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjY2Vzc29yL3ZlcmlmaWVkcGxhbnMvdmVyaWZpZWRwbGFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/accessor/verifiedplans/verifiedplans.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/accessor/verifiedplans/verifiedplans.page.ts ***!
  \*******************************************************************/
/*! exports provided: VerifiedplansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedplansPage", function() { return VerifiedplansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var VerifiedplansPage = /** @class */ (function () {
    function VerifiedplansPage(toastController, restApi, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
    }
    VerifiedplansPage.prototype.ngOnInit = function () {
        this.getAll();
    };
    VerifiedplansPage.prototype.getAll = function () {
        var _this = this;
        this.restApi.post('accessor/get-verified-plans', {}).subscribe(function (res) {
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
    VerifiedplansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verifiedplans',
            template: __webpack_require__(/*! ./verifiedplans.page.html */ "./src/app/home/accessor/verifiedplans/verifiedplans.page.html"),
            styles: [__webpack_require__(/*! ./verifiedplans.page.scss */ "./src/app/home/accessor/verifiedplans/verifiedplans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], VerifiedplansPage);
    return VerifiedplansPage;
}());



/***/ })

}]);
//# sourceMappingURL=verifiedplans-verifiedplans-module.js.map