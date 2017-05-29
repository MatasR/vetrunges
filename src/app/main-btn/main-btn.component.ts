import { Component } from '@angular/core';

@Component({
  selector: 'main-btn',
  templateUrl: './main-btn.component.html',
  styleUrls: ['./main-btn.component.css'],
  inputs: ['lng']
})
export class MainBtnComponent {

	lng: any;

}