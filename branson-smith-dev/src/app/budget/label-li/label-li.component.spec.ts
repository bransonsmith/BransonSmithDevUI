import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabelLiComponent } from './label-li.component';

describe('LabelLiComponent', () => {
  let component: LabelLiComponent;
  let fixture: ComponentFixture<LabelLiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
