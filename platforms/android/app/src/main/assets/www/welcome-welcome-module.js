(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["welcome-welcome-module"],{

/***/ "./src/app/welcome/welcome.module.ts":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.module.ts ***!
  \*******************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/welcome/welcome.page.ts");







var routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]
    }
];
var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.page.html":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>Welcome</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides pager=\"true\" [options]=\"slideOptsOne\">\n        <ion-slide>\n            <div class=\"slide\">\n                <img src=\"../../assets/veriprof-logo.png\" />\n                <h2>Welcome</h2>\n                <p>\n                    VeriProf is a platform designed to protect\n                    the interests of the public and Professionals \n                    within the built environment sector.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"../../assets/veriprof-logo.png\" />\n            <h2>Redefining transparency</h2>\n            <p>\n                As a professional in the built environment\n                VeriProf will provide an independently managed \n                electronic platform available at the tip of \n                your figure tips.\n            </p>\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"../../assets/veriprof-logo.png\" />\n            <h2>A new way of protecting your Interest</h2>\n            <p> As the client, knowing with whom you are engaged \n                in business with has never been more important. \n                VeriProf will give you, the client, confirmation\n                as to whom you deal with.</p>\n        </ion-slide>\n\n        <ion-slide>\n            <img src=\"../../assets/veriprof-logo.png\" />\n            <h2>Ready?</h2>\n            <p>want to find out how VeriProf can serve you better?</p>\n            <ion-button color=\"danger\" expand=\"block\" routerLink=\"/landing\" style=\"margin-left: 15%;margin-right: 15%;\">\n                Let's go <ion-icon slot=\"end\" name=\"arrow-forward\">\n                </ion-icon>\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 100%;\n  background-color: black;\n  color: blanchedalmond; }\n\n.swiper-slide {\n  display: block; }\n\n.swiper-slide img {\n  margin: 60px 0 40px;\n  pointer-events: none; }\n\np {\n  padding: 0 35px;\n  font-size: 16px;\n  line-height: 1.6;\n  color: blanchedalmond; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBYyxFQUFBOztBQU9sQjtFQUdJLG1CQUEyQjtFQUMzQixvQkFBb0IsRUFBQTs7QUFHeEI7RUFDSSxlQUFtQjtFQUNuQixlQUFpQjtFQUNqQixnQkFBZ0I7RUFFaEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlcyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBoMiB7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyLjhyZW07XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIC8vIG1heC1oZWlnaHQgICAgOiA2MCU7XHJcbiAgICAvLyBtYXgtd2lkdGggICAgIDogNjAlO1xyXG4gICAgbWFyZ2luICAgICAgICA6IDYwcHggMCA0MHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgcGFkZGluZyAgICA6IDAgMzVweDtcclxuICAgIGZvbnQtc2l6ZSAgOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIC8vIGNvbG9yICAgICAgOiB2YXIoLS1pb24tY29sb3Itc3RlcC02MDAsICM2MDY0NmIpO1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomePage = /** @class */ (function () {
    function WelcomePage() {
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    WelcomePage.prototype.ngOnInit = function () {
    };
    WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.page.html */ "./src/app/welcome/welcome.page.html"),
            styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomePage);
    return WelcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=welcome-welcome-module.js.map