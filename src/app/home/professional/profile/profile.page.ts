import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { RestApiService } from 'src/app/services/rest-api.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
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

    pform: any = {
        pname: '',
        pcouncil: '',
        pcipc_reg_no: '',
        ptype: 'CC',
        director: '',
        dir_prof_regno: '',
        owned: '',
        status: 'Unverified'
    };

    hform: any = {
        phone: '',
        email: '',
        res_prof_name: '',
        res_prof_reg: '',
        filename: '',
        status: 'Unverified'
    }

    ho_staff_id: any = 0;
    staffs: Array<{ name: string, surname: string, jtitle: string, exp_year: string, prof_reg_no: string, email: string, phone: string }> = [];
    soft_id: any = 0;
    softs: Array<{ name: string, filename: string }> = [];
    hard_id: any = 0;
    hards: Array<{ name: string, filename: string }> = [];

    bo_id: any = 0;
    bo_offices: Array<{ phone: string, email: string, res_prof_name: string, res_prof_reg: string, filename: string, status: 'Unverified' }> = [];

    bo_staff_id: any = 0;

    mybusiness: string;
    myoffice: string;
    pdfs: Array<{ name: string, filename: string }> = [];

    constructor(public http: HttpClient, public toastController: ToastController, public authService: AuthenticateService, public restApi: RestApiService) { }

    ngOnInit() {
        this.getProfile();
        this.getBusiness();
        this.getBranchs();
    }

    // Edit Content Button Setting
    editPerson() {
        this.is_profileEdit = !this.is_profileEdit;
        var element1 = <HTMLInputElement>document.getElementById("profess_profile");
        element1.disabled = !this.is_profileEdit;
        if (this.is_profileEdit) { element1.style.opacity = '1'; }
        else { element1.style.opacity = '0.55'; }
    }

    editBusiness() {
        this.is_businessEdit = !this.is_businessEdit;
        var element1 = <HTMLInputElement>document.getElementById("business_profile");
        element1.disabled = !this.is_businessEdit;
        if (this.is_businessEdit) { element1.style.opacity = '1'; }
        else { element1.style.opacity = '0.55'; }
    }

    editBuzi() {
        this.is_nonDirectorEdit = !this.is_nonDirectorEdit;
        var element1 = <HTMLInputElement>document.getElementById("Buzi_info");
        element1.disabled = this.is_nonDirectorEdit;
        if (this.is_nonDirectorEdit) { element1.style.opacity = '1'; }
        else { element1.style.opacity = '0.55'; }
    }

    //  Add and get Profile
    addProfile() {
        if (this.is_director) { this.form.is_director = "1"; }
        else { this.form.is_director = "0"; }
        let { name, surname, council, reg_no, employer, exp_year } = this.form;
        if (name.length == 0) { this.toast("Please fill Name"); return; }
        if (surname.length == 0) { this.toast("Please fill Surname"); return; }
        if (council.length == 0) { this.toast("Please fill Council Membership"); return; }
        if (reg_no.length == 0) { this.toast("Please fill Registration Number"); return; }
        if (employer.length == 0) { this.toast("Please fill Employer Name"); return; }
        if (exp_year.length == 0) { this.toast("Please fill Exp in Years"); return; }
        if (!this.form.exp_year.includes('year')) { this.form.exp_year = this.form.exp_year.concat(" year"); }
        this.restApi.post('professional/add-profile', { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.result);
                this.restApi.toast(" Successfully Updated.", 1200);
            }
        }, error => {
            this.restApi.toast("Please fill as correctly.", 1200);
        });
    }

    getProfile() {
        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res.status != "noexist") {
                this.form = res.personal;
                if (this.form.is_director == "0") { this.is_director = false; }
                else { this.is_director = true; }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    //  Business - branch, staff, soft, hardware
    addbranch() {
        let new_branch = "<ion-item><ion-label position='stacked' color='success'>Branch Office No : " + (this.bo_id + 1).toString() + "</ion-label></ion-item><ion-item><ion-label position='stacked'>Contact Number</ion-label><ion-input id='phone" + this.bo_id.toString() + "' >+</ion-input></ion-item><ion-item><ion-label position='stacked'>Contact Email</ion-label><ion-input id='email" + this.bo_id.toString() + "'></ion-input></ion-item><ion-item><ion-label position='stacked'>Responsible Professional Name</ion-label><ion-input id='res_prof_name" + this.bo_id.toString() + "' ></ion-input></ion-item><ion-item><ion-label position='stacked'>Responsible Professional PR registration</ion-label><ion-input id='res_prof_reg" + this.bo_id.toString() + "'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='bfile" + this.bo_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('branch_area').insertAdjacentHTML("beforeend", new_branch);
        let target_element = document.getElementById('bfile' + this.bo_id.toString());
        target_element.addEventListener("change", (e: Event) => { this.bchange(e) });
        this.bo_id++;
    }

    cancelbranch() {
        console.log(this.bo_id);
    }

    addStaff() {
        let new_staff = "<ion-item id='hstaff" + this.ho_staff_id.toString() + "'><ion-label position='stacked' color='success'>Staff No : " + (this.ho_staff_id + 1).toString() + "</ion-label><ion-input placeholder='Name' id='staffname" + this.ho_staff_id.toString() + "' ></ion-input><ion-input placeholder='Surname' id='staffsurname" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Job Title' id='staffjtitle" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Exp in Years' class='exp_year' id='staffexp_year" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Professional registration No' id='staffprof_reg_no" + this.ho_staff_id.toString() + "'></ion-input><ion-input placeholder='Contact Phone Number' id='staffphone" + this.ho_staff_id.toString() + "' >+</ion-input><ion-input placeholder='Contact Email' id='staffemail" + this.ho_staff_id.toString() + "'></ion-input><br></ion-item>";
        document.getElementById('ho_staff_area').insertAdjacentHTML("beforeend", new_staff);
        this.ho_staff_id++;
    }

    cancelStaff() {
        console.log(this.ho_staff_id);
    }

    addsoft() {
        let new_soft = "<ion-item><ion-label position='stacked' color='success'>Software No : " + (this.soft_id + 1).toString() + "</ion-label><ion-input id='softname" + this.soft_id.toString() + "' [(ngModel)]='softs[" + this.soft_id + "]'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='soft" + this.soft_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('soft_area').insertAdjacentHTML("beforeend", new_soft);
        let target_elem = document.getElementById('soft' + this.soft_id.toString());
        target_elem.addEventListener("change", (e: Event) => { this.bchange(e) });
        this.soft_id++;
    }

    addhard() {
        let new_hard = "<ion-item><ion-label position='stacked' color='success'>Hardware No : " + (this.hard_id + 1).toString() + "</ion-label><ion-input id='hardname" + this.hard_id.toString() + "'  [(ngModel)]='hards[" + this.hard_id + "]'></ion-input></ion-item><ion-item><ion-label position='stacked'>Upload Pdf to proof the address</ion-label><ion-input name='file' type='file' accept='application/pdf' id='hard" + this.hard_id.toString() + "'></ion-input></ion-item><br>";
        document.getElementById('hard_area').insertAdjacentHTML("beforeend", new_hard);
        let target_elem = document.getElementById('hard' + this.hard_id.toString())
        target_elem.addEventListener("change", (e: Event) => { this.bchange(e) });
        this.hard_id++;
    }

    // manage datas in office
    manage() {
        this.softs = [];
        this.hards = [];
        this.staffs = [];
        this.bo_offices = [];
        for (let i = 0; i < this.soft_id; i++) {
            var filename = '';
            for (let j = 0; j < this.pdfs.length; j++) {
                if ('soft' + i.toString() == this.pdfs[j].name) { filename = this.pdfs[j].filename; }
            }
            if (filename == '') { this.toast("Please upload " + i.toString() + ' Software licence pdf.'); }
            var name = (document.getElementById("softname" + i.toString()) as HTMLInputElement).value.toString()
            if (name == null || name == '') { "Please input " + i.toString() + ' Software name.'; }
            this.softs.push({ name: name, filename: filename });
        }
        for (let i = 0; i < this.hard_id; i++) {
            var filename = '';
            for (let j = 0; j < this.pdfs.length; j++) {
                if ('hard' + i.toString() == this.pdfs[j].name) { filename = this.pdfs[j].filename; }
            }
            if (filename == '') { this.toast("Please upload " + i.toString() + ' Hardware licence pdf.'); }
            var name = (document.getElementById("hardname" + i.toString()) as HTMLInputElement).value.toString()
            if (name == null || name == '') { "Please input " + i.toString() + ' Hardware name.'; }
            this.hards.push({ name: name, filename: filename });
        }
        for (let i = 0; i < this.ho_staff_id; i++) {
            try {
                var name = (document.getElementById("staffname" + i.toString()) as HTMLInputElement).value.toString();
                var surname = (document.getElementById("staffsurname" + i.toString()) as HTMLInputElement).value.toString();
                var jtitle = (document.getElementById("staffjtitle" + i.toString()) as HTMLInputElement).value.toString();
                var exp_year = (document.getElementById("staffexp_year" + i.toString()) as HTMLInputElement).value.toString();
                if (!exp_year.includes('year')) { exp_year = exp_year.concat("year"); }
                var prof_reg_no = (document.getElementById("staffprof_reg_no" + i.toString()) as HTMLInputElement).value.toString();
                var phone = (document.getElementById("staffphone" + i.toString()) as HTMLInputElement).value.toString();
                var email = (document.getElementById("staffemail" + i.toString()) as HTMLInputElement).value.toString();
                if (name == '' && surname == '' && jtitle == '' && exp_year == '' && prof_reg_no == '' && phone == '' && email == '') { continue; }
                else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) { this.toast("Please input validated email."); }
                else if (name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == '') { this.toast("Please Fill Gaps"); }
                this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email });
            } catch (error) {
                continue;
            }
        }
        for (let i = 0; i < this.bo_id; i++) {
            var filename = '';
            for (let j = 0; j < this.pdfs.length; j++) {
                if ('bfile' + i.toString() == this.pdfs[j].name) { filename = this.pdfs[j].filename; }
            }
            if (filename == '') { this.toast("Please upload " + i.toString() + ' Branch Office Address Proof pdf.'); }
            var phone = (document.getElementById("phone" + i.toString()) as HTMLInputElement).value.toString();
            var email = (document.getElementById("email" + i.toString()) as HTMLInputElement).value.toString();
            var res_prof_name = (document.getElementById("res_prof_name" + i.toString()) as HTMLInputElement).value.toString();
            var res_prof_reg = (document.getElementById("res_prof_reg" + i.toString()) as HTMLInputElement).value.toString();
            if (phone == '' && email == '' && res_prof_name == '' && res_prof_reg == '') { continue; }
            else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true) { this.toast("Please input validated email."); }
            else if (name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == '') { this.toast("Please Fill Gaps"); }
            this.bo_offices.push({ phone: phone, email: email, res_prof_name: res_prof_name, res_prof_reg: res_prof_reg, filename: filename, status: "Unverified" });
        }
    }

    addBusiness() {
        for (let x in this.pform) {
            if (x == 'verified_at' || x == 'verified_by' || x == 'id' || x == 'created_by' || x == 'updated_at') {
                continue
            };
            if (this.pform[x].length == 0) {
                let name = x.replace('_', ' ');
                return this.toast("Please fill " + name + " of the Business");
            }
        }
        for (let x in this.hform) {
            if (this.hform[x].length == 0) {
                let name = x.replace('_', ' ');
                return this.toast("Please fill " + name + " of the Head Office.");
            }
        }
        this.manage();
        for ( let i = 0; i < this.bo_offices.length; i++ ) {
            for (let x in this.bo_offices[i]) {
                if (this.bo_offices[i][x].length == 0) {
                    let name = x.replace('_', ' ');
                    return this.toast("Please fill " + name + " of the Branch Office.");
                }
            }    
        }
        for ( let i = 0; i < this.hards.length; i++ ) {
            for (let x in this.hards[i]) {
                if (this.hards[i][x].length == 0) {
                    let name = x.replace('_', ' ');
                    return this.toast("Please fill " + name + " of the Hardware.");
                }
            }    
        }
        for ( let i = 0; i < this.softs.length; i++ ) {
            for (let x in this.softs[i]) {
                if (this.softs[i][x].length == 0) {
                    let name = x.replace('_', ' ');
                    return this.toast("Please fill " + name + " of the Software.");
                }
            }    
        }
        // console.log( { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices })
        this.restApi.post('professional/add-business', { user_id: this.authService.user.userId, data: this.pform, hoffice: this.hform, softs: this.softs, hards: this.hards, staffs: this.staffs, branchs: this.bo_offices }).subscribe((res: any) => {
            // console.log(res);
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.getBusiness();
                this.getBranchs();
                this.segment = 'business';
                this.business_seg = 'branch';
            } else {
                this.restApi.toast(res.message, 1200);
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Please fill as correctly.', 1000);
        });
    }

    checkOwned() {
        if (parseInt(this.pform.owned) < 50) { this.pform.owned = 'Non professional owner'; }
    }

    getBusiness() {
        this.restApi.post('professional/get-business', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    if (res.data[0].length > 0) this.pform = res.data[0][0];
                    if (res.data[1].length > 0) {
                        this.hform = [];
                        let head_office = res.data[1][0];
                        this.hform['phone'] = head_office['phone'];
                        this.hform['email'] = head_office['email'];
                        this.hform['res_prof_name'] = head_office['res_prof_name'];
                        this.hform['res_prof_reg'] = head_office['res_prof_reg'];
                        this.hform['filename'] = head_office['filename'];
                        this.hform['status'] = head_office['status'];
                    }
                    // if ( parseInt(res.data[0]) < 50 ){ this.pform.owned = 'Non professional owner'; } 
                } else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getBranchs() {
        this.restApi.post('professional/get-branchs', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    for ( let i = 0; i < res.data.length; i++ ) {
                        let each_office = {phone: res.data[i]['phone'], email: res.data[i]['email'], res_prof_name: res.data[i]['res_prof_name'], res_prof_reg: res.data[i]['res_prof_reg'], filename: res.data[i]['filename'], status: res.data[i]['status']}
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
        let new_staff = "<ion-item><ion-label position='stacked' color='success' class='" + office_id + "' >Staff No : " + (this.bo_staff_id + 1).toString() + "</ion-label></ion-item><ion-input placeholder='Name' id='bstaffname" + this.bo_staff_id.toString() + "' ></ion-input><ion-input placeholder='Surname' id='bstaffsurname" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Job Title' id='bstaffjtitle" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Exp in Years' id='bstaffexp_year" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Professional registration No' id='bstaffprof_reg_no" + this.bo_staff_id.toString() + "'></ion-input><ion-input placeholder='Contect Phone Number' id='bstaffphone" + this.bo_staff_id.toString() + "' >+</ion-input><ion-input placeholder='Contact Email' id='bstaffemail" + this.bo_staff_id.toString() + "'></ion-input><br>";
        document.getElementById(id).insertAdjacentHTML("beforeend", new_staff);
        this.bo_staff_id++;
    }

    bstaffs() {
        let bo_staff_id = 0;
        var bstaffs = []
        this.staffs = [];
        for (let i = 0; i < this.bo_offices.length; i++) {
            let eachOffice = document.getElementsByClassName(this.bo_offices[i].phone);
            console.log(this.bo_offices[i], this.bo_offices[i].phone, eachOffice.length);
            for (let j = 0; j < eachOffice.length; j++) {
                try {
                    var name = (document.getElementById("bstaffname" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var surname = (document.getElementById("bstaffsurname" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var jtitle = (document.getElementById("bstaffjtitle" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var exp_year = (document.getElementById("bstaffexp_year" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    if (!exp_year.includes('year')) { exp_year = exp_year.concat("year"); }
                    var prof_reg_no = (document.getElementById("bstaffprof_reg_no" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var phone = (document.getElementById("bstaffphone" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    var email = (document.getElementById("bstaffemail" + bo_staff_id.toString()) as HTMLInputElement).value.toString();
                    // if ( name == '' && surname == '' && jtitle == '' && exp_year == '' && prof_reg_no == '' && phone == '' && email == '' ){ continue; }
                    // else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) != true){ this.toast("Please input validated email."); }
                    // else if ( name == '' || surname == '' || jtitle == '' || exp_year == '' || prof_reg_no == '' || phone == '' || email == ''){ this.toast("Please Fill Gaps"); }
                    this.staffs.push({ name: name, surname: surname, jtitle: jtitle, exp_year: exp_year, prof_reg_no: prof_reg_no, phone: phone, email: email });
                    bo_staff_id++;
                } catch (error) {
                    bo_staff_id++;
                    console.log(" --------------- ", error);
                }
            }
            bstaffs.push(this.staffs); this.staffs = [];
        }

        this.restApi.post('professional/add-bstaffs', { all: this.bo_staff_id, user_id: this.authService.user.userId, staffs: bstaffs, offices: this.bo_offices }).subscribe((res: any) => {
            if (res && res.status) {
                this.toastController.create({
                    message: res.data,
                    duration: 2000
                }).then(toast => toast.present());
                console.log(res.data);
                // this.getBusiness();
                // this.getBranchs();
                // this.segment = 'business';
                // this.business_seg = 'branch';
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getlist(event: any) {
        this.is_profileEdit = false;
        this.is_businessEdit = false;
        if (this.is_director == true && event.detail.value == "business") {
            this.restApi.post('professional/get-list', { user_id: this.authService.user.userId }).subscribe((res: any) => {
                if (res && res.status) {
                    if ( !this.is_director ) {
                        for (let i = 0; i < res.data[0].length; i++) {
                            let new_buzi = '<ion-select-option value="' + (i + 1).toString() + '">' + (res.data[0])[i].pname + "(" + (res.data[0])[i].status + ")" + '</ion-select-option>'
                            document.getElementById("business_list").insertAdjacentHTML("beforeend", new_buzi);
                        }
                        for (let j = 0; j < res.data[1].length; j++) {
                            let new_office = '<ion-select-option value="' + (j + 1).toString() + '">' + (res.data[1])[j].email + "(" + (res.data[1])[j].status + ")" + '</ion-select-option>'
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
                this.restApi.toast('Something went wrong.', 1200);
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
        this.restApi.post('professional/save-id', { user_id: this.authService.user.userId, buzi_id: this.mybusiness, office_id: this.myoffice }).subscribe((res: any) => {
            console.log(res.data);
            if (res && res.status == "success") {
                console.log(res.data);
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    file: File;
    bchange(event: any): void {
        this.file = event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file, event.path[1].id);
        } else {
            this.toast("Only PDF supported");
        }
    }

    changeListener(event: any, key: any): void {
        this.file = event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file, key);
        } else {
            this.toast("Only PDF supported");
        }
    }

    uploadFile(file: any, key: any) {
        this.restApi.postFile(file, '/upload-file').subscribe(res => {
            if (res && res.status && res.status == 'success') {
                if (key == 'hoffice') { this.hform.filename = res.filename; }
                else if (key == 'employer') { this.form.employer_requirPDF = res.filename; }
                else { this.pdfs.push({ name: key, filename: res.filename }); }
            }
        }, error => {
            console.log(error);
        });
    }

    toast(message: string) {
        this.toastController.create({
            message: message,
            duration: 2000
        }).then(toast => toast.present());
    }
}
