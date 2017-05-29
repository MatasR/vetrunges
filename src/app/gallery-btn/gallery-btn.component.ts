import { Component } from '@angular/core';

@Component({
  selector: 'gallery-btn',
  inputs: ['screen', 'lng'],
  templateUrl: './gallery-btn.component.html',
  styleUrls: ['./gallery-btn.component.css']
})
export class GalleryBtnComponent {

	screen: string;
	lng: any;

}