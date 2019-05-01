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


  singlehotel = [];

  constructor(private formBuilder: FormBuilder, private hotelService: HotelService, private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.init();
  }

  //taking the id as input from URL by using activated route to view selected hotel.
  async init() {
    let h = this.activatedroute.snapshot.params["id"];
    console.log(h)
    let hotels = await this.hotelService.getHotelsByID(h)
    this.singlehotel = hotels['hotels'];
    console.log(hotels);



  }

  //Passing id of the selected hotel to bookhotel component
  BookNow(id) {
    this.router.navigateByUrl("hotels/book/" + id);
  }


}




