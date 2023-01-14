import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './lib/components/material/material.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from 'src/environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HeaderComponent } from './lib/components/User/header/header.component';
import { FooterComponent } from './lib/components/User/footer/footer.component';
import { NavbarComponent } from './lib/components/User/navbar/navbar.component';
import { LinksComponent } from './lib/components/User/links/links.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './lib/components/admin/toolbar/toolbar.component';  
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavbarComponent, LinksComponent, ToolbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FontAwesomeModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
