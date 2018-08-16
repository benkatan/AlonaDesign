import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { HomeComponent } from './components/home/home.component';
import { DreamsComponent } from './components/dreams/dreams.component';
import { PlayComponent } from './components/play/play.component';
import { AboutComponent } from './components/about/about.component';
import { BlackRainComponent } from './components/black-rain/black-rain.component';
import { EvreyOneWantsToLiveComponent } from './components/evrey-one-wants-to-live/evrey-one-wants-to-live.component';
import { SketchBookComponent } from './components/sketch-book/sketch-book.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {appRoutes} from './routes'


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    HomeComponent,
    DreamsComponent,
    PlayComponent,
    AboutComponent,
    BlackRainComponent,
    EvreyOneWantsToLiveComponent,
    SketchBookComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
