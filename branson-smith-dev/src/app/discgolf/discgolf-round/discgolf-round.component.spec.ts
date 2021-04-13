import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiscgolfRoundComponent } from './discgolf-round.component';

describe('DiscgolfRoundComponent', () => {
  let component: DiscgolfRoundComponent;
  let fixture: ComponentFixture<DiscgolfRoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
