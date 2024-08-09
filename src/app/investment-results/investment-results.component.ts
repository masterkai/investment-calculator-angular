import {Component, input} from '@angular/core';

export interface InvestmentResultsDATA {
  year: number;
  valueEndOfYear: number;
  interest: number;
  totalInterest: number;
  annualInvestment: number;
  totalAmountInvested: number;
}

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input.required<InvestmentResultsDATA[]>();
}
