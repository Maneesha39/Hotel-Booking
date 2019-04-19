import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelDescriptionComponent } from './hotel-description/hotel-description.component';
import { DemoMaterialModule } from '../../materialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotelsTableComponent } from './hotels-table/hotels-table.component';
import { HotelService } from './hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { AddHotelsComponent } from './add-hotels/add-hotels.component'

import { MatButtonModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddroomComponent } from './addroom/addroom.component';
import { BookhotelComponent } from './bookhotel/bookhotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsListComponent,
    HotelDescriptionComponent,
    AddHotelsComponent,
    AddroomComponent,
    BookhotelComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    HotelService,

    MatButtonModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
