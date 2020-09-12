import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  name: string = 'sleep';
  constructor() {}

  ngOnInit(): void {}

  countClick() {
    this.clickCounter += 1;
  }

  resetClick() {
    this.clickCounter = 0;
  }

  reduceCounter() {
    this.clickCounter -= 1;

    if (this.clickCounter < 0) {
      return (this.clickCounter = 0);
    }
  }
}
