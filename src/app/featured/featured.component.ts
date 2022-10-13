import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Coin } from '../utils/Coin';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

  data$: Observable<Coin[]>;
  coins: Coin[];
  formattedCoins: Coin[];

  constructor(private readonly http: HttpClient) {}

  ngOnInit(): void {
    this.data$ = this.http.get<Coin[]>(this.url);
    this.data$.subscribe((res) => (this.coins = res));
  }
}
