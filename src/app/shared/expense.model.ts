import { DaysOfWeek } from './days-of-week';

export interface Expense {
  id: number;
  day: DaysOfWeek;
  category: string;
  amount: number;
}
