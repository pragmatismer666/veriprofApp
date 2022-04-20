import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

    constructor() { }

    slideOptsOne = {
        initialSlide: 0,
        slidesPerView: 1,
        autoplay: true
    };
    
    ngOnInit() {
    }

}
