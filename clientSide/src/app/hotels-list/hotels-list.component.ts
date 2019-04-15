import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {
  @Output() selected = new EventEmitter();

  hotels = []
  tableHeaders = ['S.No', 'Name', 'Image', 'price', 'Place', 'Land Mark', 'Pincode', 'Contact No.']
  image = ""

  constructor(private hotelService: HotelService, private router: Router) { }

  async ngOnInit() {
    const hotels = await this.hotelService.getHotels()
    console.log(hotels);
    // debugger;

    this.hotels = hotels['hotels'];
  }
  navigateToAddHotels() {

    this.router.navigate(["hotels/addhotels"]);
  }
  navigateToHotelDescription() {
    this.router.navigate(["hotels/hoteldesc"]);
  }

  onSelect(id) {

    this.selected.emit(id);
    //this.router.navigate([`hotels/hoteldetails`])
  }



}
