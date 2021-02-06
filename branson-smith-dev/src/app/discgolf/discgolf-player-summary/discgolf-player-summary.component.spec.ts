import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscgolfPlayerSummaryComponent } from './discgolf-player-summary.component';

describe('DiscgolfPlayerSummaryComponent', () => {
  let component: DiscgolfPlayerSummaryComponent;
  let fixture: ComponentFixture<DiscgolfPlayerSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscgolfPlayerSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscgolfPlayerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
