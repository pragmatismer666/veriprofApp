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
        path: "",
        component: _accessorsreport_page__WEBPACK_IMPORTED_MODULE_0__.AccessorsreportPage,
    },
    // {
    //     path: "reportgenerator",
    //     loadChildren: () => import("../reportgenerator/reportgenerator.module").then(m => m.ReportgeneratorPageModule)
    // },
    // "./reportgenerator/reportgenerator.module#ReportgeneratorPageModule"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _accessorsreport_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessorsreport.page.html?ngResource */ 2252);
/* harmony import */ var _accessorsreport_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessorsreport.page.scss?ngResource */ 1671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







// import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";



let AccessorsreportPage = class AccessorsreportPage {
    // eplans: Array<any>;
    constructor(toastController, restApi, authService, loadingCtrl, nav, router, activatedRoute) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.assessor_report = "projectp";
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.type) {
                this.assessor_report = params.type + "p";
            }
        });
    }
    ngOnInit() {
        this.getReport();
    }
    goDashboard() {
        this.router.navigate(["home/assessor"]);
    }
    getReport() {
        this.restApi.post("accessor/get-report", {}).subscribe((res) => {
            if (res && res.status) {
                console.log(res);
                this.profiles = res.profiles;
                this.projects = res.projects;
                this.offices = res.offices;
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    download(filename) {
        this.restApi.downfile("/create/report/", filename);
    }
};
AccessorsreportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
AccessorsreportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-accessorsreport",
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

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\" (click)=\"goDashboard()\" ></ion-back-button>\n        <ion-title>Assessors Report</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-content-overflow-hidden\" padding color=\"dark\">\n    <div [ngSwitch]=\"assessor_report\" class=\"segPart\">\n        <ion-card class=\"mt-3\" *ngSwitchCase=\"'projectp'\">\n            <h6>Project Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Report ID</th>\n                        <th>Assessor</th>\n                        <th>Report Type</th>\n                        <th>Create Date</th>\n                        <th>Report</th>\n                    </tr>\n                    <tr *ngFor=\"let project of projects\">\n                        <td>{{project.id}}</td>\n                        <td>{{project.accessor}}</td>\n                        <td>{{project.report_type}}</td>\n                        <td>{{project.created_at}}</td>\n                        <td (click)=\"download(project.filename)\" style=\"background-color: greenyellow;\">\n                            Download\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'profilep'\">\n            <h6>Profile Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Report ID</th>\n                        <th>Assessor</th>\n                        <th>Report Type</th>\n                        <th>Create Date</th>\n                        <th>Report</th>\n                    </tr>\n                    <tr *ngFor=\"let profile of profiles\">\n                        <td>{{profile.id}}</td>\n                        <td>{{profile.accessor}}</td>\n                        <td>{{profile.report_type}}</td>\n                        <td>{{profile.created_at}}</td>\n                        <td (click)=\"download(profile.filename)\" style=\"background-color: greenyellow;\">\n                            Download\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'officep'\">\n            <h6>Office Submission</h6>\n            <div class=\"scrollH\">\n                <table class=\"table\">\n                    <tr>\n                        <th>Report ID</th>\n                        <th>Assessor</th>\n                        <th>Report Type</th>\n                        <th>Create Date</th>\n                        <th>Report</th>\n                    </tr>\n                    <tr *ngFor=\"let office of offices\">\n                        <td>{{office.id}}</td>\n                        <td>{{office.accessor}}</td>\n                        <td>{{office.report_type}}</td>\n                        <td>{{office.created_at}}</td>\n                        <td (click)=\"download(office.filename)\" style=\"background-color: greenyellow;\">\n                            Download\n                        </td>\n                    </tr>\n                </table>\n            </div>\n        </ion-card>\n    </div>\n    <ion-segment [(ngModel)]=\"assessor_report\" class=\"landTabs\">\n        <ion-segment-button value=\"projectp\">\n            <ion-label>Project</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"profilep\">\n            <ion-label>Profile</ion-label>\n        </ion-segment-button>\n        <ion-segment-button color=\"dark\" value=\"officep\">\n            <ion-label>Office</ion-label>\n        </ion-segment-button>\n        <!-- <ion-segment-button color=\"dark\" value=\"eplanp\">\n            <ion-label>Eplan</ion-label>\n        </ion-segment-button>\n        <ion-segment-button color=\"dark\" value=\"newp\">\n            <ion-label>News</ion-label>\n        </ion-segment-button> -->\n    </ion-segment>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_accessorsreport_accessorsreport_module_ts.js.map