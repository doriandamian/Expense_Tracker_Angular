import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../shared/expense.model';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [NavbarComponent, NavigationComponent, TableComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  expenses: Expense[] = [];
  totalExpenses: number = 0;

  private expenseService = inject(ExpenseService);

  ngOnInit(): void {
    this.expenses = this.expenseService.getExpenses();
    this.expenses.forEach((expense) => (this.totalExpenses += expense.amount));
  }
}
