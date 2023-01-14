import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request/request.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { StartupsComponent } from './startups/startups.component';
import { MaterialModule } from 'src/app/lib/components/material/material.module';
import { FormsModule } from '@angular/forms';
import { CompanydetailsComponent } from './companydetails/companydetails.component';


@NgModule({
  declarations: [
    MapComponent,
    RequestComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    StartupsComponent,
    CompanydetailsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class UserModule { }
