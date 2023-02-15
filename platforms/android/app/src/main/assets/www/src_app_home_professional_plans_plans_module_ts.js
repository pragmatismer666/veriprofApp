"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_plans_plans_module_ts"],{

/***/ 5163:
/*!*********************************************************!*\
  !*** ./src/app/home/professional/plans/plans.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlansPageModule": () => (/* binding */ PlansPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plans.page */ 1238);







const routes = [
    {
        path: '',
        component: _plans_page__WEBPACK_IMPORTED_MODULE_0__.PlansPage
    }
];
let PlansPageModule = class PlansPageModule {
};
PlansPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_plans_page__WEBPACK_IMPORTED_MODULE_0__.PlansPage]
    })
], PlansPageModule);



/***/ }),

/***/ 1238:
/*!*******************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlansPage": () => (/* binding */ PlansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plans.page.html?ngResource */ 4436);
/* harmony import */ var _plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plans.page.scss?ngResource */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);







let PlansPage = class PlansPage {
    constructor(toastController, authService, restApi) {
        this.toastController = toastController;
        this.authService = authService;
        this.restApi = restApi;
        this.segment = "added";
        this.Plans = [];
        this.name = "any";
        this.loadData = "any";
        // profess_address:any = {};
        // pendingPlans: Array<any> = [];
        this.plan = {
            client_name: "",
            client_address_line_1: "",
            client_address_line_2: "",
            client_city: "",
            client_province: "",
            client_zipcode: "",
            erfno: "",
            occupancy: "",
            hia_sensitivity: "",
            municipal: "",
            professional_reg_number: "",
            professional: "",
            contact_email: "",
            contact_phone: "",
            contact_address_line_1: "",
            contact_address_line_2: "",
            contact_city: "",
            contact_province: "",
            contact_zipcode: "",
            project_plan_no: "",
            project_title: "",
            project_cost: "",
            project_area: "",
            project_address_line_1: "",
            project_address_line_2: "",
            project_city: "",
            project_province: "",
            project_zipcode: "",
            responsible_qs: "",
            file: "",
            status_request: "No",
        };
        this.saveButtonFlag = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.getplanNo();
            this.getPlans();
            // await this.loadSavedPlans();
        });
    }
    ngOnDestroy() {
        this.authService.saveData(this.plan, "plan");
    }
    loadSavedPlans() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let saved_plan = yield this.authService.getSavedData("plan");
            // console.log( saved_plan);
            if (saved_plan != null) {
                this.plan = saved_plan;
            }
        });
    }
    submit(status_request) {
        for (let x in this.plan) {
            // console.log(" plans.page.ts  submit  this.plan[x] = : ", this.plan[x]);
            if (this.plan[x].length == 0) {
                let name = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name, 1200);
            }
        }
        if (status_request) {
            this.plan.status_request = "Yes";
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.plan.contact_email) != true) {
            this.restApi.toast("Please input validated email.", 1500);
        }
        // console.log(this.plan, this.authService.user.userId);
        this.restApi.post("professional/add-plan", { user_id: this.authService.user.userId, data: this.plan }).subscribe((res) => {
            console.log(res);
            if (res && res.status == "success") {
                this.restApi.toast(res.message, 1200);
                this.segment = "added";
                this.Plans = res.data;
                for (let x in this.plan) {
                    this.plan[x] = "";
                }
            }
        }, error => {
            this.restApi.toast(error.message, 1200);
        });
    }
    action(x, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.plan = x;
            if (act) {
                this.plan.status_request = "Yes";
                this.submit(true);
            }
            else {
                this.segment = "paper";
            }
        });
    }
    getPlans() {
        this.restApi.post("professional/get-plan", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status == "success") {
                console.log(res.data);
                this.Plans = res.data;
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    getplanNo() {
        var text = "";
        var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.plan.project_plan_no = text;
    }
    changeListener($event) {
        this.saveButtonFlag = true;
        let file = $event.target.files[0];
        if (file && file.type == "application/pdf") {
            this.restApi.postFile(file, "/upload-file", "plan").subscribe(res => {
                console.log("plan page changeListener res : ", res);
                if (res && res.status && res.status == "success") {
                    this.plan.file = res.filename;
                }
            }, error => {
                console.log(error);
            });
        }
        else {
            this.restApi.toast("Only PDF supported", 1200);
        }
        this.saveButtonFlag = false;
    }
    download(filename, path) {
        this.restApi.downfile(path, filename);
    }
};
PlansPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService }
];
PlansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-plans",
        template: _plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlansPage);



/***/ }),

/***/ 3742:
/*!********************************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 800px) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQU1RO0VBQ0kscUJBQUE7QUFKWjtBQU9RO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtBQU5aO0FBU1k7RUFSSjtJQVNRLGFBQUE7RUFOZDtBQUNGO0FBVUk7O0VBRUksZ0JBQUE7QUFSUjtBQVVRO0VBSko7O0lBS1EsbUJBQUE7SUFDQSxvQkFBQTtFQU5WO0VBUVU7O0lBQ0ksZUFBQTtFQUxkO0VBUVU7O0lBQ0ksZ0JBQUE7RUFMZDtBQUNGO0FBVUk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVJSO0FBV0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFXUTtFQUNJLHFCQUFBO0FBVFo7QUFZUTs7RUFFSSxpQkFBQTtBQVZaO0FBWVk7RUFKSjs7SUFLUSx1QkFBQTtFQVJkO0FBQ0Y7QUFXUTs7RUFFSSxXQUFBO0FBVFoiLCJmaWxlIjoicGxhbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnQtYWxwaGE6IDgwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xyXG5cclxuLnJ3ZC10YWJsZSB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgICBib3JkZXItdG9wICAgOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gZm9yIGFjY2Vzc2liaWxpdHksIHVzZSBhIHZpc3VhbGx5IGhpZGRlbiBtZXRob2QgaGVyZSBpbnN0ZWFkISAgXHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGRpc3BsYXkgICAgOiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudCAgICA6IGF0dHIoZGF0YS10aClcIjogXCI7IC8vIHdobyBrbmV3IHlvdSBjb3VsZCBkbyB0aGlzPyBUaGUgaW50ZXJuZXQsIHRoYXQncyB3aG8uXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcclxuICAgICAgICAgICAgd2lkdGggICAgICA6IDkuNWVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zZW0gLjVlbTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMzNDQ5NUU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJ3ZC10YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZCAgIDogIzM0NDk1RTtcclxuICAgICAgICBjb2xvciAgICAgICAgOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG5cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMzQ0OTVFLCAxMCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IC41ZW0gMWVtO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkZDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 4436:
/*!********************************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\n        <ion-title class=\"h-50px\">EPlan Filing</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\n        <ion-segment-button value=\"paper\" class=\"dark\" enabled>\n            <ion-icon name=\"add-circle\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">New Plans</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"added\">\n            <ion-icon name=\"star\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Archives</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'paper'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <strong>Project Info</strong>\n                <ion-item>\n                    <ion-label position=\"stacked\">Client Name</ion-label>\n                    <ion-input name=\"client_name\" [(ngModel)]=\"plan.client_name\" value=\"\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Clients Contact Details</ion-label>\n                    <ion-label position=\"stacked\"></ion-label>\n                    <ion-input placeholder=\"Address Line 1\" name=\"client_address_line_1\"\n                        [(ngModel)]=\"plan.client_address_line_1\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"client_address_line_2\"\n                        [(ngModel)]=\"plan.client_address_line_2\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"client_city\" [(ngModel)]=\"plan.client_city\"></ion-input>\n                    <ion-select multiple=\"false\" name=\"client_province\" [(ngModel)]=\"plan.client_province\"\n                        placeholder=\"Select Province\">\n                        <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                        <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                        <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                        <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                        <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                        <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                        <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                        <ion-select-option value=\"North West\">North West</ion-select-option>\n                        <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                    </ion-select>\n                    <ion-input placeholder=\"POSTAL Code\" name=\"client_zipcode\" [(ngModel)]=\"plan.client_zipcode\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Title</ion-label>\n                    <ion-input name=\"project_title\" [(ngModel)]=\"plan.project_title\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Project/Site Location</ion-label>\n                    <ion-label position=\"stacked\"></ion-label>\n                    <ion-input placeholder=\"Address Line 1\" name=\"project_address_line_1\"\n                        [(ngModel)]=\"plan.project_address_line_1\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"project_address_line_2\"\n                        [(ngModel)]=\"plan.project_address_line_2\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"project_city\" [(ngModel)]=\"plan.project_city\"></ion-input>\n                    <ion-select multiple=\"false\" name=\"project_province\" [(ngModel)]=\"plan.project_province\"\n                        placeholder=\"Select Province\">\n                        <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                        <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                        <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                        <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                        <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                        <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                        <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                        <ion-select-option value=\"North West\">North West</ion-select-option>\n                        <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                    </ion-select>\n                    <ion-input placeholder=\"Zip Code\" name=\"project_zipcode\" [(ngModel)]=\"plan.project_zipcode\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Local Municipal</ion-label>\n                    <ion-select multiple=\"false\" placeholder=\"Municipal\" [(ngModel)]=\"plan.municipal\" name=\"municipal\">\n                        <ion-select-option value=\"Abaqulusi Local Municipality\">Abaqulusi Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Albert Luthuli Local Municipality\">Albert Luthuli Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Alfred Duma Local Municipality\">Alfred Duma Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Amahlathi Local Municipality\">Amahlathi Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Ba-Phalaborwa Local Municipality\">Ba-Phalaborwa Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Beaufort West Local Municipality\">Beaufort West Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Bela-Bela Local Municipality\">Bela-Bela Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Bergrivier Local Municipality\">Bergrivier Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Big Five Hlabisa Local Municipality\">Big Five Hlabisa Local\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Bitou Local Municipality\">Bitou Local Municipality</ion-select-option>\n                        <ion-select-option value=\"Blouberg Local Municipality\">Blouberg Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Blue Crane Route Local Municipality\">Blue Crane Route Local\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Breede Valley Local Municipality\">Breede Valley Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Buffalo City Metropolitan Municipality\">Buffalo City Metropolitan\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Bushbuckridge Local Municipality\">Bushbuckridge Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Cape Agulhas Local Municipality\">Cape Agulhas Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Cederberg Local Municipality\">Cederberg Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"City of Cape Town Metropolitan Municipality\">City of Cape Town\n                            MetropolitanMunicipality</ion-select-option>\n                        <ion-select-option value=\"City of Johannesburg Metropolitan Municipality\">City of Johannesburg\n                            MetropolitanMunicipality</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">ERF No.</ion-label>\n                    <ion-input [(ngModel)]=\"plan.erfno\" name=\"erfno\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Occupancy</ion-label>\n                    <ion-input name=\"occupancy\" [(ngModel)]=\"plan.occupancy\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">HIA Sensitivity</ion-label>\n                    <ion-input name=\"hia_sensitivity\" [(ngModel)]=\"plan.hia_sensitivity\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Area/Size</ion-label>\n                    <ion-input name=\"project_area\" [(ngModel)]=\"plan.project_area\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Responsible QS</ion-label>\n                    <ion-input name=\"responsible_qs\" [(ngModel)]=\"plan.responsible_qs\" value=\"{{plan.responsible_qs}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Responsible Professional</ion-label>\n                    <ion-input name=\"professional\" [(ngModel)]=\"plan.professional\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Prof. Registration Number</ion-label>\n                    <ion-input name=\"professional_reg_number\" [(ngModel)]=\"plan.professional_reg_number\"\n                        value=\"{{plan.professional_reg_number}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Cost</ion-label>\n                    <ion-input name=\"project_cost\" [(ngModel)]=\"plan.project_cost\" value=\"{{plan.project_cost}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Generated Plan No.</ion-label>\n                    <ion-input name=\"project_plan_no\" [(ngModel)]=\"plan.project_plan_no\"\n                        value=\"{{plan.project_plan_no}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom:12px;\">Responsible Prof Contact\n                        Details</ion-label>\n                    <ion-input placeholder=\"Address Line 1\" name=\"contact_address_line_1\"\n                        [(ngModel)]=\"plan.contact_address_line_1\" value=\"{{plan.contact_address_line_1}}\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"contact_address_line_2\"\n                        [(ngModel)]=\"plan.contact_address_line_2\" value=\"{{plan.contact_address_line_2}}\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"contact_city\" [(ngModel)]=\"plan.contact_city\"\n                        value=\"{{plan.contact_city}}\"></ion-input>\n                    <ion-select multiple=\"false\" name=\"contact_province\" [(ngModel)]=\"plan.contact_province\"\n                        placeholder=\"Select Contact Province\">\n                        <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                        <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                        <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                        <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                        <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                        <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                        <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                        <ion-select-option value=\"North West\">North West</ion-select-option>\n                        <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                    </ion-select>\n                    <ion-input placeholder=\"Zip Code\" name=\"contact_zipcode\" [(ngModel)]=\"plan.contact_zipcode\"\n                        value=\"{{plan.contact_zipcode}}\"></ion-input>\n                    <ion-input placeholder=\"Contact Eamil\" name=\"contact_email\" [(ngModel)]=\"plan.contact_email\"\n                        value=\"{{plan.contact_email}}\"></ion-input>\n                    <ion-input placeholder=\"Contact Phone Number\" name=\"contact_phone\" [(ngModel)]=\"plan.contact_phone\"\n                        value=\"{{plan.phone}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload PDF Copy of plan\n                    </ion-label>\n                    <ion-item>\n                        <ion-input name=\"file\" id=\"myFileInput\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event)\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-item>\n                    <ng-container *ngIf=\"saveButtonFlag\">\n                        <ion-button class=\"button-common w-50\" color=\"medium\" disabled={{saveButtonFlag}}>\n                            Uploading\n                            File\n                        </ion-button>\n                        <ion-button class=\"button-common w-50\" color=\"medium\" disabled={{saveButtonFlag}}>\n                            Uploading\n                            File\n                        </ion-button>\n                    </ng-container>\n                    <ng-container *ngIf=\"!saveButtonFlag\">\n                        <ion-button (click)=\"submit(false)\" class=\"button-common\" color=\"primary\"\n                            disabled={{saveButtonFlag}}>Save\n                            Project\n                        </ion-button>\n                        <ion-button (click)=\"submit(true)\" class=\"button-common ml-auto\" color=\"success\"\n                            disabled={{saveButtonFlag}}><span class=\"inner\">Required Verification</span>\n                        </ion-button>\n                    </ng-container>\n                    <br>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'added'\" class=\"fixed-ion-card-area\">\n            <ion-card-content>\n                <h1>My eplans</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"Plans.length > 0\">\n                        <tr *ngFor=\"let x of Plans\">\n                            <td data-th=\"Plan Title\">{{x.project_title}}</td>\n                            <td data-th=\"Profess Email\">{{x.contact_email}}</td>\n                            <td data-th=\"Plan Document\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.file, 'uploads/')\">\n                                    Download</ion-button>\n                            </td>\n                            <td data-th=\"Created DateTime\">{{x.created_at}}</td>\n                            <td data-th=\"Certificate Document\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.certificate, 'certificate/')\">\n                                    Download</ion-button>\n                            </td>\n                            <td data-th=\"Request Verification\">\n                                <ion-label color=\"danger\">{{x.status_request}}</ion-label>\n                            </td>\n                            <ng-container *ngIf=\"x.status_request == 'Yes'\">\n                                <ion-button size=\"small\" color=\"medium\" class=\"down-btn-profe mt-2\" disabled=\"true\"\n                                    (click)=\"download(x.certificate)\">Update</ion-button>\n                                <ion-button size=\"small\" color=\"medium\" class=\"down-btn-profe mt-2\" disabled=\"true\"\n                                    (click)=\"download(x.certificate)\">Request Verification</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status_request == 'No'\">\n                                <ion-button size=\"small\" color=\"primary\" class=\"down-btn-profe mt-2\"\n                                    (click)=\"action(x, false)\">\n                                    Update</ion-button>\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe mt-2\"\n                                    (click)=\"action(x, true)\">\n                                    Request Verification</ion-button>\n                            </ng-container>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"loadData.length == 0\">\n                        <div class=\"text-center\">No project or No connection.</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <br>\n</ion-content>\n\n<!-- <script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n        event.preventDefault();\n        controller.create({\n            header: 'Account Created',\n            message: `Created account for: <b>${firstName} ${lastName}</b>`,\n            buttons: [{\n                text: 'OK'\n            }]\n        }).then(alert => alert.present());\n    }\n\n    function handleFirstNameValue(event) {\n        firstName = event.target.value;\n    }\n\n    function handleLastNameValue(event) {\n        lastName = event.target.value;\n    }\n</script> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_plans_plans_module_ts.js.map