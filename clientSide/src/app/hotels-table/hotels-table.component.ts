import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotels-table',
  templateUrl: './hotels-table.component.html',
  styleUrls: ['./hotels-table.component.css']
})
export class HotelsTableComponent implements OnInit {

  @Input() data = [];
  @Input() tableHeaders = [];

  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    let firstData = this.data[0];
    return Object.keys(firstData);
  }

}
