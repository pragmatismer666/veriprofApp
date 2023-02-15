import { Component, OnInit, ViewChild } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { AuthenticateService } from "src/app/services/authentication.service";
import { ToastController, AlertController, IonModal } from "@ionic/angular";

@Component({
    selector: "app-project",
    templateUrl: "./project.page.html",
    styleUrls: ["./project.page.scss"],
})
export class ProjectPage implements OnInit {

    @ViewChild(IonModal) modal: IonModal;
    isUpdateModal: Boolean = false;
    current_status: string = "Ongoing";
    segment: string = "paper";
    name: string = "any";
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
    };

    appointment: string = "";
    pratical_certification: string = "";
    final_certification: string = "";
    final_account: string = "";

    updateProjectData: any = {
        title: "",
        user_id: this.authService.user.userId,
        verified: "",
        completed_at: "",
        final_cost: "0"
    };

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

    addProjects(status_verify: Boolean) {
        let { title, prof_type, const_cost, prof_cost, final_cost, started_at, description, client_name, pl_name, pl_email, pl_phone, proj_address, proj_gps, proj_city, proj_state, proj_zip, status, appointment, pratical_certification, final_certification, final_account, completed_at } = this.form;
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

        if (completed_at.length == 0 && status == "Completed") { this.restApi.toast("Please input completed date.", 1200); return; }
        if (pratical_certification.length == 0 && status == "Completed") { this.restApi.toast("Please input pratical completion certificate and wait for seconds.", 1200); return; }
        if (final_certification.length == 0 && status == "Completed") { this.restApi.toast("Please input final completion certificate and wait for seconds.", 1200); return; }

        if (final_account.length == 0 && (status == "Completed" || status == "Cancelled")) { this.restApi.toast("Please input final account and wait for seconds.", 1200); return; }
        // if (!this.form.const_cost.includes("R")) { this.form.const_cost = this.form.const_cost.concat("R");}
        // if (!this.form.prof_cost.includes("R")) {this.form.prof_cost = this.form.prof_cost.concat("R");}
        if (status != "Ongoing" && final_cost != "") {
            this.form.variable = ((1 - (parseInt(final_cost)) / parseInt(const_cost)) * 100).toFixed(2).toString();
        } else if (status != "Ongoing") {
            this.form.variable = "100.00";
        }
        if (status_verify) {
            this.form.status_verify = "1";
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

    closeUpdateModal() {
        this.isUpdateModal = false;
    }

    async action(x: any, act: any) {
        // let updateProjectData = { title: x.title, user_id: x.created_by, verified: act, completed_at: "", final_cost: "0" };
        // console.log(x, updateProjectData);
        this.updateProjectData.title = x.title;
        this.updateProjectData.verified = act;
        this.current_status = act;
        if (act == "Completed") {
            this.updateProjectData["pratical_certification"] = "";
            this.updateProjectData["final_certification"] = "";
            this.updateProjectData["final_account"] = "";
            this.isUpdateModal = true;
        } else if (act == "Cancelled") {
            this.updateProjectData["pratical_certification"] = "";
            this.updateProjectData["final_certification"] = "";
            this.updateProjectData["final_account"] = "";
            this.isUpdateModal = true;
        }
        else if (act == "Ongoing") {
            this.updateStatus();
        } else if (act == "Update") {
            // console.log("project action update => x : ", x);
            this.appointment = this.getPDFName(x.appointment);
            this.pratical_certification = this.getPDFName(x.pratical_certification);
            this.final_certification = this.getPDFName(x.final_certification);
            this.final_account = this.getPDFName(x.final_account);
            this.form = x;
            this.segment = "add-circle";
        } else if (act == "Verify") {
            this.request_verification(x.id);
        }
    }

    getPDFName(fileName: string) {
        let pdfName = "";
        try {
            pdfName = fileName.split("/")[1];
            let timeStamp = pdfName.split("_")[0];
            pdfName = pdfName.replace(timeStamp, "").toString();
            pdfName = pdfName.split("_").join(" ");
        } catch (error) {
            console.log("Project getPDFName error == : ", error);
        }
        return pdfName;
    }

    request_verification(project_id: string) {
        this.restApi.post("professional/request-verificationProject", { user_id: this.authService.user.userId, project_id: project_id }).subscribe((res: any) => {
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.getProjects();
            }
        }, error => {
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    updateStatus() {
        if (this.updateProjectData.verified != "Ongoing") {
            if (this.updateProjectData.final_cost == "0") {
                this.restApi.toast("Please Input Final Cost", 1200); return;
            }
            if (this.updateProjectData.completed_at == "") {
                this.restApi.toast("Please Input Correct Date", 1200); return;
            }
        }
        // console.log(this.updateProjectData);
        this.restApi.post("professional/action-project", this.updateProjectData).subscribe((res: any) => {
            if (res && res.status) {
                // console.log(res);
                if (res.status == "success") {
                    this.isUpdateModal = false;
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
        this.form.status = event.detail.value;
    }

    changeListener($event: any, type: string): void {
        console.log($event.target.files[0]);
        this.saveButtonFlag = true;
        let file = $event.target.files[0];
        if (file && file.type == "application/pdf") {
            this.restApi.postFile(file, "upload-file", "project").subscribe(res => {
                if (res && res.status && res.status == "success") {
                    if (type.includes("isUpdateModal_")) {
                        let keyword = type.replace("isUpdateModal_", "");
                        this.updateProjectData[`${keyword}`] = res.filename;
                    } else {
                        this.form[`${type}`] = res.filename;
                    }
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

