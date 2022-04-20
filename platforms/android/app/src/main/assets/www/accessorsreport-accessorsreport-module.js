(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accessorsreport-accessorsreport-module"],{

/***/ "./src/app/home/assessor/accessorsreport/accessorsreport.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.module.ts ***!
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
/* harmony import */ var _accessorsreport_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorsreport.page */ "./src/app/home/assessor/accessorsreport/accessorsreport.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");








var routes = [
    {
        path: '',
        component: _accessorsreport_page__WEBPACK_IMPORTED_MODULE_5__["AccessorsreportPage"],
    },
    { path: 'reportgenerator', loadChildren: './reportgenerator/reportgenerator.module#ReportgeneratorPageModule' },
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
                _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
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

/***/ "./src/app/home/assessor/accessorsreport/accessorsreport.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Assessors Report</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n    <form class=\"schedule_line\" [formGroup]=\"report_form\" (ngSubmit)=\"report_confirm(report_form.value)\">\n        <ion-item color=\"\" class=\"report_line\">\n            <ion-label position=\"floating\" color=\"\" class=\"inner\"></ion-label>\n            <ion-input type=\"text\" formControlName=\"accessor\" color=\"\" class=\"inner\" [readonly]=\"true\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"\" class=\"inner\" style=\"margin-bottom:5px ;\">Report Type</ion-label>\n            <ion-select multiple=\"false\" formControlName=\"report_type\" Placeholder=\"Select Report Type\"\n                (ngModelChange)=\"getType($event)\">\n                <ion-select-option value=\"Project submission\"> Project submission Report</ion-select-option>\n                <ion-select-option value=\"Business Registration\">Business Registration Report</ion-select-option>\n                <ion-select-option value=\"ePlan submission Report\">ePlan submission Report</ion-select-option>\n                <ion-select-option value=\"Quick Verify Request Report\">Quick Verify Request Report</ion-select-option>\n                <ion-select-option value=\"Profile Report\">Profile Report</ion-select-option>\n            </ion-select>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label position=\"floating\" color=\"\" class=\"inner\" style=\"margin-bottom:5px ;\">Professional Name\n            </ion-label>\n            <ion-select placeholder=\"Select Professional Name\" formControlName=\"profess_name\" multiple='false'>\n                <ng-container *ngFor=\"let x of profess\">\n                    <ion-select-option *ngIf=\"x.reg_number != ''\">{{x.name}}</ion-select-option>\n                </ng-container>\n            </ion-select>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label position=\"floating\" class=\"inner\">Report Title</ion-label>\n            <ion-input type=\"text\" formControlName=\"report_title\" color=\"\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors schedule_line\">\n            <ng-container *ngFor=\"let validation of validation_messages.report_title\">\n                <div class=\"error-message\"\n                    *ngIf=\"report_form.get('report_title').hasError(validation.type) && (report_form.get('report_title').dirty)\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item>\n            <ion-label position=\"floating\" class=\"inner\">Report Content</ion-label>\n            <ion-textarea rows=\"3\" position=\"floating\" class=\"inner\" formControlName=\"report_content\"\n                placeholder=\"Please write report about the Project.\">\n            </ion-textarea>\n        </ion-item>\n        <br>\n        <ion-row>\n            <ion-button style=\"width: 100%;\" type=\"submit\" [disabled]=\"!report_form.valid\" color=\"success\">Confirm to\n                build report</ion-button>\n        </ion-row>\n    </form>\n</ion-content> -->\n\n<super-tabs activeTabIndex=\"0\"\n    [config]=\"{ debug: true, sideMenu: 'left', allowElementScroll: true, nativeSmoothScroll: true }\">\n    <super-tabs-toolbar slot=\"bottom\">\n        <super-tab-button>\n            <ion-label>Project</ion-label>\n        </super-tab-button>\n        <!-- <super-tab-button>\n            <ion-label>Eplan</ion-label>\n        </super-tab-button> -->\n        <!-- <super-tab-button>\n            <ion-label>News</ion-label>\n        </super-tab-button> -->\n        <super-tab-button>\n            <ion-label>Profile</ion-label>\n        </super-tab-button>\n        <super-tab-button>\n            <ion-label>Business</ion-label>\n        </super-tab-button>\n    </super-tabs-toolbar>\n    <super-tabs-container autoScrollTop>\n        <super-tab >\n            <h4 class=\"title-center\">Project Submission</h4>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Title</th>\n                        <th>Type</th>\n                        <th>client Name</th>\n                        <th>Leader Name</th>\n                        <th>Status</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let project of projects\">\n                        <td>{{project.title}}</td>\n                        <td>{{project.type}}</td>\n                        <td>{{project.client_name}}</td>\n                        <td>{{project.pl_name}}</td>\n                        <td>{{project.status}}</td>\n                        <td class=\"d-flex\" (click)=\"action(project, 'project')\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </super-tab>\n        <!-- <super-tab>\n            <h4 class=\"title-center\">Eplan Submission</h4>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Code</th>\n                        <th>Project Title</th>\n                        <th>Prof Name</th>\n                        <th>Client Name</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let eplan of eplans\">\n                        <td>{{eplan.verify_code}}</td>\n                        <td>{{eplan.project_title}}</td>\n                        <td>{{eplan.professional_name}}</td>\n                        <td>{{eplan.client_name}}</td>\n                        <td class=\"d-flex\" (click)=\"action(eplan, 'eplan')\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </super-tab> -->\n        <!-- <super-tab>\n        </super-tab> -->\n        <super-tab>\n            <h4 class=\"title-center\">Profile Submission</h4>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Council</th>\n                        <th>Experience</th>\n                        <th>Job</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let profile of unverified_profiles\">\n                        <td>{{profile.name}}</td>\n                        <td>{{profile.council}}</td>\n                        <td>{{profile.exp_year}}</td>\n                        <td>{{profile.jtitle}}</td>\n                        <td class=\"d-flex\" (click)=\"action(profile, 'profile')\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </super-tab>\n        <super-tab>\n            <h4 class=\"title-center\">Business Submission</h4>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Council reg No</th>\n                        <th>Type of Organization</th>\n                        <th>Directors</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let business of unverified_business\">\n                        <td>{{business.pname}}</td>\n                        <td>{{business.pcouncil}}</td>\n                        <td>{{business.ptype}}</td>\n                        <td>{{business.director}}</td>\n                        <td class=\"d-flex\" (click)=\"action(business, 'business')\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </super-tab>\n    </super-tabs-container>\n</super-tabs>\n<!-- <ion-footer color=\"dark\" class=\"footer\">\n  <ion-toolbar color=\"\">\n    <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n  </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/home/assessor/accessorsreport/accessorsreport.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".schedule_line {\n  margin-top: 25px !important;\n  margin-left: 30px !important;\n  margin-right: 30px !important; }\n\n.table {\n  margin: auto;\n  font-size: 10px;\n  min-width: 88%;\n  max-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n.footer {\n  font-size: 12px;\n  color: #6d6d6d; }\n\n.title-center {\n  text-align: center; }\n\nsuper-tabs-container super-tab {\n  background-color: #363636;\n  color: blanchedalmond; }\n\nsuper-tabs-container super-tab ion-input {\n  color: blanchedalmond; }\n\nsuper-tabs-container super-tab ion-card {\n  margin-left: 10%;\n  margin-right: 10%; }\n\nsuper-tabs super-tabs-toolbar {\n  background-color: black;\n  color: blanchedalmond; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hc3Nlc3Nvci9hY2Nlc3NvcnNyZXBvcnQvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxcYXNzZXNzb3JcXGFjY2Vzc29yc3JlcG9ydFxcYWNjZXNzb3JzcmVwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBMkI7RUFDM0IsNkJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVQ5QjtJQWFRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLGVBQWU7RUFDZixjQUF5QixFQUFBOztBQUk3QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hc3Nlc3Nvci9hY2Nlc3NvcnNyZXBvcnQvYWNjZXNzb3JzcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2hlZHVsZV9saW5le1xyXG4gICAgbWFyZ2luLXRvcDogMjVweCAhaW1wb3J0YW50OyBcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDozMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1pbi13aWR0aDogODglO1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICB0aHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uLWVycm9yc3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2IoMTA5LCAxMDksIDEwOSk7XHJcbn1cclxuXHJcbi8vIHRleHQgY2VudGVyIGFsaWduXHJcbi50aXRsZS1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLy8gc3VwZXIgdGFiIHN0eWxlXHJcbnN1cGVyLXRhYnMtY29udGFpbmVyIHN1cGVyLXRhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG5zdXBlci10YWJzLWNvbnRhaW5lciBzdXBlci10YWIgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuc3VwZXItdGFicy1jb250YWluZXIgc3VwZXItdGFiIGlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuc3VwZXItdGFicyBzdXBlci10YWJzLXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/assessor/accessorsreport/accessorsreport.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.ts ***!
  \***********************************************************************/
/*! exports provided: AccessorsreportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessorsreportPage", function() { return AccessorsreportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");










var AccessorsreportPage = /** @class */ (function () {
    function AccessorsreportPage(toastController, restApi, authService, formBuilder, loadingCtrl, nav, router) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.router = router;
        this.config = {
            debug: true,
            allowElementScroll: false,
        };
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
            accessor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            report_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            report_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            profess_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
            report_content: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]))
        });
        this.accessor_name = String(this.authService.user.name);
        this.report_form.get('accessor').setValue(this.accessor_name);
        this.getRegisteredProfess();
        this.getProjects();
        this.get_unverified_business();
        this.get_unverified_profile();
        this.get_eplan();
    };
    // project submission
    AccessorsreportPage.prototype.getProjects = function () {
        var _this = this;
        this.restApi.get('accessor/get-projects').subscribe(function (res) {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    _this.projects = res.data;
                }
                else {
                    _this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    // Business Submission
    AccessorsreportPage.prototype.get_unverified_business = function () {
        var _this = this;
        this.restApi.get('accessor/get-unverifyBusiness').subscribe(function (res) {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    _this.unverified_business = res.data;
                }
                else {
                    _this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    // Profile Submission
    AccessorsreportPage.prototype.get_unverified_profile = function () {
        var _this = this;
        this.restApi.get('accessor/get-unverifyProfiles').subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.unverified_profiles = res.data;
                }
                else {
                    _this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    // Eplan Submission
    AccessorsreportPage.prototype.get_eplan = function () {
        var _this = this;
        this.restApi.get('accessor/get-eplans').subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.eplans = res.data;
                }
                else {
                    _this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    // action 
    AccessorsreportPage.prototype.action = function (data, type) {
        var navigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: type,
            }
        };
        this.router.navigate(['home/assessor/accessorsreport/reportgenerator'], navigationExtras);
    };
    AccessorsreportPage.prototype.report_confirm = function (value) {
        var _this = this;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabs"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabs"])
    ], AccessorsreportPage.prototype, "superTabs", void 0);
    AccessorsreportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accessorsreport',
            template: __webpack_require__(/*! ./accessorsreport.page.html */ "./src/app/home/assessor/accessorsreport/accessorsreport.page.html"),
            styles: [__webpack_require__(/*! ./accessorsreport.page.scss */ "./src/app/home/assessor/accessorsreport/accessorsreport.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AccessorsreportPage);
    return AccessorsreportPage;
}());



/***/ })

}]);
//# sourceMappingURL=accessorsreport-accessorsreport-module.js.map