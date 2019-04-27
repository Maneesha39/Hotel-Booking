import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from '../hotel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  public model: any;
  cities = [];
  mainForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private hotelService: HotelService) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 30);

  }



  async ngOnInit() {



    this.mainForm = this.formBuilder.group({
      // Validating fields...
      place: ['', [Validators.required]],

      checkin: ['', [Validators.required]],

      checkout: ['', [Validators.required]],
      rooms: ['', [Validators.required]],
      adults: ['', [Validators.required]],
      children: ['', [Validators.required]]
    });



    const cities = await this.hotelService.getCites()

    console.log(cities);

    this.cities = cities['cities'];


  }
  get f() { return this.mainForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;
      sessionStorage.setItem("duration", JSON.stringify({ "checkin": this.mainForm.value.checkin, "checkout": this.mainForm.value.checkout, "adults": this.mainForm.value.adults, "rooms": this.mainForm.value.rooms, "children": this.mainForm.value.children }))
      if (this.mainForm.invalid) return
      this.navigateToHotel()

    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  navigateToHotel() {
    this.router.navigateByUrl("hotels/" + this.mainForm.value.place);
  }

  addHotel() {

    this.router.navigate(['login'])

  }








}






