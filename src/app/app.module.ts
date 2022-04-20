import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import * as firebase from 'firebase';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { RestApiService } from './services/rest-api.service';
import { LoadingService } from './services/loading.service';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';


firebase.initializeApp(environment.firebase);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireAuthModule,
        HttpClientModule,
        SuperTabsModule.forRoot(),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        RestApiService,
        LoadingService,
        AuthenticateService,
        HTTP,
        FileOpener,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
