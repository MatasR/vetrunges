import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  inputs: ['screen']
})
export class MainComponent {

	loaded = false;

	ngOnInit(){
		if(window.innerWidth < 768)
			this.scrollLoopInit();
	}

	public scrollLoopInit() {
		var el = document.getElementsByClassName('wrap')[0];
		var bg = document.getElementsByClassName('bg')[0];
		el.addEventListener('scroll', this.scrollLoop.bind(null, el, bg), false);
	}

	public scrollLoop(el, bg){
		var bgPosY = el.scrollTop*100/(el.scrollHeight-el.clientHeight);
		bg.style.backgroundPositionY = bgPosY+'%';
	}
	
}