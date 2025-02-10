import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Expense_Tracker';
  viewCreateExpense: boolean = true;
  selectedDay: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.selectedDay = data['day'];
    });
  }

  onAddExpense(event: Event): void {
    this.viewCreateExpense = !this.viewCreateExpense;
  }
}
