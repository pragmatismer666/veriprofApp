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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _plans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plans.page.html?ngResource */ 4436);
/* harmony import */ var _plans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plans.page.scss?ngResource */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
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
            file: ""
        };
    }
    ngOnInit() {
        this.getplanNo();
        this.getPlans();
    }
    submit() {
        for (let x in this.plan) {
            if (this.plan[x].length == 0) {
                let name = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name, 1200);
            }
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.plan.contact_email) != true) {
            this.restApi.toast("Please input validated email.", 1500);
        }
        // console.log(this.plan, this.authService.user.userId);
        this.restApi.post("professional/add-plan", { user_id: this.authService.user.userId, data: this.plan }).subscribe((res) => {
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
    }
    download(filename) {
        this.restApi.downfile("certificate/", filename);
    }
};
PlansPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService }
];
PlansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFucy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4436:
/*!********************************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>ePlan Filing</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button value=\"paper\" class=\"dark\" enabled>\n            <ion-icon name=\"add-circle\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">New Plans</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"added\">\n            <ion-icon name=\"star\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Archives</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'paper'\" class=\"p-fixed fixed-ion-card-area p-3\">\n            <strong>Project Info</strong>\n            <ion-item>\n                <ion-label position=\"stacked\">Client Name</ion-label>\n                <ion-input name=\"client_name\" [(ngModel)]=\"plan.client_name\" value=\"\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Clients Contact Details</ion-label>\n                <ion-label position=\"stacked\"></ion-label>\n                <ion-input placeholder=\"Address Line 1\" name=\"client_address_line_1\"\n                    [(ngModel)]=\"plan.client_address_line_1\"></ion-input>\n                <ion-input placeholder=\"Address Line 2\" name=\"client_address_line_2\"\n                    [(ngModel)]=\"plan.client_address_line_2\"></ion-input>\n                <ion-input placeholder=\"City\" name=\"client_city\" [(ngModel)]=\"plan.client_city\"></ion-input>\n                <ion-select multiple=\"false\" name=\"client_province\" [(ngModel)]=\"plan.client_province\"\n                    placeholder=\"Select Province\">\n                    <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                    <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                    <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                    <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                    <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                    <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                    <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                    <ion-select-option value=\"North West\">North West</ion-select-option>\n                    <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                </ion-select>\n                <ion-input placeholder=\"POSTAL Code\" name=\"client_zipcode\" [(ngModel)]=\"plan.client_zipcode\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Project Title</ion-label>\n                <ion-input name=\"project_title\" [(ngModel)]=\"plan.project_title\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Project/Site Location</ion-label>\n                <ion-label position=\"stacked\"></ion-label>\n                <ion-input placeholder=\"Address Line 1\" name=\"project_address_line_1\"\n                    [(ngModel)]=\"plan.project_address_line_1\"></ion-input>\n                <ion-input placeholder=\"Address Line 2\" name=\"project_address_line_2\"\n                    [(ngModel)]=\"plan.project_address_line_2\"></ion-input>\n                <ion-input placeholder=\"City\" name=\"project_city\" [(ngModel)]=\"plan.project_city\"></ion-input>\n                <ion-select multiple=\"false\" name=\"project_province\" [(ngModel)]=\"plan.project_province\"\n                    placeholder=\"Select Province\">\n                    <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                    <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                    <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                    <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                    <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                    <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                    <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                    <ion-select-option value=\"North West\">North West</ion-select-option>\n                    <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                </ion-select>\n                <ion-input placeholder=\"Zip Code\" name=\"project_zipcode\" [(ngModel)]=\"plan.project_zipcode\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Local Municipal</ion-label>\n                <ion-select multiple=\"false\" placeholder=\"Municipal\" [(ngModel)]=\"plan.municipal\" name=\"municipal\">\n                    <ion-select-option value=\"Abaqulusi Local Municipality\">Abaqulusi Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Albert Luthuli Local Municipality\">Albert Luthuli Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Alfred Duma Local Municipality\">Alfred Duma Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Amahlathi Local Municipality\">Amahlathi Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Ba-Phalaborwa Local Municipality\">Ba-Phalaborwa Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Beaufort West Local Municipality\">Beaufort West Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Bela-Bela Local Municipality\">Bela-Bela Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Bergrivier Local Municipality\">Bergrivier Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Big Five Hlabisa Local Municipality\">Big Five Hlabisa Local\n                        Municipality</ion-select-option>\n                    <ion-select-option value=\"Bitou Local Municipality\">Bitou Local Municipality</ion-select-option>\n                    <ion-select-option value=\"Blouberg Local Municipality\">Blouberg Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Blue Crane Route Local Municipality\">Blue Crane Route Local\n                        Municipality</ion-select-option>\n                    <ion-select-option value=\"Breede Valley Local Municipality\">Breede Valley Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Buffalo City Metropolitan Municipality\">Buffalo City Metropolitan\n                        Municipality</ion-select-option>\n                    <ion-select-option value=\"Bushbuckridge Local Municipality\">Bushbuckridge Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Cape Agulhas Local Municipality\">Cape Agulhas Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"Cederberg Local Municipality\">Cederberg Local Municipality\n                    </ion-select-option>\n                    <ion-select-option value=\"City of Cape Town Metropolitan Municipality\">City of Cape Town\n                        MetropolitanMunicipality</ion-select-option>\n                    <ion-select-option value=\"City of Johannesburg Metropolitan Municipality\">City of Johannesburg\n                        MetropolitanMunicipality</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">ERF No.</ion-label>\n                <ion-input [(ngModel)]=\"plan.erfno\" name=\"erfno\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Occupancy</ion-label>\n                <ion-input name=\"occupancy\" [(ngModel)]=\"plan.occupancy\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">HIA Sensitivity</ion-label>\n                <ion-input name=\"hia_sensitivity\" [(ngModel)]=\"plan.hia_sensitivity\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Area/Size</ion-label>\n                <ion-input name=\"project_area\" [(ngModel)]=\"plan.project_area\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Responsible QS</ion-label>\n                <ion-input name=\"responsible_qs\" [(ngModel)]=\"plan.responsible_qs\" value=\"{{plan.responsible_qs}}\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Responsible Professional</ion-label>\n                <ion-input name=\"professional\" [(ngModel)]=\"plan.professional\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Prof. Registration Number</ion-label>\n                <ion-input name=\"professional_reg_number\" [(ngModel)]=\"plan.professional_reg_number\"\n                    value=\"{{plan.professional_reg_number}}\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Project Cost</ion-label>\n                <ion-input name=\"project_cost\" [(ngModel)]=\"plan.project_cost\" value=\"{{plan.project_cost}}\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Generated Plan No.</ion-label>\n                <ion-input name=\"project_plan_no\" [(ngModel)]=\"plan.project_plan_no\" value=\"{{plan.project_plan_no}}\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\" style=\"margin-bottom:12px;\">Responsible Prof Contact Details</ion-label>\n                <ion-input placeholder=\"Address Line 1\" name=\"contact_address_line_1\"\n                    [(ngModel)]=\"plan.contact_address_line_1\" value=\"{{plan.contact_address_line_1}}\"></ion-input>\n                <ion-input placeholder=\"Address Line 2\" name=\"contact_address_line_2\"\n                    [(ngModel)]=\"plan.contact_address_line_2\" value=\"{{plan.contact_address_line_2}}\"></ion-input>\n                <ion-input placeholder=\"City\" name=\"contact_city\" [(ngModel)]=\"plan.contact_city\"\n                    value=\"{{plan.contact_city}}\"></ion-input>\n                <ion-input placeholder=\"Cost\" name=\"contact_province\" [(ngModel)]=\"plan.contact_province\"\n                    value=\"{{plan.contact_province}}\"></ion-input>\n                <ion-input placeholder=\"Zip Code\" name=\"contact_zipcode\" [(ngModel)]=\"plan.contact_zipcode\"\n                    value=\"{{plan.contact_zipcode}}\"></ion-input>\n                <ion-input placeholder=\"Contact Eamil\" name=\"contact_email\" [(ngModel)]=\"plan.contact_email\"\n                    value=\"{{plan.contact_email}}\"></ion-input>\n                <ion-input placeholder=\"Contact Phone\" name=\"contact_phone\" [(ngModel)]=\"plan.contact_phone\"\n                    value=\"{{plan.phone}}\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload PDF Copy of plan\n                </ion-label>\n                <ion-item>\n                    <ion-input name=\"file\" id=\"myFileInput\" type=\"file\" accept=\"application/pdf\"\n                        (change)=\"changeListener($event)\"></ion-input>\n                </ion-item>\n            </ion-item>\n            <div class=\"ion-padding\">\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\" (click)=\"submit()\">\n                    FILE PLAN</ion-button>\n            </div>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'added'\">\n            <table class=\"table-common\" style=\"width: 100%;\">\n                <tr>\n                    <th>Title</th>\n                    <th>Profess Email</th>\n                    <th>DateTime</th>\n                    <th>Download</th>\n                </tr>\n                <tr *ngFor=\"let x of Plans\">\n                    <td>{{x.project_title}}</td>\n                    <td>{{x.contact_email}}</td>\n                    <td>{{x.created_at}}</td>\n                    <td class=\"d-flex\" class=\"td-download-bg\" (click)=\"download(x.certificate)\">Download</td>\n                </tr>\n            </table>\n        </ion-card>\n    </div>\n    <br>\n</ion-content>\n\n<!-- <script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n        event.preventDefault();\n        controller.create({\n            header: 'Account Created',\n            message: `Created account for: <b>${firstName} ${lastName}</b>`,\n            buttons: [{\n                text: 'OK'\n            }]\n        }).then(alert => alert.present());\n    }\n\n    function handleFirstNameValue(event) {\n        firstName = event.target.value;\n    }\n\n    function handleLastNameValue(event) {\n        lastName = event.target.value;\n    }\n</script> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_plans_plans_module_ts.js.map