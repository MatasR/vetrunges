import { Component } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  inputs: ['lng']
})
export class CardComponent {

	lng: any;

}