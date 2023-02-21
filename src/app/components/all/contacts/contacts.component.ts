import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contacts } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  // array that is an instance of contacts
  contacts!: Contacts[]


  constructor(private contactService:ContactsService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  // get all contacts
  getContacts() :void{

    this.contactService.getContacts()
    .subscribe({
      next:(res)=>{
        this.contacts= res
        console.log(res)
      }, 
      error: (error)=>{
        console.log(error.error)
      }
    })
  }
 

}
