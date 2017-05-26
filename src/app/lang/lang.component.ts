import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.css']
})
export class LangComponent {

	@Output() onLangChange: EventEmitter<any> = new EventEmitter<any>();

	public langChange(lang: any): void {
		this.onLangChange.emit(lang);
	}
	
}