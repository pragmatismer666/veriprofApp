(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"],{

/***/ "./src/app/home/professional/project/project.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/project/project.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.page */ "./src/app/home/professional/project/project.page.ts");







var routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]
    }
];
var ProjectPageModule = /** @class */ (function () {
    function ProjectPageModule() {
    }
    ProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
        })
    ], ProjectPageModule);
    return ProjectPageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/project/project.page.html":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/project/project.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>My Projects</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <br>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\">\n        <ion-segment-button value=\"add-circle\">\n            <ion-icon name=\"add-circle\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Add New</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"paper\">\n            <ion-icon name=\"paper\" color=\"dark\"></ion-icon>\n            <ion-label color=\"dark\">Projects</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'paper'\">\n            <ion-card-content>\n                <h1>My Projects</h1>\n                <table class=\"rwd-table\">\n                    <ng-container *ngIf=\"loadData.length > 0\">\n                        <tr *ngFor=\"let x of loadData\">\n                            <td data-th=\"Project Title\">{{x.title}}</td>\n                            <td data-th=\"Project Type\">{{x.type}}</td>\n                            <td data-th=\"ERF / Lot No\">{{x.proj_street1}}</td>\n                            <td data-th=\"GPS Coordinates\">{{x.proj_street2}}</td>\n                            <td data-th=\"Street Address\">{{x.proj_street3}}</td>\n                            <td data-th=\"Project Location\">R {{x.proj_city}}</td>\n                            <td data-th=\"Project State\">{{x.proj_state}}</td>\n                            <td data-th=\"Portal Code\">{{x.proj_zip}}</td>\n                            <td data-th=\"Description\">{{x.description}}</td>\n                            <td data-th=\"Service Rendered\">{{x.prof_type}}</td>\n                            <td data-th=\"Construction Cost\">R{{x.const_cost}}</td>\n                            <td data-th=\"Cost Variance\">{{x.variable}}% over budget</td>\n                            <td data-th=\"Professional Fees\">R{{x.prof_cost}}</td>\n                            <td data-th=\"Client Name\">{{x.client_name}}</td>\n                            <td data-th=\"Project Leader\">{{x.pl_name}}</td>\n                            <td data-th=\"Leader Email\">{{x.pl_email}}</td>\n                            <td data-th=\"Leader Phone\">{{x.pl_phone}}</td>\n                            <td data-th=\"Start Year\">{{x.year}}</td>\n                            <td data-th=\"Document\">\n                                <ng-container *ngIf=\"x.file != ''\">\n                                    <ion-button size=\"small\" color=\"success\" style=\"height: 1.2rem;margin-top: -10px;\" (click)=\"download(x.file)\">Download</ion-button>\n                                </ng-container>\n                                <ng-container *ngIf=\"x.file == ''\">There is no document.</ng-container>                      \n                            </td>\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\n                                <td data-th=\"Final Cost\">R{{x.final_cost}}</td>\n                                <td data-th=\"Completed Date\" style=\"color: blue;\">{{x.completed_at}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Ongoing'\">\n                                <td data-th=\"Completed Date\" style=\"color: rgb(0, 0, 0);\">{{x.status}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Cancelled'\">\n                                <td data-th=\"Cancelled Date\" style=\"color: rgb(255, 0, 0);\">{{x.completed_at}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Completed'\">\n                                <td data-th=\"Project Status\" style=\"color: blue;\">{{x.status}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Ongoing'\">\n                                <td data-th=\"Project Status\" style=\"color: rgb(0, 0, 0);\">{{x.status}}</td>\n                            </ng-container>\n                            <ng-container *ngIf=\"x.status == 'Cancelled'\">\n                                <td data-th=\"Project Status\" style=\"color: rgb(255, 0, 0);\">{{x.status}}</td>\n                            </ng-container>\n                            <ion-button size=\"small\" color=\"success\" class=\"project_verify\"\n                                (click)=\"action(x, 'Completed')\">Complete</ion-button>\n                            <ion-button size=\"small\" style=\"color: blue;\" class=\"project_verify\"\n                                (click)=\"action(x, 'Ongoing')\">Ongoing</ion-button>\n                            <ion-button size=\"small\" color=\"danger\" class=\"project_verify\"\n                                (click)=\"action(x, 'Cancelled')\">Cancelled</ion-button>\n                        </tr>\n                    </ng-container>\n                    <ng-container *ngIf=\"loadData.length == 0\">\n                        <div class=\"text-center\">No Project</div>\n                    </ng-container>\n                </table>\n            </ion-card-content>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'add-circle'\">\n            <ion-card-content>\n                <ion-item>\n                    <ion-label position=\"stacked\">New Project Title </ion-label>\n                    <ion-input type=\"text\" name=\"title\" [(ngModel)]=\"form.title\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"floating\">Description</ion-label>\n                    <ion-textarea [(ngModel)]=\"form.description\"></ion-textarea>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Service Rendered</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.prof_type\">\n                        <ion-select-option value=\"Project Manager\">Project Manager</ion-select-option>\n                        <ion-select-option value=\"Principal Agent\">Principal Agent</ion-select-option>\n                        <ion-select-option value=\"Architect\">Architect</ion-select-option>\n                        <ion-select-option value=\"Quantity Surveyor\">Quantity Surveyor</ion-select-option>\n                        <ion-select-option value=\"Civil Eng\">Civil Eng</ion-select-option>\n                        <ion-select-option value=\"Structural Eng\">Structural Eng</ion-select-option>\n                        <ion-select-option value=\"Mechanical Eng\">Mechanical Eng</ion-select-option>\n                        <ion-select-option value=\"Electrical Eng\">Electrical Eng</ion-select-option>\n                        <ion-select-option value=\"OHS agent\">OHS agent</ion-select-option>\n                        <ion-select-option value=\"Plumber\">Plumber</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Select Project Type</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.type\">\n                        <ion-select-option value=\"Residential\">Residential</ion-select-option>\n                        <ion-select-option value=\"Multi-residential\">Multi-residential</ion-select-option>\n                        <ion-select-option value=\"Interior\">Interior</ion-select-option>\n                        <ion-select-option value=\"Library\">Library</ion-select-option>\n                        <ion-select-option value=\"Hospital\">Hospital</ion-select-option>\n                        <ion-select-option value=\"Office Parks\">Office Parks</ion-select-option>\n                        <ion-select-option value=\"Guest House\">Guest House</ion-select-option>\n                        <ion-select-option value=\"Multi purpose Hall\">Multi purpose Hall</ion-select-option>\n                        <ion-select-option value=\"Mall\">Mall</ion-select-option>\n                        <ion-select-option value=\"RDP Housing\">RDP Housing</ion-select-option>\n                        <ion-select-option value=\"Township Market Development\">Township Market Development\n                        </ion-select-option>\n                        <ion-select-option value=\"Road Paving\">Road Paving</ion-select-option>\n                        <ion-select-option value=\"Road Construction\">Road Construction</ion-select-option>\n                        <ion-select-option value=\"Bridge\">Bridge</ion-select-option>\n                        <ion-select-option value=\"Sport Center Development\">Sport Center Development</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Construction Cost(R, Input Only Number) : </ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.const_cost\" min=\"0\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Fees(R, Input Only Number) : </ion-label>\n                    <ion-input type=\"text\" [(ngModel)]=\"form.prof_cost\" min=\"0\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Select Project Status</ion-label>\n                    <ion-select multiple=\"false\" [(ngModel)]=\"form.status\" (ionChange)=\"change_status($event)\">\n                        <ion-select-option value=\"Ongoing\">Ongoing</ion-select-option>\n                        <ion-select-option value=\"Completed\">Completed</ion-select-option>\n                        <ion-select-option value=\"Cancelled\">Cancelled</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ng-container *ngIf=\"complete_flag\">\n                    <ion-item>\n                        <ion-label position=\"stacked\">Final Cost(R, Input Only Number) : </ion-label>\n                        <ion-input type=\"text\" [(ngModel)]=\"form.final_cost\" min=\"0\"></ion-input>\n                    </ion-item>\n                </ng-container>\n                <ion-item>\n                    <ion-label position=\"stacked\">Start Date</ion-label>\n                    <ion-input type=\"date\" placeholder=\"Mon/Day/Year\" [(ngModel)]=\"form.year\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Construction Complete Date</ion-label>\n                    <ion-input type=\"date\" placeholder=\"Mon/Day/Year\" [(ngModel)]=\"form.completed_at\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Client Name</ion-label>\n                    <ion-input name=\"client_name\" [(ngModel)]=\"form.client_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Name</ion-label>\n                    <ion-input name=\"pl_name\" [(ngModel)]=\"form.pl_name\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Email</ion-label>\n                    <ion-input name=\"pl_email\" [(ngModel)]=\"form.pl_email\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Project Leader Phone Number</ion-label>\n                    <ion-input name=\"pl_phone\" minlength=\"11\" [(ngModel)]=\"form.pl_phone\">+</ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Project Location</ion-label>\n                    <ion-item>\n                        <ion-label position=\"stacked\"></ion-label>\n                        <ion-input placeholder=\"ERF /Lot No\" name=\"proj_street1\" [(ngModel)]=\"form.proj_street1\">\n                        </ion-input>\n                        <ion-input placeholder=\"GPS Coordinates\" name=\"proj_street2\" [(ngModel)]=\"form.proj_street2\">\n                        </ion-input>\n                        <ion-input placeholder=\"Street Address\" name=\"proj_street3\" [(ngModel)]=\"form.proj_street3\">\n                        </ion-input>\n                        <ion-input placeholder=\"City\" name=\"proj_city\" [(ngModel)]=\"form.proj_city\"></ion-input>\n                        <ion-input placeholder=\"State\" name=\"proj_state\" [(ngModel)]=\"form.proj_state\"></ion-input>\n                        <ion-input placeholder=\"Postal Code\" name=\"proj_zip\" [(ngModel)]=\"form.proj_zip\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload PDF Copy of plan - FILE PLAN\n                    </ion-label>\n                    <ion-item>\n                        <ion-input name=\"file\" id=\"myFileInput\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event)\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-button (click)=\"addProjects()\" style=\"width: 90%;margin: 10px;\">Save Project</ion-button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n    <br />\n</ion-content>\n<ion-footer color=\"dark\" class=\"footer\">\n    <ion-toolbar color=\"\">\n        <ion-title class=\"footer\">Copyright SIVAGO </ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/professional/project/project.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/project/project.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n.list {\n  font-size: 11px; }\n\nbody {\n  padding: 0 2em;\n  font-family: Montserrat, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n  color: #444;\n  background: #eee;\n  font-size: 10 px; }\n\n.project_verify {\n  padding: 2px;\n  height: 1.9rem;\n  margin: 0rem; }\n\n.rwd-table {\n  margin: 1em 0;\n  min-width: 600px; }\n\n.rwd-table tr {\n    border-top: 1px solid #ddd;\n    border-bottom: 1px solid #ddd; }\n\n.rwd-table th {\n    display: none; }\n\n.rwd-table td {\n    display: block; }\n\n.rwd-table td:first-child {\n      padding-top: .5em; }\n\n.rwd-table td:last-child {\n      padding-bottom: .5em; }\n\n.rwd-table td:before {\n      content: attr(data-th) \": \";\n      font-weight: bold;\n      width: 9.3em;\n      display: inline-block; }\n\n@media (min-width: 800px) {\n        .rwd-table td:before {\n          display: none; } }\n\n.rwd-table th,\n  .rwd-table td {\n    text-align: left; }\n\n@media (min-width: 800px) {\n      .rwd-table th,\n      .rwd-table td {\n        display: table-cell;\n        padding: .25em .5em; }\n        .rwd-table th:first-child,\n        .rwd-table td:first-child {\n          padding-left: 0; }\n        .rwd-table th:last-child,\n        .rwd-table td:last-child {\n          padding-right: 0; } }\n\n.rwd-table h1 {\n    font-weight: normal;\n    letter-spacing: -1px;\n    color: #34495E; }\n\n.rwd-table .rwd-table {\n    background: #34495E;\n    color: #fff;\n    border-radius: .4em;\n    overflow: hidden; }\n\n.rwd-table .rwd-table tr {\n      border-color: #46637f; }\n\n.rwd-table .rwd-table th,\n    .rwd-table .rwd-table td {\n      margin: .5em 1em; }\n\n@media (min-width: 800px) {\n        .rwd-table .rwd-table th,\n        .rwd-table .rwd-table td {\n          padding: 1em !important; } }\n\n.rwd-table .rwd-table th,\n    .rwd-table .rwd-table td:before {\n      color: #dd5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvamVjdC9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxwcm9mZXNzaW9uYWxcXHByb2plY3RcXHByb2plY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksZUFBZSxFQUFBOztBQUluQjtFQUNJLGNBQTZCO0VBQzdCLG1DQUE4QztFQUM5QyxtQ0FBbUM7RUFDbkMsa0NBQTBDO0VBQzFDLFdBQTRCO0VBQzVCLGdCQUE0QjtFQUM1QixnQkFBNkIsRUFBQTs7QUFLakM7RUFDSSxZQUFZO0VBQ1osY0FBZTtFQUNmLFlBQWEsRUFBQTs7QUFHakI7RUFDSSxhQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFGcEI7SUFLUSwwQkFBNkI7SUFDN0IsNkJBQTZCLEVBQUE7O0FBTnJDO0lBVVEsYUFBYSxFQUFBOztBQVZyQjtJQWNRLGNBQWMsRUFBQTs7QUFkdEI7TUFpQlksaUJBQWlCLEVBQUE7O0FBakI3QjtNQXFCWSxvQkFBb0IsRUFBQTs7QUFyQmhDO01BeUJZLDJCQUE4QjtNQUM5QixpQkFBaUI7TUFHakIsWUFBYztNQUNkLHFCQUFxQixFQUFBOztBQUdyQjtRQWpDWjtVQWtDZ0IsYUFBYSxFQUFBLEVBRXBCOztBQXBDVDs7SUF5Q1EsZ0JBQWdCLEVBQUE7O0FBRWhCO01BM0NSOztRQTRDWSxtQkFBbUI7UUFDbkIsbUJBQW1CLEVBQUE7UUE3Qy9COztVQWdEZ0IsZUFBZSxFQUFBO1FBaEQvQjs7VUFvRGdCLGdCQUFnQixFQUFBLEVBQ25COztBQXJEYjtJQTJEUSxtQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGNBQXVCLEVBQUE7O0FBN0QvQjtJQWlFUSxtQkFBc0I7SUFDdEIsV0FBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFxQixFQUFBOztBQXBFN0I7TUF1RVkscUJBQW1DLEVBQUE7O0FBdkUvQzs7TUE0RVksZ0JBQWdCLEVBQUE7O0FBRWhCO1FBOUVaOztVQStFZ0IsdUJBQXVCLEVBQUEsRUFFOUI7O0FBakZUOztNQXFGWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Byb2Zlc3Npb25hbC9wcm9qZWN0L3Byb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yICAgIDogcmdiKDEwOSwgMTA5LCAxMDkpO1xufVxuXG4ubGlzdCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuXG59XG5cbmJvZHkge1xuICAgIHBhZGRpbmcgICAgICAgICAgICAgICA6IDAgMmVtO1xuICAgIGZvbnQtZmFtaWx5ICAgICAgICAgICA6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgdGV4dC1yZW5kZXJpbmcgICAgICAgIDogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIGNvbG9yICAgICAgICAgICAgICAgICA6ICM0NDQ7XG4gICAgYmFja2dyb3VuZCAgICAgICAgICAgIDogI2VlZTtcbiAgICBmb250LXNpemUgICAgICAgICAgICAgOiAxMCBweDtcbn1cblxuJGJyZWFrcG9pbnQtYWxwaGE6IDgwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xuXG4ucHJvamVjdF92ZXJpZnkge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBoZWlnaHQgOiAxLjlyZW07XG4gICAgbWFyZ2luIDogMHJlbTtcbn1cblxuLnJ3ZC10YWJsZSB7XG4gICAgbWFyZ2luICAgOiAxZW0gMDtcbiAgICBtaW4td2lkdGg6IDYwMHB4OyAvLyBhZGp1c3QgdG8geW91ciBuZWVkc1xuXG4gICAgdHIge1xuICAgICAgICBib3JkZXItdG9wICAgOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgICBkaXNwbGF5OiBub25lOyAvLyBmb3IgYWNjZXNzaWJpbGl0eSwgdXNlIGEgdmlzdWFsbHkgaGlkZGVuIG1ldGhvZCBoZXJlIGluc3RlYWQhICBcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50ICAgIDogYXR0cihkYXRhLXRoKVwiOiBcIjsgLy8gd2hvIGtuZXcgeW91IGNvdWxkIGRvIHRoaXM/IFRoZSBpbnRlcm5ldCwgdGhhdCdzIHdoby5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgICAvLyBvcHRpb25hbCBzdHVmZiB0byBtYWtlIGl0IGxvb2sgbmljZXJcbiAgICAgICAgICAgIHdpZHRoICA6IDkuM2VtOyAvLyBtYWdpYyBudW1iZXIgOiggYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIG93biBjb250ZW50XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAvLyBlbmQgb3B0aW9uc1xuXG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtYWxwaGEpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XG5cbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgOiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xuICAgICAgICBjb2xvciAgICAgICAgIDogIzM0NDk1RTtcbiAgICB9XG5cbiAgICAucndkLXRhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZCAgIDogIzM0NDk1RTtcbiAgICAgICAgY29sb3IgICAgICAgIDogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjRlbTtcbiAgICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xuXG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigjMzQ0OTVFLCAxMCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGgsXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIG1hcmdpbjogLjVlbSAxZW07XG5cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1hbHBoYSkge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGgsXG4gICAgICAgIHRkOmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogI2RkNTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/professional/project/project.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/project/project.page.ts ***!
  \***********************************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ProjectPage = /** @class */ (function () {
    function ProjectPage(restApi, authService, toastController) {
        this.restApi = restApi;
        this.authService = authService;
        this.toastController = toastController;
        this.segment = "paper";
        this.name = "any";
        this.complete_flag = false;
        this.loadData = [];
        this.form = {
            title: '',
            prof_type: '',
            type: 'Residential',
            const_cost: '',
            final_cost: '0',
            variable: '',
            prof_cost: '',
            year: '',
            completed_at: '',
            description: '',
            client_name: '',
            pl_name: '',
            pl_email: '',
            pl_phone: '',
            proj_street1: '',
            proj_street2: '',
            proj_city: '',
            proj_state: '',
            proj_zip: '',
            status: 'Ongoing',
            file: ''
        };
    }
    ProjectPage.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectPage.prototype.getProjects = function () {
        var _this = this;
        this.restApi.post('professional/get-project', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.loadData = res.data;
                }
                else {
                    _this.restApi.toast(res.message, 1200);
                }
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    ProjectPage.prototype.addProjects = function () {
        var _this = this;
        var _a = this.form, title = _a.title, prof_type = _a.prof_type, const_cost = _a.const_cost, variable = _a.variable, prof_cost = _a.prof_cost, year = _a.year, completed_at = _a.completed_at, description = _a.description, client_name = _a.client_name, pl_name = _a.pl_name, pl_email = _a.pl_email, pl_phone = _a.pl_phone, proj_street1 = _a.proj_street1, proj_street2 = _a.proj_street2, proj_city = _a.proj_city, proj_state = _a.proj_state, proj_zip = _a.proj_zip, file = _a.file;
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
        if (year.length == 0) {
            this.restApi.toast("Please fill Start Date", 1200);
            return;
        }
        if (completed_at.length == 0) {
            this.restApi.toast("Please fill Construction Complete Date", 1200);
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
        if (proj_street1.length == 0) {
            this.restApi.toast("Please fill Project Location Street1", 1200);
            return;
        }
        if (proj_street2.length == 0) {
            this.restApi.toast("Please fill Project Location Street2", 1200);
            return;
        }
        if (proj_city.length == 0) {
            this.restApi.toast("Please fill Project Location City", 1200);
            return;
        }
        if (proj_state.length == 0) {
            this.restApi.toast("Please fill Project Location State", 1200);
            return;
        }
        if (proj_zip.length == 0) {
            this.restApi.toast("Please fill Project Location Zipcode", 1200);
            return;
        }
        if (file.length == 0) {
            this.restApi.toast("Please input project document.", 1200);
            return;
        }
        // if (!this.form.const_cost.includes('R')) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes('R')) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        this.form.variable = ((parseInt(const_cost)) / (parseInt(const_cost) + parseInt(prof_cost)) * 100).toString();
        this.restApi.post('professional/add-project', { user_id: this.authService.user.userId, data: this.form }).subscribe(function (res) {
            if (res && res.status) {
                _this.restApi.toast(res.message, 1200);
                if (res.id != "exist") {
                    _this.getProjects();
                    _this.segment = 'paper';
                }
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    ProjectPage.prototype.action = function (x, act) {
        var _this = this;
        this.restApi.post('professional/action-project', { title: x.title, user_id: x.created_by, verified: act }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    _this.getProjects();
                }
                else {
                    _this.restApi.toast(res.message, 1200);
                }
            }
        }, function (error) {
            _this.restApi.toast('Something went wrong.', 1200);
        });
    };
    ProjectPage.prototype.change_status = function (event) {
        if (event.detail.value == "Completed") {
            this.complete_flag = true;
        }
    };
    ProjectPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file);
        }
        else {
            this.restApi.toast("Only PDF supported", 1200);
        }
    };
    ProjectPage.prototype.uploadFile = function (file) {
        var _this = this;
        this.restApi.postFile(file, '/upload-file').subscribe(function (res) {
            if (res && res.status && res.status == 'success') {
                _this.form.file = res.filename;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProjectPage.prototype.download = function (filename) {
        this.restApi.downfile('uploads/', filename);
    };
    ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.page.html */ "./src/app/home/professional/project/project.page.html"),
            styles: [__webpack_require__(/*! ./project.page.scss */ "./src/app/home/professional/project/project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ProjectPage);
    return ProjectPage;
}());



/***/ })

}]);
//# sourceMappingURL=project-project-module.js.map