import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact!:Contacts

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
    this.newContact.id = this.contact.id
    this.newContact.first_name = this.contact.first_name
    this.newContact.last_name = this.contact.last_name
    this.newContact.email = this.contact.email
    this.newContact.phone_number = this.contact.phone_number
    this.newContact.location = this.contact.location
  }

  editContact(id:any): void{

    const data ={
      first_name: this.newContact.first_name,
      last_name: this.newContact.last_name,
      email: this.newContact.email,
      location: this.newContact.location,
      phone_number: this.newContact.phone_number,

    }

    this.contactService.editContact(id, data)
    .subscribe({
      next: (res)=>{
        console.log(res)
        this.newform.reset()
      }, 
      error: (error)=>{
        console.log(error.error)
      }
    })
  }

}
