import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  {path: 'summary', component: SummaryComponent},
  { path: ':selectedDay', component: DayComponent },
  { path: '', redirectTo: 'monday', pathMatch: 'full' },
  { path: '**', redirectTo: 'monday' },
];
