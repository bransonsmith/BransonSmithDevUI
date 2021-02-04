import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionLiComponent } from './transaction-li.component';

describe('TransactionLiComponent', () => {
  let component: TransactionLiComponent;
  let fixture: ComponentFixture<TransactionLiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionLiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
