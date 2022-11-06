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
    }
    ngOnInit() {
        // this.getReport();
        this.getMyReport();
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
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    getReport() {
        this.restApi.post('professional/get-report', {}).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.objs = res.data;
                }
                else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    // Get my Bid and Plan Documents
    getMyReport() {
        this.restApi.post('professional/get-myReport', { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.objs = res.data;
                }
                else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
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

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d;\n}\n\n.schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.schedule_btn {\n  margin: auto;\n}\n\n.table {\n  margin: 1%;\n  width: 98%;\n  margin-top: 10px;\n  font-size: 14px;\n}\n\n.table th {\n  background: #8a8a8a;\n  padding: 5px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.table td {\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n}\n\n.validation-errors {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDUjs7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUlBO0VBQ0ksV0FBQTtBQURKIiwiZmlsZSI6InJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3IgICAgOiByZ2IoMTA5LCAxMDksIDEwOSk7XG59XG5cbi5zY2hlZHVsZV9saW5lIHtcbiAgICBtYXJnaW4gICAgICA6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQgOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbn1cblxuLnNjaGVkdWxlX2J0biB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGFibGUge1xuICAgIG1hcmdpbiAgICA6IDElO1xuICAgIHdpZHRoICAgICA6IDk4JTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZSA6IDE0cHg7XG5cbiAgICB0aCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XG4gICAgICAgIHBhZGRpbmcgICA6IDVweDtcbiAgICAgICAgY29sb3IgICAgIDogI2ZmZjtcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgICBwYWRkaW5nICAgOiA1cHg7XG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cbn1cblxuLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgICBjb2xvcjogIzAwMDtcbn0iXX0= */";

/***/ }),

/***/ 2334:
/*!**********************************************************************!*\
  !*** ./src/app/home/professional/report/report.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>Report</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card>\n        <table class=\"table\">\n            <tr>\n                <!-- <th>ID</th>\n                <th>Assessor</th> -->\n                <th>Type</th>\n                <th>Client Name</th>\n                <th>Created at</th>\n                <th>Document</th>\n            </tr>\n            <tr *ngFor=\"let x of objs\">\n                <!-- <td>{{x.id}}</td>\n                <td>{{x.accessor}}</td>\n                <td>{{x.report_type}} Submission</td> -->\n                <td>{{x.type}}</td>\n                <td>{{x.client_name}}</td>\n                <td>{{x.created_at}}</td>\n                <td (click)=\"download(x.file)\" style=\"background-color: lightgreen;\">Download</td>\n            </tr>\n        </table>\n    </ion-card>\n</ion-content>\n\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_report_report_module_ts.js.map