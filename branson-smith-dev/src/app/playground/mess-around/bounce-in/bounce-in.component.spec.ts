import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BounceInComponent } from './bounce-in.component';

describe('BounceInComponent', () => {
  let component: BounceInComponent;
  let fixture: ComponentFixture<BounceInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BounceInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
