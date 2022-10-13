import { Component, Input, OnInit } from '@angular/core';
import { Coin } from '../utils/Coin';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() coins: Coin[];

  constructor() {}

  ngOnInit(): void {}
}
