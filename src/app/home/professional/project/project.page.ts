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
    loadData: Array<any> = [];
    updateData: any
    form: any = {
        title: '',
        prof_type: '',
        type: 'Residential',
        const_cost: '',
        final_cost: '',
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
        status: 'Ongoing'
    }

    constructor(public restApi: RestApiService, public authService: AuthenticateService, public toastController: ToastController) { }

    ngOnInit() {

        this.getProjects();
    }

    toast(message) {
        this.toastController.create({
            message: message,
            duration: 2000
        }).then(toast => toast.present());
    }

    getProjects() {
        this.restApi.post('professional/get-project', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.loadData = res.data;
                    console.log(this.loadData);
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

    addProjects() {
        let { title, prof_type, const_cost, final_cost, variable, prof_cost, year, completed_at, description, client_name, pl_name, pl_email, pl_phone, proj_street1, proj_street2, proj_city, proj_state, proj_zip } = this.form;
        if (title.length == 0) { this.toast("Please fill title"); return; }
        if (prof_type.length == 0) { this.toast("Please fill Type"); return; }
        if (const_cost.length == 0) { this.toast("Please fill Construction Cost"); return; }
        if (final_cost.length == 0) { this.toast("Please fill Final Cost"); return; }
        if (prof_cost.length == 0) { this.toast("Please fill Professional Cost"); return; }
        if (year.length == 0) { this.toast("Please fill Start Date"); return; }
        if (completed_at.length == 0) { this.toast("Please fill Construction Complete Date"); return; }
        if (description.length == 0) { this.toast("Please fill description"); return; }
        if (client_name.length == 0) { this.toast("Please fill Client Name"); return; }
        if (pl_name.length == 0) { this.toast("Please fill Project Leader Name"); return; }
        if (pl_email.length == 0) { this.toast("Please fill Project Leader Email"); return; }
        if (pl_phone.length == 0) { this.toast("Please fill Project Leader Phone number"); return; }
        if (proj_street1.length == 0) { this.toast("Please fill Project Location Street1"); return; }
        if (proj_street2.length == 0) { this.toast("Please fill Project Location Street2"); return; }
        if (proj_city.length == 0) { this.toast("Please fill Project Location City"); return; }
        if (proj_state.length == 0) { this.toast("Please fill Project Location State"); return; }
        if (proj_zip.length == 0) { this.toast("Please fill Project Location Zipcode"); return; }
        // if (!this.form.const_cost.includes('R')) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes('R')) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        this.form.variable = ((parseInt(final_cost) - parseInt(const_cost)) / parseInt(const_cost) * 100).toString();
        this.restApi.post('professional/add-project', { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
            if (res && res.status) {
                this.toastController.create({ message: res.message, duration: 2000 })
                    .then(toast => toast.present());
                if (res.id != "exist") { this.getProjects(); this.segment = 'paper'; }
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    action(x, act) {
        this.restApi.post('professional/action-project', { title: x.title, user_id: x.created_by, verified: act }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.getProjects();
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
}

