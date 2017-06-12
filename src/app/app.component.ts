import { Component } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
	screen = 'main';
	url = '';
	lang = 'lt';
	
	o = {
		'lt': {
			/*HEAD*/
			'title': 'Gintautas Švedas | Vėtrungių Gamyba',
			'keywords': 'vetrunges, vetrungiu gamyba, ginto vetrunges, vetrungiu kurimas, kursiu vetrunge',
			'description': 'Galiu sukurti vėtrungę, kurioje simboliai gali apibūdinti jūsų pomėgius, profesiją, šeimą, aplinką...',
			/*HEAD*/

			/*NAV*/
			'main': 'Pagrindinis',
			'gallery': 'Galerija',
			/*NAV*/

			/*CONTENT*/
			'name': 'Gintautas Švedas',
			'moto': 'Vėtrungė - tai daugiau nei vėjarodė',
			'hdr1': 'Unikalių vėtrungių gamyba',
			'hdr2': '',
			'txt1': 'Galiu sukurti vėtrungę, kurioje simboliai gali apibūdinti jūsų pomėgius, profesiją, šeimą, aplinką... Senąsias vėtrunges atkūrinėju nuo 1988m. Vėtrungė gaminama iš ąžuolo, dažoma atspariomis alkidinėmis emalėmis. Ašims naudojami bronziniai įdėklai.',
			'txt2': 'Mano gamintomis vėtrungėmis džiaugiasi Švedijoje, Vokietijoje, Suomijoje ir Norvegijoje. Jas pamatyti galite',
			'txt3': '',
			'txt4': '',
			'more': 'Daugiau apie jas...',
			'show_more': 'Vėtrungių galerijoje',
			/*CONTENT*/

			/*IMGS*/
			'desc': [
				'',
				'Originalioji Juodkrantės vėtrungė, sukurta panaudojant istorinės vėtrungės motyvus. 1992m.',
				'Mizgirių galerijos vėtrungė. (Nida) 1994m.',
				'Preila 2009m.',
				'Kaunas',
				'Atkurta istorinė Juodkrantės vėtrungė.',
				'Šato ant Luaros kranto (Prancūzija)',
				'Mano vėtrungė',
				'Mano giminių vėtrungė',
				'Suomių diplomato vėtrungė.',
				'Vėtrungė etnografinėje sodyboje. (Vokietija) 1992m.',
				'Vėtrungė jubiliejaus proga (Vilnius)',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Vėtrungė (Vilnius)'
			],
			/*IMGS*/
		},
		'en': {
			/*HEAD*/
			'title': 'Gintautas Svedas | I make Weathervanes',
			'keywords': 'weathervane, curonian weathervane, weathercocks, weathervane making, weathervane production, lithuanian weathervanes',
			'description': 'I can create a curonian weathervane, on which symbols can describe your hobbies, profession, family, environment...',
			/*HEAD*/

			/*NAV*/
			'main': 'Main',
			'gallery': 'Gallery',
			/*NAV*/

			/*CONTENT*/
			'name': 'Gintautas Svedas',
			'moto': 'Weathercock - more than a vane',
			'hdr1': 'Custom curonian weathercocks',
			'hdr2': 'Short weathervane history',
			'txt1': 'I can create a curonian weathervane, on which symbols can describe your hobbies, profession, family, environment... I restore old weathercocks since 1988. Weathervane is made from oak, painted with resistant alkyd email. Brass bushings are used for axles.',
			'txt2': 'My manufactured weathercocks are pleased in Sweden, Germany, Finland and Norway. You can see them in',
			'txt3': 'In 1844, a special marking system helping to control fishing in the Curonian Lagoon was introduced - rectangular tin shields painted in several colors, with a red - and - white flag. The fishermen themselves most often called these tokens flags (Flagge) or coats - of - arms (Wappen). A weathervane had the top, the leeward and the windward sides.<br/><br/>The most decorative was the leeward side, on which views of the native village (a church, a house, an elk, a boat etc.) were most often carved. Weathervanes were framed by ornamented openwork woodcarvings with elk and weird figures and house silhouettes.',
			'txt4': 'Each weathervane was a unique artwork, carved by a fisherman in long hours of waiting for the catch. Certain canons were established: a church symbolised faith, an elk - power; a circle at the highest point of a weathervane symbolised a woman, a cross - a man, etc...',
			'more': 'More about them...',
			'show_more': 'Weathecocks gallery',
			/*CONTENT*/

			/*IMGS*/
			'desc': [
				'',
				'The original Juodkrantės weathervane developed using historical weathervanes motifs. 1992.',
				'Galleries Mizgiriai weathervane. (Nida), 1994.',
				'Preila 2009m.',
				'Kaunas',
				'Restored historical Juodkrantės weathervane.',
				'Chateau on the bank of the Loire (France)',
				'My weathervane',
				'My relatives weathervane',
				'Finnish diplomat weathervane.',
				'Ethnographic vane house. (Germany) in 1992.',
				'Vėtrungė anniversary (Vilnius)',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Weather vane (Vilnius)'
			],
			/*IMGS*/
		},
		'de': {
			/*HEAD*/
			'title': 'Gintautas Svedas | Ich mache Kurenwimpeln',
			'keywords': 'Kurenwimpeln, Kurenwimpel, lithuanian Kurenwimpeln, mache Kurenwimpeln',
			'description': 'Entwerfe und erstelle originelle Kurenwimpel mit Holzdetails, die Ihren Beruf, Ihr Hobby, Ihre Familie, Ihre Umgebung symbolisieren können...',
			/*HEAD*/

			/*NAV*/
			'main': 'Main',
			'gallery': 'Galerie',
			/*NAV*/

			/*CONTENT*/
			'name': 'Gintautas Svedas',
			'moto': 'Ein Kurenwimpel ist mehr als eine Wetterfahne',
			'hdr1': 'Herstellung von einzigartigen Kurenwimpeln',
			'hdr2': '',
			'txt1': 'Entwerfe und erstelle originelle Kurenwimpel mit Holzdetails, die Ihren Beruf, Ihr Hobby, Ihre Familie, Ihre Umgebung symbolisieren können... An der Wiederherstellung alter Vorbilder der Kurenwimpel arbeite ich seit 1988. Die Kurenwimpel werden aus Eichenholz geschnitzt und mit beständigen Alkyd-Emaille-Farben überzogen. Als Achse dient ein Bronze-Spiess.',
			'txt2': 'An meinen Kurenwimpeln hat man Freude in Schweden, Deutschland, Finnland und Norwegen. Einige davon sind auf der',
			'txt3': '',
			'txt4': '',
			'more': 'Mehr dazu siehe...',
			'show_more': 'Kurenwimpel galerie',
			/*CONTENT*/

			/*IMGS*/
			'desc': [
				'',
				'Der ursprüngliche entwickelte Juodkrantės weathervane historische weathervanes Motive verwenden. 1992.',
				'Galerien Mizgiriai weathervane. (Nida), 1994.',
				'Preila 2009m.',
				'Kaunas',
				'Historische Juodkrantės weathervane gestellt.',
				'Chateau am Ufer der Loire (Frankreich)',
				'My weathervane',
				'Meine Verwandten weathervane',
				'Finnischer Diplomat weathervane.',
				'Ethnographische Flügel Haus. (Deutschland) im Jahr 1992.',
				'Vetrunge Jahrestag (Vilnius)',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Projektavo: Albertas Krajinskas',
				'Wetterfahne (Vilnius)'
			],
			/*IMGS*/
		}
	};

	lng = this.o[this.lang];

	/*scrollHeight = 0;
	bgPosY = 0;*/

	constructor(private location: Location){
		/*console.log(this.scrollHeight);
		console.log(document.getElementsByClassName('wrap')[0].scrollTop);
		console.log(document.getElementsByClassName('wrap')[0].clientHeight);*/
	}

	/*ngAfterViewChecked(){
		this.scrollHeight = document.getElementsByClassName('wrap')[0].scrollHeight;
	}*/

	ngOnInit(){
		if(this.location.path() == '/gallery')
			this.changeScreen('second');
		else if(this.location.path() != '')
			this.location.go('');
	}

	public changeLang(lang: any):void {
		this.lang = lang;
		this.lng = this.o[lang];
	}

	public changeScreen(screen: any):void {
		if(window.innerWidth > 768){
			this.screen = screen;
			/*this.url = screen == 'second' ? 'gallery' : '';
			this.location.go(this.url);*/
		}
	}

	/*public changeBgPosY():void {

		setTimeout( () => {
			this.bgPosY = document.getElementsByClassName('wrap')[0].scrollTop*100/(this.scrollHeight-document.getElementsByClassName('wrap')[0].clientHeight);
		}, 200);

	}*/

	mouseWheelUpFunc(){
		let galleryDiv = document.getElementsByClassName('gallery');
		if(galleryDiv[0].scrollTop === 0){
			this.changeScreen('main');
		}
		//this.changeBgPosY();
	}

	mouseWheelDownFunc(){
		this.changeScreen('second');
		//this.changeBgPosY();
	}
}