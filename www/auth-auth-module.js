(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.page */ "./src/app/auth/login/login.page.ts");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.page */ "./src/app/auth/register/register.page.ts");
/* harmony import */ var _forget_forget_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./forget/forget.page */ "./src/app/auth/forget/forget.page.ts");










var routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"],
        children: [
            { path: 'login/:type', component: _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"] },
            { path: 'register/:type', component: _register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"] },
            { path: 'forget/:type', component: _forget_forget_page__WEBPACK_IMPORTED_MODULE_9__["ForgetPage"] },
        ]
    }
];
var AuthPageModule = /** @class */ (function () {
    function AuthPageModule() {
    }
    AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"], _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"], _forget_forget_page__WEBPACK_IMPORTED_MODULE_9__["ForgetPage"]]
        })
    ], AuthPageModule);
    return AuthPageModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.page.html":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-router-outlet></ion-router-outlet>"

/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthPage = /** @class */ (function () {
    function AuthPage() {
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.page.html */ "./src/app/auth/auth.page.html"),
            styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthPage);
    return AuthPage;
}());



/***/ }),

/***/ "./src/app/auth/forget/forget.page.html":
/*!**********************************************!*\
  !*** ./src/app/auth/forget/forget.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding color=\"dark\">\n    <ion-img src=\"assets/veriprof-logo.png\"></ion-img>\n    <br>\n    <h2 style=\"margin:0px;\">Forgot Password</h2>\n    <br>\n    <br>\n    <br>\n    <ion-item color=\"medium\">\n        <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Email</ion-label>\n        <ion-input name=\"email\" class=\"inner\" [(ngModel)]=\"user_email\"></ion-input>\n    </ion-item>\n    <ion-button class=\"submit-btn\" color=\"dark\" (click)='sendPass()'>Verify by Eamil </ion-button>\n    <br>\n    <p class=\"go-to-login\" style=\"margin-top:5px;\">Remember password?<a (click)=\"goLoginPage()\"\n            style=\"color:#DC143C;\">Try to Log In.</a></p>\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/auth/forget/forget.page.scss":
/*!**********************************************!*\
  !*** ./src/app/auth/forget/forget.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7; }\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7; }\n\na {\n  color: #810909; }\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center; }\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9mb3JnZXQvRzpcXGlvbmljXFxpb25pY19hcHBcXHZlcmlwcm9mLWFwcC9zcmNcXGFwcFxcYXV0aFxcZm9yZ2V0XFxmb3JnZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxnREFBZ0Q7RUFFaEQsY0FBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9mb3JnZXQvZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgIH1cbiAgICBcbiAgICAuaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDEyOSwgOSwgOSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/auth/forget/forget.page.ts":
/*!********************************************!*\
  !*** ./src/app/auth/forget/forget.page.ts ***!
  \********************************************/
/*! exports provided: ForgetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPage", function() { return ForgetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ForgetPage = /** @class */ (function () {
    function ForgetPage(toastController, navCtrl, restApi, router) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.restApi = restApi;
        this.router = router;
        this.user_email = '';
        this.currentUserType = 'public_user';
        this.UserTypes = {
            'public_user': {
                title: 'Member Area'
            },
            'accessor': {
                title: 'Accessor'
            },
            'professional': {
                title: 'Professional'
            }
        };
        this.currentUserType = this.router.url.split('/').pop();
    }
    ForgetPage.prototype.ngOnInit = function () {
    };
    ForgetPage.prototype.sendPass = function () {
        var _this = this;
        if (this.user_email.length == 0) {
            this.restApi.toast('Please fill your eamil into Email', 1200);
        }
        else {
            this.restApi.post('/forget', { email: this.user_email }).subscribe(function (res) {
                if (res && res.status) {
                    _this.restApi.toast(res.message, 1000);
                }
            }, function (error) {
                _this.restApi.toast('Something went wrong.', 1200);
            });
        }
    };
    ForgetPage.prototype.goLoginPage = function () {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    };
    ForgetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.page.html */ "./src/app/auth/forget/forget.page.html"),
            styles: [__webpack_require__(/*! ./forget.page.scss */ "./src/app/auth/forget/forget.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgetPage);
    return ForgetPage;
}());



/***/ }),

/***/ "./src/app/auth/login/login.page.html":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\" style=\"background: black;height: 40%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"assets/veriprof-logo.png\" style=\"margin-top: 10%;\"></ion-img>\n        <h2>{{UserTypes[currentUserType].title}}</h2>\n    </ion-content>\n</ion-header>\n\n<ion-content color=\"dark\" class=\"centerMargin\">\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\" color=\"dark\">\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"dark\" class=\"inner\">Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" color=\"dark\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\" color=\"dark\" class=\"inner\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\"\n                    color=\"dark\" class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"dark\" class=\"inner\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required color=\"dark\"\n                class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\" color=\"dark\" class=\"inner\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\" color=\"dark\" class=\"inner\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\"\n                    color=\"dark\" class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" color=\"dark\">Log In\n        </ion-button>\n        <label class=\"error-message\">{{errorMessage}}</label>\n    </form>\n    <ion-row class=\"centerMargin\" style=\"margin:5%\">\n        <a (click)=\"goToRegisterPage()\" color=\"danger\" style=\"color:#DC143C;width: 48%;\">\n            <p>Create an account</p>\n        </a>\n        <a (click)=\"goToForgetPage()\" color=\"danger\" style=\"color:#DC143C;width: 48%;\">\n            <p>Forgot Passowrd</p>\n        </a>\n    </ion-row>\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7; }\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7; }\n\na {\n  color: #810909; }\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center; }\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center; }\n\n.centerMargin {\n  --padding-start: 5% !important;\n  --padding-end: 5% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxnREFBZ0Q7RUFDaEQsY0FBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUcxQjtFQUNJLDhCQUFnQjtFQUNoQiw0QkFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbmZvbnQtc2l6ZTogMTFweDtcbmNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG59XG5cbi5pbm5lciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMTI5LCA5LCA5KTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgY29sb3I6IHJnYigxNjgsIDE2NywgMTY3KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIGxpbmsge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbi5jZW50ZXJNYXJnaW57XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA1JSAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDUlICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authService, formBuilder, router) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.currentUserType = 'public_user';
        this.UserTypes = {
            'public_user': {
                title: 'Member Area'
            },
            'accessor': {
                title: 'Accessor Area'
            },
            'professional': {
                title: 'Professional Area'
            }
        };
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
        this.currentUserType = this.router.url.split('/').pop();
    }
    LoginPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            role: this.currentUserType
        });
    };
    LoginPage.prototype.loginUser = function (value) {
        var _this = this;
        this.authService.loginUser(value)
            .then(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    res.data['email'] = value.email;
                    _this.authService.setUser(res.data);
                    _this.errorMessage = "";
                    _this.navCtrl.navigateForward('/home');
                }
                else {
                    _this.errorMessage = res.message;
                }
            }
        }, function (err) {
            console.log(err);
            _this.errorMessage = "Something went wrong";
        });
    };
    LoginPage.prototype.goToRegisterPage = function () {
        this.navCtrl.navigateForward('auth/register/' + this.currentUserType);
    };
    LoginPage.prototype.goToForgetPage = function () {
        this.navCtrl.navigateForward('auth/forget/' + this.currentUserType);
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/auth/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/auth/register/register.page.html":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header color=\"dark\">\n</ion-header>\n\n<ion-content padding color=\"dark\">\n    <ion-img src=\"assets/veriprof-logo.png\"></ion-img>\n    <br>\n    <h2 style=\"margin-top: 10px;\">New {{UserTypes[currentUserType].title}}</h2>\n    <br>\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\">\n        <ion-item color=\"medium\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"full_name\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.full_name\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('full_name').hasError(validation.type) && (validations_form.get('full_name').dirty || validations_form.get('full_name').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"medium\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Phone Number</ion-label>\n            <ion-input type=\"text\" formControlName=\"mobile\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.mobile\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('mobile').hasError(validation.type) && (validations_form.get('mobile').dirty || validations_form.get('mobile').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"medium\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"medium\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required color=\"medium\"\n                class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" color=\"dark\">Create Account\n        </ion-button>\n        <br>\n        <p></p>\n        <label class=\"error-message\" color=\"danger\">{{errorMessage}}</label>\n        <label class=\"success-message\" color=\"danger\">{{successMessage}}</label>\n    </form>\n    <p class=\"go-to-login\" style=\"margin-top:5px;\">Already have an account? <a (click)=\"goLoginPage()\"\n            style=\"color:#DC143C;\">Try to Log In.</a></p>\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/auth/register/register.page.scss":
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7; }\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7; }\n\na {\n  color: #810909; }\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center; }\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3Rlci9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxhdXRoXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBR3pCO0VBQ0ksY0FBcUIsRUFBQTs7QUFHekI7RUFDSSxnREFBZ0Q7RUFDaEQsY0FBeUI7RUFDekIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6IHJnYigxNjgsIDE2NywgMTY3KTtcbiAgICB9XG4gICAgXG4gICAgLmlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHJnYigxMjksIDksIDkpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9Il19 */"

/***/ }),

/***/ "./src/app/auth/register/register.page.ts":
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(toastController, navCtrl, restApi, authService, formBuilder, router) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.successMessage = '';
        this.prof = false;
        this.currentUserType = 'public_user';
        this.UserTypes = {
            'public_user': {
                title: 'Member Area'
            },
            'accessor': {
                title: 'Accessor Area'
            },
            'professional': {
                title: 'Professional Area'
            }
        };
        this.validation_messages = {
            'full_name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'mobile': [
                { type: 'required', message: 'Phone Number is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' }
            ]
        };
        this.currentUserType = this.router.url.split('/').pop();
        console.log(this.currentUserType);
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            role: this.currentUserType,
            prof: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    RegisterPage.prototype.tryRegister = function (value) {
        var _this = this;
        if (value.full_name.length < 5) {
            this.restApi.toast('Name must be longer than 5 letters', 1200);
        }
        else if (value.mobile.length < 10) {
            this.restApi.toast('Mobile Number must be longer than 10 letters', 1200);
        }
        else if (value.password.length < 5) {
            this.restApi.toast('Password must be longer than 5 letters', 1200);
        }
        else {
            this.authService.registerUser(value)
                .then(function (res) {
                if (res && res.status) {
                    if (res.status == 'success') {
                        _this.errorMessage = "";
                        _this.successMessage = res.message;
                        _this.restApi.toast(res.message, 1200);
                        _this.router.navigateByUrl('auth/login/' + _this.currentUserType);
                    }
                    else {
                        _this.errorMessage = res.message;
                        _this.successMessage = "";
                    }
                }
            }, function (err) {
                console.log(err);
                _this.errorMessage = "Something went wrong";
                _this.successMessage = "";
            });
        }
    };
    RegisterPage.prototype.goLoginPage = function () {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/auth/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/auth/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_5__["RestApiService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map