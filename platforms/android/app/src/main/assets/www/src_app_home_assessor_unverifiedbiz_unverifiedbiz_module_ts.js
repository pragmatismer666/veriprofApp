"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_unverifiedbiz_unverifiedbiz_module_ts"],{

/***/ 8834:
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedbizPageModule": () => (/* binding */ UnverifiedbizPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedbiz.page */ 4042);



// import { FormsModule } from '@angular/forms';




const routes = [
    {
        path: '',
        component: _unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedbizPage
    }
];
let UnverifiedbizPageModule = class UnverifiedbizPageModule {
};
UnverifiedbizPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedbizPage]
    })
], UnverifiedbizPageModule);



/***/ }),

/***/ 4042:
/*!*******************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedbizPage": () => (/* binding */ UnverifiedbizPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedbiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedbiz.page.html?ngResource */ 1310);
/* harmony import */ var _unverifiedbiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedbiz.page.scss?ngResource */ 3520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);








// import { AlertController } from "ionic-angular";
let UnverifiedbizPage = class UnverifiedbizPage {
    constructor(toastController, restApi, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.objs = [];
        this.verifieds = [];
    }
    ngOnInit() {
        this.getBusiness();
    }
    getBusiness() {
        this.restApi.post("accessor/get-business", {}).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.objs = res.data;
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
};
UnverifiedbizPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
UnverifiedbizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-unverifiedbiz",
        template: _unverifiedbiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unverifiedbiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnverifiedbizPage);



/***/ }),

/***/ 3520:
/*!********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".top-55px {\n  top: 55px !important;\n}\n\n.rwd-table {\n  margin: 0.5rem 0;\n  width: 100%;\n}\n\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n\n.rwd-table th {\n  display: none;\n}\n\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n\n@media (min-width: 800px) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRiaXoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUFDSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUdJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQURSOztBQUlJO0VBQ0ksYUFBQTtBQUZSOztBQUtJO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBSFI7O0FBS1E7RUFDSSxrQkFBQTtBQUhaOztBQU1RO0VBQ0kscUJBQUE7QUFKWjs7QUFPUTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBQ0EscUJBQUE7QUFOWjs7QUFTWTtFQVJKO0lBU1EsYUFBQTtFQU5kO0FBQ0Y7O0FBVUk7O0VBRUksZ0JBQUE7QUFSUjs7QUFVUTtFQUpKOztJQUtRLG1CQUFBO0lBQ0Esb0JBQUE7RUFOVjtFQVFVOztJQUNJLGVBQUE7RUFMZDtFQVFVOztJQUNJLGdCQUFBO0VBTGQ7QUFDRjs7QUFVSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBUlI7O0FBV0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBV1E7RUFDSSxxQkFBQTtBQVRaOztBQVlROztFQUVJLGlCQUFBO0FBVlo7O0FBWVk7RUFKSjs7SUFLUSx1QkFBQTtFQVJkO0FBQ0Y7O0FBV1E7O0VBRUksV0FBQTtBQVRaIiwiZmlsZSI6InVudmVyaWZpZWRiaXoucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC01NXB4IHtcclxuICAgIHRvcDogNTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4kYnJlYWtwb2ludC1hbHBoYTogODAwcHg7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXHJcblxyXG4ucndkLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcblxyXG4gICAgdHIge1xyXG4gICAgICAgIGJvcmRlci10b3AgICA6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgZGlzcGxheSAgICA6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50ICAgIDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxyXG4gICAgICAgICAgICB3aWR0aCAgICAgIDogOS41ZW07IC8vIG1hZ2ljIG51bWJlciA6KCBhZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgb3duIGNvbnRlbnRcclxuICAgICAgICAgICAgZGlzcGxheSAgICA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgLy8gZW5kIG9wdGlvbnNcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjNlbSAuNWVtO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICBjb2xvciAgICAgICAgIDogIzM0NDk1RTtcclxuICAgIH1cclxuXHJcbiAgICAucndkLXRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kICAgOiAjMzQ0OTVFO1xyXG4gICAgICAgIGNvbG9yICAgICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMzNDQ5NUUsIDEwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLjVlbSAxZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb2xvcjogI2RkNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 1310:
/*!********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\r\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\r\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\r\n        <ion-title class=\"h-50px\">Business</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-card class=\"fixed-ion-card-area top-55px\">\r\n        <ion-card-content>\r\n            <table class=\"rwd-table\">\r\n                <ng-container *ngIf=\"objs.length > 0\">\r\n                    <tr *ngFor=\"let x of objs\">\r\n                        <td data-th=\"Project Name\">{{x.pname}}</td>\r\n                        <td data-th=\"Project Type\">{{x.ptype}}</td>\r\n                        <td data-th=\"Project Council\">{{x.pcouncil}}</td>\r\n                        <td data-th=\"CIPC Reg No\">{{x.pcipc_reg_no}}</td>\r\n                        <td data-th=\"Updated\">{{x.updated_at}}</td>\r\n                        <td data-th=\"Status\">{{x.status}}</td>\r\n                    </tr>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"objs.length == 0\">\r\n                    <div class=\"text-center\">No business</div>\r\n                </ng-container>\r\n            </table>\r\n        </ion-card-content>\r\n    </ion-card>\r\n</ion-content>\r\n<!-- <ion-modal [keepContentsMounted]=\"true\">\r\n    <ng-template>\r\n        <ion-datetime id=\"datetime\"></ion-datetime>\r\n    </ng-template>\r\n</ion-modal> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedbiz_unverifiedbiz_module_ts.js.map