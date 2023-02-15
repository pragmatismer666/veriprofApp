"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_unverifiedoffice_unverifiedoffice_module_ts"],{

/***/ 7187:
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedoffice/unverifiedoffice.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedofficePageModule": () => (/* binding */ UnverifiedofficePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unverifiedoffice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedoffice.page */ 8728);



// import { FormsModule } from '@angular/forms';




const routes = [
    {
        path: '',
        component: _unverifiedoffice_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedofficePage
    }
];
let UnverifiedofficePageModule = class UnverifiedofficePageModule {
};
UnverifiedofficePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_unverifiedoffice_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedofficePage]
    })
], UnverifiedofficePageModule);



/***/ }),

/***/ 8728:
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedoffice/unverifiedoffice.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedofficePage": () => (/* binding */ UnverifiedofficePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedoffice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedoffice.page.html?ngResource */ 3786);
/* harmony import */ var _unverifiedoffice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedoffice.page.scss?ngResource */ 5520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








// import { AlertController } from "ionic-angular";
let UnverifiedofficePage = class UnverifiedofficePage {
    constructor(toastController, restApi, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.segment = "unverified";
        this.offices = [];
        this.verified = [];
    }
    ngOnInit() {
        this.getUnverifiedOffice();
        this.getVerifiedOffice();
    }
    getUnverifiedOffice() {
        this.restApi.post("accessor/get-unverifiedOffice", {}).subscribe((res) => {
            if (res && res.status) {
                // console.log("UnverifiedofficePage getUnverifiedOffice res.data = : ", JSON.stringify(res.data));
                if (res.status == "success") {
                    this.offices = res.data;
                    // console.log("UnverifiedofficePage getUnverifiedOffice this.offices = : ", JSON.stringify(this.offices));
                    // this.get_schedule();
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
    getVerifiedOffice() {
        this.restApi.post("accessor/get-verifiedOffice", {}).subscribe((res) => {
            if (res && res.status) {
                // console.log(res.data);
                if (res.status == "success") {
                    this.verified = res.data;
                    // this.get_schedule();
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
    checkDate(date) {
        return true;
    }
    selectDate(x) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let nowDateTime = new Date((new Date).getTime() + 60 * 60 * 24 * 1000).toJSON().toString().split("T")[0];
            const alert = yield this.alertController.create({
                header: "Please select date",
                inputs: [
                    {
                        name: "schedule_date",
                        placeholder: "Select DateTime",
                        type: "datetime-local",
                        min: `${nowDateTime}T00:00`,
                    }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary",
                        handler: () => {
                            console.log("Confirm Cancel");
                        }
                    },
                    {
                        text: "Ok",
                        handler: (alertData) => {
                            this.addSchedule(x, alertData.schedule_date);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addSchedule(x, schedule_date) {
        let newSchedule = {
            verify_user_id: x.created_by,
            verify_target: "office",
            verify_content_id: x.id,
            created_by: this.authService.user.userId,
            date: schedule_date
        };
        this.restApi.post("accessor/add-schedule", newSchedule).subscribe((res) => {
            // console.log(res);
            if (res && res.status && res.data) {
                this.restApi.toast("Added Schedule successfully", 1200);
                this.getUnverifiedOffice();
            }
            else {
                this.restApi.toast("Invalid Database Connection", 1200);
            }
        }, (error) => {
            console.log("unverifiedoffice addSchedule error = : ", error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    verifyOffice(data) {
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: "office",
            }
        };
        this.router.navigate(["home/assessor/reportgenerator"], navigationExtras);
    }
    download(filename) {
        this.restApi.downfile("uploads/", filename);
    }
    updatebusiness(x) {
        this.restApi.post("accessor/verify-business", { user_id: this.authService.user.userId, business_id: x.buzi_id, office_id: x.id, email: x.email }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.getUnverifiedOffice();
                }
                this.restApi.toast(res.data, 1200);
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    verify(x) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(x);
            let val = 0;
            const alert = yield this.alertController.create({
                cssClass: "my-custom-class",
                header: "Unverified Business Detail",
                // message: "Business Title : "+x.org_name+"<br>Project Type : "+x.project_type+"<br>CPD Level : "+x.cdp_level+"<br>CIPC Reg Number : "+x.cipc_reg_number+"<br>Professional : "+x.profess+"<br>Business Address1 : "+x.business_address_line_1+"<br>Business Address2 : "+x.business_address_line2+"<br>City : "+x.city+"<br>Code : "+x.code+"<br>States : "+x.province+"",
                inputs: [{ id: "pname", name: "pname", type: "checkbox", label: "Name is " + x.pname + "?", handler: () => { val++; }, },
                    { id: "pcouncil", name: "pcouncil", type: "checkbox", label: "Practice Council reg. No is " + x.pcouncil + "?", handler: () => { val++; }, },
                    { name: "pcipc_reg_no", type: "checkbox", label: "CIPC registration is " + x.pcipc_reg_no + "?", handler: () => { val++; }, },
                    { name: "ptype", type: "checkbox", label: "Business Type is " + x.ptype + "?", handler: () => { val++; }, },
                    { name: "director", type: "checkbox", label: "Director is " + x.director + "?", handler: () => { val++; }, },
                    { name: "dir_prof_regno", type: "checkbox", label: "Director Prof registration No is " + x.dir_prof_regno + "?", handler: () => { val++; }, },
                    { name: "owned", type: "checkbox", label: "%Owned is " + x.owned + "?", handler: () => { val++; }, },
                    { name: "phone", type: "checkbox", label: "Office Phone Number is " + x.phone + "?", handler: () => { val++; }, },
                    { name: "email", type: "checkbox", label: "Office Email is " + x.email + "?", handler: () => { val++; }, },
                    { name: "res_prof_name", type: "checkbox", label: "Responsible Professional Name is " + x.res_prof_name + "?", handler: () => { val++; }, },
                    { name: "res_prof_reg", type: "checkbox", label: "Responsible Professional Reg No is " + x.res_prof_reg + "?", handler: () => { val++; }, }
                ],
                buttons: [
                    {
                        text: "Cancel",
                        role: "cancel",
                        cssClass: "secondary"
                    }, {
                        text: "Okay",
                        cssClass: "secondary",
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
        this.restApi.post("accessor/get-schedule", {}).subscribe((res) => {
            if (res) {
                if (res.status == "success") {
                    this.schedules = res.data;
                    // console.log(this.schedules, this.offices);
                    for (var j = 0; j < this.offices.length; j++) {
                        for (var i = 0; i < this.schedules.length; i++) {
                            if (this.schedules[i].verify_target == this.offices[j].email && new Date(this.schedules[i].date).getTime() < new Date().getTime()) {
                                this.offices[j].status = "Pending";
                            }
                        }
                    }
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    schedule() {
        this.router.navigateByUrl("home/assessor/schedules");
    }
};
UnverifiedofficePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UnverifiedofficePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-unverifiedoffice",
        template: _unverifiedoffice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unverifiedoffice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnverifiedofficePage);



/***/ }),

/***/ 5520:
/*!**************************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedoffice/unverifiedoffice.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 11em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRvZmZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFESjtBQUdJO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0FBRlI7QUFLSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQUhSO0FBS1E7RUFDSSxrQkFBQTtBQUhaO0FBTVE7RUFDSSxxQkFBQTtBQUpaO0FBT1E7RUFDSSwyQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLHFCQUFBO0FBTlo7QUFTWTtFQVJKO0lBU1EsYUFBQTtFQU5kO0FBQ0Y7QUFVSTs7RUFFSSxnQkFBQTtBQVJSO0FBVVE7RUFKSjs7SUFLUSxtQkFBQTtJQUNBLG9CQUFBO0VBTlY7RUFRVTs7SUFDSSxlQUFBO0VBTGQ7RUFRVTs7SUFDSSxnQkFBQTtFQUxkO0FBQ0Y7QUFVSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBUlIiLCJmaWxlIjoidW52ZXJpZmllZG9mZmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludC1hbHBoYTogODAwcHg7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXHJcblxyXG4ucndkLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMWVtIDA7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcblxyXG4gICAgdHIge1xyXG4gICAgICAgIGJvcmRlci10b3AgICA6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgZGlzcGxheSAgICA6IGJsb2NrO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50ICAgIDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxyXG4gICAgICAgICAgICB3aWR0aCAgICAgIDogMTFlbTsgLy8gbWFnaWMgbnVtYmVyIDooIGFkanVzdCBhY2NvcmRpbmcgdG8geW91ciBvd24gY29udGVudFxyXG4gICAgICAgICAgICBkaXNwbGF5ICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAvLyBlbmQgb3B0aW9uc1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuM2VtIC41ZW07XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXdlaWdodCAgIDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjMzQ0OTVFO1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 3786:
/*!**************************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedoffice/unverifiedoffice.page.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\r\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\r\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\r\n        <ion-title class=\"h-50px\">Offices</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\r\n        <ion-segment-button value=\"unverified\" class=\"dark\" enabled>\r\n            <ion-icon name=\"business\" class=\"dark\" color=\"dark\"></ion-icon>\r\n            <ion-label class=\"dark\" color=\"dark\">Unverified Offices</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"verified\">\r\n            <ion-icon name=\"layers-outline\" class=\"dark\" color=\"dark\"></ion-icon>\r\n            <ion-label class=\"dark\" color=\"dark\">Verified Offices</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n    <div [ngSwitch]=\"segment\">\r\n        <ion-card *ngSwitchCase=\"'unverified'\" class=\"fixed-ion-card-area\">\r\n            <ion-card-content>\r\n                <h1>Unverified Office</h1>\r\n                <table class=\"rwd-table\">\r\n                    <ng-container *ngIf=\"offices.length > 0\">\r\n                        <tr *ngFor=\"let x of offices\">\r\n                            <td data-th=\"Business Name\">{{x.pname}}</td>\r\n                            <td data-th=\"Business Type\">{{x.ptype}}</td>\r\n                            <td data-th=\"CIPC Reg No\">{{x.pcipc_reg_no}}</td>\r\n                            <td data-th=\"Address\">{{x.address}}</td>\r\n                            <td data-th=\"Contact Person\">{{x.res_prof_name}}</td>\r\n                            <td data-th=\"Contact Number\">{{x.phone}}</td>\r\n                            <td data-th=\"Contact Email\">{{x.email}}</td>\r\n                            <ng-container *ngIf=\"x.is_head == '1'\">\r\n                                <td data-th=\"Office Type\">Head Office</td>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.is_head != '1'\">\r\n                                <td data-th=\"Office Type\">Branch Office</td>\r\n                            </ng-container>\r\n                            <ion-label class=\"textBold\">Documents</ion-label><br>\r\n                            <ion-label>Proof of Address</ion-label><br>\r\n                            <ng-container *ngIf=\"x.file_address != ''\">\r\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                    (click)=\"download(x.file_address)\">Download</ion-button>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.file_address == ''\">\r\n                                <ion-label>&nbsp;&nbsp;There is no a proof of Address.</ion-label>\r\n                            </ng-container><br>\r\n                            <ion-label>Responsible Prof Certificate</ion-label><br>\r\n                            <ng-container *ngIf=\"x.file_certificate != ''\">\r\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                    (click)=\"download(x.file_certificate)\">Download</ion-button>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.file_certificate == ''\">\r\n                                <ion-label>&nbsp;&nbsp;There is no a Responsible Prof Certificate.</ion-label>\r\n                            </ng-container><br>\r\n                            <br>\r\n                            <ng-container *ngIf=\"x.schedule_data == '' || !checkDate(x.schedule_data)\">\r\n                                <td data-th=\"Schedule\">None</td>\r\n                                <ion-row>\r\n                                    <ion-button size=\"small\" color=\"primary\" class=\"button-common-assessor w-40\"\r\n                                        (click)=\"selectDate(x)\">Schedule</ion-button>\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\r\n                                        disabled=\"true\">\r\n                                        Verify</ion-button>\r\n                                </ion-row>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.schedule_data != ''  && checkDate(x.schedule_data)\">\r\n                                <td data-th=\"Schedule\">Appointment</td>\r\n                                <ion-row>\r\n                                    <ion-label color=\"success\"\r\n                                        class=\"button-common-assessor w-40\">{{x.schedule_data}}</ion-label>\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\r\n                                        (click)=\"verifyOffice(x)\">\r\n                                        Verify</ion-button>\r\n                                </ion-row>\r\n                            </ng-container>\r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"offices.length == 0\">\r\n                        <div class=\"text-center\">No Unverified Offices</div>\r\n                    </ng-container>\r\n                </table>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngSwitchCase=\"'verified'\" class=\"fixed-ion-card-area\">\r\n            <ion-card-content>\r\n                <h1>Verified Offices</h1>\r\n                <table class=\"rwd-table\">\r\n                    <ng-container *ngIf=\"verified.length > 0\">\r\n                        <tr *ngFor=\"let x of verified\">\r\n                            <td data-th=\"Business Name\">{{x.pname}}</td>\r\n                            <td data-th=\"Business Type\">{{x.ptype}}</td>\r\n                            <td data-th=\"CIPC Reg No\">{{x.pcipc_reg_no}}</td>\r\n                            <td data-th=\"Address\">{{x.address}}</td>\r\n                            <td data-th=\"Contact Person\">{{x.res_prof_name}}</td>\r\n                            <td data-th=\"Contact Number\">{{x.phone}}</td>\r\n                            <td data-th=\"Contact Email\">{{x.email}}</td>\r\n                            <ng-container *ngIf=\"x.is_head == '1'\">\r\n                                <td data-th=\"Office Type\">Head Office</td>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.is_head != '1'\">\r\n                                <td data-th=\"Office Type\">Branch Office</td>\r\n                            </ng-container>\r\n                            <td data-th=\"Status\">{{x.status}}</td>\r\n                            <ion-label class=\"textBold\">Documents</ion-label><br>\r\n                            <ion-label>PROOF OF ADDRESS</ion-label>\r\n                            <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                (click)=\"download(x.file_address)\">Download</ion-button>\r\n                            <ion-label>RESPONSIBLE PROF PR CERTIFICATE</ion-label>\r\n                            <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                (click)=\"download(x.file_certificate)\">Download</ion-button>\r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"verified.length == 0\">\r\n                        <div class=\"text-center\">No Verified Offices</div>\r\n                    </ng-container>\r\n                </table>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedoffice_unverifiedoffice_module_ts.js.map