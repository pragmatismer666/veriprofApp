import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    validations_form: FormGroup;
    errorMessage: string = '';
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

    constructor(
        private navCtrl: NavController,
        private authService: AuthenticateService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.currentUserType = this.router.url.split('/').pop();
    }

    ngOnInit() {
        this.validations_form = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(5),
                Validators.required
            ])),
            role: this.currentUserType
        });
    }

    validation_messages = {
        'email': [
            { type: 'required', message: 'Email is required.' },
            { type: 'pattern', message: 'Please enter a valid email.' }
        ],
        'password': [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 5 characters long.' }
        ]
    };


    loginUser(value: any) {
        this.authService.loginUser(value)
            .then(res => {
                if (res && res.status) {
                    if (res.status == 'success') {
                        res.data['email'] = value.email;
                        this.authService.setUser(res.data);
                        this.errorMessage = "";
                        this.navCtrl.navigateForward('/home');
                    } else {
                        this.errorMessage = res.message;
                    }
                }
            }, err => {
                console.log(err);
                this.errorMessage = "Something went wrong";
            })
    }

    goToRegisterPage() {
        this.navCtrl.navigateForward('auth/register/' + this.currentUserType);
    }
    goToForgetPage() {
        this.navCtrl.navigateForward('auth/forget/' + this.currentUserType);
    }

}