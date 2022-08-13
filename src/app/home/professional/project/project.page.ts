import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';


@Component({
    selector: 'app-project',
    templateUrl: './project.page.html',
    styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {

    segment: string = "paper";
    name: string = "any";
    complete_flag: Boolean = false;
    loadData: Array<any> = [];
    updateData: any
    form: any = {
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
        file:''
    }

    constructor(public restApi: RestApiService, public authService: AuthenticateService, public toastController: ToastController) { }

    ngOnInit() {

        this.getProjects();
    }

    getProjects() {
        this.restApi.post('professional/get-project', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.loadData = res.data;
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }

    addProjects() {
        let { title, prof_type, const_cost, variable, prof_cost, year, completed_at, description, client_name, pl_name, pl_email, pl_phone, proj_street1, proj_street2, proj_city, proj_state, proj_zip, file } = this.form;
        if (title.length == 0) { this.restApi.toast("Please fill title",1200); return; }
        if (prof_type.length == 0) { this.restApi.toast("Please fill Type",1200); return; }
        if (const_cost.length == 0) { this.restApi.toast("Please fill Construction Cost",1200); return; }
        if (prof_cost.length == 0) { this.restApi.toast("Please fill Professional Cost",1200); return; }
        if (year.length == 0) { this.restApi.toast("Please fill Start Date",1200); return; }
        if (completed_at.length == 0) { this.restApi.toast("Please fill Construction Complete Date",1200); return; }
        if (description.length == 0) { this.restApi.toast("Please fill description",1200); return; }
        if (client_name.length == 0) { this.restApi.toast("Please fill Client Name",1200); return; }
        if (pl_name.length == 0) { this.restApi.toast("Please fill Project Leader Name",1200); return; }
        if (pl_email.length == 0) { this.restApi.toast("Please fill Project Leader Email",1200); return; }
        if (pl_phone.length == 0) { this.restApi.toast("Please fill Project Leader Phone number",1200); return; }
        if (proj_street1.length == 0) { this.restApi.toast("Please fill Project Location Street1",1200); return; }
        if (proj_street2.length == 0) { this.restApi.toast("Please fill Project Location Street2",1200); return; }
        if (proj_city.length == 0) { this.restApi.toast("Please fill Project Location City",1200); return; }
        if (proj_state.length == 0) { this.restApi.toast("Please fill Project Location State",1200); return; }
        if (proj_zip.length == 0) { this.restApi.toast("Please fill Project Location Zipcode",1200); return; }
        if ( file.length == 0 ) { this.restApi.toast("Please input project document.",1200); return; } 
        // if (!this.form.const_cost.includes('R')) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes('R')) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        this.form.variable = (((parseInt(const_cost) / (parseInt(const_cost) + parseInt(prof_cost)) * 100)).toFixed(2)).toString();
        this.restApi.post('professional/add-project', { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
            if (res && res.status) {
                this.restApi.toast(res.message,1200);
                if (res.id != "exist") { this.getProjects(); this.segment = 'paper'; }
            }
        }, error => {
            this.restApi.toast('Something went wrong.',1200);
        });
    }

    action(x:any, act:any) {
        this.restApi.post('professional/action-project', { title: x.title, user_id: x.created_by, verified: act }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.getProjects();
                } else {
                    this.restApi.toast(res.message,1200);
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.',1200);
        });
    }

    change_status(event:any){
        if ( event.detail.value == "Completed" ) {
            this.complete_flag = true;
        }
    }

    file: File;
    changeListener($event : any): void {
        this.file = $event.target.files[0];
        if (this.file && this.file.type == 'application/pdf') {
            this.uploadFile(this.file);
        } else {
            this.restApi.toast("Only PDF supported", 1200);
        }
    }

    uploadFile(file: any) {
        this.restApi.postFile(file, '/upload-file').subscribe(res => {
            if (res && res.status && res.status == 'success') {
                this.form.file = res.filename;
            }
        }, error => {
            console.log(error);
        });
    }

    download(filename: string) {
        this.restApi.downfile('uploads/', filename);
    }
}

