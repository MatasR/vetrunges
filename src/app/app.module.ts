import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './card/card.component';
import { TextComponent } from './text/text.component';
import { GalleryBtnComponent } from './gallery-btn/gallery-btn.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainBtnComponent } from './main-btn/main-btn.component';
import { LangComponent } from './lang/lang.component';

import { MouseWheelDirective } from './mousewheel/mousewheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    TextComponent,
    GalleryBtnComponent,
    GalleryComponent,
    MainBtnComponent,
    MouseWheelDirective,
    LangComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }