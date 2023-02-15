"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_unverifiedproject_unverifiedproject_module_ts"],{

/***/ 5621:
/*!*****************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedproject/unverifiedproject.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedprojectPageModule": () => (/* binding */ UnverifiedprojectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unverifiedproject_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedproject.page */ 7031);



// import { FormsModule } from '@angular/forms';




const routes = [
    {
        path: '',
        component: _unverifiedproject_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedprojectPage
    }
];
let UnverifiedprojectPageModule = class UnverifiedprojectPageModule {
};
UnverifiedprojectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_unverifiedproject_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedprojectPage]
    })
], UnverifiedprojectPageModule);



/***/ }),

/***/ 7031:
/*!***************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedproject/unverifiedproject.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedprojectPage": () => (/* binding */ UnverifiedprojectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedproject_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedproject.page.html?ngResource */ 9192);
/* harmony import */ var _unverifiedproject_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedproject.page.scss?ngResource */ 8102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








// import { AlertController } from "ionic-angular";
let UnverifiedprojectPage = class UnverifiedprojectPage {
    constructor(toastController, restApi, router, authService, alertController) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
        this.segment = "unverified";
        this.projects = [];
        this.verified = [];
    }
    ngOnInit() {
        this.getUnverifiedProject();
        this.getVerifiedProject();
    }
    getUnverifiedProject() {
        this.restApi.post("accessor/get-unverifiedProject", {}).subscribe((res) => {
            if (res && res.status) {
                // console.log(res.data);
                if (res.status == "success") {
                    this.projects = res.data;
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
    getVerifiedProject() {
        this.restApi.post("accessor/get-verifiedProject", {}).subscribe((res) => {
            if (res && res.status) {
                // console.log(res.data);
                if (res.status == "success") {
                    this.verified = res.data;
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
            verify_target: "project",
            verify_content_id: x.id,
            created_by: this.authService.user.userId,
            date: schedule_date
        };
        // console.log(newSchedule);
        this.restApi.post("accessor/add-schedule", newSchedule).subscribe((res) => {
            console.log(res);
            if (res && res.status) {
                this.getUnverifiedProject();
                this.restApi.toast("Added Schedule successfully", 1200);
            }
            else {
                this.restApi.toast(res.data, 1200);
            }
        }, (error) => {
            console.log("unverifiedproject addSchedule error = : ", error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    verifyProject(data) {
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: "project",
            }
        };
        this.router.navigate(["home/assessor/reportgenerator"], navigationExtras);
    }
    download(filename) {
        this.restApi.downfile("uploads/", filename);
    }
};
UnverifiedprojectPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UnverifiedprojectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-unverifiedproject",
        template: _unverifiedproject_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unverifiedproject_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnverifiedprojectPage);



/***/ }),

/***/ 8102:
/*!****************************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedproject/unverifiedproject.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 11em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRwcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQU1RO0VBQ0kscUJBQUE7QUFKWjtBQU9RO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxxQkFBQTtBQU5aO0FBU1k7RUFSSjtJQVNRLGFBQUE7RUFOZDtBQUNGO0FBVUk7O0VBRUksZ0JBQUE7QUFSUjtBQVVRO0VBSko7O0lBS1EsbUJBQUE7SUFDQSxvQkFBQTtFQU5WO0VBUVU7O0lBQ0ksZUFBQTtFQUxkO0VBUVU7O0lBQ0ksZ0JBQUE7RUFMZDtBQUNGO0FBVUk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVJSIiwiZmlsZSI6InVudmVyaWZpZWRwcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50LWFscGhhOiA4MDBweDsgLy8gYWRqdXN0IHRvIHlvdXIgbmVlZHNcclxuXHJcbi5yd2QtdGFibGUge1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcCAgIDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIGZvciBhY2Nlc3NpYmlsaXR5LCB1c2UgYSB2aXN1YWxseSBoaWRkZW4gbWV0aG9kIGhlcmUgaW5zdGVhZCEgIFxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBkaXNwbGF5ICAgIDogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgICAgOiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgLy8gb3B0aW9uYWwgc3R1ZmYgdG8gbWFrZSBpdCBsb29rIG5pY2VyXHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgOiAxMWVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zZW0gLjVlbTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMzNDQ5NUU7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 9192:
/*!****************************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedproject/unverifiedproject.page.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\r\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\r\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\r\n        <ion-title class=\"h-50px\">Projects</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\r\n        <ion-segment-button value=\"unverified\" class=\"dark\" enabled>\r\n            <ion-icon name=\"briefcase\" class=\"dark\" color=\"dark\"></ion-icon>\r\n            <ion-label class=\"dark\" color=\"dark\">Unverified</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"verified\">\r\n            <ion-icon name=\"layers-outline\" class=\"dark\" color=\"dark\"></ion-icon>\r\n            <ion-label class=\"dark\" color=\"dark\">Verified</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment>\r\n    <div [ngSwitch]=\"segment\">\r\n        <ion-card *ngSwitchCase=\"'unverified'\" class=\"fixed-ion-card-area\">\r\n            <ion-card-content>\r\n                <h1>Unverified Project</h1>\r\n                <table class=\"rwd-table\">\r\n                    <ng-container *ngIf=\"projects.length > 0\">\r\n                        <tr *ngFor=\"let x of projects\">\r\n                            <td data-th=\"Project Name\">{{x.title}}</td>\r\n                            <td data-th=\"Project Type\">{{x.type}}</td>\r\n                            <td data-th=\"Leader Name\">{{x.pl_name}}</td>\r\n                            <td data-th=\"Leader Contact Email\">{{x.pl_email}}</td>\r\n                            <td data-th=\"Leader Contact Phone\">{{x.pl_phone}}</td>\r\n                            <td data-th=\"Professional Type\">{{x.prof_type}}</td>\r\n                            <td data-th=\"Project Address\">{{x.proj_address}}</td>\r\n                            <td data-th=\"Project Status\">{{x.status}}</td>\r\n                            <ion-label class=\"textBold\">Supporting Documents</ion-label><br>\r\n                            <ion-label>Letter of appointment</ion-label><br>\r\n                            <ng-container *ngIf=\"x.appointment != ''\">\r\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                    (click)=\"download(x.appointment)\">Download</ion-button>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.appointment == ''\">\r\n                                <ion-label>&nbsp;&nbsp;There is no Letter of appointment.</ion-label>\r\n                            </ng-container><br>\r\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\r\n                                <ion-label>Practical completion certificate</ion-label><br>\r\n                                <ng-container *ngIf=\"x.pratical_certification != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.pratical_certification)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.pratical_certification == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Practical completion\r\n                                        certificate.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\r\n                                <ion-label>Final completion certificate</ion-label><br>\r\n                                <ng-container *ngIf=\"x.final_certification != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.final_certification)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.final_certification == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Final completion\r\n                                        certificate.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.status == 'Completed' || x.status == 'Cancelled'\">\r\n                                <ion-label>Final account</ion-label><br>\r\n                                <ng-container *ngIf=\"x.final_account != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.final_account)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.final_account == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Final account.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.schedule_data == '' || !checkDate(x.schedule_data)\">\r\n                                <td data-th=\"Schedule\">None</td>\r\n                                <ion-row>\r\n                                    <ion-button size=\"small\" color=\"primary\" class=\"button-common-assessor w-40\"\r\n                                        (click)=\"selectDate(x)\">Schedule</ion-button>\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\r\n                                        disabled=\"true\">\r\n                                        Verify</ion-button>\r\n                                </ion-row>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.schedule_data != ''  && checkDate(x.schedule_data)\">\r\n                                <td data-th=\"Schedule\">Appointment</td>\r\n                                <ion-row>\r\n                                    <ion-label color=\"success\"\r\n                                        class=\"button-common-assessor w-40\">{{x.schedule_data}}</ion-label>\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\r\n                                        (click)=\"verifyProject(x)\">\r\n                                        Verify</ion-button>\r\n                                </ion-row>\r\n                            </ng-container>\r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"projects.length == 0\">\r\n                        <div class=\"text-center\">No Unverified Projects</div>\r\n                    </ng-container>\r\n                </table>\r\n            </ion-card-content>\r\n        </ion-card>\r\n        <ion-card *ngSwitchCase=\"'verified'\" class=\"fixed-ion-card-area\">\r\n            <ion-card-content>\r\n                <h1>Verified Projects</h1>\r\n                <table class=\"rwd-table\">\r\n                    <ng-container *ngIf=\"verified.length > 0\">\r\n                        <tr *ngFor=\"let x of verified\">\r\n                            <td data-th=\"Project Name\">{{x.title}}</td>\r\n                            <td data-th=\"Project Type\">{{x.type}}</td>\r\n                            <td data-th=\"Leader Name\">{{x.pl_name}}</td>\r\n                            <td data-th=\"Leader Contact Email\">{{x.pl_email}}</td>\r\n                            <td data-th=\"Leader Contact Phone\">{{x.pl_phone}}</td>\r\n                            <td data-th=\"Professional Type\">{{x.prof_type}}</td>\r\n                            <td data-th=\"Project Address\">{{x.proj_address}}</td>\r\n                            <td data-th=\"Project Status\">{{x.status}}</td>\r\n                            <td data-th=\"Verified Status\">{{x.status_verified}}</td>\r\n                            <ion-label class=\"textBold\">Supporting Documents</ion-label><br>\r\n                            <ion-label>Letter of appointment</ion-label><br>\r\n                            <ng-container *ngIf=\"x.appointment != ''\">\r\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                    (click)=\"download(x.appointment)\">Download</ion-button>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.appointment == ''\">\r\n                                <ion-label>&nbsp;&nbsp;There is no Letter of appointment.</ion-label>\r\n                            </ng-container><br>\r\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\r\n                                <ion-label>Practical completion certificate</ion-label><br>\r\n                                <ng-container *ngIf=\"x.pratical_certification != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.pratical_certification)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.pratical_certification == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Practical completion\r\n                                        certificate.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\r\n                                <ion-label>Final completion certificate</ion-label><br>\r\n                                <ng-container *ngIf=\"x.final_certification != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.final_certification)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.final_certification == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Final completion\r\n                                        certificate.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"x.status == 'Completed' || x.status == 'Cancelled'\">\r\n                                <ion-label>Final account</ion-label><br>\r\n                                <ng-container *ngIf=\"x.final_account != ''\">\r\n                                    <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\r\n                                        (click)=\"download(x.final_account)\">Download</ion-button>\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"x.final_account == ''\">\r\n                                    <ion-label>&nbsp;&nbsp;There is no Final account.</ion-label>\r\n                                </ng-container><br>\r\n                            </ng-container>\r\n                        </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"verified.length == 0\">\r\n                        <div class=\"text-center\">No Verified Projects</div>\r\n                    </ng-container>\r\n                </table>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedproject_unverifiedproject_module_ts.js.map