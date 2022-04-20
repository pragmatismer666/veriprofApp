(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportsubmission-reportsubmission-module"],{

/***/ "./src/app/home/assessor/reportsubmission/reportsubmission.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReportsubmissionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsubmissionPageModule", function() { return ReportsubmissionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportsubmission_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportsubmission.page */ "./src/app/home/assessor/reportsubmission/reportsubmission.page.ts");







var routes = [
    {
        path: '',
        component: _reportsubmission_page__WEBPACK_IMPORTED_MODULE_6__["ReportsubmissionPage"]
    }
];
var ReportsubmissionPageModule = /** @class */ (function () {
    function ReportsubmissionPageModule() {
    }
    ReportsubmissionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reportsubmission_page__WEBPACK_IMPORTED_MODULE_6__["ReportsubmissionPage"]]
        })
    ], ReportsubmissionPageModule);
    return ReportsubmissionPageModule;
}());



/***/ }),

/***/ "./src/app/home/assessor/reportsubmission/reportsubmission.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>reportsubmission</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/assessor/reportsubmission/reportsubmission.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXNzZXNzb3IvcmVwb3J0c3VibWlzc2lvbi9yZXBvcnRzdWJtaXNzaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/assessor/reportsubmission/reportsubmission.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/reportsubmission/reportsubmission.page.ts ***!
  \*************************************************************************/
/*! exports provided: ReportsubmissionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsubmissionPage", function() { return ReportsubmissionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ReportsubmissionPage = /** @class */ (function () {
    function ReportsubmissionPage(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ReportsubmissionPage.prototype.ngOnInit = function () {
        var getValue = this.activatedRoute.snapshot.paramMap.get("data");
        console.log(JSON.parse(getValue));
    };
    ReportsubmissionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportsubmission',
            template: __webpack_require__(/*! ./reportsubmission.page.html */ "./src/app/home/assessor/reportsubmission/reportsubmission.page.html"),
            styles: [__webpack_require__(/*! ./reportsubmission.page.scss */ "./src/app/home/assessor/reportsubmission/reportsubmission.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReportsubmissionPage);
    return ReportsubmissionPage;
}());



/***/ })

}]);
//# sourceMappingURL=reportsubmission-reportsubmission-module.js.map