import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportgeneratorPage } from './reportgenerator.page';

describe('ReportgeneratorPage', () => {
  let component: ReportgeneratorPage;
  let fixture: ComponentFixture<ReportgeneratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportgeneratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportgeneratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
