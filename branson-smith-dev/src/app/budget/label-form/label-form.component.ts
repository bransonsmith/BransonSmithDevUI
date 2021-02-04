import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';
import { FilledOutLabelDto, LabelService } from 'src/app/_services/budget/label.service';

@Component({
  selector: 'app-label-form',
  templateUrl: './label-form.component.html',
  styleUrls: ['./label-form.component.css']
})
export class LabelFormComponent implements OnInit {

  @Input() categories: CategoryDto[];
  @Input() labels: FilledOutLabelDto[];
  labelForm;
  validationText = '';
  loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private labelService: LabelService,
    private router: Router
  ) {
    this.labelForm = this.formBuilder.group({
      labelName: ['', Validators.required],
      labelAutokeys: ['', Validators.required],
      labelCategory: ['', Validators.required],
    });
  }


  ngOnInit() {
  }

  goTo(target) {
    this.router.navigateByUrl(target);
  }

  onSubmit() {
    this.validationText = '';
    if (!this.labelForm.valid) {
      if (this.labelForm.value.loginUsername.length === 0 ) {
        this.validationText += 'Name is required.';
      }
    } else {
      const label = {
        name: this.labelForm.value.labelName,
        autokeys: this.labelForm.value.labelAutokeys,
        categoryid: this.categories.find(c => c.name === this.labelForm.value.labelCategory).id
      };
      this.loading = true;
      this.labelService.createLabel(label).subscribe(response => {
        window.location.reload();
      });
    }
  }

  onLabelDelete(label: FilledOutLabelDto) {
    this.labels.splice(this.labels.findIndex(l => l.id === label.id), 1);
  }
}
