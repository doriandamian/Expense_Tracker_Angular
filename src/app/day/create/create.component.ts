import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../shared/expense.model';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  @Input({ required: true }) day!: string;
  @Input({ required: true }) expenseNumber!: number;
  createExpenseForm!: FormGroup;

  expenseService = inject(ExpenseService);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createExpenseForm = this.fb.group({
      category: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSave(): void {
    if (this.createExpenseForm.valid) {
      const expense: Expense = {
        id: Date.now(),
        day: this.day,
        category: this.createExpenseForm.value.category,
        amount: this.createExpenseForm.value.amount,
      };
      this.expenseService.addExpense(expense);
      window.location.reload();
    }
  }
}
