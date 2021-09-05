import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  slide=1;
  changeSlide(num:any){
    this.slide=num
    console.log(this.slide)
  }

  ngOnInit(): void {
  }

}
