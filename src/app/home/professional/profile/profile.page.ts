import { Component, OnInit } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { AuthenticateService } from "src/app/services/authentication.service";
import { RestApiService } from "src/app/services/rest-api.service";

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.page.html",
    styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {

    segment: string = "profess";
    // segment: string = "business";
    business_seg: string = "head";
    // business_seg: string = "branch";

    is_profileEdit: boolean = false;
    is_businessEdit: boolean = false;
    is_nonDirectorEdit: boolean = false;
    is_director: boolean = false;

    form: any = {
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
        qualification: "",
        cv: "",
        status: "Unverified",
        is_director: "false"
    };

    pform: any = {
        pname: "",
        pcouncil: "",
        pcipc_reg_no: "",
        ptype: "CC",
        status: "Unverified"
    };

    hform: any = {
        address: "",
        phone: "",
        email: "",
        res_prof_name: "",
        res_prof_reg: "",
        file_address: "",
        file_certificate: "",
        status: "Unverified"
    }

    ho_staff_id: any = 0;
    staffs: Array<{ name: string, surname: string, jtitle: string, exp_year: string, prof_reg_no: string, email: string, phone: string, file_appointment: string, file_prof_registration: string, file_qualification: string, file_cv: string }> = [];
    soft_id: any = 0;
    softs: Array<{ name: string, filename: string }> = [];
    hard_id: any = 0;
    hards: Array<{ name: string, filename: string }> = [];

    director_id: any = 0;
    directors: Array<{ name: string, prof_reg_no: string, owned: string }>;

    bo_id: any = 0;
    bo_offices: Array<{ address: string, phone: string, email: string, res_prof_name: string, res_prof_reg: string, file_certificate: string, file_address: string, status: "Unverified" }> = [];

    bo_staff_id: any = 0;

    mybusiness: string;
    myoffice: string;
    pdfs: Array<{ id: any, name: string, filename: string }> = [];

    saveButtonFlag: Boolean = false;
    constructor(public http: HttpClient, public toastController: ToastController, public authService: AuthenticateService, public restApi: RestApiService) { }

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
        var element1 = <HTMLInputElement>document.getElementById("profess_profile");
        element1.disabled = !this.is_profileEdit;
        if (this.is_profileEdit) { element1.style.opacity = "1"; }
        else { element1.style.opacity = "0.55"; }
    }

    editDirector(is_director: Boolean) {
        this.is_director = !is_director;
    }

    editBusiness() {
        this.is_businessEdit = !this.is_businessEdit;
        var element1 = <HTMLInputElement>document.getElementById("business_profile");
        element1.disabled = !this.is_businessEdit;
        if (this.is_businessEdit) { element1.style.opacity = "1"; }
        else { element1.style.opacity = "0.55"; }
    }

    editBuzi() {
        this.is_nonDirectorEdit = !this.is_nonDirectorEdit;
        var element1 = <HTMLInputElement>document.getElementById("Buzi_info");
        element1.disabled = this.is_nonDirectorEdit;
        if (this.is_nonDirectorEdit) { element1.style.opacity = "1"; }
        else { element1.style.opacity = "0.55"; }
    }

    //  Add and get Profile
    addProfile() {
        if (this.is_director) { this.form.is_director = "1"; }
        else { this.form.is_director = "0"; }
        let { name, surname, council, reg_no, employer, exp_year, full_part, jtitle, appointment } = this.form;
        if (name.length == 0) { this.toast("Please fill Name"); return; }
        if (surname.length == 0) { this.toast("Please fill Surname"); return; }
        if (council.length == 0) { this.toast("Please fill Council Membership"); return; }
        if (reg_no.length == 0) { this.toast("Please fill Registration Number"); return; }
        if (employer.length == 0) { this.toast("Please fill Employer Name"); return; }
        if (exp_year.length == 0) { this.toast("Please fill Exp in Years"); return; }
        if (full_part.length == 0) { this.toast("Please fill Full / Part Time"); return; }
        if (jtitle.length == 0) { this.toast("Please fill Job Title"); return; }
        if (appointment.length == 0) { this.toast("Please upload letter of appointment document"); return; }
        if (!this.form.exp_year.includes("year")) { this.form.exp_year = this.form.exp_year.concat(" year"); }
        this.restApi.post("professional/add-profile", { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
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
        this.restApi.post("professional/get-profile", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res.status != "noexist") {
                // console.log(res.data, "res.data,");
                this.form = res.data;
                if (this.form.is_director == "0") { this.is_director = false; }
                else { this.is_director = true; }
            } else {
                let data = this.authService.getData("personal");
                if (data != null && data != undefined) {
                    this.form = data;
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("API problem!.", 1200);
        });
    }

    //  Business - directors branch, staff, soft, hardware
    adddirector() {
        let new_branch = `<ion-item id="director${(this.director_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success">Director No : ${(this.director_id + 1).toString()}</ion-label><ion-button id="director_closebtn${(this.director_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked">Name</ion-label><ion-input id="dir_name${(this.director_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Prof Reg No</ion-label><ion-input id="dir_prof_reg_no${(this.director_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Owned (%)</ion-label><ion-input id="dir_owned${(this.director_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById("directors_area").insertAdjacentHTML("beforeend", new_branch);
        // document.getElementById(`bo_file_address${this.director_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_file_address${this.director_id.toString()}`) });
        // document.getElementById(`bo_file_certificate${this.director_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_file_certificate${this.director_id.toString()}`) });
        document.getElementById(`director_closebtn${(this.director_id).toString()}`).addEventListener("click", this.closedirector);
        this.director_id++;
    }

    closedirector(event: any) {
        let element_id = event.srcElement.id;
        let director_id = element_id.replace("director_closebtn", "");
        document.getElementById(`director${director_id}`).remove();
    }

    addbranch() {
        let new_branch = `<ion-item id="bo${(this.bo_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success">Branch Office No : ${(this.bo_id + 1).toString()}</ion-label><ion-button id="bo_closebtn${(this.bo_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked">Address</ion-label><ion-input id="bo_address${(this.bo_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Contact Number</ion-label><ion-input id="phone${(this.bo_id).toString()}" >+</ion-input></ion-item><ion-item><ion-label position="stacked">Contact Email</ion-label><ion-input id="email${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Responsible Professional Name</ion-label><ion-input id="res_prof_name${(this.bo_id).toString()}" ></ion-input></ion-item><ion-item><ion-label position="stacked">Responsible Professional PR CERTIFICATE</ion-label><ion-input id="res_prof_reg${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">SUPPORTING DOCUMENT</ion-label><ion-item><ion-label position="stacked">PROOF OF ADDRESS</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_file_address${(this.bo_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">RESPONSIBLE PROF PR CERTIFICATE</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_file_certificate${(this.bo_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById("branch_area").insertAdjacentHTML("beforeend", new_branch);
        document.getElementById(`bo_file_address${this.bo_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_file_address${this.bo_id.toString()}`) });
        document.getElementById(`bo_file_certificate${this.bo_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_file_certificate${this.bo_id.toString()}`) });
        document.getElementById(`bo_closebtn${(this.bo_id).toString()}`).addEventListener("click", this.closebranch);
        this.bo_id++;
    }

    closebranch(event: any) {
        let element_id = event.srcElement.id;
        let bo_id = element_id.replace("bo_closebtn", "");
        document.getElementById(`bo${bo_id}`).remove();
    }

    addStaff() {
        let new_staff = `<ion-item id="hstaff${(this.ho_staff_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success">Staff Member No : ${(this.ho_staff_id + 1).toString()}</ion-label><ion-button id="ho_staff_closebtn${(this.ho_staff_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-input placeholder="Name" id="staffname${(this.ho_staff_id).toString()}" ></ion-input><ion-input placeholder="Surname" id="staffsurname${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Job Title" id="staffjtitle${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Exp in Years" class="exp_year" id="staffexp_year${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Professional registration No" id="staffprof_reg_no${(this.ho_staff_id).toString()}"></ion-input><ion-input placeholder="Contact Phone Number" id="staffphone${(this.ho_staff_id).toString()}" >+</ion-input><ion-input placeholder="Contact Email" id="staffemail${(this.ho_staff_id).toString()}"></ion-input><ion-item><ion-label position="stacked">LETTER OF APPOINTMENT</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_appointment${(this.ho_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Prof Registration</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_prof_registration${(this.ho_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Qualification</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_qualification${(this.ho_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">CV</ion-label><ion-input name="file" type="file" accept="application/pdf" id="ho_staff_cv${(this.ho_staff_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById("ho_staff_area").insertAdjacentHTML("beforeend", new_staff);
        document.getElementById(`ho_staff_appointment${this.ho_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `ho_staff_appointment${this.ho_staff_id.toString()}`) });
        document.getElementById(`ho_staff_prof_registration${this.ho_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `ho_staff_prof_registration${this.ho_staff_id.toString()}`) });
        document.getElementById(`ho_staff_qualification${this.ho_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `ho_staff_qualification${this.ho_staff_id.toString()}`) });
        document.getElementById(`ho_staff_cv${this.ho_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `ho_staff_cv${this.ho_staff_id.toString()}`) });
        document.getElementById(`ho_staff_closebtn${(this.ho_staff_id).toString()}`).addEventListener("click", this.closeStaff);
        this.ho_staff_id++;
    }

    closeStaff(event: any) {
        let element_id = event.srcElement.id;
        let ho_staff_id = element_id.replace("ho_staff_closebtn", "");
        document.getElementById(`hstaff${ho_staff_id}`).remove();
    }

    addsoft() {
        let new_soft = `<ion-item class="w-100" id="soft${(this.soft_id).toString()}"><ion-row class="w-100"><ion-label position="stacked" color="success">Software No : ${(this.soft_id + 1).toString()}</ion-label><ion-button id="soft_closebtn${(this.soft_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked" color="success">Software Title</ion-label><ion-input id="softname${(this.soft_id).toString()}" [(ngModel)]="softs[${this.soft_id}]"></ion-input></ion-item><ion-label position="stacked">Upload Licence Document(PDF)</ion-label><ion-input name="file" type="file" accept="application/pdf" id="soft${(this.soft_id).toString()}"></ion-input></ion-item>`;
        document.getElementById("soft_area").insertAdjacentHTML("beforeend", new_soft);
        document.getElementById(`soft${this.soft_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `soft${this.soft_id.toString()}`) });
        document.getElementById(`soft_closebtn${(this.soft_id).toString()}`).addEventListener("click", this.closeSoft);
        this.soft_id++;
    }

    closeSoft(event: any) {
        let element_id = event.srcElement.id;
        let soft_id = element_id.replace("soft_closebtn", "");
        document.getElementById(`soft${soft_id}`).remove();
    }

    addhard() {
        let new_hard = `<ion-item class="w-100" id="hard${(this.hard_id).toString()}"><ion-row class="w-100"><ion-label position="stacked" color="success">Hardware No : ${(this.hard_id + 1).toString()}</ion-label><ion-button id="hard_closebtn${(this.hard_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-item><ion-label position="stacked" color="success">Hardware Name</ion-label><ion-input id="hardname${this.hard_id.toString()}"  [(ngModel)]="hards[${this.hard_id}]"></ion-input></ion-item><ion-label position="stacked">Upload Licence Document(PDF)</ion-label><ion-input name="file" type="file" accept="application/pdf" id="hard${this.hard_id.toString()}"></ion-input></ion-item>`;
        document.getElementById("hard_area").insertAdjacentHTML("beforeend", new_hard);
        document.getElementById(`hard${this.hard_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `hard${this.hard_id.toString()}`) });
        document.getElementById(`hard_closebtn${(this.hard_id).toString()}`).addEventListener("click", this.closeHard);
        this.hard_id++;
    }

    closeHard(event: any) {
        let element_id = event.srcElement.id;
        let hard_id = element_id.replace("hard_closebtn", "");
        document.getElementById(`hard${hard_id}`).remove();
    }

    // manage datas in office
    manage() {
        this.directors = [];
        this.softs = [];
        this.hards = [];
        this.staffs = [];
        this.bo_offices = [];
        for (let i = 0; i < this.director_id; i++) {
            let name = (document.getElementById("dir_name" + i.toString()) as HTMLInputElement).value.toString();
            var prof_reg_no = (document.getElementById("dir_prof_reg_no" + i.toString()) as HTMLInputElement).value.toString();
            var owned = (document.getElementById("dir_owned" + i.toString()) as HTMLInputElement).value.toString();
            this.directors.push({ name: name, prof_reg_no: prof_reg_no, owned: owned });
        }
        for (let i = 0; i < this.soft_id; i++) {
            if (document.getElementById(`soft${i}`) == null) {
                continue;
            } else {
                let filename = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("soft" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { filename = this.pdfs[j].filename; break; }
                }
                if (filename == "") { this.toast("Please upload " + i.toString() + " Software licence pdf."); return { status: false, data: "Software File" }; }
                var name = (document.getElementById("softname" + i.toString()) as HTMLInputElement).value.toString()
                if (name == null || name == "") { "Please input " + i.toString() + " Software Title."; return { status: false, data: "Software Title" }; }
                this.softs.push({ name: name, filename: filename });
            }
        }
        for (let i = 0; i < this.hard_id; i++) {
            if (document.getElementById(`hard${i}`) == null) {
                continue;
            } else {
                let filename = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("hard" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { filename = this.pdfs[j].filename; break; }
                }
                if (filename == "") { this.toast("Please upload " + i.toString() + " Hardware licence pdf."); return { status: false, data: "Hardware File" }; }
                var name = (document.getElementById("hardname" + i.toString()) as HTMLInputElement).value.toString()
                if (name == null || name == "") { "Please input " + i.toString() + " Hardware Title."; return { status: false, data: "Hardware Title" }; }
                this.hards.push({ name: name, filename: filename });
            }
        }
        for (let i = 0; i < this.ho_staff_id; i++) {
            try {
                if (document.getElementById(`hstaff${i}`) == null) {
                    continue;
                } else {
                    let file_appointment = ""; let file_cv = ""; let file_prof_registration = ""; let file_qualification = "";
                    for (let j = 0; j < this.pdfs.length; j++) {
                        if ("file_appointment" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_appointment = this.pdfs[j].filename; }
                        if ("file_cv" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_cv = this.pdfs[j].filename; }
                        if ("file_prof_registration" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_prof_registration = this.pdfs[j].filename; }
                        if ("file_qualification" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_qualification = this.pdfs[j].filename; }
                    }
                    var name = (document.getElementById("staffname" + i.toString()) as HTMLInputElement).value.toString();
                    var surname = (document.getElementById("staffsurname" + i.toString()) as HTMLInputElement).value.toString();
                    var jtitle = (document.getElementById("staffjtitle" + i.toString()) as HTMLInputElement).value.toString();
                    var exp_year = (document.getElementById("staffexp_year" + i.toString()) as HTMLInputElement).value.toString();
                    if (!exp_year.includes("year")) { exp_year = exp_year.concat("year"); }
                    var prof_reg_no = (document.getElementById("staffprof_reg_no" + i.toString()) as HTMLInputElement).value.toString();
                    var phone = (document.getElementById("staffphone" + i.toString()) as HTMLInputElement).value.toString();
                    var email = (document.getElementById("staffemail" + i.toString()) as HTMLInputElement).value.toString();
                    if (name == "" && surname == "" && jtitle == "" && exp_year == "" && prof_reg_no == "" && phone == "" && email == "") { continue; }
                    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) { this.toast("Please input validated email."); }
                    else if (name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == "") { this.toast("Please Fill Gaps"); }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email, file_appointment: file_appointment, file_prof_registration: file_prof_registration, file_qualification: file_qualification, file_cv: file_cv });
                }
            } catch (error) {
                continue;
            }
        }
        for (let i = 0; i < this.bo_id; i++) {
            if (document.getElementById(`bo${i}`) == null) {
                continue;
            } else {
                let file_certificate = ""; let file_address = "";
                for (let j = 0; j < this.pdfs.length; j++) {
                    if ("file_address" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_address = this.pdfs[j].filename; }
                    if ("file_certificate" == this.pdfs[j].name && (i + 1).toString() == this.pdfs[j].id.toString()) { file_certificate = this.pdfs[j].filename; }
                }
                let address = (document.getElementById("bo_address" + i.toString()) as HTMLInputElement).value.toString();
                var phone = (document.getElementById("phone" + i.toString()) as HTMLInputElement).value.toString();
                var email = (document.getElementById("email" + i.toString()) as HTMLInputElement).value.toString();
                var res_prof_name = (document.getElementById("res_prof_name" + i.toString()) as HTMLInputElement).value.toString();
                var res_prof_reg = (document.getElementById("res_prof_reg" + i.toString()) as HTMLInputElement).value.toString();
                if (phone == "" && email == "" && res_prof_name == "" && res_prof_reg == "") { continue; }
                else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) { this.toast("Please input validated email."); }
                else if (address == "" || name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == "") { this.toast("Please Fill Gaps"); }
                this.bo_offices.push({ address: address, phone: phone, email: email, res_prof_name: res_prof_name, res_prof_reg: res_prof_reg, file_certificate: file_certificate, file_address: file_address, status: "Unverified" });
            }
        }
        return { status: true, data: "success" }
    }

    addBusiness() {
        for (let x in this.pform) {
            if (x == "verified_at" || x == "verified_by" || x == "id" || x == "created_by" || x == "updated_at") {
                continue
            };
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
            for (let i = 0; i < this.directors.length; i++) {
                for (let x in this.directors[i]) {
                    if (this.directors[i][x].length == 0) {
                        let name = x.replace("_", " ");
                        return this.toast("Please fill " + name + " of the Director.");
                    }
                }
            }
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
            console.log({ user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices, directors: this.directors })
            this.restApi.post("professional/add-business", { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices, directors: this.directors }).subscribe((res: any) => {
                console.log(res);
                if (res && res.status) {
                    this.restApi.toast(res.message, 1200);
                    // this.getBusiness();
                    // this.getBranchs();
                    // this.segment = "business";
                    // this.business_seg = "branch";
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }, error => {
                console.log(error);
                this.restApi.toast("Please fill as correctly.", 1000);
            });
        } else {
            console.log("Profile addBusiness result_manage.data : ", result_manage.data);
        }
    }

    checkOwned() {
        if (parseInt(this.pform.owned) < 50) { this.pform.owned = "Non professional owner"; }
    }

    getBusiness() {
        this.restApi.post("professional/get-business", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == "success") {
                    if (res.data[0].length > 0) {
                        this.pform = res.data[0][0];
                    };
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
                } else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                    let pformData = this.authService.getData("business");
                    if (pformData != null && pformData != undefined) {
                        this.pform = pformData;
                    }
                    let hformData = this.authService.getData("hoffice");
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
        this.restApi.post("professional/get-branchs", { user_id: this.authService.user.userId }).subscribe((res: any) => {
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
                } else {
                    this.restApi.toast(res.message, 1000);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Data connection problem", 1000);
        });
    }

    //  b - branch office
    addbstaff(id: string, office_id: string) {
        let new_staff = `<ion-item id="bo_staff${(this.bo_staff_id).toString()}" class="w-100"><ion-row class="w-100"><ion-label position="stacked" color="success" class="${office_id}">Staff No : ${(this.bo_staff_id + 1).toString()}</ion-label><ion-button id="bo_staff_closebtn${(this.bo_staff_id).toString()}" class="closebtn_business">&#x2715</ion-button></ion-row><ion-input placeholder="Name" id="bstaffname${(this.bo_staff_id).toString()}" ></ion-input><ion-input placeholder="Surname" id="bstaffsurname${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Job Title" id="bstaffjtitle${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Exp in Years" id="bstaffexp_year${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Professional registration No" id="bstaffprof_reg_no${(this.bo_staff_id).toString()}"></ion-input><ion-input placeholder="Contect Phone Number" id="bstaffphone${(this.bo_staff_id).toString()}" >+</ion-input><ion-input placeholder="Contact Email" id="bstaffemail${(this.bo_staff_id).toString()}"></ion-input><ion-item><ion-label position="stacked">LETTER OF APPOINTMENT</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_appointment${(this.bo_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Prof Registration</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_prof_registration${(this.bo_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">Qualification</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_qualification${(this.bo_staff_id).toString()}"></ion-input></ion-item><ion-item><ion-label position="stacked">CV</ion-label><ion-input name="file" type="file" accept="application/pdf" id="bo_staff_cv${(this.bo_staff_id).toString()}"></ion-input></ion-item><br></ion-item>`;
        document.getElementById(id).insertAdjacentHTML("beforeend", new_staff);
        document.getElementById(`bo_staff_closebtn${(this.bo_staff_id).toString()}`).addEventListener("click", (e: Event) => { this.closeBranchStaff(e); });
        try {
            document.getElementById(`bo_staff_appointment${this.bo_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_staff_appointment${this.bo_staff_id.toString()}`) });
            document.getElementById(`bo_staff_cv${this.bo_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_staff_cv${this.bo_staff_id.toString()}`) });
            document.getElementById(`bo_staff_prof_registration${this.bo_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_staff_prof_registration${this.bo_staff_id.toString()}`) });
            document.getElementById(`bo_staff_qualification${this.bo_staff_id.toString()}`).addEventListener("change", (e: Event) => { this.changeListener_dynamic(e, `bo_staff_qualification${this.bo_staff_id.toString()}`) });
        } catch (error) {
            console.log(" profile addbstaff error : ", error);
        }
        this.bo_staff_id++;
    }

    closeBranchStaff(event: any) {
        let element_id = event.srcElement.id;
        let bo_staff_id = element_id.replace("bo_staff_closebtn", "");
        document.getElementById(`bo_staff${bo_staff_id}`).remove();
    }

    bstaffs() {
        let bo_staff_id = 0;
        var bstaffs = []
        this.staffs = [];
        for (let i = 0; i < this.bo_offices.length; i++) {
            let eachOffice = document.getElementsByClassName(this.bo_offices[i].phone);
            console.log(this.bo_offices[i], this.bo_offices[i].phone, eachOffice.length, this.pdfs);
            for (let j = 0; j < eachOffice.length; j++) {
                try {
                    let file_appointment = ""; let file_cv = ""; let file_qualification = ""; let file_prof_registration = "";
                    for (let k = 0; k < this.pdfs.length; k++) {
                        if ("bo_file_appointment" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) { file_appointment = this.pdfs[k].filename; }
                        if ("bo_file_cv" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) { file_cv = this.pdfs[k].filename; }
                        if ("bo_file_prof_registration" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) { file_prof_registration = this.pdfs[k].filename; }
                        if ("bo_file_qualification" == this.pdfs[k].name && (bo_staff_id + 1).toString() == this.pdfs[k].id.toString()) { file_qualification = this.pdfs[k].filename; }
                    }
                    if (file_appointment == "") {
                        this.toast("Please upload Letter of appointment of the Branch Staff");
                    }
                    if (file_cv == "") {
                        this.toast("Please upload CV of the Branch Staff");
                    }
                    var name = (document.getElementById("bstaffname" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var surname = (document.getElementById("bstaffsurname" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var jtitle = (document.getElementById("bstaffjtitle" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var exp_year = (document.getElementById("bstaffexp_year" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    if (!exp_year.includes("year")) { exp_year = exp_year.concat("year"); }
                    var prof_reg_no = (document.getElementById("bstaffprof_reg_no" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var phone = (document.getElementById("bstaffphone" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var email = (document.getElementById("bstaffemail" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    // if ( name == "" && surname == "" && jtitle == "" && exp_year == "" && prof_reg_no == "" && phone == "" && email == "" ){ continue; }
                    // else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true){ this.toast("Please input validated email."); }
                    // else if ( name == "" || surname == "" || jtitle == "" || exp_year == "" || prof_reg_no == "" || phone == "" || email == ""){ this.toast("Please Fill Gaps"); }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email, file_appointment: file_appointment, file_prof_registration: file_prof_registration, file_qualification: file_qualification, file_cv: file_cv });
                    bo_staff_id++;
                } catch (error) {
                    bo_staff_id++;
                    console.log(" --------------- ", error);
                }
            }
            bstaffs.push(this.staffs); this.staffs = [];
        }
        console.log({ all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices });
        this.restApi.post("professional/add-bstaffs", { all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices }).subscribe((res: any) => {
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

    getlist(event: any) {
        this.is_profileEdit = false;
        this.is_businessEdit = false;
        if (this.is_director == true && event.detail.value == "business") {
            this.restApi.post("professional/get-list", { user_id: this.authService.user.userId }).subscribe((res: any) => {
                if (res && res.status) {
                    if (!this.is_director) {
                        for (let i = 0; i < res.data[0].length; i++) {
                            let new_buzi = `<ion-select-option value="${(i + 1).toString()}">` + (res.data[0])[i].pname + "(" + (res.data[0])[i].status + ")" + "</ion-select-option>"
                            document.getElementById("business_list").insertAdjacentHTML("beforeend", new_buzi);
                        }
                        for (let j = 0; j < res.data[1].length; j++) {
                            let new_office = `<ion-select-option value="${(j + 1).toString()}">` + (res.data[1])[j].email + "(" + (res.data[1])[j].status + ")" + "</ion-select-option>"
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

    changeOffice(event: any) {
        this.is_businessEdit = false;
        this.is_nonDirectorEdit = false;
    }

    // Non director
    updateBuzi() {
        console.log(this.mybusiness, this.myoffice);
        this.restApi.post("professional/save-id", { user_id: this.authService.user.userId, buzi_id: this.mybusiness, office_id: this.myoffice }).subscribe((res: any) => {
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

    changeListener_dynamic(event: any, keyword: string): void {
        console.log("Profile changeListener_dynamic : keyword : ", keyword);
        try {
            this.saveButtonFlag = true;
            let file = event.target.files[0]; let current_index = 0;
            if (file && file.type == "application/pdf") {
                this.restApi.postFile(file, "upload-file", "office").subscribe(res => {
                    if (res && res.status && res.status == "success") {
                        console.log(" Profile page - after upload file : ", res);
                        if (keyword.includes("bo_file_address")) {
                            current_index = parseInt(keyword.replace("bo_file_address", ""));
                            this.pdfs.push({ id: current_index, name: "file_address", filename: res.filename });
                        } else if (keyword.includes("bo_file_certificate")) {
                            current_index = parseInt(keyword.replace("bo_file_certificate", ""));
                            this.pdfs.push({ id: current_index, name: "file_certificate", filename: res.filename });
                        } else if (keyword.includes("ho_staff_appointment")) {
                            current_index = parseInt(keyword.replace("ho_staff_appointment", ""));
                            this.pdfs.push({ id: current_index, name: "file_appointment", filename: res.filename });
                        } else if (keyword.includes("ho_staff_prof_registration")) {
                            current_index = parseInt(keyword.replace("ho_staff_prof_registration", ""));
                            this.pdfs.push({ id: current_index, name: "file_prof_registration", filename: res.filename });
                        } else if (keyword.includes("ho_staff_qualification")) {
                            current_index = parseInt(keyword.replace("ho_staff_qualification", ""));
                            this.pdfs.push({ id: current_index, name: "file_qualification", filename: res.filename });
                        } else if (keyword.includes("ho_staff_cv")) {
                            current_index = parseInt(keyword.replace("ho_staff_cv", ""));
                            this.pdfs.push({ id: current_index, name: "file_cv", filename: res.filename });
                        } else if (keyword.includes("bo_staff_appointment")) {
                            current_index = parseInt(keyword.replace("bo_staff_appointment", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_appointment", filename: res.filename });
                        } else if (keyword.includes("bo_staff_qualification")) {
                            current_index = parseInt(keyword.replace("bo_staff_qualification", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_qualification", filename: res.filename });
                        } else if (keyword.includes("bo_staff_prof_registration")) {
                            current_index = parseInt(keyword.replace("bo_staff_prof_registration", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_prof_registration", filename: res.filename });
                        } else if (keyword.includes("bo_staff_cv")) {
                            current_index = parseInt(keyword.replace("bo_staff_cv", ""));
                            this.pdfs.push({ id: current_index, name: "bo_file_cv", filename: res.filename });
                        } else if (keyword.includes("soft")) {
                            current_index = parseInt(keyword.replace("soft", ""));
                            this.pdfs.push({ id: current_index, name: "soft", filename: res.filename });
                        } else if (keyword.includes("hard")) {
                            current_index = parseInt(keyword.replace("hard", ""));
                            this.pdfs.push({ id: current_index, name: "hard", filename: res.filename });
                        } else if (keyword == "hoffice_file_certificate") {
                            this.hform.file_certificate = res.filename;
                        } else if (keyword == "hoffice_file_address") {
                            this.hform.file_address = res.filename;
                        } else {
                            console.log(keyword, "keyword");
                        }
                        this.saveButtonFlag = false;
                    }
                }, error => {
                    console.log(error);
                    // this.saveButtonFlag = false;
                });
            } else {
                this.restApi.toast("Only PDF supported", 1200);
                this.saveButtonFlag = false;
            }
        } catch (error) {
            console.log(" Profile changeListener_dynamic error : ", error);
            this.saveButtonFlag = false;
        }
    }

    changeListener($event: any, type: string): void {
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
        } else {
            this.restApi.toast("Only PDF supported", 1200);
            // this.saveButtonFlag = false;
        }
    }

    toast(message: string) {
        this.toastController.create({
            message: message,
            duration: 1500
        }).then(toast => toast.present());
    }
}
