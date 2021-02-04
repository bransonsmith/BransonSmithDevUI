import { Component, Input, OnInit } from '@angular/core';
import { FilledOutTransactionDto } from 'src/app/_services/budget/budget.service';
import { CategoryDto } from 'src/app/_services/budget/category.service';
import { LabelDto } from 'src/app/_services/budget/label.service';

@Component({
  selector: 'app-budget-transactions-report',
  templateUrl: './budget-transactions-report.component.html',
  styleUrls: ['./budget-transactions-report.component.css']
})
export class BudgetTransactionsReportComponent implements OnInit {

  @Input() transactions: FilledOutTransactionDto[];
  @Input() categories: CategoryDto[];
  @Input() labels: LabelDto[];

  constructor() { }

  ngOnInit() {
  }

}
