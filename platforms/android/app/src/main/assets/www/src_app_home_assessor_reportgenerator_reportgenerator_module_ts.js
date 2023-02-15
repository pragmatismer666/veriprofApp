"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_assessor_reportgenerator_reportgenerator_module_ts"],{

/***/ 3379:
/*!*************************************************************************!*\
  !*** ./src/app/home/assessor/reportgenerator/reportgenerator.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportgeneratorPageModule": () => (/* binding */ ReportgeneratorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportgenerator.page */ 9908);







const routes = [
    {
        path: '',
        component: _reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__.ReportgeneratorPage
    }
];
let ReportgeneratorPageModule = class ReportgeneratorPageModule {
};
ReportgeneratorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_reportgenerator_page__WEBPACK_IMPORTED_MODULE_0__.ReportgeneratorPage]
    })
], ReportgeneratorPageModule);



/***/ }),

/***/ 9908:
/*!***********************************************************************!*\
  !*** ./src/app/home/assessor/reportgenerator/reportgenerator.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportgeneratorPage": () => (/* binding */ ReportgeneratorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reportgenerator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reportgenerator.page.html?ngResource */ 2165);
/* harmony import */ var _reportgenerator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportgenerator.page.scss?ngResource */ 1430);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);







let ReportgeneratorPage = class ReportgeneratorPage {
    constructor(activatedRoute, router, restApi, authService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.profess_id = "";
        this.content_id = "";
        this.compliance_status = "Unverified";
        this.compliance_rate = "0%";
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.type) {
                this.type = params.type[0].toUpperCase() + params.type.slice(1);
            }
            if (params && params.data) {
                this.data = JSON.parse(params.data);
                var keys = [];
                for (let key in this.data) {
                    keys.push(key);
                }
                let datas = [];
                let continue_index = 0;
                for (let i = 0; i < keys.length; i++) {
                    let val_str = "";
                    let val_data = this.data[keys[i]];
                    // console.log("reportgenerator params : ", keys[i], " : ", this.data[keys[i]]);
                    if (keys[i] == "id" ||
                        keys[i] == "created_by" ||
                        keys[i] == "file" ||
                        keys[i] == "certificate" ||
                        keys[i] == "id_no" ||
                        keys[i] == "user_id" ||
                        keys[i] == "is_director" ||
                        keys[i] == "verified_at" ||
                        keys[i] == "verified_by" ||
                        keys[i] == "verify_at" ||
                        keys[i] == "verify_by" ||
                        keys[i] == "updated_at" ||
                        keys[i] == "file" ||
                        keys[i] == "employer_requirPDF" ||
                        keys[i] == "status_verified" ||
                        keys[i] == "pratical_certification" ||
                        (keys[i] == "status" && this.type != "Project")) {
                        if (keys[i] == "created_by" || keys[i] == "user_id") {
                            this.profess_id = this.data[keys[i]];
                        }
                        if (keys[i] == "id") {
                            this.content_id = this.data[keys[i]];
                        }
                        continue_index++;
                        continue;
                    }
                    else if (keys[i] == "jtitle") {
                        val_str = "JOB TITLE ";
                    }
                    else if (keys[i] == "variable") {
                        val_str = "VARIATION ";
                    }
                    else if (keys[i].includes("_")) {
                        let val_strs = keys[i].split("_");
                        if (val_strs.length > 2) {
                            for (let i = 0; i < val_strs.length; i++) {
                                val_str += val_strs[i].toUpperCase() + " ";
                            }
                        }
                        else if (val_strs[0] == "exp") {
                            val_str = "EXPERIENCE " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "pl") {
                            val_str = "PROJECT LEADER " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "proj") {
                            val_str = "PROJECT " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "prof") {
                            val_str = "PROFESS " + val_strs[1].toUpperCase();
                        }
                        else {
                            val_str = val_strs[0].toUpperCase() + " " + val_strs[1].toUpperCase();
                        }
                    }
                    else {
                        val_str = keys[i].toUpperCase();
                    }
                    if (val_data.includes(".pdf")) {
                        val_data = "Uploaded";
                    }
                    else if (val_data == "" || val_data == null) {
                        val_data = "None";
                    }
                    let each_row = { id: i + 1 - continue_index, key: val_str, val: val_data, status: 0 };
                    datas.push(each_row);
                }
                this.report_data = datas;
            }
        });
    }
    ngOnInit() {
    }
    generate_report() {
        let new_report = {
            accessor: this.authService.user.name,
            profess: this.profess_id,
            content_id: this.content_id,
            report_type: this.type.toLowerCase(),
            data: this.report_data,
            created_by: this.authService.user.userId,
            score: this.compliance_rate,
        };
        this.restApi.post("accessor/add-report", new_report).subscribe((res) => {
            console.log(res);
            if (res && res.status) {
                if (res.status) {
                    this.restApi.toast("Generate the report PDF as successfully.", 1200);
                    let navigationExtras = {
                        queryParams: {
                            type: this.type.toLowerCase(),
                        }
                    };
                    this.router.navigate(["home/assessor/accessorsreport"], navigationExtras);
                }
                else {
                    this.restApi.toast("Please retry to generate the report .", 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }
    change_status(each_row, verification) {
        console.log("Report Generator this.report_data status = : ", this.report_data[each_row.id - 1]);
        if (verification && this.report_data[each_row.id - 1] != null) {
            this.report_data[each_row.id - 1].status = 1;
        }
        else {
            this.report_data[each_row.id - 1].status = 0;
        }
        console.log("Report Generator this.report_data status = : ", this.report_data[each_row.id - 1]);
        let trueLength = 0;
        for (let i = 0; i < this.report_data.length; i++) {
            if (this.report_data[i].status) {
                trueLength++;
            }
        }
        if (this.report_data.length == trueLength) {
            this.compliance_status = "Verified";
            this.compliance_rate = "100%";
        }
        else {
            this.compliance_status = "Unverified";
            this.compliance_rate = ((trueLength / this.report_data.length * 100).toFixed(2)).toString() + "%";
        }
    }
};
ReportgeneratorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__.RestApiService },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticateService }
];
ReportgeneratorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: "app-reportgenerator",
        template: _reportgenerator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reportgenerator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ReportgeneratorPage);



/***/ }),

/***/ 1430:
/*!************************************************************************************!*\
  !*** ./src/app/home/assessor/reportgenerator/reportgenerator.page.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  background-color: #363636;\n}\n\nion-content ion-card ion-item {\n  border-style: none;\n}\n\n.top-60px {\n  top: 60px !important;\n}\n\n.top-55px {\n  top: 55px !important;\n}\n\n.scrollH {\n  overflow: scroll;\n  width: 98%;\n  margin-left: 1%;\n  margin-right: 1%;\n}\n\n.table {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: auto;\n}\n\n.table th {\n  background: #8a8a8a;\n  padding: 0.2rem;\n  color: #fff;\n  border: 1px solid #fff;\n  font-size: 13px;\n}\n\n.table th:last-child {\n  padding-left: 1px !important;\n  padding-right: 1px !important;\n}\n\n.table td {\n  background: #ccc;\n  padding: 0rem !important;\n  padding-left: 0.2rem !important;\n  color: #000;\n  border: 1px solid #fff;\n  font-size: 12px;\n}\n\n.table td:last-child {\n  text-align: center;\n  padding: 0rem !important;\n  padding-top: 0.1rem !important;\n  margin: 0rem !important;\n}\n\n.table td:before {\n  font-weight: bold;\n}\n\n.rwd-table {\n  margin: 1em 0;\n  width: 100%;\n}\n\n.rwd-table tr {\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n}\n\n.rwd-table th {\n  display: none;\n}\n\n.rwd-table td {\n  display: block;\n  text-align: left;\n  line-height: 1.5rem;\n  font-weight: bold;\n}\n\n.rwd-table td:before {\n  content: attr(data-th) \": \";\n}\n\n.report-padding {\n  padding-left: 5% !important;\n  padding-right: 5% !important;\n}\n\n.report-verification-btn {\n  --padding-start: 0rem;\n  --padding-end: 0rem;\n  height: 100%;\n}\n\nion-checkbox {\n  padding: 0.15rem;\n  --size: 1.7rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGdlbmVyYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0FBQUo7O0FBRUk7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQVI7O0FBRVE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0FBQVo7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRlI7O0FBSVE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUZaOztBQUtRO0VBRUksaUJBQUE7QUFKWjs7QUFjQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBWEo7O0FBYUk7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FBWFI7O0FBY0k7RUFDSSxhQUFBO0FBWlI7O0FBZUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBYlI7O0FBcUJRO0VBQ0ksMkJBQUE7QUFuQlo7O0FBNEJBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQXpCSjs7QUE0QkE7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQXpCSjs7QUE0QkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXpCSiIsImZpbGUiOiJyZXBvcnRnZW5lcmF0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udG9wLTYwcHgge1xyXG4gICAgdG9wOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50b3AtNTVweCB7XHJcbiAgICB0b3A6IDU1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNjcm9sbEgge1xyXG4gICAgb3ZlcmZsb3cgICAgOiBzY3JvbGw7XHJcbiAgICB3aWR0aCAgICAgICA6IDk4JTtcclxuICAgIG1hcmdpbi1sZWZ0IDogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gICAgd2hpdGUtc3BhY2UgIDogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDAuMnJlbTtcclxuICAgICAgICBjb2xvciAgICAgOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlciAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZSA6IDEzcHg7XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDFweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQgIDogI2NjYztcclxuICAgICAgICBwYWRkaW5nICAgICA6IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yICAgICAgIDogIzAwMDtcclxuICAgICAgICBib3JkZXIgICAgICA6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgIDogMTJweDtcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZyAgICA6IDByZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4gICAgIDogMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAvLyBjb250ZW50ICAgIDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsIHN0dWZmIHRvIG1ha2UgaXQgbG9vayBuaWNlclxyXG4gICAgICAgICAgICAvLyB3aWR0aCAgICAgIDogMTFlbTsgLy8gbWFnaWMgbnVtYmVyIDooIGFkanVzdCBhY2NvcmRpbmcgdG8geW91ciBvd24gY29udGVudFxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5ICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuJGJyZWFrcG9pbnQtYWxwaGE6IDgwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xyXG5cclxuLnJ3ZC10YWJsZSB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG5cclxuICAgIHRyIHtcclxuICAgICAgICBib3JkZXItdG9wICAgOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTsgLy8gZm9yIGFjY2Vzc2liaWxpdHksIHVzZSBhIHZpc3VhbGx5IGhpZGRlbiBtZXRob2QgaGVyZSBpbnN0ZWFkISAgXHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGRpc3BsYXkgICAgOiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduIDogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAvLyAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAvLyAgICAgd2lkdGggICAgICA6IDExZW07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQgICAgICAgOiBhdHRyKGRhdGEtdGgpXCI6IFwiOyAvLyB3aG8ga25ldyB5b3UgY291bGQgZG8gdGhpcz8gVGhlIGludGVybmV0LCB0aGF0J3Mgd2hvLlxyXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcclxuICAgICAgICAgICAgLy8gd2lkdGggICAgICA6IDExZW07IC8vIG1hZ2ljIG51bWJlciA6KCBhZGp1c3QgYWNjb3JkaW5nIHRvIHlvdXIgb3duIGNvbnRlbnRcclxuICAgICAgICAgICAgLy8gZGlzcGxheSAgICA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgLy8gZW5kIG9wdGlvbnNcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yZXBvcnQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQgOiA1JSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlcG9ydC12ZXJpZmljYXRpb24tYnRuIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMHJlbTtcclxuICAgIC0tcGFkZGluZy1lbmQgIDogMHJlbTtcclxuICAgIGhlaWdodCAgICAgICAgIDogMTAwJTtcclxufVxyXG5cclxuaW9uLWNoZWNrYm94IHtcclxuICAgIHBhZGRpbmcgICA6IDAuMTVyZW07XHJcbiAgICAtLXNpemUgICAgOiAxLjdyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";

/***/ }),

/***/ 2165:
/*!************************************************************************************!*\
  !*** ./src/app/home/assessor/reportgenerator/reportgenerator.page.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"h-50px\">\n    <ion-toolbar color=\"dark\" class=\"h-50px\">\n        <ion-back-button slot=\"start\" class=\"h-45px\"></ion-back-button>\n        <ion-title class=\"h-50px\">Assessors Report Generator</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"fixed-ion-card-area top-55px\">\n        <ion-row class=\"pl-5 pr-5 h-45px\">\n            <h4 class=\"m-auto\">{{type}} Submission</h4>\n            <ion-button (click)=\"generate_report()\" class=\"p-1\">Generate</ion-button>\n            <!-- style=\"margin-top: -2%;padding: 5px;float: right;\" -->\n        </ion-row>\n        <div class=\"scrollH\">\n            <table class=\"table\">\n                <tr>\n                    <th>No</th>\n                    <th>Required Content</th>\n                    <th>Returned Content</th>\n                    <th>Verification Status</th>\n                </tr>\n                <tr *ngFor=\"let each_row of report_data\">\n                    <td>{{each_row.id}}</td>\n                    <td>{{each_row.key}}</td>\n                    <ng-container *ngIf=\"each_row.val == '0'\">\n                        <td>No</td>\n                    </ng-container>\n                    <ng-container *ngIf=\"each_row.val == '1'\">\n                        <td>Yes</td>\n                    </ng-container>\n                    <ng-container *ngIf=\"each_row.val != '1' && each_row.val != '0'\">\n                        <td>{{each_row.val}}</td>\n                    </ng-container>\n                    <td class=\"d-flex\">\n                        <ng-container *ngIf=\"each_row.status != 1\">\n                            <ion-label color=\"danger\" class=\"w-4rem\">Unverified</ion-label>\n                        </ng-container>\n                        <ng-container *ngIf=\"each_row.status == 1\">\n                            <ion-label color=\"dark\" class=\"w-4rem\">Verified</ion-label>\n                        </ng-container>\n                        <ion-button class=\"title-center p-1 report-verification-btn\" color=\"success\"\n                            (click)=\"change_status(each_row, true)\"><ion-icon\n                                name=\"checkmark-outline\"></ion-icon></ion-button>\n                        <ion-button class=\"title-center p-1 report-verification-btn\" color=\"danger\"\n                            (click)=\"change_status(each_row, false)\"><ion-icon\n                                name=\"close-outline\"></ion-icon></ion-button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n        <ion-card-content>\n            <table class=\"rwd-table\">\n                <tr class=\"text-bold\">\n                    <td data-th=\"Compliance Status\">{{compliance_status}}</td>\n                    <td data-th=\"Compliance Rate\">{{compliance_rate}}</td>\n                </tr>\n            </table>\n        </ion-card-content>\n    </ion-card>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_assessor_reportgenerator_reportgenerator_module_ts.js.map