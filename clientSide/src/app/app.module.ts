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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsListComponent,
    HotelDescriptionComponent,
    HotelsTableComponent,
    AddHotelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    HotelService,

    MatButtonModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
