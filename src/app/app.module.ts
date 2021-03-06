import { NgModule } from '@angular/core';
import { BrowserModule , Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownModule } from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { ContentLayoutComponent } from './Layouts/content-layout/content-layout.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    DropdownModule,
    FormsModule,
    MenubarModule
    
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
