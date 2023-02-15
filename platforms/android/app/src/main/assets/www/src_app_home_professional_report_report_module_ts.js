"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_report_report_module_ts"],{

/***/ 1406:
/*!***********************************************************!*\
  !*** ./src/app/home/professional/report/report.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": () => (/* binding */ ReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 5076);







const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
    }
];
let ReportPageModule = class ReportPageModule {
};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage]
    })
], ReportPageModule);



/***/ }),

/***/ 5076:
/*!*********************************************************!*\
  !*** ./src/app/home/professional/report/report.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": () => (/* binding */ ReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page.html?ngResource */ 2334);
/* harmony import */ var _report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss?ngResource */ 1223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);








let ReportPage = class ReportPage {
    constructor(toastController, restApi, navCtrl, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.objs = [];
        this.reports = [];
        this.segment = "reports";
    }
    ngOnInit() {
        this.restApi.toast(`Your account plan is a ${this.authService.user.account_type}.`, 1500);
        this.getMyPDFs();
        this.getReport();
    }
    getMyStatus() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                try {
                    this.account = res.data['0'].account.concat(' Account');
                }
                catch (Error) {
                    this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
                        duration: 2000
                    }).then(toast => toast.present());
                }
                if (this.account != "Pro Account") {
                    this.navCtrl.navigateRoot('home/professional');
                    this.toastController.create({
                        message: "Oops your account doesn't not permit access to reports. upgrade now to Pro Account to begin generating reports from VeriProf.",
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, (error) => {
            this.toastController.create({
                message: 'Something went wrong!',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    getReport() {
        this.restApi.post('professional/get-report', { user_id: this.authService.user.userId }).subscribe((res) => {
            console.log("professional report getReport = : ", res);
            if (res && res.status) {
                if (res.status == true) {
                    this.reports = res.data;
                }
                else {
                    this.restApi.toast(res.data, 2000);
                }
            }
            else {
                this.restApi.toast("Invalid Database Connection!", 2000);
            }
        }, (error) => {
            console.log("Report getReport error = : ", error);
            this.restApi.toast("Something went wrong!", 2000);
        });
    }
    // Get my Bid and Plan Documents
    getMyPDFs() {
        this.restApi.post("professional/get-myReport", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.objs = res.data;
                }
                else {
                    this.restApi.toast(res.message, 2000);
                }
            }
        }, (error) => {
            console.log("Report getMyPDFs error = : ", error);
            this.restApi.toast("Something went wrong!", 2000);
        });
    }
    download(filename) {
        console.log(filename);
        // this.restApi.downfile('reports/', filename);
        this.restApi.downfile("", filename);
    }
};
ReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService }
];
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-report',
        template: _report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportPage);



/***/ }),

/***/ 1223:
/*!**********************************************************************!*\
  !*** ./src/app/home/professional/report/report.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 800px) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQURKO0FBR0k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBRFI7QUFJSTtFQUNJLGFBQUE7QUFGUjtBQUtJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBSFI7QUFLUTtFQUNJLGtCQUFBO0FBSFo7QUFNUTtFQUNJLHFCQUFBO0FBSlo7QUFPUTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0EscUJBQUE7QUFOWjtBQVNZO0VBUko7SUFTUSxhQUFBO0VBTmQ7QUFDRjtBQVVJOztFQUVJLGdCQUFBO0FBUlI7QUFVUTtFQUpKOztJQUtRLG1CQUFBO0lBQ0Esb0JBQUE7RUFOVjtFQVFVOztJQUNJLGVBQUE7RUFMZDtFQVFVOztJQUNJLGdCQUFBO0VBTGQ7QUFDRjtBQVVJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVdJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVRSO0FBV1E7RUFDSSxxQkFBQTtBQVRaO0FBWVE7O0VBRUksaUJBQUE7QUFWWjtBQVlZO0VBSko7O0lBS1EsdUJBQUE7RUFSZDtBQUNGO0FBV1E7O0VBRUksV0FBQTtBQVRaIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludC1hbHBoYTogODAwcHg7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXG5cbi5yd2QtdGFibGUge1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgd2lkdGggOiAxMDAlO1xuXG4gICAgdHIge1xuICAgICAgICBib3JkZXItdG9wICAgOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICAgIGRpc3BsYXkgICAgOiBibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudCAgICA6IGF0dHIoZGF0YS10aClcIjogXCI7IC8vIHdobyBrbmV3IHlvdSBjb3VsZCBkbyB0aGlzPyBUaGUgaW50ZXJuZXQsIHRoYXQncyB3aG8uXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxuICAgICAgICAgICAgd2lkdGggICAgICA6IDkuNWVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XG4gICAgICAgICAgICBkaXNwbGF5ICAgIDogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgLy8gZW5kIG9wdGlvbnNcblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAuM2VtIC41ZW07XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBjb2xvciAgICAgICAgIDogIzM0NDk1RTtcbiAgICB9XG5cbiAgICAucndkLXRhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZCAgIDogIzM0NDk1RTtcbiAgICAgICAgY29sb3IgICAgICAgIDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xuXG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMzQ0OTVFLCAxMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGgsXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIG1hcmdpbjogLjVlbSAxZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGgsXG4gICAgICAgIHRkOmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogI2RkNTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";

/***/ }),

/***/ 2334:
/*!**********************************************************************!*\
  !*** ./src/app/home/professional/report/report.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\n        <ion-title class=\"h-50px\">Report</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\n        <ion-segment-button value=\"reports\" class=\"dark\" enabled>\n            <ion-icon name=\"star\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Reports</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"myDocs\">\n            <ion-icon name=\"star\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">My PDFs</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'reports'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <h1>Reports</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"reports.length > 0\">\n                        <tr *ngFor=\"let x of reports\">\n                            <td data-th=\"Type\">{{x.report_type}}</td>\n                            <td data-th=\"Assesser Name\">{{x.accessor}}</td>\n                            <td data-th=\"Score\">{{x.score}}</td>\n                            <td data-th=\"Created at\">{{x.created_at}}</td>\n                            <td data-th=\"Document\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe mt-2\"\n                                    (click)=\"download('create/report/'+ x.filename)\">\n                                    Download</ion-button>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"reports.length == 0\">\n                        <div class=\"text-center\">No reports, yet.</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'myDocs'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <h1>My PDFs</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"objs.length > 0\">\n                        <tr *ngFor=\"let x of objs\">\n                            <td data-th=\"Type\">{{x.type}}</td>\n                            <td data-th=\"Client Name\">{{x.client_name}}</td>\n                            <td data-th=\"Created at\">{{x.created_at}}</td>\n                            <td data-th=\"Document\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe mt-2\"\n                                    (click)=\"download(x.file)\">\n                                    Download</ion-button>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"objs.length == 0\">\n                        <div class=\"text-center\">No DPDFs in eplan and bid.</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n\n<!-- <ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_report_report_module_ts.js.map