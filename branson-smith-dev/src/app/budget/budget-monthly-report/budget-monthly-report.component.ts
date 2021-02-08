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
  @Input() categories: CategoryDto[];
  budgetedMonth: FilledOutBudgetedMonthDto;
  grossTotal: number;
  netTotal: number;
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

    if (this.budgetid === 'demo') {
      this.budgetedMonth = {
        month: 'February 2021',
        budget: {
          id: '1',
          name: 'Main Budget'
        },
        incomes: [
          { id: '1', month: 'February 2021', grossamount: 750, netamount: 500, name: 'Salary' },
          { id: '2', month: 'February 2021', grossamount: 300, netamount: 250, name: 'Side Gig' },
        ],
        targetsummaries: [
          {
            category: { id: '1', name: 'Home' },
            target: { amount: 500, id: '1', categoryid: '1', month: 'February 2021' },
            actualamount: -400,
            transactions: [
              {
                id: '1',
                labelid: '1',
                categoryid: '2',
                date: '2/3/2021',
                details: 'HOME WEB PAYMENT SERVICE',
                amount: -400,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '1',
                  name: 'Rent',
                  autokeys: 'HOME WEB PAYMENT SERVICE',
                  categoryid: '1'
                },
                category: {
                  id: '1',
                  name: 'Home'
                }
              }
            ],
          },
          {
            category: { id: '2', name: 'Food' },
            target: { amount: 100, id: '1', categoryid: '1', month: 'February 2021' },
            actualamount: -57.56,
            transactions: [
              {
                id: '2',
                labelid: '2',
                categoryid: '2',
                date: '02/03/2021',
                details: 'CHICK FIL A PAY',
                amount: -10.54,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '2',
                  name: 'Chick Fil A',
                  autokeys: 'CHICK FIL A',
                  categoryid: '2'
                },
                category: {
                  id: '2',
                  name: 'Food'
                }
              },
              {
                id: '4',
                labelid: '4',
                categoryid: '2',
                date: '02/01/2021',
                details: 'PURCHASE AUTHORIZED ON 02/01 THE GYRO SHOP DALLAS TX',
                amount: -8.39,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '4',
                  name: 'Gyro Shop',
                  autokeys: 'THE GYRO SHOP',
                  categoryid: '4f62f740-236f-11eb-9b4e-3fcdade3d0dc'
                },
                category: {
                  id: '2',
                  name: 'Food'
                }
              },
              {
                id: '5',
                labelid: '5',
                categoryid: '2',
                date: '2/2/2021',
                details: 'NEWKS EATERY HOUSTON',
                amount: -23.42,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '5',
                  name: 'Newks',
                  autokeys: 'NEWKS EATERY',
                  categoryid: '2'
                },
                category: {
                  id: '2',
                  name: 'Food'
                }
              },
              {
                id: '6',
                labelid: '2',
                categoryid: '2',
                date: '02/01/2021',
                details: 'CHICK FIL A PAY',
                amount: -15.21,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '2',
                  name: 'Chick Fil A',
                  autokeys: 'CHICK FIL A',
                  categoryid: '2'
                },
                category: {
                  id: '2',
                  name: 'Food'
                }
              },
            ],
          },
          {
            category: { id: '3', name: 'Entertainment' },
            target: { amount: 50, id: '1', categoryid: '1', month: 'February 2021' },
            actualamount: -32.51,
            transactions: [
              {
                id: '3',
                labelid: '3',
                categoryid: '3',
                date: '02/02/2021',
                details: 'PURCHASE AUTHORIZED ON 02/02 GOLFDISCOUNT WEB STORE',
                amount: -32.51,
                month: 'February 2021',
                card: '',
                notes: '',
                tags: '',
                label: {
                  id: '3',
                  name: 'Golf Discount',
                  autokeys: 'GOLFDISCOUNT',
                  categoryid: '3'
                },
                category: {
                  id: '3',
                  name: 'Entertainment'
                }
              }
            ],
          }
        ]
      };
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
        this.unspentMoney = this.unspentMoney + t.actualamount;
      });

      this.categories.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
    } else {
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
          this.unspentMoney = this.unspentMoney + t.actualamount;
        });

        this.categories.sort((a, b) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      });
    }

  }

  onSubmit(form) {
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
