import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from 'src/app/pages/admin/all-companies/all-companies.component';
import { CreateComponent } from 'src/app/pages/admin/create/create.component';
import { AcceptComponent } from './accept/accept.component';
import { CreateSComponent } from './create-s/create-s.component';
import { DeleteComponent } from './delete/delete.component';
import { RequestsComponent } from './requests/requests.component';
import { SectorsComponent } from './sectors/sectors.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', component: AllCompaniesComponent, pathMatch: 'full'},
  {path:'create', component: CreateComponent},
  {path:'allcompanies', component: AllCompaniesComponent},
  {path:'delete', component: DeleteComponent},
  {path:'update/:id', component: UpdateComponent},
  {path:'requests', component: RequestsComponent},
  {path:'accept/:id', component: AcceptComponent},
  {path:'sectors', component: SectorsComponent},
  {path:'creates', component: CreateSComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
