import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import { SummaryComponent } from './summary/summary.component';
import { DaysOfWeek } from './shared/days-of-week';

export const routes: Routes = [
  { path: 'Summary', component: SummaryComponent },
  { path: ':selectedDay', component: DayComponent },
  { path: '', redirectTo: DaysOfWeek.Monday, pathMatch: 'full' },
  { path: '**', redirectTo: DaysOfWeek.Monday },
];
