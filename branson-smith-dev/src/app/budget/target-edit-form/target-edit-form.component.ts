import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TargetSummaryDto } from 'src/app/_services/budget/budget.service';
import { TargetDto, TargetService } from 'src/app/_services/budget/target.service';

@Component({
  selector: 'app-target-edit-form',
  templateUrl: './target-edit-form.component.html',
  styleUrls: ['./target-edit-form.component.css']
})
export class TargetEditFormComponent implements OnInit {

  targetForm;
  validationText = '';
  loading = false;
  areYouSure = false;
  @Input() targetSummary: TargetSummaryDto;
  @Output() deleteTarget = new EventEmitter();
  @Output() cancelEdit = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private targetService: TargetService
  ) {
    this.targetForm = this.formBuilder.group({
      targetAmount: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.validationText = '';
    if (!this.targetForm.valid) {
      if (this.targetForm.value.targetAmount.toString().length === 0 ) {
        this.targetForm.value.targetAmount = this.targetSummary.target.amount;
      }
    }
    const target: TargetDto = {
      amount: this.targetForm.value.targetAmount,
      categoryid: this.targetSummary.target.categoryid,
      id: this.targetSummary.target.id,
      month: this.targetSummary.target.month
    };
    this.loading = true;
    this.targetService.updateTarget(target).subscribe(response => {
      window.location.reload();
    });
  }

  startDelete() {
    this.areYouSure = true;
  }
  confirmDelete() {
    this.deleteTarget.emit();
  }
  cancelDelete() {
    this.areYouSure = false;
  }
  cancelEditProcess() {
    this.cancelEdit.emit();
  }
}
