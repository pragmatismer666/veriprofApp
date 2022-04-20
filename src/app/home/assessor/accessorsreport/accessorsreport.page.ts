import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
    selector: 'app-accessorsreport',
    templateUrl: './accessorsreport.page.html',
    styleUrls: ['./accessorsreport.page.scss'],
})
export class AccessorsreportPage implements OnInit {

    @ViewChild(SuperTabs) superTabs: SuperTabs;
    
    config: SuperTabsConfig = {
        debug: true,
        allowElementScroll: false,
    }; 

    projects: Array<any>;
    unverified_business:Array<any>;
    unverified_profiles:Array<any>;
    eplans: Array<any>;

    objs: Array<any>;
    accessor_name: String;
    report_form: FormGroup;
    profess: Array<any>;
    loading: any;

    validation_messages = {
        'report_title': [
            { type: 'required', message: 'Report Title is required.' }
        ],
        'profess_name': [
            { type: 'required', message: 'Professional Name is required.' }
        ],
        'report_content': [
            { type: 'required', message: 'Report Content is required.' }
        ]
    };

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        public authService: AuthenticateService,
        private formBuilder: FormBuilder,
        public loadingCtrl: LoadingController,
        public nav: NavController,
        private router: Router,
    ) { }

    ngOnInit() {
        this.report_form = this.formBuilder.group({
            accessor: new FormControl('', Validators.compose([
                Validators.required
            ])),
            report_type: new FormControl(),
            report_title: new FormControl('', Validators.compose([
                Validators.required
            ])),
            profess_name: new FormControl('', Validators.compose([
                Validators.required
            ])),
            report_content: new FormControl('', Validators.compose([
                Validators.required
            ]))
        });
        this.accessor_name = String(this.authService.user.name);
        this.report_form.get('accessor').setValue(this.accessor_name);
        this.getRegisteredProfess();
        
        this.getProjects();
        this.get_unverified_business();
        this.get_unverified_profile();
        this.get_eplan();
    }

    // project submission
    getProjects(){
        this.restApi.get('accessor/get-projects').subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.projects = res.data;
                } else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Business Submission
    get_unverified_business(){
        this.restApi.get('accessor/get-unverifyBusiness').subscribe((res: any) => {
            if (res && res.status) {
                console.log(res.data);
                if (res.status == 'success') {
                    this.unverified_business = res.data;
                } else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Profile Submission
    get_unverified_profile(){
        this.restApi.get('accessor/get-unverifyProfiles').subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.unverified_profiles = res.data;
                } else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // Eplan Submission
    get_eplan(){
        this.restApi.get('accessor/get-eplans').subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.eplans = res.data;
                } else {
                    this.restApi.toast('There is no projects.', 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.', 1200);
        });
    }
    // action 
    action(data:any, type: string){
        let navigationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(data),
              type: type,
            }
        };
        this.router.navigate(['home/assessor/accessorsreport/reportgenerator'], navigationExtras);
    }

    report_confirm(value: any) {
        this.restApi.post('accessor/add-report', { user_id: this.authService.user.userId, user_name: this.authService.user.name, data: value }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.data == "limited") {
                    this.toastController.create({ message: res.message, duration: 2000 }).then(toast => toast.present());
                }
                else {
                    this.toastController.create({ message: res.message, duration: 2000 }).then(toast => toast.present());
                }
                this.report_form.reset();
                this.report_form.get('accessor').setValue(String(this.authService.user.name));
                this.getRegisteredProfess();
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    getRegisteredProfess() {
        this.restApi.get('professional/get-profess').subscribe((res: any) => {
            if (res && res.status) {
                this.profess = res.data;
            }
        }, error => {
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    // getType(event: any) {
    //     console.log(this.report_form);
    //     console.log(event);
    // }
}
