import { NgStyle } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  @Input({ required: true }) day!: string;

  leftButtonLabel: string = '';
  rightButtonLabel: string = '';
  hideLeftButton: boolean = false;
  hideRightButton: boolean = false;
  dayIndex: number = 0;

  daysOfWeekLabels: string[] = [
    'none',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'summary',
    'none',
  ];

  hiddenButton = {
    visibility: 'hidden',
  };

  ngOnChanges(changes: SimpleChanges): void {
    this.dayIndex = this.daysOfWeekLabels.indexOf(this.day);
    this.leftButtonLabel = this.capitalize(
      this.daysOfWeekLabels[this.dayIndex - 1],
    );
    this.rightButtonLabel = this.capitalize(
      this.daysOfWeekLabels[this.dayIndex + 1],
    );
    if (this.leftButtonLabel === 'None') this.hideLeftButton = true;
    if (this.rightButtonLabel === 'None') this.hideRightButton = true;
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
