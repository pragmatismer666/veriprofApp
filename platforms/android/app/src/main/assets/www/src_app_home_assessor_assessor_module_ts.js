"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_assessor_module_ts"],{

/***/ 8950:
/*!**************************************************!*\
  !*** ./src/app/home/assessor/assessor.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessorPageModule": () => (/* binding */ AssessorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _assessor_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessor.page */ 6846);







// import { File } from "@ionic-native/file/ngx";
// import { Camera } from "@ionic-native/camera/ngx"
// import { Base64 } from "@ionic-native/base64/ngx";
const routes = [
    { path: "", component: _assessor_page__WEBPACK_IMPORTED_MODULE_0__.AssessorPage },
    { path: "unverifiedbiz", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_unverifiedbiz_unverifiedbiz_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./unverifiedbiz/unverifiedbiz.module */ 8834)).then(m => m.UnverifiedbizPageModule) },
    { path: "unverifiedoffice", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_unverifiedoffice_unverifiedoffice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./unverifiedoffice/unverifiedoffice.module */ 7187)).then(m => m.UnverifiedofficePageModule) },
    { path: "unverifiedproject", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_unverifiedproject_unverifiedproject_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./unverifiedproject/unverifiedproject.module */ 5621)).then(m => m.UnverifiedprojectPageModule) },
    { path: "unverifiedprof", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_unverifiedprof_unverifiedprof_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./unverifiedprof/unverifiedprof.module */ 7000)).then(m => m.UnverifiedprofPageModule) },
    { path: "schedules", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_schedules_schedules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./schedules/schedules.module */ 5333)).then(m => m.SchedulesPageModule) },
    { path: "accessorsreport", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_accessorsreport_accessorsreport_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./accessorsreport/accessorsreport.module */ 8662)).then(m => m.AccessorsreportPageModule) },
    { path: "reportsubmission", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_reportsubmission_reportsubmission_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reportsubmission/reportsubmission.module */ 9793)).then(m => m.ReportsubmissionPageModule) },
    { path: "reportgenerator", loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_assessor_reportgenerator_reportgenerator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reportgenerator/reportgenerator.module */ 3379)).then(m => m.ReportgeneratorPageModule) }
];
let AssessorPageModule = class AssessorPageModule {
};
AssessorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        providers: [
        // Camera,
        // File,
        // Base64,
        ],
        declarations: [_assessor_page__WEBPACK_IMPORTED_MODULE_0__.AssessorPage]
    })
], AssessorPageModule);



/***/ }),

/***/ 6846:
/*!************************************************!*\
  !*** ./src/app/home/assessor/assessor.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssessorPage": () => (/* binding */ AssessorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _assessor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assessor.page.html?ngResource */ 9304);
/* harmony import */ var _assessor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assessor.page.scss?ngResource */ 4964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);











// import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Base64 } from "@ionic-native/base64/ngx";
let AssessorPage = class AssessorPage {
    // avatur ----------------------------------
    constructor(
    // public http: HttpClient,
    toastController, navCtrl, router, restApi, authService, formBuilder, actionSheetController, 
    // private camera: Camera,
    loading, alertCtrl) {
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.commonUrl = "http://back.veriprof.co.za";
        this.image = "assets/icon-66.png";
        this.officeNum = "0";
        this.profileNum = "0";
        this.projectNum = "0";
        this.croppedImagepath = "";
        this.isLoading = false;
        this.imagePickerOptions = {
            maximumImagesCount: 1,
            quality: 50
        };
        this.name = this.formBuilder.group({
            updateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
            ])),
        });
    }
    ngOnInit() {
        if (this.authService.user.picpath != this.image) {
            this.image = this.commonUrl + this.authService.user.picpath;
        }
        this.userEmail = this.authService.user.name;
        this.getBiz();
    }
    unverifiedbiz() {
        this.router.navigateByUrl("home/assessor/unverifiedbiz");
    }
    unverifiedprof() {
        this.router.navigateByUrl("home/assessor/unverifiedprof");
    }
    schedules() {
        this.router.navigateByUrl("home/assessor/schedules");
    }
    accessorsreport() {
        this.router.navigateByUrl("home/assessor/accessorsreport");
    }
    unverifiedproject() {
        this.router.navigateByUrl("home/assessor/unverifiedproject");
    }
    unverifiedoffice() {
        this.router.navigateByUrl("home/assessor/unverifiedoffice");
    }
    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateBack("");
    }
    getBiz() {
        this.restApi.post("accessor/get-verified", { created_by: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                this.officeNum = res.office;
                this.profileNum = res.profile;
                this.projectNum = res.project;
            }
        }, error => {
            console.log(error);
            this.toastController.create({
                message: "Something went wrong.",
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    cameraOption() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: "Select Profile Picture",
                buttons: [
                    {
                        text: "Camera",
                        role: "camera",
                        handler: () => {
                            // this.profilePictureCamera();
                        }
                    },
                    {
                        text: "Gallery",
                        cssClass: "secondary",
                        role: "gallery",
                        handler: () => {
                            // this.profilePictureGallery();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    updateImage(option) {
        try {
            // this.camera.getPicture(option).then((imageData) => {
            //     this.loading.showPro()
            //     let url = "data:image/jpeg;base64," + imageData;
            //     // let imgBlob = this.imgURItoBlob(imageData);
            //     // let metadata = { "contentType": imgBlob.type };
            //     this.restApi.post("accessor/up-user", { user_id: this.authService.user.userId, data: url, type: "image/jpeg" }).subscribe((res: any) => {
            //         if (res && res.status) {
            //             if (res.data != this.image) {
            //                 this.authService.user.picpath = res.data;
            //                 this.image = this.commonUrl + res.data;
            //                 this.loading.hide();
            //             }
            //         }
            //     }, error => {
            //         console.log(error);
            //         this.toastController.create({
            //             message: "Something went wrong.",
            //             duration: 2000
            //         }).then(toast => toast.present());
            //     });
            // })
        }
        catch (error) {
            console.log(error, option.sourceType);
        }
    }
    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }
    updated() {
        this.loading.show();
        // firebase.database().ref("accounts/" + firebase.auth().currentUser.uid).once("value").then((profile) => {
        //   if (profile.val()) {
        //     this.angularDb.object("accounts/" + firebase.auth().currentUser.uid).update({
        //       nikeName: this.nikeName
        //     }).then(() => {
        //       this.loading.hide()
        //       this.router.navigateByUrl("/home")
        //     })
        //   }
        // })
    }
    //   this.camera.getPicture(this.options)
    //   .then((imageData) => {
    //     this.base64Image = "data:image/png;base64,"+imageData;
    //     this.mydetail.picpath = this.base64Image;
    // this.restApi.post("accessor/up-user", {user_id:this.authService.user.userId,  data:{picpath:this.base64Image}}).subscribe((res: any) => {
    //   if (res && res.status) {
    //     console.log(res.data);
    //     this.mydetail = res.data;
    //   }
    // }, error => {
    //   console.log(error);
    //   this.toastController.create({
    //     message: "Something went wrong.",
    //     duration: 2000
    //   }).then(toast => toast.present());
    // });
    //   }, (err) => {
    //      console.log(err);
    //   });
    presentToast(msg) {
        this.toastController.create({ message: msg, duration: 2000 }).then(toast => toast.present());
    }
};
AssessorPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
AssessorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: "app-assessor",
        template: _assessor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_assessor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AssessorPage);



/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);



let LoadingService = class LoadingService {
    constructor(loadCtrl) {
        this.loadCtrl = loadCtrl;
        this.isLoading = false;
    }
    // loading system;
    show() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadCtrl.create({
                duration: 5000,
                spinner: "circles",
                message: 'Please wait...',
                cssClass: 'custom-class custom-loading'
            }).then(a => {
                a.present()
                    .then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    // after loading will be hide.
    hide() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadCtrl.dismiss();
        });
    }
    // i for the loading pro 
    showPro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadCtrl.create({
                spinner: "circles",
                message: 'Please wait...',
                cssClass: 'custom-class custom-loading'
            }).then(a => {
                a.present()
                    .then(() => {
                    if (!this.isLoading) {
                        a.dismiss();
                    }
                });
            });
        });
    }
    hidePro() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadCtrl.dismiss();
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 4964:
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/assessor.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".headerImage {\n  height: 50%;\n  width: 50%;\n  margin: auto;\n  margin-top: 4%;\n  margin-bottom: 0%;\n}\n\nion-content ion-segment ion-label {\n  text-align: bottom;\n}\n\nion-content ion-card {\n  background-color: #000;\n  margin: 4% 10% 12% 10%;\n}\n\nion-footer {\n  background-color: #000;\n  position: fixed !important;\n  bottom: 0px !important;\n}\n\nion-footer ion-card {\n  background-color: #000;\n  margin: 5% 10% 5% 10%;\n}\n\nh5 {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  color: #a8a7a7;\n  text-align: center;\n}\n\n.inner {\n  font-size: 13px;\n  color: #a8a7a7;\n}\n\n.profile-pic {\n  max-width: 200px;\n  max-height: 200px;\n  display: block;\n}\n\n.file-upload {\n  display: none;\n}\n\n.circle {\n  border-radius: 1000px !important;\n  overflow: hidden;\n  width: 128px;\n  height: 128px;\n  border: 8px solid rgba(255, 255, 255, 0.7);\n  position: absolute;\n  top: 72px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n.p-image {\n  position: absolute;\n  top: 167px;\n  right: 30px;\n  color: #666666;\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.p-image:hover {\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n.upload-button {\n  font-size: 1.2em;\n}\n\n.upload-button:hover {\n  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  color: #999;\n}\n\n.profileimage {\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100%;\n  margin-top: 10%;\n}\n\n.profileimage img {\n  height: 150%;\n  width: 150%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2Vzc29yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0RBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDREQUFBO0FBQUo7O0FBR0E7RUFDSSw0REFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLDREQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBUUEsZUFBQTtBQVBKOztBQUNJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNSIiwiZmlsZSI6ImFzc2Vzc29yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJJbWFnZSB7XG4gICAgaGVpZ2h0ICAgICAgIDogNTAlO1xuICAgIHdpZHRoICAgICAgICA6IDUwJTtcbiAgICBtYXJnaW4gICAgICAgOiBhdXRvO1xuICAgIG1hcmdpbi10b3AgICA6IDQlO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xufVxuXG5pb24tY29udGVudCBpb24tc2VnbWVudCBpb24tbGFiZWwge1xuICAgIHRleHQtYWxpZ246IGJvdHRvbTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgbWFyZ2luICAgICAgICAgIDogNCUgMTAlIDEyJSAxMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWZvb3RlciBpb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICBtYXJnaW4gICAgICAgICAgOiA1JSAxMCUgNSUgMTAlO1xufVxuXG5oNSB7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yICAgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG4gICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcbn1cblxuLmlubmVyIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3IgICAgOiByZ2IoMTY4LCAxNjcsIDE2Nyk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhdmF0dXIgcGljdHVyZSAtLS0tLS0tLS0tLS0tLVxuLnByb2ZpbGUtcGljIHtcbiAgICBtYXgtd2lkdGggOiAyMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG4gICAgd2lkdGggICAgICAgIDogMTI4cHg7XG4gICAgaGVpZ2h0ICAgICAgIDogMTI4cHg7XG4gICAgYm9yZGVyICAgICAgIDogOHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICBwb3NpdGlvbiAgICAgOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICAgICAgOiA3MnB4O1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQgICA6IGF1dG87XG59XG5cbi5wLWltYWdlIHtcbiAgICBwb3NpdGlvbiAgOiBhYnNvbHV0ZTtcbiAgICB0b3AgICAgICAgOiAxNjdweDtcbiAgICByaWdodCAgICAgOiAzMHB4O1xuICAgIGNvbG9yICAgICA6ICM2NjY2NjY7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBjdWJpYy1iZXppZXIoLjE3NSwgLjg4NSwgLjMyLCAxLjI3NSk7XG59XG5cbi5wLWltYWdlOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMTc1LCAuODg1LCAuMzIsIDEuMjc1KTtcbn1cblxuLnVwbG9hZC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi51cGxvYWQtYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguMTc1LCAuODg1LCAuMzIsIDEuMjc1KTtcbiAgICBjb2xvciAgICAgOiAjOTk5O1xufVxuXG4ucHJvZmlsZWltYWdlIHtcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gICAgZmxleC1mbG93ICAgICAgOiByb3cgbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zICAgIDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXMgIDogMTAwJTtcblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodCAgICAgICA6IDE1MCU7XG4gICAgICAgIHdpZHRoICAgICAgICA6IDE1MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgfVxuXG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4vLyBEYXNoYm9hcmQgY29udGVudCBhcmVhXG4iXX0= */";

/***/ }),

/***/ 9304:
/*!*************************************************************!*\
  !*** ./src/app/home/assessor/assessor.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header color=\"dark\" style=\"background: black;height: 25%;\">\n    <ion-content color=\"dark\">\n        <ion-img src=\"../../../assets/veriprof-logo2.png\" class=\"headerImage\"></ion-img>\n        <h5 color=\"light\">Assessors : {{userEmail}}</h5>\n    </ion-content>\n</ion-header>\n\n<ion-content padding color=\"dark\">\n    <ion-card class=\"scroll-y mb-0 p-fixed w-80 h-55\">\n        <ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"unverifiedbiz()\">\n                    <ion-img src=\"../../../assets/biz.png\"></ion-img>\n                    <ion-label class=\"inner\">&nbsp;&nbsp;Business&nbsp;&nbsp; </ion-label>\n                </ion-card>\n            </ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"unverifiedoffice()\">\n                    <ion-img src=\"../../../assets/network.png\"></ion-img>\n                    <ion-label class=\"inner\">Office</ion-label>\n                </ion-card>\n            </ion-segment>\n        </ion-segment>\n        <ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"unverifiedproject()\">\n                    <ion-img src=\"../../../assets/arch.png\"></ion-img>\n                    <ion-label class=\"inner\">&nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;</ion-label>\n                </ion-card>\n            </ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"unverifiedprof()\">\n                    <ion-img src=\"../../../assets/personal.png\"></ion-img>\n                    <ion-label class=\"inner\">Professional</ion-label>\n                </ion-card>\n            </ion-segment>\n        </ion-segment>\n        <ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"schedules()\">\n                    <ion-img src=\"../../../assets/sched.png\"></ion-img>\n                    <ion-label class=\"inner\">Schedules</ion-label>\n                </ion-card>\n            </ion-segment>\n            <ion-segment>\n                <ion-card (click)=\"accessorsreport()\">\n                    <ion-img src=\"../../../assets/accreport.png\"></ion-img>\n                    <ion-label class=\"inner\">Report</ion-label>\n                </ion-card>\n            </ion-segment>\n        </ion-segment>\n    </ion-card>\n</ion-content>\n\n<ion-footer class=\"mb-0\" style=\"height: 20%;\">\n    <ion-label class=\"m-4\" color=\"light\">Assessors Verification Summary</ion-label>\n    <ion-segment>\n        <ion-card class=\"h-100\">\n            <div class=\"profileimage\" *ngIf=\"image === 'assets/icon-66.png'\">\n                <img src=\"assets/icon-66.png\" alt=\"\" (click)=\"cameraOption()\">\n            </div>\n            <div class=\"profileimage\" *ngIf=\"image != 'assets/icon-66.png'\">\n                <img src=\"{{image}}\" alt=\"\" (click)=\"cameraOption()\">\n            </div>\n        </ion-card>\n        <ion-card>\n            <ion-row>\n                <ion-label class=\"inner\">Offices:</ion-label>\n                <ion-label class=\"inner\">{{officeNum}}</ion-label>\n            </ion-row>\n            <ion-row>\n                <ion-label class=\"inner\">Profiles:</ion-label>\n                <ion-label class=\"inner\">{{profileNum}}</ion-label>\n            </ion-row>\n            <ion-row>\n                <ion-label class=\"inner\">Projects:</ion-label>\n                <ion-label class=\"inner\">{{projectNum}}</ion-label>\n            </ion-row>\n        </ion-card>\n    </ion-segment>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_assessor_module_ts.js.map