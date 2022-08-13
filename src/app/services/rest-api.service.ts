import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    // base_url = "http://back.veriprof.co.za/";
    base_url = "https://back.veriprof.co.za/";
    // base_url = "http://192.168.5.61/www.veriprof_back/";

    constructor(
        public toastController: ToastController,
        public http: HttpClient,
        private platform: Platform
    ) { }

    url(endpoint: string) {
        return this.base_url + "api/" + endpoint;
    }

    getHeader() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": '*'
            })
        };
    }

    post(endpoint: string, data: any) {
        let url = this.url(endpoint);
        this.getHeader();
        return this.http.post(url, data);
    }

    get(endpoint: string) {
        let url = this.url(endpoint);
        return this.http.get(url);
    }

    postFile(fileToUpload: File, endpoint: string): Observable<any> {
        let url = this.url(endpoint);
        const formData: FormData = new FormData();
        formData.append('file-to-upload', fileToUpload, fileToUpload.name);
        return this.http.post(url, formData);
    }

    downfile(type: string, filename: string) {
        let url = this.base_url + "assets/" + type + filename;
        window.open(url);
    }

    toast(message: string, duration: any) {
        this.toastController.create({
            message: message,
            duration: duration
        }).then(toast => toast.present());
    }



}
