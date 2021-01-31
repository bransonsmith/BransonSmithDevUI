import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BudgetService, FilledOutBudgetedMonthDto, TargetSummaryDto } from 'src/app/_services/budget/budget.service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';
import { TargetDto, TargetService } from 'src/app/_services/budget/target.service';

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
  grossTotal: number;
  netTotal: number;
  categories: CategoryDto[];
  targetForm;
  unbudgetedMoney: number;
  unspentMoney: number;
  isEditingTarget: boolean;
  targetToEdit: TargetSummaryDto;

  constructor(
    private budgetService: BudgetService,
    private categoryService: CategoryService,
    private targetService: TargetService,
    private formBuilder: FormBuilder,
  ) {
    this.targetForm = this.formBuilder.group({
      targetCategory: [''],
      targetAmount: ['']
    });
  }

  ngOnInit() {
    this.grossTotal = 0;
    this.netTotal = 0;
    this.unbudgetedMoney = 0;
    this.unspentMoney = 0;
    this.targetToEdit = null;
    this.isEditingTarget = false;

    this.budgetService.getFilledOutBudgetedMonth(this.budgetid, this.month).subscribe( budgetedMonth => {
      this.budgetedMonth = budgetedMonth;
      this.budgetedMonth.incomes.forEach(i => {
        this.grossTotal = this.grossTotal + parseFloat(i.grossamount.toString());
        this.netTotal = this.netTotal + parseFloat(i.netamount.toString());
        this.unbudgetedMoney = this.unbudgetedMoney + parseFloat(i.netamount.toString());
        this.unspentMoney = this.unspentMoney + parseFloat(i.netamount.toString());
      });
      this.budgetedMonth.targetsummaries.sort( (a, b) => {
        if (a.category.name < b.category.name) { return -1; }
        return 1;
      });
      this.budgetedMonth.targetsummaries.forEach(t => {
        this.unbudgetedMoney = this.unbudgetedMoney - t.target.amount;
        this.unspentMoney = this.unspentMoney - t.actualamount;
      });
      console.log(this.budgetedMonth);

      this.categoryService.getCategories().subscribe(cats => this.categories = cats.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      }));
    });
  }

  onSubmit() {
    const categoryid = this.categories.find(c => c.name === this.targetForm.value.targetCategory).id;
    const target = {
      categoryid,
      month: this.month,
      amount: this.targetForm.value.targetAmount
    };
    this.targetService.createTarget(target).subscribe(response => {
      window.location.reload();
    });
  }

  editTarget(target: TargetSummaryDto) {
    this.targetToEdit = target;
    this.isEditingTarget = true;
  }

  deleteEditedTarget() {
    this.targetService.deleteTarget(this.targetToEdit.target).subscribe(response => {
      window.location.reload();
    });
  }

  cancelEdit() {
    this.targetToEdit = null;
    this.isEditingTarget = false;
  }

  getCurrentMonthYear() {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // if (this.isDemo) {
    //   currentYear = 2020;
    //   currentMonth = 2;
    // }

    return { month: currentMonth, year: currentYear };
  }

  getMonthString(num: number) {
    // tslint:disable-next-line:max-line-length
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthList[num - 1];
  }

  dollarString(num: number) {
    if (num === undefined) {
      return '$0.00';
    }
    return `\$${parseFloat(num.toString()).toFixed(2)}`;
  }
  pctString(num: number) {
    if (num === undefined) {
      return '0.00%';
    }
    return `${parseFloat((num / this.netTotal * 100).toString()).toFixed(2)}%`;
  }
}
