import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnuualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    console.log('User input: ', {
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnuualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration
    });
  }
}
