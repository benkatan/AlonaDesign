import { Component } from '@angular/core';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed', opacity: 1 }),  { optional: true }),
        group([ 
          query(':enter', [
            style({ opacity:0 }),
            animate('300ms ease-in-out', style({ opacity:1 }),)
          ],  { optional: true }),
          query(':leave', [
            style({ opacity:1 }),
            animate('300ms ease-in-out', style({ opacity:0 }))],  { optional: true }),
        ])
      ])
    ])
   ]
})
export class AppComponent {
  title = 'AlonaDesign';
  show = false;
  imgSrc;


  public togglePic() {
    this.show = true;
  }

  public closePic() {
    this.show = false;
  }

  public onImgSrc(item) {
    this.show = true;
    this.imgSrc = item;
    console.log(this.imgSrc);
  }
}
