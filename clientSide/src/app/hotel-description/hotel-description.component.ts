import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { initDomAdapter } from '@angular/platform-browser/src/browser';


@Component({
  selector: 'app-hotel-description',
  templateUrl: './hotel-description.component.html',
  styleUrls: ['./hotel-description.component.css']
})
export class HotelDescriptionComponent implements OnInit {

  // bookHotelForm: FormGroup;
  // submitted: Boolean = false;
  singlehotel = [];

  constructor(private formBuilder: FormBuilder, private hotelService: HotelService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.init();

    // this.bookHotelForm = this.formBuilder.group({

    //   name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    //   checkin: ['', [Validators.required]],

    //   checkout: ['', [Validators.required]],
    //   rooms: [''],
    //   adults: [''],
    //   children: [''],
    //   email: ['', [Validators.required]],

    //   mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],

    // });


  }
  // get f() { return this.bookHotelForm.controls; }

  // async onSubmit() {
  //   try {
  //     this.submitted = true;
  //     debugger;
  //     if (this.bookHotelForm.invalid) return
  //     await this.hotelService.insertBooking(this.bookHotelForm.value)
  //     alert("Hotel booked Successfully")
  //     this.navigateTohotelsList()
  //   } catch (err) {
  //     console.log(err);
  //     alert(err)
  //   }
  // }

  navigateTohotelsList() {
    this.router.navigate(['hotels/city/book']);
  }
  async init() {
    let h = this.activatedroute.snapshot.params["id"];
    console.log(h)
    let hotels = await this.hotelService.getHotelsByID(h)

    this.singlehotel = hotels['hotels'];
    console.log(hotels);




  }


}




