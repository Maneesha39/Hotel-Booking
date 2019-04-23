import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.css']
})
export class BookhotelComponent implements OnInit {
  displayHotel = [];
  showSuccessMessage: Boolean = false;
  showForm: Boolean = true;
  id = "";

  bookHotelForm: FormGroup;
  submitted: Boolean = false;
  constructor(private formBuilder: FormBuilder, private hotelService: HotelService, private router: Router, private activatedroute: ActivatedRoute) {

    this.activatedroute.params.subscribe((params) => {
      this.id = params['id']
      console.log(this.id);
    })
  }
  async ngOnInit() {
    this.init()
    this.bookHotelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      checkin: ['', [Validators.required]],
      checkout: ['', [Validators.required]],
      rooms: [''],
      adults: [''],
      children: [''],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });

  }

  get f() { return this.bookHotelForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;
      debugger;
      if (this.bookHotelForm.invalid) return
      await this.hotelService.insertBooking(this.bookHotelForm.value)
      this.showForm = false;
      this.showSuccessMessage = true;
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  async init() {
    const hotel = await this.hotelService.getHotelsByID(this.id);
    this.displayHotel = hotel['hotels']
  }



}

