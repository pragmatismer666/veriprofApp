import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AuthPage } from './auth.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ForgetPage } from './forget/forget.page';

const routes: Routes = [
    {
        path: '',
        component: AuthPage,
        children: [
            { path: 'login/:type', component: LoginPage },
            { path: 'register/:type', component: RegisterPage },
            { path: 'forget/:type', component: ForgetPage },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AuthPage, LoginPage, RegisterPage, ForgetPage]
})
export class AuthPageModule { }
