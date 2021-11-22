import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

// import * as jsPDF from 'jspdf';
// import domtoimage from 'dom-to-image';
// import { File, IWriteOptions } from '@ionic-native/file/ngx';
// import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-accessorsreport',
  templateUrl: './accessorsreport.page.html',
  styleUrls: ['./accessorsreport.page.scss'],
})
export class AccessorsreportPage implements OnInit {

  objs: Array<any>;
  accessor_name:String;
  report_form:FormGroup;
  profess:Array<any>;
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
    public loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
    this.report_form = this.formBuilder.group({
      accessor : new FormControl('', Validators.compose([
        Validators.required
      ])),
      report_type : new FormControl(),
      report_title : new FormControl('', Validators.compose([
        Validators.required
      ])),
      profess_name : new FormControl('', Validators.compose([
        Validators.required
      ])),
      report_content: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
    this.accessor_name = String(this.authService.user.name);
    this.report_form.get('accessor').setValue(this.accessor_name);
    this.getRegisteredProfess();
  }

  report_confirm(value){
    console.log(value);
    this.restApi.post('accessor/add-report', { user_id: this.authService.user.userId, user_name:this.authService.user.name,data:value }).subscribe((res: any) => {
      if (res && res.status) {
        if ( res.data == "limited" ) {
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

  getRegisteredProfess(){
    this.restApi.get('professional/get-profess').subscribe((res:any)=>{
      if (res && res.status){
        this.profess = res.data;
      }
    }, error => {
      this.toastController.create({
        message: 'Something went wrong.',
        duration: 2000
      }).then(toast => toast.present());
    });
  }

  getType($event){
    console.log( this.report_form, $event);
    // if (type.includes("Project")){
    //   this.restApi.post('accessor/get-project',{}).subscribe((res:any)=>{
    //     if (res && res.status){
    //       this.profess = res.data;
    //     }
    //   }, error => {
    //     this.toastController.create({
    //       message: 'Something went wrong.',
    //       duration: 2000
    //     }).then(toast => toast.present());
    //   });
    // }
    // else if (type.includes("Project")){
    // }
  }
}
