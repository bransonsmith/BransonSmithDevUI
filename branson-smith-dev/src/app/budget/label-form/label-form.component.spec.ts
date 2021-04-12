import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LabelFormComponent } from './label-form.component';

describe('LabelFormComponent', () => {
  let component: LabelFormComponent;
  let fixture: ComponentFixture<LabelFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
