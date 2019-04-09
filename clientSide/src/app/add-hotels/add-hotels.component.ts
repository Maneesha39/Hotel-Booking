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
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000000)]],
      // address: ['', [Validators.minLength(11), Validators.maxLength(250)]],
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
    this.router.navigate(["hotels-list"]);
  }
}

