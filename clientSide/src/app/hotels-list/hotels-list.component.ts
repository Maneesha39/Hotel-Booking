import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {


  hotels = []
  tableHeaders = ['S.No', 'Name', 'Image', 'price', 'Place', 'Land Mark', 'Pincode', 'Contact No.']
  image = ""
  city = ''

  constructor(private hotelService: HotelService, private router: Router, private route: ActivatedRoute) {
    //Taking the city as input from URL

    this.route.params.subscribe((params) => {
      this.city = params['city']
    })
  }

  //db call for fetching hotels list as per the selected city
  async ngOnInit() {
    const hotels = await this.hotelService.getHotelsByPlace(this.city)
    this.hotels = hotels['hotels'];
    console.log("hotels", hotels)
    console.log(this.hotels);


  }
  //input function for hotel descrition component. Here we are passing the id of selected hotel to hotels description component

  viewHotel(id) {
    this.router.navigateByUrl("hotels/hoteldetails/" + id);

  }






}
