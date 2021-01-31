import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';
import { FilledOutLabelDto, LabelService } from 'src/app/_services/budget/label.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  categories: CategoryDto[];
  loading = false;
  labels: FilledOutLabelDto[];

  constructor(
    private labelService: LabelService,
    private cookieService: CookieService,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.labelService.getFilledOutLabels().subscribe(labs => this.labels = labs);
    this.categoryService.getCategories().subscribe(cats => this.categories = cats);
  }

  getCurrentMonth() {
    return 'February 2021';
  }

}
