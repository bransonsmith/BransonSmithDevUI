import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BudgetTransactionsReportComponent } from './budget-transactions-report.component';

describe('BudgetTransactionsReportComponent', () => {
  let component: BudgetTransactionsReportComponent;
  let fixture: ComponentFixture<BudgetTransactionsReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetTransactionsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTransactionsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
