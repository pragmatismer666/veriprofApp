import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../../services/authentication.service';
import { NavController, ToastController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    validations_form: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';

    prof: boolean = false;
    currentUserType = 'public_user';

    UserTypes = {
        'public_user': {
            title: 'Member Area'
        },
        'accessor': {
            title: 'Accessor Area'
        },
        'professional': {
            title: 'Professional Area'
        }
    };

    validation_messages = {
        'full_name': [
            { type: 'required', message: 'Name is required.' }
        ],
        'mobile': [
            { type: 'required', message: 'Phone Number is required.' }
        ],
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Enter a valid email.' }
        ],
        'password': [
            { type: 'required', message: 'Password is required.' }
        ]
    };

    constructor(
        public toastController: ToastController,
        private navCtrl: NavController,
        public restApi: RestApiService,
        private authService: AuthenticateService,
        private formBuilder: FormBuilder,
        private router: Router) {
        this.currentUserType = this.router.url.split('/').pop();
        console.log(this.currentUserType);
    }

    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            full_name: new FormControl('', Validators.compose([
                Validators.required
            ])),
            mobile: new FormControl('', Validators.compose([
                Validators.required
            ])),
            email: new FormControl('', Validators.compose([
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
                Validators.required
            ])),
            password: new FormControl('', Validators.compose([
                Validators.required
            ])),
            role: this.currentUserType,
            prof: new FormControl()
        });
    }

    tryRegister(value: any) {
        if (value.full_name.length < 5) { this.restApi.toast('Name must be longer than 5 letters', 1200); }
        else if (value.mobile.length < 10) { this.restApi.toast('Mobile Number must be longer than 10 letters', 1200); }
        else if (value.password.length < 5) { this.restApi.toast('Password must be longer than 5 letters', 1200); }
        else {
            this.authService.registerUser(value)
                .then(res => {
                    if (res && res.status) {
                        if (res.status == 'success') {
                            this.errorMessage = "";
                            this.successMessage = res.message;
                            this.restApi.toast(res.message, 1200);
                            this.router.navigateByUrl('auth/login/' + this.currentUserType);
                        } else {
                            this.errorMessage = res.message;
                            this.successMessage = "";
                        }
                    }
                }, err => {
                    console.log(err);
                    this.errorMessage = "Something went wrong";
                    this.successMessage = "";
                })
        }
    }

    goLoginPage() {
        this.router.navigateByUrl('auth/login/' + this.currentUserType);
    }

}