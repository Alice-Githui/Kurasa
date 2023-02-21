import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contacts } from 'src/app/models/contacts.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';


@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {
  @Input() contact!:Contacts;
  @Output() selectedContact = new EventEmitter<Contacts>();

  constructor(private contactService:ContactsService) { }

  ngOnInit(): void {
  }

  onEditContact(){
    this.contact && this.selectedContact.emit(this.contact)
  }

  // delete
  deleteContact(id:any):void{
    this.contactService.deleteContact(id)
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.contactService.getContacts()
        // this.toastr.success("Contact Deleted Successfully")
      },
      error: (error)=>{
        console.log(error.error)
      }
    })
  }

  // get one contact details
  getOneContact(id:any):void{
    this.contactService.getOneContact(id)
    .subscribe({
      next: (res)=>{
        console.log(res)
      },
      error: (error)=>{
        console.log(error.error)
      }
    })
  }

}
