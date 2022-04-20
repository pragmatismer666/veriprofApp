(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./src/app/home/professional/report/report.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/report/report.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "./src/app/home/professional/report/report.page.ts");







var routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]
    }
];
var ReportPageModule = /** @class */ (function () {
    function ReportPageModule() {
    }
    ReportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
        })
    ], ReportPageModule);
    return ReportPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/report/report.page.html":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/report/report.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>Report</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"scrollH\">\n        <table class=\"table\">\n            <tr>\n                <th>ID</th>\n                <th>Assessor</th>\n                <th>Type</th>\n                <th>Download</th>\n            </tr>\n            <tr *ngFor=\"let x of objs\">\n                <td>{{x.id}}</td>\n                <td>{{x.accessor}}</td>\n                <td>{{x.report_type}} Submission</td>\n                <td class=\"d-flex\">\n                    <ion-button size=\"small\" color=\"success\" (click)=\"download(x.filename)\" style=\"font-size: 10px;\">\n                        Download</ion-button>\n                </td>\n            </tr>\n        </table>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/professional/report/report.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/report/report.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n.schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.schedule_btn {\n  margin: auto; }\n\n.table {\n  margin: 5%;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcmVwb3J0L0c6XFxpb25pY1xcaW9uaWNfYXBwXFx2ZXJpcHJvZi1hcHAvc3JjXFxhcHBcXGhvbWVcXHByb2Zlc3Npb25hbFxccmVwb3J0XFxyZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBRXpCO0VBQ0EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVQ5QjtJQWFRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmVzc2lvbmFsL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XG4gICAgfVxuICAgIC5zY2hlZHVsZV9saW5le1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgIG1hcmdpbi1yaWdodDozMHB4O1xufVxuLnNjaGVkdWxlX2J0bntcbiAgICBtYXJnaW46IGF1dG87XG59XG4udGFibGV7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtaW4td2lkdGg6IDkwJTtcbiAgICB0aHtcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICB9XG5cbiAgICB0ZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICB9XG59XG5cbi5zY3JvbGxIIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnZhbGlkYXRpb24tZXJyb3Jze1xuICAgIGNvbG9yOiAjMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/professional/report/report.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/professional/report/report.page.ts ***!
  \*********************************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");






var ReportPage = /** @class */ (function () {
    function ReportPage(toastController, restApi, navCtrl, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    ReportPage.prototype.ngOnInit = function () {
        // this.getMyStatus();
        this.getReport();
    };
    ReportPage.prototype.getMyStatus = function () {
        var _this = this;
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                try {
                    _this.account = res.personal['0'].account.concat(' Account');
                }
                catch (Error) {
                    _this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
                        duration: 2000
                    }).then(function (toast) { return toast.present(); });
                }
                if (_this.account != "Pro Account") {
                    _this.navCtrl.navigateRoot('home/professional');
                    _this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
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
    ReportPage.prototype.getReport = function () {
        var _this = this;
        this.restApi.post('professional/get-report', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    _this.objs = res.data;
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
    ReportPage.prototype.download = function (filename) {
        console.log(filename);
        this.restApi.downfile('reports/', filename);
    };
    ReportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.page.html */ "./src/app/home/professional/report/report.page.html"),
            styles: [__webpack_require__(/*! ./report.page.scss */ "./src/app/home/professional/report/report.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], ReportPage);
    return ReportPage;
}());



/***/ })

}]);
//# sourceMappingURL=report-report-module.js.map