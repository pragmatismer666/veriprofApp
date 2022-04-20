(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["unverifiedbiz-unverifiedbiz-module"],{

/***/ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.module.ts ***!
  \*********************************************************************/
/*! exports provided: UnverifiedbizPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedbizPageModule", function() { return UnverifiedbizPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unverifiedbiz.page */ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.ts");



// import { FormsModule } from '@angular/forms';




var routes = [
    {
        path: '',
        component: _unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedbizPage"]
    }
];
var UnverifiedbizPageModule = /** @class */ (function () {
    function UnverifiedbizPageModule() {
    }
    UnverifiedbizPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_unverifiedbiz_page__WEBPACK_IMPORTED_MODULE_6__["UnverifiedbizPage"]]
        })
    ], UnverifiedbizPageModule);
    return UnverifiedbizPageModule;
}());



/***/ }),

/***/ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n      <ion-back-button slot=\"start\"></ion-back-button>\r\n      <ion-title>Unverified Business Offices</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n    <div class=\"scrollH\">\r\n      <table class=\"table\">\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Type</th>\r\n          <th>CIPC Reg</th>\r\n          <th>Office Email</th>\r\n          <th>Status</th>\r\n        </tr>\r\n        <tr *ngFor=\"let x of objs\">\r\n          <td>{{x.pname}}</td>\r\n          <td>{{x.ptype}}</td>\r\n          <td>{{x.pcipc_reg_no}}</td>\r\n          <td>{{x.email}}</td>\r\n          <td class=\"d-flex\">\r\n            <ng-container *ngIf=\"x.status == 'Pending'\">\r\n              <ion-button size=\"small\" color=\"success\" class='verifybtn' (click)=\"verify(x)\">Begin Verification</ion-button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"x.status == 'Unverified'\">\r\n              <ion-button size=\"small\" color=\"danger\" class='verifybtn' (click)=\"schedule()\">Verify</ion-button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"x.status == 'Verified'\">Verified</ng-container>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 11px;\n  min-width: 96%;\n  margin: 2%; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n  /* DOES NOT WORK - not specific enough */\n  .alert-wrapper {\n  background: #e5e5e5; }\n  /* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n  .my-custom-class .alert-wrapper {\n  background: #e5e5e5; }\n  .my-custom-class {\n  width: 94%;\n  --background: #e5e5e5;\n  white-space: normal; }\n  .secondary {\n  margin: auto;\n  white-space: normal; }\n  .verifybtn {\n  font-size: 10px;\n  margin-top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hc3Nlc3Nvci91bnZlcmlmaWVkYml6L0c6XFxpb25pY1xcaW9uaWNfYXBwXFx2ZXJpcHJvZi1hcHAvc3JjXFxhcHBcXGhvbWVcXGFzc2Vzc29yXFx1bnZlcmlmaWVkYml6XFx1bnZlcmlmaWVkYml6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVSxFQUFBO0VBSGQ7SUFLUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTtFQVI5QjtJQVlRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBO0VBSTlCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFHcEIsd0NBQUE7RUFDQTtFQUNJLG1CQUFtQixFQUFBO0VBR3ZCLHVFQUFBO0VBQ0E7RUFDSSxtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLFVBQVU7RUFDVixxQkFBYTtFQUNiLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYXNzZXNzb3IvdW52ZXJpZmllZGJpei91bnZlcmlmaWVkYml6LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIG1pbi13aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIHtcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG5cclxuLnZlcmlmeWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.ts ***!
  \*******************************************************************/
/*! exports provided: UnverifiedbizPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnverifiedbizPage", function() { return UnverifiedbizPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






// import { AlertController } from 'ionic-angular';
var UnverifiedbizPage = /** @class */ (function () {
    function UnverifiedbizPage(toastController, restApi, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
    }
    UnverifiedbizPage.prototype.ngOnInit = function () {
        this.getPending();
    };
    UnverifiedbizPage.prototype.getPending = function () {
        var _this = this;
        this.restApi.get('accessor/get-unverifyBusiness').subscribe(function (res) {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    _this.objs = res.data;
                    _this.get_schedule();
                }
                else {
                    _this.restApi.toast(res.message, 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    UnverifiedbizPage.prototype.updatebusiness = function (x) {
        var _this = this;
        this.restApi.post('accessor/verify-business', { user_id: this.authService.user.userId, business_id: x.buzi_id, office_id: x.id, email: x.email }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.getPending();
                }
                _this.restApi.toast(res.data, 1200);
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    UnverifiedbizPage.prototype.verify = function (x) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var val, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = 0;
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Unverified Business Detail',
                                // message: 'Business Title : '+x.org_name+'<br>Project Type : '+x.project_type+'<br>CPD Level : '+x.cdp_level+'<br>CIPC Reg Number : '+x.cipc_reg_number+'<br>Professional : '+x.profess+'<br>Business Address1 : '+x.business_address_line_1+'<br>Business Address2 : '+x.business_address_line2+'<br>City : '+x.city+'<br>Code : '+x.code+'<br>States : '+x.province+'',
                                inputs: [{ id: 'pname', name: 'pname', type: 'checkbox', label: 'Name is ' + x.pname + '?', handler: function () { val++; }, },
                                    { id: 'pcouncil', name: 'pcouncil', type: 'checkbox', label: 'Practice Council reg. No is ' + x.pcouncil + '?', handler: function () { val++; }, },
                                    { name: 'pcipc_reg_no', type: 'checkbox', label: 'CIPC registration is ' + x.pcipc_reg_no + '?', handler: function () { val++; }, },
                                    { name: 'ptype', type: 'checkbox', label: 'Business Type is ' + x.ptype + '?', handler: function () { val++; }, },
                                    { name: 'director', type: 'checkbox', label: 'Director is ' + x.director + '?', handler: function () { val++; }, },
                                    { name: 'dir_prof_regno', type: 'checkbox', label: 'Director Prof registration No is ' + x.dir_prof_regno + '?', handler: function () { val++; }, },
                                    { name: 'owned', type: 'checkbox', label: '%Owned is ' + x.owned + '?', handler: function () { val++; }, },
                                    { name: 'phone', type: 'checkbox', label: 'Office Phone Number is ' + x.phone + '?', handler: function () { val++; }, },
                                    { name: 'email', type: 'checkbox', label: 'Office Email is ' + x.email + '?', handler: function () { val++; }, },
                                    { name: 'res_prof_name', type: 'checkbox', label: 'Responsible Professional Name is ' + x.res_prof_name + '?', handler: function () { val++; }, },
                                    { name: 'res_prof_reg', type: 'checkbox', label: 'Responsible Professional Reg No is ' + x.res_prof_reg + '?', handler: function () { val++; }, }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary'
                                    }, {
                                        text: 'Okay',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            if (val >= 11) {
                                                _this.updatebusiness(x);
                                            }
                                            else {
                                                _this.restApi.toast("It is not enough to verify.", 1200);
                                            }
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UnverifiedbizPage.prototype.get_schedule = function () {
        var _this = this;
        console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.get('accessor/get-schedule').subscribe(function (res) {
            if (res) {
                if (res.status == 'success') {
                    _this.schedules = res.data;
                    console.log(_this.schedules, _this.objs);
                    for (var j = 0; j < _this.objs.length; j++) {
                        for (var i = 0; i < _this.schedules.length; i++) {
                            if (_this.schedules[i].verify_target == _this.objs[j].email && new Date(_this.schedules[i].date).getTime() < new Date().getTime()) {
                                _this.objs[j].status = 'Pending';
                            }
                        }
                    }
                }
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    UnverifiedbizPage.prototype.schedule = function () {
        this.router.navigateByUrl('home/assessor/schedules');
    };
    UnverifiedbizPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-unverifiedbiz',
            template: __webpack_require__(/*! ./unverifiedbiz.page.html */ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.html"),
            styles: [__webpack_require__(/*! ./unverifiedbiz.page.scss */ "./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], UnverifiedbizPage);
    return UnverifiedbizPage;
}());



/***/ })

}]);
//# sourceMappingURL=unverifiedbiz-unverifiedbiz-module.js.map