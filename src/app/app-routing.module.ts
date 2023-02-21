import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/all/contacts/contacts.component';
import { ContactComponent } from './components/edit/contact/contact.component';
import { NewContactComponent } from './components/new/new-contact/new-contact.component';

const routes: Routes = [

  {path: "", component:ContactsComponent}, 
  {path: "create_new_contact", component:NewContactComponent},
  {path: "edit_contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
