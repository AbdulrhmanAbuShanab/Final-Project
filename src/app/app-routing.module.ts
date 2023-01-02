import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './lib/gaurds/auth.guard';
import { NotloggedinGuard } from './lib/gaurds/notloggedin.guard';
import { AboutusComponent } from './pages/user/aboutus/aboutus.component';
import { ContactusComponent } from './pages/user/contactus/contactus.component';
import { HomeComponent } from './pages/user/home/home.component';
import { MapComponent } from './pages/user/map/map.component';
import { RequestComponent } from './pages/user/request/request.component';
import { StartupsComponent } from './pages/user/startups/startups.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'auth', loadChildren: ()=> import('./pages/auth/auth.module').then((m)=>m.AuthModule),
canActivate: [NotloggedinGuard]
} ,
  {path: 'admin', loadChildren: ()=> import('./pages/admin/admin.module').then((m)=>m.AdminModule),
canActivate: [AuthGuard]
},
{path: 'home', component: HomeComponent},
{path: 'startups', component: StartupsComponent},
{path: 'map', component: MapComponent},
{path: 'request', component: RequestComponent},
{path: 'aboutus', component: AboutusComponent},
{path: 'contactus', component: ContactusComponent},
{ path: '**', component:  HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
