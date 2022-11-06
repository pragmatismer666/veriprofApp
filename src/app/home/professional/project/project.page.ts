import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
import { ToastController, AlertController } from "@ionic/angular";

@Component({
    selector: "app-project",
    templateUrl: "./project.page.html",
    styleUrls: ["./project.page.scss"],
})
export class ProjectPage implements OnInit {

    segment: string = "paper";
    name: string = "any";
    completeFlag: Boolean = false;
    loadData: Array<any> = [];
    updateData: any
    form: any = {
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
    }
    saveButtonFlag: Boolean = false;

    constructor(public restApi: RestApiService, public authService: AuthenticateService, public toastController: ToastController, private alertController: AlertController) { }

    ngOnInit() {

        this.getProjects();
    }

    getProjects() {
        this.restApi.post("professional/get-project", { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.loadData = res.data;
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    addProjects() {
        let { title, prof_type, const_cost, prof_cost, final_cost, started_at, description, client_name, pl_name, pl_email, pl_phone, proj_address, proj_gps, proj_city, proj_state, proj_zip, status, appointment, pratical_certification, final_certification, final_account } = this.form;
        if (title.length == 0) { this.restApi.toast("Please fill title", 1200); return; }
        if (prof_type.length == 0) { this.restApi.toast("Please fill Type", 1200); return; }
        if (const_cost.length == 0) { this.restApi.toast("Please fill Construction Cost", 1200); return; }
        if (prof_cost.length == 0) { this.restApi.toast("Please fill Professional Cost", 1200); return; }
        if (started_at.length == 0) { this.restApi.toast("Please fill Start Date", 1200); return; }
        if (description.length == 0) { this.restApi.toast("Please fill description", 1200); return; }
        if (client_name.length == 0) { this.restApi.toast("Please fill Client Name", 1200); return; }
        if (pl_name.length == 0) { this.restApi.toast("Please fill Project Leader Name", 1200); return; }
        if (pl_email.length == 0) { this.restApi.toast("Please fill Project Leader Email", 1200); return; }
        if (pl_phone.length == 0) { this.restApi.toast("Please fill Project Leader Phone number", 1200); return; }
        if (proj_address.length == 0) { this.restApi.toast("Please fill Project Location Address", 1200); return; }
        if (proj_gps.length == 0) { this.restApi.toast("Please fill Project Location GPS", 1200); return; }
        if (proj_city.length == 0) { this.restApi.toast("Please fill Project Location City", 1200); return; }
        if (proj_state.length == 0) { this.restApi.toast("Please fill Project Location Province", 1200); return; }
        if (proj_zip.length == 0) { this.restApi.toast("Please fill Project Location Zipcode", 1200); return; }
        if (appointment.length == 0) { this.restApi.toast("Please input letter of appointment and wait for seconds.", 1200); return; }
        if (pratical_certification.length == 0) { this.restApi.toast("Please input pratical completion certificate and wait for seconds.", 1200); return; }
        if (final_certification.length == 0) { this.restApi.toast("Please input final completion certificate and wait for seconds.", 1200); return; }
        if (final_account.length == 0) { this.restApi.toast("Please input final account and wait for seconds.", 1200); return; }
        // if (!this.form.const_cost.includes("R")) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes("R")) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        if (status != "Ongoing" && final_cost != "0" && final_cost != "") {
            this.form.variable = ((parseInt(const_cost) - (parseInt(final_cost)) / parseInt(final_cost)) * 100).toFixed(2).toString();
        }
        this.restApi.post("professional/add-project", { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                if (res.id != "exist") {
                    this.getProjects(); this.segment = "paper";
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

    async action(x: any, act: any) {
        let updateProjectData = { title: x.title, user_id: x.created_by, verified: act, completed_at: "", final_cost: "0" };
        if (act == "Completed" || act == "Cancelled") {
            const alert = await this.alertController.create({
                header: 'Please enter your info',
                buttons: [{
                    text: 'OK',
                    handler: (data) => {
                        if (data["0"] == "" || data["1"] == "") {
                            return false;
                        } else if (parseFloat(data["0"]) > parseFloat(x.const_cost)) {
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
            await alert.present();
        } else if (act == "Ongoing") {
            this.updateStatus(updateProjectData);
        } else if (act == "Update") {
            this.form = x;
            this.segment = "add-circle";
        } else if (act == "Verify") {
            this.request_verification(x.id);
        }
    }

    request_verification(project_id: string){
        this.restApi.post("professional/request-verificationProject", { user_id: this.authService.user.userId, project_id: project_id }).subscribe((res: any) => {
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.getProjects();
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    updateStatus(data: any) {
        this.restApi.post("professional/action-project", data).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == "success") {
                    this.getProjects();
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    change_status(event: any) {
        if (event.detail.value == "Completed" || event.detail.value == "Cancelled") {
            this.completeFlag = true;
        } else if (event.detail.value == "Ongoing") {
            this.completeFlag = false;
        }
    }

    changeListener($event: any, type: string): void {
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
        } else {
            this.restApi.toast("Only PDF supported", 1200);
            this.saveButtonFlag = false;
        }
    }

    download(filename: string) {
        this.restApi.downfile("uploads/", filename);
    }
}

