(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["plans-plans-module"],{

/***/ "./src/app/home/professional/plans/plans.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/professional/plans/plans.module.ts ***!
  \*********************************************************/
/*! exports provided: PlansPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPageModule", function() { return PlansPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _plans_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plans.page */ "./src/app/home/professional/plans/plans.page.ts");







var routes = [
    {
        path: '',
        component: _plans_page__WEBPACK_IMPORTED_MODULE_6__["PlansPage"]
    }
];
var PlansPageModule = /** @class */ (function () {
    function PlansPageModule() {
    }
    PlansPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_plans_page__WEBPACK_IMPORTED_MODULE_6__["PlansPage"]]
        })
    ], PlansPageModule);
    return PlansPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/plans/plans.page.html":
/*!*********************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>ePlan Filing</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button value=\"paper\" class=\"dark\" enabled>\n            <ion-icon name=\"add-circle\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">New Plans</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"added\">\n            <ion-icon name=\"star\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Archives</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <br>\n\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'paper'\">\n            <ion-card-content>\n                <strong>Project Info</strong>\n                <ion-item>\n                    <ion-label position=\"stacked\">Clients Name</ion-label>\n                    <ion-input name=\"client_name\" [(ngModel)]=\"plan.client_name\" value=\"\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Clients Contact Details</ion-label>\n                    <ion-label position=\"stacked\"></ion-label>\n                    <ion-input placeholder=\"Address Line 1\" name=\"client_address_line_1\"\n                        [(ngModel)]=\"plan.client_address_line_1\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"client_address_line_2\"\n                        [(ngModel)]=\"plan.client_address_line_2\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"client_city\" [(ngModel)]=\"plan.client_city\"></ion-input>\n                    <ion-select multiple=\"false\" name=\"client_province\" [(ngModel)]=\"plan.client_province\"\n                        placeholder=\"Select Province\">\n                        <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                        <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                        <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                        <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                        <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                        <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                        <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                        <ion-select-option value=\"North West\">North West</ion-select-option>\n                        <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                    </ion-select>\n                    <ion-input placeholder=\"Zip Code\" name=\"client_zipcode\" [(ngModel)]=\"plan.client_zipcode\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Title</ion-label>\n                    <ion-input name=\"project_title\" [(ngModel)]=\"plan.project_title\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Project/Site Location</ion-label>\n                    <ion-label position=\"stacked\"></ion-label>\n                    <ion-input placeholder=\"Address Line 1\" name=\"project_address_line_1\"\n                        [(ngModel)]=\"plan.project_address_line_1\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"project_address_line_2\"\n                        [(ngModel)]=\"plan.project_address_line_2\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"project_city\" [(ngModel)]=\"plan.project_city\"></ion-input>\n                    <ion-select multiple=\"false\" name=\"project_province\" [(ngModel)]=\"plan.project_province\"\n                        placeholder=\"Select Province\">\n                        <ion-select-option value=\"Eastern Cape\">Eastern Cape</ion-select-option>\n                        <ion-select-option value=\"Free State\">Free State</ion-select-option>\n                        <ion-select-option value=\"Gauteng\">Gauteng</ion-select-option>\n                        <ion-select-option value=\"KwaZulu-Natal\">KwaZulu-Natal</ion-select-option>\n                        <ion-select-option value=\"Limpopo\">Limpopo</ion-select-option>\n                        <ion-select-option value=\"Mpumalanga\">Mpumalanga</ion-select-option>\n                        <ion-select-option value=\"Northern Cape\">Northern Cape</ion-select-option>\n                        <ion-select-option value=\"North West\">North West</ion-select-option>\n                        <ion-select-option value=\"Western Cape\">Western Cape</ion-select-option>\n                    </ion-select>\n                    <ion-input placeholder=\"Zip Code\" name=\"project_zipcode\" [(ngModel)]=\"plan.project_zipcode\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Local Municipal</ion-label>\n                    <ion-select multiple=\"false\" placeholder=\"Municipal\" [(ngModel)]=\"plan.municipal\" name=\"municipal\">\n                        <ion-select-option value=\"Abaqulusi Local Municipality\">Abaqulusi Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Albert Luthuli Local Municipality\">Albert Luthuli Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Alfred Duma Local Municipality\">Alfred Duma Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Amahlathi Local Municipality\">Amahlathi Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Ba-Phalaborwa Local Municipality\">Ba-Phalaborwa Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Beaufort West Local Municipality\">Beaufort West Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Bela-Bela Local Municipality\">Bela-Bela Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Bergrivier Local Municipality\">Bergrivier Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Big Five Hlabisa Local Municipality\">Big Five Hlabisa Local\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Bitou Local Municipality\">Bitou Local Municipality</ion-select-option>\n                        <ion-select-option value=\"Blouberg Local Municipality\">Blouberg Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Blue Crane Route Local Municipality\">Blue Crane Route Local\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Breede Valley Local Municipality\">Breede Valley Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Buffalo City Metropolitan Municipality\">Buffalo City Metropolitan\n                            Municipality</ion-select-option>\n                        <ion-select-option value=\"Bushbuckridge Local Municipality\">Bushbuckridge Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Cape Agulhas Local Municipality\">Cape Agulhas Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"Cederberg Local Municipality\">Cederberg Local Municipality\n                        </ion-select-option>\n                        <ion-select-option value=\"City of Cape Town Metropolitan Municipality\">City of Cape Town\n                            MetropolitanMunicipality</ion-select-option>\n                        <ion-select-option value=\"City of Johannesburg Metropolitan Municipality\">City of Johannesburg\n                            MetropolitanMunicipality</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">ERF No.</ion-label>\n                    <ion-input [(ngModel)]=\"plan.erfno\" name=\"erfno\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Occupancy</ion-label>\n                    <ion-input name=\"occupancy\" [(ngModel)]=\"plan.occupancy\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">HIA Sensitivity</ion-label>\n                    <ion-input name=\"hia_sensitivity\" [(ngModel)]=\"plan.hia_sensitivity\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Area/Size</ion-label>\n                    <ion-input name=\"project_area\" [(ngModel)]=\"plan.project_area\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Responsible Professional</ion-label>\n                    <ion-input name=\"professional\" [(ngModel)]=\"plan.professional\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Prof. Registration Number</ion-label>\n                    <ion-input name=\"professional_reg_number\" [(ngModel)]=\"plan.professional_reg_number\"\n                        value=\"{{plan.professional_reg_number}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Responsible QS</ion-label>\n                    <ion-input name=\"responsible_qs\" [(ngModel)]=\"plan.responsible_qs\" value=\"{{plan.responsible_qs}}\">\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Full Name</ion-label>\n                    <ion-input name=\"professional_name\" [(ngModel)]=\"plan.professional_name\"\n                        value=\"{{plan.professional_name}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Cost</ion-label>\n                    <ion-input name=\"project_cost\" [(ngModel)]=\"plan.project_cost\"\n                        value=\"{{plan.project_cost}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Generated Plan No.</ion-label>\n                    <ion-input name=\"project_plan_no\" [(ngModel)]=\"plan.project_plan_no\"\n                        value=\"{{plan.project_plan_no}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom:12px;\">Contact Details</ion-label>\n                    <ion-input placeholder=\"Contact Eamil\" name=\"contact_email\" [(ngModel)]=\"plan.contact_email\"\n                        value=\"{{plan.contact_email}}\"></ion-input>\n                    <ion-input placeholder=\"Contact Phone\" name=\"contact_phone\" [(ngModel)]=\"plan.contact_phone\"\n                        value=\"{{plan.phone}}\"></ion-input>\n                    <ion-input placeholder=\"Address Line 1\" name=\"contact_address_line_1\"\n                        [(ngModel)]=\"plan.contact_address_line_1\" value=\"{{plan.contact_address_line_1}}\"></ion-input>\n                    <ion-input placeholder=\"Address Line 2\" name=\"contact_address_line_2\"\n                        [(ngModel)]=\"plan.contact_address_line_2\" value=\"{{plan.contact_address_line_2}}\"></ion-input>\n                    <ion-input placeholder=\"City\" name=\"contact_city\" [(ngModel)]=\"plan.contact_city\"\n                        value=\"{{plan.contact_city}}\"></ion-input>\n                    <ion-input placeholder=\"Cost\" name=\"contact_province\" [(ngModel)]=\"plan.contact_province\"\n                        value=\"{{plan.contact_province}}\"></ion-input>\n                    <ion-input placeholder=\"Zip Code\" name=\"contact_zipcode\" [(ngModel)]=\"plan.contact_zipcode\"\n                        value=\"{{plan.contact_zipcode}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload PDF Copy of plan - FILE PLAN\n                    </ion-label>\n                    <ion-item>\n                        <ion-input name=\"file\" id=\"myFileInput\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event)\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\" (click)=\"submit()\">\n                        Request Verification</ion-button>\n                </div>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'added'\">\n            <table class=\"table\" style=\"width: 100%;\">\n                <tr>\n                    <th>Title</th>\n                    <th>Profess Email</th>\n                    <th>DateTime</th>\n                    <th>Download</th>\n                </tr>\n                <tr *ngFor=\"let x of Plans\">\n                    <td>{{x.project_title}}</td>\n                    <td>{{x.contact_email}}</td>\n                    <td>{{x.created_at}}</td>\n                    <td class=\"d-flex\">\n                        <ion-button size=\"small\" color=\"success\" (click)=\"download(x.certificate)\"\n                            style=\"font-size: 10px;\">Download</ion-button>\n                    </td>\n                </tr>\n            </table>\n        </ion-card>\n    </div>\n    <br>\n</ion-content>\n\n<script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n        event.preventDefault();\n        controller.create({\n            header: 'Account Created',\n            message: `Created account for: <b>${firstName} ${lastName}</b>`,\n            buttons: [{\n                text: 'OK'\n            }]\n        }).then(alert => alert.present());\n    }\n\n    function handleFirstNameValue(event) {\n        firstName = event.target.value;\n    }\n\n    function handleLastNameValue(event) {\n        lastName = event.target.value;\n    }\n</script>"

/***/ }),

/***/ "./src/app/home/professional/plans/plans.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  font-size: 10px; }\n  .table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n  .table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n  .scrollH {\n  overflow-x: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcGxhbnMvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxccHJvZmVzc2lvbmFsXFxwbGFuc1xccGxhbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBO0VBRG5CO0lBSVEsbUJBQW1CO0lBQ25CLFlBQWU7SUFDZixXQUFnQjtJQUNoQixzQkFBMEIsRUFBQTtFQVBsQztJQVdRLGdCQUFnQjtJQUNoQixZQUFlO0lBQ2YsV0FBZ0I7SUFDaEIsc0JBQTBCLEVBQUE7RUFJbEM7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJvZmVzc2lvbmFsL3BsYW5zL3BsYW5zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/professional/plans/plans.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/professional/plans/plans.page.ts ***!
  \*******************************************************/
/*! exports provided: PlansPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlansPage", function() { return PlansPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var PlansPage = /** @class */ (function () {
    function PlansPage(toastController, authService, restApi) {
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
            client_name: '',
            client_address_line_1: '',
            client_address_line_2: '',
            client_city: '',
            client_province: '',
            client_zipcode: '',
            erfno: '',
            occupancy: '',
            hia_sensitivity: '',
            municipal: '',
            professional_name: this.authService.user.name.toString(),
            professional_reg_number: '',
            professional: '',
            contact_email: '',
            contact_phone: '',
            contact_address_line_1: '',
            contact_address_line_2: '',
            contact_city: '',
            contact_province: '',
            contact_zipcode: '',
            project_plan_no: '',
            project_title: '',
            project_cost: '',
            project_area: '',
            project_address_line_1: '',
            project_address_line_2: '',
            project_city: '',
            project_province: '',
            project_zipcode: '',
            responsible_qs: '',
            file: ''
        };
    }
    PlansPage.prototype.ngOnInit = function () {
        this.getplanNo();
        this.getPlans();
    };
    PlansPage.prototype.submit = function () {
        var _this = this;
        for (var x in this.plan) {
            if (this.plan[x].length == 0) {
                var name_1 = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name_1, 1200);
            }
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.plan.contact_email) != true) {
            this.restApi.toast("Please input validated email.", 1500);
        }
        console.log(this.plan, this.authService.user.userId);
        this.restApi.post('professional/add-plan', { user_id: this.authService.user.userId, data: this.plan }).subscribe(function (res) {
            console.log(res);
            if (res && res.status == 'success') {
                _this.restApi.toast(res.message, 1500);
                _this.segment = 'added';
                _this.Plans = res.data;
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    PlansPage.prototype.getPlans = function () {
        var _this = this;
        this.restApi.post('professional/get-plan', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status == 'success') {
                console.log(res.data);
                _this.Plans = res.data;
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    PlansPage.prototype.getplanNo = function () {
        var text = "";
        var possible = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        this.plan.project_plan_no = text;
    };
    PlansPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file);
        }
        else {
            this.restApi.toast("Only PDF supported", 1200);
        }
    };
    PlansPage.prototype.uploadFile = function (file) {
        var _this = this;
        this.restApi.postFile(file, '/upload-file').subscribe(function (res) {
            if (res && res.status && res.status == 'success') {
                console.log(res.filename);
                _this.plan.file = res.filename;
            }
        }, function (error) {
            console.log(error);
        });
    };
    PlansPage.prototype.download = function (filename) {
        console.log(filename);
        this.restApi.downfile('certificate/', filename);
    };
    PlansPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plans',
            template: __webpack_require__(/*! ./plans.page.html */ "./src/app/home/professional/plans/plans.page.html"),
            styles: [__webpack_require__(/*! ./plans.page.scss */ "./src/app/home/professional/plans/plans.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], PlansPage);
    return PlansPage;
}());



/***/ })

}]);
//# sourceMappingURL=plans-plans-module.js.map