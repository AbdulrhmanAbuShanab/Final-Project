import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { Company } from '../Interfaces/company';
import { Sector } from '../Interfaces/sector';


@Injectable({
  providedIn: 'root',
})
export class AdminFirebaseService {
  companiesCollection!: AngularFirestoreCollection<Company>;
  requestCollection!: AngularFirestoreCollection<Company>;
  sectorsCollection!: AngularFirestoreCollection<Sector>;


  constructor(private firestore: AngularFirestore) {
    this.companiesCollection = this.firestore.collection('companies');
    this.requestCollection = this.firestore.collection('requests');
    this.sectorsCollection = this.firestore.collection('sectors');
  }
  
  //sectors
  getSectors(): Observable<Sector[]>{
    return this.sectorsCollection.valueChanges({"idField":'uid'});
  }
  addSector(sector: Sector) {
    let addeddSector = this.sectorsCollection?.add(sector);
    return from(addeddSector);
  }

  //requests
  getRequests(): Observable<Company[]>{
    return this.requestCollection.valueChanges({"idField":'uid'});
  }
  acceptRequest(request: Company) {
    let acceptedRequest = this.requestCollection?.add(request);
    return from(acceptedRequest);
    }
  removeRequest(id: string){
    return from(this.requestCollection.doc(id).delete());
  }
  getRequestById(id : string){
    return this.requestCollection.doc(id).valueChanges();
  }
  editRequest(id: string, request: Company){
    return from(this.requestCollection.doc(id).update({...request}))
  }

  //companies
  addCompany(company: Company) {
    let addeddCompany = this.companiesCollection?.add(company);
    return from(addeddCompany);
  }
  getCompanies(): Observable<Company[]>{
    return this.companiesCollection.valueChanges({"idField":'uid'});
  }
  getCompanyById(id: string){
    return this.companiesCollection.doc(id).valueChanges();
  }
  deleteCompany(id: string){
    return this.companiesCollection.doc(id).delete();
  }
  updateCompany(id: string, company: Company){
    return from(this.companiesCollection.doc(id).update({...company}));
  }
}
