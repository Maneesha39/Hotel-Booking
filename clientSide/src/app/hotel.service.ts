import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get("http://localhost:3000/hotels/").toPromise();
  }

  getHotelByInput(searchText) {
    return this.http.get("http://localhost:3000/hotels/hotelBySearchText/" + searchText).pipe(
      map((res: any) => {

        return res.hotels;
      })
    );
  }

  insert(hotel: any) {
    return this.http.post("http://localhost:3000/hotels", hotel).toPromise();
  }

  insertRoom(room: any) {
    return this.http.post("http://localhost:3000/hotels/addroom", room).toPromise();
  }
  insertBooking(room: any) {
    return this.http.post("http://localhost:3000/hotels/bookroom", room).toPromise();
  }

  getHotelsByID(id) {
    console.log(id);
    return this.http.get(`http://localhost:3000/hotels/hoteldetails/${id}`).toPromise();

  }

  getHotelsByPlace(place: any) {
    return this.http.get(`http://localhost:3000/hotels/${place}`).toPromise()
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(console.log);
  }
}

