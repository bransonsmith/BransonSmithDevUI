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
  demoMode = false;
  authInput = '';
  failedAuth = false;
  budgetid: string;

  constructor(
    private labelService: LabelService,
    private cookieService: CookieService,
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  attemptAuth() {
    if (this.authInput === 'Banana5') {
      this.onAuth();
      this.isAuth = true;
      this.failedAuth = false;
    } else {
      this.authInput = '';
      this.failedAuth = true;
    }
  }

  onAuth() {
    this.budgetid = '4b8a7cd0-601c-11eb-aa9c-83baf28d5dd7';
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

  getDemoData() {
    this.budgetid = 'demo';
    this.demoMode = true;
    this.categories = [
      {
        id: '9b330c70-2372-11eb-9b4e-3fcdade3d0dc',
        name: '401K'
      },
      {
        id: '31d3cc60-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Debt'
      },
      {
        id: '68e84af0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Entertainment'
      },
      {
        id: '4f62f740-236f-11eb-9b4e-3fcdade3d0dc',
        name: 'Food'
      },
      {
        id: '88355720-61a4-11eb-85f0-3d8e9368bd7b',
        name: 'Gifts'
      },
      {
        id: '88a43980-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Giving'
      },
      {
        id: '95ce47e0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Healthcare'
      },
      {
        id: '2db5b8a0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Home'
      },
      {
        id: '1a8999a0-2385-11eb-9b4e-3fcdade3d0dc',
        name: 'Income'
      },
      {
        id: '5de450e0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Medical'
      },
      {
        id: '6d5ae750-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Other'
      },
      {
        id: '7b422b30-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Personal Branson'
      },
      {
        id: '77082b00-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Personal Devon'
      },
      {
        id: '726ca9e0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Pets'
      },
      {
        id: '8cb38030-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Taxes'
      },
      {
        id: '57ff5fd0-2372-11eb-9b4e-3fcdade3d0dc',
        name: 'Transportation'
      },
      {
        id: '17b0f3a0-2384-11eb-9b4e-3fcdade3d0dc',
        name: 'Uncategorized'
      }
    ];

    this.labels = [
      {
        id: '1',
        name: 'Rent',
        autokeys: 'HOME WEB PAYMENT SERVICE',
        category: {
          id: '1',
          name: 'Home'
        }
      },
      {
        id: '2',
        name: 'Chick Fil A',
        autokeys: 'CHICK FIL A',
        category: {
          id: '2',
          name: 'Food'
        }
      },
      {
        id: '3',
        name: 'Golf Discount',
        autokeys: 'GOLFDISCOUNT',
        category: {
          id: '3',
          name: 'Entertainment'
        }
      },
      {
        id: '4',
        name: 'Gyro Shop',
        autokeys: 'THE GYRO SHOP',
        category: {
          id: '2',
          name: 'Food'
        }
      },
      {
        id: '5',
        name: 'Newks',
        autokeys: 'NEWKS EATERY',
        category: {
          id: '2',
          name: 'Food'
        }
      }
    ];

    this.transactions = [
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
      },
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
    ];
  }
}
