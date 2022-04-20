import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-reportsubmission',
    templateUrl: './reportsubmission.page.html',
    styleUrls: ['./reportsubmission.page.scss'],
})
export class ReportsubmissionPage implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute, 
        private router: Router,
    ) { }

    ngOnInit() {
        let getValue= this.activatedRoute.snapshot.paramMap.get("data");
        console.log(JSON.parse(getValue));
    }

}
