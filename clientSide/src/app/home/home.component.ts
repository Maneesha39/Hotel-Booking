import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { now } from 'jquery';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public model: any;


  //above is bootstrap typeahead code

  mainForm: FormGroup;
  submitted: Boolean = false;
  // now = new Date(this.nowTemp.getFullYear(), this.nowTemp.getMonth(), this.nowTemp.getDate(), 0, 0, 0, 0);

  constructor(private router: Router, private formBuilder: FormBuilder, private hotelService: HotelService) { }

  search = (text$: Observable<string>) =>

    text$.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      tap(() => {





      }),

      switchMap(term =>

        this.hotelService.getHotelByInput(term).pipe(

          tap(() => { }),

          catchError(() => {


            return of([]);

          }))

      ), tap(() => { })

    )
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


