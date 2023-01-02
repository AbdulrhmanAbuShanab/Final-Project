import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class AdminFirebaseService {
  companiesCollection!: AngularFirestoreCollection<Company>;

  constructor(private firestore: AngularFirestore) {
    this.companiesCollection = this.firestore.collection('companies');
  }

  addCompany(company: Company) {
    let addeddCompany = this.companiesCollection?.add(company);
    return from(addeddCompany);
  }

  getCompanies(): Observable<Company[]>{
    return this.companiesCollection.valueChanges();
  }

  getCompanyByName(companyName: string){
    return this.companiesCollection.doc(companyName).valueChanges();
  }

  deleteCompany(companyName: string){
    return from(this.companiesCollection.doc(companyName).delete());
  }

  updateCompany(companyName: string, company: Company){
    return from(this.companiesCollection.doc(companyName).update({...company}));
  }
}
