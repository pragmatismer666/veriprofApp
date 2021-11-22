(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-network-module"],{

/***/ "./src/app/home/professional/network/network.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/network/network.module.ts ***!
  \*************************************************************/
/*! exports provided: NetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.page */ "./src/app/home/professional/network/network.page.ts");







var routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]
    }
];
var NetworkPageModule = /** @class */ (function () {
    function NetworkPageModule() {
    }
    NetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]]
        })
    ], NetworkPageModule);
    return NetworkPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/network/network.page.html":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/network/network.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>Builder Network</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar animated></ion-searchbar>\n    <br>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n      <ion-segment-button value=\"paper\" class=\"dark\" enabled><ion-icon name=\"paper\" color=\"dark\"></ion-icon>\n        <ion-label class=\"dark\" color=\"dark\">Feeds</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"snow\"><ion-icon name=\"snow\" color=\"dark\"></ion-icon>\n        <ion-label class=\"dark\" color=\"dark\">Groups</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"notifications-outline\"><ion-icon name=\"notifications-outline\" color=\"dark\"></ion-icon>\n          <ion-label class=\"dark\" color=\"dark\">Inbox</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <br>\n\n  <div [ngSwitch]=\"segment\">\n    <ion-card *ngSwitchCase=\"'paper'\">\n        <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/ava-1.png\">\n            </ion-avatar>\n            <ion-label>\n              <h3>Mdigwa Nyathi</h3>\n              <form onsubmit=\"processForm(event)\">\n              \n                    <ion-item>\n                      <ion-label position=\"stacked\"></ion-label>\n                      <ion-textarea row=\"3\" placeholder=\"Share something...\">\n                      \n                      </ion-textarea>\n                    </ion-item>\n             \n          \n                  <div class=\"ion-padding\">\n                    <ion-button type=\"submit\" class=\"ion-no-margin\" color=\"dark\">Share Post</ion-button>\n                  </div>\n                </form>\n\n\n\n            </ion-label>\n          </ion-item>\n        </ion-card>\n\n     \n\n    <ion-card *ngSwitchCase=\"'paper'\">\n             <ion-chip>\n              <ion-avatar>\n                <img src=\"assets/ava-1.png\">\n              </ion-avatar>\n              <ion-label>Mdigwa Nyathi</ion-label>\n            </ion-chip>\n            <br>\n        <img src=\"assets/mcd.jpg\" />\n         \n          <ion-card-content>\n           we are building something amazing with the verifprof app project... and its looking real every seconds\n          </ion-card-content>\n          <ion-segment color=\"light\">\n              <ion-segment-button value=\"like\" class=\"dark\"><ion-icon name=\"heart-empty\" color=\"dark\"></ion-icon>\n                <ion-label class=\"dark\" color=\"dark\">6750</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"comment\"><ion-icon name=\"chatboxes\" color=\"dark\"></ion-icon>>\n                <ion-label class=\"dark\" color=\"dark\">1230</ion-label>\n              </ion-segment-button>\n              <ion-segment-button value=\"share\"><ion-icon name=\"share\" color=\"dark\"></ion-icon>>\n                  <ion-label class=\"dark\" color=\"dark\">28 shares</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n            <br>\n        </ion-card>\n        \n  <ion-card *ngSwitchCase=\"'paper'\">\n      <ion-chip>\n          <ion-avatar>\n            <img src=\"assets/icon-4.png\">\n          </ion-avatar>\n          <ion-label>Akachukwu Mbezi</ion-label>\n        </ion-chip>\n        <br>\n    <img src=\"assets/qs-job.jpg\" />\n     \n      <ion-card-content>\n     \n       Looking for a qualified QS? then look no further, just PM me and we can take it up from there... cheers\n      </ion-card-content>\n    \n      <ion-segment color=\"light\">\n        <ion-segment-button value=\"like\" class=\"dark\"><ion-icon name=\"heart-empty\" color=\"dark\"></ion-icon>>\n          <ion-label class=\"dark\" color=\"dark\">6750</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"comment\"><ion-icon name=\"chatboxes\" color=\"dark\"></ion-icon>>\n          <ion-label class=\"dark\" color=\"dark\">1230</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"share\"><ion-icon name=\"share\" color=\"dark\"></ion-icon>>\n            <ion-label class=\"dark\" color=\"dark\">28 shares</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n  </ion-card>\n\n\n    <ion-card *ngSwitchCase=\"'snow'\">\n\n      <ion-card-content>\n            \n           My Networks\n                 \n          </ion-card-content>\n        </ion-card>\n\n\n\n    <ion-card *ngSwitchCase=\"'notifications-outline'\">\n\n      <ion-card-content>\n            \n           Messages\n                 \n          </ion-card-content>\n        </ion-card>\n\n\n      </div>\n\n      <br>\n\n   \n</ion-content>\n\n\n\n<script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n      event.preventDefault();\n      controller.create({\n        header: 'Account Created',\n        message: `Created account for: <b>${firstName} ${lastName}</b>`,\n        buttons: [{\n          text: 'OK'\n        }]\n      }).then(alert => alert.present());\n    }\n    function handleFirstNameValue(event) {\n      firstName = event.target.value;\n    }\n    function handleLastNameValue(event) {\n      lastName = event.target.value;\n    }\n  </script>"

/***/ }),

/***/ "./src/app/home/professional/network/network.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/network/network.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-50, .col-33 {\n  display: flex; }\n\n.card {\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.item-avatar, .item.tabs {\n  flex: 0 0 auto; }\n\n.item-body {\n  flex: 1 1 auto; }\n\n.footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvbmV0d29yay9GOlxcMjAyMFxcMDhcXGlvbmljX2FwcFxcVmVyaXByb2ZfbWFpblxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxwcm9mZXNzaW9uYWxcXG5ldHdvcmtcXG5ldHdvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUksYUFBYSxFQUFBOztBQUVmO0VBQ0UsV0FBVTtFQUlWLGFBQWE7RUFLTCxzQkFBc0IsRUFBQTs7QUFFaEM7RUFJVSxjQUFjLEVBQUE7O0FBRXhCO0VBSVUsY0FBYyxFQUFBOztBQUl4QjtFQUNFLGVBQWU7RUFDZixjQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvbmV0d29yay9uZXR3b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtNTAsIC5jb2wtMzMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5jYXJkIHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLml0ZW0tYXZhdGFyLCAuaXRlbS50YWJzIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogMCAwIGF1dG87XG4gICAgICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG4gIC5pdGVtLWJvZHkge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuXG4gIC5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiKDEwOSwgMTA5LCAxMDkpO1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/professional/network/network.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/network/network.page.ts ***!
  \***********************************************************/
/*! exports provided: NetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPage", function() { return NetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NetworkPage = /** @class */ (function () {
    function NetworkPage() {
        this.segment = "paper";
        this.name = "any";
        this.loadData = "any";
    }
    NetworkPage.prototype.ngOnInit = function () {
    };
    NetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! ./network.page.html */ "./src/app/home/professional/network/network.page.html"),
            styles: [__webpack_require__(/*! ./network.page.scss */ "./src/app/home/professional/network/network.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NetworkPage);
    return NetworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=network-network-module.js.map