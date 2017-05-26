import { Component, HostListener } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  inputs: ['lng']
})
export class GalleryComponent {

	gallery = [
		[
			{
				id: 1
			},
			{
				id: 2
			},
			{
				id: 3
			},
			{
				id: 4
			}
		],
		[
			{
				id: 5
			},
			{
				id: 6
			},
			{
				id: 7
			}
		],
		[
			{
				id: 8
			},
			{
				id: 9
			},
			{
				id: 10
			},
			{
				id: 11
			}
		],
		[
			{
				id: 12
			},
			{
				id: 13
			},
			{
				id: 14
			}
		],
		[
			{
				id: 15
			},
			{
				id: 16
			},
			{
				id: 17
			}
		]
	];

	/*imgsNum = 17;

	imgsDef = [
		[1,2,3,4],
		[5,6,7],
		[8,9,10,11],
		[12,13,14],
		[15,16,17]
	];

	imgs = [];

	gallery = [];*/

	/*constructor(){
		var row = 1;
		
		for(var i = 1; i <= this.imgsNum; i++){

			this.imgs.push(i);

			if(row % 2){

				if(this.imgs.length == 4){

					this.gallery.push(this.imgs);
					row++;
					this.imgs = [];

				}

			}else{

				if(this.imgs.length == 3){

					this.gallery.push(this.imgs);
					row++;
					this.imgs = [];

				}

			}

		}

		if(this.imgs.length > 0)
			this.gallery.push(this.imgs);
		
	}*/

	ngAfterViewInit() {
      jQuery(document).ready(function(){ //Photos Gallery
           jQuery(".fancybox").fancybox({
               openEffect: "elastic",
               closeEffect: "none"
           });
       });
    }

}