import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FilledOutTransactionDto } from 'src/app/_services/budget/budget.service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';
import { FilledOutLabelDto, LabelService } from 'src/app/_services/budget/label.service';
import { TransactionService } from 'src/app/_services/budget/transaction.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  categories: CategoryDto[];
  loading = false;
  labels: FilledOutLabelDto[];
  transactions: FilledOutTransactionDto[];
  isAuth = false;
  authInput = '';
  failedAuth = false;

  constructor(
    private labelService: LabelService,
    private cookieService: CookieService,
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit() {

  }

  attemptAuth() {
    if (this.authInput === 'Banana5') {
      this.onAuth();
      this.isAuth = true;
      this.failedAuth = false;
    } else {
      this.authInput = '';
      this.failedAuth = true;
      console.log('Failed');
    }
  }

  onAuth() {
    this.labelService.getFilledOutLabels().subscribe(labs => {
      labs.sort((a, b) => {
        if (a.name.trim() < b.name.trim()) { return -1; }
        return 1;
      });
      this.labels = labs;
    });
    this.categoryService.getCategories().subscribe(cats => {
      cats.sort((a, b) => {
        if (a.name.trim() < b.name.trim()) { return -1; }
        return 1;
      });
      this.categories = cats;
    });
    this.transactionService.getFilledOutTransactions().subscribe(trans => {
      let thisYearsTrans = trans;
      thisYearsTrans = thisYearsTrans.filter(t => t.date.split('/')[2] === '2021');
      this.transactions = thisYearsTrans;
    });
  }

  getCurrentMonth() {
    return 'February 2021';
  }

}
