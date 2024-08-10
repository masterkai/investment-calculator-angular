import { Injectable, signal } from "@angular/core";
import type { UserInputDATA } from "./user-input/user-input.model";
import { InvestmentResultsDATA } from "./investment-results/investment-results.component";

@Injectable(
  {
    providedIn: "root",
  }
)
export class InvestmentService {
  resultDATA = signal<InvestmentResultsDATA[]>([]);

  calculateInvestmentResults(data: UserInputDATA) {
    const { initialInvestment, annualInvestment, expectedReturn, duration } =
      data;

    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    console.log(annualData);

    this.resultDATA.set(annualData);
  }
}
