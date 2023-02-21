import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contacts } from 'src/app/models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const getContacts = environment.apiUrl + '/contacts'
const getOneContact = environment.apiUrl + '/contacts'
const createContact = environment.apiUrl + '/contacts'
const deleteContact = environment.apiUrl + '/contacts'
const editContact = environment.apiUrl + '/contacts'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getContacts() :Observable<Contacts[]>{
    return this.http.get<Contacts[]>(getContacts)
  }

  getOneContact(id:any) :Observable<any>{
    return this.http.get(`${getOneContact}/${id}`)
  }

  createContact(data:any) :Observable<any>{
    return this.http.post(createContact, data)
  }

  editContact(id:any,data:any) :Observable<any>{
    return this.http.put(`${editContact}/${id}`, data)
  }

  deleteContact(id:any) :Observable<any>{
    return this.http.delete(`${deleteContact}/${id}`)
  }
}
