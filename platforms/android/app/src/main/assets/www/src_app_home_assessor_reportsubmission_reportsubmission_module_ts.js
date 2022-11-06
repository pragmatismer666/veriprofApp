"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_reportsubmission_reportsubmission_module_ts"],{

/***/ 9793:
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsubmissionPageModule": () => (/* binding */ ReportsubmissionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reportsubmission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportsubmission.page */ 5487);







const routes = [
    {
        path: '',
        component: _reportsubmission_page__WEBPACK_IMPORTED_MODULE_0__.ReportsubmissionPage
    }
];
let ReportsubmissionPageModule = class ReportsubmissionPageModule {
};
ReportsubmissionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_reportsubmission_page__WEBPACK_IMPORTED_MODULE_0__.ReportsubmissionPage]
    })
], ReportsubmissionPageModule);



/***/ }),

/***/ 5487:
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportsubmissionPage": () => (/* binding */ ReportsubmissionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reportsubmission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportsubmission.page.html?ngResource */ 3679);
/* harmony import */ var _reportsubmission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportsubmission.page.scss?ngResource */ 9491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ReportsubmissionPage = class ReportsubmissionPage {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        let getValue = this.activatedRoute.snapshot.paramMap.get("data");
        console.log(JSON.parse(getValue));
    }
};
ReportsubmissionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ReportsubmissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reportsubmission',
        template: _reportsubmission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reportsubmission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportsubmissionPage);



/***/ }),

/***/ 9491:
/*!**************************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzdWJtaXNzaW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3679:
/*!**************************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>reportsubmission</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_reportsubmission_reportsubmission_module_ts.js.map