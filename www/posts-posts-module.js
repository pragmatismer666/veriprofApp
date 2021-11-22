(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/posts/posts.page.ts");







var routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]
    }
];
var PostsPageModule = /** @class */ (function () {
    function PostsPageModule() {
    }
    PostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]]
        })
    ], PostsPageModule);
    return PostsPageModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.page.html":
/*!***************************************!*\
  !*** ./src/app/posts/posts.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title>More Information</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-card-content>\n    <ion-item-sliding id=\"item100\">\n      <ion-item>\n        <ion-label>\n          <h1>Service Contact</h1>\n        </ion-label>\n        <ion-note slot=\"end\">\n          24/7 available\n        </ion-note>\n      </ion-item>\n      <ion-item>\n        <ion-label>Company Title:</ion-label>\n        <ion-label>{{title}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Contact Email:</ion-label>\n        <ion-label>{{email}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Phone Number:</ion-label>\n        <ion-label>{{phone}} </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Address:</ion-label>\n        <ion-label>{{address}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Latest News:</ion-label>\n        <ion-label>{{Alarm}}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-card-content>\n  <!-- <ion-card-content>\n    <ion-item>\n      <ion-label>\n        <h1>Professional Members</h1>\n        <table class=\"table\" style=\"margin-top:10px\">\n          <tr>\n            <th>Name</th>\n            <th>Consultant</th>\n            <th>Account</th>\n            <th>Since</th>\n          </tr>\n          <tr *ngFor=\"let x of objs\">\n            <td>{{x.name}}</td>\n            <td>{{x.lead_consultant}}</td>\n            <td>{{x.Account}} Account</td>\n            <td>{{x.created_by.split(' ')[0]}}</td>\n          </tr>\n        </tbody>\n      </table>\n      </ion-label>\n    </ion-item>\n  </ion-card-content> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/posts/posts.page.scss":
/*!***************************************!*\
  !*** ./src/app/posts/posts.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#item100 ion-label {\n  white-space: normal; }\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFKbEI7SUFNUSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUFUOUI7SUFhUSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUFJOUI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaXRlbTEwMCBpb24tbGFiZWx7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi50YWJsZXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIHRoe1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG4udmFsaWRhdGlvbi1lcnJvcnN7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/posts.page.ts":
/*!*************************************!*\
  !*** ./src/app/posts/posts.page.ts ***!
  \*************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var PostsPage = /** @class */ (function () {
    function PostsPage(restApi, authService, toastController) {
        this.restApi = restApi;
        this.authService = authService;
        this.toastController = toastController;
    }
    PostsPage.prototype.ngOnInit = function () {
        this.getDetails();
        this.getProfess();
    };
    PostsPage.prototype.getDetails = function () {
        var _this = this;
        this.restApi.post('professional/get-details', {}).subscribe(function (res) {
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
                    _this.toastController.create({
                        message: 'Something went wrong.',
                        duration: 2000
                    }).then(function (toast) { return toast.present(); });
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    PostsPage.prototype.toast = function (message) {
        this.toastController.create({
            message: message,
            duration: 2000
        }).then(function (toast) { return toast.present(); });
    };
    PostsPage.prototype.getProfess = function () {
        var _this = this;
        this.restApi.post('professional/get-profess', {}).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.objs = res.data;
                    console.log(_this.objs);
                }
                else {
                    _this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(function (toast) { return toast.present(); });
                }
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.page.html */ "./src/app/posts/posts.page.html"),
            styles: [__webpack_require__(/*! ./posts.page.scss */ "./src/app/posts/posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], PostsPage);
    return PostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=posts-posts-module.js.map