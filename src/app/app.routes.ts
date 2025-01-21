import { Routes } from '@angular/router';
import { DayComponent } from './day/day.component';

export const routes: Routes = [
  { path: ':selectedDay', component: DayComponent },
  { path: '', redirectTo: 'monday', pathMatch: 'full' },
  { path: '**', redirectTo: 'monday' },
];
