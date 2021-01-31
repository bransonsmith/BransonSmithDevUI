import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDto } from './category.service';
import { LabelDto } from './label.service';
import { TargetDto } from './target.service';

export class BudgetDto {
  id: string;
  name: string;
}

export class BudgetedMonthDto {
  id: string;
  budgetid: string;
  month: string;
}

export class IncomeDto {
  id: string;
  month: string;
  grossamount: number;
  netamount: number;
}

export class FilledOutTargetDto {
  id: string;
  categoryid: string;
  amount: number;
  category: CategoryDto;
  income: IncomeDto;
}

export class FilledOutTransactionDto {
  id: string;
  labelid: string;
  categoryid: string;
  label: LabelDto;
  category: CategoryDto;
  date: string;
  details: string;
  amount: number;
  month: string;
  card: string;
  notes: string;
  tags: string;
}

export class TargetSummaryDto {
  category: CategoryDto;
  target: TargetDto;
  actualamount: number;
  transactions: FilledOutTransactionDto[];
}

export class FilledOutBudgetedMonthDto {
  month: string;
  budget: BudgetDto;
  incomes: IncomeDto[];
  targetsummaries: TargetSummaryDto[];
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/budgets';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  createBudget(newBudget): Observable<BudgetDto> {
    return this.http.post<BudgetDto>(this.url, newBudget, this.httpOptions);
  }

  getBudgets(): Observable<BudgetDto[]> {
    return this.http.get<BudgetDto[]>(this.url + '/');
  }

  getFilledOutBudgetedMonth(budgetid: string, month: string): Observable<FilledOutBudgetedMonthDto> {
    return this.http.get<FilledOutBudgetedMonthDto>(this.url + `/budget/${month}/${budgetid}`);
  }
}
