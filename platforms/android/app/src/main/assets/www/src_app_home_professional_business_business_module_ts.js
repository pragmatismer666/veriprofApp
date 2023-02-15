"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_business_business_module_ts"],{

/***/ 9146:
/*!***************************************************************!*\
  !*** ./src/app/home/professional/business/business.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessPageModule": () => (/* binding */ BusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business.page */ 4938);







const routes = [
    {
        path: '',
        component: _business_page__WEBPACK_IMPORTED_MODULE_0__.BusinessPage
    }
];
let BusinessPageModule = class BusinessPageModule {
};
BusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_business_page__WEBPACK_IMPORTED_MODULE_0__.BusinessPage]
    })
], BusinessPageModule);



/***/ }),

/***/ 4938:
/*!*************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessPage": () => (/* binding */ BusinessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _business_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business.page.html?ngResource */ 5315);
/* harmony import */ var _business_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business.page.scss?ngResource */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);







let BusinessPage = class BusinessPage {
    constructor(toastController, authService, restApi) {
        this.toastController = toastController;
        this.authService = authService;
        this.restApi = restApi;
        // segment: string = "addBid";
        this.segment = "paper";
        this.bids = [];
        // form:FormGroup;
        this.form = {
            name: '',
            surname: '',
            professional_reg_no: '',
            email_add: '',
            cell: '',
            bidder: '',
            client_department: '',
            bid_no: '',
            short_description: '',
            file: ''
        };
    }
    ngOnInit() {
        this.getProfile();
        this.getBids();
    }
    getProfile() {
        let partVal = "123456879";
        let fullVal = "0123456789";
        let text = partVal.charAt(Math.floor(Math.random() * partVal.length));
        ;
        for (var i = 0; i < 4; i++) {
            text += fullVal.charAt(Math.floor(Math.random() * fullVal.length));
        }
        this.form.bid_no = text;
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res.status != "noexist") {
                this.form.professional_reg_no = res.data.reg_no;
                this.form.email_add = this.authService.user.email;
                this.form.cell = this.authService.user.mobile;
            }
            else {
                this.restApi.toast('You need update ', 1500);
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    initial() {
        this.form = {
            name: '',
            surname: '',
            professional_reg_no: '',
            email_add: '',
            cell: '',
            bidder: '',
            client_department: '',
            bid_no: '',
            short_description: '',
            file: ''
        };
        this.getProfile();
    }
    submit() {
        for (let x in this.form) {
            if (this.form[x].length == 0 && x != "file") {
                let name = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name, 1200);
            }
        }
        this.restApi.post('professional/add-bid', { user_id: this.authService.user.userId, data: this.form }).subscribe((res) => {
            console.log(res);
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.bids = res.data;
                this.segment = "paper";
                for (let x in this.form) {
                    this.form[x] = "";
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    getBids() {
        this.restApi.post('professional/get-bids', { user_id: this.authService.user.userId }).subscribe((res) => {
            console.log(res);
            if (res && res.status) {
                if (res.status == 'success') {
                    this.bids = res.data;
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    download(filename) {
        console.log(filename);
        this.restApi.downfile('bid/', filename);
    }
};
BusinessPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__.RestApiService }
];
BusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-business',
        template: _business_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_business_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BusinessPage);



/***/ }),

/***/ 4766:
/*!**************************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n.rwd-table th {\n  display: none;\n}\n.rwd-table td {\n  display: block;\n  line-height: 1.5rem;\n}\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.5em;\n  display: inline-block;\n}\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.3em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n@media (min-width: 800px) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBREo7QUFHSTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQUtRO0VBQ0ksa0JBQUE7QUFIWjtBQU1RO0VBQ0kscUJBQUE7QUFKWjtBQU9RO0VBQ0ksMkJBQUE7RUFDQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtBQU5aO0FBU1k7RUFSSjtJQVNRLGFBQUE7RUFOZDtBQUNGO0FBVUk7O0VBRUksZ0JBQUE7QUFSUjtBQVVRO0VBSko7O0lBS1EsbUJBQUE7SUFDQSxvQkFBQTtFQU5WO0VBUVU7O0lBQ0ksZUFBQTtFQUxkO0VBUVU7O0lBQ0ksZ0JBQUE7RUFMZDtBQUNGO0FBVUk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVJSO0FBV0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFI7QUFXUTtFQUNJLHFCQUFBO0FBVFo7QUFZUTs7RUFFSSxpQkFBQTtBQVZaO0FBWVk7RUFKSjs7SUFLUSx1QkFBQTtFQVJkO0FBQ0Y7QUFXUTs7RUFFSSxXQUFBO0FBVFoiLCJmaWxlIjoiYnVzaW5lc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnQtYWxwaGE6IDgwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xyXG5cclxuLnJ3ZC10YWJsZSB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgICBib3JkZXItdG9wICAgOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gZm9yIGFjY2Vzc2liaWxpdHksIHVzZSBhIHZpc3VhbGx5IGhpZGRlbiBtZXRob2QgaGVyZSBpbnN0ZWFkISAgXHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGRpc3BsYXkgICAgOiBibG9jaztcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudCAgICA6IGF0dHIoZGF0YS10aClcIjogXCI7IC8vIHdobyBrbmV3IHlvdSBjb3VsZCBkbyB0aGlzPyBUaGUgaW50ZXJuZXQsIHRoYXQncyB3aG8uXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcclxuICAgICAgICAgICAgd2lkdGggICAgICA6IDkuNWVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4zZW0gLjVlbTtcclxuXHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMzNDQ5NUU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJ3ZC10YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZCAgIDogIzM0NDk1RTtcclxuICAgICAgICBjb2xvciAgICAgICAgOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC40ZW07XHJcbiAgICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG5cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMzQ0OTVFLCAxMCUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBtYXJnaW46IC41ZW0gMWVtO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkZDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 5315:
/*!**************************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\n        <ion-title class=\"h-50px\">My Bids</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" class=\"content-segment-head-area\">\n        <ion-segment-button value=\"addBid\">\n            <ion-icon name=\"add-circle\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Add New</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"paper\" (click)=\"initial()\">\n            <ion-icon name=\"layers-outline\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Bids</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card class=\"fixed-ion-card-area\" *ngSwitchCase=\"'paper'\">\n            <ion-card-content>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"bids.length > 0\">\n                        <tr>\n                            <th>Name</th>\n                            <th>Surname</th>\n                            <th>Profess Reg No</th>\n                            <th>Email Add</th>\n                            <th>Cell</th>\n                            <th>Bidder</th>\n                            <th>Client / Department</th>\n                            <th>Bid No</th>\n                            <th>Short Description</th>\n                            <th>Bid Partcipation</th>\n                            <th></th>\n                        </tr>\n                        <tr *ngFor=\"let x of bids\">\n                            <td data-th=\"Name\">{{x.name}}</td>\n                            <td data-th=\"Surname\">{{x.surname}}</td>\n                            <td data-th=\"Profess Reg No\">{{x.professional_reg_no}}</td>\n                            <td data-th=\"Email Add\">{{x.email_add}}</td>\n                            <td data-th=\"Cell\">{{x.cell}}</td>\n                            <td data-th=\"Bidder\">{{x.bidder}}</td>\n                            <td data-th=\"Client / Department\">{{x.client_department}}</td>\n                            <td data-th=\"Bid No\">{{x.bid_no}}</td>\n                            <td data-th=\"Short Description\">{{x.short_description}}</td>\n                            <td data-th=\"Bid Partcipation\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe mt-0\"\n                                    (click)=\"download(x.file)\">\n                                    Print / Download</ion-button>\n                            </td>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"bids.length == 0\">\n                        <div class=\"text-center\">No Bids.</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card class=\"fixed-ion-card-area\" *ngSwitchCase=\"'addBid'\">\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">Name </ion-label>\n                    <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Surname</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.surname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Reg No</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.professional_reg_no\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Email Add</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.email_add\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Cell</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.cell\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Bidder</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.bidder\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Client / Department</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.client_department\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Bid No</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.bid_no\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Short Description</ion-label>\n                    <ion-textarea type=\"text\" rows=\"3\" name=\"short_description\" [(ngModel)]=\"form.short_description\">\n                    </ion-textarea>\n                </ion-item>\n                <ion-button style=\"width: 90%;margin: 10px;\" (click)=\"submit()\">Add New Bid</ion-button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <br />\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_business_business_module_ts.js.map