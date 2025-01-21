import { Component, inject, Input } from '@angular/core';
import { Expense } from '../../shared/expense.model';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {
  @Input({required: true}) expense !: Expense;

  isEditing : boolean = false;

  private expenseService = inject(ExpenseService);

  deleteExpense(id: number){
    this.expenseService.deleteExpense(id);
  }

  onEditButton() {
    this.isEditing = !this.isEditing;
  }
}
