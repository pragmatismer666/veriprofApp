(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["schedules-schedules-module"],{

/***/ "./src/app/home/assessor/schedules/schedules.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.module.ts ***!
  \*************************************************************/
/*! exports provided: SchedulesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesPageModule", function() { return SchedulesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _schedules_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedules.page */ "./src/app/home/assessor/schedules/schedules.page.ts");







var routes = [
    {
        path: '',
        component: _schedules_page__WEBPACK_IMPORTED_MODULE_6__["SchedulesPage"]
    }
];
var SchedulesPageModule = /** @class */ (function () {
    function SchedulesPageModule() {
    }
    SchedulesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // Validators,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_schedules_page__WEBPACK_IMPORTED_MODULE_6__["SchedulesPage"]]
        })
    ], SchedulesPageModule);
    return SchedulesPageModule;
}());



/***/ }),

/***/ "./src/app/home/assessor/schedules/schedules.page.html":
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Schedules</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form class=\"schedule_line\" [formGroup]=\"schedule_form\" (ngSubmit)=\"schedule_confirm(schedule_form.value)\">\n        <ion-item color=\"\" class=\"\" style=\"margin-top:30px\">\n            <ion-label position=\"floating\" color=\"\" class=\"inner\"></ion-label>\n            <ion-input type=\"text\" formControlName=\"name\" color=\"\" class=\"inner\" [readonly]=\"true\"\n                value={{this.authService.userDetails().name}}></ion-input>\n        </ion-item>\n        <br>\n        <br>\n        <ion-item color=\"\" class=\"\">\n            <ion-label position=\"floating\" color=\"\" class=\"inner\">Verify Target Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"verify_target\" color=\"\" class=\"inner\"\n                value={{schedule_form.verify_target}}></ion-input>\n        </ion-item>\n        <br>\n        <br>\n        <ion-item color=\"\">\n            <ion-label position=\"floating\" color=\"\" class=\"inner\">Location</ion-label>\n            <ion-input type=\"text\" formControlName=\"location\" color=\"\" class=\"inner\" value={{schedule_form.location}}>\n            </ion-input>\n        </ion-item>\n        <br>\n        <br>\n        <ion-segment>\n            <ion-item color=\"\">\n                <ion-label position=\"floating\" color=\"\" class=\"inner\">Meet DateTime</ion-label>\n                <ion-datetime displayFormat=\"YYYY-MM-DDTHH:mm\" formControlName=\"date\" class=\"inner\"\n                    placeholder=\"YYYY-MM-DDTHH:mm\" value={{schedule_form.date}}></ion-datetime>\n            </ion-item>\n            <div class=\"validation-errors\">\n                <ng-container *ngFor=\"let validation of validation_messages.profess\">\n                    <div class=\"error-message\"\n                        *ngIf=\"schedule_form.get('location').hasError(validation.type) && (schedule_form.get('location').dirty)\">\n                        {{ validation.message }}\n                    </div>\n                </ng-container>\n            </div>\n            <ion-button color=\"submit-btn schedule_btn\" style=\"margin-top:15px;\" type=\"submit\"\n                [disabled]=\"!schedule_form.valid\" color=\"success\">Confirm</ion-button>\n        </ion-segment>\n    </form>\n\n    <table class=\"table\" style=\"width:96%;margin: 2%;margin-top:40px; font-size: 11px;\">\n        <tr>\n            <th>Name</th>\n            <th>Verify Target</th>\n            <th>DateTime</th>\n            <th>Location</th>\n        </tr>\n        <tr *ngFor=\"let x of objs\">\n            <td>{{x.name}}</td>\n            <td>{{x.verify_target}}</td>\n            <td>{{x.date.split('.')[0]}}</td>\n            <td>{{x.location}}</td>\n        </tr>\n    </table>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/assessor/schedules/schedules.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.schedule_btn {\n  margin: auto; }\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hc3Nlc3Nvci9zY2hlZHVsZXMvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxcYXNzZXNzb3JcXHNjaGVkdWxlc1xcc2NoZWR1bGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFKbEI7SUFNUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUFUOUI7SUFhUSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUFJOUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fzc2Vzc29yL3NjaGVkdWxlcy9zY2hlZHVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVkdWxlX2xpbmV7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbn1cclxuLnNjaGVkdWxlX2J0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4udGFibGV7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiA5MCU7XHJcbiAgICB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuLnZhbGlkYXRpb24tZXJyb3Jze1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/assessor/schedules/schedules.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.ts ***!
  \***********************************************************/
/*! exports provided: SchedulesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulesPage", function() { return SchedulesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SchedulesPage = /** @class */ (function () {
    function SchedulesPage(toastController, restApi, authService, formBuilder) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'location': [
                { type: 'required', message: 'Location is required.' },
                { type: 'minlength', message: 'Location must be at least 3 letter long.' }
            ],
            'verify_target': [
                { type: 'required', message: 'Contact Person is required.' },
                { type: 'minlength', message: 'Contact Person must be at least 3 letter long.' }
            ],
            'date': [
                { type: 'required', message: 'Date is required.' },
                { type: 'minlength', message: 'Please set date.' }
            ]
        };
    }
    SchedulesPage.prototype.ngOnInit = function () {
        this.schedule_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.authService.userDetails().name.toString()),
            verify_target: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]))
        });
        this.get_schedule();
    };
    SchedulesPage.prototype.get_schedule = function () {
        var _this = this;
        console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.get('accessor/get-schedule').subscribe(function (res) {
            if (res) {
                console.log(res);
                if (res.status == 'success') {
                    _this.objs = res.data;
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    SchedulesPage.prototype.schedule_confirm = function (value) {
        var _this = this;
        this.restApi.post('accessor/put-Schedule', { user_id: this.authService.user.userId, data: value }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.objs = res.data;
                }
                _this.toastController.create({
                    message: res.message,
                    duration: 2000
                }).then(function (toast) { return toast.present(); });
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
        // this.schedule_form.reset();
        // this.get_schedule();
    };
    SchedulesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedules',
            template: __webpack_require__(/*! ./schedules.page.html */ "./src/app/home/assessor/schedules/schedules.page.html"),
            styles: [__webpack_require__(/*! ./schedules.page.scss */ "./src/app/home/assessor/schedules/schedules.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], SchedulesPage);
    return SchedulesPage;
}());



/***/ })

}]);
//# sourceMappingURL=schedules-schedules-module.js.map