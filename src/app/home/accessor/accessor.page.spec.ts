import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorPage } from './accessor.page';

describe('AccessorPage', () => {
    let component: AccessorPage;
    let fixture: ComponentFixture<AccessorPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AccessorPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccessorPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
