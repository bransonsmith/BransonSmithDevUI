import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TargetEditFormComponent } from './target-edit-form.component';

describe('TargetEditFormComponent', () => {
  let component: TargetEditFormComponent;
  let fixture: ComponentFixture<TargetEditFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
