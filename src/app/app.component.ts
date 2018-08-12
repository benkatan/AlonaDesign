import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
