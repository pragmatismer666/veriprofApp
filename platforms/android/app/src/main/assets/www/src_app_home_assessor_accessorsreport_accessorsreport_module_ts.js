"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_accessorsreport_accessorsreport_module_ts"],{

/***/ 8662:
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessorsreportPageModule": () => (/* binding */ AccessorsreportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _accessorsreport_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessorsreport.page */ 5566);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







const routes = [
    {
        path: '',
        component: _accessorsreport_page__WEBPACK_IMPORTED_MODULE_0__.AccessorsreportPage,
    },
    { path: 'reportgenerator', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_accessorsreport_reportgenerator_reportgenerator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reportgenerator/reportgenerator.module */ 868)).then(m => m.ReportgeneratorPageModule) },
    // './reportgenerator/reportgenerator.module#ReportgeneratorPageModule'
];
let AccessorsreportPageModule = class AccessorsreportPageModule {
};
AccessorsreportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        ],
        // providers:[
        //   FileOpener,
        //   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
        // ],
        declarations: [_accessorsreport_page__WEBPACK_IMPORTED_MODULE_0__.AccessorsreportPage],
    })
], AccessorsreportPageModule);



/***/ }),

/***/ 5566:
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessorsreportPage": () => (/* binding */ AccessorsreportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accessorsreport_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessorsreport.page.html?ngResource */ 2252);
/* harmony import */ var _accessorsreport_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessorsreport.page.scss?ngResource */ 1671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);











let AccessorsreportPage = class AccessorsreportPage {
    constructor(toastController, restApi, authService, formBuilder, loadingCtrl, nav, router) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.router = router;
        this.assessor_report = "projectp";
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
    ngOnInit() {
        this.report_form = this.formBuilder.group({
            accessor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            report_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(),
            report_title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            profess_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            report_content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ]))
        });
        this.accessor_name = String(this.authService.user.name);
        this.report_form.get('accessor').setValue(this.accessor_name);
        this.getRegisteredProfess();
        this.getProjects();
        this.get_unverified_business();
        this.get_unverified_profile();
        this.get_eplan();
    }
    // project submission
    getProjects() {
        this.restApi.get('accessor/get-projects').subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.projects = res.data;
                }
                else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Business Submission
    get_unverified_business() {
        this.restApi.get('accessor/get-unverifyBusiness').subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.unverified_business = res.data;
                }
                else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Profile Submission
    get_unverified_profile() {
        this.restApi.get('accessor/get-unverifyProfiles').subscribe((res) => {
            console.log(res.data);
            if (res && res.status) {
                if (res.status == 'success') {
                    this.unverified_profiles = res.data;
                }
                else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Eplan Submission
    get_eplan() {
        this.restApi.get('accessor/get-eplans').subscribe((res) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.eplans = res.data;
                }
                else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // action 
    action(data, type) {
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: type,
            }
        };
        this.router.navigate(['home/assessor/accessorsreport/reportgenerator'], navigationExtras);
    }
    download(type, filename) {
        this.restApi.downfile(type + '/', filename);
    }
    report_confirm(value) {
        this.restApi.post('accessor/add-report', { user_id: this.authService.user.userId, user_name: this.authService.user.name, data: value }).subscribe((res) => {
            if (res && res.status) {
                if (res.data == "limited") {
                    this.toastController.create({ message: res.message, duration: 2000 }).then(toast => toast.present());
                }
                else {
                    this.toastController.create({ message: res.message, duration: 2000 }).then(toast => toast.present());
                }
                this.report_form.reset();
                this.report_form.get('accessor').setValue(String(this.authService.user.name));
                this.getRegisteredProfess();
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    getRegisteredProfess() {
        this.restApi.get('professional/get-profess').subscribe((res) => {
            if (res && res.status) {
                this.profess = res.data;
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
};
AccessorsreportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AccessorsreportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-accessorsreport',
        template: _accessorsreport_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_accessorsreport_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccessorsreportPage);



/***/ }),

/***/ 1671:
/*!************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".schedule_line {\n  margin-top: 25px !important;\n  margin-left: 30px !important;\n  margin-right: 30px !important;\n}\n\n.table {\n  margin: 2%;\n  width: 96%;\n  font-size: 14px;\n}\n\n.table th {\n  background: #8a8a8a;\n  padding: 3px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.table tr {\n  background: #ccc;\n}\n\n.table td {\n  background: #ccc;\n  padding: 3px;\n  color: #000;\n  border: 1px solid #fff;\n  height: 100%;\n}\n\n.scrollH {\n  overflow-x: auto;\n}\n\n.validation-errors {\n  color: #000;\n}\n\n.landTabs {\n  position: fixed;\n  bottom: 0;\n  color: wheat !important;\n}\n\n.landTabs ion-segment-button {\n  --indicator-color: var(--ion-color-dark);\n  color: wheat !important;\n  border-radius: 0px !important;\n  border: 0.05px solid #1d1d1d;\n  font-size: 14px;\n  height: 35px;\n}\n\n.segment-button-checked ::ng-deep {\n  border-top: 3px solid #fff !important;\n}\n\n.segPart ion-item {\n  background-color: #000;\n}\n\n.segPart ion-card {\n  background-color: #000;\n}\n\n.segPart ion-card h6 {\n  text-align: center;\n  color: wheat;\n}\n\n.segPart ion-card ion-button {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzc29yc3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtBQUFSOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7QUFGSjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFNQTtFQUNJLHdDQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLHFDQUFBO0FBSEo7O0FBT0E7RUFDSSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksc0JBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKSiIsImZpbGUiOiJhY2Nlc3NvcnNyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjaGVkdWxlX2xpbmUge1xyXG4gICAgbWFyZ2luLXRvcCAgOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgbWFyZ2luICAgOiAyJTtcclxuICAgIHdpZHRoICAgIDogOTYlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDNweDtcclxuICAgICAgICBjb2xvciAgICAgOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIHRyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDNweDtcclxuICAgICAgICBjb2xvciAgICAgOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGhlaWdodCAgICA6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uLWVycm9ycyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLy8gdGFiIC0gc2VnbWVuZXRcclxuLmxhbmRUYWJzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbSAgOiAwO1xyXG4gICAgY29sb3IgICA6IHdoZWF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sYW5kVGFicyBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgLS1pbmRpY2F0b3ItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIGNvbG9yICAgICAgICAgICAgOiB3aGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICA6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyICAgICAgICAgICA6IDAuMDVweCBzb2xpZCByZ2IoMjksIDI5LCAyOSk7XHJcbiAgICBmb250LXNpemUgICAgICAgIDogMTRweDtcclxuICAgIGhlaWdodCAgICAgICAgICAgOiAzNXB4O1xyXG59XHJcblxyXG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCA6Om5nLWRlZXAge1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gc2VncGFydFxyXG4uc2VnUGFydCBpb24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc2VnUGFydCBpb24tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc2VnUGFydCBpb24tY2FyZCBoNiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvciAgICAgOiB3aGVhdDtcclxufVxyXG5cclxuLnNlZ1BhcnQgaW9uLWNhcmQgaW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcCAgOiAxMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 2252:
/*!************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/accessorsreport.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Assessors Report</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content-overflow-hidden\" padding color=\"dark\">\n    <div [ngSwitch]=\"assessor_report\" class=\"segPart\">\n        <ion-card class=\"mt-3\" *ngSwitchCase=\"'projectp'\">\n            <h6>Project Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Title</th>\n                        <!-- <th>Type</th> -->\n                        <th>client Name</th>\n                        <th>Leader Name</th>\n                        <th>Status</th>\n                        <th>PDF(certification)</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let project of projects\">\n                        <td>{{project.title}}</td>\n                        <!-- <td>{{project.type}}</td> -->\n                        <td>{{project.client_name}}</td>\n                        <td>{{project.pl_name}}</td>\n                        <td>{{project.status}}</td>\n                        <td (click)=\"download('uploads', project.pratical_certification)\"\n                            style=\"background-color: white;\">Download</td>\n                        <td (click)=\"action(project, 'project')\" style=\"background-color: lightgreen;\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'profilep'\">\n            <h6>Profile Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Name</th>\n                        <!-- <th>Council</th> -->\n                        <th>Experience</th>\n                        <th>Job</th>\n                        <th>PDF(CV)</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let profile of unverified_profiles\">\n                        <td>{{profile.name}}</td>\n                        <!-- <td>{{profile.council}}</td> -->\n                        <td>{{profile.exp_year}}</td>\n                        <td>{{profile.jtitle}}</td>\n                        <td (click)=\"download('uploads', profile.cv)\" style=\"background-color: white;\">\n                            Download</td>\n                        <td (click)=\"action(profile, 'profile')\" style=\"background-color: lightgreen;\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'businessp'\">\n            <h6>Business Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Business Name</th>\n                        <th>Council No</th>\n                        <th>Org Type</th>\n                        <th>Directors</th>\n                        <th>Office Type</th>\n                        <th>PDF</th>\n                        <th>Action</th>\n                    </tr>\n                    <tr *ngFor=\"let business of unverified_business\">\n                        <td>{{business.pname}}</td>\n                        <td>{{business.pcouncil}}</td>\n                        <td>{{business.ptype}}</td>\n                        <td>{{business.director}}</td>\n                        <ng-container *ngIf=\"business.is_head == '1'\">\n                            <td>Head</td>\n                        </ng-container>\n                        <ng-container *ngIf=\"business.is_head != '1'\">\n                            <td>Branch</td>\n                        </ng-container>\n                        <td (click)=\"download('uploads/office', business.filename)\" style=\"background-color: white;\">\n                            Download\n                        </td>\n                        <td (click)=\"download(business, 'business')\" style=\"background-color: lightgreen;\">Verify</td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n    </div>\n    <ion-segment [(ngModel)]=\"assessor_report\" class=\"landTabs\">\n        <ion-segment-button value=\"projectp\">\n            <ion-label>Project</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"profilep\">\n            <ion-label>Profile</ion-label>\n        </ion-segment-button>\n        <ion-segment-button color=\"dark\" value=\"businessp\">\n            <ion-label>Business</ion-label>\n        </ion-segment-button>\n        <!-- <ion-segment-button color=\"dark\" value=\"eplanp\">\n            <ion-label>Eplan</ion-label>\n        </ion-segment-button>\n        <ion-segment-button color=\"dark\" value=\"newp\">\n            <ion-label>News</ion-label>\n        </ion-segment-button> -->\n    </ion-segment>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_accessorsreport_accessorsreport_module_ts.js.map