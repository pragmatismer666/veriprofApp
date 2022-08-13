import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
    selector: 'app-business',
    templateUrl: './business.page.html',
    styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

    // segment: string = "addBid";
    segment: string = "paper";
    bids: Array<any> = [];

    navCtrl: any;
    // form:FormGroup;
    form: any = {
        name: '',
        surname: '',
        professional_reg_no: '',
        email_add: '',
        cell: '',
        bidder: '',
        client_department: '',
        bid_no: '',
        short_description: '',
        file: ''
    };

    constructor(public toastController: ToastController,
        public authService: AuthenticateService,
        public restApi: RestApiService
    ) {

    }

    ngOnInit() {
        this.getProfile();
        this.getBids();
    }

    getProfile() {
        let partVal = "123456879"; let fullVal = "0123456789";
        let text = partVal.charAt(Math.floor(Math.random() * partVal.length));;
        for (var i = 0; i < 4; i++) {
            text += fullVal.charAt(Math.floor(Math.random() * fullVal.length));
        }
        this.form.bid_no = text;

        this.restApi.post('professional/get-profile', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            if (res.status != "noexist") {
                this.form.professional_reg_no = res.personal.reg_no;
                this.form.email_add = this.authService.user.email;
                this.form.cell = this.authService.user.mobile;
            }
            else {
                this.restApi.toast('You need update ',1500);
            }
        }, error => {
            console.log(error);
            this.restApi.toast('Something went wrong.',1200);
        });
    }

    initial(){
        this.form = {
            name: '',
            surname: '',
            professional_reg_no: '',
            email_add: '',
            cell: '',
            bidder: '',
            client_department: '',
            bid_no: '',
            short_description: '',
            file: ''
        };
        this.getProfile();
    }

    submit() {
        for (let x in this.form) {
            console.log(x);
            if (this.form[x].length == 0 && x != "file") {
                let name = x.replace('_', ' ');
                return this.restApi.toast("Please fill " + name,1200);
            }
        }

        this.restApi.post('professional/add-bid', { user_id: this.authService.user.userId, data: this.form }).subscribe((res: any) => {
            console.log(res);
            if (res && res.status) {
                this.restApi.toast(res.message, 1200);
                this.bids = res.data;
                this.segment = "paper";
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }

    getBids() {
        this.restApi.post('professional/get-bids', { user_id: this.authService.user.userId }).subscribe((res: any) => {
            console.log(res);
            if (res && res.status) {
                if (res.status == 'success') {
                    this.bids = res.data;
                } else {
                    this.restApi.toast(res.message, 1200);
                }
            }
        }, error => {
            this.restApi.toast('Something went wrong.', 1200);
        });
    }

    download(filename: string) {
        console.log(filename);
        this.restApi.downfile('bid/', filename);
    }
}
