(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["business-business-module"],{

/***/ "./src/app/home/professional/business/business.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/business/business.module.ts ***!
  \***************************************************************/
/*! exports provided: BusinessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPageModule", function() { return BusinessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _business_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business.page */ "./src/app/home/professional/business/business.page.ts");







var routes = [
    {
        path: '',
        component: _business_page__WEBPACK_IMPORTED_MODULE_6__["BusinessPage"]
    }
];
var BusinessPageModule = /** @class */ (function () {
    function BusinessPageModule() {
    }
    BusinessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_business_page__WEBPACK_IMPORTED_MODULE_6__["BusinessPage"]]
        })
    ], BusinessPageModule);
    return BusinessPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/business/business.page.html":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>My Bids</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <br>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button value=\"addBid\">\n            <ion-icon name=\"add-circle\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Add New</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"paper\" (click)=\"initial()\">\n            <ion-icon name=\"paper\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Bids</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'paper'\">\n            <ion-card-content>\n                <table class=\"rwd-table\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Surname</th>\n                        <th>Profess Reg No</th>\n                        <th>Email Add</th>\n                        <th>Cell</th>\n                        <th>Bidder</th>\n                        <th>Client / Department</th>\n                        <th>Bid No</th>\n                        <th>Short Description</th>\n                        <th>Bid Partcipation</th>\n                        <th></th>\n                    </tr>\n                    <!-- <ng-container *ngIf=\"bids.length == 0\">\n                        <div class=\"text-center\" style=\"font-size: 1.25em;\">There is no bids.</div>\n                    </ng-container> -->\n                    <ng-container *ngIf=\"true\">\n                        <tr *ngFor=\"let x of bids\">\n                            <td data-th=\"Name\">{{x.name}}</td>\n                            <td data-th=\"Surname\">{{x.surname}}</td>\n                            <td data-th=\"Profess Reg No\">{{x.professional_reg_no}}</td>\n                            <td data-th=\"Email Add\">{{x.email_add}}</td>\n                            <td data-th=\"Cell\">{{x.cell}}</td>\n                            <td data-th=\"Bidder\">{{x.bidder}}</td>\n                            <td data-th=\"Client / Department\">{{x.client_department}}</td>\n                            <td data-th=\"Bid No\">{{x.bid_no}}</td>\n                            <td data-th=\"Short Description\">{{x.short_description}}</td>\n                            <td data-th=\"Bid Partcipation\">\n                                <ion-button size=\"small\" color=\"success\" class=\"project_verify\"\n                                    (click)=\"download(x.file)\">Print / Download</ion-button>\n                            </td>\n                        </tr>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'addBid'\">\n            <!-- <form [formGroup]=\"loginForm\" (submit)=\"onSubmit()\"> -->\n            <ion-item>\n                <ion-label position=\"stacked\">Name </ion-label>\n                <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Surname</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.surname\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Professional Reg No</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.professional_reg_no\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Email Add</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.email_add\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Cell</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.cell\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Bidder</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.bidder\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Client / Department</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.client_department\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Bid No</ion-label>\n                <ion-input type=\"text\" [(ngModel)]=\"form.bid_no\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Short Description</ion-label>\n                <ion-textarea type=\"text\" rows=\"3\" name=\"short_description\" [(ngModel)]=\"form.short_description\">\n                </ion-textarea>\n            </ion-item>\n            <ion-button style=\"width: 90%;margin: 10px;\" (click)=\"submit()\">Add New Bid</ion-button>\n            <!-- </form> -->\n        </ion-card>\n    </div>\n    <br />\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/professional/business/business.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n.list {\n  font-size: 11px; }\n\n.project_verify {\n  font-size: 11px;\n  margin-top: -7px; }\n\n.rwd-table {\n  margin: 1em 0;\n  min-width: 100%; }\n\n.rwd-table tr {\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd; }\n\n.rwd-table th {\n    display: none; }\n\n.rwd-table td {\n    display: block; }\n\n.rwd-table td:first-child {\n      padding-top: .5em; }\n\n.rwd-table td:last-child {\n      padding-bottom: .5em; }\n\n.rwd-table td:before {\n      content: attr(data-th) \": \";\n      font-weight: bold;\n      width: 10em;\n      display: inline-block; }\n\n@media (min-width: 100%) {\n        .rwd-table td:before {\n          display: none; } }\n\n.rwd-table th,\n  .rwd-table td {\n    text-align: left; }\n\n@media (min-width: 100%) {\n      .rwd-table th,\n      .rwd-table td {\n        display: table-cell;\n        padding: .25em .5em; }\n        .rwd-table th:first-child,\n        .rwd-table td:first-child {\n          padding-left: 0; }\n        .rwd-table th:last-child,\n        .rwd-table td:last-child {\n          padding-right: 0; } }\n\n.rwd-table h1 {\n    font-weight: normal;\n    letter-spacing: -1px;\n    color: #34495E; }\n\n.rwd-table .rwd-table {\n    background: #34495E;\n    color: #fff;\n    border-radius: .4em;\n    overflow: hidden; }\n\n.rwd-table .rwd-table tr {\n      border-color: #46637f; }\n\n.rwd-table .rwd-table th,\n    .rwd-table .rwd-table td {\n      margin: .5em 1em; }\n\n@media (min-width: 100%) {\n        .rwd-table .rwd-table th,\n        .rwd-table .rwd-table td {\n          padding: 1em !important; } }\n\n.rwd-table .rwd-table th,\n    .rwd-table .rwd-table td:before {\n      color: #dd5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvYnVzaW5lc3MvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcaG9tZVxccHJvZmVzc2lvbmFsXFxidXNpbmVzc1xcYnVzaW5lc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLGVBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFGbkI7SUFLUSwwQkFBNkI7SUFDN0IsNkJBQTZCLEVBQUE7O0FBTnJDO0lBVVEsYUFBYSxFQUFBOztBQVZyQjtJQWNRLGNBQWMsRUFBQTs7QUFkdEI7TUFpQlksaUJBQWlCLEVBQUE7O0FBakI3QjtNQXFCWSxvQkFBb0IsRUFBQTs7QUFyQmhDO01BeUJZLDJCQUE4QjtNQUM5QixpQkFBaUI7TUFHakIsV0FBYTtNQUNiLHFCQUFxQixFQUFBOztBQUdyQjtRQWpDWjtVQWtDZ0IsYUFBYSxFQUFBLEVBRXBCOztBQXBDVDs7SUF5Q1EsZ0JBQWdCLEVBQUE7O0FBRWhCO01BM0NSOztRQTRDWSxtQkFBbUI7UUFDbkIsbUJBQW1CLEVBQUE7UUE3Qy9COztVQWdEZ0IsZUFBZSxFQUFBO1FBaEQvQjs7VUFvRGdCLGdCQUFnQixFQUFBLEVBQ25COztBQXJEYjtJQTJEUSxtQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGNBQXVCLEVBQUE7O0FBN0QvQjtJQWlFUSxtQkFBc0I7SUFDdEIsV0FBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFxQixFQUFBOztBQXBFN0I7TUF1RVkscUJBQW1DLEVBQUE7O0FBdkUvQzs7TUE0RVksZ0JBQWdCLEVBQUE7O0FBRWhCO1FBOUVaOztVQStFZ0IsdUJBQXVCLEVBQUEsRUFFOUI7O0FBakZUOztNQXFGWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2Zlc3Npb25hbC9idXNpbmVzcy9idXNpbmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yICAgIDogcmdiKDEwOSwgMTA5LCAxMDkpO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcblxyXG59XHJcblxyXG4ucHJvamVjdF92ZXJpZnkge1xyXG4gICAgZm9udC1zaXplIDogMTFweDtcclxuICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbn1cclxuXHJcbi5yd2QtdGFibGUge1xyXG4gICAgbWFyZ2luICAgOiAxZW0gMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTsgLy8gYWRqdXN0IHRvIHlvdXIgbmVlZHNcclxuXHJcbiAgICB0ciB7XHJcbiAgICAgICAgYm9yZGVyLXRvcCAgIDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIGZvciBhY2Nlc3NpYmlsaXR5LCB1c2UgYSB2aXN1YWxseSBoaWRkZW4gbWV0aG9kIGhlcmUgaW5zdGVhZCEgIFxyXG4gICAgfVxyXG5cclxuICAgIHRkIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNWVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgICAgOiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxyXG4gICAgICAgICAgICB3aWR0aCAgOiAxMGVtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgLy8gZW5kIG9wdGlvbnNcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDAlKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDAlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XHJcblxyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXdlaWdodCAgIDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjMzQ0OTVFO1xyXG4gICAgfVxyXG5cclxuICAgIC5yd2QtdGFibGUge1xyXG4gICAgICAgIGJhY2tncm91bmQgICA6ICMzNDQ5NUU7XHJcbiAgICAgICAgY29sb3IgICAgICAgIDogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xyXG4gICAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oIzM0NDk1RSwgMTAlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoLFxyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAuNWVtIDFlbTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDAlKSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGgsXHJcbiAgICAgICAgdGQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNkZDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/professional/business/business.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/business/business.page.ts ***!
  \*************************************************************/
/*! exports provided: BusinessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessPage", function() { return BusinessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");





var BusinessPage = /** @class */ (function () {
    function BusinessPage(toastController, authService, restApi) {
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
    BusinessPage.prototype.ngOnInit = function () {
        this.getProfile();
        this.getBids();
    };
    BusinessPage.prototype.getProfile = function () {
        var _this = this;
        var partVal = "123456879";
        var fullVal = "0123456789";
        var text = partVal.charAt(Math.floor(Math.random() * partVal.length));
        ;
        for (var i = 0; i < 4; i++) {
            text += fullVal.charAt(Math.floor(Math.random() * fullVal.length));
        }
        this.form.bid_no = text;
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res.status != "noexist") {
                _this.form.professional_reg_no = res.personal.reg_no;
                _this.form.email_add = _this.authService.user.email;
                _this.form.cell = _this.authService.user.mobile;
            }
            else {
                _this.restApi.toast('You need update ', 1500);
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    BusinessPage.prototype.initial = function () {
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
    };
    BusinessPage.prototype.submit = function () {
        var _this = this;
        for (var x in this.form) {
            console.log(x);
            if (this.form[x].length == 0 && x != "file") {
                var name_1 = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name_1, 1200);
            }
        }
        this.restApi.post('professional/add-bid', { user_id: this.authService.user.userId, data: this.form }).subscribe(function (res) {
            console.log(res);
            if (res && res.status) {
                _this.restApi.toast(res.message, 1200);
                _this.bids = res.data;
                _this.segment = "paper";
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    BusinessPage.prototype.getBids = function () {
        var _this = this;
        this.restApi.post('professional/get-bids', { user_id: this.authService.user.userId }).subscribe(function (res) {
            console.log(res);
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.bids = res.data;
                }
                else {
                    _this.restApi.toast(res.message, 1200);
                }
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    BusinessPage.prototype.download = function (filename) {
        console.log(filename);
        this.restApi.downfile('bid/', filename);
    };
    BusinessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-business',
            template: __webpack_require__(/*! ./business.page.html */ "./src/app/home/professional/business/business.page.html"),
            styles: [__webpack_require__(/*! ./business.page.scss */ "./src/app/home/professional/business/business.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]])
    ], BusinessPage);
    return BusinessPage;
}());



/***/ })

}]);
//# sourceMappingURL=business-business-module.js.map