import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestApiService {

    constructor(
        public toastController: ToastController,
        public http: HttpClient,
        private httpNative: HTTP,
        private platform: Platform
    ) { }

    url(endpoint : string) {
        return "https://back.veriprof.co.za/api/" + endpoint;
        // return "http://localhost/veriprof_back/api/" + endpoint;
        // return "http://192.168.5.61/veriprof_back/api/" + endpoint;
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

    post(endpoint : string, data : any) {
        let url = this.url(endpoint);
        this.getHeader();
        return this.http.post(url, data);
        // if(this.platform.is('desktop')) {
        //     return this.http.post(url,data);
        // } else {
        //   return new Observable((observer) => {
        //     this.httpNative.post(url,data, {}).then(res => {
        //         observer.next(res.data);
        //         observer.complete();
        //       }).catch(error => {
        //         observer.next(error);
        //         observer.complete();
        //       });
        //   });
        // }
    }

    get(endpoint : string) {
        let url = this.url(endpoint);
        return this.http.get(url);
        // if(this.platform.is('desktop'))  {
        //   return this.http.get(url, this.getHeader());
        // } else {
        //   return new Observable((observer) => {
        //     this.httpNative.get(url, {}, {}).then(res => {
        //         observer.next(res.data);
        //         observer.complete();
        //       }).catch(error => {
        //         observer.next(error);
        //         observer.complete();
        //       });
        //   });
        // }
    }

    postFile(fileToUpload: File, endpoint: string): Observable<any> {
        let url = this.url(endpoint);
        const formData: FormData = new FormData();
        formData.append('file-to-upload', fileToUpload, fileToUpload.name);
        return this.http.post(url, formData);
    }

    downfile(type : string, filename : string) {
        let url = "https://back.veriprof.co.za/assets/" + type + filename ;
        // let url = "http://localhost/veriprof_back/assets/" + type + filename;
        // let url = "http://192.168.5.61/veriprof_back/assets/" + type + filename;
        window.open(url);
    }

    toast(message: string, duration: any) {
        this.toastController.create({
            message: message,
            duration: duration
        }).then(toast => toast.present());
    }
}
