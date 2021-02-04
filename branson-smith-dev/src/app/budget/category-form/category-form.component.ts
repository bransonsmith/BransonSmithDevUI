import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm;
  validationText = '';
  loading = false;
  @Input() categories: CategoryDto[];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  goTo(target) {
    this.router.navigateByUrl(target);
  }

  onSubmit(form) {
    this.validationText = '';
    if (!this.categoryForm.valid) {
      if (this.categoryForm.value.loginUsername.length === 0 ) {
        this.validationText += 'Name is required.';
      }
    } else {
      const category = {
        name: this.categoryForm.value.categoryName
      };
      this.loading = true;
      this.categoryService.createCategory(category).subscribe(response => {
        window.location.reload();
      });
    }
  }

}
