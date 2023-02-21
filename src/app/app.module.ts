import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/all/contacts/contacts.component';
import { NewContactComponent } from './components/new/new-contact/new-contact.component';
import { ContactComponent } from './components/edit/contact/contact.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SingleContactComponent } from './components/single/single-contact/single-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NewContactComponent,
    ContactComponent,
    HeaderComponent,
    SingleContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
