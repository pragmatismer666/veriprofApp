import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedofficePage } from './unverifiedoffice.page';

describe('UnverifiedofficePage', () => {
  let component: UnverifiedofficePage;
  let fixture: ComponentFixture<UnverifiedofficePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifiedofficePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedofficePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
