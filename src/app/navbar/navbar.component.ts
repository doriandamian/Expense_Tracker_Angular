import { Component, input } from '@angular/core';
import { Day } from '../shared/day.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  // selected = input<Day>('MONDAY');

  selectedDay: string = 'monday';

  days = [
    { id: 'monday', label: 'MON' },
    { id: 'tuesday', label: 'TUES' },
    { id: 'wednesday', label: 'WED' },
    { id: 'thursday', label: 'THUR' },
    { id: 'friday', label: 'FRI' },
    { id: 'saturday', label: 'SAT' },
    { id: 'sunday', label: 'SUN' },
    { id: 'summary', label: 'SUMMARY' },
  ];

  onSelectDay(dayId: string, event: Event): void {
    event.preventDefault();
    this.selectedDay = dayId;
  }
}
