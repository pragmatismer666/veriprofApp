(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reportgenerator-reportgenerator-module"],{

/***/ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReportgeneratorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportgeneratorPageModule", function() { return ReportgeneratorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reportgenerator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportgenerator.page */ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.ts");







var routes = [
    {
        path: '',
        component: _reportgenerator_page__WEBPACK_IMPORTED_MODULE_6__["ReportgeneratorPage"]
    }
];
var ReportgeneratorPageModule = /** @class */ (function () {
    function ReportgeneratorPageModule() {
    }
    ReportgeneratorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reportgenerator_page__WEBPACK_IMPORTED_MODULE_6__["ReportgeneratorPage"]]
        })
    ], ReportgeneratorPageModule);
    return ReportgeneratorPageModule;
}());



/***/ }),

/***/ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n      <ion-back-button slot=\"start\"></ion-back-button>\n      <ion-title>Assessors Report Generator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"report-padding\">\n    <h4 class=\"report-padding\">{{type}} Submission\n        <ion-button (click)=\"generate_report()\" style=\"margin-top: -2%;padding: 5px;float: right;\">Generate</ion-button>\n    </h4>\n    <div class=\"scrollH report-padding\">\n        <table class=\"table\">\n            <tr>\n                <th>Verify</th>\n                <th>Content</th>\n                <th>Value</th>\n            </tr>\n            <tr *ngFor=\"let each_row of report_data\">\n                <td>\n                    <ion-checkbox class=\"title-center\" color=\"primary\" (ionChange)=\"change_status(each_row, $event)\"></ion-checkbox>\n                </td>\n                <td>{{each_row.key}}</td>\n                <td>{{each_row.val}}</td>\n            </tr>\n        </table>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-color: #363636; }\n\nion-content ion-card ion-item {\n  border-style: none; }\n\n.table {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: auto;\n  font-size: 11px; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff;\n    font-size: 13px;\n    width: 35%; }\n\n.table td {\n    background: #ccc;\n    width: 35%;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  position: fixed;\n  height: 80%;\n  overflow: scroll;\n  width: 95%; }\n\n.report-padding {\n  padding-left: 5%;\n  padding-right: 5%; }\n\n.title-center {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hc3Nlc3Nvci9hY2Nlc3NvcnNyZXBvcnQvcmVwb3J0Z2VuZXJhdG9yL0c6XFxpb25pY1xcaW9uaWNfYXBwXFx2ZXJpcHJvZi1hcHAvc3JjXFxhcHBcXGhvbWVcXGFzc2Vzc29yXFxhY2Nlc3NvcnNyZXBvcnRcXHJlcG9ydGdlbmVyYXRvclxccmVwb3J0Z2VuZXJhdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBRXZCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBTm5CO0lBUVEsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixVQUFVLEVBQUE7O0FBYmxCO0lBaUJRLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0IsRUFBQTs7QUFJOUI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Fzc2Vzc29yL2FjY2Vzc29yc3JlcG9ydC9yZXBvcnRnZW5lcmF0b3IvcmVwb3J0Z2VuZXJhdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVte1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXHJcblxyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbn1cclxuXHJcbi5yZXBvcnQtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuLy8gdGV4dCBjZW50ZXIgYWxpZ25cclxuLnRpdGxlLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ReportgeneratorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportgeneratorPage", function() { return ReportgeneratorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");





var ReportgeneratorPage = /** @class */ (function () {
    function ReportgeneratorPage(activatedRoute, router, restApi, authService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.restApi = restApi;
        this.authService = authService;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.type) {
                _this.type = params.type[0].toUpperCase() + params.type.slice(1);
            }
            if (params && params.data) {
                _this.data = JSON.parse(params.data);
                var keys = [];
                for (var key in _this.data) {
                    keys.push(key);
                }
                var datas = [];
                var continue_index = 0;
                for (var i = 0; i < keys.length; i++) {
                    var val_str = '';
                    if (keys[i] == "id" || keys[i] == "created_by" || keys[i] == "file" || keys[i] == "certificate" || keys[i] == "id_no" || keys[i] == "user_id" || keys[i] == "is_director" || keys[i] == "verified_at" || keys[i] == "verified_by" || keys[i] == "verify_at" || keys[i] == "verify_by" || keys[i] == "updated_at" || keys[i] == "file" || keys[i] == "employer_requirPDF") {
                        if (keys[i] == "created_by" || keys[i] == "user_id") {
                            _this.profess_id = _this.data[keys[i]];
                        }
                        continue_index++;
                        continue;
                    }
                    else if (keys[i] == "jtitle") {
                        val_str = "JOB TITLE ";
                    }
                    else if (keys[i].includes('_')) {
                        var val_strs = keys[i].split('_');
                        if (val_strs.length > 2) {
                            for (var i_1 = 0; i_1 < val_strs.length; i_1++) {
                                val_str += val_strs[i_1].toUpperCase() + " ";
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
                    var each_row = { id: i + 1 - continue_index, key: val_str, val: _this.data[keys[i]], status: 0 };
                    datas.push(each_row);
                }
                _this.report_data = datas;
            }
        });
    }
    ReportgeneratorPage.prototype.ngOnInit = function () {
    };
    ReportgeneratorPage.prototype.generate_report = function () {
        var _this = this;
        this.restApi.post('accessor/add-report', { accessor: this.authService.user.name, profess: this.profess_id, report_type: this.type, data: this.report_data, created_by: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    _this.restApi.toast('Generate the report PDF as successfully.', 1200);
                    _this.router.navigateByUrl('home/assessor/accessorsreport');
                }
                else {
                    _this.restApi.toast('Please retry to generate the report .', 1200);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    ReportgeneratorPage.prototype.change_status = function (each_row, status) {
        if (status.detail.checked) {
            if (this.report_data[each_row.id] != null)
                this.report_data[each_row.id].status = 1;
        }
        else {
            if (this.report_data[each_row.id] != null)
                this.report_data[each_row.id].status = 0;
        }
    };
    ReportgeneratorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reportgenerator',
            template: __webpack_require__(/*! ./reportgenerator.page.html */ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.html"),
            styles: [__webpack_require__(/*! ./reportgenerator.page.scss */ "./src/app/home/assessor/accessorsreport/reportgenerator/reportgenerator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticateService"]])
    ], ReportgeneratorPage);
    return ReportgeneratorPage;
}());



/***/ })

}]);
//# sourceMappingURL=reportgenerator-reportgenerator-module.js.map