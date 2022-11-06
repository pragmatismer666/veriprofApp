"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page */ 3561);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.page */ 1506);
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.page */ 1351);
/* harmony import */ var _forget_forget_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forget/forget.page */ 8200);










const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage,
        children: [
            { path: 'login/:type', component: _login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage },
            { path: 'register/:type', component: _register_register_page__WEBPACK_IMPORTED_MODULE_2__.RegisterPage },
            { path: 'forget/:type', component: _forget_forget_page__WEBPACK_IMPORTED_MODULE_3__.ForgetPage },
        ]
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_0__.AuthPage, _login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage, _register_register_page__WEBPACK_IMPORTED_MODULE_2__.RegisterPage, _forget_forget_page__WEBPACK_IMPORTED_MODULE_3__.ForgetPage]
    })
], AuthPageModule);



/***/ }),

/***/ 3561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.page.html?ngResource */ 2708);
/* harmony import */ var _auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss?ngResource */ 1824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AuthPage = class AuthPage {
    constructor() { }
    ngOnInit() {
    }
};
AuthPage.ctorParameters = () => [];
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-auth',
        template: _auth_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_auth_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AuthPage);



/***/ }),

/***/ 8200:
/*!********************************************!*\
  !*** ./src/app/auth/forget/forget.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPage": () => (/* binding */ ForgetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forget_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget.page.html?ngResource */ 5888);
/* harmony import */ var _forget_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget.page.scss?ngResource */ 2763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








let ForgetPage = class ForgetPage {
    constructor(toastController, navCtrl, restApi, router) {
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
            'assessor': {
                title: 'Assessor Area'
            },
            'professional': {
                title: 'Professional Area'
            }
        };
        this.currentUserType = this.router.url.split('/').pop();
    }
    ngOnInit() {
    }
    sendPass() {
        if (this.user_email.length == 0) {
            this.restApi.toast('Please fill your eamil into Email', 1200);
        }
        else {
            this.restApi.post('/forget', { email: this.user_email }).subscribe((res) => {
                if (res && res.status) {
                    this.restApi.toast(res.message, 1000);
                }
            }, error => {
                this.restApi.toast('Something went wrong.', 1200);
            });
        }
    }
    goLoginPage() {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    }
};
ForgetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ForgetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forget',
        template: _forget_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forget_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgetPage);



/***/ }),

/***/ 1506:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 5286);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 9633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);








let LoginPage = class LoginPage {
    constructor(navCtrl, authService, formBuilder, router) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = "";
        this.currentUserType = "assessor";
        this.UserTypes = {
            "assessor": {
                title: "Assessor Area"
            },
            "professional": {
                title: "Professional Area"
            }
        };
        this.validation_messages = {
            "email": [
                { type: "required", message: "Email is required." },
                { type: "pattern", message: "Please enter a valid email - remove last space." }
            ],
            "password": [
                { type: "required", message: "Password is required." },
                { type: "minlength", message: "Password must be at least 5 characters long." }
            ]
        };
        this.currentUserType = this.router.url.split("/").pop();
    }
    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            ])),
            role: this.currentUserType
        });
    }
    loginUser(value) {
        // console.log("login page loginUser value : ", value);
        this.authService.loginUser(value)
            .then(res => {
            // console.log("login page loginUser res : ", JSON.stringify(res));
            if (res && res.status) {
                if (res.status == "success") {
                    this.authService.setUser(res.data);
                    this.authService.setToken(res.token);
                    this.errorMessage = "";
                    this.navCtrl.navigateForward("/home");
                }
                else {
                    this.errorMessage = res.message;
                }
            }
        }, err => {
            console.log("login page loginUser err : ", err);
            this.errorMessage = JSON.stringify(err);
        });
    }
    goToRegisterPage() {
        this.navCtrl.navigateForward("auth/register/" + this.currentUserType);
    }
    goToForgetPage() {
        this.navCtrl.navigateForward("auth/forget/" + this.currentUserType);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-login",
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 1351:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 4089);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 9105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);









let RegisterPage = class RegisterPage {
    constructor(toastController, navCtrl, restApi, authService, formBuilder, router) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.successMessage = '';
        this.prof = false;
        this.currentUserType = 'professional';
        this.UserTypes = {
            'assessor': {
                title: 'Assessor Area'
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
    }
    ngOnInit() {
        console.log(this.currentUserType, "+++++");
        this.validations_form = this.formBuilder.group({
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required
            ])),
            role: this.currentUserType,
            prof: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl()
        });
    }
    tryRegister(value) {
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
                .then(res => {
                if (res && res.status) {
                    if (res.status == 'success') {
                        this.errorMessage = "";
                        this.successMessage = res.message;
                        this.restApi.toast(res.message, 1200);
                        this.router.navigateByUrl('auth/login/' + this.currentUserType);
                    }
                    else {
                        this.restApi.toast(res.message, 1200);
                        this.errorMessage = res.message;
                        this.successMessage = "";
                    }
                }
            }, err => {
                console.log(err);
                this.errorMessage = "Something went wrong";
                this.successMessage = "";
            });
        }
    }
    goLoginPage() {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__.RestApiService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 1824:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2763:
/*!*********************************************************!*\
  !*** ./src/app/auth/forget/forget.page.scss?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7;\n}\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7;\n}\n\na {\n  color: #810909;\n}\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center;\n}\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDUjs7QUFFUTtFQUNJLGNBQUE7QUFDWjs7QUFFUTtFQUNJLGdEQUFBO0VBRUEsY0FBQTtFQUNBLGtCQUFBO0FBQVo7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQVoiLCJmaWxlIjoiZm9yZ2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgIH1cbiAgICBcbiAgICAuaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDEyOSwgOSwgOSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgLy8gZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGluayB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogcmdiKDE2OCwgMTY3LCAxNjcpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9Il19 */";

/***/ }),

/***/ 9633:
/*!*******************************************************!*\
  !*** ./src/app/auth/login/login.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".centerMargin_2 {\n  --padding-start: 10% !important;\n  --padding-end: 10% !important;\n}\n\n.footer {\n  font-size: 11px;\n  color: #a8a7a7;\n}\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7;\n}\n\na {\n  color: #810909;\n}\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center;\n}\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyTWFyZ2luXzIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTAlICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWVuZCAgOiAxMCUgIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xufVxuXG4uaW5uZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvciAgICA6IHJnYigxNjgsIDE2NywgMTY3KTtcbn1cblxuYSB7XG4gICAgY29sb3I6IHJnYigxMjksIDksIDkpO1xufVxuXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yICAgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbn1cblxubGluayB7XG4gICAgZm9udC1zaXplIDogMTNweDtcbiAgICBjb2xvciAgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";

/***/ }),

/***/ 9105:
/*!*************************************************************!*\
  !*** ./src/app/auth/register/register.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".footer {\n  font-size: 11px;\n  color: #a8a7a7;\n}\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7;\n}\n\na {\n  color: #810909;\n}\n\nh2 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center;\n}\n\nlink {\n  font-size: 13px;\n  color: #a8a7a7;\n  text-align: center;\n}\n\n.centerMargin {\n  --padding-start: 5% !important;\n  --padding-end: 5% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsNEJBQUE7QUFDSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG59XG5cbi5pbm5lciB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yICAgIDogcmdiKDE2OCwgMTY3LCAxNjcpO1xufVxuXG5hIHtcbiAgICBjb2xvcjogcmdiKDEyOSwgOSwgOSk7XG59XG5cbmgyIHtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gICAgY29sb3IgICAgICA6IHJnYigxNjgsIDE2NywgMTY3KTtcbiAgICB0ZXh0LWFsaWduIDogY2VudGVyO1xufVxuXG5saW5rIHtcbiAgICBmb250LXNpemUgOiAxM3B4O1xuICAgIGNvbG9yICAgICA6IHJnYigxNjgsIDE2NywgMTY3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJNYXJnaW4ge1xuICAgIC0tcGFkZGluZy1zdGFydDogNSUgIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctZW5kICA6IDUlICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 2708:
/*!************************************************!*\
  !*** ./src/app/auth/auth.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-router-outlet></ion-router-outlet>";

/***/ }),

/***/ 5888:
/*!*********************************************************!*\
  !*** ./src/app/auth/forget/forget.page.html?ngResource ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"dark\" style=\"height: 40%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../../assets/veriprof-logo.png\" class=\"mt-4\"></ion-img>\n        <h2>Forgot Password</h2>\n    </ion-content>\n</ion-header>\n\n<ion-content class=\"centerMargin\" color=\"dark\" style=\"margin:5%\">\n    <ion-card color=\"dark\">\n        <ion-item color=\"medium\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Email</ion-label>\n            <ion-input name=\"email\" class=\"inner\" [(ngModel)]=\"user_email\"></ion-input>\n        </ion-item>\n        <ion-button class=\"submit-btn\" color=\"dark\" (click)='sendPass()'>Verify by Eamil </ion-button>\n        <p class=\"go-to-login\" class=\"mt-3\">Remember password?<a (click)=\"goLoginPage()\" style=\"color:#DC143C;\">Try to Log In.</a></p>\n    </ion-card>\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 5286:
/*!*******************************************************!*\
  !*** ./src/app/auth/login/login.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"dark\" style=\"height: 40%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../../assets/veriprof-logo.png\" class=\"mt-4\"></ion-img>\n        <h2>{{UserTypes[currentUserType].title}}</h2>\n    </ion-content>\n</ion-header>\n\n<ion-content color=\"dark\" class=\"centerMargin_2\">\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"loginUser(validations_form.value)\" color=\"dark\">\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"dark\" class=\"inner\">Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" color=\"dark\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\" color=\"dark\" class=\"inner\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\"\n                    color=\"dark\" class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"dark\" class=\"inner\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required color=\"dark\"\n                class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\" color=\"dark\" class=\"inner\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\" color=\"dark\" class=\"inner\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\"\n                    color=\"dark\" class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" color=\"dark\">Log In\n        </ion-button>\n        <label class=\"error-message\">{{errorMessage}}</label>\n    </form>\n    <ion-row class=\"centerMargin mt-3\">\n        <ng-container *ngIf=\"currentUserType == 'professional'\">\n            <a (click)=\"goToRegisterPage()\" color=\"danger\" style=\"color:#DC143C;width: 48%;\">\n                <p>Create an account</p>\n            </a>\n        </ng-container>\n        <a (click)=\"goToForgetPage()\" color=\"danger\" style=\"color:#DC143C;width: 48%;margin-left: 3%;\">\n            <p>Forgot Passowrd</p>\n        </a>\n        <ng-container *ngIf=\"currentUserType == 'assessor'\">\n            <p>Create an account by only the Admin</p>\n        </ng-container>\n    </ion-row>\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ }),

/***/ 4089:
/*!*************************************************************!*\
  !*** ./src/app/auth/register/register.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"dark\" style=\"height: 35%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../../assets/veriprof-logo.png\" style=\"margin-top: 10%;\"></ion-img>\n        <h2>New {{UserTypes[currentUserType].title}}</h2>\n    </ion-content>\n</ion-header>\n\n<ion-content padding color=\"dark\" class=\"centerMargin\">\n    <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryRegister(validations_form.value)\"\n        style=\"margin-left: 5%; margin-right: 5%;\">\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Name</ion-label>\n            <ion-input type=\"text\" formControlName=\"full_name\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.full_name\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('full_name').hasError(validation.type) && (validations_form.get('full_name').dirty || validations_form.get('full_name').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Phone Number</ion-label>\n            <ion-input type=\"text\" formControlName=\"mobile\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.mobile\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('mobile').hasError(validation.type) && (validations_form.get('mobile').dirty || validations_form.get('mobile').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Email</ion-label>\n            <ion-input type=\"text\" formControlName=\"email\" color=\"medium\" class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.email\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ion-item color=\"dark\">\n            <ion-label position=\"floating\" color=\"medium\" class=\"inner\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required color=\"medium\"\n                class=\"inner\"></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n            <ng-container *ngFor=\"let validation of validation_messages.password\">\n                <div class=\"error-message\"\n                    *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\"\n                    class=\"inner\">\n                    {{ validation.message }}\n                </div>\n            </ng-container>\n        </div>\n        <ng-container *ngIf=\"currentUserType == 'professional'\">\n            <ion-button class=\"submit-btn\" type=\"submit\" [disabled]=\"!validations_form.valid\" color=\"dark\">Create\n                Account\n            </ion-button>\n        </ng-container>\n        <label class=\"error-message\" color=\"danger\">{{errorMessage}}</label>\n        <label class=\"success-message\" color=\"danger\">{{successMessage}}</label>\n    </form>\n    <ion-row class=\"centerMargin\" style=\"margin:5%\">\n        <p>Already have an account?<a (click)=\"goLoginPage()\" style=\"color:#DC143C;\">Try to Log In.</a></p>\n    </ion-row>\n</ion-content>\n\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"dark\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map