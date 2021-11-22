import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from '../../services/authentication.service';
import { ActionSheetController, ToastController, AlertController } from '@ionic/angular';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingService } from 'src/app/services/loading.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Base64 } from '@ionic-native/base64/ngx';
@Component({
    selector: 'app-accessor',
    templateUrl: './accessor.page.html',
    styleUrls: ['./accessor.page.scss'],
})
export class AccessorPage implements OnInit {
    // avatur ----------------------------------

    constructor(
        public http: HttpClient,
        private base64: Base64,
        public toastController: ToastController,
        private navCtrl: NavController,
        private router: Router,
        public restApi: RestApiService,
        private authService: AuthenticateService,
        private loading: LoadingService,
        public formBuilder: FormBuilder,
        public actionSheetController: ActionSheetController,
        private camera: Camera,
        private alertCtrl: AlertController,
    ) {
        this.name = this.formBuilder.group({
            updateName: new FormControl('', Validators.compose([
                Validators.minLength(3),
                Validators.required,
            ])),
        });
    }

    commonUrl: string = 'http://back.veriprof.co.za';
    image: string = 'assets/icon-66.png';
    nikeName: any;
    usernameUpdate: any;
    name: FormGroup;

    respData: any;
    picture: File;
    userEmail: string;
    location: any;
    biz_num: string;
    profess_num: string;
    croppedImagepath = "";
    isLoading = false;

    imagePickerOptions = {
        maximumImagesCount: 1,
        quality: 50
    };

    ngOnInit() {
        if (this.authService.user.picpath != this.image) {
            this.image = this.commonUrl + this.authService.user.picpath;
        }
        this.userEmail = this.authService.user.name;
        this.getBiz();
    }

    unverifiedbiz() {
        this.router.navigateByUrl('home/accessor/unverifiedbiz');
    }

    unverifiedpers() {
        this.router.navigateByUrl('home/accessor/unverifiedpers');
    }

    schedules() {
        this.router.navigateByUrl('home/accessor/schedules');
    }

    accessorsreport() {
        this.router.navigateByUrl('home/accessor/accessorsreport');
    }

    logout() {
        this.authService.logoutUser();
        this.navCtrl.navigateBack('');
    }

    getBiz() {
        this.restApi.post('accessor/get-verified', { verified_by: this.authService.user.userId, status: 'Verified' }).subscribe((res: any) => {
            if (res && res.status) {
                if (res.status == 'success') {
                    this.biz_num = res.data[0].toString();
                    this.profess_num = res.data[1].toString();
                } else {
                    this.toastController.create({
                        message: res.message,
                        duration: 2000
                    }).then(toast => toast.present());
                }
            }
        }, error => {
            console.log(error);
            this.toastController.create({
                message: 'Something went wrong.',
                duration: 2000
            }).then(toast => toast.present());
        });
    }

    async cameraOption() {
        const alert = await this.alertCtrl.create({
            header: 'Select Profile Picture',
            buttons: [
                {
                    text: 'Camera',
                    role: 'camera',
                    handler: () => {
                        this.profilePictureCamera()
                    }
                },
                {
                    text: 'Gallery',
                    cssClass: 'secondary',
                    role: 'gallery',
                    handler: () => {
                        this.profilePictureGallery()
                    }
                }
            ]
        })
        await alert.present();
    }

    //for update the profile picture 
    async profilePictureCamera() {
        const option: CameraOptions = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true
        }
        this.updateImage(option);
    }

    async profilePictureGallery() {
        const option: CameraOptions = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            allowEdit: true
        }
        this.updateImage(option);
    }

    updateImage(option) {
        try {
            // this handle the upload to the firebase 
            // it handle the selection from the image after will be upload to firebase storage 
            this.camera.getPicture(option).then((imageData) => {
                this.loading.showPro()
                let url = "data:image/jpeg;base64," + imageData;
                // let imgBlob = this.imgURItoBlob(imageData);
                // let metadata = { 'contentType': imgBlob.type };
                this.restApi.post('accessor/up-user', { user_id: this.authService.user.userId, data: url, type: "image/jpeg" }).subscribe((res: any) => {
                    if (res && res.status) {
                        if (res.data != this.image) {
                            this.authService.user.picpath = res.data;
                            this.image = this.commonUrl + res.data;
                            this.loading.hide();
                        }
                    }
                }, error => {
                    console.log(error);
                    this.toastController.create({
                        message: 'Something went wrong.',
                        duration: 2000
                    }).then(toast => toast.present());
                });
            })
        } catch (error) {
            console.log(error, option.sourceType);
        }
    }

    imgURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: mimeString
        });
    }

    updated() {
        this.loading.show();
        // firebase.database().ref("accounts/" + firebase.auth().currentUser.uid).once("value").then((profile) => {
        //   if (profile.val()) {
        //     this.angularDb.object("accounts/" + firebase.auth().currentUser.uid).update({
        //       nikeName: this.nikeName
        //     }).then(() => {
        //       this.loading.hide()
        //       this.router.navigateByUrl("/home")
        //     })
        //   }
        // })
    }

    //   this.camera.getPicture(this.options)
    //   .then((imageData) => {
    //     this.base64Image = 'data:image/png;base64,'+imageData;
    //     this.mydetail.picpath = this.base64Image;
    // this.restApi.post('accessor/up-user', {user_id:this.authService.user.userId,  data:{picpath:this.base64Image}}).subscribe((res: any) => {
    //   if (res && res.status) {
    //     console.log(res.data);
    //     this.mydetail = res.data;
    //   }
    // }, error => {
    //   console.log(error);
    //   this.toastController.create({
    //     message: 'Something went wrong.',
    //     duration: 2000
    //   }).then(toast => toast.present());
    // });
    //   }, (err) => {
    //      console.log(err);
    //   });

    presentToast(msg) {
        this.toastController.create({ message: msg, duration: 2000 }).then(toast => toast.present());
    }
}

