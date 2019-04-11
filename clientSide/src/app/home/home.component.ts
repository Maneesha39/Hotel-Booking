import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { now } from 'jquery';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainForm: FormGroup;
  submitted: Boolean = false;
  // now = new Date(this.nowTemp.getFullYear(), this.nowTemp.getMonth(), this.nowTemp.getDate(), 0, 0, 0, 0);

  constructor(private router: Router, private formBuilder: FormBuilder, ) { }

  ngOnInit() {

    this.mainForm = this.formBuilder.group({
      // Validating fields...
      place: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],

      checkin: ['', [Validators.required]],

      checkout: ['', [Validators.required]]
    });
  }

  get f() { return this.mainForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.mainForm.invalid) {
      alert("Enter details");
    }
  }
  done() {
    let persons = document.getElementById("getmail");
    persons.style.display = "none";
    document.getElementById("enable").style.display = "block";
  }
}
//   done() {
//     let persons = document.getElementById("details");
//     persons.style.display = "none";
//   }
// }


// }
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


