import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetAddFormComponent } from './budget-add-form.component';

describe('BudgetAddFormComponent', () => {
  let component: BudgetAddFormComponent;
  let fixture: ComponentFixture<BudgetAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
