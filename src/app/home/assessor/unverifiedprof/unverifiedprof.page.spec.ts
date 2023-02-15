import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifiedpersPage } from './unverifiedprof.page';

describe('UnverifiedpersPage', () => {
  let component: UnverifiedpersPage;
  let fixture: ComponentFixture<UnverifiedpersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifiedpersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifiedpersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
