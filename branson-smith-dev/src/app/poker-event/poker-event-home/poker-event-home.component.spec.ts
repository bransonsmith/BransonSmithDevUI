import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PokerEventHomeComponent } from './poker-event-home.component';

describe('PokerEventHomeComponent', () => {
  let component: PokerEventHomeComponent;
  let fixture: ComponentFixture<PokerEventHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerEventHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerEventHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
