import { Component, OnInit, Input } from '@angular/core';
import { BudgetService, FilledOutBudgetedMonthDto } from 'src/app/_services/budget/budget.service';

@Component({
  selector: 'app-budget-monthly-report',
  templateUrl: './budget-monthly-report.component.html',
  styleUrls: ['./budget-monthly-report.component.css']
})
export class BudgetMonthlyReportComponent implements OnInit {

  @Input() isDemo: boolean;
  @Input() month: string;
  @Input() budgetid: string;
  budgetedMonth: FilledOutBudgetedMonthDto;

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit() {
    this.budgetService.getFilledOutBudgetedMonth(this.budgetid, this.month).subscribe( budgetedMonth => {
      this.budgetedMonth = budgetedMonth;
    });
  }


  getCurrentMonthYear() {
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    if (this.isDemo) {
      currentYear = 2020;
      currentMonth = 2;
    }

    return { month: currentMonth, year: currentYear };
  }

  getMonthString(num: number) {
    // tslint:disable-next-line:max-line-length
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthList[num - 1];
  }
}
