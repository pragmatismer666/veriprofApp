import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorsreportPage } from './accessorsreport.page';

describe('AccessorsreportPage', () => {
  let component: AccessorsreportPage;
  let fixture: ComponentFixture<AccessorsreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessorsreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessorsreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
