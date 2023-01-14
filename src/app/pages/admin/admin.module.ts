import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/lib/components/material/material.module';
import { CreateComponent } from './create/create.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { RequestsComponent } from './requests/requests.component';
import { AcceptComponent } from './accept/accept.component';

@NgModule({
  declarations: [
    DasboardComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent, 
    AllCompaniesComponent, 
    RequestsComponent,
    AcceptComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
