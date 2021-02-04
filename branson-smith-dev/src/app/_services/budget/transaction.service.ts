import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilledOutTransactionDto } from './budget.service';

export class TransactionDto {
  id: string;
  labelid: string;
  categoryid: string;
  date: string;
  details: string;
  amount: number;
  month: string;
  card: string;
  notes: string;
  tags: string;
}
export class TransactionUpdateDto {
  labelid: string;
  categoryid: string;
  date: string;
  details: string;
  amount: number;
  month: string;
  card: string;
  notes: string;
  tags: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = 'https://bransonsmithdev-api.herokuapp.com/api/transactions';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  createTransaction(newTransaction): Observable<TransactionDto> {
    return this.http.post<TransactionDto>(this.url, newTransaction, this.httpOptions);
  }

  getTransactions(): Observable<TransactionDto[]> {
    return this.http.get<TransactionDto[]>(this.url + '/');
  }

  getFilledOutTransactions(): Observable<FilledOutTransactionDto[]> {
    return this.http.get<FilledOutTransactionDto[]>(this.url + '/budget');
  }

  updateTransaction(transaction): Observable<TransactionDto> {
    const noIdField: TransactionUpdateDto = {
      labelid: transaction.labelid,
      categoryid: transaction.categoryid,
      date: transaction.date,
      details: transaction.details,
      amount: transaction.amount,
      month: transaction.month,
      card: transaction.card,
      notes: transaction.notes,
      tags: transaction.tags,
    };
    return this.http.put<TransactionDto>(this.url + '/' + transaction.id, noIdField, this.httpOptions);
  }

  // updateCategory(transactionId: string, categoryId: string): Observable<TransactionDto> {
  //   return this.http.put<TransactionDto>(this.url + '/' + transactionId + '/updatecategory/' + categoryId, {}, this.httpOptions);
  // }

  // updateLabel(transactionId: string, labelId: string): Observable<TransactionDto> {
  //   return this.http.put<TransactionDto>(this.url + '/' + transactionId + '/updatelabel/' + labelId, {}, this.httpOptions);
  // }

  deleteTransaction(transaction): Observable<TransactionDto> {
    return this.http.delete<TransactionDto>(this.url + '/' + transaction.id, this.httpOptions);
  }
}
