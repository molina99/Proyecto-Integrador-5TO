import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCongresComponent } from './post-congres.component';

describe('PostCongresComponent', () => {
  let component: PostCongresComponent;
  let fixture: ComponentFixture<PostCongresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCongresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCongresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
