import { Component, inject, OnInit } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { ExpenseComponent } from './expense/expense.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../services/expense.service';
import { Expense } from '../shared/expense.model';
import { NavigationComponent } from '../navigation/navigation.component';
import { DaysOfWeek } from '../shared/days-of-week';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [
    CreateComponent,
    ExpenseComponent,
    NavbarComponent,
    NavigationComponent,
  ],
  templateUrl: './day.component.html',
  styleUrl: './day.component.scss',
})
export class DayComponent {
  selectedDay!: DaysOfWeek;
  expenses: Expense[] = [];
  dailyTotal: number = 0;
  viewCreateExpense: boolean = false;

  constructor(private route: ActivatedRoute) {}

  private expenseService = inject(ExpenseService);

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let selectedDayString = params.get('selectedDay')!;
      this.selectedDay = DaysOfWeek[selectedDayString as keyof typeof DaysOfWeek];
    });
    this.expenses = this.expenseService.getExpensesByDay(this.selectedDay);
    this.expenses.forEach((expense) => (this.dailyTotal += expense.amount));
    if (this.expenses.length === 0) this.viewCreateExpense = true;
  }

  onAddExpense(event: Event): void {
    this.viewCreateExpense = !this.viewCreateExpense;
  }
}
