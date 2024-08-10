import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from "../investment.service";

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
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService)

  results = computed(() => this.investmentService.resultDATA());
}
