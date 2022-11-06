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

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d;\n}\n\n.list {\n  font-size: 11px;\n}\n\n.project_verify {\n  font-size: 11px;\n  margin-top: -7px;\n}\n\n.rwd-table {\n  margin-top: 1em;\n  margin-left: 2%;\n  margin-right: 2%;\n  min-width: 96%;\n}\n\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n\n.rwd-table th {\n  display: none;\n}\n\n.rwd-table td {\n  display: block;\n}\n\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 10em;\n  display: inline-block;\n}\n\n@media (min-width: 100%) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n\n@media (min-width: 100%) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n\n@media (min-width: 100%) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUk7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0FBRFI7O0FBSUk7RUFDSSxjQUFBO0FBRlI7O0FBSVE7RUFDSSxrQkFBQTtBQUZaOztBQUtRO0VBQ0kscUJBQUE7QUFIWjs7QUFNUTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFHQSxXQUFBO0VBQ0EscUJBQUE7QUFOWjs7QUFTWTtFQVRKO0lBVVEsYUFBQTtFQU5kO0FBQ0Y7O0FBVUk7O0VBRUksZ0JBQUE7QUFSUjs7QUFVUTtFQUpKOztJQUtRLG1CQUFBO0lBQ0EscUJBQUE7RUFOVjtFQVFVOztJQUNJLGVBQUE7RUFMZDtFQVFVOztJQUNJLGdCQUFBO0VBTGQ7QUFDRjs7QUFVSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBUlI7O0FBV0k7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVFI7O0FBV1E7RUFDSSxxQkFBQTtBQVRaOztBQVlROztFQUVJLGlCQUFBO0FBVlo7O0FBWVk7RUFKSjs7SUFLUSx1QkFBQTtFQVJkO0FBQ0Y7O0FBV1E7O0VBRUksV0FBQTtBQVRaIiwiZmlsZSI6ImJ1c2luZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3IgICAgOiByZ2IoMTA5LCAxMDksIDEwOSk7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuXHJcbn1cclxuXHJcbi5wcm9qZWN0X3ZlcmlmeSB7XHJcbiAgICBmb250LXNpemUgOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTdweDtcclxufVxyXG5cclxuLnJ3ZC10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wICAgOiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gICAgbWluLXdpZHRoOiA5NiU7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXHJcblxyXG4gICAgdHIge1xyXG4gICAgICAgIGJvcmRlci10b3AgICA6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgfVxyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcclxuICAgIH1cclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50ICAgIDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcclxuICAgICAgICAgICAgd2lkdGggIDogMTBlbTsgLy8gbWFnaWMgbnVtYmVyIDooIGFkanVzdCBhY2NvcmRpbmcgdG8geW91ciBvd24gY29udGVudFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwJSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwJSkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IG5vcm1hbDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICBjb2xvciAgICAgICAgIDogIzM0NDk1RTtcclxuICAgIH1cclxuXHJcbiAgICAucndkLXRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kICAgOiAjMzQ0OTVFO1xyXG4gICAgICAgIGNvbG9yICAgICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjRlbTtcclxuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMzNDQ5NUUsIDEwJSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aCxcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLjVlbSAxZW07XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAwJSkge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGQ1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 5315:
/*!**************************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>My Bids</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button value=\"addBid\">\n            <ion-icon name=\"add-circle\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Add New</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"paper\" (click)=\"initial()\">\n            <ion-icon name=\"layers-outline\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Bids</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card class=\"p-fixed fixed-ion-card-area\" *ngSwitchCase=\"'paper'\">\n            <table class=\"rwd-table\">\n                <ng-container *ngIf=\"bids.length > 0\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Surname</th>\n                        <th>Profess Reg No</th>\n                        <th>Email Add</th>\n                        <th>Cell</th>\n                        <th>Bidder</th>\n                        <th>Client / Department</th>\n                        <th>Bid No</th>\n                        <th>Short Description</th>\n                        <th>Bid Partcipation</th>\n                        <th></th>\n                    </tr>\n                    <tr *ngFor=\"let x of bids\">\n                        <td data-th=\"Name\">{{x.name}}</td>\n                        <td data-th=\"Surname\">{{x.surname}}</td>\n                        <td data-th=\"Profess Reg No\">{{x.professional_reg_no}}</td>\n                        <td data-th=\"Email Add\">{{x.email_add}}</td>\n                        <td data-th=\"Cell\">{{x.cell}}</td>\n                        <td data-th=\"Bidder\">{{x.bidder}}</td>\n                        <td data-th=\"Client / Department\">{{x.client_department}}</td>\n                        <td data-th=\"Bid No\">{{x.bid_no}}</td>\n                        <td data-th=\"Short Description\">{{x.short_description}}</td>\n                        <td data-th=\"Bid Partcipation\">\n                            <ion-button size=\"small\" color=\"success\" class=\"project_verify\" (click)=\"download(x.file)\">\n                                Print / Download</ion-button>\n                        </td>\n                    </tr>\n                </ng-container>\n                <ng-container *ngIf=\"bids.length == 0\">\n                    <div class=\"text-center\">No Bids.</div>\n                </ng-container>\n            </table>\n        </ion-card>\n        <ion-card class=\"p-fixed fixed-ion-card-area m-1\" *ngSwitchCase=\"'addBid'\">\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">Name </ion-label>\n                    <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Surname</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.surname\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Reg No</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.professional_reg_no\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Email Add</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.email_add\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Cell</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.cell\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Bidder</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.bidder\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Client / Department</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.client_department\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Bid No</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.bid_no\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Short Description</ion-label>\n                    <ion-textarea type=\"text\" rows=\"3\" name=\"short_description\" [(ngModel)]=\"form.short_description\">\n                    </ion-textarea>\n                </ion-item>\n                <ion-button style=\"width: 90%;margin: 10px;\" (click)=\"submit()\">Add New Bid</ion-button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <br />\n</ion-content>\n<!-- <ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_business_business_module_ts.js.map