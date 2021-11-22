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







var routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
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

module.exports = "<ion-header color=\"dark\" style=\"height: 30%;border: none;\">\n    <ion-content color=\"dark\" >\n        <ion-img src=\"assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n        <h2 text-center color=\"light\">Welcome</h2>\n    </ion-content>\n</ion-header>\n\n<ion-content color=\"dark\" no-border>\n    <div [ngSwitch]=\"land_seg\" class=\"segPart\">\n        <ion-card *ngSwitchCase=\"'homep'\" >\n            <ion-item-sliding id=\"item100\" color=\"dark\">\n                <ion-item lines=\"none\" color=\"dark\">\n                    <ion-note slot=\"end\" style=\"color: rgb(255, 0, 0);\">24/7 available</ion-note>\n                </ion-item>\n                <ion-item lines=\"none\" color=\"dark\" style=\"margin-bottom: 10px;\">\n                  <ion-label><h1 text-center>Service Contact</h1></ion-label>\n                </ion-item>\n                <ion-item color=\"dark\">\n                  <ion-label>Company Title:</ion-label>\n                  <ion-label>{{title}}</ion-label>\n                </ion-item>\n                <ion-item color=\"dark\">\n                  <ion-label>Contact Email:</ion-label>\n                  <ion-label>{{email}}</ion-label>\n                </ion-item>\n                <ion-item color=\"dark\">\n                  <ion-label>Phone Number:</ion-label>\n                  <ion-label>{{phone}}</ion-label>\n                </ion-item>\n                <ion-item color=\"dark\">\n                  <ion-label>Address:</ion-label>\n                  <ion-label>{{address}}</ion-label>\n                </ion-item>\n                <ion-item color=\"dark\">\n                  <ion-label>Latest News:</ion-label>\n                  <ion-label>{{Alarm}}</ion-label>\n                </ion-item>\n              </ion-item-sliding>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'quickp'\">\n            <ion-card>\n                <ion-item color=\"dark\" style=\"margin-bottom: 10px;\">\n                    <ion-label  position=\"floating\" color=\"dark\" class=\"inner\">Key Word</ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"keyword\" color=\"dark\" class=\"inner\"></ion-input>\n                    <ion-button class=\"inner\" color=\"success\" slot=\"end\" style=\"margin:0px; margin-top: 16px;\" (click)=\"searchContent()\">Search</ion-button>\n                </ion-item>   \n                <ion-item color=\"dark\" lines=\"none\" style=\"font-size: 13px;\">\n                    <ng-container *ngIf=\"valArray != null\">\n                        <tr *ngFor=\"let eachVal of valArray\">\n                            <td data-th=\"\">{{eachVal.key}}</td>\n                            <td data-th=\"\">{{eachVal.val}}</td>\n                        </tr>\n                    </ng-container>\n                </ion-item>\n            </ion-card>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'newsp'\">\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'loginp'\">\n            <ion-card padding>\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"accessor()\" style=\"margin-top: 15%;\">\n                    <ion-icon slot=\"start\" name=\"Construct\"></ion-icon>\n                    As An Accessor\n                </ion-button>\n                <br>\n                <ion-button color=\"danger\" expand=\"block\" (click)=\"professional()\" style=\"margin-top: 25%;\">\n                    <ion-icon slot=\"start\" name=\"switch\"></ion-icon>\n                    As A Professional\n                </ion-button>\n            </ion-card>\n        </ion-card>\n    </div>\n</ion-content>\n<ion-footer>\n    <ion-segment [(ngModel)]=\"land_seg\" color=\"light\" class=\"landTabs\">\n        <ion-segment-button value=\"homep\">\n            <ion-label class=\"landtab\">Home</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"quickp\">\n            <ion-label class=\"landtab\">Quick Verify</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"newsp\">\n            <ion-label class=\"landtab\">News</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"loginp\">\n            <ion-label class=\"landtab\">Login</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerImage {\n  height: 55%;\n  width: 55%;\n  margin: auto;\n  margin-top: 4%;\n  margin-bottom: 0%; }\n\n.segPart {\n  margin-left: 5%;\n  margin-right: 5%; }\n\n.landTabs {\n  height: 100%;\n  background-color: #000;\n  --ion-color-base: #9b9595 !important; }\n\n.landTabs ion-label {\n  font-size: 12px;\n  color: wheat; }\n\n.landTabs ion-segment-button {\n  width: 25%; }\n\n#item100 {\n  width: 100%;\n  color: #000; }\n\n#item100 ion-label {\n  font-size: 14px;\n  white-space: normal;\n  color: #ff6464; }\n\nth {\n  width: 100%;\n  background: #8a8a8a;\n  color: #fff;\n  border: 1px solid #fff; }\n\ntd {\n  min-width: 120px;\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n  width: 50%; }\n\n.validation-errors {\n  color: #000; }\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7; }\n\na {\n  color: #810909; }\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center; }\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxsYW5kaW5nXFxsYW5kaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQWtCO0VBQ2xCLFVBQWtCO0VBQ2xCLFlBQW1CO0VBQ25CLGNBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNJLGVBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixvQ0FBaUIsRUFBQTs7QUFHckI7RUFDSSxlQUFlO0VBQ2YsWUFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxVQUFVLEVBQUE7O0FBSWQ7RUFDSSxXQUFXO0VBQ1gsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQStCLEVBQUE7O0FBR25DO0VBQ0ksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFnQjtFQUNoQixzQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQWU7RUFDZixXQUFnQjtFQUNoQixzQkFBMEI7RUFDMUIsVUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVcsRUFBQTs7QUFJZjtFQUNJLGVBQWU7RUFDZixjQUE2QixFQUFBOztBQUdqQztFQUNJLGNBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksZ0RBQWdEO0VBQ2hELGNBQStCO0VBQy9CLGtCQUFtQixFQUFBOztBQUd2QjtFQUNJLGVBQWdCO0VBQ2hCLGNBQThCO0VBQzlCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJJbWFnZSB7XG4gICAgaGVpZ2h0ICAgICAgIDogNTUlO1xuICAgIHdpZHRoICAgICAgICA6IDU1JTtcbiAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xuICAgIG1hcmdpbi10b3AgICA6IDQlO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xufVxuXG5cbi5zZWdQYXJ0IHtcbiAgICBtYXJnaW4tbGVmdCA6IDUlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi5sYW5kVGFicyB7XG4gICAgaGVpZ2h0ICAgICAgICAgIDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6ICM5Yjk1OTUgIWltcG9ydGFudDtcbn1cblxuLmxhbmRUYWJzIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yICAgIDogd2hlYXQ7XG59XG5cbi5sYW5kVGFicyBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIHdpZHRoOiAyNSU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuI2l0ZW0xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMDAwO1xufVxuXG4jaXRlbTEwMCBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZSAgOiAxNHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgY29sb3IgICAgICA6IHJnYigyNTUsIDEwMCwgMTAwKTtcbn1cblxudGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XG4gICAgY29sb3IgICAgIDogI2ZmZjtcbiAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcbn1cblxudGQge1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBwYWRkaW5nICAgOiA1cHg7XG4gICAgY29sb3IgICAgIDogIzAwMDtcbiAgICBib3JkZXIgICAgOiAxcHggc29saWQgI2ZmZjtcbiAgICB3aWR0aCAgICAgOiA1MCU7XG59XG5cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi8vICBxdWljayBpbm5lclxuLmlubmVyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG59XG5cbmEge1xuICAgIGNvbG9yOiByZ2IoMTI5LCA5LCA5KTtcbn1cblxuaDIge1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvciAgICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgIHRleHQtYWxpZ24gOiBjZW50ZXI7XG59XG5cbmxpbmsge1xuICAgIGZvbnQtc2l6ZSA6IDEzcHg7XG4gICAgY29sb3IgICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG4iXX0= */"

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






var LandingPage = /** @class */ (function () {
    function LandingPage(toastController, restApi, navCtrl, router, authService) {
        this.toastController = toastController;
        this.restApi = restApi;
        this.navCtrl = navCtrl;
        this.router = router;
        this.authService = authService;
        // home part
        this.land_seg = "homep";
        // Quick Verify
        this.exceptStrs = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
        this.keyArray = [];
        this.valArray = [];
    }
    LandingPage.prototype.ngOnInit = function () {
        this.getDetails();
    };
    LandingPage.prototype.professional = function () {
        this.router.navigateByUrl('auth/login/professional');
    };
    LandingPage.prototype.accessor = function () {
        this.router.navigateByUrl('auth/login/accessor');
    };
    LandingPage.prototype.logout = function () {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    };
    LandingPage.prototype.getDetails = function () {
        var _this = this;
        this.restApi.post('/get-details', {}).subscribe(function (res) {
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
            this.restApi.post('/search', { key: this.keyword.trim() })
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