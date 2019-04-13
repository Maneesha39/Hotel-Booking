import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  addRoomForm: FormGroup;

  submitted: Boolean = false;


  constructor(private router: Router, private formBuilder: FormBuilder, private hotelService: HotelService) { }

  ngOnInit() {
    this.addRoomForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],

      rooms: ['', [Validators.required, Validators.min(1)]]

    });



  }
  get f() { return this.addRoomForm.controls; }

  async onSubmit() {
    try {
      this.submitted = true;

      if (this.addRoomForm.invalid) return
      await this.hotelService.insertRoom(this.addRoomForm.value)
      alert("Room Successfully Inserted ")
      debugger;
      this.navigateToAddRoom()
    } catch (err) {
      console.log(err);
      alert(err)
    }
  }

  navigateToAddRoom() {
    this.router.navigate(['hotels']);
  }
}

