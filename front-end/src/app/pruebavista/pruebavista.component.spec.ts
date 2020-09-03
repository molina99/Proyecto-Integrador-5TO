import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebavistaComponent } from './pruebavista.component';

describe('PruebavistaComponent', () => {
  let component: PruebavistaComponent;
  let fixture: ComponentFixture<PruebavistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebavistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebavistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
