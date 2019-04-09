import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

const routes: Routes = [


  {
    path: '',
    component: HotelsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
