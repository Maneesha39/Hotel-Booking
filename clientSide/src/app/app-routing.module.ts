import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { AddHotelsComponent } from './add-hotels/add-hotels.component';
import { HomeComponent } from './home/home.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },


  {
    path: 'hotels',
    component: HotelsListComponent
  },

  {
    path: 'hotels/addhotels',
    component: AddHotelsComponent
  },


  {
    path: 'hotels/hoteldesc',
    component: HotelDescriptionComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
