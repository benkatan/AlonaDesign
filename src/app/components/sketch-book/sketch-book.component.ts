import { Component, OnInit } from '@angular/core';
import AOS from '../../../assets/jsFile/aos.js';

@Component({
  selector: 'app-sketch-book',
  templateUrl: './sketch-book.component.html',
  styleUrls: ['./sketch-book.component.scss']
})
export class SketchBookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }
public items = [1,7,8,11,5,13,2,6,9,12,14];
}
