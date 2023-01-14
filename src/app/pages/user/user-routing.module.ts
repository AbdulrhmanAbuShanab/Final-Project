import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RequestComponent } from './request/request.component';
import { StartupsComponent } from './startups/startups.component';

const routes: Routes = [
{path:'', component: HomeComponent, pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'startups', component: StartupsComponent},
{path: 'map', component: MapComponent},
{path: 'request', component: RequestComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'contactus', component: ContactusComponent},
{path: 'companydetails/:id', component: CompanydetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
