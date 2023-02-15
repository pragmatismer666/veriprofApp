"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_unverifiedprof_unverifiedprof_module_ts"],{

/***/ 7000:
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedprof/unverifiedprof.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedprofPageModule": () => (/* binding */ UnverifiedprofPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _unverifiedprof_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedprof.page */ 4673);







const routes = [
    {
        path: '',
        component: _unverifiedprof_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedprofPage
    }
];
let UnverifiedprofPageModule = class UnverifiedprofPageModule {
};
UnverifiedprofPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_unverifiedprof_page__WEBPACK_IMPORTED_MODULE_0__.UnverifiedprofPage]
    })
], UnverifiedprofPageModule);



/***/ }),

/***/ 4673:
/*!*********************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedprof/unverifiedprof.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnverifiedprofPage": () => (/* binding */ UnverifiedprofPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _unverifiedprof_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unverifiedprof.page.html?ngResource */ 3648);
/* harmony import */ var _unverifiedprof_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unverifiedprof.page.scss?ngResource */ 4365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);








let UnverifiedprofPage = class UnverifiedprofPage {
    constructor(toastController, router, restApi, authService, alertController) {
        this.toastController = toastController;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.alertController = alertController;
        this.segment = "unverified";
        this.profs = [];
        this.verified = [];
    }
    ngOnInit() {
        this.getUnverifiedProf();
        this.getVerifiedProf();
    }
    getUnverifiedProf() {
        this.restApi.post("accessor/get-unverifiedProf", {}).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == "success") {
                    this.profs = res.data;
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
    getVerifiedProf() {
        this.restApi.post("accessor/get-verifiedProf", {}).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
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
        console.log(x);
        let newSchedule = {
            verify_user_id: x.user_id,
            verify_target: "profile",
            verify_content_id: x.id,
            created_by: this.authService.user.userId,
            date: schedule_date
        };
        console.log(newSchedule);
        this.restApi.post("accessor/add-schedule", newSchedule).subscribe((res) => {
            console.log(res);
            if (res && res.status) {
                this.getUnverifiedProf();
                this.restApi.toast("Added Schedule successfully", 1200);
            }
            else {
                this.restApi.toast(res.data, 1200);
            }
        }, (error) => {
            console.log("unverifiedprof addSchedule error = : ", error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    verifyProf(data) {
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(data),
                type: "profile",
            }
        };
        this.router.navigate(["home/assessor/reportgenerator"], navigationExtras);
    }
    download(filename) {
        this.restApi.downfile("uploads/", filename);
    }
};
UnverifiedprofPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
UnverifiedprofPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-unverifiedprof',
        template: _unverifiedprof_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unverifiedprof_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnverifiedprofPage);



/***/ }),

/***/ 4365:
/*!**********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedprof/unverifiedprof.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 11em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVudmVyaWZpZWRwcm9mLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQU1RO0VBQ0kscUJBQUE7QUFKWjtBQU9RO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxxQkFBQTtBQU5aO0FBU1k7RUFSSjtJQVNRLGFBQUE7RUFOZDtBQUNGO0FBVUk7O0VBRUksZ0JBQUE7QUFSUjtBQVVRO0VBSko7O0lBS1EsbUJBQUE7SUFDQSxvQkFBQTtFQU5WO0VBUVU7O0lBQ0ksZUFBQTtFQUxkO0VBUVU7O0lBQ0ksZ0JBQUE7RUFMZDtBQUNGO0FBVUk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVJSIiwiZmlsZSI6InVudmVyaWZpZWRwcm9mLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50LWFscGhhOiA4MDBweDsgLy8gYWRqdXN0IHRvIHlvdXIgbmVlZHNcclxuXHJcbi5yd2QtdGFibGUge1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcCAgIDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIGZvciBhY2Nlc3NpYmlsaXR5LCB1c2UgYSB2aXN1YWxseSBoaWRkZW4gbWV0aG9kIGhlcmUgaW5zdGVhZCEgIFxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBkaXNwbGF5ICAgIDogYmxvY2s7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgICAgOiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgLy8gb3B0aW9uYWwgc3R1ZmYgdG8gbWFrZSBpdCBsb29rIG5pY2VyXHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgOiAxMWVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zZW0gLjVlbTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMzNDQ5NUU7XHJcbiAgICB9XHJcbn0iXX0= */";

/***/ }),

/***/ 3648:
/*!**********************************************************************************!*\
  !*** ./src/app/home/assessor/unverifiedprof/unverifiedprof.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\n        <ion-title class=\"h-50px\">Professional</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\n        <ion-segment-button value=\"unverified\" class=\"dark\" enabled>\n            <ion-icon name=\"briefcase\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Unverified</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"verified\">\n            <ion-icon name=\"layers-outline\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Verified</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'unverified'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <h1>Unverified Professional</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"profs.length > 0\">\n                        <tr *ngFor=\"let x of profs\">\n                            <td data-th=\"Name\">{{x.name}}</td>\n                            <td data-th=\"Surname\">{{x.surname}}</td>\n                            <td data-th=\"Job Title\">{{x.jtitle}}</td>\n                            <td data-th=\"Employer\">{{x.employer}}</td>\n                            <td data-th=\"Council\">{{x.council}}</td>\n                            <td data-th=\"Reg No\">{{x.reg_no}}</td>\n                            <td data-th=\"Exp Years\">{{x.exp_year}}</td>\n                            <ng-container *ngIf=\"x.is_director == '1'\">\n                                <td data-th=\"Director or Not\">Director</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.is_director != '1'\">\n                                <td data-th=\"Director or Not\">NO</td>\n                            </ng-container>\n                            <ion-label class=\"textBold\">Certification Documents</ion-label><br>\n                            <ion-label>Letter of appointment</ion-label><br>\n                            <ng-container *ngIf=\"x.appointment != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.appointment)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.appointment == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Letter of appointment.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Professional CV</ion-label><br>\n                            <ng-container *ngIf=\"x.cv != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.cv)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.cv == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no CV.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Pratical Certification</ion-label><br>\n                            <ng-container *ngIf=\"x.pratical_certification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.pratical_certification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.pratical_certification == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Pratical Certification.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Qualification</ion-label><br>\n                            <ng-container *ngIf=\"x.qualification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.qualification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.qualification == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Qualification.</ion-label>\n                            </ng-container><br>\n                            <ng-container *ngIf=\"x.schedule_data == '' || !checkDate(x.schedule_data)\">\n                                <td data-th=\"Schedule\">None</td>\n                                <ion-row>\n                                    <ion-button size=\"small\" color=\"primary\" class=\"button-common-assessor w-40\"\n                                        (click)=\"selectDate(x)\">Schedule</ion-button>\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\n                                        disabled=\"true\">\n                                        Verify</ion-button>\n                                </ion-row>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.schedule_data != ''  && checkDate(x.schedule_data)\">\n                                <td data-th=\"Schedule\">Appointment</td>\n                                <ion-row>\n                                    <ion-label color=\"success\"\n                                        class=\"button-common-assessor w-40\">{{x.schedule_data}}</ion-label>\n                                    <ion-button size=\"small\" color=\"success\" class=\"button-common-assessor w-40\"\n                                        (click)=\"verifyProf(x)\">\n                                        Verify</ion-button>\n                                </ion-row>\n                            </ng-container>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"profs.length == 0\">\n                        <div class=\"text-center\">No Unverified Professional</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'verified'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <h1>Verified Professional</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"verified.length > 0\">\n                        <tr *ngFor=\"let x of verified\">\n                            <td data-th=\"Name\">{{x.name}}</td>\n                            <td data-th=\"Surname\">{{x.surname}}</td>\n                            <td data-th=\"Job Title\">{{x.jtitle}}</td>\n                            <td data-th=\"Employer\">{{x.employer}}</td>\n                            <td data-th=\"Council\">{{x.council}}</td>\n                            <td data-th=\"Reg No\">{{x.reg_no}}</td>\n                            <td data-th=\"Exp Years\">{{x.exp_year}}</td>\n                            <ng-container *ngIf=\"x.is_director == '1'\">\n                                <td data-th=\"Director or Not\">Director</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.is_director != '1'\">\n                                <td data-th=\"Director or Not\">NO</td>\n                            </ng-container>\n                            <td data-th=\"Status\">{{x.status}}</td>\n                            <ion-label class=\"textBold\">Certification Documents</ion-label><br>\n                            <ion-label>Letter of appointment</ion-label><br>\n                            <ng-container *ngIf=\"x.appointment != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.appointment)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.appointment == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Letter of appointment.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Professional CV</ion-label><br>\n                            <ng-container *ngIf=\"x.cv != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.cv)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.cv == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no CV.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Pratical Certification</ion-label><br>\n                            <ng-container *ngIf=\"x.pratical_certification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.pratical_certification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.pratical_certification == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Pratical Certification.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Qualification</ion-label><br>\n                            <ng-container *ngIf=\"x.qualification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.qualification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.qualification == ''\">\n                                <ion-label>&nbsp;&nbsp;There is no Qualification.</ion-label>\n                            </ng-container><br>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"verified.length == 0\">\n                        <div class=\"text-center\">No Verified Professional</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_unverifiedprof_unverifiedprof_module_ts.js.map