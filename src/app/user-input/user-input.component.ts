import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { UserInputDATA } from './user-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<UserInputDATA>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseFloat(this.enteredInitialInvestment),
      annualInvestment: parseFloat(this.enteredAnnualInvestment),
      expectedReturn: parseFloat(this.enteredExpectedReturn),
      duration: parseFloat(this.enteredDuration),
    });
  }
}
