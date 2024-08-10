import { Component, output, signal } from '@angular/core';
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
  calculate = output<UserInputDATA>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit() {
    this.calculate.emit({
      initialInvestment: parseFloat(this.enteredInitialInvestment()),
      annualInvestment: parseFloat(this.enteredAnnualInvestment()),
      expectedReturn: parseFloat(this.enteredExpectedReturn()),
      duration: parseFloat(this.enteredDuration()),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
