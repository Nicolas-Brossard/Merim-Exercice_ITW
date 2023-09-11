import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchangeRateApiResponse } from './models/exchangeRateApiResponse.interface';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiKey = environment.apiKey;
  private apiURL = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/`;

  constructor(private http: HttpClient) {}

  getExchangeRates(base: string = 'USD') {
    return this.http.get<ExchangeRateApiResponse>(`${this.apiURL}/${base}`);
  }

  convertCurrency(amount: number, rate: number): number {
    const result = amount * rate;
    return parseFloat(result.toFixed(2));
  }
}
