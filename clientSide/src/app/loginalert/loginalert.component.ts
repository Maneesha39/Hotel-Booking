import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loginalert',
  templateUrl: './loginalert.component.html',
  styleUrls: ['./loginalert.component.css']
})
export class LoginalertComponent implements OnInit {

  @Input() success;
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

  isDefined() {

    return this.success !== undefined;

  }
  isValid() {

    return this.success;

  }

}
