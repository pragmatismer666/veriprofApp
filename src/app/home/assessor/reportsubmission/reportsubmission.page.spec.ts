import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsubmissionPage } from './reportsubmission.page';

describe('ReportsubmissionPage', () => {
    let component: ReportsubmissionPage;
    let fixture: ComponentFixture<ReportsubmissionPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ReportsubmissionPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReportsubmissionPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
