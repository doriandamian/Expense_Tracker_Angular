import { Day } from "./day.model";

export interface Expense {
    id: number,
    day: Day,
    category: string,
    amount: number
}