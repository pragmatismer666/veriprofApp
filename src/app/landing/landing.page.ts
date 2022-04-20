import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from '../services/authentication.service';

import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
    
    @ViewChild(SuperTabs) superTabs: SuperTabs;

    opts = {
        icon: false,
        label: true,
        toolbarPos: 'top',
        scrollable: true,
    };

    config: SuperTabsConfig = {
        debug: true,
        allowElementScroll: false,
    }; 

    tabs: any[] = [];

    title: string;
    email: string;
    phone: string;
    address: string;
    Alarm: string;

    // Quick Verify
    exceptStrs: Array<string> = ["id", "created_by", "verified_by", "user_id", "is_director", "file", "certificate", "verify_code"];
    keyArray: Array<string> = [];
    valArray: Array<any> = [];
    keyword: string;

    constructor(
        public toastController: ToastController,
        public restApi: RestApiService,
        private navCtrl: NavController,
        private router: Router,
        private authService: AuthenticateService
    ) { }

    ngOnInit() {
        // this.getDetails();
    }

    professional() {
        this.router.navigateByUrl('auth/login/professional');
    }

    assessor() {
        this.router.navigateByUrl('auth/login/assessor');
    }

    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    }

    getDetails() {
        this.restApi.post('get-details', {}).subscribe((res: any) => {
            if (res && res.status) {
                try {
                    console.log(res.data);
                    this.title = res.data['0']['title'];
                    this.email = res.data['0']['email'];
                    this.phone = res.data['0']['number'];
                    this.address = res.data['0']['address'];
                    this.Alarm = res.data['0']['Alarm'];
                }
                catch (Error) {
                    this.restApi.toast("Something went wrong.", 1200);
                }
            }
        }, error => {
            console.log(error);
            this.restApi.toast("Something went wrong.", 1200);
        });
    }

    manageData(data: any) {
        try {
            this.keyArray = Object.keys(data);
            for (let index = 0; index < this.keyArray.length; index++) {
                if (this.exceptStrs.includes(this.keyArray[index])) {
                    continue;
                }
                let updateKey = "";
                if (this.keyArray[index].includes("_")) {
                    updateKey = this.keyArray[index].split("_")[0].toUpperCase() + " " + this.keyArray[index].split("_")[1].toUpperCase()
                } else {
                    updateKey = this.keyArray[index].toUpperCase();
                }
                let eachVal = { key: updateKey, val: data[this.keyArray[index].toString()] }
                this.valArray.push(eachVal);
            }
        } catch (error) {
            console.log(error);
            this.restApi.toast('Response data type is wrong.', 1200);
        }
    }

    searchContent() {
        if (this.keyword == null) {
            this.restApi.toast('Please put keyword.', 1200);
        } else if (this.keyword.trim() == "") {
            this.restApi.toast('Please put keyword.', 1200);
        } else {
            this.valArray = [];
            this.restApi.post('search', { key: this.keyword.trim() })
                .subscribe((res: any) => {
                    console.log(res);
                    if (res && res.status) {
                        if (res.status == 'success') {
                            this.restApi.toast('Successfully.', 1200);
                            this.manageData(res.data);
                        } else {
                            this.restApi.toast('There is no result.', 1200);
                        }
                    }
                }, error => {
                    console.log(error);
                    this.restApi.toast('Please Check search bar.', 1200);
                });
        }
    }
}