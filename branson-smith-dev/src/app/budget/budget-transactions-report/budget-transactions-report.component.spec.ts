import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTransactionsReportComponent } from './budget-transactions-report.component';

describe('BudgetTransactionsReportComponent', () => {
  let component: BudgetTransactionsReportComponent;
  let fixture: ComponentFixture<BudgetTransactionsReportComponent>;

  beforeEach(async(() => {
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
