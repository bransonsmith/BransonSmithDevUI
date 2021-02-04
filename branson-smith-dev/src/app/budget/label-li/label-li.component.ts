import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryDto } from 'src/app/_services/budget/category.service';
import { FilledOutLabelDto, LabelDto, LabelService } from 'src/app/_services/budget/label.service';

@Component({
  selector: 'app-label-li',
  templateUrl: './label-li.component.html',
  styleUrls: ['./label-li.component.css']
})
export class LabelLiComponent implements OnInit {

  @Input() label: FilledOutLabelDto;
  @Input() categories: CategoryDto[];
  @Output() labelLiDeleted = new EventEmitter();
  labelForm;
  promptConfirmDelete = false;

  constructor(
    private formBuilder: FormBuilder,
    private labelService: LabelService
  ) {
    this.labelForm = this.formBuilder.group({
      labelName: ['', Validators.required],
      labelAutokeys: ['', Validators.required],
      labelCategory: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  updateLabel() {
    if (this.labelForm.value.labelName !== null && this.labelForm.value.labelName.length > 0) {
      this.label.name = this.labelForm.value.labelName;
    }
    if (this.labelForm.value.labelCategory !== null) {
      this.label.category = this.categories.find(c => c.name === this.labelForm.value.labelCategory);
    }
    this.label.autokeys = this.labelForm.value.labelAutokeys;


    const labelToUpdate: LabelDto = {
      id: this.label.id,
      name: this.label.name,
      categoryid: this.label.category.id,
      autokeys: this.label.autokeys
    };
    this.labelService.updateLabel(labelToUpdate).subscribe();
  }

  startDelete() {
    this.promptConfirmDelete = true;
  }
  cancelDelete() {
    this.promptConfirmDelete = false;
  }
  confirmDelete() {
    this.labelService.deleteLabel(this.label).subscribe();
    this.labelLiDeleted.emit();
  }
}
