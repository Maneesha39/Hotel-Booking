import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get("http://localhost:3000/hotels/").toPromise();
  }

  getHotelByInput(searchText): Observable<any> {
    return this.http.get("http://localhost:3000/hotelBySearchText/" + searchText);
  }

  insert(hotel: any) {
    return this.http.post("http://localhost:3000/hotels", hotel).toPromise();
  }

  insertRoom(room: any) {
    return this.http.post("http://localhost:3000/hotels/addroom", room).toPromise();
  }
}

