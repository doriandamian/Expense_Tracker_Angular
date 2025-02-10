import { Injectable } from '@angular/core';
import { Expense } from '../shared/expense.model';
import { DaysOfWeek } from '../shared/days-of-week';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[];

  constructor() {
    this.expenses = this.downloadExpenses();
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }

  getExpensesByDay(day: DaysOfWeek): Expense[] {
    return this.expenses.filter((expense) => expense.day === day);
  }

  addExpense(expense: Expense): void {
    this.expenses.push(expense);
    this.saveExpenses();
  }

  editExpense(expenseId: number, category?: string, amount?: number) {
    this.expenses.forEach((expense) => {
      if (expense.id === expenseId) {
        if (category != undefined) {
          expense.category = category;
        }
        if (amount != undefined) {
          expense.amount = amount;
        }
      }
    });
    this.saveExpenses();
    window.location.reload();
  }

  deleteExpense(expenseId: number): void {
    this.expenses = this.expenses.filter((expense) => expense.id !== expenseId);
    this.saveExpenses();
    window.location.reload();
  }

  saveExpenses(): void {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  downloadExpenses(): Expense[] {
    const expenses = localStorage.getItem('expenses');
    return expenses ? JSON.parse(expenses) : [];
  }
}
