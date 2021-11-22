(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-user-public-user-module"],{

/***/ "./src/app/home/public-user/public-user.module.ts":
/*!********************************************************!*\
  !*** ./src/app/home/public-user/public-user.module.ts ***!
  \********************************************************/
/*! exports provided: PublicUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicUserPageModule", function() { return PublicUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _public_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public-user.page */ "./src/app/home/public-user/public-user.page.ts");







var routes = [
    {
        path: '',
        component: _public_user_page__WEBPACK_IMPORTED_MODULE_6__["PublicUserPage"]
    }
];
var PublicUserPageModule = /** @class */ (function () {
    function PublicUserPageModule() {
    }
    PublicUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_public_user_page__WEBPACK_IMPORTED_MODULE_6__["PublicUserPage"]]
        })
    ], PublicUserPageModule);
    return PublicUserPageModule;
}());



/***/ }),

/***/ "./src/app/home/public-user/public-user.page.html":
/*!********************************************************!*\
  !*** ./src/app/home/public-user/public-user.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Public User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <table class=\"table\" style=\"margin-top:40px\">\n        <tr>\n          <th>City</th>\n          <th>Province</th>\n          <th>Name</th>\n          <th>Consultant</th>\n        </tr>\n        <tr *ngFor=\"let x of objs\">\n          <td>{{x.contact_city}}</td>\n          <td>{{x.contact_province}}</td>\n          <td>{{x.name}}</td>\n          <td>{{x.lead_consultant}}</td>\n        </tr>\n      </tbody>\n    </table>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/public-user/public-user.page.scss":
/*!********************************************************!*\
  !*** ./src/app/home/public-user/public-user.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.schedule_btn {\n  margin: auto; }\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wdWJsaWMtdXNlci9GOlxcMjAyMFxcMDhcXGlvbmljX2FwcFxcVmVyaXByb2ZfbWFpblxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxwdWJsaWMtdXNlclxccHVibGljLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVQ5QjtJQWFRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHVibGljLXVzZXIvcHVibGljLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVkdWxlX2xpbmV7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbn1cclxuLnNjaGVkdWxlX2J0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4udGFibGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3Jze1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/public-user/public-user.page.ts":
/*!******************************************************!*\
  !*** ./src/app/home/public-user/public-user.page.ts ***!
  \******************************************************/
/*! exports provided: PublicUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicUserPage", function() { return PublicUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PublicUserPage = /** @class */ (function () {
    function PublicUserPage(restApi, authService, toastController) {
        this.restApi = restApi;
        this.authService = authService;
        this.toastController = toastController;
        this.objs = [];
    }
    PublicUserPage.prototype.ngOnInit = function () {
        this.getProfess();
    };
    PublicUserPage.prototype.toast = function (message) {
        this.toastController.create({
            message: message,
            duration: 2000
        }).then(function (toast) { return toast.present(); });
    };
    PublicUserPage.prototype.getProfess = function () {
        var _this = this;
        this.restApi.post('professional/get-profess', { user_id: this.authService.user.userId }).subscribe(function (res) {
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
    PublicUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-public-user',
            template: __webpack_require__(/*! ./public-user.page.html */ "./src/app/home/public-user/public-user.page.html"),
            styles: [__webpack_require__(/*! ./public-user.page.scss */ "./src/app/home/public-user/public-user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], PublicUserPage);
    return PublicUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-user-public-user-module.js.map