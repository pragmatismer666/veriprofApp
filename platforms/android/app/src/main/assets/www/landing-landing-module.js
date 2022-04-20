(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");








var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"],
    }
];
var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_7__["SuperTabsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing/landing.page.html":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" style=\"height: 22%;border: none;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n    </ion-content>\n</ion-header>\n\n<super-tabs activeTabIndex=\"3\" [config]=\"{ debug: true, sideMenu: 'left', allowElementScroll: true, nativeSmoothScroll: true }\">\n    <super-tabs-toolbar slot=\"bottom\">\n        <!-- <super-tab-button>\n            <ion-label>Contact</ion-label>\n        </super-tab-button> -->\n        <super-tab-button>\n            <ion-label>Search</ion-label>\n        </super-tab-button>\n        <super-tab-button>\n            <ion-label>News</ion-label>\n        </super-tab-button>\n        <super-tab-button>\n            <ion-label>Login</ion-label>\n        </super-tab-button>\n    </super-tabs-toolbar>\n    <super-tabs-container autoScrollTop>\n        <!-- <super-tab class=\"ion-padding\">\n            <h1 text-center color=\"light\">About</h1>\n            <ion-item lines=\"none\" color=\"dark\">\n                <ion-note slot=\"end\" style=\"color: rgb(255, 0, 0);\">24/7 available</ion-note>\n            </ion-item>\n            <ion-item lines=\"none\" color=\"dark\">\n            <ion-label><h1 text-center>Service Contact</h1></ion-label>\n            </ion-item>\n            <ion-item color=\"dark\">\n            <ion-label>Company Title:</ion-label>\n            <ion-label>{{title}}</ion-label>\n            </ion-item>\n            <ion-item color=\"dark\">\n            <ion-label>Contact Email:</ion-label>\n            <ion-label>{{email}}</ion-label>\n            </ion-item>\n            <ion-item color=\"dark\">\n            <ion-label>Phone Number:</ion-label>\n            <ion-label>{{phone}}</ion-label>\n            </ion-item>\n            <ion-item color=\"dark\">\n            <ion-label>Address:</ion-label>\n            <ion-label>{{address}}</ion-label>\n            </ion-item>\n            <ion-item color=\"dark\">\n            <ion-label>Latest News:</ion-label>\n            <ion-label>{{Alarm}}</ion-label>\n            </ion-item>\n        </super-tab> -->\n        <super-tab>\n            <h1 text-center color=\"light\">Quick Verify</h1>\n            <ion-card>\n                <ion-item color=\"dark\" style=\"margin-top: 4%;\">\n                    <ion-label  position=\"floating\" color=\"dark\" class=\"inner\">Key Word</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"keyword\" color=\"dark\" class=\"inner\"></ion-input>\n                    <ion-button class=\"inner\" color=\"success\" slot=\"end\" style=\"margin:0px; margin-top: 16px;\" (click)=\"searchContent()\">Search</ion-button>\n                </ion-item>\n                <ion-item color=\"dark\" lines=\"none\" class=\"quick_verify_content\">\n                    <ng-container *ngIf=\"valArray != null\">\n                        <tr *ngFor=\"let eachVal of valArray\">\n                            <td data-th=\"\">{{eachVal.key}}</td>\n                            <td data-th=\"\">{{eachVal.val}}</td>\n                        </tr>\n                    </ng-container>\n                </ion-item>\n            </ion-card>\n        </super-tab>\n        <super-tab>\n            <h1 text-center color=\"light\">News</h1>\n            <ion-card>\n            </ion-card>\n        </super-tab>\n        <super-tab>\n            <h1 text-center color=\"light\">Login - Account</h1>\n            <ion-card>\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"assessor()\" style=\"margin-top: 25%;\">\n                    <ion-icon slot=\"start\" name=\"Construct\"></ion-icon>\n                    As An Assessors\n                </ion-button>\n                <br>\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"professional()\" style=\"margin-top: 25%;\">\n                    <ion-icon slot=\"start\" name=\"switch\"></ion-icon>\n                    As A Professional\n                </ion-button>\n            </ion-card>\n        </super-tab>\n    </super-tabs-container>\n</super-tabs>"

/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerImage {\n  height: 75%;\n  margin: auto;\n  margin-top: 6%;\n  margin-bottom: 0%; }\n\nsuper-tabs-container super-tab {\n  background-color: black;\n  color: blanchedalmond; }\n\nsuper-tabs-container super-tab ion-input {\n  color: blanchedalmond; }\n\nsuper-tabs-container super-tab ion-card {\n  margin-left: 10%;\n  margin-right: 10%; }\n\nsuper-tabs super-tabs-toolbar {\n  background-color: black;\n  color: blanchedalmond; }\n\n.quick_verify_content {\n  margin-top: 4%;\n  height: 70%;\n  position: fixed;\n  overflow: scroll;\n  font-size: 0.8rem; }\n\nth {\n  width: 100%;\n  background: #8a8a8a;\n  color: #fff;\n  border: 1px solid #fff; }\n\ntd {\n  min-width: 120px;\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxsYW5kaW5nXFxsYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQWtCO0VBQ2xCLFlBQW1CO0VBQ25CLGNBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLHVCQUF1QjtFQUN2QixxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHFCQUFxQixFQUFBOztBQUl6QjtFQUNJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQWdCO0VBQ2hCLHNCQUEwQixFQUFBOztBQUc5QjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBZTtFQUNmLFdBQWdCO0VBQ2hCLHNCQUEwQjtFQUMxQixVQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckltYWdlIHtcbiAgICBoZWlnaHQgICAgICAgOiA3NSU7XG4gICAgbWFyZ2luICAgICAgIDogYXV0bztcbiAgICBtYXJnaW4tdG9wICAgOiA2JTtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbn1cblxuc3VwZXItdGFicy1jb250YWluZXIgc3VwZXItdGFiIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbnN1cGVyLXRhYnMtY29udGFpbmVyIHN1cGVyLXRhYiBpb24taW5wdXQge1xuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuc3VwZXItdGFicy1jb250YWluZXIgc3VwZXItdGFiIGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG5zdXBlci10YWJzIHN1cGVyLXRhYnMtdG9vbGJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4vLyAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi5xdWlja192ZXJpZnlfY29udGVudHtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxudGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XG4gICAgY29sb3IgICAgIDogI2ZmZjtcbiAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcbn1cblxudGQge1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBwYWRkaW5nICAgOiA1cHg7XG4gICAgY29sb3IgICAgIDogIzAwMDtcbiAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgICB3aWR0aCAgICAgOiA1MCU7XG59XG5cbi8vIC52YWxpZGF0aW9uLWVycm9ycyB7XG4vLyAgICAgY29sb3I6ICMwMDA7XG4vLyB9XG5cbi8vIC8vICBxdWljayBpbm5lclxuLy8gLmlubmVyIHtcbi8vICAgICBmb250LXNpemU6IDEzcHg7XG4vLyAgICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4vLyB9XG5cbi8vIGEge1xuLy8gICAgIGNvbG9yOiByZ2IoMTI5LCA5LCA5KTtcbi8vIH1cblxuLy8gaDIge1xuLy8gICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbi8vICAgICBjb2xvciAgICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xuLy8gICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG4vLyB9XG5cbi8vIGxpbmsge1xuLy8gICAgIGZvbnQtc2l6ZSA6IDEzcHg7XG4vLyAgICAgY29sb3IgICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-super-tabs/angular */ "./node_modules/@ionic-super-tabs/angular/fesm5/ionic-super-tabs-angular.js");







var LandingPage = /** @class */ (function () {
    function LandingPage(toastController, restApi, navCtrl, router, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
        this.opts = {
            icon: false,
            label: true,
            toolbarPos: 'top',
            scrollable: true,
        };
        this.config = {
            debug: true,
            allowElementScroll: false,
        };
        this.tabs = [];
        // Quick Verify
        this.exceptStrs = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
        this.keyArray = [];
        this.valArray = [];
    }
    LandingPage.prototype.ngOnInit = function () {
        // this.getDetails();
    };
    LandingPage.prototype.professional = function () {
        this.router.navigateByUrl('auth/login/professional');
    };
    LandingPage.prototype.assessor = function () {
        this.router.navigateByUrl('auth/login/assessor');
    };
    LandingPage.prototype.logout = function () {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    };
    LandingPage.prototype.getDetails = function () {
        var _this = this;
        this.restApi.post('get-details', {}).subscribe(function (res) {
            if (res && res.status) {
                try {
                    console.log(res.data);
                    _this.title = res.data['0']['title'];
                    _this.email = res.data['0']['email'];
                    _this.phone = res.data['0']['number'];
                    _this.address = res.data['0']['address'];
                    _this.Alarm = res.data['0']['Alarm'];
                }
                catch (Error) {
                    _this.restApi.toast("Something went wrong.", 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Something went wrong.", 1200);
        });
    };
    LandingPage.prototype.manageData = function (data) {
        try {
            this.keyArray = Object.keys(data);
            for (var index = 0; index < this.keyArray.length; index++) {
                if (this.exceptStrs.includes(this.keyArray[index])) {
                    continue;
                }
                var updateKey = "";
                if (this.keyArray[index].includes("_")) {
                    updateKey = this.keyArray[index].split("_")[0].toUpperCase() + " " + this.keyArray[index].split("_")[1].toUpperCase();
                }
                else {
                    updateKey = this.keyArray[index].toUpperCase();
                }
                var eachVal = { key: updateKey, val: data[this.keyArray[index].toString()] };
                this.valArray.push(eachVal);
            }
        }
        catch (error) {
            console.log(error);
            this.restApi.toast('Response data type is wrong.', 1200);
        }
    };
    LandingPage.prototype.searchContent = function () {
        var _this = this;
        if (this.keyword == null) {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else if (this.keyword.trim() == "") {
            this.restApi.toast('Please put keyword.', 1200);
        }
        else {
            this.valArray = [];
            this.restApi.post('search', { key: this.keyword.trim() })
                .subscribe(function (res) {
                console.log(res);
                if (res && res.status) {
                    if (res.status == 'success') {
                        _this.restApi.toast('Successfully.', 1200);
                        _this.manageData(res.data);
                    }
                    else {
                        _this.restApi.toast('There is no result.', 1200);
                    }
                }
            }, function (error) {
                console.log(error);
                _this.restApi.toast('Please Check search bar.', 1200);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabs"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_super_tabs_angular__WEBPACK_IMPORTED_MODULE_6__["SuperTabs"])
    ], LandingPage.prototype, "superTabs", void 0);
    LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.page.html */ "./src/app/landing/landing.page.html"),
            styles: [__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticateService"]])
    ], LandingPage);
    return LandingPage;
}());



/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map