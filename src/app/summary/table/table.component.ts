import { Component, Input } from '@angular/core';
import { Expense } from '../../shared/expense.model';
import { DaysOfWeek } from '../../shared/days-of-week';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) expenses!: Expense[];

  weeklyExpenses: WeeklyExpenses[] = [];

  ngOnInit(): void {
    this.weeklyExpenses = this.processExpenses();
  }

  processExpenses(): WeeklyExpenses[] {
    const weeklyExpenses: WeeklyExpenses[] = [];
    const days = Object.values(DaysOfWeek);

    days.forEach((day) => {
      const dayExpenses = this.expenses.filter(
        (expense) => expense.day === day,
      );
      if (dayExpenses.length != 0) {
        const dailyExpense: WeeklyExpenses = {
          day: day.toUpperCase(),
          expense: dayExpenses.map((expense) => {
            return {
              category: expense.category,
              amount: expense.amount,
            };
          }),
        };
        weeklyExpenses.push(dailyExpense);
      }
    });
    return weeklyExpenses;
  }
}

export interface WeeklyExpenses {
  day: string;
  expense: {
    category: string;
    amount: number;
  }[];
}
