import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { ToastController,AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
// import { AlertController } from 'ionic-angular';


@Component({
  selector: 'app-unverifiedbiz',
  templateUrl: './unverifiedbiz.page.html',
  styleUrls: ['./unverifiedbiz.page.scss'],
})
export class UnverifiedbizPage implements OnInit {

  objs: Array<any>;
  schedules:Array<any>;
  x:any;
  action:any;

  constructor(
    public toastController: ToastController,
    public restApi: RestApiService, 
    private router: Router,
    public authService: AuthenticateService,
    public alertController: AlertController,
    ) { }

  ngOnInit() {
    this.getPending();
  }

  getPending() {
    this.restApi.get('accessor/get-business').subscribe((res: any) => {
      if (res && res.status) {
        console.log(res.data);
        if (res.status == 'success') {
          this.objs = res.data;
          this.get_schedule();
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

  updatebusiness(x) {
    this.restApi.post('accessor/verify-business', {user_id:this.authService.user.userId, business_id: x.buzi_id, office_id:x.id, email:x.email }).subscribe((res: any) => {
      if (res && res.status) {
        if (res.status == 'success') {
          this.getPending();
        }
        this.toastController.create({
          message: res.data,
          duration: 2000
        }).then(toast => toast.present());
      }
    }, error => {
      this.toastController.create({
        message: 'Something went wrong.',
        duration: 2000
      }).then(toast => toast.present());
    });
  }

  async verify(x) {
    // console.log(x);
    let val = 0;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Unverified Business Detail',
      // message: 'Business Title : '+x.org_name+'<br>Project Type : '+x.project_type+'<br>CPD Level : '+x.cdp_level+'<br>CIPC Reg Number : '+x.cipc_reg_number+'<br>Professional : '+x.profess+'<br>Business Address1 : '+x.business_address_line_1+'<br>Business Address2 : '+x.business_address_line2+'<br>City : '+x.city+'<br>Code : '+x.code+'<br>States : '+x.province+'',
      inputs: [{ id: 'pname', name: 'pname', type: 'checkbox',label:'Name is '+x.pname+'?', handler: () => { val++; }, },
      {id: 'pcouncil', name: 'pcouncil', type: 'checkbox',label:'Practice Council reg. No is '+x.pcouncil+'?', handler: () => { val++; }, },
      {name: 'pcipc_reg_no', type: 'checkbox',label:'CIPC registration is '+x.pcipc_reg_no+'?', handler: () => { val++; }, },
      {name: 'ptype', type: 'checkbox',label:'Business Type is '+x.ptype+'?', handler: () => { val++; }, },
      {name: 'director', type: 'checkbox',label:'Director is '+x.director+'?', handler: () => { val++; }, },
      {name: 'dir_prof_regno', type: 'checkbox',label:'Director Prof registration No is '+x.dir_prof_regno+'?', handler: () => { val++; }, },
      {name: 'owned', type: 'checkbox',label:'%Owned is '+x.owned+'?', handler: () => { val++; }, },
      {name: 'phone', type: 'checkbox',label:'Office Phone Number is '+x.phone+'?', handler: () => { val++; }, },
      {name: 'email', type: 'checkbox',label:'Office Email is '+x.email+'?', handler: () => { val++; }, },
      {name: 'res_prof_name', type: 'checkbox',label:'Responsible Professional Name is '+x.res_prof_name+'?', handler: () => { val++; }, },
      {name: 'res_prof_reg', type: 'checkbox',label:'Responsible Professional Reg No is '+x.res_prof_reg+'?', handler: () => { val++; }, }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          cssClass: 'secondary',
          handler: () => {
            if ( val >= 11 ){ this.updatebusiness(x); }
            else { this.toastController.create({ message: "It is not enough to verify.", duration: 2000 }).then(toast => toast.present()) }
          }
        }
      ]
    });
    await alert.present();
  }

  get_schedule(){
    console.log(this.authService.userDetails().name, this.authService.user.userId);
    this.restApi.get('accessor/get-schedule').subscribe((res: any) => {
      if (res) {
        if (res.status == 'success') {
          this.schedules = res.data;
          console.log(this.schedules, this.objs);
          for (var j=0;j<this.objs.length;j++){
            for (var i=0;i<this.schedules.length;i++){
              if (this.schedules[i].verify_target == this.objs[j].email && new Date(this.schedules[i].date).getTime() < new Date().getTime() ){
                this.objs[j].status = 'Pending';
              }            
            }
          }
        }
      }
    }, error => {
      this.toastController.create({
        message: 'Something went wrong.',
        duration: 2000
      }).then(toast => toast.present());
    });
  }

  schedule() {
    this.router.navigateByUrl('home/accessor/schedules');
  }
}
