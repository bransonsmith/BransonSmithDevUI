import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardCourseColComponent } from './scorecard-course-col.component';

describe('ScorecardCourseColComponent', () => {
  let component: ScorecardCourseColComponent;
  let fixture: ComponentFixture<ScorecardCourseColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardCourseColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardCourseColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
