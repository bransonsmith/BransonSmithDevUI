import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMonthlyReportComponent } from './budget-monthly-report.component';

describe('BudgetMonthlyReportComponent', () => {
  let component: BudgetMonthlyReportComponent;
  let fixture: ComponentFixture<BudgetMonthlyReportComponent>;

  beforeEach(async(() => {
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
