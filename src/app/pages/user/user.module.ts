import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request/request.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { StartupsComponent } from './startups/startups.component';


@NgModule({
  declarations: [
    MapComponent,
    RequestComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    StartupsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
