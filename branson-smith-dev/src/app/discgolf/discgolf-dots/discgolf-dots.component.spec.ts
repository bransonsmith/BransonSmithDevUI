import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscgolfDotsComponent } from './discgolf-dots.component';

describe('DiscgolfDotsComponent', () => {
  let component: DiscgolfDotsComponent;
  let fixture: ComponentFixture<DiscgolfDotsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
