import { NgStyle } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { DaysOfWeek } from '../shared/days-of-week';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Input({ required: true }) day!: string;

  leftButtonLabel: string = '';
  rightButtonLabel: string = '';
  hideLeftButton: boolean = false;
  hideRightButton: boolean = false;
  dayIndex: number = 0;

  daysOfWeekLabels = ['None', ...Object.values(DaysOfWeek), 'Summary', 'None'];

  hiddenButton = {
    visibility: 'hidden',
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.dayIndex = this.daysOfWeekLabels.indexOf(this.day);
    this.leftButtonLabel = this.daysOfWeekLabels[this.dayIndex - 1];
    this.rightButtonLabel = this.daysOfWeekLabels[this.dayIndex + 1];
    if (this.leftButtonLabel === 'None') this.hideLeftButton = true;
    if (this.rightButtonLabel === 'None') this.hideRightButton = true;
  }
}
