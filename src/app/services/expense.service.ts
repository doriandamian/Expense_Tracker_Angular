import { Injectable } from '@angular/core';
import { Expense } from '../shared/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[];

  constructor() {
    this.expenses = [];
  }
}
