import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscgolfHomeComponent } from './discgolf-home.component';

describe('DiscgolfHomeComponent', () => {
  let component: DiscgolfHomeComponent;
  let fixture: ComponentFixture<DiscgolfHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
