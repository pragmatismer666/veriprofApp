(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "./src/app/home/professional/verify/verify.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/verify/verify.module.ts ***!
  \***********************************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "./src/app/home/professional/verify/verify.page.ts");







var routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]
    }
];
var VerifyPageModule = /** @class */ (function () {
    function VerifyPageModule() {
    }
    VerifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
        })
    ], VerifyPageModule);
    return VerifyPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/verify/verify.page.html":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/verify/verify.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <!-- <ion-title>Verification Center</ion-title> -->\n    <ion-title>Quick verify</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-card-content>         \n        <!-- <ion-searchbar  class=\"search\" [(ngModel)]=\"keyword\" Placeholder=\"Search professional by Name, SACAP ID, Business\" (change)=\"getRegisteredProfess($event)\" inputmode=\"search\" ionCancel=\"clean($event)\"></ion-searchbar>  -->\n        <!-- <ion-searchbar animated [(ngModel)]=\"keyword\" Placeholder=\"Search professional by Name, SACAP ID, Business\" (ionBlur)=\"getRegisteredProfess($event)\"></ion-searchbar>  -->\n        <ion-item>\n          <ion-label position=\"stacked\">Search</ion-label>\n          <ion-input name=\"search\" [(ngModel)]=\"keyword\" value=\"\" style=\"background-color: lightyellow;margin-top:10px;\"></ion-input>\n          <ion-button color=\"success\" slot=\"end\" style=\"margin-top:14%;\" (click)=\"getRegisteredProfess()\">Search</ion-button>\n        </ion-item>\n        \n        <!-- <ion-label>Select Registered Professional</ion-label>\n        <ion-select name='profess_detail' [(ngModel)]=\"detailName\" placeholder=\"Quick background check of a professional builder\" multiple='false' style=\"background-color: lightyellow;\">\n          <ng-container *ngFor=\"let x of reg_profess\">\n            <ion-select-option *ngIf=\"x.reg_number != ''\">{{x.name}}</ion-select-option>\n          </ng-container>\n        </ion-select>\n        <ion-button color=\"success\" slot=\"end\" style=\"width: 90%;margin: 10px;\" (click)=\"getRegisterDetail()\">Show Detail</ion-button> -->\n      </ion-card-content>\n    <ion-card>\n      <ng-container *ngIf=\"personalDetail.name == 'start'\">\n      </ng-container>\n      <ng-container *ngIf=\"personalDetail.name == ''\">\n        <h2 style=\"text-align: center;font-size: 16px;\">There is no search result.</h2>\n      </ng-container>\n      <ng-container *ngIf=\"personalDetail.name == 'mistake'\">\n        <h2 style=\"text-align: center;font-size: 16px;\">Please enter keyword.</h2>\n      </ng-container>\n      <ng-container *ngIf=\"personalDetail != null && personalDetail.name != 'start' && personalDetail.name != '' && personalDetail.name != 'mistake'\">\n        <ion-card-content>\n          <h2 style=\"text-align: center;font-size: 18px;\">Verified Professional Detail</h2>\n          <table class=\"rwd-table\">\n            <tbody>\n              <tr>\n                <td data-th=\"Name\">{{personalDetail.name}}</td>\n                <td data-th=\"Register Number\">{{personalDetail.reg_num}}</td>\n                <td data-th=\"Organisation Name\">{{personalDetail.organisation}}</td>\n                <td data-th=\"On VeriProf Since\">{{personalDetail.since}}</td>\n                <td data-th=\"Total Project(s)\">{{personalDetail.project_num}}</td>\n                <td data-th=\"Total Completed\">{{personalDetail.complete}}</td>\n                <td data-th=\"Total Cancelled\">{{personalDetail.cancelled}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </ion-card-content>\n      </ng-container>\n    </ion-card>  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/professional/verify/verify.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/verify/verify.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n.list {\n  font-size: 11px; }\n\nbody {\n  padding: 0 2em;\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  color: #444;\n  background: #eee;\n  font-size: 10   px; }\n\n.project_verify {\n  padding: 2px;\n  height: 1.9rem;\n  margin: 0rem; }\n\n.rwd-table {\n  margin: 1em 0;\n  width: 100%; }\n\n.rwd-table tr {\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd; }\n\n.rwd-table th {\n    display: none; }\n\n.rwd-table td {\n    display: block; }\n\n.rwd-table td:first-child {\n      padding-top: .5em; }\n\n.rwd-table td:last-child {\n      padding-bottom: .5em; }\n\n.rwd-table td:before {\n      content: attr(data-th) \": \";\n      font-weight: bold;\n      width: 13em;\n      display: inline-block; }\n\n@media (min-width: 800px) {\n        .rwd-table td:before {\n          display: none; } }\n\n.rwd-table th, .rwd-table td {\n    text-align: left; }\n\n@media (min-width: 800px) {\n      .rwd-table th, .rwd-table td {\n        display: table-cell;\n        padding: .25em .5em; }\n        .rwd-table th:first-child, .rwd-table td:first-child {\n          padding-left: 0; }\n        .rwd-table th:last-child, .rwd-table td:last-child {\n          padding-right: 0; } }\n\n.rwd-table h1 {\n    font-weight: normal;\n    letter-spacing: -1px;\n    color: #34495E; }\n\n.rwd-table .rwd-table {\n    background: #34495E;\n    color: #fff;\n    border-radius: .4em;\n    overflow: hidden; }\n\n.rwd-table .rwd-table tr {\n      border-color: #46637f; }\n\n.rwd-table .rwd-table th, .rwd-table .rwd-table td {\n      margin: .5em 1em; }\n\n@media (min-width: 800px) {\n        .rwd-table .rwd-table th, .rwd-table .rwd-table td {\n          padding: 1em !important; } }\n\n.rwd-table .rwd-table th, .rwd-table .rwd-table td:before {\n      color: #dd5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvdmVyaWZ5L0Y6XFwyMDIwXFwwOFxcaW9uaWNfYXBwXFxWZXJpcHJvZl9tYWluXFx2ZXJpcHJvZi1hcHAvc3JjXFxhcHBcXGhvbWVcXHByb2Zlc3Npb25hbFxcdmVyaWZ5XFx2ZXJpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUlsQjtFQUNHLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWSxFQUFBOztBQUVmO0VBQ0ksYUFBYTtFQUViLFdBQVUsRUFBQTs7QUFIZDtJQU1NLDBCQUEwQjtJQUMxQiw2QkFBNkIsRUFBQTs7QUFQbkM7SUFXTSxhQUFhLEVBQUE7O0FBWG5CO0lBZU0sY0FBYyxFQUFBOztBQWZwQjtNQWtCUSxpQkFBaUIsRUFBQTs7QUFsQnpCO01BcUJRLG9CQUFvQixFQUFBOztBQXJCNUI7TUF5QlEsMkJBQTBCO01BQzFCLGlCQUFpQjtNQUdqQixXQUFXO01BQ1gscUJBQXFCLEVBQUE7O0FBR3JCO1FBakNSO1VBa0NVLGFBQWEsRUFBQSxFQUVoQjs7QUFwQ1A7SUF3Q00sZ0JBQWdCLEVBQUE7O0FBRWhCO01BMUNOO1FBMkNRLG1CQUFtQjtRQUNuQixtQkFBbUIsRUFBQTtRQTVDM0I7VUErQ1UsZUFBZSxFQUFBO1FBL0N6QjtVQW1EVSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFwRFQ7SUEwRFEsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixjQUFjLEVBQUE7O0FBNUR0QjtJQWdFUSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0IsRUFBQTs7QUFuRXhCO01BcUVVLHFCQUFtQyxFQUFBOztBQXJFN0M7TUF3RVUsZ0JBQWdCLEVBQUE7O0FBQ2hCO1FBekVWO1VBMEVZLHVCQUF1QixFQUFBLEVBRTFCOztBQTVFVDtNQThFVSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2Zlc3Npb25hbC92ZXJpZnkvdmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xuICAgIH1cblxuLmxpc3R7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuXG59XG5cbmJvZHkge1xuICAgIHBhZGRpbmc6IDAgMmVtO1xuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBmb250LXNpemU6IDEwICAgcHg7XG4gIH1cblxuICAgICRicmVha3BvaW50LWFscGhhOiA4MDBweDsgLy8gYWRqdXN0IHRvIHlvdXIgbmVlZHNcbiAgICAucHJvamVjdF92ZXJpZnl7XG4gICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgIGhlaWdodDogMS45cmVtO1xuICAgICAgIG1hcmdpbjogMHJlbTtcbiAgICB9XG4gICAgLnJ3ZC10YWJsZSB7XG4gICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgIC8vIG1pbi13aWR0aDogNjAwcHg7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIFxuICAgICAgICB0ciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGQge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICBcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcbiAgICAgICAgICAgIHdpZHRoOiAxM2VtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAvLyBlbmQgb3B0aW9uc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoLCB0ZCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBoMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgICAgICBjb2xvcjogIzM0NDk1RTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnJ3ZC10YWJsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ0OTVFO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMzNDQ5NUUsIDEwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCwgdGQge1xuICAgICAgICAgICAgICBtYXJnaW46IC41ZW0gMWVtO1xuICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHsgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7IFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCwgdGQ6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNkZDU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAiXX0= */"

/***/ }),

/***/ "./src/app/home/professional/verify/verify.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/professional/verify/verify.page.ts ***!
  \*********************************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");






var VerifyPage = /** @class */ (function () {
    function VerifyPage(toastController, authService, restApi, navCtrl) {
        this.toastController = toastController;
        this.authService = authService;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.personalDetail = {
            name: 'start',
            reg_num: '',
            since: '',
            organisation: '',
            project_num: '',
            complete: '',
            cancelled: ''
        };
    }
    VerifyPage.prototype.ngOnInit = function () {
    };
    // check_register(){
    //   this.restApi.post('professional/check-register', { user_id:this.authService.user.userId}).subscribe((res: any) => {
    //     if (res && res.status) { 
    //       this.register_text = res.data;
    //       if (this.register_text == 'Registered Professional'){
    //         this.getRegisteredProfess();
    //       }
    //       else{
    //         this.toastController.create({
    //           message: res.data,
    //           duration: 2000
    //         }).then(toast => toast.present());  
    //         // this.navCtrl.navigateRoot('home/professional');
    //       }
    //     }
    //   }, error => {
    //     this.toastController.create({
    //       message: 'Something went wrong.',
    //       duration: 2000
    //     }).then(toast => toast.present());
    //   });
    // }
    VerifyPage.prototype.getRegisteredProfess = function () {
        var _this = this;
        console.log();
        if (this.keyword == "") {
            this.personalDetail.name = 'mistake';
        }
        else {
            this.restApi.post('professional/check-exist', { key: this.keyword })
                .subscribe(function (res) {
                if (res && res.status) {
                    if (res.status == 'success') {
                        // this.personalDetail.name = '';
                        if (res.data == "false" || res.profile == "false") {
                            _this.toastController.create({
                                message: 'Successfully but There is no result.',
                                duration: 2000
                            }).then(function (toast) { return toast.present(); });
                            _this.personalDetail.name = '';
                        }
                        else {
                            _this.toastController.create({
                                message: 'Successfully.',
                                duration: 2000
                            }).then(function (toast) { return toast.present(); });
                            _this.manageData(res.data, res.profile);
                        }
                    }
                    else {
                        _this.toastController.create({
                            message: res.message,
                            duration: 2000
                        }).then(function (toast) { return toast.present(); });
                    }
                }
            }, function (error) {
                _this.toastController.create({
                    message: 'Please Check search bar.',
                    duration: 2000
                }).then(function (toast) { return toast.present(); });
            });
        }
    };
    // getRegisterDetail(){
    //   this.restApi.post('professional/get-register-detail', { user_name: this.detailName }).subscribe((res: any) => {
    //     if (res && res.status) {
    //       if (res.status == 'success') {
    //         this.manageData(res.data,res.profile);
    //       } else {
    //         this.toastController.create({
    //           message: res.message,
    //           duration: 2000
    //         }).then(toast => toast.present());
    //       }
    //     }
    //   }, error => {
    //     this.toastController.create({
    //       message: 'Please select professional name.',
    //       duration: 2000
    //     }).then(toast => toast.present());
    //   });
    // }
    VerifyPage.prototype.manageData = function (projects, profile) {
        console.log(projects, profile);
        this.personalDetail.name = '';
        this.personalDetail.name = profile.name;
        this.personalDetail.reg_num = profile.reg_number;
        this.personalDetail.project_num = projects.length;
        this.personalDetail.organisation = profile.organization_type;
        this.personalDetail.since = profile.created_at.toString().split('-')[0];
        this.personalDetail.complete = 0;
        this.personalDetail.cancelled = 0;
        for (var i = 0; i < projects.length; i++) {
            if (projects[i.toString()].status == "Complete") {
                this.personalDetail.complete++;
            }
            if (projects[i.toString()].status == "Cancelled") {
                this.personalDetail.cancelled++;
            }
        }
    };
    VerifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__(/*! ./verify.page.html */ "./src/app/home/professional/verify/verify.page.html"),
            styles: [__webpack_require__(/*! ./verify.page.scss */ "./src/app/home/professional/verify/verify.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], VerifyPage);
    return VerifyPage;
}());



/***/ })

}]);
//# sourceMappingURL=verify-verify-module.js.map