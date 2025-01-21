import { Component, inject, OnInit } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { ExpenseComponent } from "./expense/expense.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../shared/expense.model';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [CreateComponent, ExpenseComponent, NavbarComponent],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css',
})
export class DayComponent {
  selectedDay!: string;
  expenses: Expense[] = [];
  viewCreateExpense: boolean = true;

  constructor(private route: ActivatedRoute) {}

  private expenseService = inject(ExpenseService);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.selectedDay = params.get('selectedDay')!;
    });
    this.expenses = this.expenseService.getExpensesByDay(this.selectedDay);
  }

  onAddExpense(event: Event): void {
    this.viewCreateExpense = !this.viewCreateExpense;
  }
}
