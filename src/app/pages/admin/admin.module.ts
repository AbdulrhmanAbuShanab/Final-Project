import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/lib/components/material/material.module';
import { CreateComponent } from './create/create.component';
import { AllCompaniesComponent } from './all-companies/all-companies.component';
import { RequestsComponent } from './requests/requests.component';
import { AcceptComponent } from './accept/accept.component';
import { SectorsComponent } from './sectors/sectors.component';
import { CreateSComponent } from './create-s/create-s.component';

@NgModule({
  declarations: [
    DeleteComponent,
    UpdateComponent,
    CreateComponent, 
    AllCompaniesComponent, 
    RequestsComponent,
    AcceptComponent,
    SectorsComponent,
    CreateSComponent,
    ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
