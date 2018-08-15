import { RouterModule, Routes } from '@angular/router';
import { DreamsComponent } from './components/dreams/dreams.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlayComponent } from './components/play/play.component';
import { BlackRainComponent } from './components/black-rain/black-rain.component';
import { EvreyOneWantsToLiveComponent } from './components/evrey-one-wants-to-live/evrey-one-wants-to-live.component';
import { SketchBookComponent } from './components/sketch-book/sketch-book.component';

export const appRoutes: Routes = [
    { path: 'Home', component:  HomeComponent},
    { path: 'About',      component: AboutComponent },
    { path: 'Dreams',      component: DreamsComponent },
    { path: 'BlackRain',      component: BlackRainComponent},
    { path: 'Costume',      component:  PlayComponent},
    { path: 'EvreyOneWantsToLive',      component:  EvreyOneWantsToLiveComponent},
    { path: 'SketchBook',      component: SketchBookComponent },

  ];