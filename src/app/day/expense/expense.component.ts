import { Component, inject, Input } from '@angular/core';
import { Expense } from '../../shared/expense.model';
import { ExpenseService } from '../../services/expense.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-expense',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss',
})
export class ExpenseComponent {
  @Input({ required: true }) expense!: Expense;
  editExpenseForm!: FormGroup;

  isEditing: boolean = false;

  private expenseService = inject(ExpenseService);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editExpenseForm = this.fb.group({
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  deleteExpense(id: number) {
    this.expenseService.deleteExpense(id);
  }

  onEditToggle() {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.editExpenseForm.patchValue({
        category: this.expense.category,
        amount: this.expense.amount,
      });
    }
  }

  onEdit() {
    if (this.editExpenseForm.valid) {
      const values = this.editExpenseForm.value;
      this.expenseService.editExpense(
        this.expense.id,
        values.category,
        values.amount
      );
      this.isEditing = false;
    }
  }
}
