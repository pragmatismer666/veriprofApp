"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_professional_profile_profile_module_ts"],{

/***/ 566:
/*!*************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 3333);







const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 3333:
/*!***********************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page.html?ngResource */ 7981);
/* harmony import */ var _profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss?ngResource */ 5522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authentication.service */ 7053);
/* harmony import */ var src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest-api.service */ 4714);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);








let ProfilePage = class ProfilePage {
    constructor(http, toastController, authService, restApi) {
        this.http = http;
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
            name: "",
            surname: "",
            id_no: "",
            council: "SACAP",
            reg_no: "",
            employer: "",
            exp_year: "",
            full_part: "25",
            jtitle: "",
            appointment: "",
            pratical_certification: "",
            cv: "",
            status: "Unverified",
            is_director: "false"
        };
        this.pform = {
            pname: "",
            pcouncil: "",
            pcipc_reg_no: "",
            ptype: "CC",
            director: "",
            dir_prof_regno: "",
            owned: "",
            status: "Unverified"
        };
        this.hform = {
            address: "",
            phone: "",
            email: "",
            res_prof_name: "",
            res_prof_reg: "",
            file_address: "",
            file_certificate: "",
            status: "Unverified"
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
        this.saveButtonFlag = false;
    }
    ngOnInit() {
        this.getProfile();
        this.getBusiness();
        this.getBranchs();
    }
    ngOnDestroy() {
        this.authService.saveProfileData(this.form, this.pform, this.hform);
    }
    // Edit Content Button Setting
    editPerson() {
        this.is_profileEdit = !this.is_profileEdit;
        var element1 = document.getElementById("profess_profile");
        element1.disabled = !this.is_profileEdit;
        if (this.is_profileEdit) {
            element1.style.opacity = "1";
        }
        else {
            element1.style.opacity = "0.55";
        }
    }
    editDirector(is_director) {
        this.is_director = !is_director;
    }
    editBusiness() {
        this.is_businessEdit = !this.is_businessEdit;
        var element1 = document.getElementById("business_profile");
        element1.disabled = !this.is_businessEdit;
        if (this.is_businessEdit) {
            element1.style.opacity = "1";
        }
        else {
            element1.style.opacity = "0.55";
        }
    }
    editBuzi() {
        this.is_nonDirectorEdit = !this.is_nonDirectorEdit;
        var element1 = document.getElementById("Buzi_info");
        element1.disabled = this.is_nonDirectorEdit;
        if (this.is_nonDirectorEdit) {
            element1.style.opacity = "1";
        }
        else {
            element1.style.opacity = "0.55";
        }
    }
    //  Add and get Profile
    addProfile() {
        if (this.is_director) {
            this.form.is_director = "1";
        }
        else {
            this.form.is_director = "0";
        }
        let { name, surname, council, reg_no, employer, exp_year, full_part, jtitle, appointment } = this.form;
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
        if (full_part.length == 0) {
            this.toast("Please fill Full / Part Time");
            return;
        }
        if (jtitle.length == 0) {
            this.toast("Please fill Job Title");
            return;
        }
        if (appointment.length == 0) {
            this.toast("Please upload letter of appointment document");
            return;
        }
        if (!this.form.exp_year.includes("year")) {
            this.form.exp_year = this.form.exp_year.concat(" year");
        }
        this.restApi.post("professional/add-profile", { user_id: this.authService.user.userId, data: this.form }).subscribe((res) => {
            if (res && res.status) {
                // console.log(res.result);
                this.restApi.toast(" Successfully Updated.", 1200);
            }
        }, error => {
            this.restApi.toast("Please fill as correctly.", 1200);
        });
    }
    getProfile() {
        // console.log("profile page get-profile res : ", this.authService.user.userId);
        this.restApi.post("professional/get-profile", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res.status != "noexist") {
                // console.log(res.data, "res.data,");
                this.form = res.data;
                if (this.form.is_director == "0") {
                    this.is_director = false;
                }
                else {
                    this.is_director = true;
                }
            }
            else {
                let data = this.authService.getProfileData("personal");
                if (data != null && data != undefined) {
                    this.form = data;
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("API problem!.", 1200);
        });
    }
    //  Business - branch, staff, soft, hardware
    addbranch() {
        let new_branch = `<ion-item id="bo${(this.bo_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success">Branch Office No : ${(this.bo_id + 1).toString()}</ion-label><ion-button id="bo_closebtn${(this.bo_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked">Address</ion-label><ion-input id="bo_address${(this.bo_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Contact Number</ion-label><ion-input id="phone${(this.bo_id).toString()}" >+</ion-input></ion-item><ion-item><ion-label position="stacked">Contact Email</ion-label><ion-input id="email${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Responsible Professional Name</ion-label><ion-input id="res_prof_name${(this.bo_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Responsible Professional PR CERTIFICATE</ion-label><ion-input id="res_prof_reg${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">SUPPORTING DOCUMENT</ion-label><ion-item><ion-label position="stacked">PROOF OF ADDRESS</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_file_address${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">RESPONSIBLE PROF PR CERTIFICATE</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_file_certificate${(this.bo_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById("branch_area").insertAdjacentHTML("beforeend", new_branch);
        document.getElementById(`bo_file_address${this.bo_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `bo_file_address${this.bo_id.toString()}`); });
        document.getElementById(`bo_file_certificate${this.bo_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `bo_file_certificate${this.bo_id.toString()}`); });
        document.getElementById(`bo_closebtn${(this.bo_id).toString()}`).addEventListener("click", this.closebranch);
        this.bo_id++;
    }
    closebranch(event) {
        let element_id = event.srcElement.id;
        let bo_id = element_id.replace("bo_closebtn", "");
        document.getElementById(`bo${bo_id}`).remove();
    }
    addStaff() {
        let new_staff = `<ion-item id="hstaff${(this.ho_staff_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success">Staff Member No : ${(this.ho_staff_id + 1).toString()}</ion-label><ion-button id="ho_staff_closebtn${(this.ho_staff_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-input placeholder="Name" id="staffname${(this.ho_staff_id).toString()}" ></ion-input><ion-input placeholder="Surname" id="staffsurname${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Job Title" id="staffjtitle${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Exp in Years" class="exp_year" id="staffexp_year${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Professional registration No" id="staffprof_reg_no${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Contact Phone Number" id="staffphone${(this.ho_staff_id).toString()}" >+</ion-input><ion-input placeholder="Contact Email" id="staffemail${(this.ho_staff_id).toString()}"></ion-input><ion-item><ion-label position="stacked">LETTER OF APPOINTMENT</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_appointment${(this.ho_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">CV</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_cv${(this.ho_staff_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById("ho_staff_area").insertAdjacentHTML("beforeend", new_staff);
        document.getElementById(`ho_staff_appointment${this.ho_staff_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `ho_staff_appointment${this.ho_staff_id.toString()}`); });
        document.getElementById(`ho_staff_cv${this.ho_staff_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `ho_staff_cv${this.ho_staff_id.toString()}`); });
        document.getElementById(`ho_staff_closebtn${(this.ho_staff_id).toString()}`).addEventListener("click", this.closeStaff);
        this.ho_staff_id++;
    }
    closeStaff(event) {
        let element_id = event.srcElement.id;
        let ho_staff_id = element_id.replace("ho_staff_closebtn", "");
        document.getElementById(`hstaff${ho_staff_id}`).remove();
    }
    addsoft() {
        let new_soft = `<ion-item class="w-100" id="soft${(this.soft_id).toString()}"><ion-row class="w-100"><ion-label position="stacked" color="success">Software No : ${(this.soft_id + 1).toString()}</ion-label><ion-button id="soft_closebtn${(this.soft_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked" color="success">Software Title</ion-label><ion-input id="softname${(this.soft_id).toString()}" [(ngModel)]="softs[${this.soft_id}]"></ion-input></ion-item><ion-label position="stacked">Upload Licence Document(PDF)</ion-label><ion-input name="file" type="file" accept="application/pdf" id="soft${(this.soft_id).toString()}"></ion-input></ion-item>`;
        document.getElementById("soft_area").insertAdjacentHTML("beforeend", new_soft);
        document.getElementById(`soft${this.soft_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `soft${this.soft_id.toString()}`); });
        document.getElementById(`soft_closebtn${(this.soft_id).toString()}`).addEventListener("click", this.closeSoft);
        this.soft_id++;
    }
    closeSoft(event) {
        let element_id = event.srcElement.id;
        let soft_id = element_id.replace("soft_closebtn", "");
        document.getElementById(`soft${soft_id}`).remove();
    }
    addhard() {
        let new_hard = `<ion-item class="w-100" id="hard${(this.hard_id).toString()}"><ion-row class="w-100"><ion-label position="stacked" color="success">Hardware No : ${(this.hard_id + 1).toString()}</ion-label><ion-button id="hard_closebtn${(this.hard_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked" color="success">Hardware Name</ion-label><ion-input id="hardname${this.hard_id.toString()}"  [(ngModel)]="hards[${this.hard_id}]"></ion-input></ion-item><ion-label position="stacked">Upload Licence Document(PDF)</ion-label><ion-input name="file" type="file" accept="application/pdf" id="hard${this.hard_id.toString()}"></ion-input></ion-item>`;
        document.getElementById("hard_area").insertAdjacentHTML("beforeend", new_hard);
        document.getElementById(`hard${this.hard_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `hard${this.hard_id.toString()}`); });
        document.getElementById(`hard_closebtn${(this.hard_id).toString()}`).addEventListener("click", this.closeHard);
        this.hard_id++;
    }
    closeHard(event) {
        let element_id = event.srcElement.id;
        let hard_id = element_id.replace("hard_closebtn", "");
        document.getElementById(`hard${hard_id}`).remove();
    }
    // manage datas in office
    manage() {
        this.softs = [];
        this.hards = [];
        this.staffs = [];
        this.bo_offices = [];
        for (let i = 0; i < this.soft_id; i++) {
            if (document.getElementById(`soft${i}`) == null) {
                continue;
            }
            else {
                let filename = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("soft" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                        filename = this.pdfs[j].filename;
                        break;
                    }
                }
                if (filename == "") {
                    this.toast("Please upload " + i.toString() + " Software licence pdf.");
                    return { status: false, data: "Software File" };
                }
                var name = document.getElementById("softname" + i.toString()).value.toString();
                if (name == null || name == "") {
                    "Please input " + i.toString() + " Software Title.";
                    return { status: false, data: "Software Title" };
                }
                this.softs.push({ name: name, filename: filename });
            }
        }
        for (let i = 0; i < this.hard_id; i++) {
            if (document.getElementById(`hard${i}`) == null) {
                continue;
            }
            else {
                let filename = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("hard" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                        filename = this.pdfs[j].filename;
                        break;
                    }
                }
                if (filename == "") {
                    this.toast("Please upload " + i.toString() + " Hardware licence pdf.");
                    return { status: false, data: "Hardware File" };
                }
                var name = document.getElementById("hardname" + i.toString()).value.toString();
                if (name == null || name == "") {
                    "Please input " + i.toString() + " Hardware Title.";
                    return { status: false, data: "Hardware Title" };
                }
                this.hards.push({ name: name, filename: filename });
            }
        }
        for (let i = 0; i < this.ho_staff_id; i++) {
            try {
                if (document.getElementById(`hstaff${i}`) == null) {
                    continue;
                }
                else {
                    let file_appointment = "";
                    let file_cv = "";
                    for (let j = 0; j < this.pdfs.length; j++) {
                        if ("file_appointment" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                            file_appointment = this.pdfs[j].filename;
                        }
                        if ("file_cv" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                            file_cv = this.pdfs[j].filename;
                        }
                    }
                    var name = document.getElementById("staffname" + i.toString()).value.toString();
                    var surname = document.getElementById("staffsurname" + i.toString()).value.toString();
                    var jtitle = document.getElementById("staffjtitle" + i.toString()).value.toString();
                    var exp_year = document.getElementById("staffexp_year" + i.toString()).value.toString();
                    if (!exp_year.includes("year")) {
                        exp_year = exp_year.concat("year");
                    }
                    var prof_reg_no = document.getElementById("staffprof_reg_no" + i.toString()).value.toString();
                    var phone = document.getElementById("staffphone" + i.toString()).value.toString();
                    var email = document.getElementById("staffemail" + i.toString()).value.toString();
                    if (name == "" && surname == "" && jtitle == "" && exp_year == "" && prof_reg_no == "" && phone == "" && email == "") {
                        continue;
                    }
                    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) {
                        this.toast("Please input validated email.");
                    }
                    else if (name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == "") {
                        this.toast("Please Fill Gaps");
                    }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email, file_appointment: file_appointment, file_cv: file_cv });
                }
            }
            catch (error) {
                continue;
            }
        }
        for (let i = 0; i < this.bo_id; i++) {
            if (document.getElementById(`bo${i}`) == null) {
                continue;
            }
            else {
                let file_certificate = "";
                let file_address = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("file_address" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                        file_address = this.pdfs[j].filename;
                    }
                    if ("file_certificate" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) {
                        file_certificate = this.pdfs[j].filename;
                    }
                }
                let address = document.getElementById("bo_address" + i.toString()).value.toString();
                var phone = document.getElementById("phone" + i.toString()).value.toString();
                var email = document.getElementById("email" + i.toString()).value.toString();
                var res_prof_name = document.getElementById("res_prof_name" + i.toString()).value.toString();
                var res_prof_reg = document.getElementById("res_prof_reg" + i.toString()).value.toString();
                if (phone == "" && email == "" && res_prof_name == "" && res_prof_reg == "") {
                    continue;
                }
                else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) {
                    this.toast("Please input validated email.");
                }
                else if (address == "" || name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == "") {
                    this.toast("Please Fill Gaps");
                }
                this.bo_offices.push({ address: address, phone: phone, email: email, res_prof_name: res_prof_name, res_prof_reg: res_prof_reg, file_certificate: file_certificate, file_address: file_address, status: "Unverified" });
            }
        }
        return { status: true, data: "success" };
    }
    addBusiness() {
        for (let x in this.pform) {
            if (x == "verified_at" || x == "verified_by" || x == "id" || x == "created_by" || x == "updated_at") {
                continue;
            }
            ;
            if (this.pform[x].length == 0) {
                let name = x.replace("_", " ");
                return this.toast("Please fill " + name + " of the Business");
            }
        }
        for (let x in this.hform) {
            if (this.hform[x].length == 0) {
                let name = x.replace("_", " ");
                return this.toast("Please fill " + name + " of the Head Office.");
            }
        }
        let result_manage = this.manage();
        if (result_manage.status) {
            for (let i = 0; i < this.bo_offices.length; i++) {
                for (let x in this.bo_offices[i]) {
                    if (this.bo_offices[i][x].length == 0) {
                        let name = x.replace("_", " ");
                        return this.toast("Please fill " + name + " of the Branch Office.");
                    }
                }
            }
            for (let i = 0; i < this.staffs.length; i++) {
                for (let x in this.staffs[i]) {
                    if (this.staffs[i][x].length == 0) {
                        let name = x.replace("_", " ");
                        return this.toast("Please fill " + name + " of the Head Office Staff.");
                    }
                }
            }
            for (let i = 0; i < this.hards.length; i++) {
                for (let x in this.hards[i]) {
                    if (this.hards[i][x].length == 0) {
                        let name = x.replace("_", " ");
                        return this.toast("Please fill " + name + " of the Hardware.");
                    }
                }
            }
            for (let i = 0; i < this.softs.length; i++) {
                for (let x in this.softs[i]) {
                    if (this.softs[i][x].length == 0) {
                        let name = x.replace("_", " ");
                        return this.toast("Please fill " + name + " of the Software.");
                    }
                }
            }
            console.log({ user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices });
            this.restApi.post("professional/add-business", { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices }).subscribe((res) => {
                console.log(res);
                if (res && res.status) {
                    this.restApi.toast(res.message, 1200);
                    this.getBusiness();
                    this.getBranchs();
                    this.segment = "business";
                    this.business_seg = "branch";
                }
                else {
                    this.restApi.toast(res.message, 1200);
                }
            }, error => {
                console.log(error);
                this.restApi.toast("Please fill as correctly.", 1000);
            });
        }
        else {
            console.log("Profile addBusiness result_manage.data : ", result_manage.data);
        }
    }
    checkOwned() {
        if (parseInt(this.pform.owned) < 50) {
            this.pform.owned = "Non professional owner";
        }
    }
    getBusiness() {
        this.restApi.post("professional/get-business", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == "success") {
                    if (res.data[0].length > 0) {
                        this.pform = res.data[0][0];
                    }
                    ;
                    if (res.data[1].length > 0) {
                        // console.log( res);
                        this.hform = [];
                        let head_office = res.data[1][0];
                        this.hform["address"] = head_office["address"];
                        this.hform["phone"] = head_office["phone"];
                        this.hform["email"] = head_office["email"];
                        this.hform["res_prof_name"] = head_office["res_prof_name"];
                        this.hform["res_prof_reg"] = head_office["res_prof_reg"];
                        this.hform["file_address"] = head_office["file_address"];
                        this.hform["file_certificate"] = head_office["file_certificate"];
                        this.hform["status"] = head_office["status"];
                    }
                }
                else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                    let pformData = this.authService.getProfileData("business");
                    if (pformData != null && pformData != undefined) {
                        this.pform = pformData;
                    }
                    let hformData = this.authService.getProfileData("hoffice");
                    if (hformData != null && hformData != undefined) {
                        this.hform = hformData;
                    }
                }
            }
        }, error => {
            this.toastController.create({
                message: "Something went wrong.",
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    getBranchs() {
        this.restApi.post("professional/get-branchs", { user_id: this.authService.user.userId }).subscribe((res) => {
            if (res && res.status) {
                if (res.status == "success") {
                    for (let i = 0; i < res.data.length; i++) {
                        let each_office = {
                            address: res.data[i]["address"],
                            phone: res.data[i]["phone"],
                            email: res.data[i]["email"],
                            res_prof_name: res.data[i]["res_prof_name"],
                            res_prof_reg: res.data[i]["res_prof_reg"],
                            file_address: res.data[i]["file_address"],
                            file_certificate: res.data[i]["file_certificate"],
                            status: res.data[i]["status"],
                        };
                        this.bo_offices.push(each_office);
                    }
                }
                else {
                    this.restApi.toast(res.message, 1000);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Data connection problem", 1000);
        });
    }
    //  b - branch office
    addbstaff(id, office_id) {
        let new_staff = `<ion-item id="bo_staff${(this.bo_staff_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success" class="${office_id}">Staff No : ${(this.bo_staff_id + 1).toString()}</ion-label><ion-button id="bo_staff_closebtn${(this.bo_staff_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-input placeholder="Name" id="bstaffname${(this.bo_staff_id).toString()}" ></ion-input><ion-input placeholder="Surname" id="bstaffsurname${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Job Title" id="bstaffjtitle${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Exp in Years" id="bstaffexp_year${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Professional registration No" id="bstaffprof_reg_no${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Contect Phone Number" id="bstaffphone${(this.bo_staff_id).toString()}" >+</ion-input><ion-input placeholder="Contact Email" id="bstaffemail${(this.bo_staff_id).toString()}"></ion-input><ion-item><ion-label position="stacked">LETTER OF APPOINTMENT</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_appointment${(this.bo_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">CV</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_cv${(this.bo_staff_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById(id).insertAdjacentHTML("beforeend", new_staff);
        document.getElementById(`bo_staff_closebtn${(this.bo_staff_id).toString()}`).addEventListener("click", (e) => { this.closeBranchStaff(e); });
        try {
            document.getElementById(`bo_staff_appointment${this.bo_staff_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `bo_staff_appointment${this.bo_staff_id.toString()}`); });
            document.getElementById(`bo_staff_cv${this.bo_staff_id.toString()}`).addEventListener("change", (e) => { this.changeListener_dynamic(e, `bo_staff_cv${this.bo_staff_id.toString()}`); });
        }
        catch (error) {
            console.log(" profile addbstaff error : ", error);
        }
        this.bo_staff_id++;
    }
    closeBranchStaff(event) {
        let element_id = event.srcElement.id;
        let bo_staff_id = element_id.replace("bo_staff_closebtn", "");
        document.getElementById(`bo_staff${bo_staff_id}`).remove();
    }
    bstaffs() {
        let bo_staff_id = 0;
        var bstaffs = [];
        this.staffs = [];
        for (let i = 0; i < this.bo_offices.length; i++) {
            let eachOffice = document.getElementsByClassName(this.bo_offices[i].phone);
            console.log(this.bo_offices[i], this.bo_offices[i].phone, eachOffice.length, this.pdfs);
            for (let j = 0; j < eachOffice.length; j++) {
                try {
                    let file_appointment = "";
                    let file_cv = "";
                    for (let k = 0; k < this.pdfs.length; k++) {
                        if ("bo_file_appointment" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) {
                            file_appointment = this.pdfs[k].filename;
                        }
                        if ("bo_file_cv" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) {
                            file_cv = this.pdfs[k].filename;
                        }
                    }
                    if (file_appointment == "") {
                        this.toast("Please upload Letter of appointment of the Branch Staff");
                    }
                    if (file_cv == "") {
                        this.toast("Please upload CV of the Branch Staff");
                    }
                    var name = document.getElementById("bstaffname" + bo_staff_id.toString()).value.toString();
                    var surname = document.getElementById("bstaffsurname" + bo_staff_id.toString()).value.toString();
                    var jtitle = document.getElementById("bstaffjtitle" + bo_staff_id.toString()).value.toString();
                    var exp_year = document.getElementById("bstaffexp_year" + bo_staff_id.toString()).value.toString();
                    if (!exp_year.includes("year")) {
                        exp_year = exp_year.concat("year");
                    }
                    var prof_reg_no = document.getElementById("bstaffprof_reg_no" + bo_staff_id.toString()).value.toString();
                    var phone = document.getElementById("bstaffphone" + bo_staff_id.toString()).value.toString();
                    var email = document.getElementById("bstaffemail" + bo_staff_id.toString()).value.toString();
                    // if ( name == "" && surname == "" && jtitle == "" && exp_year == "" && prof_reg_no == "" && phone == "" && email == "" ){ continue; }
                    // else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true){ this.toast("Please input validated email."); }
                    // else if ( name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == ""){ this.toast("Please Fill Gaps"); }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email, file_appointment: file_appointment, file_cv: file_cv });
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
        console.log({ all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices });
        this.restApi.post("professional/add-bstaffs", { all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices }).subscribe((res) => {
            if (res && res.status) {
                console.log(res.data);
                this.toastController.create({
                    message: res.data,
                    duration: 2000
                }).then(toast => toast.present());
                // this.getBusiness();
                // this.getBranchs();
                // this.segment = "business";
                // this.business_seg = "branch";
            }
        }, (error) => {
            console.log(error);
            this.toast("Something went wrong." + error.toString());
        });
    }
    getlist(event) {
        this.is_profileEdit = false;
        this.is_businessEdit = false;
        if (this.is_director == true && event.detail.value == "business") {
            this.restApi.post("professional/get-list", { user_id: this.authService.user.userId }).subscribe((res) => {
                if (res && res.status) {
                    if (!this.is_director) {
                        for (let i = 0; i < res.data[0].length; i++) {
                            let new_buzi = `<ion-select-option value="${(i + 1).toString()}">` + (res.data[0])[i].pname + "(" + (res.data[0])[i].status + ")" + "</ion-select-option>";
                            document.getElementById("business_list").insertAdjacentHTML("beforeend", new_buzi);
                        }
                        for (let j = 0; j < res.data[1].length; j++) {
                            let new_office = `<ion-select-option value="${(j + 1).toString()}">` + (res.data[1])[j].email + "(" + (res.data[1])[j].status + ")" + "</ion-select-option>";
                            document.getElementById("office_list").insertAdjacentHTML("beforeend", new_office);
                        }
                    }
                    if (res.data[2].length > 0) {
                        let ids = res.data[2][0];
                        this.mybusiness = ids.buzi_id;
                        this.myoffice = ids.office_id;
                    }
                }
            }, error => {
                console.log(error, "here");
                this.restApi.toast("Something went wrong.", 1200);
            });
        }
    }
    changeOffice(event) {
        this.is_businessEdit = false;
        this.is_nonDirectorEdit = false;
    }
    // Non director
    updateBuzi() {
        console.log(this.mybusiness, this.myoffice);
        this.restApi.post("professional/save-id", { user_id: this.authService.user.userId, buzi_id: this.mybusiness, office_id: this.myoffice }).subscribe((res) => {
            console.log(res.data);
            if (res && res.status == "success") {
                console.log(res.data);
            }
        }, error => {
            this.toastController.create({
                message: "Something went wrong.",
                duration: 2000
            }).then(toast => toast.present());
        });
    }
    // changeListener_dynamic(event: any): void {
    //     this.file = event.target.files[0];
    //     if (this.file && this.file.type == "application/pdf") {
    //         this.uploadFile(this.file, event.path[1].id);
    //     } else {
    //         this.toast("Only PDF supported");
    //     }
    // }
    changeListener_dynamic(event, keyword) {
        console.log("Profile changeListener_dynamic : keyword : ", keyword);
        try {
            this.saveButtonFlag = true;
            let file = event.target.files[0];
            let current_index = 0;
            if (file && file.type == "application/pdf") {
                this.restApi.postFile(file, "upload-file", "office").subscribe(res => {
                    if (res && res.status && res.status == "success") {
                        console.log(" Profile page - after upload file : ", res);
                        if (keyword.includes("bo_file_address")) {
                            current_index = parseInt(keyword.replace("bo_file_address", ""));
                            this.pdfs.push({ id: current_index, name: "file_address", filename: res.filename });
                        }
                        else if (keyword.includes("bo_file_certificate")) {
                            current_index = parseInt(keyword.replace("bo_file_certificate", ""));
                            this.pdfs.push({ id: current_index, name: "file_certificate", filename: res.filename });
                        }
                        else if (keyword.includes("ho_staff_appointment")) {
                            current_index = parseInt(keyword.replace("ho_staff_appointment", ""));
                            this.pdfs.push({ id: current_index, name: "file_appointment", filename: res.filename });
                        }
                        else if (keyword.includes("ho_staff_cv")) {
                            current_index = parseInt(keyword.replace("ho_staff_cv", ""));
                            this.pdfs.push({ id: current_index, name: "file_cv", filename: res.filename });
                        }
                        else if (keyword.includes("bo_staff_appointment")) {
                            current_index = parseInt(keyword.replace("bo_staff_appointment", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_appointment", filename: res.filename });
                        }
                        else if (keyword.includes("bo_staff_cv")) {
                            current_index = parseInt(keyword.replace("bo_staff_cv", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_cv", filename: res.filename });
                        }
                        else if (keyword.includes("soft")) {
                            current_index = parseInt(keyword.replace("soft", ""));
                            this.pdfs.push({ id: current_index, name: "soft", filename: res.filename });
                        }
                        else if (keyword.includes("hard")) {
                            current_index = parseInt(keyword.replace("hard", ""));
                            this.pdfs.push({ id: current_index, name: "hard", filename: res.filename });
                        }
                        else if (keyword == "hoffice_file_certificate") {
                            this.hform.file_certificate = res.filename;
                        }
                        else if (keyword == "hoffice_file_address") {
                            this.hform.file_address = res.filename;
                        }
                        else {
                            console.log(keyword, "keyword");
                        }
                        this.saveButtonFlag = false;
                    }
                }, error => {
                    console.log(error);
                    // this.saveButtonFlag = false;
                });
            }
            else {
                this.restApi.toast("Only PDF supported", 1200);
                this.saveButtonFlag = false;
            }
        }
        catch (error) {
            console.log(" Profile changeListener_dynamic error : ", error);
            this.saveButtonFlag = false;
        }
    }
    changeListener($event, type) {
        // this.saveButtonFlag = true;
        let file = $event.target.files[0];
        if (file && file.type == "application/pdf") {
            this.restApi.postFile(file, "upload-file", "profile").subscribe(res => {
                if (res && res.status && res.status == "success") {
                    this.form[`${type}`] = res.filename;
                    console.log(" Project page - after upload file : ", this.form);
                    // this.saveButtonFlag = false;
                }
            }, error => {
                console.log(error);
                // this.saveButtonFlag = false;
            });
        }
        else {
            this.restApi.toast("Only PDF supported", 1200);
            // this.saveButtonFlag = false;
        }
    }
    toast(message) {
        this.toastController.create({
            message: message,
            duration: 1500
        }).then(toast => toast.present());
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticateService },
    { type: src_app_services_rest_api_service__WEBPACK_IMPORTED_MODULE_3__.RestApiService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: "app-profile",
        template: _profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 5522:
/*!************************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".footer {\n  font-size: 11px;\n  color: #6d6d6d;\n}\n\n.schedule_line {\n  margin: 15px;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n\n.schedule_btn {\n  margin: auto;\n}\n\n.table {\n  margin: auto;\n  margin-top: 25px;\n  font-size: 10px;\n  min-width: 90%;\n}\n\n.table th {\n  background: #8a8a8a;\n  padding: 5px;\n  color: #fff;\n  border: 1px solid #fff;\n}\n\n.table td {\n  background: #ccc;\n  padding: 5px;\n  color: #000;\n  border: 1px solid #fff;\n}\n\n.scrollH {\n  overflow-x: auto;\n}\n\n.validation-errors {\n  color: #000;\n}\n\n.profile_edit {\n  float: right;\n  color: white;\n}\n\n.opacity-disable {\n  opacity: 0.6;\n}\n\n.editbtn {\n  height: 24px;\n  margin-top: -6px;\n  margin-left: 25px;\n}\n\n.full_part {\n  width: 80px;\n}\n\n.full_part::after {\n  content: \"%\";\n}\n\n.exp_year {\n  width: 80px;\n}\n\n.exp_year::after {\n  content: \"Years\";\n}\n\n.business_btn {\n  font-size: 8px;\n}\n\n#profess_profile,\n#business_profile,\n#Buzi_info {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBUjs7QUFJQTtFQUNJLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxXQUFBO0FBREo7O0FBTUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtBQUhKOztBQU1BO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7QUFISjs7QUFNQTtFQUNJLFdBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxjQUFBO0FBSEo7O0FBTUE7OztFQUdJLFlBQUE7QUFISiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3IgICAgOiByZ2IoMTA5LCAxMDksIDEwOSk7XHJcbn1cclxuXHJcbi5zY2hlZHVsZV9saW5lIHtcclxuICAgIG1hcmdpbiAgICAgIDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0IDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxufVxyXG5cclxuLnNjaGVkdWxlX2J0biB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBtYXJnaW4gICAgOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZSA6IDEwcHg7XHJcbiAgICBtaW4td2lkdGggOiA5MCU7XHJcblxyXG4gICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM4YThhOGE7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICAgICAgcGFkZGluZyAgIDogNXB4O1xyXG4gICAgICAgIGNvbG9yICAgICA6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyICAgIDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zY3JvbGxIIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uLWVycm9ycyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi8vIEVkaXQgYnV0dG9uIFxyXG4ucHJvZmlsZV9lZGl0IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9wYWNpdHktZGlzYWJsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5lZGl0YnRuIHtcclxuICAgIGhlaWdodCAgICAgOiAyNHB4O1xyXG4gICAgbWFyZ2luLXRvcCA6IC02cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG5cclxuLmZ1bGxfcGFydCB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmZ1bGxfcGFydDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIlXCI7XHJcbn1cclxuXHJcbi5leHBfeWVhciB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmV4cF95ZWFyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlllYXJzXCI7XHJcbn1cclxuXHJcbi5idXNpbmVzc19idG4ge1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbiNwcm9mZXNzX3Byb2ZpbGUsXHJcbiNidXNpbmVzc19wcm9maWxlLFxyXG4jQnV6aV9pbmZvIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufSJdfQ== */";

/***/ }),

/***/ 7981:
/*!************************************************************************!*\
  !*** ./src/app/home/professional/profile/profile.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        <ion-back-button slot=\"start\"></ion-back-button>\n        <ion-title>My Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-segment class=\"mt-1\" [(ngModel)]=\"segment\" color=\"light\" (ionChange)=\"getlist($event)\">\n        <ion-segment-button value=\"profess\" class=\"dark\" enabled>\n            <ion-icon name=\"business\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Individual</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"business\">\n            <ion-icon name=\"business\" class=\"dark\" color=\"dark\"></ion-icon>\n            <ion-label class=\"dark\" color=\"dark\">Business</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]=\"segment\">\n        <ion-card class=\"p-fixed fixed-ion-card-area\" *ngSwitchCase=\"'profess'\">\n            <strong>Individual Profile\n                <ion-button size=\"small\" class=\"profile_edit\" (click)=\"editPerson()\">\n                    <ng-container *ngIf=\"is_profileEdit\">Cancel Edit</ng-container>\n                    <ng-container *ngIf=\"!is_profileEdit\">Edit Profile</ng-container>\n                </ion-button>\n            </strong>\n            <ion-row>\n                <ion-label>Status : </ion-label>\n                <ng-container *ngIf=\"form.status =='Unverified'\">\n                    <ion-label color=\"danger\">Unverified</ion-label>\n                </ng-container>\n                <ng-container *ngIf=\"form.status == 'Verified'\">\n                    <ion-label color=\"success\">Verified</ion-label>\n                </ng-container>\n            </ion-row>\n            <ion-card-content id=\"profess_profile\" disabled=\"true\">\n                <ion-item>\n                    <ion-label>Are you a director in the Business?</ion-label>\n                    <ng-container *ngIf=\"is_director\">\n                        <ion-button size=\"small\" class=\"profile_edit\">Yes\n                        </ion-button>\n                        <ion-button size=\"small\" class=\"profile_edit opacity-disable\"\n                            (click)=\"editDirector(is_director)\">No\n                        </ion-button>\n                    </ng-container>\n                    <ng-container *ngIf=\"!is_director\">\n                        <ion-button size=\"small\" class=\"profile_edit opacity-disable\"\n                            (click)=\"editDirector(is_director)\">Yes\n                        </ion-button>\n                        <ion-button size=\"small\" class=\"profile_edit\">No\n                        </ion-button>\n                    </ng-container>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Name</ion-label>\n                    <ion-input name=\"name\" [(ngModel)]=\"form.name\" value=\"{{form.name}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Surname</ion-label>\n                    <ion-input name=\"surname\" [(ngModel)]=\"form.surname\" value=\"{{form.surname}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">ID No</ion-label>\n                    <ion-input name=\"id_no\" [(ngModel)]=\"form.id_no\" value=\"{{form.id_no}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Council Membership</ion-label>\n                    <ion-select multiple=\"false\" name=\"council\" [(ngModel)]=\"form.council\" value=\"{{form.council}}\">\n                        <ion-select-option value=\"SACAP\">SACAP</ion-select-option>\n                        <ion-select-option value=\"ECSA\">ECSA</ion-select-option>\n                        <ion-select-option value=\"SACQSP\">SACQSP</ion-select-option>\n                        <ion-select-option value=\"SACPMP\">SACPMP</ion-select-option>\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Professional Registration No</ion-label>\n                    <ion-input name=\"reg_no\" [(ngModel)]=\"form.reg_no\" value=\"{{form.reg_no}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Employer</ion-label>\n                    <ion-input name=\"employer\" [(ngModel)]=\"form.employer\" value=\"{{form.employer}}\" required>\n                    </ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">Upload Supporting Documents\n                    </ion-label>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Letter of appointment</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'appointment')\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">Practical completion</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'pratical_certification')\"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label position=\"stacked\">C V</ion-label>\n                        <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                            (change)=\"changeListener($event, 'cv')\"></ion-input>\n                    </ion-item>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Exp In years</ion-label>\n                    <ion-input name=\"exp_year\" [(ngModel)]=\"form.exp_year\" value=\"{{form.exp_year}}\"></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Full / Part Time ( Percentage )</ion-label>\n                    <ion-input name=\"full_part\" class=\"full_part\" [(ngModel)]=\"form.full_part\"\n                        value=\"{{form.full_part}}\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label position=\"stacked\">Job Title</ion-label>\n                    <ion-input name=\"jtitle\" [(ngModel)]=\"form.jtitle\" value=\"{{form.jtitle}}\"></ion-input>\n                </ion-item>\n                <br>\n                <ng-container *ngIf=\"saveButtonFlag\">\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                        disabled={{saveButtonFlag}}>Uploading\n                        File\n                    </ion-button>\n                </ng-container>\n                <ng-container *ngIf=\"!saveButtonFlag\">\n                    <ion-button (click)=\"addProfile()\" expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                        disabled={{saveButtonFlag}}>Request Verification\n                    </ion-button>\n                </ng-container>\n\n            </ion-card-content>\n        </ion-card>\n        <ion-card class=\"p-fixed fixed-ion-card-area\" *ngSwitchCase=\"'business'\">\n            <ng-container *ngIf=\"is_director==true\">\n                <ion-segment [(ngModel)]=\"business_seg\" color=\"light\" (ionChange)=\"changeOffice($event)\">\n                    <ion-segment-button value=\"head\" class=\"dark\" enabled>\n                        <ion-label class=\"dark\" color=\"dark\" style=\"font-weight: bold;\">Head Office</ion-label>\n                    </ion-segment-button>\n                    <ion-segment-button value=\"branch\">\n                        <ion-label class=\"dark\" color=\"dark\" style=\"font-weight: bold;\">Branch Offices</ion-label>\n                    </ion-segment-button>\n                </ion-segment>\n                <div [ngSwitch]=\"business_seg\">\n                    <div *ngSwitchCase=\"'head'\">\n                        <ion-card-content style=\"padding: 0px;\">\n                            <strong>Practice Profile\n                                <ion-button size=\"small\" class=\"profile_edit\" (click)=\"editBusiness()\">\n                                    <ng-container *ngIf=\"is_businessEdit\">Cancel Edit</ng-container>\n                                    <ng-container *ngIf=\"!is_businessEdit\">Edit Business</ng-container>\n                                </ion-button>\n                            </strong>\n                            <ion-row>\n                                <strong>Status : </strong>\n                                <ng-container *ngIf=\"pform.status =='Unverified'\">\n                                    <ion-label color=\"danger\">Unverified</ion-label>\n                                </ng-container>\n                                <ng-container *ngIf=\"pform.status == 'Verified'\">\n                                    <ion-label color=\"success\">Verified</ion-label>\n                                </ng-container>\n                            </ion-row>\n                        </ion-card-content>\n                        <ion-card-content class=\"p-1\" id=\"business_profile\" disabled=\"true\">\n                            <ion-item>\n                                <ion-label position=\"stacked\">Practice Name</ion-label>\n                                <ion-input name=\"pname\" [(ngModel)]=\"pform.pname\" value=\"{{pform.pname}}\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Practice Council reg. No</ion-label>\n                                <ion-input name=\"pcouncil\" [(ngModel)]=\"pform.pcouncil\" value=\"{{pform.pcouncil}}\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">CIPC registration</ion-label>\n                                <ion-input name=\"pcipc_reg_no\" [(ngModel)]=\"pform.pcipc_reg_no\"\n                                    value=\"{{pform.pcipc_reg_no}}\"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Type of Organization</ion-label>\n                                <ion-select multiple=\"false\" name=\"ptype\" [(ngModel)]=\"pform.ptype\"\n                                    value=\"{{pform.ptype}}\">\n                                    <ion-select-option value=\"CC\">CC</ion-select-option>\n                                    <ion-select-option value=\"Sole Proprietor\">Sole Proprietor</ion-select-option>\n                                    <ion-select-option value=\"Private\">Private</ion-select-option>\n                                    <ion-select-option value=\"Public\">Public</ion-select-option>\n                                    <ion-select-option value=\"Inc\">Inc</ion-select-option>\n                                    <ion-select-option value=\"Partnership\">Partnership</ion-select-option>\n                                    <ion-select-option value=\"External company\">External Company</ion-select-option>\n                                    <ion-select-option value=\"Business trust\">Business trust</ion-select-option>\n                                </ion-select>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Directors</ion-label>\n                                <ion-input name=\"directors\" [(ngModel)]=\"pform.director\" value=\"{{pform.director}}\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Director Prof registration No</ion-label>\n                                <ion-input name=\"directors_prof_regno\" [(ngModel)]=\"pform.dir_prof_regno\"\n                                    value=\"{{pform.dir_prof_regno}}\"></ion-input>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label position=\"stacked\">Percentage Owned</ion-label>\n                                <ion-input name=\"owned\" class=\"full_part\" [(ngModel)]=\"pform.owned\"\n                                    style=\"border-bottom: solid 1px;\" value=\"{{pform.owned}}\"></ion-input>\n                                <!-- <ion-input name=\"owned\" class=\"full_part\" [(ngModel)]=\"pform.owned\" value=\"{{pform.owned}}\" (change)=\"checkOwned()\"></ion-input> -->\n                            </ion-item>\n                            <div>\n                                <strong style=\"color:blue\">Head Office Address</strong>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Address</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_number\" [(ngModel)]=\"hform.address\"\n                                        value=\"{{hform.address}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Contact Number</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_number\" [(ngModel)]=\"hform.phone\"\n                                        value=\"{{hform.phone}}\">+</ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Contact Email</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_email\" [(ngModel)]=\"hform.email\"\n                                        value=\"{{hform.email}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Responsible Professional Name</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_res_prof_name\"\n                                        [(ngModel)]=\"hform.res_prof_name\" value=\"{{hform.res_prof_name}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\">Responsible Professional PR registration</ion-label>\n                                    <ion-input placeholder=\"\" name=\"hform_res_prof_regno\"\n                                        [(ngModel)]=\"hform.res_prof_reg\" value=\"{{hform.res_prof_reg}}\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\" style=\"margin-bottom: 10px;\">SUPPORTING DOCUMENTS\n                                    </ion-label>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\">PROOF OF ADDRESS\n                                    </ion-label>\n                                    <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                                        (change)=\"changeListener_dynamic($event,'hoffice_file_address')\"></ion-input>\n                                </ion-item>\n                                <ion-item>\n                                    <ion-label position=\"stacked\" style=\"margin-bottom: 5px;\">RESPONSIBLE PROF PR\n                                        CERTIFICATE</ion-label>\n                                    <ion-input name=\"file\" type=\"file\" accept=\"application/pdf\"\n                                        (change)=\"changeListener_dynamic($event,'hoffice_file_certificate')\">\n                                    </ion-input>\n                                </ion-item>\n                                <br>\n                                <div style=\"padding: 0px;\">\n                                    <!-- <strong style=\"color:blue\">Head Office Staff Info</strong> -->\n                                    <ion-row id=\"ho_staff_area\" style=\"padding: 0px;\">\n                                    </ion-row>\n                                    <ion-row>\n                                        <ion-button type=\"button\" color=\"dark\" (click)=\"addStaff()\">Add Head Office\n                                            Staff</ion-button>\n                                        <!-- <ion-button type=\"button\" class=\"business_btn\" color=\"dark\" (click)=\"cancelStaff()\">Cancel last Staff</ion-button> -->\n                                    </ion-row>\n                                </div>\n                            </div>\n                            <br>\n                            <!-- <strong style=\"color:blue\">Branch Office Details</strong> -->\n                            <ion-card-content id=\"branch_area\" style=\"padding: 0px;\"></ion-card-content>\n                            <ion-row>\n                                <ion-button color=\"dark\" (click)=\"addbranch()\">Add Branch Office</ion-button>\n                                <!-- <ion-button class=\"business_btn\" color=\"dark\" (click)=\"cancelbranch()\">Cancel Last Office</ion-button> -->\n                            </ion-row>\n                            <ion-card>\n                                <!-- <strong style=\"color:blue\"> Type of Licensed Equipment</strong> -->\n                                <ion-card-content>\n                                    <!-- <strong>Software</strong> -->\n                                    <ion-card-content id=\"soft_area\">\n                                    </ion-card-content>\n                                    <ion-button id=\"addsoft\" expand=\"block\" type=\"button\" color=\"dark\"\n                                        (click)=\"addsoft()\" style=\"font-size: 12px;\">Add Software</ion-button>\n                                </ion-card-content>\n                                <ion-card-content>\n                                    <!-- <strong>Hardware</strong> -->\n                                    <ion-card-content id=\"hard_area\">\n                                    </ion-card-content>\n                                    <ion-button id=\"addhard\" expand=\"block\" type=\"button\" color=\"dark\"\n                                        (click)=\"addhard()\" style=\"font-size: 12px;\">Add Hardware</ion-button>\n                                </ion-card-content>\n                            </ion-card>\n                            <div class=\"ion-padding\">\n                                <ng-container *ngIf=\"saveButtonFlag\">\n                                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                                        disabled={{saveButtonFlag}}>Uploading\n                                        File\n                                    </ion-button>\n                                </ng-container>\n                                <ng-container *ngIf=\"!saveButtonFlag\">\n                                    <ion-button (click)=\"addBusiness()\" expand=\"block\" type=\"submit\"\n                                        class=\"ion-no-margin\" color=\"dark\" disabled={{saveButtonFlag}}>Request\n                                        Verification\n                                    </ion-button>\n                                </ng-container>\n                            </div>\n                        </ion-card-content>\n                    </div>\n                    <ion-card-content *ngSwitchCase=\"'branch'\">\n                        <ng-container *ngIf=\"bo_offices.length == 0\">\n                            <h3>There is no Branch Office.</h3>\n                        </ng-container>\n                        <ng-container *ngIf=\"bo_offices.length > 0\">\n                            <div id=\"branch_areas\" *ngFor=\"let obj of bo_offices; let i=index;\" style=\"padding: 0px;\">\n                                <ion-input placeholder=\"Address\" id=\"address\" name=\"pform_address\"\n                                    [(ngModel)]=\"obj.address\" value=\"{{obj.address}}\"></ion-input>\n                                <ion-input placeholder=\"Contact Number\" id=\"phone\" name=\"pform_number\"\n                                    [(ngModel)]=\"obj.phone\" value=\"{{obj.phone}}\"></ion-input>\n                                <ion-input placeholder=\"Contact Email\" id=\"email\" name=\"pform_email\"\n                                    [(ngModel)]=\"obj.email\" value=\"{{obj.email}}\"></ion-input>\n                                <ion-input placeholder=\"Responsible Professional Name\" id=\"res_prof_name\"\n                                    name=\"pform_res_prof_name\" [(ngModel)]=\"obj.res_prof_name\"\n                                    value=\"{{obj.res_prof_name}}\"></ion-input>\n                                <ion-input placeholder=\"Responsible Professional PR registration\" id=\"res_prof_no\"\n                                    name=\"pform_res_prof_regno\" [(ngModel)]=\"obj.res_prof_reg\"\n                                    value=\"{{obj.res_prof_reg}}\"></ion-input>\n                                <ion-input placeholder=\"Verification Status\" name=\"pform_ho_status\"\n                                    [(ngModel)]=\"obj.status\" value=\"{{obj.status}}\"></ion-input>\n                                <ion-card-content>\n                                    <strong style=\"color:blue\">Branchs Staff Info</strong>\n                                    <ion-card-content id=\"{{'bstaffs' + i}}\">\n                                    </ion-card-content>\n                                    <ion-button id=\"{{'bstaffbtn' + i}}\" color=\"dark\" style=\"margin-left: 20px;\"\n                                        (click)=\"addbstaff('bstaffs' + i, obj.phone)\">Add Branch Office Staff\n                                    </ion-button>\n                                </ion-card-content>\n                            </div>\n                            <ng-container *ngIf=\"saveButtonFlag\">\n                                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                                    disabled={{saveButtonFlag}}>Uploading File\n                                </ion-button>\n                            </ng-container>\n                            <ng-container *ngIf=\"!saveButtonFlag\">\n                                <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\"\n                                    (click)=\"bstaffs()\" disabled={{saveButtonFlag}}>Save Branch Staffs\n                                </ion-button>\n                            </ng-container>\n                        </ng-container>\n                    </ion-card-content>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"is_director==false\">\n                <strong>Business Office\n                    <ion-button size=\"small\" id=\"Buzi_edit\" class=\"editbtn\" (click)=\"editBuzi()\">\n                        <ng-container *ngIf=\"is_nonDirectorEdit\">Cancel Edit</ng-container>\n                        <ng-container *ngIf=\"!is_nonDirectorEdit\">Edit Information</ng-container>\n                    </ion-button>\n                </strong>\n                <ion-card id=\"Buzi_info\" disabled=\"true\">\n                    <ion-card-content>\n                        <strong>Select Business Name</strong>\n                        <ion-select multiple=\"false\" id=\"business_list\" [(ngModel)]=\"mybusiness\" value=\"{{mybusiness}}\">\n                        </ion-select>\n                    </ion-card-content>\n                    <ion-card-content>\n                        <strong>Select Office Email</strong>\n                        <ion-select multiple=\"false\" id=\"office_list\" [(ngModel)]=\"myoffice\" value=\"{{myoffice}}\">\n                        </ion-select>\n                    </ion-card-content>\n                </ion-card>\n                <div class=\"ion-padding\">\n                    <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" color=\"dark\" (click)=\"updateBuzi()\">\n                        Save Information</ion-button>\n                </div>\n            </ng-container>\n        </ion-card>\n    </div>\n    <br>\n</ion-content>\n\n<script>\n    const controller = document.querySelector('ion-alert-controller');\n    let firstName, lastName;\n    function processForm(event) {\n        event.preventDefault();\n        controller.create({\n            header: 'Account Created',\n            message: `Created account for: <b>${firstName} ${lastName}</b>`,\n            buttons: [{\n                text: 'OK'\n            }]\n        }).then(alert => alert.present());\n    }\n    function handleFirstNameValue(event) {\n        firstName = event.target.value;\n    }\n    function handleLastNameValue(event) {\n        lastName = event.target.value;\n    }\n</script>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_professional_profile_profile_module_ts.js.map