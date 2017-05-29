import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  inputs: ['lng']
})
export class TextComponent {

	lng: any;

	@Output() onScreenChange: EventEmitter<any> = new EventEmitter<any>();

	public screenChange(screen: any): void {
		this.onScreenChange.emit(screen);
	}

}