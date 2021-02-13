import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerEventHomeComponent } from './poker-event-home.component';

describe('PokerEventHomeComponent', () => {
  let component: PokerEventHomeComponent;
  let fixture: ComponentFixture<PokerEventHomeComponent>;

  beforeEach(async(() => {
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
