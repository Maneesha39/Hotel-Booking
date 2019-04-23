import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { now } from 'jquery';
import { style } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';



// const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
//   'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
//   'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
//   'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
//   'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
//   'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
//   'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
//   'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public model: any;


  //above is bootstrap typeahead code
  hotels = [];
  mainForm: FormGroup;
  footerForm: FormGroup;
  submitted = false;
  submittedFooter = false;
  cityFormat = (c: { city }) => c.city;
  // now = new Date(this.nowTemp.getFullYear(), this.nowTemp.getMonth(), this.nowTemp.getDate(), 0, 0, 0, 0);

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private hotelService: HotelService) { }


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
      place: ['', [Validators.required]],

      checkin: ['', [Validators.required]],

      checkout: ['', [Validators.required]]
    });

    this.footerForm = this.formBuilder.group({

      mailcheck: ['', [Validators.required]]


    });
    // let city = this.activatedRoute.snapshot.params["city"];
    // console.log(city);

  }



  get f() { return this.mainForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;
      if (this.mainForm.invalid) return
      // const hotels = await this.hotelService.getHotelsByPlace(this.mainForm.value.place)
      // this.hotels = hotels['hotels']
      // console.log(hotels);
      // alert("Hotels Found")
      this.navigateToHotel()

    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  navigateToHotel() {
    this.router.navigateByUrl("hotels/" + this.mainForm.value.place);
  }


  aboutUs() {
    // document.getElementById("insidecard").style.display = "none";
    document.getElementById("maincard").style.display = "none";
    document.getElementById("footer1").style.display = "block";
    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";
  }

  contactUs() {
    document.getElementById("maincard").style.display = "none";
    // document.getElementById("insidecard").style.display = "none";
    document.getElementById("footer1").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "block";
  }

  toHome() {
    document.getElementById("maincard").style.display = "block";
    document.getElementById("insidecard").style.display = "block";
    document.getElementById("footer1").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("insidecard").style.marginLeft = "35px";
    document.getElementById("insidecard").style.marginRight = "35px";
  }

  get g() { return this.footerForm.controls; }


  onClick() {
    this.submittedFooter = true;
    if (this.footerForm.invalid) {
      return
    }
    else {
      this.done()


    }
  }

  done() {
    document.getElementById("getmail").style.display = "none";
    document.getElementById("success").style.display = "block";

  }


}






