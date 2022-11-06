"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_project_project_module_ts"],{

/***/ 1313:
/*!*************************************************************!*\
  !*** ./src/app/home/professional/project/project.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPageModule": () => (/* binding */ ProjectPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.page */ 7791);







const routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_0__.ProjectPage
    }
];
let ProjectPageModule = class ProjectPageModule {
};
ProjectPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_0__.ProjectPage]
    })
], ProjectPageModule);



/***/ }),

/***/ 7791:
/*!***********************************************************!*\
  !*** ./src/app/home/professional/project/project.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPage": () => (/* binding */ ProjectPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.page.html?ngResource */ 470);
/* harmony import */ var _project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.page.scss?ngResource */ 2286);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);







let ProjectPage = class ProjectPage {
    constructor(restApi, authService, toastController, alertController) {
        this.restApi = restApi;
        this.authService = authService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.segment = "paper";
        this.name = "any";
        this.completeFlag = false;
        this.loadData = [];
        this.form = {
            title: "",
            prof_type: "Project Manager",
            type: "Residential",
            const_cost: "",
            final_cost: "0",
            variable: "50.00",
            prof_cost: "",
            started_at: "",
            completed_at: "",
            description: "",
            client_name: "",
            pl_name: "",
            pl_email: "",
            pl_phone: "",
            proj_address: "",
            proj_gps: "",
            proj_street: "",
            proj_city: "",
            proj_state: "",
            proj_zip: "",
            status: "Ongoing",
            appointment: "",
            pratical_certification: "",
            final_certification: "",
            final_account: "",
            status_verify: "0",
        };
        this.saveButtonFlag = false;
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this.restApi.post("professional/get-project", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.loadData = res.data;
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    addProjects() {
        let { title, prof_type, const_cost, prof_cost, final_cost, started_at, description, client_name, pl_name, pl_email, pl_phone, proj_address, proj_gps, proj_city, proj_state, proj_zip, status, appointment, pratical_certification, final_certification, final_account } = this.form;
        if (title.length == 0) {
            this.restApi.toast("Please fill title", 1200);
            return;
        }
        if (prof_type.length == 0) {
            this.restApi.toast("Please fill Type", 1200);
            return;
        }
        if (const_cost.length == 0) {
            this.restApi.toast("Please fill Construction Cost", 1200);
            return;
        }
        if (prof_cost.length == 0) {
            this.restApi.toast("Please fill Professional Cost", 1200);
            return;
        }
        if (started_at.length == 0) {
            this.restApi.toast("Please fill Start Date", 1200);
            return;
        }
        if (description.length == 0) {
            this.restApi.toast("Please fill description", 1200);
            return;
        }
        if (client_name.length == 0) {
            this.restApi.toast("Please fill Client Name", 1200);
            return;
        }
        if (pl_name.length == 0) {
            this.restApi.toast("Please fill Project Leader Name", 1200);
            return;
        }
        if (pl_email.length == 0) {
            this.restApi.toast("Please fill Project Leader Email", 1200);
            return;
        }
        if (pl_phone.length == 0) {
            this.restApi.toast("Please fill Project Leader Phone number", 1200);
            return;
        }
        if (proj_address.length == 0) {
            this.restApi.toast("Please fill Project Location Address", 1200);
            return;
        }
        if (proj_gps.length == 0) {
            this.restApi.toast("Please fill Project Location GPS", 1200);
            return;
        }
        if (proj_city.length == 0) {
            this.restApi.toast("Please fill Project Location City", 1200);
            return;
        }
        if (proj_state.length == 0) {
            this.restApi.toast("Please fill Project Location Province", 1200);
            return;
        }
        if (proj_zip.length == 0) {
            this.restApi.toast("Please fill Project Location Zipcode", 1200);
            return;
        }
        if (appointment.length == 0) {
            this.restApi.toast("Please input letter of appointment and wait for seconds.", 1200);
            return;
        }
        if (pratical_certification.length == 0) {
            this.restApi.toast("Please input pratical completion certificate and wait for seconds.", 1200);
            return;
        }
        if (final_certification.length == 0) {
            this.restApi.toast("Please input final completion certificate and wait for seconds.", 1200);
            return;
        }
        if (final_account.length == 0) {
            this.restApi.toast("Please input final account and wait for seconds.", 1200);
            return;
        }
        // if (!this.form.const_cost.includes("R")) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes("R")) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        if (status != "Ongoing" && final_cost != "0" && final_cost != "") {
            this.form.variable = ((parseInt(const_cost) - (parseInt(final_cost)) / parseInt(final_cost)) * 100).toFixed(2).toString();
        }
        this.restApi.post("professional/add-project", { user_id: this.authService.user.userId, data: this.form }).subscribe((res) => {
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                if (res.id != "exist") {
                    this.getProjects();
                    this.segment = "paper";
                    for (let x in this.form) {
                        if (x != "prof_type" && x != "type" && x != "status" && x != "final_cost" && x != "variable") {
                            this.form[x] = "";
                        }
                    }
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    action(x, act) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let updateProjectData = { title: x.title, user_id: x.created_by, verified: act, completed_at: "", final_cost: "0" };
            if (act == "Completed" || act == "Cancelled") {
                const alert = yield this.alertController.create({
                    header: 'Please enter your info',
                    buttons: [{
                            text: 'OK',
                            handler: (data) => {
                                if (data["0"] == "" || data["1"] == "") {
                                    return false;
                                }
                                else if (parseFloat(data["0"]) > parseFloat(x.const_cost)) {
                                    return false;
                                }
                                else {
                                    updateProjectData.completed_at = data["1"];
                                    updateProjectData.final_cost = data["0"];
                                    console.log(updateProjectData, x, data);
                                    this.updateStatus(updateProjectData);
                                }
                            }
                        }],
                    inputs: [
                        {
                            type: 'number',
                            placeholder: 'Final Cost',
                            min: 1
                        },
                        {
                            type: 'date',
                            placeholder: 'Mon/Day/Year',
                            min: x.started_at
                        },
                    ],
                });
                yield alert.present();
            }
            else if (act == "Ongoing") {
                this.updateStatus(updateProjectData);
            }
            else if (act == "Update") {
                this.form = x;
                this.segment = "add-circle";
            }
            else if (act == "Verify") {
                this.request_verification(x.id);
            }
        });
    }
    request_verification(project_id) {
        this.restApi.post("professional/request-verificationProject", { user_id: this.authService.user.userId, project_id: project_id }).subscribe((res) => {
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.getProjects();
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    updateStatus(data) {
        this.restApi.post("professional/action-project", data).subscribe((res) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.getProjects();
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    change_status(event) {
        if (event.detail.value == "Completed" || event.detail.value == "Cancelled") {
            this.completeFlag = true;
        }
        else if (event.detail.value == "Ongoing") {
            this.completeFlag = false;
        }
    }
    changeListener($event, type) {
        this.saveButtonFlag = true;
        let file = $event.target.files[0];
        if (file && file.type == "application/pdf") {
            this.restApi.postFile(file, "upload-file", "project").subscribe(res => {
                if (res && res.status && res.status == "success") {
                    this.form[`${type}`] = res.filename;
                    console.log(" Project page - after upload file : ", this.form);
                    this.saveButtonFlag = false;
                }
            }, error => {
                console.log(error);
                this.saveButtonFlag = false;
            });
        }
        else {
            this.restApi.toast("Only PDF supported", 1200);
            this.saveButtonFlag = false;
        }
    }
    download(filename) {
        this.restApi.downfile("uploads/", filename);
    }
};
ProjectPage.ctorParameters = () => [
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ProjectPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-project",
        template: _project_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_project_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProjectPage);



/***/ }),

/***/ 2286:
/*!************************************************************************!*\
  !*** ./src/app/home/professional/project/project.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "body {\n  padding: 0 1em;\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  color: #444;\n  background: #eee;\n  font-size: 10 px;\n}\n\n.project_verify {\n  padding: 3px;\n  height: 2rem;\n  margin: 0rem;\n  width: 33%;\n}\n\n.project_update {\n  padding: 3px;\n  height: 2rem;\n  margin: 5%;\n  width: 40%;\n}\n\n.rwd-table {\n  margin: 1em 0;\n}\n\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n\n.rwd-table th {\n  display: none;\n}\n\n.rwd-table td {\n  display: block;\n}\n\n.rwd-table td:first-child {\n  padding-top: 0.5em;\n}\n\n.rwd-table td:last-child {\n  padding-bottom: 0.5em;\n}\n\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n  font-weight: bold;\n  width: 9.3em;\n  display: inline-block;\n}\n\n@media (min-width: 800px) {\n  .rwd-table td:before {\n    display: none;\n  }\n}\n\n.rwd-table th,\n.rwd-table td {\n  text-align: left;\n}\n\n@media (min-width: 800px) {\n  .rwd-table th,\n.rwd-table td {\n    display: table-cell;\n    padding: 0.25em 0.5em;\n  }\n  .rwd-table th:first-child,\n.rwd-table td:first-child {\n    padding-left: 0;\n  }\n  .rwd-table th:last-child,\n.rwd-table td:last-child {\n    padding-right: 0;\n  }\n}\n\n.rwd-table h1 {\n  font-weight: normal;\n  letter-spacing: -1px;\n  color: #34495E;\n}\n\n.rwd-table .rwd-table {\n  background: #34495E;\n  color: #fff;\n  border-radius: 0.4em;\n  overflow: hidden;\n}\n\n.rwd-table .rwd-table tr {\n  border-color: #46637f;\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n  margin: 0.5em 1em;\n}\n\n@media (min-width: 800px) {\n  .rwd-table .rwd-table th,\n.rwd-table .rwd-table td {\n    padding: 1em !important;\n  }\n}\n\n.rwd-table .rwd-table th,\n.rwd-table .rwd-table td:before {\n  color: #dd5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FBR0k7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBRFI7O0FBSUk7RUFDSSxhQUFBO0FBRlI7O0FBS0k7RUFDSSxjQUFBO0FBSFI7O0FBS1E7RUFDSSxrQkFBQTtBQUhaOztBQU1RO0VBQ0kscUJBQUE7QUFKWjs7QUFPUTtFQUNJLDJCQUFBO0VBQ0EsaUJBQUE7RUFHQSxZQUFBO0VBQ0EscUJBQUE7QUFQWjs7QUFVWTtFQVRKO0lBVVEsYUFBQTtFQVBkO0FBQ0Y7O0FBV0k7O0VBRUksZ0JBQUE7QUFUUjs7QUFXUTtFQUpKOztJQUtRLG1CQUFBO0lBQ0EscUJBQUE7RUFQVjtFQVNVOztJQUNJLGVBQUE7RUFOZDtFQVNVOztJQUNJLGdCQUFBO0VBTmQ7QUFDRjs7QUFXSTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBVFI7O0FBWUk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBVlI7O0FBWVE7RUFDSSxxQkFBQTtBQVZaOztBQWFROztFQUVJLGlCQUFBO0FBWFo7O0FBYVk7RUFKSjs7SUFLUSx1QkFBQTtFQVRkO0FBQ0Y7O0FBWVE7O0VBRUksV0FBQTtBQVZaIiwiZmlsZSI6InByb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgcGFkZGluZyAgICAgICAgICAgICAgIDogMCAxZW07XG4gICAgZm9udC1mYW1pbHkgICAgICAgICAgIDogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICB0ZXh0LXJlbmRlcmluZyAgICAgICAgOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgY29sb3IgICAgICAgICAgICAgICAgIDogIzQ0NDtcbiAgICBiYWNrZ3JvdW5kICAgICAgICAgICAgOiAjZWVlO1xuICAgIGZvbnQtc2l6ZSAgICAgICAgICAgICA6IDEwIHB4O1xufVxuXG4kYnJlYWtwb2ludC1hbHBoYTogODAwcHg7IC8vIGFkanVzdCB0byB5b3VyIG5lZWRzXG5cbi5wcm9qZWN0X3ZlcmlmeSB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGhlaWdodCA6IDJyZW07XG4gICAgbWFyZ2luIDogMHJlbTtcbiAgICB3aWR0aDogMzMlO1xufVxuXG4ucHJvamVjdF91cGRhdGUge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBoZWlnaHQgOiAycmVtO1xuICAgIG1hcmdpbiA6IDUlO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbi5yd2QtdGFibGUge1xuICAgIG1hcmdpbiAgIDogMWVtIDA7XG5cbiAgICB0ciB7XG4gICAgICAgIGJvcmRlci10b3AgICA6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICB9XG5cbiAgICB0aCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8vIGZvciBhY2Nlc3NpYmlsaXR5LCB1c2UgYSB2aXN1YWxseSBoaWRkZW4gbWV0aG9kIGhlcmUgaW5zdGVhZCEgIFxuICAgIH1cblxuICAgIHRkIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQgICAgOiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxuICAgICAgICAgICAgd2lkdGggIDogOS4zZW07IC8vIG1hZ2ljIG51bWJlciA6KCBhZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgb3duIGNvbnRlbnRcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIC8vIGVuZCBvcHRpb25zXG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgcGFkZGluZzogLjI1ZW0gLjVlbTtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjMzQ0OTVFO1xuICAgIH1cblxuICAgIC5yd2QtdGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kICAgOiAjMzQ0OTVFO1xuICAgICAgICBjb2xvciAgICAgICAgOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuNGVtO1xuICAgICAgICBvdmVyZmxvdyAgICAgOiBoaWRkZW47XG5cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCMzNDQ5NUUsIDEwJSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aCxcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgbWFyZ2luOiAuNWVtIDFlbTtcblxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWFscGhhKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aCxcbiAgICAgICAgdGQ6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZGQ1O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";

/***/ }),

/***/ 470:
/*!************************************************************************!*\
  !*** ./src/app/home/professional/project/project.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>My Projects</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button class=\"border-none\" value=\"add-circle\">\n            <ion-icon name=\"add-circle\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Add New</ion-label>\n        </ion-segment-button>\n        <ion-segment-button class=\"border-none\" value=\"paper\">\n            <ion-icon name=\"list-circle-outline\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Projects</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card class=\"p-fixed fixed-ion-card-area\" *ngSwitchCase=\"'paper'\">\n            <ion-card-content>\n                <h1>My Projects</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"loadData.length > 0\">\n                        <tr *ngFor=\"let x of loadData\">\n                            <td data-th=\"Project Title\">{{x.title}}</td>\n                            <td data-th=\"Project Type\">{{x.type}}</td>\n                            <td data-th=\"ERF / Lot No\">{{x.proj_address}}</td>\n                            <td data-th=\"GPS Coordinates\">{{x.proj_gps}}</td>\n                            <td data-th=\"Street Address\">{{x.proj_city}}</td>\n                            <td data-th=\"Project Location\">R {{x.proj_city}}</td>\n                            <td data-th=\"Province\">{{x.proj_state}}</td>\n                            <td data-th=\"Portal Code\">{{x.proj_zip}}</td>\n                            <td data-th=\"Description\">{{x.description}}</td>\n                            <td data-th=\"Service Rendered\">{{x.prof_type}}</td>\n                            <td data-th=\"Construction Cost\">R{{(x.const_cost)}}</td>\n                            <td data-th=\"Professional Fees\">R{{x.prof_cost}}</td>\n                            <td data-th=\"Client Name\">{{x.client_name}}</td>\n                            <td data-th=\"Project Leader\">{{x.pl_name}}</td>\n                            <td data-th=\"Email\">{{x.pl_email}}</td>\n                            <td data-th=\"Phone\">{{x.pl_phone}}</td>\n                            <td data-th=\"Start Date\">{{x.started_at}}</td>\n                            <ion-label class=\"textBold\">Supporting Documents</ion-label><br>\n                            <ion-label>Letter of appointment</ion-label><br>\n                            <ng-container *ngIf=\"x.appointment != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.appointment)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.appointment == ''\">\n                                <ion-label>There is no Letter of appointment.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Practical completion certificate</ion-label><br>\n                            <ng-container *ngIf=\"x.pratical_certification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.pratical_certification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.pratical_certification == ''\">\n                                <ion-label>There is no Practical completion\n                                    certificate.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Final completion certificate</ion-label><br>\n                            <ng-container *ngIf=\"x.final_certification != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.final_certification)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.final_certification == ''\">\n                                <ion-label>There is no Final completion\n                                    certificate.</ion-label>\n                            </ng-container><br>\n                            <ion-label>Final account</ion-label><br>\n                            <ng-container *ngIf=\"x.final_account != ''\">\n                                <ion-button size=\"small\" color=\"success\" class=\"down-btn-profe\"\n                                    (click)=\"download(x.final_account)\">Download</ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.final_account == ''\">\n                                <ion-label>There is no Final account.</ion-label>\n                            </ng-container><br>\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\n                                <td data-th=\"Final Cost\">R{{x.final_cost}}</td>\n                                <td data-th=\"Cost Variance\">{{x.variable}}% over budget</td>\n                                <td data-th=\"Completed Date\" style=\"color: blue;\">{{x.completed_at}}</td>\n                                <td data-th=\"Project Status\" style=\"color: blue;\">{{x.status}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Ongoing'\">\n                                <td data-th=\"Project Status\" style=\"color: rgb(0, 0, 0);\">{{x.status}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Cancelled'\">\n                                <td data-th=\"Cancelled Date\" style=\"color: rgb(255, 0, 0);\">{{x.completed_at}}</td>\n                                <td data-th=\"Project Status\" style=\"color: rgb(255, 0, 0);\">{{x.status}}</td>\n                            </ng-container>\n                            <br>\n                            <ng-container *ngIf=\"x.status_verify == '1'\">\n                                <ion-button size=\"small\" color=\"success\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Completed')\" disabled=\"true\">Complete</ion-button>\n                                <ion-button size=\"small\" style=\"color: blue;\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Ongoing')\" disabled=\"true\">Ongoing</ion-button>\n                                <ion-button size=\"small\" color=\"danger\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Cancelled')\" disabled=\"true\">\n                                    Cancelled</ion-button>\n                                <ion-item>\n                                    <ion-button size=\"small\" color=\"success\" class=\"project_update\"\n                                        (click)=\"action(x, 'Update')\" disabled=\"true\">\n                                        Update</ion-button>\n                                    <ion-button size=\"small\" color=\"dark\" class=\"project_update\"\n                                        (click)=\"action(x, 'Verify')\" disabled=\"true\">\n                                        Verification</ion-button>\n                                </ion-item>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status_verify == '0'\">\n                                <ion-button size=\"small\" color=\"success\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Completed')\">Complete</ion-button>\n                                <ion-button size=\"small\" style=\"color: blue;\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Ongoing')\">Ongoing</ion-button>\n                                <ion-button size=\"small\" color=\"danger\" class=\"project_verify\"\n                                    (click)=\"action(x, 'Cancelled')\">\n                                    Cancelled</ion-button>\n                                <ion-item>\n                                    <ion-button size=\"small\" color=\"success\" class=\"project_update\"\n                                        (click)=\"action(x, 'Update')\">\n                                        Update</ion-button>\n                                    <ion-button size=\"small\" color=\"dark\" class=\"project_update\"\n                                        (click)=\"action(x, 'Verify')\">\n                                        Verification</ion-button>\n                                </ion-item>\n                            </ng-container>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"loadData.length == 0\">\n                        <div class=\"text-center\">No project or No connection.</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card class=\"p-fixed fixed-ion-card-area\" *ngSwitchCase=\"'add-circle'\">\n            <ion-card-content>\n                <h1>Add New Project</h1>\n                <ion-item>\n                    <ion-label position=\"stacked\">New Project Title </ion-label>\n                    <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"form.title\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Description</ion-label>\n                    <ion-textarea [(ngModel)]=\"form.description\"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Service Rendered</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.prof_type\">\n                        <ion-select-option value=\"Project Manager\">Project Manager</ion-select-option>\n                        <ion-select-option value=\"Principal Agent\">Principal Agent</ion-select-option>\n                        <ion-select-option value=\"Architect\">Architect</ion-select-option>\n                        <ion-select-option value=\"Quantity Surveyor\">Quantity Surveyor</ion-select-option>\n                        <ion-select-option value=\"Civil Eng\">Civil Eng</ion-select-option>\n                        <ion-select-option value=\"Structural Eng\">Structural Eng</ion-select-option>\n                        <ion-select-option value=\"Mechanical Eng\">Mechanical Eng</ion-select-option>\n                        <ion-select-option value=\"Electrical Eng\">Electrical Eng</ion-select-option>\n                        <ion-select-option value=\"OHS agent\">OHS agent</ion-select-option>\n                        <ion-select-option value=\"Plumber\">Plumber</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Select Project Type</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.type\">\n                        <ion-select-option value=\"Residential\">Residential</ion-select-option>\n                        <ion-select-option value=\"Multi-residential\">Multi-residential</ion-select-option>\n                        <ion-select-option value=\"Interior\">Interior</ion-select-option>\n                        <ion-select-option value=\"Library\">Library</ion-select-option>\n                        <ion-select-option value=\"Hospital\">Hospital</ion-select-option>\n                        <ion-select-option value=\"Office Parks\">Office Parks</ion-select-option>\n                        <ion-select-option value=\"Guest House\">Guest House</ion-select-option>\n                        <ion-select-option value=\"Multi purpose Hall\">Multi purpose Hall</ion-select-option>\n                        <ion-select-option value=\"Mall\">Mall</ion-select-option>\n                        <ion-select-option value=\"RDP Housing\">RDP Housing</ion-select-option>\n                        <ion-select-option value=\"Township Market Development\">Township Market Development\n                        </ion-select-option>\n                        <ion-select-option value=\"Road Paving\">Road Paving</ion-select-option>\n                        <ion-select-option value=\"Road Construction\">Road Construction</ion-select-option>\n                        <ion-select-option value=\"Bridge\">Bridge</ion-select-option>\n                        <ion-select-option value=\"Sport Center Development\">Sport Center Development</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Construction Cost(R, Input Only Number) : </ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.const_cost\" min=\"0\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Fees(R, Input Only Number) : </ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.prof_cost\" min=\"0\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Start Date</ion-label>\n                    <ion-input type=\"date\" placeholder=\"Mon/Day/Year\" [(ngModel)]=\"form.started_at\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Select Project Status</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.status\" (ionChange)=\"change_status($event)\">\n                        <ion-select-option value=\"Ongoing\">Ongoing</ion-select-option>\n                        <ion-select-option value=\"Completed\">Completed</ion-select-option>\n                        <ion-select-option value=\"Cancelled\">Cancelled</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ng-container *ngIf=\"completeFlag\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Final Cost(R, Input Only Number) : </ion-label>\n                        <ion-input type=\"text\" [(ngModel)]=\"form.final_cost\" min=\"0\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Construction Completed Date</ion-label>\n                        <ion-input type=\"date\" placeholder=\"Mon/Day/Year\" [(ngModel)]=\"form.completed_at\"></ion-input>\n                    </ion-item>\n                </ng-container>\n                <ion-item>\n                    <ion-label position=\"stacked\">Client Name</ion-label>\n                    <ion-input name=\"client_name\" [(ngModel)]=\"form.client_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Name</ion-label>\n                    <ion-input name=\"pl_name\" [(ngModel)]=\"form.pl_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Email</ion-label>\n                    <ion-input name=\"pl_email\" [(ngModel)]=\"form.pl_email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Phone Number</ion-label>\n                    <ion-input name=\"pl_phone\" minlength=\"11\" [(ngModel)]=\"form.pl_phone\">+</ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Project Location</ion-label>\n                    <ion-item>\n                        <ion-label position=\"stacked\"></ion-label>\n                        <ion-input placeholder=\"ERF /Lot No\" name=\"proj_address\" [(ngModel)]=\"form.proj_address\">\n                        </ion-input>\n                        <ion-input placeholder=\"GPS Coordinates\" name=\"proj_gps\" [(ngModel)]=\"form.proj_gps\">\n                        </ion-input>\n                        <ion-input placeholder=\"Street Address\" name=\"proj_street\" [(ngModel)]=\"form.proj_street\">\n                        </ion-input>\n                        <ion-input placeholder=\"City\" name=\"proj_city\" [(ngModel)]=\"form.proj_city\"></ion-input>\n                        <ion-input placeholder=\"Province\" name=\"proj_state\" [(ngModel)]=\"form.proj_state\"></ion-input>\n                        <ion-input placeholder=\"Postal Code\" name=\"proj_zip\" [(ngModel)]=\"form.proj_zip\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload Supporting Documents\n                    </ion-label>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Letter of appointment</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'appointment')\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Practical completion</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'pratical_certification')\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Final completion certificate</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'final_certification')\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Final account</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'final_account')\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-item style=\"margin-top: 20px;\">\n                    <ng-container *ngIf=\"saveButtonFlag\">\n                        <ion-button (click)=\"addProjects()\" class=\"button-common\" disabled={{saveButtonFlag}}>Uploading\n                            File\n                        </ion-button>\n                    </ng-container>\n                    <ng-container *ngIf=\"!saveButtonFlag\">\n                        <ion-button (click)=\"addProjects()\" class=\"button-common\" disabled={{saveButtonFlag}}>Save\n                            Project\n                        </ion-button>\n                    </ng-container>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <br />\n</ion-content>\n<!-- <ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_project_project_module_ts.js.map