"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_accessorsreport_reportgenerator_reportgenerator_module_ts"],{

/***/ 868:
/*!*****************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportgeneratorPageModule": () => (/* binding */ ReportgeneratorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportgenerator.page */ 8549);







const routes = [
    {
        path: '',
        component: _reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__.ReportgeneratorPage
    }
];
let ReportgeneratorPageModule = class ReportgeneratorPageModule {
};
ReportgeneratorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__.ReportgeneratorPage]
    })
], ReportgeneratorPageModule);



/***/ }),

/***/ 8549:
/*!***************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportgeneratorPage": () => (/* binding */ ReportgeneratorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reportgenerator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportgenerator.page.html?ngResource */ 9409);
/* harmony import */ var _reportgenerator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportgenerator.page.scss?ngResource */ 1107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);







let ReportgeneratorPage = class ReportgeneratorPage {
    constructor(activatedRoute, router, restApi, authService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.type) {
                this.type = params.type[0].toUpperCase() + params.type.slice(1);
            }
            if (params && params.data) {
                this.data = JSON.parse(params.data);
                var keys = [];
                for (let key in this.data) {
                    keys.push(key);
                }
                let datas = [];
                let continue_index = 0;
                for (let i = 0; i < keys.length; i++) {
                    let val_str = '';
                    if (keys[i] == "id" || keys[i] == "created_by" || keys[i] == "file" || keys[i] == "certificate" || keys[i] == "id_no" || keys[i] == "user_id" || keys[i] == "is_director" || keys[i] == "verified_at" || keys[i] == "verified_by" || keys[i] == "verify_at" || keys[i] == "verify_by" || keys[i] == "updated_at" || keys[i] == "file" || keys[i] == "employer_requirPDF") {
                        if (keys[i] == "created_by" || keys[i] == "user_id") {
                            this.profess_id = this.data[keys[i]];
                        }
                        continue_index++;
                        continue;
                    }
                    else if (keys[i] == "jtitle") {
                        val_str = "JOB TITLE ";
                    }
                    else if (keys[i].includes('_')) {
                        let val_strs = keys[i].split('_');
                        if (val_strs.length > 2) {
                            for (let i = 0; i < val_strs.length; i++) {
                                val_str += val_strs[i].toUpperCase() + " ";
                            }
                        }
                        else if (val_strs[0] == "exp") {
                            val_str = "EXPERIENCE " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "pl") {
                            val_str = "PROJECT LEADER " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "proj") {
                            val_str = "PROJECT " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "prof") {
                            val_str = "PROFESS " + val_strs[1].toUpperCase();
                        }
                        else {
                            val_str = val_strs[0].toUpperCase() + " " + val_strs[1].toUpperCase();
                        }
                    }
                    else {
                        val_str = keys[i].toUpperCase();
                    }
                    let each_row = { id: i + 1 - continue_index, key: val_str, val: this.data[keys[i]], status: 0 };
                    datas.push(each_row);
                }
                this.report_data = datas;
            }
        });
    }
    ngOnInit() {
    }
    generate_report() {
        this.restApi.post('accessor/add-report', { accessor: this.authService.user.name, profess: this.profess_id, report_type: this.type, data: this.report_data, created_by: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.restApi.toast('Generate the report PDF as successfully.', 1200);
                    this.router.navigateByUrl('home/assessor/accessorsreport');
                }
                else {
                    this.restApi.toast('Please retry to generate the report .', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    change_status(each_row, status) {
        if (status.detail.checked) {
            if (this.report_data[each_row.id] != null)
                this.report_data[each_row.id].status = 1;
        }
        else {
            if (this.report_data[each_row.id] != null)
                this.report_data[each_row.id].status = 0;
        }
    }
};
ReportgeneratorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService }
];
ReportgeneratorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-reportgenerator',
        template: _reportgenerator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reportgenerator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportgeneratorPage);



/***/ }),

/***/ 1107:
/*!****************************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  background-color: #363636;\n}\n\nion-content ion-card ion-item {\n  border-style: none;\n}\n\n.table {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: auto;\n  font-size: 11px;\n}\n\n.table th {\n  background: #8a8a8a;\n  padding: 5px;\n  color: #fff;\n  border: 1px solid #fff;\n  font-size: 13px;\n  width: 35%;\n}\n\n.table td {\n  background: #ccc;\n  width: 35%;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n}\n\n.scrollH {\n  position: fixed;\n  height: 80%;\n  overflow: scroll;\n  width: 95%;\n}\n\n.report-padding {\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.title-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGdlbmVyYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUNSOztBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoicmVwb3J0Z2VuZXJhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVte1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5yZXBvcnQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuLy8gdGV4dCBjZW50ZXIgYWxpZ25cclxuLnRpdGxlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 9409:
/*!****************************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-back-button slot=\"start\"></ion-back-button>\n      <ion-title>Assessors Report Generator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"report-padding\">\n    <h4 class=\"report-padding\">{{type}} Submission\n        <ion-button (click)=\"generate_report()\" style=\"margin-top: -2%;padding: 5px;float: right;\">Generate</ion-button>\n    </h4>\n    <div class=\"scrollH report-padding\">\n        <table class=\"table\">\n            <tr>\n                <th>Verify</th>\n                <th>Content</th>\n                <th>Value</th>\n            </tr>\n            <tr *ngFor=\"let each_row of report_data\">\n                <td>\n                    <ion-checkbox class=\"title-center\" color=\"primary\" (ionChange)=\"change_status(each_row, $event)\"></ion-checkbox>\n                </td>\n                <td>{{each_row.key}}</td>\n                <td>{{each_row.val}}</td>\n            </tr>\n        </table>\n    </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_accessorsreport_reportgenerator_reportgenerator_module_ts.js.map