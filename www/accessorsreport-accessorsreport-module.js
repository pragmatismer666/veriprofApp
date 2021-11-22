(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accessorsreport-accessorsreport-module"],{

/***/ "./src/app/home/accessor/accessorsreport/accessorsreport.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/accessorsreport/accessorsreport.module.ts ***!
  \*************************************************************************/
/*! exports provided: AccessorsreportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessorsreportPageModule", function() { return AccessorsreportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _accessorsreport_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorsreport.page */ "./src/app/home/accessor/accessorsreport/accessorsreport.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var routes = [
    {
        path: '',
        component: _accessorsreport_page__WEBPACK_IMPORTED_MODULE_5__["AccessorsreportPage"]
    }
];
var AccessorsreportPageModule = /** @class */ (function () {
    function AccessorsreportPageModule() {
    }
    AccessorsreportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            // providers:[
            //   FileOpener,
            //   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            // ],
            declarations: [_accessorsreport_page__WEBPACK_IMPORTED_MODULE_5__["AccessorsreportPage"]],
        })
    ], AccessorsreportPageModule);
    return AccessorsreportPageModule;
}());



/***/ }),

/***/ "./src/app/home/accessor/accessorsreport/accessorsreport.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/accessorsreport/accessorsreport.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title>Accessors Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form class=\"schedule_line\" [formGroup]=\"report_form\" (ngSubmit)=\"report_confirm(report_form.value)\">\n    <ion-item color=\"\" class=\"report_line\">\n      <ion-label  position=\"floating\" color=\"\" class=\"inner\"></ion-label>\n      <ion-input type=\"text\" formControlName=\"accessor\" color=\"\" class=\"inner\" [readonly]=\"true\"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label  position=\"floating\" color=\"\" class=\"inner\" style=\"margin-bottom:5px ;\">Report Type</ion-label>\n      <ion-select multiple=\"false\" formControlName=\"report_type\" Placeholder=\"Select Report Type\"  (ngModelChange)=\"getType($event)\">\n        <ion-select-option value=\"Project submission\"> Project submission Report</ion-select-option>\n        <ion-select-option value=\"Business Registration\">Business Registration Report</ion-select-option>\n        <ion-select-option value=\"ePlan submission Report\">ePlan submission Report</ion-select-option>\n        <ion-select-option value=\"Quick Verify Request Report\">Quick Verify Request Report</ion-select-option>\n        <ion-select-option value=\"Profile Report\">Profile Report</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label  position=\"floating\" color=\"\" class=\"inner\" style=\"margin-bottom:5px ;\">Professional Name</ion-label>\n      <ion-select placeholder=\"Select Professional Name\" formControlName=\"profess_name\" multiple='false'>\n        <ng-container *ngFor=\"let x of profess\">\n          <ion-select-option *ngIf=\"x.reg_number != ''\">{{x.name}}</ion-select-option>\n        </ng-container>\n      </ion-select>\n    </ion-item>\n    <br>\n    <ion-item>\n      <ion-label  position=\"floating\" class=\"inner\">Report Title</ion-label>\n      <ion-input type=\"text\" formControlName=\"report_title\" color=\"\" class=\"inner\"></ion-input>\n    </ion-item>\n    <div class=\"validation-errors schedule_line\">\n      <ng-container *ngFor=\"let validation of validation_messages.report_title\">\n        <div class=\"error-message\" *ngIf=\"report_form.get('report_title').hasError(validation.type) && (report_form.get('report_title').dirty)\">\n          {{ validation.message }}\n        </div>\n      </ng-container>\n    </div>\n    <ion-item>\n      <ion-label  position=\"floating\" class=\"inner\">Report Content</ion-label>\n      <ion-textarea\n      rows=\"3\"\n      position=\"floating\"\n      class=\"inner\"\n      formControlName = \"report_content\"\n      placeholder=\"Please write report about the Project.\">\n    </ion-textarea>\n    </ion-item>\n    <br>\n    <ion-row >\n      <ion-button style=\"width: 100%;\" type=\"submit\" [disabled]=\"!report_form.valid\" color=\"success\">Confirm to build report</ion-button>\n    </ion-row>\n  </form>\n</ion-content>\n\n<ion-footer color=\"dark\" class=\"footer\">\n  <ion-toolbar color=\"\">\n    <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n  </ion-toolbar>\n</ion-footer>\n\n\n"

/***/ }),

/***/ "./src/app/home/accessor/accessorsreport/accessorsreport.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/accessor/accessorsreport/accessorsreport.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule_line {\n  margin-top: 25px !important;\n  margin-left: 30px !important;\n  margin-right: 30px !important; }\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n.footer {\n  font-size: 12px;\n  color: #6d6d6d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY2Nlc3Nvci9hY2Nlc3NvcnNyZXBvcnQvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxcYWNjZXNzb3JcXGFjY2Vzc29yc3JlcG9ydFxcYWNjZXNzb3JzcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVQ5QjtJQWFRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixjQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY2Nlc3Nvci9hY2Nlc3NvcnNyZXBvcnQvYWNjZXNzb3JzcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZV9saW5le1xyXG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDozMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4udmFsaWRhdGlvbi1lcnJvcnN7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/accessor/accessorsreport/accessorsreport.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/accessor/accessorsreport/accessorsreport.page.ts ***!
  \***********************************************************************/
/*! exports provided: AccessorsreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessorsreportPage", function() { return AccessorsreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







// import * as jsPDF from 'jspdf';
// import domtoimage from 'dom-to-image';
// import { File, IWriteOptions } from '@ionic-native/file/ngx';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
var AccessorsreportPage = /** @class */ (function () {
    function AccessorsreportPage(toastController, restApi, authService, formBuilder, loadingCtrl) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.validation_messages = {
            'report_title': [
                { type: 'required', message: 'Report Title is required.' }
            ],
            'profess_name': [
                { type: 'required', message: 'Professional Name is required.' }
            ],
            'report_content': [
                { type: 'required', message: 'Report Content is required.' }
            ]
        };
    }
    AccessorsreportPage.prototype.ngOnInit = function () {
        this.report_form = this.formBuilder.group({
            accessor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            report_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            report_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            profess_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            report_content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]))
        });
        this.accessor_name = String(this.authService.user.name);
        this.report_form.get('accessor').setValue(this.accessor_name);
        this.getRegisteredProfess();
    };
    AccessorsreportPage.prototype.report_confirm = function (value) {
        var _this = this;
        console.log(value);
        this.restApi.post('accessor/add-report', { user_id: this.authService.user.userId, user_name: this.authService.user.name, data: value }).subscribe(function (res) {
            if (res && res.status) {
                if (res.data == "limited") {
                    _this.toastController.create({ message: res.message, duration: 2000 }).then(function (toast) { return toast.present(); });
                }
                else {
                    _this.toastController.create({ message: res.message, duration: 2000 }).then(function (toast) { return toast.present(); });
                }
                _this.report_form.reset();
                _this.report_form.get('accessor').setValue(String(_this.authService.user.name));
                _this.getRegisteredProfess();
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    AccessorsreportPage.prototype.getRegisteredProfess = function () {
        var _this = this;
        this.restApi.get('professional/get-profess').subscribe(function (res) {
            if (res && res.status) {
                _this.profess = res.data;
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    AccessorsreportPage.prototype.getType = function ($event) {
        console.log(this.report_form, $event);
        // if (type.includes("Project")){
        //   this.restApi.post('accessor/get-project',{}).subscribe((res:any)=>{
        //     if (res && res.status){
        //       this.profess = res.data;
        //     }
        //   }, error => {
        //     this.toastController.create({
        //       message: 'Something went wrong.',
        //       duration: 2000
        //     }).then(toast => toast.present());
        //   });
        // }
        // else if (type.includes("Project")){
        // }
    };
    AccessorsreportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accessorsreport',
            template: __webpack_require__(/*! ./accessorsreport.page.html */ "./src/app/home/accessor/accessorsreport/accessorsreport.page.html"),
            styles: [__webpack_require__(/*! ./accessorsreport.page.scss */ "./src/app/home/accessor/accessorsreport/accessorsreport.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]])
    ], AccessorsreportPage);
    return AccessorsreportPage;
}());



/***/ })

}]);
//# sourceMappingURL=accessorsreport-accessorsreport-module.js.map