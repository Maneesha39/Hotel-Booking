import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  hotels = []
  tableHeaders = ['S.No', 'Name', 'Image', 'price', 'Place', 'Land Mark', 'Pincode', 'Contact No.']

  constructor(private hotelService: HotelService) { }

  async ngOnInit() {
    const hotels = await this.hotelService.getHotels()
    console.log(hotels);
    this.hotels = hotels['hotels'];
  }

}
