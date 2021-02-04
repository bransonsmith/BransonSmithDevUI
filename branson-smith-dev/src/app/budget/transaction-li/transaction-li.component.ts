import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilledOutTransactionDto } from 'src/app/_services/budget/budget.service';
import { CategoryDto, CategoryService } from 'src/app/_services/budget/category.service';
import { FilledOutLabelDto, LabelDto } from 'src/app/_services/budget/label.service';
import { TransactionService } from 'src/app/_services/budget/transaction.service';

@Component({
  selector: 'app-transaction-li',
  templateUrl: './transaction-li.component.html',
  styleUrls: ['./transaction-li.component.css']
})
export class TransactionLiComponent implements OnInit {

  @Input() transaction: FilledOutTransactionDto;
  @Input() categories: CategoryDto[];
  @Input() labels: LabelDto[];
  @Output() transactionUpdate = new EventEmitter();
  selectedCategory: CategoryDto;
  selectedLabel: LabelDto;
  transactionForm;
  invalid = false;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService
    ) {
      this.transactionForm = this.formBuilder.group({
        transactionCategory: [''],
        transactionLabel: [''],
      });
    }

  ngOnInit() {
  }

  updateCategory() {
    this.selectedCategory = this.categories.find(c => c.name === this.transactionForm.value.transactionCategory);
    if (this.selectedCategory === null) {
      this.invalid = true;
    } else {
      this.invalid = false;
      this.transaction.categoryid = this.selectedCategory.id;
      this.transactionService.updateTransaction(this.transaction)
        .subscribe(res => console.log(this.transaction));
    }
  }

  updateLabel() {
    this.selectedLabel = this.labels.find(c => c.name === this.transactionForm.value.transactionLabel);
    if (this.selectedLabel === null) {
      this.invalid = true;
    } else {
      this.invalid = false;
      this.transaction.labelid = this.selectedLabel.id;
      this.transactionService.updateTransaction(this.transaction)
        .subscribe(res => console.log(this.transaction));
    }
  }

  getDollarString(num: number) {
    return '$' + parseFloat(num.toString()).toFixed(2);
  }

  getTrimmedDetailString(dets: string) {
    let trimmed = dets;
    trimmed = trimmed.replace(new RegExp('[a-zA-Z 0-9]+AUTHORIZED ON '), '');
    trimmed = trimmed.replace(new RegExp('[0-9][0-9]/[0-9][0-9]', 'g'), '');
    trimmed = trimmed.replace(new RegExp('Branson', 'gi'), '');
    trimmed = trimmed.replace(new RegExp('Smith', 'gi'), '');
    return trimmed;
  }

}
