import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AuthenticateService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.page.html',
  styleUrls: ['./schedules.page.scss'],
})

export class SchedulesPage implements OnInit {

  objs: Array<any>;
  schedule_form:FormGroup;
  validation_messages = {
    'location': [
      { type: 'required', message: 'Location is required.' },
      { type: 'minlength', message: 'Location must be at least 3 letter long.' }
    ],
    'verify_target': [
      { type: 'required', message: 'Contact Person is required.' },
      { type: 'minlength', message: 'Contact Person must be at least 3 letter long.' }
    ],
   'date': [
     { type: 'required', message: 'Date is required.' },
     { type: 'minlength', message: 'Please set date.' }
   ]
  };

  constructor(
    public toastController: ToastController,
    public restApi: RestApiService, 
    public authService: AuthenticateService, 
    private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.schedule_form = this.formBuilder.group({
      name : new FormControl(this.authService.userDetails().name.toString()),
      verify_target : new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      date : new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      location: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ]))
    });
    this.get_schedule();
  }

  get_schedule(){
    console.log(this.authService.userDetails().name, this.authService.user.userId);
    this.restApi.get('accessor/get-schedule').subscribe((res: any) => {
      if (res) {
        console.log(res);
        if (res.status == 'success') {
          this.objs = res.data;
        }
      }
    }, error => {
      this.toastController.create({
        message: 'Something went wrong.',
        duration: 2000
      }).then(toast => toast.present());
    });
  }

  schedule_confirm(value){
    this.restApi.post('accessor/put-Schedule',{user_id:this.authService.user.userId, data:value}).subscribe((res: any) => {
      if (res && res.status) {
        if (res.status == 'success') {
          this.objs = res.data;
        }
        this.toastController.create({
          message: res.message,
          duration: 2000
        }).then(toast => toast.present());
      }
    }, error => {
      this.toastController.create({
        message: 'Something went wrong.',
        duration: 2000
      }).then(toast => toast.present());
    });
    // this.schedule_form.reset();
    // this.get_schedule();
  }
}
