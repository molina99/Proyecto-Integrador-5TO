import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalprojectComponent } from './principalproject.component';

describe('PrincipalprojectComponent', () => {
  let component: PrincipalprojectComponent;
  let fixture: ComponentFixture<PrincipalprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
