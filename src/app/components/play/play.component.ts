import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor() { }

  @Output() img: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  }

  getImgToPopUp(item) {
    
    this.img.emit(item.target.attributes.src.nodeValue);
  }

}
