import { Component, OnInit, AfterViewInit } from '@angular/core';
import AOS from '../../../assets/jsFile/aos.js';

@Component({
  selector: 'app-evrey-one-wants-to-live',
  templateUrl: './evrey-one-wants-to-live.component.html',
  styleUrls: ['./evrey-one-wants-to-live.component.scss']
})
export class EvreyOneWantsToLiveComponent implements OnInit,  AfterViewInit {


  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    AOS.init();
  }

}
