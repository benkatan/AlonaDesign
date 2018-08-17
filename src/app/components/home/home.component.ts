import { Component, OnInit } from '@angular/core';
import { Route, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  goToPage(link) {
    console.log(link);
    // this.router.navigate[link];
  }
}
