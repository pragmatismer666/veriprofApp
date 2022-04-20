(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
        children: [
            { path: 'professional', loadChildren: './professional/professional.module#ProfessionalPageModule' },
            { path: 'assessor', loadChildren: './assessor/assessor.module#AssessorPageModule' },
        ]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu contentId=\"content\" side=\"start\">\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <ion-title>VeriProf - Quick Menu</ion-title>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-menu-toggle>\r\n                <ion-item (click)=\"goHome()\">Dashboard</ion-item>\r\n                <!-- //<ion-item (click)=\"goContact()\">Contact</ion-item> -->\r\n                <ion-item (click)=\"logout()\">Log Out</ion-item>\r\n            </ion-menu-toggle>\r\n        </ion-list>\r\n    </ion-content>\r\n    <ion-footer color=\"dark\" class=\"footer\">\r\n        <ion-toolbar color=\"\">\r\n            <div class=\"footer\" text-align=\"center\">Copyright SIVAGO </div>\r\n        </ion-toolbar>\r\n    </ion-footer>\r\n</ion-menu>\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var HomePage = /** @class */ (function () {
    function HomePage(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        this.checkRoleAndNavigate();
        console.log(this.authService.user.role, "this.authService.user");
    };
    HomePage.prototype.getSlug = function () {
        if (this.authService.user.role == 'Professional') {
            return 'professional';
        }
        else if (this.authService.user.role == "Assessor") {
            return 'assessor';
        }
    };
    HomePage.prototype.checkRoleAndNavigate = function () {
        if (this.authService.user.role == 'Professional') {
            this.navCtrl.navigateForward('home/professional');
        }
        else if (this.authService.user.role == "Assessor") {
            this.navCtrl.navigateForward('home/assessor');
        }
    };
    HomePage.prototype.goHome = function () {
        this.navCtrl.navigateRoot('home/' + this.getSlug());
    };
    HomePage.prototype.goMyProject = function () {
        this.navCtrl.navigateRoot('home/' + this.getSlug() + '/project');
    };
    // goContact() {
    //     this.navCtrl.navigateRoot('/posts');
    // }
    HomePage.prototype.logout = function () {
        localStorage.clear();
        this.navCtrl.navigateRoot('/landing');
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map