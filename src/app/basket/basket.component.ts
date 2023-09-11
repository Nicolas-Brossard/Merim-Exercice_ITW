import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Product } from '../models/product.interface';
import {
  CURRENCY_KEYS,
  CURRENCY_LABELS,
} from '../constants/currency.constants';
import { ExchangeRateApiResponse } from '../models/exchangeRateApiResponse.interface';
import { CurrencyKey } from '../models/currency.types';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  products: Product[] = [
    { name: 'USB Hub', cost: 10.5 },
    { name: 'Microphone', cost: 5 },
    { name: 'Headphones', cost: 14.99 },
    { name: 'Monitor', cost: 300 },
    { name: 'Notebook', cost: 1000 },
  ];

  currencies: { code: string; label: string; property: CurrencyKey }[] = [
    { code: CURRENCY_KEYS.USD, label: CURRENCY_LABELS.USD, property: 'cost' },
    {
      code: CURRENCY_KEYS.JPY,
      label: CURRENCY_LABELS.JPY,
      property: 'costInYen',
    },
    {
      code: CURRENCY_KEYS.EUR,
      label: CURRENCY_LABELS.EUR,
      property: 'costInEuro',
    },
    {
      code: CURRENCY_KEYS.CZK,
      label: CURRENCY_LABELS.CZK,
      property: 'costInCzkCrown',
    },
    {
      code: CURRENCY_KEYS.VND,
      label: CURRENCY_LABELS.VND,
      property: 'costInVnd',
    },
  ];

  exchangeRates: ExchangeRateApiResponse['conversion_rates'] = {};

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  recalculatePrices() {
    this.currencyService.getExchangeRates().subscribe((data) => {
      this.exchangeRates = data.conversion_rates;
      this.products.forEach((product: Product) => {
        this.currencies.forEach((currency) => {
          if (currency.property !== 'cost') {
            product[currency.property] = this.currencyService.convertCurrency(
              product.cost,
              this.exchangeRates[currency.code]
            );
          }
        });
      });
    });
  }
}
