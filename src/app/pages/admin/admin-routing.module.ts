import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from 'src/app/pages/admin/all-companies/all-companies.component';
import { CreateComponent } from 'src/app/pages/admin/create/create.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'', component: AllCompaniesComponent, pathMatch: 'full'},
  {path:'create', component: CreateComponent},
  {path:'allCompanies', component: AllCompaniesComponent},
  {path:'delete', component: DeleteComponent},
  {path:'update/:companyName', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }