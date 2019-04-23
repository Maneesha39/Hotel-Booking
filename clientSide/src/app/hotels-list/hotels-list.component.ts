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
    this.route.params.subscribe((params) => {
      this.city = params['city']
    })
  }

  async ngOnInit() {
    const hotels = await this.hotelService.getHotelsByPlace(this.city)
    this.hotels = hotels['hotels'];
    console.log(hotels)

  }

  viewHotel(id) {
    debugger;
    this.router.navigateByUrl("hotels/hoteldetails/" + id);

  }






}
