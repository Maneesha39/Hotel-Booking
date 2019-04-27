import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DISABLED } from '@angular/forms/src/model';
@Component({
  selector: 'app-bookhotel',
  templateUrl: './bookhotel.component.html',
  styleUrls: ['./bookhotel.component.css']
})
export class BookhotelComponent implements OnInit {
  displayHotel = [];
  showSuccessMessage: Boolean = false;
  showForm: Boolean = true;
  showCart: Boolean = true;
  id: number;
  duration: any;
  selected_hotel: any;
  price: number;
  discount: number;
  discountedPrice: number;
  gst: number;
  netPayable: number;
  netPayableFromLocalstorage: any;
  bookHotelForm: FormGroup;
  submitted: Boolean = false;
  constructor(private formBuilder: FormBuilder, private hotelService: HotelService, private router: Router, private activatedroute: ActivatedRoute) {

    this.activatedroute.params.subscribe((params) => {
      this.id = params['id']
      console.log(this.id);
    })

    this.duration = JSON.parse(sessionStorage.getItem("duration"));
    console.log(this.duration);

    this.selected_hotel = JSON.parse(sessionStorage.getItem("selected_hotel"));
    console.log(this.selected_hotel);


    this.netPayableFromLocalstorage = JSON.parse(sessionStorage.getItem("netAmount"));

    console.log(this.netPayableFromLocalstorage)
  }

  async ngOnInit() {
    this.init()
    this.bookHotelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      checkin: [this.duration.checkin],
      checkout: [this.duration.checkout],
      rooms: [this.duration.rooms],
      adults: [this.duration.adults],
      children: [this.duration.children],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      price: [this.netPayableFromLocalstorage.amount],



    });


  }

  get f() { return this.bookHotelForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;
      console.log(this.bookHotelForm.value);

      if (this.bookHotelForm.invalid) return
      await this.hotelService.insertBooking(this.bookHotelForm.value, this.id)
      this.showForm = false;
      this.showCart = false;
      this.showSuccessMessage = true;
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  async init() {
    const hotel = await this.hotelService.getHotelsByID(this.id);
    this.displayHotel = hotel['hotels']
    this.amountCalculation()


  }

  amountCalculation() {

    this.price = this.displayHotel[0].price;
    this.discount = Math.round(this.price * 0.1);
    this.discountedPrice = Math.round(this.price - this.discount);
    this.gst = Math.round(this.discountedPrice * 0.12)
    this.netPayable = Math.round(this.discountedPrice + this.gst)
    // console.log(this.discount);
    // console.log(this.netPayable);

    sessionStorage.setItem("netAmount", JSON.stringify({ "amount": this.netPayable }))


  }


}

