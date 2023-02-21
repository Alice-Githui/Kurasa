import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  newContact: Contacts={
    first_name: '',
    last_name: '',
    email: '',
    location: '',
    phone_number: '',
  }

  // loaders
  loading:boolean=false

   //  declare ngForm
  @ViewChild('form') form!: NgForm
  @ViewChild('newform') newform!: NgForm

  constructor(private contactService:ContactsService) { }

  ngOnInit(): void {
  }
   // create/post a new contact
   // logic
  createContact() :void{
    this.loading=true

    const data ={
      first_name: this.newContact.first_name,
      last_name: this.newContact.last_name,
      email: this.newContact.email,
      phone_number: this.newContact.phone_number,
      location: this.newContact.location
    }

    this.contactService.createContact(data)
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.loading=false
        this.newform.reset()
      }, 
      error: (error)=>{
        console.log(error.error)
      }
    })
  }

}
