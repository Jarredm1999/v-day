import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { DATA } from '../mock-cards';
import { CardData } from '../CardData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [trigger('cardFlip', [
    state('default', style({
      transform: 'none'
    })),
    state('flipped', style({
      transform: 'rotateY(180deg)'
    })),
    transition('default => flipped', [
      animate('400ms')
    ]),
    transition('flipped => default', [
      animate('400ms')
    ])
  ])
 ]
})
export class CardComponent implements OnInit {
  cards: CardData[] = DATA;

  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(card: CardData) {
    if (card.state === "default") {
      card.state = "flipped";
    } else {
      card.state = "default";
    }
  }

}