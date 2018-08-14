import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { HomeComponent } from './components/home/home.component';
import { DreamsComponent } from './components/dreams/dreams.component';
import { PlayComponent } from './components/play/play.component';
import { AboutComponent } from './components/about/about.component';
import { InspirationComponent } from './components/inspiration/inspiration.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    HomeComponent,
    DreamsComponent,
    PlayComponent,
    AboutComponent,
    InspirationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
