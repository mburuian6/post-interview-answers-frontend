import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private routing: Router) { }

  ngOnInit(): void {
  }

  toWithRates(){
    this.routing.navigateByUrl('with-rates');
  }

  toWithoutRates(){
    this.routing.navigateByUrl('without-rates');
  }

}
