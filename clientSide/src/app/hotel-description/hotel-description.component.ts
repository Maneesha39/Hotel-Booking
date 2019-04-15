import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.css']
})
export class HotelDescriptionComponent implements OnInit {
  desc: number;

  constructor() { }

  ngOnInit() {
  }

  onSelect($event) {

    this.desc = $event;
  }

}
