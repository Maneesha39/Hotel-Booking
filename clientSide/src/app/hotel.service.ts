import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels() {
    return this.http.get("http://localhost:3000/hotels/").toPromise();
  }


  insert(hotel: any) {
    return this.http.post("http://localhost:3000/hotels", hotel).toPromise();
  }
}

