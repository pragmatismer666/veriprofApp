import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessorPage } from './assessor.page';

describe('AssessorPage', () => {
    let component: AssessorPage;
    let fixture: ComponentFixture<AssessorPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AssessorPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AssessorPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
