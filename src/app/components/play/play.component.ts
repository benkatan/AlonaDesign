import { Component, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import AOS from '../../../assets/jsFile/aos.js';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit,  AfterViewInit {


  constructor() { }

  @Output() img: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
  
  }

  ngAfterViewInit(): void {
    AOS.init();
  }

  getImgToPopUp(item) {
    
    this.img.emit(item.target.attributes.src.nodeValue);
  }

}
