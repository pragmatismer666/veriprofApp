import { Component, OnInit } from '@angular/core';
import { ToastController,AlertController } from '@ionic/angular';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unverifiedpers',
  templateUrl: './unverifiedpers.page.html',
  styleUrls: ['./unverifiedpers.page.scss'],
})
export class UnverifiedpersPage implements OnInit {

  objs: Array<any>;
  schedules:Array<any>;
  x:string;
  key:string;
  
  constructor(public toastController: ToastController,
    private router: Router,public restApi: RestApiService, public authService: AuthenticateService, public alertController: AlertController) { }

  ngOnInit() {
    this.getProfess();
  }

  getProfess() {
    this.restApi.post('accessor/get-prof', {}).subscribe((res: any) => {
      if (res && res.status) {
        if (res.status == 'success') {
          this.objs = res.data;
          console.log(this.objs);
        } else {
          this.toastController.create({
            message: res.message,
            duration: 2000
          }).then(toast => toast.present());
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
    this.router.navigateByUrl('home/assessor/schedules');
  }

  //  Non work functions ---------------------------
  // async action(x, key) {
  //   console.log(x);
  //   let val = 0;
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Unverified Profile Detail',
  //     // message: 'Business Title : '+x.org_name+'<br>Project Type : '+x.project_type+'<br>CPD Level : '+x.cdp_level+'<br>CIPC Reg Number : '+x.cipc_reg_number+'<br>Professional : '+x.profess+'<br>Business Address1 : '+x.business_address_line_1+'<br>Business Address2 : '+x.business_address_line2+'<br>City : '+x.city+'<br>Code : '+x.code+'<br>States : '+x.province+'',
  //     inputs: [{ id: 'name', name: 'name', type: 'checkbox',label:'Name is '+x.name+'?', handler: () => { val++; }, },
  //       { id: 'surname', name: 'surname', type: 'checkbox',label:'SurName is '+x.surname+'?', handler: () => { val++; }, },
  //       { id: 'id_no', name: 'id_no', type: 'checkbox',label:'ID No is '+x.id_no+'?', handler: () => { val++; }, },
  //       { id: 'council', name: 'council', type: 'checkbox',label:'Practice Council reg. No is '+x.council+'?', handler: () => { val++; }, },
  //       {name: 'reg_no', type: 'checkbox',label:'Professional Registration No is '+x.reg_no+'?', handler: () => { val++; }, },
  //       {name: 'employer', type: 'checkbox',label:'Employer is '+x.employer+'?', handler: () => { val++; }, },
  //       {name: 'exp_year', type: 'checkbox',label:'Exp in Year is '+x.exp_year+'?', handler: () => { val++; }, },
  //       {name: 'street1', type: 'checkbox',label:'Street1 is '+x.street1+'?', handler: () => { val++; }, },
  //       {name: 'street2', type: 'checkbox',label:'Street2 is '+x.street2+'?', handler: () => { val++; }, },
  //       {name: 'city', type: 'checkbox',label:'City is '+x.city+'?', handler: () => { val++; }, },
  //       {name: 'zipcode', type: 'checkbox',label:'Zip Code is '+x.zipcode+'?', handler: () => { val++; }, },
  //       {name: 'state', type: 'checkbox',label:'State is '+x.state+'?', handler: () => { val++; }, },
  //       {name: 'full_part', type: 'checkbox',label:'Full / Part is '+x.full_part+'?', handler: () => { val++; }, }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'secondary'
  //       }, {
  //         text: 'Okay',
  //         cssClass: 'secondary',
  //         handler: () => {
  //           if ( val >= 13 ){ this.updateprofile(x); }
  //           else { this.toastController.create({ message: "It is not enough to verify.", duration: 2000 }).then(toast => toast.present()) }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  // updateprofile(x) {
  //   this.restApi.post('accessor/verify-prof', {profile_id:x.id, pemail:x.email, user_id:this.authService.user.userId}).subscribe((res: any) => {
  //     if (res && res.status) {
  //       if (res.status == 'success') {
  //           this.getProfess();
  //       } 
  //       this.toastController.create({
  //         message: res.message,
  //         duration: 2000
  //       }).then(toast => toast.present());
  //     }
  //   }, error => {
  //     this.toastController.create({
  //       message: 'Something went wrong.',
  //       duration: 2000
  //     }).then(toast => toast.present());
  //   });
  // }

  // get_schedule(){
  //   this.restApi.get('accessor/get-schedule').subscribe((res: any) => {
  //     if (res) {
  //       if (res.status == 'success') {
  //         this.schedules = res.data;
  //         console.log(this.schedules, this.objs);
  //         for (var i=0;i<this.schedules.length;i++){
  //           for (var j=0;j<this.objs.length;j++){
  //             if (this.schedules[i].verify_target == this.objs[j].email && new Date(this.schedules[i].date).getTime() < new Date().getTime() ){
  //               this.objs[j].status = 'Pending';
  //             }            
  //           }
  //         }
  //       }
  //     }
  //   }, error => {
  //     this.toastController.create({
  //       message: 'Something went wrong.',
  //       duration: 2000
  //     }).then(toast => toast.present());
  //   });
  // }
}
