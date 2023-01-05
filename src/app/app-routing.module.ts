import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/gaurds/auth.guard';
import { NotloggedinGuard } from './lib/gaurds/notloggedin.guard';
import { HomeComponent } from './pages/user/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=>m.AuthModule),
canActivate: [NotloggedinGuard]
} ,
  {path: 'admin', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=>m.AdminModule),
canActivate: [AuthGuard]
},
{path: 'user', loadChildren: ()=> import('./pages/user/user.module').then((m)=>m.UserModule)},
{ path: '**', component:  HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
