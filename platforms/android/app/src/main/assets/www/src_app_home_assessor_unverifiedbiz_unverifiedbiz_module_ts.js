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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedbiz_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedbiz.page.html?ngResource */ 1310);
/* harmony import */ var _unverifiedbiz_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedbiz.page.scss?ngResource */ 3520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








// import { AlertController } from 'ionic-angular';
let UnverifiedbizPage = class UnverifiedbizPage {
    constructor(toastController, restApi, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.getPending();
    }
    getPending() {
        this.restApi.get('accessor/get-unverifyBusiness').subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.objs = res.data;
                    this.get_schedule();
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    updatebusiness(x) {
        this.restApi.post('accessor/verify-business', { user_id: this.authService.user.userId, business_id: x.buzi_id, office_id: x.id, email: x.email }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.getPending();
                }
                this.restApi.toast(res.data, 1200);
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    verify(x) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(x);
            let val = 0;
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Unverified Business Detail',
                // message: 'Business Title : '+x.org_name+'<br>Project Type : '+x.project_type+'<br>CPD Level : '+x.cdp_level+'<br>CIPC Reg Number : '+x.cipc_reg_number+'<br>Professional : '+x.profess+'<br>Business Address1 : '+x.business_address_line_1+'<br>Business Address2 : '+x.business_address_line2+'<br>City : '+x.city+'<br>Code : '+x.code+'<br>States : '+x.province+'',
                inputs: [{ id: 'pname', name: 'pname', type: 'checkbox', label: 'Name is ' + x.pname + '?', handler: () => { val++; }, },
                    { id: 'pcouncil', name: 'pcouncil', type: 'checkbox', label: 'Practice Council reg. No is ' + x.pcouncil + '?', handler: () => { val++; }, },
                    { name: 'pcipc_reg_no', type: 'checkbox', label: 'CIPC registration is ' + x.pcipc_reg_no + '?', handler: () => { val++; }, },
                    { name: 'ptype', type: 'checkbox', label: 'Business Type is ' + x.ptype + '?', handler: () => { val++; }, },
                    { name: 'director', type: 'checkbox', label: 'Director is ' + x.director + '?', handler: () => { val++; }, },
                    { name: 'dir_prof_regno', type: 'checkbox', label: 'Director Prof registration No is ' + x.dir_prof_regno + '?', handler: () => { val++; }, },
                    { name: 'owned', type: 'checkbox', label: '%Owned is ' + x.owned + '?', handler: () => { val++; }, },
                    { name: 'phone', type: 'checkbox', label: 'Office Phone Number is ' + x.phone + '?', handler: () => { val++; }, },
                    { name: 'email', type: 'checkbox', label: 'Office Email is ' + x.email + '?', handler: () => { val++; }, },
                    { name: 'res_prof_name', type: 'checkbox', label: 'Responsible Professional Name is ' + x.res_prof_name + '?', handler: () => { val++; }, },
                    { name: 'res_prof_reg', type: 'checkbox', label: 'Responsible Professional Reg No is ' + x.res_prof_reg + '?', handler: () => { val++; }, }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Okay',
                        cssClass: 'secondary',
                        handler: () => {
                            if (val >= 11) {
                                this.updatebusiness(x);
                            }
                            else {
                                this.restApi.toast("It is not enough to verify.", 1200);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    get_schedule() {
        console.log(this.authService.userDetails().name, this.authService.user.userId);
        this.restApi.get('accessor/get-schedule').subscribe((res) => {
            if (res) {
                if (res.status == 'success') {
                    this.schedules = res.data;
                    console.log(this.schedules, this.objs);
                    for (var j = 0; j < this.objs.length; j++) {
                        for (var i = 0; i < this.schedules.length; i++) {
                            if (this.schedules[i].verify_target == this.objs[j].email && new Date(this.schedules[i].date).getTime() < new Date().getTime()) {
                                this.objs[j].status = 'Pending';
                            }
                        }
                    }
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    schedule() {
        this.router.navigateByUrl('home/assessor/schedules');
    }
};
UnverifiedbizPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UnverifiedbizPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-unverifiedbiz',
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

module.exports = ".table {\n  font-size: 14px;\n  width: 96%;\n  margin: 2%;\n  margin-top: 5%;\n}\n.table th {\n  background: #8a8a8a;\n  padding: 3px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n.table td {\n  background: #ccc;\n  padding: 3px;\n  color: #000;\n  border: 1px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRiaXoucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQVIiLCJmaWxlIjoidW52ZXJpZmllZGJpei5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgZm9udC1zaXplIDogMTRweDtcclxuICAgIHdpZHRoICAgICA6IDk2JTtcclxuICAgIG1hcmdpbiAgICA6IDIlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZyAgIDogM3B4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZyAgIDogM3B4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 1310:
/*!********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedbiz/unverifiedbiz.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"dark\">\r\n        <ion-back-button slot=\"start\"></ion-back-button>\r\n        <ion-title>Unverified Business Offices</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"scroll-x\">\r\n        <table class=\"table\">\r\n            <tr>\r\n                <th>Name</th>\r\n                <th>Type</th>\r\n                <th>CIPC Reg</th>\r\n                <th>Office Email</th>\r\n                <th>Status</th>\r\n            </tr>\r\n            <tr *ngFor=\"let x of objs\">\r\n                <td>{{x.pname}}</td>\r\n                <td>{{x.ptype}}</td>\r\n                <td>{{x.pcipc_reg_no}}</td>\r\n                <td>{{x.email}}</td>\r\n                <ng-container *ngIf=\"x.status == 'Pending'\">\r\n                    <td (click)=\"verify(x)\" style=\"background-color: lightgreen;\">Begin Schedule</td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"x.status == 'Unverified'\">\r\n                    <td (click)=\"schedule()\" style=\"background-color: rgb(180, 0, 0);\">Begin Schedule</td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"x.status == 'Verified'\">\r\n                    <td>Verified</td>\r\n                </ng-container>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedbiz_unverifiedbiz_module_ts.js.map