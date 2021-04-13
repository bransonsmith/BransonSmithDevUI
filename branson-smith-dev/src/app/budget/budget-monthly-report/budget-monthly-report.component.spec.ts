import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BudgetMonthlyReportComponent } from './budget-monthly-report.component';

describe('BudgetMonthlyReportComponent', () => {
  let component: BudgetMonthlyReportComponent;
  let fixture: ComponentFixture<BudgetMonthlyReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetMonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
