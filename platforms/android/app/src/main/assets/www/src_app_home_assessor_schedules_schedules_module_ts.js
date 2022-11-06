"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_schedules_schedules_module_ts"],{

/***/ 5333:
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulesPageModule": () => (/* binding */ SchedulesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _schedules_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedules.page */ 3441);







const routes = [
    {
        path: '',
        component: _schedules_page__WEBPACK_IMPORTED_MODULE_0__.SchedulesPage
    }
];
let SchedulesPageModule = class SchedulesPageModule {
};
SchedulesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            // Validators,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        ],
        declarations: [_schedules_page__WEBPACK_IMPORTED_MODULE_0__.SchedulesPage]
    })
], SchedulesPageModule);



/***/ }),

/***/ 3441:
/*!***********************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SchedulesPage": () => (/* binding */ SchedulesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _schedules_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedules.page.html?ngResource */ 7156);
/* harmony import */ var _schedules_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedules.page.scss?ngResource */ 9393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);








let SchedulesPage = class SchedulesPage {
    constructor(toastController, restApi, authService, formBuilder) {
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
    ngOnInit() {
        this.schedule_form = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.authService.userDetails().name.toString()),
            verify_target: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ]))
        });
        this.get_schedule();
    }
    get_schedule() {
        console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.get('accessor/get-schedule').subscribe((res) => {
            if (res) {
                console.log(res);
                if (res.status == 'success') {
                    this.objs = res.data;
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    schedule_confirm(value) {
        this.restApi.post('accessor/put-Schedule', { user_id: this.authService.user.userId, data: value }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.objs = res.data;
                }
                this.toastController.create({
                    message: res.message,
                    duration: 2000
                }).then(toast => toast.present());
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
        // this.schedule_form.reset();
        // this.get_schedule();
    }
};
SchedulesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
SchedulesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-schedules',
        template: _schedules_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_schedules_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SchedulesPage);



/***/ }),

/***/ 9393:
/*!************************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  margin: auto;\n  font-size: 11px;\n}\n.table th {\n  background: #8a8a8a;\n  padding: 3px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n.table td {\n  background: #ccc;\n  padding: 3px;\n  color: #000;\n  border: 1px solid #fff;\n}\n.scrollH {\n  overflow-x: auto;\n}\n.validation-errors {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaGVkdWxlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQVI7QUFJQTtFQUNJLGdCQUFBO0FBREo7QUFJQTtFQUNJLFdBQUE7QUFESiIsImZpbGUiOiJzY2hlZHVsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICAgIG1hcmdpbiAgICA6IGF1dG87XHJcbiAgICBmb250LXNpemUgOiAxMXB4O1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDNweDtcclxuICAgICAgICBjb2xvciAgICAgOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDNweDtcclxuICAgICAgICBjb2xvciAgICAgOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbi1lcnJvcnMge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn0iXX0= */";

/***/ }),

/***/ 7156:
/*!************************************************************************!*\
  !*** ./src/app/home/assessor/schedules/schedules.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Schedules</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"p-2 m-2 scroll-y h-100\">\n        <form class=\"p-2\" [formGroup]=\"schedule_form\" (ngSubmit)=\"schedule_confirm(schedule_form.value)\">\n            <ion-item color=\"\" class=\"mt-4\">\n                <ion-label position=\"floating\" color=\"grey\" class=\"inner\">UserName</ion-label>\n                <ion-input type=\"text\" formControlName=\"name\" color=\"\" class=\"inner\" [readonly]=\"true\"\n                    value={{this.authService.userDetails().name}}></ion-input>\n            </ion-item>\n            <ion-item color=\"\" class=\"\">\n                <ion-label position=\"floating\" color=\"gray\" class=\"inner\">Verify Target Email</ion-label>\n                <ion-input type=\"text\" formControlName=\"verify_target\" color=\"\" class=\"inner\"\n                    value={{schedule_form.verify_target}}></ion-input>\n            </ion-item>\n            <ion-item color=\"\">\n                <ion-label position=\"floating\" color=\"gray\" class=\"inner\">Location</ion-label>\n                <ion-input type=\"text\" formControlName=\"location\" color=\"\" class=\"inner\"\n                    value={{schedule_form.location}}>\n                </ion-input>\n            </ion-item>\n            <ion-segment>\n                <ion-datetime displayFormat=\"YYYY-MM-DDTHH:mm\" formControlName=\"date\" class=\"inner\"\n                    placeholder=\"YYYY-MM-DDTHH:mm\" value={{schedule_form.date}}></ion-datetime>\n                <div class=\"validation-errors\">\n                    <ng-container *ngFor=\"let validation of validation_messages.profess\">\n                        <div class=\"error-message\"\n                            *ngIf=\"schedule_form.get('location').hasError(validation.type) && (schedule_form.get('location').dirty)\">\n                            {{ validation.message }}\n                        </div>\n                    </ng-container>\n                </div>\n            </ion-segment>\n            <ion-segment>\n                <ion-button class=\"m-auto mt-1 w-100\" type=\"submit\" [disabled]=\"!schedule_form.valid\" color=\"success\">\n                    Confirm</ion-button>\n            </ion-segment>\n        </form>\n        <div class=\"scrollH\">\n            <table class=\"table mt-4 mb-2\">\n                <tbody>\n                    <tr>\n                        <th>Name</th>\n                        <th>Verify Target</th>\n                        <th>DateTime</th>\n                        <th>Location</th>\n                    </tr>\n                    <tr *ngFor=\"let x of objs\">\n                        <td>{{x.name}}</td>\n                        <td>{{x.verify_target}}</td>\n                        <td>{{x.date.split('.')[0]}}</td>\n                        <td>{{x.location}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_schedules_schedules_module_ts.js.map