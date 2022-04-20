(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/home/professional/profile/profile.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/home/professional/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/home/professional/profile/profile.page.html":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-title>My Profile</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button autoHide=\"false\"></ion-menu-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <ion-segment [(ngModel)]=\"segment\" color=\"light\" (ionChange)=\"getlist($event)\">\n        <ion-segment-button value=\"profess\" class=\"dark\" enabled>\n            <ion-icon name=\"business\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Individual</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"business\">\n            <ion-icon name=\"business\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Business</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card *ngSwitchCase=\"'profess'\">\n            <ion-card-content>\n                <strong>Individual Profile\n                    <ion-button size=\"small\" id=\"personal_edit\" class=\"profile_edit\" (click)=\"editPerson()\">\n                        <ng-container *ngIf=\"is_profileEdit\">Cancel Edit</ng-container>\n                        <ng-container *ngIf=\"!is_profileEdit\">Edit Profile</ng-container>\n                    </ion-button>\n                </strong>\n                <ion-row>\n                    <ion-label>Status : </ion-label>\n                    <ng-container *ngIf=\"form.status =='Unverified'\">\n                        <ion-label color=\"danger\">Unverified</ion-label>\n                    </ng-container>\n                    <ng-container *ngIf=\"form.status == 'Verified'\">\n                        <ion-label color=\"success\">Verified</ion-label>\n                    </ng-container>\n                </ion-row>\n            </ion-card-content>\n            <ion-card id=\"profess_profile\" disabled=\"true\" style=\"opacity: 0.55;\">\n                <ion-item>\n                    <ion-label>Are you director in Business?</ion-label>\n                    <ng-container *ngIf=\"is_director\">\n                        <ion-checkbox [(ngModel)]=\"is_director\" checked=\"true\"></ion-checkbox>\n                    </ng-container>\n                    <ng-container *ngIf=\"!is_director\">\n                        <ion-checkbox [(ngModel)]=\"is_director\"></ion-checkbox>\n                    </ng-container>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Name</ion-label>\n                    <ion-input name=\"name\" [(ngModel)]=\"form.name\" value=\"{{form.name}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">SurName</ion-label>\n                    <ion-input name=\"surname\" [(ngModel)]=\"form.surname\" value=\"{{form.surname}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">ID No</ion-label>\n                    <ion-input name=\"id_no\" [(ngModel)]=\"form.id_no\" value=\"{{form.id_no}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Council Membership</ion-label>\n                    <ion-select multiple=\"false\" name=\"council\" [(ngModel)]=\"form.council\" value=\"{{form.council}}\">\n                        <ion-select-option value=\"SACAP\">SACAP</ion-select-option>\n                        <ion-select-option value=\"ECSA\">ECSA</ion-select-option>\n                        <ion-select-option value=\"SACQSP\">SACQSP</ion-select-option>\n                        <ion-select-option value=\"SACPMP\">SACPMP</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Registration No</ion-label>\n                    <ion-input name=\"reg_no\" [(ngModel)]=\"form.reg_no\" value=\"{{form.reg_no}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Employer</ion-label>\n                    <ion-input name=\"employer\" [(ngModel)]=\"form.employer\" value=\"{{form.employer}}\" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload Employer Requirement PDF\n                    </ion-label>\n                    <ion-input name=\"file\" id=\"hfileInput\" type=\"file\" accept=\"application/pdf\"\n                        (change)=\"changeListener($event,'employer')\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Exp In years</ion-label>\n                    <ion-input name=\"exp_year\" [(ngModel)]=\"form.exp_year\" value=\"{{form.exp_year}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Full / Part Time ( Percentage )</ion-label>\n                    <ion-input name=\"full_part\" class=\"full_part\" [(ngModel)]=\"form.full_part\"\n                        value=\"{{form.full_part}}\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Job Title</ion-label>\n                    <ion-input name=\"jtitle\" [(ngModel)]=\"form.jtitle\" value=\"{{form.jtitle}}\"></ion-input>\n                </ion-item>\n                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\" (click)=\"addProfile()\"\n                    style=\"width: 90%;margin: 5%;\">Request Verification\n                    <!-- <ng-container *ngIf=\"form.status =='Unverified'\">Request Verification</ng-container>\n          <ng-container *ngIf=\"form.status == 'Verified'\">Update Profile</ng-container> -->\n                </ion-button>\n            </ion-card>\n        </ion-card>\n        <ion-card *ngSwitchCase=\"'business'\">\n            <ng-container *ngIf=\"is_director==true\">\n                <ion-segment [(ngModel)]=\"business_seg\" color=\"light\" (ionChange)=\"changeOffice($event)\">\n                    <ion-segment-button value=\"head\" class=\"dark\" enabled>\n                        <ion-label class=\"dark\" color=\"dark\" style=\"font-weight: bold;\">Head Office</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"branch\">\n                        <ion-label class=\"dark\" color=\"dark\" style=\"font-weight: bold;\">Branch Offices</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n                <div [ngSwitch]=\"business_seg\">\n                    <ion-card-content *ngSwitchCase=\"'head'\">\n                        <ion-card-content style=\"padding: 0px;\">\n                            <strong>Practice Profile\n                                <ion-button size=\"small\" class=\"business_edit\" (click)=\"editBusiness()\">\n                                    <ng-container *ngIf=\"is_businessEdit\">Cancel Edit</ng-container>\n                                    <ng-container *ngIf=\"!is_businessEdit\">Edit Business</ng-container>\n                                </ion-button>\n                            </strong>\n                            <ion-row>\n                                <strong>Status : </strong>\n                                <ng-container *ngIf=\"pform.status =='Unverified'\">\n                                    <ion-label color=\"danger\">Unverified</ion-label>\n                                </ng-container>\n                                <ng-container *ngIf=\"pform.status == 'Verified'\">\n                                    <ion-label color=\"success\">Verified</ion-label>\n                                </ng-container>\n                            </ion-row>\n                        </ion-card-content>\n                        <ion-card id=\"business_profile\" disabled=\"true\" style=\"opacity: 0.55;\">\n                            <ion-card-content style=\"padding: 0px;\">\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Practice Name</ion-label>\n                                    <ion-input name=\"pname\" [(ngModel)]=\"pform.pname\" value=\"{{pform.pname}}\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Practice Council reg. No</ion-label>\n                                    <ion-input name=\"pcouncil\" [(ngModel)]=\"pform.pcouncil\" value=\"{{pform.pcouncil}}\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">CIPC registration</ion-label>\n                                    <ion-input name=\"pcipc_reg_no\" [(ngModel)]=\"pform.pcipc_reg_no\"\n                                        value=\"{{pform.pcipc_reg_no}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Type of Organization</ion-label>\n                                    <ion-select multiple=\"false\" name=\"ptype\" [(ngModel)]=\"pform.ptype\"\n                                        value=\"{{pform.ptype}}\">\n                                        <ion-select-option value=\"CC\">CC</ion-select-option>\n                                        <ion-select-option value=\"Sole Proprietor\">Sole Proprietor</ion-select-option>\n                                        <ion-select-option value=\"Private\">Private</ion-select-option>\n                                        <ion-select-option value=\"Public\">Public</ion-select-option>\n                                        <ion-select-option value=\"Inc\">Inc</ion-select-option>\n                                        <ion-select-option value=\"Partnership\">Partnership</ion-select-option>\n                                        <ion-select-option value=\"External company\">External Company</ion-select-option>\n                                        <ion-select-option value=\"Business trust\">Business trust</ion-select-option>\n                                    </ion-select>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Directors</ion-label>\n                                    <ion-input name=\"directors\" [(ngModel)]=\"pform.director\" value=\"{{pform.director}}\">\n                                    </ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Director Prof registration No</ion-label>\n                                    <ion-input name=\"directors_prof_regno\" [(ngModel)]=\"pform.dir_prof_regno\"\n                                        value=\"{{pform.dir_prof_regno}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Percentage Owned</ion-label>\n                                    <ion-input name=\"owned\" class=\"full_part\" [(ngModel)]=\"pform.owned\" style=\"border-bottom: solid 1px;\" value=\"{{pform.owned}}\"></ion-input>\n                                    <!-- <ion-input name=\"owned\" class=\"full_part\" [(ngModel)]=\"pform.owned\" value=\"{{pform.owned}}\" (change)=\"checkOwned()\"></ion-input> -->\n                                </ion-item>\n                                <br>\n                            </ion-card-content>\n                            <ion-card-content>\n                                <strong style=\"color:blue\">Head Office Address</strong>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Contact Number</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_number\" [(ngModel)]=\"hform.phone\"\n                                        value=\"{{hform.phone}}\">+</ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Contact Email</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_email\" [(ngModel)]=\"hform.email\"\n                                        value=\"{{hform.email}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Responsible Professional Name</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_res_prof_name\"\n                                        [(ngModel)]=\"hform.res_prof_name\" value=\"{{hform.res_prof_name}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Responsible Professional PR registration</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_res_prof_regno\"\n                                        [(ngModel)]=\"hform.res_prof_reg\" value=\"{{hform.res_prof_reg}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload Pdf to proof the\n                                        address</ion-label>\n                                    <ion-input name=\"file\" id=\"hfileInput\" type=\"file\" accept=\"application/pdf\"\n                                        (change)=\"changeListener($event,'hoffice')\"></ion-input>\n                                </ion-item>\n                                <br>\n                                <ion-card-content style=\"padding: 0px;\">\n                                    <strong style=\"color:blue\">Head Office Staff Info</strong>\n                                    <ion-card-content id=\"ho_staff_area\" style=\"padding: 0px;\">\n                                    </ion-card-content>\n                                    <ion-row>\n                                        <ion-button type=\"button\" color=\"dark\" (click)=\"addStaff()\">Add Head Office\n                                            Staff</ion-button>\n                                        <!-- <ion-button type=\"button\" class=\"business_btn\" color=\"dark\" (click)=\"cancelStaff()\">Cancel last Staff</ion-button> -->\n                                    </ion-row>\n                                </ion-card-content>\n                            </ion-card-content>\n                            <br>\n                            <strong style=\"color:blue\">Branch Office Details</strong>\n                            <ion-card-content id=\"branch_area\" style=\"padding: 0px;\"></ion-card-content>\n                            <ion-row>\n                                <ion-button color=\"dark\" (click)=\"addbranch()\">Add Branch Office</ion-button>\n                                <!-- <ion-button class=\"business_btn\" color=\"dark\" (click)=\"cancelbranch()\">Cancel Last Office</ion-button> -->\n                            </ion-row>\n                            <ion-card-content>\n                                <strong style=\"color:blue\"> Type of Licensed Equipment</strong>\n                                <ion-card-content>\n                                    <strong>Software</strong>\n                                    <ion-card-content id=\"soft_area\">\n                                    </ion-card-content>\n                                    <ion-button id=\"addsoft\" expand=\"block\" type=\"button\" color=\"dark\"\n                                        (click)=\"addsoft()\" style=\"font-size: 12px;\">Add Software</ion-button>\n                                </ion-card-content>\n                                <ion-card-content>\n                                    <strong>Hardware</strong>\n                                    <ion-card-content id=\"hard_area\">\n                                    </ion-card-content>\n                                    <ion-button id=\"addhard\" expand=\"block\" type=\"button\" color=\"dark\"\n                                        (click)=\"addhard()\" style=\"font-size: 12px;\">Add Hardware</ion-button>\n                                </ion-card-content>\n                            </ion-card-content>\n                            <div class=\"ion-padding\">\n                                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                                    (click)=\"addBusiness()\">Request Verification\n                                    <!-- <ng-container *ngIf=\"pform.status =='Unverified'\">Request Verification</ng-container>\n                <ng-container *ngIf=\"pform.status == 'Verified'\">Update Profile</ng-container> -->\n                                </ion-button>\n                            </div>\n                        </ion-card>\n                    </ion-card-content>\n                    <ion-card *ngSwitchCase=\"'branch'\">\n                        <ng-container *ngIf=\"bo_offices.length == 0\">\n                            <h3>There is no Branch Office.</h3>\n                        </ng-container>\n                        <ng-container *ngIf=\"bo_offices.length > 0\">\n                            <ion-card-content id=\"branch_areas\" *ngFor=\"let obj of bo_offices; let i=index;\"\n                                style=\"padding: 0px;\">\n                                <ion-input placeholder=\"Contact Number\" id=\"phone\" name=\"pform_number\"\n                                    [(ngModel)]=\"obj.phone\" value=\"{{obj.phone}}\"></ion-input>\n                                <ion-input placeholder=\"Contact Email\" id=\"email\" name=\"pform_email\"\n                                    [(ngModel)]=\"obj.email\" value=\"{{obj.email}}\"></ion-input>\n                                <ion-input placeholder=\"Responsible Professional Name\" id=\"res_prof_name\"\n                                    name=\"pform_res_prof_name\" [(ngModel)]=\"obj.res_prof_name\"\n                                    value=\"{{obj.res_prof_name}}\"></ion-input>\n                                <ion-input placeholder=\"Responsible Professional PR registration\" id=\"res_prof_no\"\n                                    name=\"pform_res_prof_regno\" [(ngModel)]=\"obj.res_prof_reg\"\n                                    value=\"{{obj.res_prof_reg}}\"></ion-input>\n                                <ion-input placeholder=\"Verification Status\" name=\"pform_ho_status\"\n                                    [(ngModel)]=\"obj.status\" value=\"{{obj.status}}\"></ion-input>\n                                <ion-card-content>\n                                    <strong style=\"color:blue\">Branchs Staff Info</strong>\n                                    <ion-card-content id=\"{{'bstaffs' + i}}\">\n                                    </ion-card-content>\n                                    <ion-button id=\"{{'bstaffbtn' + i}}\" expand=\"block\" type=\"button\" color=\"dark\"\n                                        (click)=\"addbstaff('bstaffs' + i, obj.phone)\">Add Branch Office Staff\n                                    </ion-button>\n                                </ion-card-content>\n                            </ion-card-content>\n                            <div class=\"ion-padding\">\n                                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                                    (click)=\"bstaffs()\">Save Branch Staffs</ion-button>\n                            </div>\n                        </ng-container>\n                    </ion-card>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"is_director==false\">\n                <ion-card-content style=\"padding: 5px;\">\n                    <strong>Business Office\n                        <ion-button size=\"small\" id=\"Buzi_edit\" class=\"editbtn\" (click)=\"editBuzi()\">\n                            <ng-container *ngIf=\"is_nonDirectorEdit\">Cancel Edit</ng-container>\n                            <ng-container *ngIf=\"!is_nonDirectorEdit\">Edit Information</ng-container>\n                        </ion-button>\n                    </strong>\n                    <ion-card id=\"Buzi_info\" disabled=\"true\" style=\"opacity: 0.55;\">\n                        <ion-card-content>\n                            <strong>Select Business Name</strong>\n                            <ion-select multiple=\"false\" id=\"business_list\" [(ngModel)]=\"mybusiness\"\n                                value=\"{{mybusiness}}\"></ion-select>\n                        </ion-card-content>\n                        <ion-card-content>\n                            <strong>Select Office Email</strong>\n                            <ion-select multiple=\"false\" id=\"office_list\" [(ngModel)]=\"myoffice\" value=\"{{myoffice}}\">\n                            </ion-select>\n                        </ion-card-content>\n                    </ion-card>\n                    <div class=\"ion-padding\">\n                        <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                            (click)=\"updateBuzi()\">Save Information</ion-button>\n                    </div>\n                </ion-card-content>\n            </ng-container>\n        </ion-card>\n    </div>\n    <br>\n</ion-content>\n\n<script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n        event.preventDefault();\n        controller.create({\n            header: 'Account Created',\n            message: `Created account for: <b>${firstName} ${lastName}</b>`,\n            buttons: [{\n                text: 'OK'\n            }]\n        }).then(alert => alert.present());\n    }\n    function handleFirstNameValue(event) {\n        firstName = event.target.value;\n    }\n    function handleLastNameValue(event) {\n        lastName = event.target.value;\n    }\n</script>"

/***/ }),

/***/ "./src/app/home/professional/profile/profile.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d; }\n\n.schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px; }\n\n.schedule_btn {\n  margin: auto; }\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%; }\n\n.table th {\n    background: #8a8a8a;\n    padding: 5px;\n    color: #fff;\n    border: 1px solid #fff; }\n\n.table td {\n    background: #ccc;\n    padding: 5px;\n    color: #000;\n    border: 1px solid #fff; }\n\n.scrollH {\n  overflow-x: auto; }\n\n.validation-errors {\n  color: #000; }\n\n.profile_edit {\n  float: right; }\n\n.business_edit {\n  float: right; }\n\n.editbtn {\n  height: 24px;\n  margin-top: -6px;\n  margin-left: 25px; }\n\n.full_part {\n  width: 80px; }\n\n.full_part::after {\n  content: \"%\"; }\n\n.exp_year {\n  width: 80px; }\n\n.exp_year::after {\n  content: \"Years\"; }\n\n.business_btn {\n  font-size: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvZmlsZS9HOlxcaW9uaWNcXGlvbmljX2FwcFxcdmVyaXByb2YtYXBwL3NyY1xcYXBwXFxob21lXFxwcm9mZXNzaW9uYWxcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGNBQXlCLEVBQUE7O0FBRXpCO0VBQ0EsWUFBWTtFQUNaLGlCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUpsQjtJQU1RLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVQ5QjtJQWFRLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVcsRUFBQTs7QUFLZjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHJnYigxMDksIDEwOSwgMTA5KTtcclxuICAgIH1cclxuICAgIC5zY2hlZHVsZV9saW5le1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgIG1hcmdpbi1yaWdodDozMHB4O1xyXG59XHJcbi5zY2hlZHVsZV9idG57XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnRhYmxle1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1pbi13aWR0aDogOTAlO1xyXG4gICAgdGh7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzhhOGE4YTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuXHJcbiAgICB0ZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSCB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbi52YWxpZGF0aW9uLWVycm9yc3tcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5cclxuLy8gRWRpdCBidXR0b24gXHJcbi5wcm9maWxlX2VkaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmJ1c2luZXNzX2VkaXR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmVkaXRidG4ge1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4uZnVsbF9wYXJ0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZnVsbF9wYXJ0OjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiVcIjtcclxufVxyXG5cclxuLmV4cF95ZWFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZXhwX3llYXI6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiWWVhcnNcIjtcclxufVxyXG5cclxuLmJ1c2luZXNzX2J0bntcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/professional/profile/profile.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.ts ***!
  \***********************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/rest-api.service */ "./src/app/services/rest-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(http, httpNative, toastController, authService, restApi) {
        this.http = http;
        this.httpNative = httpNative;
        this.toastController = toastController;
        this.authService = authService;
        this.restApi = restApi;
        this.segment = "profess";
        // segment: string = "business";
        this.business_seg = "head";
        // business_seg: string = "branch";
        this.is_profileEdit = false;
        this.is_businessEdit = false;
        this.is_nonDirectorEdit = false;
        this.is_director = false;
        this.form = {
            name: '',
            surname: '',
            id_no: '',
            council: 'SACAP',
            reg_no: '',
            employer: '',
            employer_requirPDF: '',
            exp_year: '',
            full_part: '25',
            jtitle: '',
            status: 'Unverified',
            is_director: 'false'
        };
        this.pform = {
            pname: '',
            pcouncil: '',
            pcipc_reg_no: '',
            ptype: 'CC',
            director: '',
            dir_prof_regno: '',
            owned: '',
            status: 'Unverified'
        };
        this.hform = {
            phone: '',
            email: '',
            res_prof_name: '',
            res_prof_reg: '',
            filename: '',
            status: 'Unverified'
        };
        this.ho_staff_id = 0;
        this.staffs = [];
        this.soft_id = 0;
        this.softs = [];
        this.hard_id = 0;
        this.hards = [];
        this.bo_id = 0;
        this.bo_offices = [];
        this.bo_staff_id = 0;
        this.pdfs = [];
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getProfile();
        this.getBusiness();
        this.getBranchs();
    };
    // Edit Content Button Setting
    ProfilePage.prototype.editPerson = function () {
        this.is_profileEdit = !this.is_profileEdit;
        var element1 = document.getElementById("profess_profile");
        element1.disabled = !this.is_profileEdit;
        if (this.is_profileEdit) {
            element1.style.opacity = '1';
        }
        else {
            element1.style.opacity = '0.55';
        }
    };
    ProfilePage.prototype.editBusiness = function () {
        this.is_businessEdit = !this.is_businessEdit;
        var element1 = document.getElementById("business_profile");
        element1.disabled = !this.is_businessEdit;
        if (this.is_businessEdit) {
            element1.style.opacity = '1';
        }
        else {
            element1.style.opacity = '0.55';
        }
    };
    ProfilePage.prototype.editBuzi = function () {
        this.is_nonDirectorEdit = !this.is_nonDirectorEdit;
        var element1 = document.getElementById("Buzi_info");
        element1.disabled = this.is_nonDirectorEdit;
        if (this.is_nonDirectorEdit) {
            element1.style.opacity = '1';
        }
        else {
            element1.style.opacity = '0.55';
        }
    };
    //  Add and get Profile
    ProfilePage.prototype.addProfile = function () {
        var _this = this;
        if (this.is_director) {
            this.form.is_director = "1";
        }
        else {
            this.form.is_director = "0";
        }
        var _a = this.form, name = _a.name, surname = _a.surname, council = _a.council, reg_no = _a.reg_no, employer = _a.employer, exp_year = _a.exp_year;
        if (name.length == 0) {
            this.toast("Please fill Name");
            return;
        }
        if (surname.length == 0) {
            this.toast("Please fill Surname");
            return;
        }
        if (council.length == 0) {
            this.toast("Please fill Council Membership");
            return;
        }
        if (reg_no.length == 0) {
            this.toast("Please fill Registration Number");
            return;
        }
        if (employer.length == 0) {
            this.toast("Please fill Employer Name");
            return;
        }
        if (exp_year.length == 0) {
            this.toast("Please fill Exp in Years");
            return;
        }
        if (!this.form.exp_year.includes('year')) {
            this.form.exp_year = this.form.exp_year.concat(" year");
        }
        this.restApi.post('professional/add-profile', { user_id: this.authService.user.userId, data: this.form }).subscribe(function (res) {
            if (res && res.status) {
                console.log(res.result);
                _this.restApi.toast(" Successfully Updated.", 1200);
            }
        }, function (error) {
            _this.restApi.toast("Please fill as correctly.", 1200);
        });
    };
    ProfilePage.prototype.getProfile = function () {
        var _this = this;
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res.status != "noexist") {
                _this.form = res.personal;
                if (_this.form.is_director == "0") {
                    _this.is_director = false;
                }
                else {
                    _this.is_director = true;
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Something went wrong.", 1200);
        });
    };
    //  Business - branch, staff, soft, hardware
    ProfilePage.prototype.addbranch = function () {
        var _this = this;
        var new_branch = "<ion-item><ion-label position='stacked' color='success'>Branch Office No : " + (this.bo_id + 1).toString() + "</ion-label></ion-item><ion-item><ion-label position='stacked'>Contact Number</ion-label><ion-input id='phone" + this.bo_id.toString() + "' >+</ion-input></ion-item><ion-item><ion-label position='stacked'>Contact Email</ion-label><ion-input id='email" + this.bo_id.toString() + "'></ion-input></ion-item><ion-item><ion-label position='stacked'>Responsible Professional Name</ion-label><ion-input id='res_prof_name" + this.bo_id.toString() + "' ></ion-input></ion-item><ion-item><ion-label position='stacked'>Responsible Professional PR registration</ion-label><ion-input id='res_prof_reg" + this.bo_id.toString() + "'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='bfile" + this.bo_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('branch_area').insertAdjacentHTML("beforeend", new_branch);
        var target_element = document.getElementById('bfile' + this.bo_id.toString());
        target_element.addEventListener("change", function (e) { _this.bchange(e); });
        this.bo_id++;
    };
    ProfilePage.prototype.cancelbranch = function () {
        console.log(this.bo_id);
    };
    ProfilePage.prototype.addStaff = function () {
        var new_staff = "<ion-item id='hstaff" + this.ho_staff_id.toString() + "'><ion-label position='stacked' color='success'>Staff No : " + (this.ho_staff_id + 1).toString() + "</ion-label><ion-input placeholder='Name' id='staffname" + this.ho_staff_id.toString() + "' ></ion-input><ion-input placeholder='Surname' id='staffsurname" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Job Title' id='staffjtitle" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Exp in Years' class='exp_year' id='staffexp_year" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Professional registration No' id='staffprof_reg_no" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Contact Phone Number' id='staffphone" + this.ho_staff_id.toString() + "' >+</ion-input><ion-input placeholder='Contact Email' id='staffemail" + this.ho_staff_id.toString() + "'></ion-input><br></ion-item>";
        document.getElementById('ho_staff_area').insertAdjacentHTML("beforeend", new_staff);
        this.ho_staff_id++;
    };
    ProfilePage.prototype.cancelStaff = function () {
        console.log(this.ho_staff_id);
    };
    ProfilePage.prototype.addsoft = function () {
        var _this = this;
        var new_soft = "<ion-item><ion-label position='stacked' color='success'>Software No : " + (this.soft_id + 1).toString() + "</ion-label><ion-input id='softname" + this.soft_id.toString() + "' [(ngModel)]='softs[" + this.soft_id + "]'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='soft" + this.soft_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('soft_area').insertAdjacentHTML("beforeend", new_soft);
        var target_elem = document.getElementById('soft' + this.soft_id.toString());
        target_elem.addEventListener("change", function (e) { _this.bchange(e); });
        this.soft_id++;
    };
    ProfilePage.prototype.addhard = function () {
        var _this = this;
        var new_hard = "<ion-item><ion-label position='stacked' color='success'>Hardware No : " + (this.hard_id + 1).toString() + "</ion-label><ion-input id='hardname" + this.hard_id.toString() + "'  [(ngModel)]='hards[" + this.hard_id + "]'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='hard" + this.hard_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('hard_area').insertAdjacentHTML("beforeend", new_hard);
        var target_elem = document.getElementById('hard' + this.hard_id.toString());
        target_elem.addEventListener("change", function (e) { _this.bchange(e); });
        this.hard_id++;
    };
    // manage datas in office
    ProfilePage.prototype.manage = function () {
        this.softs = [];
        this.hards = [];
        this.staffs = [];
        this.bo_offices = [];
        for (var i = 0; i < this.soft_id; i++) {
            var filename = '';
            for (var j = 0; j < this.pdfs.length; j++) {
                if ('soft' + i.toString() == this.pdfs[j].name) {
                    filename = this.pdfs[j].filename;
                }
            }
            if (filename == '') {
                this.toast("Please upload " + i.toString() + ' Software licence pdf.');
            }
            var name = document.getElementById("softname" + i.toString()).value.toString();
            if (name == null || name == '') {
                "Please input " + i.toString() + ' Software name.';
            }
            this.softs.push({ name: name, filename: filename });
        }
        for (var i = 0; i < this.hard_id; i++) {
            var filename = '';
            for (var j = 0; j < this.pdfs.length; j++) {
                if ('hard' + i.toString() == this.pdfs[j].name) {
                    filename = this.pdfs[j].filename;
                }
            }
            if (filename == '') {
                this.toast("Please upload " + i.toString() + ' Hardware licence pdf.');
            }
            var name = document.getElementById("hardname" + i.toString()).value.toString();
            if (name == null || name == '') {
                "Please input " + i.toString() + ' Hardware name.';
            }
            this.hards.push({ name: name, filename: filename });
        }
        for (var i = 0; i < this.ho_staff_id; i++) {
            try {
                var name = document.getElementById("staffname" + i.toString()).value.toString();
                var surname = document.getElementById("staffsurname" + i.toString()).value.toString();
                var jtitle = document.getElementById("staffjtitle" + i.toString()).value.toString();
                var exp_year = document.getElementById("staffexp_year" + i.toString()).value.toString();
                if (!exp_year.includes('year')) {
                    exp_year = exp_year.concat("year");
                }
                var prof_reg_no = document.getElementById("staffprof_reg_no" + i.toString()).value.toString();
                var phone = document.getElementById("staffphone" + i.toString()).value.toString();
                var email = document.getElementById("staffemail" + i.toString()).value.toString();
                if (name == '' && surname == '' && jtitle == '' && exp_year == '' && prof_reg_no == '' && phone == '' && email == '') {
                    continue;
                }
                else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) {
                    this.toast("Please input validated email.");
                }
                else if (name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == '') {
                    this.toast("Please Fill Gaps");
                }
                this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email });
            }
            catch (error) {
                continue;
            }
        }
        for (var i = 0; i < this.bo_id; i++) {
            var filename = '';
            for (var j = 0; j < this.pdfs.length; j++) {
                if ('bfile' + i.toString() == this.pdfs[j].name) {
                    filename = this.pdfs[j].filename;
                }
            }
            if (filename == '') {
                this.toast("Please upload " + i.toString() + ' Branch Office Address Proof pdf.');
            }
            var phone = document.getElementById("phone" + i.toString()).value.toString();
            var email = document.getElementById("email" + i.toString()).value.toString();
            var res_prof_name = document.getElementById("res_prof_name" + i.toString()).value.toString();
            var res_prof_reg = document.getElementById("res_prof_reg" + i.toString()).value.toString();
            if (phone == '' && email == '' && res_prof_name == '' && res_prof_reg == '') {
                continue;
            }
            else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) {
                this.toast("Please input validated email.");
            }
            else if (name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == '') {
                this.toast("Please Fill Gaps");
            }
            this.bo_offices.push({ phone: phone, email: email, res_prof_name: res_prof_name, res_prof_reg: res_prof_reg, filename: filename, status: "Unverified" });
        }
    };
    ProfilePage.prototype.addBusiness = function () {
        var _this = this;
        for (var x in this.pform) {
            if (x == 'verified_at' || x == 'verified_by' || x == 'id' || x == 'created_by' || x == 'updated_at') {
                continue;
            }
            ;
            if (this.pform[x].length == 0) {
                var name_1 = x.replace('_', ' ');
                return this.toast("Please fill " + name_1 + " of the Business");
            }
        }
        for (var x in this.hform) {
            if (this.hform[x].length == 0) {
                var name_2 = x.replace('_', ' ');
                return this.toast("Please fill " + name_2 + " of the Head Office.");
            }
        }
        this.manage();
        for (var i = 0; i < this.bo_offices.length; i++) {
            for (var x in this.bo_offices[i]) {
                if (this.bo_offices[i][x].length == 0) {
                    var name_3 = x.replace('_', ' ');
                    return this.toast("Please fill " + name_3 + " of the Branch Office.");
                }
            }
        }
        for (var i = 0; i < this.hards.length; i++) {
            for (var x in this.hards[i]) {
                if (this.hards[i][x].length == 0) {
                    var name_4 = x.replace('_', ' ');
                    return this.toast("Please fill " + name_4 + " of the Hardware.");
                }
            }
        }
        for (var i = 0; i < this.softs.length; i++) {
            for (var x in this.softs[i]) {
                if (this.softs[i][x].length == 0) {
                    var name_5 = x.replace('_', ' ');
                    return this.toast("Please fill " + name_5 + " of the Software.");
                }
            }
        }
        // console.log( { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices })
        this.restApi.post('professional/add-business', { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices }).subscribe(function (res) {
            // console.log(res);
            if (res && res.status) {
                _this.restApi.toast(res.message, 1200);
                _this.getBusiness();
                _this.getBranchs();
                _this.segment = 'business';
                _this.business_seg = 'branch';
            }
            else {
                _this.restApi.toast(res.message, 1200);
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast('Please fill as correctly.', 1000);
        });
    };
    ProfilePage.prototype.checkOwned = function () {
        if (parseInt(this.pform.owned) < 50) {
            this.pform.owned = 'Non professional owner';
        }
    };
    ProfilePage.prototype.getBusiness = function () {
        var _this = this;
        this.restApi.post('professional/get-business', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    if (res.data[0].length > 0)
                        _this.pform = res.data[0][0];
                    if (res.data[1].length > 0) {
                        _this.hform = [];
                        var head_office = res.data[1][0];
                        _this.hform['phone'] = head_office['phone'];
                        _this.hform['email'] = head_office['email'];
                        _this.hform['res_prof_name'] = head_office['res_prof_name'];
                        _this.hform['res_prof_reg'] = head_office['res_prof_reg'];
                        _this.hform['filename'] = head_office['filename'];
                        _this.hform['status'] = head_office['status'];
                    }
                    // if ( parseInt(res.data[0]) < 50 ){ this.pform.owned = 'Non professional owner'; } 
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
    ProfilePage.prototype.getBranchs = function () {
        var _this = this;
        this.restApi.post('professional/get-branchs', { user_id: this.authService.user.userId }).subscribe(function (res) {
            if (res && res.status) {
                if (res.status == 'success') {
                    for (var i = 0; i < res.data.length; i++) {
                        var each_office = { phone: res.data[i]['phone'], email: res.data[i]['email'], res_prof_name: res.data[i]['res_prof_name'], res_prof_reg: res.data[i]['res_prof_reg'], filename: res.data[i]['filename'], status: res.data[i]['status'] };
                        _this.bo_offices.push(each_office);
                    }
                }
                else {
                    _this.restApi.toast(res.message, 1000);
                }
            }
        }, function (error) {
            console.log(error);
            _this.restApi.toast("Data connection problem", 1000);
        });
    };
    //  b - branch office
    ProfilePage.prototype.addbstaff = function (id, office_id) {
        var new_staff = "<ion-item><ion-label position='stacked' color='success' class='" + office_id + "' >Staff No : " + (this.bo_staff_id + 1).toString() + "</ion-label></ion-item><ion-input placeholder='Name' id='bstaffname" + this.bo_staff_id.toString() + "' ></ion-input><ion-input placeholder='Surname' id='bstaffsurname" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Job Title' id='bstaffjtitle" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Exp in Years' id='bstaffexp_year" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Professional registration No' id='bstaffprof_reg_no" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Contect Phone Number' id='bstaffphone" + this.bo_staff_id.toString() + "' >+</ion-input><ion-input placeholder='Contact Email' id='bstaffemail" + this.bo_staff_id.toString() + "'></ion-input><br>";
        document.getElementById(id).insertAdjacentHTML("beforeend", new_staff);
        this.bo_staff_id++;
    };
    ProfilePage.prototype.bstaffs = function () {
        var _this = this;
        var bo_staff_id = 0;
        var bstaffs = [];
        this.staffs = [];
        for (var i = 0; i < this.bo_offices.length; i++) {
            var eachOffice = document.getElementsByClassName(this.bo_offices[i].phone);
            console.log(this.bo_offices[i], this.bo_offices[i].phone, eachOffice.length);
            for (var j = 0; j < eachOffice.length; j++) {
                try {
                    var name = document.getElementById("bstaffname" + bo_staff_id.toString()).value.toString();
                    var surname = document.getElementById("bstaffsurname" + bo_staff_id.toString()).value.toString();
                    var jtitle = document.getElementById("bstaffjtitle" + bo_staff_id.toString()).value.toString();
                    var exp_year = document.getElementById("bstaffexp_year" + bo_staff_id.toString()).value.toString();
                    if (!exp_year.includes('year')) {
                        exp_year = exp_year.concat("year");
                    }
                    var prof_reg_no = document.getElementById("bstaffprof_reg_no" + bo_staff_id.toString()).value.toString();
                    var phone = document.getElementById("bstaffphone" + bo_staff_id.toString()).value.toString();
                    var email = document.getElementById("bstaffemail" + bo_staff_id.toString()).value.toString();
                    // if ( name == '' && surname == '' && jtitle == '' && exp_year == '' && prof_reg_no == '' && phone == '' && email == '' ){ continue; }
                    // else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true){ this.toast("Please input validated email."); }
                    // else if ( name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == ''){ this.toast("Please Fill Gaps"); }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email });
                    bo_staff_id++;
                }
                catch (error) {
                    bo_staff_id++;
                    console.log(" --------------- ", error);
                }
            }
            bstaffs.push(this.staffs);
            this.staffs = [];
        }
        this.restApi.post('professional/add-bstaffs', { all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices }).subscribe(function (res) {
            if (res && res.status) {
                _this.toastController.create({
                    message: res.data,
                    duration: 2000
                }).then(function (toast) { return toast.present(); });
                console.log(res.data);
                // this.getBusiness();
                // this.getBranchs();
                // this.segment = 'business';
                // this.business_seg = 'branch';
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    ProfilePage.prototype.getlist = function (event) {
        var _this = this;
        this.is_profileEdit = false;
        this.is_businessEdit = false;
        if (this.is_director == true && event.detail.value == "business") {
            this.restApi.post('professional/get-list', { user_id: this.authService.user.userId }).subscribe(function (res) {
                if (res && res.status) {
                    if (!_this.is_director) {
                        for (var i = 0; i < res.data[0].length; i++) {
                            var new_buzi = '<ion-select-option value="' + (i + 1).toString() + '">' + (res.data[0])[i].pname + "(" + (res.data[0])[i].status + ")" + '</ion-select-option>';
                            document.getElementById("business_list").insertAdjacentHTML("beforeend", new_buzi);
                        }
                        for (var j = 0; j < res.data[1].length; j++) {
                            var new_office = '<ion-select-option value="' + (j + 1).toString() + '">' + (res.data[1])[j].email + "(" + (res.data[1])[j].status + ")" + '</ion-select-option>';
                            document.getElementById("office_list").insertAdjacentHTML("beforeend", new_office);
                        }
                    }
                    if (res.data[2].length > 0) {
                        var ids = res.data[2][0];
                        _this.mybusiness = ids.buzi_id;
                        _this.myoffice = ids.office_id;
                    }
                }
            }, function (error) {
                console.log(error, "here");
                _this.restApi.toast('Something went wrong.', 1200);
            });
        }
    };
    ProfilePage.prototype.changeOffice = function (event) {
        this.is_businessEdit = false;
        this.is_nonDirectorEdit = false;
    };
    // Non director
    ProfilePage.prototype.updateBuzi = function () {
        var _this = this;
        console.log(this.mybusiness, this.myoffice);
        this.restApi.post('professional/save-id', { user_id: this.authService.user.userId, buzi_id: this.mybusiness, office_id: this.myoffice }).subscribe(function (res) {
            console.log(res.data);
            if (res && res.status == "success") {
                console.log(res.data);
            }
        }, function (error) {
            _this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(function (toast) { return toast.present(); });
        });
    };
    ProfilePage.prototype.bchange = function (event) {
        this.file = event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file, event.path[1].id);
        }
        else {
            this.toast("Only PDF supported");
        }
    };
    ProfilePage.prototype.changeListener = function (event, key) {
        this.file = event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file, key);
        }
        else {
            this.toast("Only PDF supported");
        }
    };
    ProfilePage.prototype.uploadFile = function (file, key) {
        var _this = this;
        this.restApi.postFile(file, '/upload-file').subscribe(function (res) {
            if (res && res.status && res.status == 'success') {
                if (key == 'hoffice') {
                    _this.hform.filename = res.filename;
                }
                else if (key == 'employer') {
                    _this.form.employer_requirPDF = res.filename;
                }
                else {
                    _this.pdfs.push({ name: key, filename: res.filename });
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ProfilePage.prototype.toast = function (message) {
        this.toastController.create({
            message: message,
            duration: 2000
        }).then(function (toast) { return toast.present(); });
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/home/professional/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/home/professional/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticateService"], src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map