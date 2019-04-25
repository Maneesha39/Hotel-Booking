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


  //above is bootstrap typeahead code
  cities = [];
  mainForm: FormGroup;
  footerForm: FormGroup;
  submitted = false;
  submittedFooter = false;

  // now = new Date(this.nowTemp.getFullYear(), this.nowTemp.getMonth(), this.nowTemp.getDate(), 0, 0, 0, 0);

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

    this.footerForm = this.formBuilder.group({

      mailcheck: ['', [Validators.required]]
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






