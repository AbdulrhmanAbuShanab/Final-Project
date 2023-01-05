import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './lib/components/material/material.module';
import { HomeComponent } from './pages/user/home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from './lib/components/User/header/header.component';
import { FooterComponent } from './lib/components/User/footer/footer.component';
import { NavbarComponent } from './lib/components/User/navbar/navbar.component';
import { LinksComponent } from './lib/components/User/links/links.component';
import { MapComponent } from './pages/user/map/map.component';
import { RequestComponent } from './pages/user/request/request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './lib/components/admin/toolbar/toolbar.component';  
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent, LinksComponent, ToolbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
