import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardPlayerColComponent } from './scorecard-player-col.component';

describe('ScorecardPlayerColComponent', () => {
  let component: ScorecardPlayerColComponent;
  let fixture: ComponentFixture<ScorecardPlayerColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardPlayerColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardPlayerColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
