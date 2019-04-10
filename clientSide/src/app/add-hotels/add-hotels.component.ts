import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent implements OnInit {
  addHotelForm: FormGroup;

  submitted: Boolean = false;
  hotelService: any;

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addHotelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1)]],
      place: ['', [Validators.required, Validators.min(3), Validators.max(50)]],
      landmark: ['', [Validators.required, Validators.min(3), Validators.max(100)]],
      pincode: ['', [Validators.required, Validators.min(6), Validators.max(6)]],
      mobile: ['', [Validators.required, Validators.min(10), Validators.max(10)]],
      city: ['', [Validators.required, Validators.min(3), Validators.max(30)]]

    });



  }
  get f() { return this.addHotelForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;
      if (this.addHotelForm.invalid) return
      await this.hotelService.insert(this.addHotelForm.value)
      alert("Hotels Successfully Inserted ")
      this.navigateTohotelsList()
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  navigateTohotelsList() {
    this.router.navigate(["hotel-list"]);
  }
}

