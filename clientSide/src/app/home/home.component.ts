import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { now } from 'jquery';
import { style } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  minDate = new Date();
  // now = new Date(this.nowTemp.getFullYear(), this.nowTemp.getMonth(), this.nowTemp.getDate(), 0, 0, 0, 0);

  constructor(private router: Router) { }

  ngOnInit() {


  }
  totalGuests() {
    let persons = document.getElementById("details");
    persons.style.display = "block";
  }

  clicked() {
    let persons = document.getElementById("details");
    persons.style.display = "none";
  }
}
    // var checkin = $('#dp1').datepicker({

    //   beforeShowDay: function (date) {
    //     return date.valueOf() >= now.valueOf();
    //   },
    //   autoclose: true

    // }).on('changeDate', function (ev) {
    //   if (ev.date.valueOf() > checkout.datepicker("getDate").valueOf() || !checkout.datepicker("getDate").valueOf()) {

    //     var newDate = new Date(ev.date);
    //     newDate.setDate(newDate.getDate() + 1);
    //     checkout.datepicker("update", newDate);

    //   }
    //   $('#dp2')[0].focus();
    // });


    // var checkout = $('#dp2').datepicker({
    //   beforeShowDay: function (date) {
    //     if (!checkin.datepicker("getDate").valueOf()) {
    //       return date.valueOf() >= new Date().valueOf();
    //     } else {
    //       return date.valueOf() > checkin.datepicker("getDate").valueOf();
    //     }
    //   },
    //   autoclose: true

    // }).on('changeDate', function (ev) { });
// export class DatepickerOverviewExample { }


