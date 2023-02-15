import { Component, OnInit } from "@angular/core";
import { RestApiService } from "src/app/services/rest-api.service";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AuthenticateService } from "src/app/services/authentication.service";


@Component({
    selector: "app-reportgenerator",
    templateUrl: "./reportgenerator.page.html",
    styleUrls: ["./reportgenerator.page.scss"],
})
export class ReportgeneratorPage implements OnInit {

    data: any;
    type: string;

    keys: Array<string>;
    report_data: Array<any>;
    profess_id: string = "";
    content_id: string = "";
    compliance_status: string = "Unverified";
    compliance_rate: string = "0%";

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        public restApi: RestApiService,
        public authService: AuthenticateService,
    ) {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params && params.type) {
                this.type = params.type[0].toUpperCase() + params.type.slice(1);
            }
            if (params && params.data) {
                this.data = JSON.parse(params.data);
                var keys = [];
                for (let key in this.data) {
                    keys.push(key);
                }
                let datas = [];
                let continue_index = 0;
                for (let i = 0; i < keys.length; i++) {
                    let val_str = "";
                    let val_data = this.data[keys[i]];
                    // console.log("reportgenerator params : ", keys[i], " : ", this.data[keys[i]]);
                    if (
                        keys[i] == "id" ||
                        keys[i] == "created_by" ||
                        keys[i] == "file" ||
                        keys[i] == "certificate" ||
                        keys[i] == "id_no" ||
                        keys[i] == "user_id" ||
                        keys[i] == "is_director" ||
                        keys[i] == "verified_at" ||
                        keys[i] == "verified_by" ||
                        keys[i] == "verify_at" ||
                        keys[i] == "verify_by" ||
                        keys[i] == "updated_at" ||
                        keys[i] == "file" ||
                        keys[i] == "employer_requirPDF" ||
                        keys[i] == "status_verified" ||
                        keys[i] == "pratical_certification" ||
                        (keys[i] == "status" && this.type != "Project")
                    ) {
                        if (keys[i] == "created_by" || keys[i] == "user_id") {
                            this.profess_id = this.data[keys[i]];
                        }
                        if (keys[i] == "id") {
                            this.content_id = this.data[keys[i]];
                        }
                        continue_index++;
                        continue;
                    } else if (keys[i] == "jtitle") {
                        val_str = "JOB TITLE ";
                    } else if (keys[i] == "variable") {
                        val_str = "VARIATION ";
                    } else if (keys[i].includes("_")) {
                        let val_strs = keys[i].split("_");
                        if (val_strs.length > 2) {
                            for (let i = 0; i < val_strs.length; i++) {
                                val_str += val_strs[i].toUpperCase() + " ";
                            }
                        } else if (val_strs[0] == "exp") {
                            val_str = "EXPERIENCE " + val_strs[1].toUpperCase();
                        }
                        else if (val_strs[0] == "pl") {
                            val_str = "PROJECT LEADER " + val_strs[1].toUpperCase();
                        } else if (val_strs[0] == "proj") {
                            val_str = "PROJECT " + val_strs[1].toUpperCase();
                        } else if (val_strs[0] == "prof") {
                            val_str = "PROFESS " + val_strs[1].toUpperCase();
                        } else {
                            val_str = val_strs[0].toUpperCase() + " " + val_strs[1].toUpperCase();
                        }
                    } else {
                        val_str = keys[i].toUpperCase();
                    }
                    if (val_data.includes(".pdf")) {
                        val_data = "Uploaded";
                    } else if (val_data == "" || val_data == null) {
                        val_data = "None";
                    }
                    let each_row = { id: i + 1 - continue_index, key: val_str, val: val_data, status: 0 };
                    datas.push(each_row);
                }
                this.report_data = datas;
            }
        });
    }

    ngOnInit() {

    }

    generate_report() {
        let new_report = {
            accessor: this.authService.user.name,
            profess: this.profess_id,
            content_id: this.content_id,
            report_type: this.type.toLowerCase(),
            data: this.report_data,
            created_by: this.authService.user.userId,
            score: this.compliance_rate,
        }
        this.restApi.post("accessor/add-report", new_report).subscribe((res: any) => {
            console.log(res);
            if (res && res.status) {
                if (res.status) {
                    this.restApi.toast("Generate the report PDF as successfully.", 1200);
                    let navigationExtras: NavigationExtras = {
                        queryParams: {
                            type: this.type.toLowerCase(),
                        }
                    };
                    this.router.navigate(["home/assessor/accessorsreport"], navigationExtras);
                } else {
                    this.restApi.toast("Please retry to generate the report .", 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    change_status(each_row: any, verification: Boolean) {
        console.log("Report Generator this.report_data status = : ", this.report_data[each_row.id - 1]);
        if (verification && this.report_data[each_row.id - 1] != null) {
            this.report_data[each_row.id - 1].status = 1;
        } else {
            this.report_data[each_row.id - 1].status = 0;
        }
        console.log("Report Generator this.report_data status = : ", this.report_data[each_row.id - 1]);
        let trueLength = 0;
        for (let i = 0; i < this.report_data.length; i++) {
            if (this.report_data[i].status) {
                trueLength++;
            }
        }
        if (this.report_data.length == trueLength) {
            this.compliance_status = "Verified";
            this.compliance_rate = "100%"
        } else {
            this.compliance_status = "Unverified";
            this.compliance_rate = ((trueLength / this.report_data.length * 100).toFixed(2)).toString() + "%";
        }
    }

}
