import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { HomeComponent } from './home/home.component';
import { AddroomComponent } from './addroom/addroom.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'hotels/:city',
    component: HotelsListComponent
  },

  {
    path: 'hotels/addhotel',
    component: AddHotelsComponent
  },
  {
    path: 'hotels/addroom',
    component: AddroomComponent
  },
  {
    path: 'hotels/hoteldetails/:id',
    component: HotelDescriptionComponent
  },

  {
    path: 'hotels/book/:id',
    component: BookhotelComponent
  },
]







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
