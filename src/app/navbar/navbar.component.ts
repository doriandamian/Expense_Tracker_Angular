import { Component, Input, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { DaysOfWeek } from '../shared/days-of-week';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input({ required: true }) day!: DaysOfWeek | string;

  daysOfWeek = Object.values(DaysOfWeek);
}
